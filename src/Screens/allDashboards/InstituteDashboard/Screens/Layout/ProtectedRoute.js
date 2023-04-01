import { checkActionCode } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckAuthentication } from "../../../../Firebase/Config/FirebaseMethods";



function ProtectedRoutes({ Component }) {

    const navigate = useNavigate()
    const [loader, setloader] = useState(false)

    useEffect(() => {
        CheckAuthentication()
            .then((uid) => {
                console.log(uid, 'user Logged in')
            })
            .catch((err) => {
                console.log(err)
                navigate('/login')
            })
    }, [])

    return <>
        {loader ? <h1>loading...</h1> : <Component />}
    </>
}



export default ProtectedRoutes;