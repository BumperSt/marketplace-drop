import { useContext, useEffect } from 'react'
import Router from 'next/router'
import UserContext from 'context/userContext'
import { LoadingPage } from '../LoadingPage/loadingPage'

const withAuth = Page => {
    const Auth = (props) => {
        const {user} = useContext(UserContext)

        useEffect(()=>{
            if(!user){
                Router.push('/')
            }
        },[user])

        if(user){
            return <Page {...props} />
        }else{
            return <LoadingPage/>
        }
    }

    if (Page.getInitialProps) {
        Auth.getInitialProps = Page.getInitialProps;
    }

    return Auth
}


export default withAuth