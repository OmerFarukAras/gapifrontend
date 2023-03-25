import {useState} from "react";
import {Tab, TabList} from "@tremor/react";

import LoginView from "./login";
import RegisterView from "./register";

import {useNavigate} from "react-router-dom";

export default function Login({user}) {
    const navigate = useNavigate();
    const [selectedViewAuth, setSelectedViewAuth] = useState("1");
    if (user) {
        return navigate("/")
    }
    return (
        <div>
            <TabList
                defaultValue="1"
                onValueChange={(value) => setSelectedViewAuth(value)}
                marginTop="mt-6"
            >
                <Tab value="1" text="Login"/>
                <Tab value="2" text="Register"/>
            </TabList>

            {selectedViewAuth === "1" ? (
                <LoginView/>
            ) : (
                <div>
                    <RegisterView/>
                </div>
            )}
        </div>
    );
}

