import React, { Suspense, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import "./styles/index.scss"
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { Aboutpage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

export const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/about' element={<Aboutpage/>} />
            <Route path='/' element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
