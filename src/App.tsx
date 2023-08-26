import React, { Suspense, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import "./styles/index.scss"
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { AbouMainPageAsync } from './pages/MainPage/MainPage.async'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

export const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/about' element={<AboutPageAsync />} />
            <Route path='/' element={<AbouMainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}
