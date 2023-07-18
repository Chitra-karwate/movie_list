import Action_button from "./Action_button.js";
function Movie_row(props){
    return (
            <div className="movie_row">
                <div className="poster">
                    <img src={props.data.image_id}/>
                </div>
                <div className="detail">
                    <div className="container">
                        <h2>{props.data.movie_name}</h2>
                        <p>{props.data.year}</p>
                        <h3>Description</h3>
                        <p>{props.data.Decscription}</p>
                    </div>
                    <Action_button {...props}/>
                </div>
            </div>
       
    );
};
export default Movie_row;
