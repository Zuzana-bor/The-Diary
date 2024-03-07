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
    <div>
      <section>
        <h1>Welcome </h1>
        <p>Login or create an account to continue</p>
        <div>
          <button
            onClick={() => {
              setLoginType('login');
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setLoginType('signup');
            }}
          >
            Signup
          </button>
        </div>
        <form>
          <div>
            <label>Email</label>
            <input
              onChange={(e) => {
                handleCredentials(e);
              }}
              type="text"
              name="email"
              placeholder="Enter yourt email"
            />
          </div>
          <div>
            <label>Password *</label>
            <input
              onChange={(e) => {
                handleCredentials(e);
              }}
              type="password"
              name="password"
              placeholder="Enter yourt password"
            />
          </div>
          {loginType === 'login' ? (
            <button
              onClick={(e) => {
                handleLogin(e);
              }}
            >
              Login
            </button>
          ) : (
            <button
              onClick={(e) => {
                handleSignup(e);
              }}
            >
              SignUp
            </button>
          )}

          {error && <div className="error">{error}</div>}

          <p className="forgot-password">Forgot Password?</p>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
