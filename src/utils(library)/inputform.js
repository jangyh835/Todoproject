import React, { useState, useCallback } from "react";
// import { Dummy } from "../asset/accountdata.json";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [loginInput, setLoginInput] = useState({
        email: "",
        password: ""
    });
    const Navigate = ({ loginInput }) => useNavigate('./accountdata', { state: { ID: loginInput.email, PW: loginInput.password } });

    function handleSubmit(e) {
        e.preventDefault();// 버튼만 누르면 리프레시 되는것을 막아줌
        console.log(loginInput);
    };

    function handleInputChange(field, e) {
        setLoginInput((prevState) => ({
            ...prevState,
            [field]: e.target.value,
        }));
    };




    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={loginInput.email}
                    placeholder="xxxx@xxx.com"
                    onChange={(e) => handleInputChange("email", e)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={loginInput.password}
                    placeholder="password"
                    onChange={(e) => handleInputChange("password", e)}
                />
                <p>{loginInput.password}</p>
            </div>
            <button type="submit" onClick={() => Navigate({ loginInput })}>Login</button>
        </form>
    );
};