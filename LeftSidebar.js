import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function LeftSidebar() {
    const divStyle ={
                      backgroundColor:"black",
                      position:"fixed",
                      minWidth:"270px",
                      minHeight:"750px",
                      overflow: "scroll"
                    }
      const liStyle={
                      color:"white",
                      fontSize:"20px",
                      padding:"30px",
                      textAlign:"center",
                      borderBottom:"1px solid gray",
                      listStyle:"none"  
                    }
      const h1Style={
                      color:"white",
                      textAlign:"center"
                    }  
  return (
    <>
      <div style={divStyle}>
          <h2 style={h1Style}>Data in Following chart</h2>
            <ul>
              <li  style={liStyle}  ><Link  to="/PieChart" >Pie </Link></li>
              <li  style={liStyle} ><Link to="/TimelineChart">TimelineChart</Link></li>
            </ul>
        </div>     
    </>
  )
}
