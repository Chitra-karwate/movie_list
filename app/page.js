"use client"
import React,{useState} from "react";
import movie_list from './movie_list.js'
import Header from "./Header.js"
import Footer from "./Footer.js"
import Movie_row from "./Movie_row.js"
const Page=()=>{
    const [movies_data,setMovies_data]=useState(movie_list)
	function handleDelete(movie_name){
		const movie_data=movies_data.filter((movie)=> movie_name !== movie.movie_name);
		setMovies_data(movie_data)
        
	};
    function like_count(row_data){
        row_data.vote+=1
        const newArray=[...movies_data]
    
        setMovies_data(newArray)
        
  };

  function dislike_count(row_data){
        row_data.vote-=1
        const newArray=[...movies_data]
        setMovies_data(newArray)
        
  };
  	
  return (
        <>
            <Header/>
            {movies_data.map((item)=>(
                <Movie_row 
                    data={item}
                    onDelete={()=>handleDelete(item.movie_name)}
                    like_count={like_count}
                    dislike_count={dislike_count}
                    
                />
                
            ))}
            <Footer/>
            
            
        </>
    );

};
export default Page;

