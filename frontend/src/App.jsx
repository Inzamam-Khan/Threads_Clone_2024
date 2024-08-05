import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {Container,Box} from '@chakra-ui/layout'
import { Route, Routes } from 'react-router-dom'
import { UserPage } from './Pages/UserPage'
import { PostPage } from './Pages/PostPage'
import { Header } from './Components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
  <Container maxW={'container.md'} >
    <Header/>
      <Routes>
        <Route path='/:username' element={<UserPage/>}/>
        <Route path='/:username/:post/:postId'element={<PostPage/>}/>
      </Routes>
  </Container>
  
  )
}

export default App
