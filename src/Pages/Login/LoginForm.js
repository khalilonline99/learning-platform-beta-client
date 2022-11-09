import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';



const LoginForm = () => {
  const [errors, setErrors] = useState('');
  const { signIn, providerLogin } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/';

  const handleLoginForm = (evt) => {
    evt.preventDefault();
    const form = evt.target
    const email = form.email.value
    const password = form.password.value

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        form.reset();
        navigate(from, { replace: true });
        setErrors('');

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        setErrors(errorMessage)
      });

  };



  const googleProvider = new GoogleAuthProvider()
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(err => console.error(err))
  }

  const GithubProvider = new GithubAuthProvider();
  const handleGithubSignIn = () => {
    providerLogin(GithubProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch ((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    setErrors(errorMessage)
    })

  }

return (
  <div>
    <form className="flex flex-col mx-auto items-center my-12" onSubmit={handleLoginForm}>
      <section className="w-1/2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className={'border mb-2 py-2 px-3 rounded text-gray-700 w-full'}
          name="email"
          type="text"
          placeholder="e.g. Your email address"
        />

      </section>
      <section className="w-1/2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className={'border mb-2 py-2 px-3 rounded text-gray-700 w-full'}
          name="password"
          type="password"
          placeholder="* * * * * * * *"

        />

      </section>
      <section className="w-1/2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:border-none" type='submit'>
          Sign in
        </button>

        {
          errors ?
            <div className="alert alert-error shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{errors}</span>
              </div>
            </div>
            :
            <p></p>
        }

      </section>

      <section>
        <p>Don't have an account? Please <Link to='/register' className="link link-secondary">Register Here</Link></p>
      </section>
    </form>


    <section className="w-1/4 mx-auto">
      <button onClick={handleGithubSignIn} className="w-4/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:border-none">
        <span className='flex items-center justify-around'><p>Sign in with Google</p> <FaGoogle /></span>
      </button>
    </section>
    <section className="w-1/4 mx-auto">
      <button onClick={handleGoogleSignIn} className="w-4/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 my-5 rounded focus:border-none">
        <span className='flex items-center justify-around'><p>Sign in with GitHub</p> <FaGithub /></span>
      </button>
    </section>
  </div>
);
}

export default LoginForm;