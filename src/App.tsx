import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {ProfilePageAsync} from "./pages/ProfilePage/ProfilePage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";
import './styles/index.scss'

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>THEME</button>
            <Link to='/'>MAIN</Link>
            <Link to='/profile'>PROFILE</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/profile'} element={<ProfilePageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;