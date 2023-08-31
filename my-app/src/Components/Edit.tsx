import React, { useEffect, useState } from 'react'
import { actionCreators,RootState } from '../State'
import {useDispatch,useSelector} from "react-redux"
import { UserArray } from '../userTypes'
import {bindActionCreators} from "redux"



interface Index{
    index: number
    name: string
    handleEdit: (value: boolean) => void;
    handleDisplay: (value: boolean) => void;
    dataview: UserArray

}

export const Edit = ({index,name,handleEdit,handleDisplay,dataview}: Index,) => {
  
  const dispatch=useDispatch()
  const [userdata,setUserData]=useState<UserArray>([])
  const [checkeddata,setCheckedData]=useState<string>("")
  const data=useSelector((state: RootState)=>state.contact)
  const filtereddata=data.usernames?.filter((item)=>item.firstname==name)
  const datas=useSelector((state: RootState)=>state.contact)
  const {UserDetails}=bindActionCreators(actionCreators,dispatch)
  


  const handleChange = ( e: React.ChangeEvent<HTMLInputElement>, key: string ) => {
    setCheckedData(e.target.value)
    const { value } = e.target;
    setUserData((prevUsers)=>{
      const updatedarray=[...prevUsers];
    //   console.log(updatedarray,index,"dert")
      updatedarray[index]={...updatedarray[index],[key]: value}
      return updatedarray
    })

  }

  useEffect(()=>{
    setUserData(dataview)
    setCheckedData(filtereddata[0].status)
  },[])

  console.log(userdata,"userdata")

  const handleSubmit=()=>{
     
    UserDetails(userdata);
   
   }

  return (
    <div className='mt-20'>

   <h1 className="text-2xl font-semibold mb-4">Edit Contact Screen</h1>
   <div >
  <div className='w-25 shadow-inner mt-5'>
    
   <label  >First Name:</label>
   <input type="text" placeholder='Enter First Name' defaultValue={filtereddata[0].firstname} onChange={(e)=>handleChange(e,"firstname")} className='ml-5 bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'/><br/>
   <label  className='mt-2'>Last Name:</label>
    <input type="text" placeholder='Enter Last Name'  defaultValue={filtereddata[0].lastname} onChange={(e)=>handleChange(e,"lastname")} className='ml-5  mt-2 bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'/><br/>


   <label >Status:</label>
    <input type="radio" className='ml-4' value="active"  checked={checkeddata=="active"} onChange={(e)=>handleChange(e,"status")}/>
    <label>Active</label><br/>
    <input type="radio" className='ml-20' value="inactive" checked={checkeddata=="inactive"} onChange={(e)=>handleChange(e,"status")}/>
    <label>InActive</label><br/>
    </div>


    </div>
    <button className="bg-sky-500/100 m-10 p-3"  onClick={()=>{handleSubmit();handleEdit(false);handleDisplay(true)}}>Save Editted Contact</button>
    
    </div>
  )
}
