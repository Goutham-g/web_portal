import React, { useContext } from 'react'

import Alert from 'react-bootstrap/Alert';

function Signup2() {
const {eventDetails,updateEventInfo,eventRegister,eventError}=useContext(eventContext)

const eventInfo=(e)=>{
  let {value,name} =  e.target
  updateEventInfo({...eventDetails,[name]:value})


}
// const setProfile = (e) => {
//   setImage(e.target.files[0])
// }


  return (
    <div>

<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-30 w-auto"
            src="https://i.postimg.cc/P553gkq2/allthings-how-how-to-enable-dark-mode-in-teams-chat-on-windows-11-teams-chat-dark-mode-removebg-prev.png"
            alt=""
          /> */}
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-grey-500">
            Event Details
          </h2>
         
      

        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={eventRegister}  className="space-y-2" action="#" method="POST">
          <div>
              <label htmlFor="gname" className="block text-sm font-medium leading-6 text-slate-400">
               Groom Name
              </label>
              <div className="mt-2">
                <input
               onChange={eventInfo}
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
               Spouse Name
              </label>
              <div className="mt-2">
                <input
               onChange={eventInfo}
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
              <div className="mt-2">
                <input
               onChange={eventInfo}
                  id="venue"
                  name="venue"
                  type="venue"
                  autoComplete="venue"
                  required
                  className="block w-full rounded-md border-1 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label htmlFor="gMapLink" className="block text-sm font-medium leading-6 text-slate-400">
            Map link
              </label>
              <div className="mt-2">
                <input
               onChange={eventInfo}
                  id="gMapLink"
                  name="gMapLink"
                  type="url"
                  autoComplete="gMapLink"
                  required
                  className="block w-full rounded-md border-1 py-1.5 text-slate-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

{/* <label class="block text-sm font-medium leading-6  text-slate-400" for="file_input">Couple Image</label>
<input onChange={setProfile} class="block  w-full rounded-md border-1 py-1.5 text-sm text-gray-900 border border-0  rounded-md cursor-pointer  dark:text-gray-400 focus:ring-2 focus:ring-inset   dark:border-gray-600 dark:placeholder-gray-400" name='image' id="image" type="file"/> */}

            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium leading-6 text-slate-400">
               Date
              </label>
              <div className="mt-2">
                <input
               onChange={eventInfo}
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
               onChange={eventInfo}
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
               onChange={eventInfo}
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
              <button
              
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               
              Submit
              </button>
              {
                eventError?.error && (<Alert className="mt-2" variant="danger">
                <p>{eventError?.message}</p></Alert>)
              }
              
          
            </div>
          </form>

        </div>
      </div>
    
    </div>
  )
}

export default Signup2