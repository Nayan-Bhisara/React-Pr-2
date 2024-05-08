import { useState } from "react"

const Counterfunction = ({cnt,Increment,Decrement,reset}) =>{

    return (
        <>
            <div align="center">
                    <div>
                        <h1 style={{marginTop:"100px"}}>Counter With function Component ( props state )</h1>
                        <h4 style={{marginTop:"40px", marginBottom:"20px"}}>Counter App</h4>
                        <button type="button" class="btn" style={{fontSize:"40px",width:"70px",height:"60px",borderRadius:"50%",marginBottom:"20px"}}>{cnt}</button><br></br>
                        <button type="button" class="btn" onClick={ () => Increment()} style={{backgroundColor:"#1C2833",color:"#FDFEFE",marginRight:"20px",width:"70px",height:"60px",borderRadius:"50%"}}>+</button>
                        {
                            (cnt > 0) ? 
                            <button type="button" class="btn" onClick={ () => Decrement()} style={{backgroundColor:"#1C2833",color:"#FDFEFE",width:"70px",height:"60px",borderRadius:"50%"}}>-</button>:
                            <button type="button"disabled class="btn" onClick={ () => Decrement()} style={{backgroundColor:"#1C2833",color:"#FDFEFE",width:"70px",height:"60px",borderRadius:"50%"}}>-</button>
                        }
                        <button type="button" class="btn" onClick={ () => reset()} style={{backgroundColor:"#1C2833",color:"#FDFEFE",width:"70px",height:"60px",borderRadius:"50%",marginLeft:"20px"}}>0</button>
                    </div>
                </div>
        </>
    )
}

export default Counterfunction