'use client'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import 'dotenv/config'



const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL,
    cache: new InMemoryCache(),
  });


  const PageWrapper = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
  }

  export default PageWrapper