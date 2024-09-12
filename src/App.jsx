import { AppRouter } from './components/AppRouter/AppRouter'
import './App.scss'
import { Navbar } from './components/Navbar/Navbar'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {


  return (
    <>
      <Navbar></Navbar>
      
      <AppRouter></AppRouter>
      <Footer></Footer>
    </>
  )
}

export default App
