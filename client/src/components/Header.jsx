import { Fragment, useContext } from 'react'

import { authContext } from '../context/authContext'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Header = () => {

  const {user,logoutUser}= useContext(authContext)
  return ( 
   <>
    {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-gray-200  z-50">
          <Container fluid>
   
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
            className="bg-gray-200"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {
                  user?(
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link onClick={()=> logoutUser()} href="#action2" className="text-gray hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Logout</Nav.Link>
                </Nav>
                  ):(<p>PLease Login </p>)
                }
              
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
   
   </>
   );
}
 
export default Header;