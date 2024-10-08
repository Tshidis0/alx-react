import React from "react";
import {  StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
    AppBody: {
        padding: '36px 24px',
        '@media (max-width: 900px)': {
            padding: '12px 8px'
        },
        input: {
            margin: '0 16px 0 8px'
          }
    },
    button: {
        width: '20px',
        height: '20px',
        backgroundColor: 'white',
        border: '1px solid yellow',
        borderRadius: '0',
        ':hover': {
          borderColor: 'yellow'
        }
    }
});

function Login() {
    return (
        <>
            <div className={css(styles.AppBody)}>
                <p>Login to access the full dashboard</p>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email"  className={css(styles.AppBody.input)} />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password"  className={css(styles.AppBody.input)}/>
                <button className={css(styles.button)}>OK</button>
            </div>
        </>
    )
}

export default Login;
