import { auth } from '../src/firebase/config';
import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const LoginPage = () => {
  const [loginType, setLoginType] = useState('login');
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState('');

  const handleCredentials = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    console.log(userCredentials);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');
    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password,
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(error.message);
    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password,
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="relative flex items-center justify-center h-screen">
      <img
        src="src/assets/notebook.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        alt="notebook"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 flex flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="src/assets/mind.jpg"
            alt="Your Company"
          />
          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome
          </h1>
        </div>

        <p className="mt-10 text-center">
          Login or create an account to continue
        </p>
        <div className="m-5 text-center">
          <button
            onClick={() => {
              setLoginType('login');
            }}
            className="mx-5 p-3  border-2 border-slate-500 text-black focus:outline-none focus:bg-black focus:text-white "
          >
            Login
          </button>
          <button
            onClick={() => {
              setLoginType('signup');
            }}
            className=" border-2 border-slate-500
             mx-5 p-3  text-black focus:outline-none focus:bg-black focus:text-white "
          >
            Signup
          </button>
        </div>
        <form>
          <div className="m-3">
            <label className="mx-3 ">Email</label>
            <input
              className="border-2 border-slate-700 bg-inherit"
              onChange={(e) => {
                handleCredentials(e);
              }}
              type="text"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="mx-3 ">Password *</label>
            <input
              className="border-2 border-slate-700 bg-inherit"
              onChange={(e) => {
                handleCredentials(e);
              }}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          {loginType === 'login' ? (
            <button
              onClick={(e) => {
                handleLogin(e);
              }}
              className="mt-4 p-3 bg-indigo-500 text-white focus:outline-none focus:bg-indigo-700 focus:ring focus:ring-indigo-300"
            >
              Login
            </button>
          ) : (
            <button
              onClick={(e) => {
                handleSignup(e);
              }}
              className="mt-4 p-3 bg-indigo-500 text-white focus:outline-none focus:bg-indigo-700 focus:ring focus:ring-indigo-300"
            >
              SignUp
            </button>
          )}

          {error && <div className="error">{error}</div>}

          <p className="mt-2 text-center text-sm">Forgot Password?</p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
