import { Link, Route, Routes } from 'react-router-dom'
import "./styles/index.scss"
import { Suspense, useContext, useState } from 'react'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { AppRouter } from './providers/router'

export enum Theme {
  LIGHT = 'light',
  DARK = "dark"
}

const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>SetTheme</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <AppRouter/>
    </div>
  )
}

export default App