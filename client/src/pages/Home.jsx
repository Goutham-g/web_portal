import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { authContext } from '../context/authContext';
import { format, isValid, parseISO } from 'date-fns'
// import convertDateToWords from '../utils/dateToText';
import {ToWords} from 'to-words'
import Photos from '../components/Photos';
import Gallery from '../components/Gallery';



function Home() {
const{user,fetchPhotos,photos}=useContext(authContext)
console.log("allUser",user);

// const userr={
//   gname:"Akill",
//   sname:"Arytra"

// }

const convertDateToWords = (dateString) => {
  const date = parseISO(dateString);
  if (!isValid(date)) {
      return 'Invalid date';
  }
  return format(date, "MMMM do, yyyy");
};
const toWords = new ToWords({
  localeCode: 'en-US', 
});
;
useEffect(() => {
  fetchPhotos()

 
}, [fetchPhotos])
if (!user) {
  return <div>Loading...</div>;
}

  return (
    
    <div>
      
   
    
        <div className="relative bg-opacity-50   text-center text-white ">
            <img  src="https://i.postimg.cc/dt2XWnvN/couple-walk-through-natural-floral-arbor-ed-peers-photography.jpg" alt="Couple" className="w-full h-auto  " />
            <div className="absolute  inset-0 flex flex-col items-center justify-center space-y-4 ">
              <p className='lg italic'>TOGETHER</p>
              <p className="text-xl italic">WITH THEIR PARENTS</p>
                <h1 className="text-4xl font-bold italic">{user.gname} </h1>
                <div class="inline-flex items-center  justify-center w-full">
    <hr class="w-36 h-0.5 m-8 bg-white border-1 "/>
    <span class="italic  absolute px-3 font-medium text-white -translate-x-1/2 left-1/2 ">And</span>
    <hr class="w-36 h-0.5 m-8 bg-white border-1 "/>
</div>
<h1 className="text-4xl font-bold italic">{user.sname} </h1>
                <p className="text-xl italic">Invite you to their wedding</p>
                <p className="text-lg italic">{user.date ? convertDateToWords(user.date) : 'Date not available'}</p>
                <p className="text-lg italic">at {user.startTime} 'o' Clock in the morning</p>
                <p className="text-lg italic">{user.venue}</p>
                {/* <div className="mt-4">
                    <a href={details.googleMapLink} className="text-blue-500 underline">View on Google Maps</a>
                </div> */}
            </div>
            <div>
            {/* <Button className='w-48 text-white bg-amber-900 border-amber-900' >Secondary</Button>{' '} */}
            </div>


        </div>

  {/* venue details */}

        <div className='mx-2 mt-2 mr-6 mb-5 w-auto '>
          <Card className='bg-gray-100'  >
                <Card.Body>
          <Card.Title className='text-amber-900 text-center'>VENUE DETAILS</Card.Title>
          <Container fluid="md">
      <Row>
        <Col xs={4}  ><img className='h-24 w-52' src="https://i.postimg.cc/pLh5wKDw/png-transparent-wedding-computer-icons-marriage-party-wedding-love-angle-white-thumbnail-removebg-pr.png" alt="" srcset="" /></Col>
        <Col xs={8} >   
         <Card.Text className="mt-3 text-muted">Time : {user.startTime} am to {user.endTime} pm</Card.Text>
         <Card.Text className=" mt-1 text-muted">Date : {user.date ? convertDateToWords(user.date) : 'Date not available'}</Card.Text>
         <Card.Text className="mt-1 text-muted">Hall : {user.venue}</Card.Text>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
          </Col>

      </Row>
    </Container>
    <Container>
      <Row className='mt-2'>
        <Col><a href={user.gMapLink}><Button  className='w-48 text-amber-900 border-amber-900' variant="outline-secondary">Direction</Button></a></Col>
        <Col><Button className='w-48 text-amber-900 border-amber-900' variant="outline-secondary">Parking</Button></Col>
      </Row>
    </Container>
  
      
                </Card.Body>
              </Card>
        
        </div>

{/* photo upload */}

        <div>
          <Gallery></Gallery>
          <Photos></Photos>
         </div>




      </div>
  )
}

export default Home