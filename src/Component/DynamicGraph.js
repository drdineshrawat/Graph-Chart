import React, { useState, useEffect } from 'react'
import axious from 'axious'

function DynamicGraph() {
  const [apiData, setApiData] = useState({})
    const [employeeSalary, setemployeeSalary] = useState([])
    const[employeeAge,setEmployeeAge]= useState([])

    useEffect(()=>{
        chart();
    },[])

  const chart=()=>{

    axious.get("http://dummy.restapiexample.com/api/v1/employees")
    .then(response=>{
         response.data
    })
    .catch(err=>{
        console.log(err)
        alert(err)
    })


      setApiData({
          labels:['','','','',''],
          datasets:[{

          }]
      })
  }

    return (
        <div>
            
        </div>
    )
}

export default DynamicGraph
