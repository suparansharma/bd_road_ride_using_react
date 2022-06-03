import React from 'react';

const Login = () => {
    return (
        <div>
             
            <div className="registrationArea">
            <h2>Create An Account</h2>
            <form action="">
                <input type="text" name="name" id="" placeholder='Enter Your Name' required /><br />
                <input type="text" name="email" id="" placeholder='Enter Your Email' required /><br />
                <input type="password" name="password" id="" placeholder='Enter Your Password' required /><br />
                <input type="submit" value="Submit" />
            </form>
            

            </div>
        </div>
    );
};

export default Login;