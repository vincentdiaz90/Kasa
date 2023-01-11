import Header from './Components/Header/Header'
import Home from './Containers/Home/Home'
import About from './Containers/About/About'
import LogementSimple from './Containers/LogementSimple/LogementSimple'
import Error404 from './Containers/Error404/Error404'
import Footer from './Components/Footer/Footer'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      < Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nous-concernant" element={<About />} />
        <Route path="/logements/:slug" element={<LogementSimple />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      < Footer/>
    </>
  );
}

export default App;