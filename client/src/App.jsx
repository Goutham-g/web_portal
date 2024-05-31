import { useContext } from 'react';
import Navbar from './components/Header';
import Signup2 from './components/Signup2';
import CommentPage from './pages/CommentPage';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

import { Navigate, Route, Routes } from 'react-router-dom';
import { authContext } from './context/authContext';

function App() {
 
  const {user}=useContext(authContext)
  
  
  return (


    <>
<Navbar></Navbar>
    <Routes>
          <Route path='/' element={user? <Home />   :<Login></Login>}  ></Route>
          <Route path='signup' element={user? <Home />   :<Signup></Signup>}  ></Route>
          <Route path='signup2' element={ user? <Home />   :<Signup2></Signup2>}  ></Route>
          <Route path='/comments/:photoId' element={ user ? <CommentPage />   :<Login></Login>}  ></Route>
          <Route path="*" element={<Navigate to="/"  />} />
          

    </Routes>
      
    </>
  )
}

export default App
