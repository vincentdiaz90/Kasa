import Home from '../Containers/Home/Home'
import About from '../Containers/About/About'
import LogementSimple from '../Containers/LogementSimple/LogementSimple'
import Error404 from '../Containers/Error404/Error404'
import {Routes, Route} from 'react-router-dom'

export default function RouterPath() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/nous-concernant" element={<About />} />
    <Route path="/logements/:slug" element={<LogementSimple />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
  )
}
