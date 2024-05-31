import axios from 'axios'
import { baseUrl } from './baseUrl';
const API_URL = `${baseUrl}/photos`;

export const postRequest = async (url, body) => {
    const headers = {};
  
    if (!(body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(body);
    }
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        let message;
        if (data?.message) {
          message = data.message;
        } else {
          message = data;
        }
        return { error: true, message };
      }
  
      return data;
    } catch (error) {
      console.error('Error making POST request', error);
      return { error: true, message: 'Network error' };
    }
  };
  
export const commonRequest = async (method, url, body, header) => {
    let config = {
        method,
        url,
        headers: header ? header : "application/json",
        data: body
    }
    return axios(config).then(res => {
        console.log(res);
        return res
    }).catch(err => {
        console.log(err);
        return err
    })
}

//gallery
//fetch photo
export const fetchPhotosApi = async (email) => {
  const response = await fetch(`${API_URL}/${email}`);
  if (!response.ok) {
    throw new Error('Failed to fetch photos');
  }
  return response.json();
};
//by id
export const fetchPhotoByIdApi = async (id) => {
  const response = await fetch(`${API_URL}/id/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch photo by id');
  }
  console.log("photo fetch success");;
  return response.json()
 
};




// upload
export const uploadPhotosApi = async (files) => {
    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append('photos', file);
    });
  
   
    const user = JSON.parse(localStorage.getItem('User')); // Get the user object from local storage
    const email = user?.email; // Extract the email from the user object
  console.log("emailser",email);
    if (!email) {
      throw new Error('No email found in local storage');
    }
  
    formData.append('email', email); // Append email to form data
  
    const response = await fetch(`${API_URL}/upload`, {
      method: 'POST',
   
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error('Failed to upload photos');
    }
  
    return response.json();
  };

  //ad like api
  export const addLikeApi = async (photoId) => {
    const response = await fetch(`${API_URL}/likee/${photoId}`, {
      method: 'POST',
    });
  
    if (!response.ok) {
      throw new Error('Failed to add like');
    }
    return response.json();
  };

  // add comment

  export const fetchCommentsApi = async (photoId) => {
    const response = await fetch(`${baseUrl}/comments/${photoId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    return response.json();
  };

  export const addCommentApi = async (photoId, text) => {
    const response = await fetch(`${baseUrl}/comments/${photoId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to add comment');
    }
    return response.json();
  };


