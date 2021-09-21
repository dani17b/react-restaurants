import { useState, useEffect } from 'react';
import { loginUser } from './actions';
import './login.css';

export const Login = () => {

    const [form, setForm] = useState({
        login: '',
        password: ''
    })

    /* useEffect(() => {
        loginUser("pepe", "1234").then(userInfo => console.log(userInfo));
    }); */

    console.log(form);

    const updateValue = (e, key) => {
        setForm({
            ...form,
            [key]: e.target.value
        })
    };


    return (
        <div className="login">
            Esto es la pantalla de Login
            <form onSubmit={(e) => {
                loginUser(form.login, form.password).then(userInfo => {
                    debugger;
                });
                e.stopPropagation();
                e.preventDefault();

                return false;
            }}>
                <input type="text" placeholder="Login" value={form.login} onChange={(e) => updateValue(e, 'login')} />
                <input type="password" placeholder="Password" value={form.password} onChange={(e) => updateValue(e, 'password')} />
                <button>Login</button>
            </form>
        </div>
    )
}