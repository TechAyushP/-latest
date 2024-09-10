import React, { useState } from 'react'

const Withloader = (Wrapped) => {
    let [data,setdata]=useState(true)
    return(()=>{
        setTimeout(() => {
            setdata(false)
            
        }, 2000);
        return (
            <div>
        { data?<h1>Higheroder............</h1> :<Wrapped/>}
            </div>
          )
    })

  
}

export default Withloader