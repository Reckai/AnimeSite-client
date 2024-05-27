
import { authExchange } from "@urql/exchange-auth";
import { cacheExchange, createClient, fetchExchange, gql } from "@urql/next";
import { cookies } from "next/headers";
import { registerUrql } from "@urql/next/rsc";
import { graphql } from "@/gql/gql";



const makeClient = () => {
    return createClient({
      url: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/graphql",
      exchanges: [
        cacheExchange,
        fetchExchange
      ],
      fetchOptions: () => {
        return {         
          credentials: "include",
          headers: {
            authorization: `Bearer ${cookies().get("access-token")?.value || ""}`,
          },
          
        };
      },
    });
  };
  export const { getClient } = registerUrql(makeClient);