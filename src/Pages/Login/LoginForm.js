import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleLoginForm = (evt) => {
    evt.preventDefault();

    setErrors(errors => ({ ...validateCredentials(credentials) }));
  };

  const validateCredentials = (credentials) => {
    let errors = {};

    if (credentials.username === '') {
      errors = Object.assign(errors, {
        username: 'This field is required',
      });
    }

    if (credentials.password === '') {
      errors = Object.assign(errors, {
        password: 'This field is required',
      });
    }

    return errors;
  }

  const handleInputChange = (evt) => {
    evt.persist()
    setCredentials(credentials => ({ ...credentials, [evt.target.name]: evt.target.value }));
  }
  
  const googleProvider = new GoogleAuthProvider()
  const {providerLogin} = useContext(AuthContext)
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
    .then(result=> {
      const user = result.user;
      console.log(user);
    })
    .catch(err => console.error(err))
  }

  return (
    <div>
      <form className="flex flex-col mx-auto items-center my-12" onSubmit={handleLoginForm.bind(this)}>
      <section className="w-1/2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Email
      </label>
        <input
          id="username"
          className={'border mb-2 py-2 px-3 rounded text-gray-700 w-full focus:bg-primary ' + (errors.hasOwnProperty('username') ? "border-red-500" : '')}
          name="username"
          type="text"
          placeholder="e.g. Your email address"
          value={credentials.username}
          onChange={handleInputChange.bind(this)}
        />
        {errors.hasOwnProperty('username') &&
          <p class="text-red-500 text-xs italic">{errors.username}</p>
        }
      </section>
      <section className="w-1/2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
      </label>
        <input
          id="password"
          className={'border mb-2 py-2 px-3 rounded text-gray-700 w-full focus:bg-primary ' + (errors.hasOwnProperty('password') ? "border-red-500" : '')}
          name="password"
          type="password"
          placeholder="* * * * * * * *"
          value={credentials.password}
          onChange={handleInputChange.bind(this)}
        />
        {errors.hasOwnProperty('username') &&
          <p class="text-red-500 text-xs italic">{errors.username}</p>
        }
      </section>
      <section className="w-1/2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:border-none">
          Sign in
      </button>
      </section>


    </form>
      <section className="w-1/2 mx-auto">
        <button onClick={handleGoogleSignIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 mt-3 rounded focus:border-none">
          Sign in with Google
      </button>
      </section>
    </div>
  );
}

export default LoginForm;