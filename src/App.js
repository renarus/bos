import React,{useEffect,useState} from 'react'
import Navbar from './Navbar'
import Users from './Users'
import Posts from './Posts'
import Comments from './Comments'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Aos from 'aos';
// import 'aos/dist/aos.css';
const App = () => {
  useEffect(()=>{
    Aos.init({duration:2000 });
  }, []);
  const[darkMode, setDarkMode] = useState(true);
  return (
    <BrowserRouter>
  
      <Navbar/>
  <Routes>
   <Route exact path='/' element={<Users/>}></Route>
   <Route path='/posts' element={<Posts/>}></Route>
   <Route path='/comments' element={<Comments/>}></Route>
   </Routes>
   
   </BrowserRouter>
  )
}

export default App