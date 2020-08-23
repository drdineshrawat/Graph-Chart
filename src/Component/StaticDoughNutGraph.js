import React from 'react'
import {Doughnut} from 'react-chartjs-2'

function StaticDoughNutGraph() {
    const dataRecord={
        // x-axis data
        labels:['Jan','Feb','Mar','Apr','May'],
        // y-axis data
        datasets:[
        {
            label:'Sales for 2020',
            data:[3,2,2,1,5],
            backgroundColor:['rgba(255,99,132,1)','rgba(255,205,86,1)','rgba(54,162,235,1)','rgba(255,159,64,1)','rgba(153,102,255,0.2)'],
            
        }]
    }

    const optionOnYAxis={
        title:{
            display:true,
            text:"Dinesh Dought Nut Chart"
        }
    }


    return (
        <div>
             <Doughnut 
            data={dataRecord}
            // y-axis distance 
            options={optionOnYAxis}
            />
        </div>
    )
}


export default StaticDoughNutGraph
