import { useState,useEffect, useCallback } from "react"
import { Button, Card } from "react-bootstrap"
import Loader from "./Loader"
import Movies from "./Movies"


const FetchMovies=()=>{

    const [movies,setMovies]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)

    

     const fetchClickHandler=useCallback(async ()=>{
        setIsLoading(true)
        setError(null)
    
try {

    let response=await fetch('https://swapi.dev/api/films')

    if (!response.ok){
        throw new Error('Something Went Wrong  ....Retrying')
    }

    let data=await response.json()

const myMovieArr=data.results.map((movie)=>{
    return {
        id:movie.episode_id,
        title:movie.title,
        openingText:movie.opening_crawl,
        releaseDate:movie.release_date
    }
})

setMovies(myMovieArr)

} catch(error){
    setError(error.message)
}
        setIsLoading(false)  

        },[])

        useEffect(()=>{fetchClickHandler()},[fetchClickHandler])


    return (
        <>
        <Card style={{width:'18rem',marginLeft:'400px'}}>
            <Card.Body>

            <Button onClick={fetchClickHandler}>Fetch Movies</Button>
            </Card.Body>
            
        </Card>
        {isLoading && <Loader></Loader>}
        {!isLoading && movies.length>0 && <Movies movies={movies}></Movies>}
        {!isLoading && movies.length==0 && !error && <p>No Movies Found</p>}
        {!isLoading && error && <p>{error}</p>}
        {/* <Button>Cancel Retry</Button> */}
        </>

    )
}

export default FetchMovies