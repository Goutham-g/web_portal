import Signup2 from './components/Signup2';
import CommentPage from './pages/CommentPage';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
 

  return (
    <>

    <Routes>
          <Route path='/' element={<Login></Login>}  ></Route>
          <Route path='home' element={ <Home></Home>}  ></Route>
          <Route path='signup' element={ <Signup></Signup>}  ></Route>
          <Route path='signup2' element={ <Signup2></Signup2>}  ></Route>
          <Route path='/comments/:photoId' element={ <CommentPage></CommentPage>}  ></Route>
          <Route path="*" element={<Navigate to="/"  />} />
          

    </Routes>
      
    </>
  )
}

export default App
