import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import getUser from "../util/getUser";
import {useEffect, useState} from "react";

export default function Home() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUser(setUser)
    }, [])
    console.log(user)
    return (
        <main className="bg-slate-50 p-6 sm:p-10">
            <Header user={user}></Header>

            <Outlet user={user}/>
        </main>
    );
}