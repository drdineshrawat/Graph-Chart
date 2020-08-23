import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Line}from 'react-chartjs-2'

function DynamicGraph() {
  const [apiData, setApiData] = useState({})
    const [employeeSalary, setemployeeSalary] = useState([])
    const[employeeAge,setEmployeeAge]= useState([])
    const[optionalData,setOptionalData]=useState({})

    useEffect(()=>{
        chart();
    },[])

  const chart=()=>{
    let empSal=[];
    let empAge=[];
    axios.get("http://dummy.restapiexample.com/api/v1/employees")
    .then(response=>{
        //  response.data.data
        console.log(response.data.data)
        for(const dataObj of response.data.data){
            empSal.push(parseInt(dataObj.employee_salary))
            empAge.push(parseInt(dataObj.employee_age))
        }

        setApiData({
          labels:empAge,
          datasets:[{
              label:"Employee",
              data:empSal,
              backgroundColor:['rgba(75,192,192,0.6)'],
              borderWidth:4,
          }]
      })
 
    })
    .catch(err=>{
        console.log(err);
        alert(err)
    });
console.log(empSal,empAge)



setOptionalData({
  resposive:true,
  title:{
      text:"Dinesh",
      display:true,
  },
  scales:{
      yAxes:[{
          ticks:{
              autoSkip:true,
              maxTicksLimit:10,
              beginAtZero:true,
          },
          gridLines:{
              display:false,
          }
      }],
      xAxes:[{
          gridLines:{
              display:false
          }
      }]
  }
})


}


    return (
        <div>
              <Line data={apiData} options={optionalData}/>
        </div>
    )
}

export default DynamicGraph
