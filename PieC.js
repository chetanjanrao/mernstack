import React from "react";
import {Chart, ArcElement} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {  Pie } from "react-chartjs-2"
import axios from 'axios';
import { useState,useEffect } from 'react'
Chart.register(ArcElement);
Chart.register(ChartDataLabels);

export default function PieC(props) {
  const pieChart ={ 
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  display: "flex",
                  justifyContent: "right",
       
  }
     const [feed , setfeed] = useState([])

        useEffect (()=>{
                    axios.get("http://localhost:8000/passangers")
                    .then((response)=>{
                    // setfeed({response})
                      console.log(response.data)
                      setfeed(response.data)
                 })
               },[])

  return (
    <div style={pieChart}>
    <>      
        <Pie
            data={{                       
                        labels: feed.map((currentElement)=>{
                                             console.log(currentElement.passangerViews)
                                             return currentElement.passangerViews;
                                          
                                        }),
                        datasets:[{          
                                   data: feed.map((currentElement)=>{
                                         console.log(currentElement.numberOfViews)
                                          return currentElement.numberOfViews;                                          
                                   }),                                 
                                    backgroundColor:[
                                                      "#acddde","blue","yellow","cyan","green","pink","gray","purple"
                                                    ],
                                    borderColor: "gray", 
                                    borderWidth: 1,
                                    hoverOffset: 4
                                   }]
                            }      
                      }                      
              height={400}
              width={600}
              
             options={{
                       maintainAspectRatio: false,
                       defaultFontSize:"14px",
                       tooltips: {
                                    enabled: true,
                                 },
                       layout: {
                                padding: {
                                            bottom: 25
                                          }
                              },                                     
                              plugins: {
                                           datalabels: {
                                           color:'#000000',
                                          //anchor: "start",
                                           fontSize : "15px",
                                           align:"end",
                                           formatter: (value, ctx) => {
                                            
                                                                        let sum = 0;
                                                                        let dataArr = ctx.chart.data.datasets[0].data;
                                                                        dataArr.map(data => {
                                                                            sum += data;
                                                                        });
                                                                        let percentage = (value*100 / sum).toFixed(2)+"%";
                                                                        return percentage;
                                                                      }
                                                    } 
                                      }
                           }
                   }                  
        />
    </>   
    </div>      
  );
}



 
                                