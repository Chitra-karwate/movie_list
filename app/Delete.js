
const Delete=(props)=>{
    return (
       <>
            <div className="delete">
                <button onClick={()=>{props.onDelete()}}>
                    <img src="Delete.png"/>
                </button>
            </div>
       </>
    );
};
 export default Delete;
