import React from 'react';

const Login = () => {
    const handleKeyPress = (event) => {
       
    };
    
    const handleLogin = () => {
    
    };

    return (
        <div className="min-w-screen flex justify-center items-center">
            <div className="rounded-lg shadow-lg flex overflow-hidden m-4">
                <div className="p-4 bg-white border h-400 w-30 flex flex-col justify-center items-center gap-5">
                    <h2 className="font-bold text-xl">Login Account</h2>
                    <input id="user" type="text" placeholder="User ID" className="outline-none border-non border p-4" />
                    <input onKeyPress={handleKeyPress} id="pass" type="password" placeholder="Password" className="border outline-none p-4" />
                    <p className="passerror"></p>
                    <button onClick={handleLogin} className="r mt-10 font-bold bg-blue-900 text-white border border-transparent w-44 p-3 rounded-md hover:bg-transparent hover:border-blue-900 hover:text-lime-300">LOGIN</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
