export default function GetUser(setUser) {
    let token = sessionStorage.getItem("token")
    if (!token) return setUser(null)
    const requestOptions = {
        method: 'POST', headers: {'Content-Type': 'application/x-www-form-urlencoded'}, body: new URLSearchParams({
            'Authorization': 'Bearer ' + token
        })
    };
    fetch('http://localhost:8080/user', requestOptions)
        .then(x => x.json())
        .then(x => {
            if (x.error) return setUser(null)
            x.token = token
            setUser(x)
        })
        .catch(e => {
            setUser(null)
            console.log("error " + e);
        })
}