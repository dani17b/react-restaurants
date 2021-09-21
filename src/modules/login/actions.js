import { Config } from "../../config/Config"

export const loginUser = (login, password) => {
    return fetch(Config.backendBaseUrl + '/login', {
        method : 'post',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            login,
            password
        })
    }).then(response  => response.json())
}