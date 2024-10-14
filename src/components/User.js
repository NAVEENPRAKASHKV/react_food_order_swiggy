
import React from "react";

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    render(){
        const incFuc = ()=>{
            this.setState({
                count:Number(this.state.count+1 )
            })
        }  
        const decFunc=()=>{         
            count:this.setState({
                    count:Number(this.state.count-1)
                })
        }
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={incFuc}>  inc </button>
                <button onClick={decFunc}> dec </button>
            </div>
            
        )
    }
}

export default User