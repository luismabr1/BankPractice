import styles from "./index.module.css";
import React, { useState } from "react";

const Login = () => {

    const [email, setName] = useState("");
    const [password, setEmail] = useState("");
    const handleSubmit = async (e) => {
        // Prevent the default browser behavior of reloading the page
        e.preventDefault();
        // Display the input values in an alert
        const result= await fetch(`http://localhost:3000/api/users`)
        alert(result);
      };

    return (
        <>
        <h1>INGRESO</h1>
        <form onSubmit={handleSubmit} className={styles.login}>
                <label htmlFor="name">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setName(e.target.value)}
                    />
            <label htmlFor="email">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setEmail(e.target.value)}
                    />
            <button type="submit">Submit</button>
        </form>  
        </>
    );
};

export default Login;


