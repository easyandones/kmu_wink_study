const SERVER_ROOT = "https://react-js-sample-api.kmuwink.net";

export async function getToken(username, password) {
    const response = await fetch(SERVER_ROOT + "/api-token-auth/", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    });
    return response;
}

export async function createAccount(username, password, lastName, firstName, email) {
    const response = await fetch(SERVER_ROOT + "/user/", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password,
            last_name: lastName,
            first_name: firstName,
            email: email
        })
    });
    return response;
}

export async function readAccount(token) {
    const response = await fetch(SERVER_ROOT + "/user/",{
        method: "GET"
    })
    const responseData = await response.json();
    var profile = responseData.find(obj => {
        return obj.username === window.sessionStorage.getItem("login")
    })
    const propsData = {
        username: profile.username,
        lastName: profile.last_name,
        firstName : profile.first_name,
        email: profile.email
    }
    return propsData;
}