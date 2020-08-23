import React,{useState,useEffect} from 'react'
import {Line}from 'react-chartjs-2'

function GraphUsingHooks() {

    const [chartData, setchartData] = useState({})
    const[optionalData,setOptionalData]=useState({})

    useEffect(() => {
        chart();
    }, [])

    const chart=()=>{
            setchartData({
                labels:['mon','tues','wed','th','fr','sat','sun'],
                datasets:[
                    {
                        label:"level of thickness",
                        data:[1,2,3,4,5,6,7],
                        backgroundColor:['rgba(75,192,192,0.6)'],
                        borderWidth:4,
                    }
                ]
            })
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
            <Line data={chartData} options={optionalData}/>
        </div>
    )
}

export default GraphUsingHooks
