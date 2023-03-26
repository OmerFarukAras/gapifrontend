import {Card, Grid, TextInput, Title, Button, Text} from "@tremor/react";
import {AtSymbolIcon, LockClosedIcon, MailOpenIcon} from "@heroicons/react/outline";
import {useState} from "react";
import {registerSchema} from "../../schemas/register.schema";

export default function Login() {

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const [usernameInput, setUsernameInput] = useState("");

    const [passwordInput, setPasswordInput] = useState("");

    const [mailInput, setMailInput] = useState("");

    const [error, setError] = useState("");

    function handleLogin() {
        //setButtonDisabled(true)
        registerSchema.validate({name: usernameInput, email: mailInput, password: passwordInput}).then(async () => {

            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: new URLSearchParams({
                    'username': usernameInput,
                    'password': passwordInput,
                    'email': mailInput
                })
            };

            let response = await fetch('http://localhost:8080/user/register', requestOptions).catch(e => {
                setError(e.toString())
                console.log("error " + e);
                setButtonDisabled(false)
            })

            response = await response.json()
            if (response.error) {
                setButtonDisabled(false)
                return setError(response.error)
            }
            sessionStorage.setItem("token", response.token)
            console.log(response.token)
            window.location.reload(true)
        }).catch(e => {
            setError(e.toString())
            console.log("error u " + e);
            setButtonDisabled(false)
        })
    }

    return (
        <Grid
            numColsLg={3}
            className="mt-6 gap-6"
        >
            <div></div>
            <Card>
                <Title>Login Form</Title>
                <Grid
                    numColsLg={1}
                    className="mt-6 gap-6"
                >

                    <TextInput
                        value={usernameInput}
                        onChange={(e) => setUsernameInput(e.target.value)}
                        placeholder={"Username"}
                        icon={AtSymbolIcon}
                    />
                    <TextInput
                        value={mailInput}
                        onChange={(e) => setMailInput(e.target.value)}
                        placeholder={"Mail"}
                        icon={MailOpenIcon}
                    />
                    <TextInput
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        placeholder={"Password"}
                        icon={LockClosedIcon}
                    />
                    <Button size="xl" disabled={buttonDisabled} onClick={() => handleLogin()}>
                        Register
                    </Button>
                    <Text color={"indigo"}>
                        {error}
                    </Text>
                </Grid>
            </Card>

            <div></div>
        </Grid>
    );
}


