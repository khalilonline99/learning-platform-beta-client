import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext)

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

    return (
        <div className='container mx-auto'>
            <form onSubmit={handleSubmit} className='container mx-auto'>
                <section className="w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        your name
                    </label>
                    <input
                        id="username"
                        className={'border mb-2 py-2 px-3 rounded text-gray-700 w-full focus:bg-primary '}
                        name="name"
                        type="text"
                        placeholder="e.g. Your Full Name" />
                </section>

                <section className="w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="username"
                        className={'border mb-2 py-2 px-3 rounded text-gray-700 w-full focus:bg-primary '}
                        name="email"
                        type="text"
                        placeholder="e.g. Your email address" />
                </section>

                <section className="w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        password
                    </label>
                    <input
                        id="username"
                        className={'border mb-2 py-2 px-3 rounded text-gray-700 w-full focus:bg-primary '}
                        name="password"
                        type="password"
                        placeholder="e.g. Your password" />
                </section>

                <section className="w-1/2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:border-none">
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