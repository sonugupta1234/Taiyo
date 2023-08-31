import React, { useEffect, useState } from 'react'
import { Sidebar } from '../Components/Sidebar'
import {useDispatch,useSelector} from "react-redux"
import { actionCreators,RootState } from '../State'
import {bindActionCreators} from "redux"
import { UserArray } from '../userTypes'
import { Edit } from '../Components/Edit'



const ContactPage = () => {
  const [contact,setContact]=useState<boolean>(false)
  const [close,setClose]=useState<boolean>(true)

  const [index,setIndex]=useState<number>(0)
  const [edit,setEdit]=useState<boolean>(false)
  const [display,setDisplay]=useState<boolean>(false)
  const dispatch=useDispatch()

  const data=useSelector((state: RootState)=>state.contact)
  console.log(data.usernames,"data123")
  


  interface UserData {
    firstname: string;
    lastname: string;
    status: string;
  }
  
  const [userData, setUserData] = useState<UserData>({
    firstname: "",
    lastname: "",
    status: "",
  });

  const [user, setUser] = useState<UserArray>([]);
  const [name,setName]=useState<string>("")
  const {UserDetails}=bindActionCreators(actionCreators,dispatch)
  
  const handleChange = ( e: React.ChangeEvent<HTMLInputElement>, key: string ) => {
    const { value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [key]: value,
    }));
  };

  

 


  const handleSubmit=(e: React.FormEvent<HTMLFormElement>): void =>{
     e.preventDefault()
     alert("Item Added Sucessfully")


     setUser((prevUsers) => [...prevUsers, userData]);

     setUserData({
      firstname: '',
      lastname: '',
      status: '',
    });

    setContact(false)
    handleDisplay(true)

    

    
   
  }


  useEffect(()=>{
    UserDetails(user);
  },[user])

  const handleIndex=(ind: number, firstname: string)=>{
     setIndex(ind)
     setName(firstname)
  }

  const handleEdit=(value: boolean)=>{
      setEdit(value)
  }

  const handleDisplay=(value: boolean)=>{
    setDisplay(value)
}


const handleDelete=(index: number)=>{
  const griddata=[...data.usernames]
  griddata.splice(index,1)
  setUser(griddata)
  UserDetails(griddata)
  if(griddata.length==0){
    setClose(true)
  }
}

  

  return (
    <>
    <div className="flex w-full ">
        <Sidebar />

    
       <div className="w-4/5 p-8">
        {edit ? "": <h1 className="text-2xl font-semibold mb-4">Contact Page</h1>}
        {edit==false ? <button className="bg-sky-500/100 m-10 p-3" onClick={()=>{setContact(true);setDisplay(false);setClose(false);setEdit(false)}}>Create Contact</button> : ""}
        {close && 
         data.usernames.length==0  ? <div className="inset-0  flex justify-center items-center">
       
          <div className="bg-white p-6 rounded shadow-lg">
            
            <h2 className="text-xl font-semibold mb-4">No Contact found Please add Contact from Create Contact Button</h2>
            <button
              data-modal-hide="popup-modal"
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => setClose(false)}
            >
              Close
            </button>
          </div></div>: ""}
        
        {contact ? 
        
        <form onSubmit={handleSubmit}>
        <div>

          <h1 className="text-2xl font-semibold mb-4">Create Contact Screen</h1>
          <div className='inset-0   justify-center items-center'>
            <div className='bg-white p-6 rounded shadow-lg'>
          <label  >First Name:</label>
          <input type="text" placeholder='Enter First Name' value={userData.firstname} onChange={(e)=>handleChange(e,"firstname")} className='ml-3 pl-2 bg-white  border border-slate-300 rounded-md py-2  pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' required /><br/>
          <label  className='mt-2'>Last Name:</label>
          <input type="text" placeholder='Enter Last Name'  value={userData.lastname} onChange={(e)=>handleChange(e,"lastname")} className='ml-3 pl-2  mt-2 bg-white  border border-slate-300 rounded-md py-2  pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' required /><br/>
         
          {/* <div className='border-solid border-2 border-indigo-600 ... w-20 ml-80'> */}
          <label >Status:</label>
          <input type="radio" className='ml-4' value="active"  checked={userData.status=="active"} onChange={(e)=>handleChange(e,"status")} required/>
          <label>Active</label><br/>
          <div className='ml-12'>
          <input type="radio" className='ml-6' value="inactive" checked={userData.status=="inactive"} onChange={(e)=>handleChange(e,"status")} required/>
          <label>InActive</label><br/>
          </div>
          <button className="bg-sky-500/100 m-10 p-3"  type="submit" >Save Contact</button>
           </div>
          {/* </div> */}
          
        
       
        
        </div>
        </div></form>: ""}

        {display ? 
          <div className="grid grid-cols-2 gap-3">
          {data.usernames?.map((item, index) => {
            return (
            <div key={index} className="bg-gray-200 p-4">
              <h3>FirstName: {""}{item.firstname}</h3>
              <h3>LastName: {""}{item.lastname}</h3>
              <h3>Status: {item.status}</h3>
              <button className="bg-green-500/100 m-2 p-2 rounded" onClick={()=>{handleEdit(true);setDisplay(false);handleIndex(index,item.firstname)}}>Edit</button><br/>
              <button className="bg-red-600/100 m-2 p-2 rounded" onClick={()=>handleDelete(index)}>Delete</button>
            </div>
         )})}
        </div>
        : ""}

        {edit ? <Edit index={index} name={name} handleEdit={handleEdit} handleDisplay={handleDisplay} dataview={data.usernames}/> : ""}

       </div>
    </div>
    </>
  )
}

export default ContactPage