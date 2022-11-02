import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CoursesAll from '../../components/CoursesAll/CoursesAll';
import Main from '../../layout/Main';
import Blog from '../../Pages/Blog/Blog';
import Courses from '../../Pages/Courses/Courses';
import Faq from '../../Pages/Faq/Faq';
import Home from '../../Pages/Home/Home';


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
                path: '/courses',
                element: <Courses></Courses>,
                children: [
                    {
                        path: '/courses',
                        element: <CoursesAll></CoursesAll>
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
            }
        ]
    }
])