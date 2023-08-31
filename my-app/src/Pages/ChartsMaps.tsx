import React, { useEffect, useState } from 'react'
import { Sidebar } from '../Components/Sidebar'
import axios from "axios"
import {  CovidData } from '../coviddata'
import { CovidGraph } from '../Components/CovidGraph'
import { CovidCountry } from '../CovidCountry'
import { CovidMap } from '../Components/CovidMap'


export const ChartsMaps = () => {

  const [data,setData]=useState<CovidData>({})
  const [countryData,setCountryData]=useState<CovidCountry>([])
  const fetchData = async () => {
    try {
      const response = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
      setData(response.data.cases);
      console.log(response.data.cases,"data")
    } catch (error) {
      console.error(error);
    }
  };


  const getData = async () => {
    try {
      const response = await axios.get("https://disease.sh/v3/covid-19/countries");
      setCountryData(response.data);
      console.log(response.data,"data123")
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
   fetchData()
   getData()
  },[])

  return (
    <div className="flex w-full ">
      
      <Sidebar />
      

      <div className='w-4/5'>
        <CovidGraph data={data} />
        <CovidMap countryData={countryData} />
      </div>
    </div>
  )
}
