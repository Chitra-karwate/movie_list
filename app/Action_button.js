
import React,{useState} from "react";
function Action_button(props){
    const [count,setCount]=useState(0);
    const voteup=()=>{
        setCount(count+1)
     };
    const votedown=()=>{
        setCount(count-1)
    };
    return (
        <>
       
            <div className="button">
                <div className="like">
                    <button onClick ={()=>props.like_count(props.data)}><img src="like.png"/></button>
                </div>
                <div className="Num">
                    <h3>{props.data.vote}</h3>
                </div>
                <div className="dislike">
                    <button onClick ={()=>props.dislike_count(props.data)}><img src="Dislike.svg"/></button>
                </div>
                <div className="delete">
                    <button onClick={()=>{props.onDelete()}}><img src="Delete.png"/></button>
                </div>
            </div>     
        </>
            
    );
}

export default Action_button;
