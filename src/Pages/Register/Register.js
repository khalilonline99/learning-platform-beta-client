import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext)
    const [termsAccept, SetTermsAccept] = useState(false)
    const [confirmPass, SetConfirmPass] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset()
                setError('')
            })
            .catch(err => {
                setError(err.message)
                console.error(err)
            })
    }

    const handleAccepted = (event) => {
        SetTermsAccept(event.target.checked);
    }

    const handlePass = event => {

    }

    const handleConfirmPass = event => {
        console.log(event);
        const form = event.target;
        const password = document.getElementById('password').value;
        const confimPasswordById = document.getElementById('confirmPassword').value;
        console.log(password);
        // const confirmPassword = event.confirmPassword.value

        if(confimPasswordById === password){
            SetConfirmPass(true)
            console.log('pass matched');
        }
        else{
            console.log('password not matched');
            SetConfirmPass(false)
        }

    }

    return (
        <div className='container mx-auto'>
            <form onSubmit={handleSubmit} className='container mx-auto'>
                <section className="w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Your Name
                    </label>
                    <input
                        
                        className={'border mb-2 py-2 px-3 rounded text-gray-700 w-full'}
                        name="name"
                        type="text"
                        placeholder="e.g. MR. AKASH" />
                </section>

                <section className="w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        
                        className={'border mb-2 py-2 px-3 rounded text-gray-700 w-full'}
                        name="email"
                        type="text"
                        placeholder="e.g. user@email.com" />
                </section>

                <section className="w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        onBlur={handlePass}
                        id='password'
                        className={'border mb-2 py-2 px-3 rounded text-gray-700 w-full'}
                        name="password"
                        type="password"
                        placeholder="Your password" />
                </section>

                <section className="w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        onBlur={handleConfirmPass}
                        id='confirmPassword'
                        className={'border mb-2 py-2 px-3 rounded text-gray-700 w-full'}
                        name="confirmPassword"
                        type="password"
                        placeholder="Repeat the password" />
                </section>

                <section>
                    <div class="form-check">
                        <input onClick={handleAccepted} class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                Accept Terms and Conditions
                            </label>
                            </div>
                        </section>

                        <section className="w-1/2 mt-3">
                            <button type="button" className="bg-blue-500 text-white font-bold py-2 px-12 rounded focus:border-none disabled:opacity-25" disabled={(confirmPass && termsAccept) ? false : true}>
                                Register
                            </button>

                            {
                                error ?
                                    <div className="alert alert-error shadow-lg">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span>{error}</span>
                                        </div>
                                    </div>
                                    :
                                    <p></p>
                            }
                        </section>
                    </form>
                </div>
                );
};

                export default Register;