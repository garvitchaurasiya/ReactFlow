import React from 'react'
import HeroSection from './components/HeroSection'
import { CookiesProvider } from 'react-cookie';

const App = () => {
  return (
    <CookiesProvider>
      <HeroSection/>
    </CookiesProvider>
  )
}

export default App