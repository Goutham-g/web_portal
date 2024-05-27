import  { useContext, useState } from 'react'

import { authContext } from '../context/authContext';

import Alert from 'react-bootstrap/Alert';



function Signup1() {

  // use context
  const {registerInfo , updateRegisterInfo,isRegisterLoading,  registerUser, registerError}= useContext(authContext)

  
    

    const userDetails = (e)=>{
      let {value,name} =  e.target
      updateRegisterInfo({ ...registerInfo, [name]: value })
    }




  return (
  
    
    <div>
 <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-30 w-auto"
            src="https://i.postimg.cc/P553gkq2/allthings-how-how-to-enable-dark-mode-in-teams-chat-on-windows-11-teams-chat-dark-mode-removebg-prev.png"
            alt=""
          /> */}
          <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-grey-500">
            Registeration Form
          </h2>
         
      

        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form  onSubmit={registerUser}  className="space-y-2" action="#" method="POST">
          <div>
              <label htmlFor="gname" className="block text-sm font-medium leading-6 text-slate-400">
               Groom Name
              </label>
              <div className="mt-1">
                <input
               onChange={userDetails}
                  id="gname"
                  name="gname"
                  type="gname"
                  autoComplete="gname"
                  required
                  className="block w-full rounded-md border-1 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="sname" className="block text-sm font-medium leading-6 text-slate-400">
               Bride Name
              </label>
              <div className="mt-1">
                <input
               onChange={userDetails}
                  id="sname"
                  name="sname"
                  type="sname"
                  autoComplete="sname"
                  required
                  className="block w-full rounded-md border-1 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="venue" className="block text-sm font-medium leading-6 text-slate-400">
          Venue
              </label>
              <div className="mt-1">
                <input
               onChange={userDetails}
                  id="venue"
                  name="venue"
                  type="venue"
                  autoComplete="venue"
                  required
                  className="block w-full rounded-md border-1 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              </div>
              <div>
              <label htmlFor="gMapLink" className="block text-sm font-medium leading-6 text-slate-400">
            Map link
              </label>
              <div className="mt-1">
                <input
               onChange={userDetails}
                  id="gMapLink"
                  name="gMapLink"
                  type="url"
                  autoComplete="gMapLink"
                  required
                  className="block w-full rounded-md border-1 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              </div>
              <div>
              <label htmlFor="date" className="block text-sm font-medium leading-6 text-slate-400">
               Date
              </label>
              <div className="mt-2">
                <input
               onChange={userDetails}
                  id="date"
                  name="date"
                  type="date"
                  autoComplete="date"
                  required
                  className="block w-full rounded-md border-1 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className='max-w-[18rem] mx-auto grid grid-cols-2 gap-4'>
            <div>
              <label htmlFor="startTime" className="block text-sm font-medium leading-6 text-slate-400">
               Wedding Time from:
              </label>
              <div className="mt-2">
                <input
               onChange={userDetails}
                  id="startTime"
                  name="startTime"
                  type="time"
                  autoComplete="startTime"
                  required
                  className="block w-full rounded-md border-2 py-1.5 text-slate-400 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="endTime" className="block text-sm font-medium leading-6 text-slate-400">
               To:
              </label>
              <div className="mt-2">
                <input
               onChange={userDetails}
                  id="endTime"
                  name="endTime"
                  type="time"
                  autoComplete="endTime"
                  required
                  className="block w-full rounded-md border-2 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-400">
                Email address
              </label>
              <div className="mt-1">
                <input
               onChange={userDetails}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-2 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-400">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-grey-700 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
               onChange={userDetails}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               {
                isRegisterLoading?" Creating your Account" : "Register "
               }
              </button>
              {
                registerError?.error && (<Alert className="mt-2" variant="danger">
                <p>{registerError?.message}</p></Alert>)
              }
              
          
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already Have an Account!{' '}
            <a href="/login" className="font-semibold leading-6 text-grey-600 hover:text-indigo-500">
              Sign In
            </a>
          </p>
        </div>
      </div>
    

    </div>
  )
}

export default Signup1