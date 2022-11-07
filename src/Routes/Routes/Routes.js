import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CourseDetails from '../../components/CourseDetails/CourseDetails';
import CoursesAll from '../../components/CoursesAll/CoursesAll';
import CourseTotal from '../../components/CourseTotal/CourseTotal';
import Main from '../../layout/Main';
import Blog from '../../Pages/Blog/Blog';
import Courses from '../../Pages/Courses/Courses';
import Faq from '../../Pages/Faq/Faq';
import Home from '../../Pages/Home/Home';
import LoginForm from '../../Pages/Login/LoginForm';
import Register from '../../Pages/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Courses></Courses>,
                children: [
                    {
                        path: '/course',
                        element: <CourseTotal></CourseTotal>,
                        loader: () => fetch('http://localhost:5000/course')
                    }
                ]
            },
            {
                path: '/course/:id',
                element: <Courses></Courses>,
                children: [
                    {
                        path: '/course/:id',
                        element: <CoursesAll></CoursesAll>,
                        loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
                    },
                    {
                        path: '/course/:id/details',
                        element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                        loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)   
                    }
                ]
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <LoginForm></LoginForm>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])