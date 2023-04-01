import React from "react";
import app from "./FirebaseConfig";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
}
    from "firebase/auth";

import {
    getDatabase,
    set, ref, onValue, push,
}
    from "firebase/database";



const auth = getAuth(app)
const db = getDatabase(app)

function LoginUser(obj) {

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then((res) => {
                const reference = ref(db, `Users/${res.user.uid}`)
                onValue(reference, (userData) => {
                    if (userData.exists()) {
                        resolve(userData.val())
                    }
                    else {
                        reject('User Not Exist')
                        return <>
                            <span>User Not Found</span>
                        </>
                    }
                })
            })
            .catch((err) => {
                console.log(err)
            })
    })
}

function SignupUser(obj) {

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(
            auth, obj.email,
            obj.password,
            obj.username
        )
            .then((res) => {
                // sending data in database with id

                obj.id = res.user.uid;
                const reference = ref(db, `Users/${obj.id}`)

                // Now setting Data in Database 
                set(reference, obj)
                    .then((res) => {
                        resolve(res, "Data send and user Created")
                    })
                    .catch((err) => {
                        reject(err, "Unknown Error")
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    })
}

function CheckAuthentication() {

    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                resolve(uid)
            }
            else {
                reject()
            }
        })
    })
}

function LogOutFromDashboard() {
    return signOut(auth)

}


function PostDtInFB(nodename,obj,id,) {
    
    return new Promise((resolve, reject) => {
        if (id) {
            const reference = ref(db, `${nodename}/${id ? id : ""}/`)
            set(reference, obj)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        }
        else {
            let keyRef = ref(db, `${nodename}`);
            obj.id = push(keyRef).key

            let PostRef = ref(db, `${nodename}/${obj.id}`)
            set(PostRef, obj)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    })

}

export {
    LoginUser,
    SignupUser,
    CheckAuthentication,
    LogOutFromDashboard,
    PostDtInFB,
}