import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import Chart from 'chart.js/auto';
import { Bar }    from "react-chartjs-2";

export default function TimelineChart() 
{ 
      const demo ={    
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    display: "flex",
                    justifyContent: "right",
                  }


        const [fetchdata , setfetchdata] = useState([])
        useEffect (()=>{
                  axios.get("http://localhost:8000/datedatas")
                  .then((response)=>{
                            console.log(response.data)
                            setfetchdata(response.data)

                  })
        },[])
 return(
           <>   
              <div style={demo}>
               <Bar
                 
                   data={{
                          labels:fetchdata.map((currElement)=>{
                                  console.log(currElement.currentDateRange)
                                  const pk =  currElement.currentDateRange.slice(0,10)
                          return  pk;
                      }),
            datasets: [
                          {         
                            label : "dates",     
                            data:  fetchdata.map((currElement)=>{
                                  console.log(currElement.value)
                                  return  currElement.value;
                                }),             
                            backgroundColor: "aqua",
                            borderColor: "black",
                            borderWidth: 0.5,
                          },
                      ],
                }}
          height={500}
          width={900}                              // Height of graph 
          margineLeft={100}
                 options={{
                               responsive:false, 
                                maintainAspectRatio: false,
                                scales: {
                                         yAxes: [
                                                    {
                                                    ticks: {
                                                            // The y-axis value will start from zero
                                                            beginAtZero: true,
                                                            },
                                                    },
                                                 ],
                                        },
                                legend: {  
                                           labels: {
                                                      fontSize: 15,
                                                      fontWeight : "bold"
                                                    },
                                        },
                          }}
                  />
            </div>
          </>
    )       
}
