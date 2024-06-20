import { GraphQLClient } from 'graphql-request';
import { cookies } from 'next/headers';


export const getClient = () => {
  const token = cookies().get('access-token')?.value
    return new GraphQLClient(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000', {
      headers:{
      authorization: `Bearer ${token}`
      }
    });
  };
