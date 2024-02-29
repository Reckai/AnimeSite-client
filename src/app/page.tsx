"use client"
import AnimeCard from "@/app/Components/AnimeCard/AnimeCard";
import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";
import { Anime } from "@/__generated__/graphql";
import Header from "./Components/Header/Header";
import React from "react";
import { AuthContext } from "./context/authcontext/authContext";
import { GET_USER_DATA, REFRESH_TOKEN } from "./api/routes/Mutations/Mutations";



const GET_ANIME = gql(
  `
  query AllAnimes {
    allAnimes {
      id
      name
      licenseNameRu
      description
      genres {
        id
        name
        russian
      }
      slug
      studios {
        id
        name
      }
      poster {
        id
        originalUrl
        previewUrl
      }
    }
  }
  `
)

export default function Home() {
  const authContext = React.useContext(AuthContext)
  const {loading, error, data} = useQuery(GET_ANIME)
    const {data: userData, loading: userDataLoading, error:userError} = useQuery(GET_USER_DATA,{
      onCompleted: (userData) => {
        console.log(userData)
        authContext.isAuthenticated = true
        authContext.user = {
          id: userData.me.id as string,
          name: userData.me.name as string,
          avatar: null
        }
      }
    })
 

    React.useEffect(() => {}, [])


  return (

    <main className=" mx-auto">
    <Header styles=" dark:bg-gradient-to-r dark:to-gradient-color-via  via-gradient-color-via-2 from-gradient-color-to border-b-2  dark:border-b-0"/>
     <div className={' mt-24 grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-6 gap-4'}>
          {
          data?.allAnimes.map((anime: Anime) => <AnimeCard id={anime.id} slug={anime.slug} description={anime.genres} poster={anime.poster[0]} title={anime.licenseNameRu}  key={anime.id}/>)
          }
     </div>
    </main>
  );
};
