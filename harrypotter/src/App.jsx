import { useState } from 'react'

import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/router'
import { Provider } from './contexts/CharactersContext'
import { Characters } from './pages/Characters/Characters'
import { Layout } from './components/Layout/Layout'
function App() {


  return (
    <>
   
    <RouterProvider router={router}>
      
    </RouterProvider>
   
    </>
  )
}

export default App
