import { useCallback, useEffect, useState } from "react";
import { createContext } from "react";

import { useNavigate } from "react-router-dom";
import { addCommentApi, addLikeApi, commonRequest, fetchCommentsApi, fetchPhotoByIdApi, fetchPhotosApi, postRequest, uploadPhotosApi } from "../utils/services";
import { baseUrl } from "../utils/baseUrl";




 
export const authContext=createContext()


export const AuthContextProvider =({children})=>{

// state for register
    const navigate = useNavigate()
    const [user,setUser] =useState(""); // THIS TO STORE ALL the user
    const[registerError,setRegisterError]=useState(null)
    const[isRegisterLoading,setIsRegisterLoading]=useState(false)
    


    const [registerInfo , setRegisterInfo]=useState({
      
      gname:'',
      sname:'',
      venue: '',
      gMapLink: '',
      date:'',
      startTime: '',
      endTime:'',
        email:"",
        password:"",

     })
// console.log(registerInfo);

     // state for login

   const[loginError,setLoginError]=useState(null)
   

   const [loginInfo,setLoginInfo]=useState({
     
      email:"",
      password:"",
   })
  //  console.log("login",loginInfo);

   // fetch user from local storage

      useEffect(() => {
       const user=localStorage.getItem("User")
        setUser(user)
 
       }, [])


       //update register function
   const updateRegisterInfo = useCallback(
    (info) => {
      setRegisterInfo(info)
    }, [],
  )
//update login state
  const updateLoginInfo =useCallback((info)=>{
     setLoginInfo(info)
  })
  // update event function
  //update login state
//   const updatePhotos=useCallback((info)=>{
//     setPhotos(info)
//  })
        //Gallery management
 //fetch photo by id
 
        const [photos, setPhotos] = useState([]);
        const [selectedPhoto, setSelectedPhoto] = useState([]);
        const [likes,setLikes]=useState(0)
        const [comments,setComments]=useState([])


        const uploadPhotos = useCallback(async (files) => {
          try {
            const data = await uploadPhotosApi(files);
            setPhotos((prevPhotos) => [...prevPhotos, ...data]);

          } catch (error) {
            console.error('Failed to upload photos', error);
          }
        }, []);

  const fetchPhotos = useCallback(async () => {
    try {
      const user = JSON.parse(localStorage.getItem('User')); // Get the user object from local storage
    const email = user?.email; // Extract the email from the user object
  console.log("emailser",email);
    if (!email) {
      throw new Error('No email found in local storage');
    }
  
      const data = await fetchPhotosApi(email);
      setPhotos(data);
     ;
    } catch (error) {
      console.error('Failed to fetch photos', error);
    }
  }, []);
  const fetchPhotoById = useCallback(async (id) => {
    try {
      setSelectedPhoto(null)
      setLikes(0)
      const data = await fetchPhotoByIdApi(id);
      setSelectedPhoto(data);
setLikes(data.likes)

    } catch (error) {
      console.error('Failed to fetch photo by id', error);
    }
  }, []);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);
     

  // fetch comments

  const fetchComments = useCallback(async (photoId) => {
    try {
      const data = await fetchCommentsApi(photoId);
      setComments(data);
      console.log("Comments",data);
    } catch (error) {
      console.error('Failed to fetch comments', error);
    }
  }, []);

  //add like

  const addLike = useCallback(async (photoId) => {
    try {
      const updatedPhoto = await addLikeApi(photoId);
      setLikes(updatedPhoto.likes);
    } catch (error) {
      console.error('Failed to add like', error);
    }
  }, []);

  //add comments

  const addComment = useCallback(async (photoId, text) => {
    try {
      const newComment = await addCommentApi(photoId, text);
      setComments((prevComments) => [...prevComments, newComment]);
    } catch (error) {
      console.error('Failed to add comment', error);
    }
  }, []);



      //user register api function work after clicking submit button

  const registerUser = useCallback(async (e) => {
    e.preventDefault()
  console.log("regg",registerInfo);

    setIsRegisterLoading(true)
   
     setRegisterError(null)
      
     const response=await postRequest(
      `${baseUrl}/users/register`,registerInfo)

      setIsRegisterLoading(false)


        if(response.error){
           return setRegisterError(response)
        }
        

  
        navigate('/home')
        // save user to localstorage to prevent re login
        localStorage.setItem("User",JSON.stringify(response))
        setUser(response)
    },
    [registerInfo],
  )
    
    //logout User

    const logoutUser=useCallback(()=>{
        localStorage.removeItem("User")
        setUser(null);

   })


   // user login api for working after  submit

   const loginUser=useCallback( async  (e)=>{
      e.preventDefault()
     
      setLoginError(null)
      const response=await postRequest(
         `${baseUrl}/users/login`,loginInfo)

                 

                  if(response.error){
                     return setLoginError(response)
                  }
                  navigate('/home')
                  localStorage.setItem("User",JSON.stringify(response))
                  setUser(response)

                  

      },[loginInfo]
   )

  // gallery management
 

  
 

   

    
    
  

    // const response = await fetch('http://localhost:5000/api/photos', {
    //   method: 'POST',
    //   headers: {
    //     'x-auth-token': token,
    //   },
    //   body: formData,
    // });
    // if (response.ok) {
    //   const data = await response.json();
    //   setPhotos((prevPhotos) => [...prevPhotos, ...data]);
    // } else {
    //   console.error('Failed to upload photos');
    // }



    return(

  <authContext.Provider value={{
  user,
  registerInfo,

  
  updateRegisterInfo,
  registerUser,
  registerError,
  isRegisterLoading,
  logoutUser,
  loginInfo,
  updateLoginInfo,
  loginError,
  loginUser,
  photos,
    uploadPhotos,
    fetchPhotoById,
    fetchPhotos,
    selectedPhoto,
    fetchComments,
    addLike,
    addComment,
likes,
comments

   

  
  
  
  
  
  
  }}>
  
      {children}
  </authContext.Provider>




    )


}