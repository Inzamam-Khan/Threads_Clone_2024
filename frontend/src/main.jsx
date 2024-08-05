import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ChakraProvider, ColorModeScript, extendTheme} from "@chakra-ui/react"
import {mode} from '@chakra-ui/theme-tools'
import {BrowserRouter} from 'react-router-dom'

// import './index.css'



const styles={
  global:(props)=>({
    body:{
      color:mode('gray.800','whiteAlpha.900')(props),
      bg:mode('gray.100','gray.800')(props),
    }
    }
   )
}

const colors={
  gray:{
    light:'#616161',
    dark:'#1e1e1e',
  }
}

const config={
  initialColorMode:'dark',
  useSystemColorMode:false
}


const theme=extendTheme({
  styles,
  colors,
  config
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <App/>
  </ChakraProvider>
  </BrowserRouter>
    
  
)
