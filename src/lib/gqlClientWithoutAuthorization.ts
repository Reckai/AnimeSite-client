import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { AwesomeGraphQLClient, GraphQLRequestError } from 'awesome-graphql-client'
import { GraphQLError } from 'graphql';
import { print } from 'graphql/language/printer'

export const getClientWithoutAuthorization = ()=> {
    return new AwesomeGraphQLClient({
        
      endpoint: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
      formatQuery: (query: TypedDocumentNode) => print(query),
      fetchOptions:{
        credentials: 'include',
      headers: {
        
      }
      }  
    })
  }

  