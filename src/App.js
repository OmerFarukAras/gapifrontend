import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomeView from "./pages/home";
import AuthView from "./pages/auth";
import NoPage from "./pages/404";

import Layout from "./components/Layout";
import {useEffect, useState} from "react";
import getUser from "./util/getUser";

export default function App() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUser(setUser)
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomeView user={user}/>}/>
                    <Route path="auth" element={<AuthView user={user}/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}