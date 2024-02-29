'use client'
import {ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink, GraphQLRequest, FetchResult, Observable, ApolloLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import 'dotenv/config'
import { GraphQLError } from 'graphql/error/GraphQLError';
import { REFRESH_TOKEN } from './api/routes/Mutations/Mutations';
import { Mutation, MutationRefreshTokenArgs } from '@/__generated__/graphql';
import { onError } from "@apollo/client/link/error";
import { AuthContext } from './context/authcontext/authContext';



const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
  credentials: 'include',
});



function isRefreshRequest(operation: GraphQLRequest) {
  return operation.operationName === 'refreshToken';
}

// Returns accesstoken if opoeration is not a refresh token request
function returnTokenDependingOnOperation(operation: GraphQLRequest) {
  if (isRefreshRequest(operation))
    return localStorage.getItem('refreshToken') || '';
  else return localStorage.getItem('accessToken') || '';
}


const authLink = setContext((operation, { headers }) => {
  let token = returnTokenDependingOnOperation(operation);
  console.log('token', token)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

  const refreshToken = async () => {
    try {
      localStorage.removeItem('accessToken');
      const refreshResolverResponse = await client.mutate<Mutation>({
        mutation: REFRESH_TOKEN,
        variables: { token: localStorage.getItem('refreshToken') || '' },
      });
  
      const tokens = {
        accessToken: refreshResolverResponse.data?.refreshToken.token,
        refreshToken: refreshResolverResponse.data?.refreshToken.RefreshToken,
      }
      localStorage.setItem('accessToken', tokens.accessToken || '');
      localStorage.setItem('refreshToken', tokens.refreshToken || '');

      return tokens.accessToken;
    } catch (err) {
      throw err;
    }
  };
  
const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          case 'JWT_EXPIRED':
            console.log(operation.operationName, 'JWT_EXPIRED');
            // ignore 401 error for a refresh request
            if (operation.operationName === 'RefreshToken') return;

            const observable = new Observable<FetchResult<Record<string, any>>>(
              (observer) => {
                // used an annonymous function for using an async function
                (async () => {
                  try {
                    const accessToken = await refreshToken();
                    console.log('accessToken', accessToken);

                    if (!accessToken) {
                      throw new GraphQLError('Empty AccessToken');
                    }
                    operation.setContext({
                      headers: {
                        ...operation.getContext().headers,
                        authorization: `Bearer ${accessToken}`,
                      },
                    });

                    // Retry the failed request
                    const subscriber = {
                      next: observer.next.bind(observer),
                      error: observer.error.bind(observer),
                      complete: observer.complete.bind(observer),
                    };
                    console.log(observer)
                    forward(operation).subscribe(subscriber);
                  } catch (err) {
                    observer.error(err);
                  }
                })();
              }
            );

            return observable;
        }
      }
    }

    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
);
  const client = new ApolloClient({
    link: ApolloLink.from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache(),
  });
  const PageWrapper = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    return (
      <AuthContext.Provider value={{
        isAuthenticated: false,
        user:null
      }} >
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
        </AuthContext.Provider>
    )
  }

  export default PageWrapper
