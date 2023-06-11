import React from 'react';

const Login = () => {
    const handleKeyPress = (event) => {
       
    };
    
    const handleLogin = () => {
    
    };

    return (
        <div className="bg-gradient-to-r from-lime-300 to-green-400 min-h-screen min-w-screen flex justify-center items-center">
            <div className="form border rounded-lg shadow-lg flex overflow-hidden m-4">
                <div className="right bg-blue-900 h-400 w-300 text-lime-300 flex flex-col justify-center items-center gap-5">
                <h2 className="text-lime-300">Login Account</h2>
                <input id="user" type="text" placeholder="User ID" className="outline-none bg-blue-800 border-none text-lime-300 border-l-2 p-4 border-b-1" />
                <input onKeyPress={handleKeyPress} id="pass" type="password" placeholder="Password" className="outline-none bg-blue-800 border-none text-lime-300 border-l-2 p-4 border-b-1" />
                <p className="passerror text-lime-300"></p>
                <button onClick={handleLogin} className="r mt-10 font-bold bg-blue-900 border border-transparent w-44 p-3 rounded-md hover:bg-transparent hover:border-blue-900 hover:text-lime-300">LOGIN</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
