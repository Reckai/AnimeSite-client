'use client'
import React from 'react';
import Link from "next/link";
import { useMutation, useQuery } from '@apollo/client';
import { GET_USER_DATA, LOGOUT, REFRESH_TOKEN } from '@/app/api/routes/Mutations/Mutations';
import Button from '../Button/Button';
import { AuthContext } from '@/app/context/authcontext/authContext';
type HeaderProp ={
    styles?: string
}
const Header = ({styles}: HeaderProp) => {
    const [user, setUser] = React.useState('')
    const authContext = React.useContext(AuthContext)
    const [logout,{data}] = useMutation(LOGOUT)
    
    console.log(data)

    const handleLogout = async() => {
        await logout()
        localStorage.setItem('accessToken', '')
        localStorage.setItem('refreshToken','')
        authContext.isAuthenticated = false
        authContext.user = null
        
        console.log(authContext.isAuthenticated)
    }
    console.log(authContext.isAuthenticated)
    React.useEffect(() => {
        if(authContext.isAuthenticated){
            setUser(authContext.user?.name as string)
        }
        
    }, [authContext.user?.name, authContext.isAuthenticated])

    return (<header
            className={`header   items-center  absolute left-0 top-0 z-20 ${styles ? styles : "bg-header"}  w-full p-4 text-2xl h-14 w-100% text-black dark:text-white
 `}>
        <div className={'relative items-center flex  h-full justify-between'}>
            <nav className="font-sans font-medium ">
                <h1>
                    <Link href={'/'}>
                        K.a.t.r.o
                    </Link>
                </h1>
            </nav>
            <nav>
                {
                    authContext.isAuthenticated  ? <span onClick={()=> handleLogout()} className='text-white font-sans font-medium' >
                        
                        {
                            user
                        }
                        
                    </span> : <Link href={'/auth'}>
                        
                            Login
                        
                    </Link>
                }
            </nav>
        </div>
    </header>);
};

export default Header;
