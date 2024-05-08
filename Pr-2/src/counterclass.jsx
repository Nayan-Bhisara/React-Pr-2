import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            cnt : 0,
        }
    }
    Increment(){
        this.setState({
            cnt : this.state.cnt + 1
        })
    }
    Decrement(){
        this.setState({
            cnt : this.state.cnt - 1
        })
    }
    reset(){
        this.setState({
            cnt : 0
        })
    }

    render(){
        return(
            <>
                <div align="center">
                    <div>
                        <h1>Counter With Class Component</h1>
                        <h4 style={{marginTop:"40px", marginBottom:"20px"}}>Counter App</h4>
                        <button type="button" class="btn btn-success" onClick={ () => this.Increment()} style={{marginRight:"20px",width:"80px"}}>+</button>
                        <button type="button" class="btn" style={{backgroundColor:"#FFE4E1",width:"80px"}}>{this.state.cnt}</button>
                        {
                            (this.state.cnt > 0) ? 
                            <button type="button" class="btn btn-success" onClick={ () => this.Decrement()} style={{marginLeft:"20px",width:"80px"}}>-</button>:
                            <button type="button"disabled class="btn btn-success" onClick={ () => this.Decrement()} style={{marginLeft:"20px",width:"80px"}}>-</button>
                        }
                        <br></br>
                        <button type="button" class="btn btn-success mt-3" onClick={ () => this.reset()} style={{width:"80px"}}>reset</button>
                    </div>
                </div>
            </>
        )
    }
}

export  default Counter;