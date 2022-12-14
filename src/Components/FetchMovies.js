import { useState } from "react"
import { Button, Card } from "react-bootstrap"
import Movies from "./Movies"


const FetchMovies=()=>{

    const [movies,setMovies]=useState([])

    const fetchClickHandler=()=>{

        fetch('https://swapi.dev/api/films').then((response)=>{

            return response.json()
        }).then((data)=>{

            const myMovieArr=data.results.map((movie)=>{
                return {
                    id:movie.episode_id,
                    title:movie.title,
                    openingText:movie.opening_crawl,
                    releaseDate:movie.release_date
                }
            })

            setMovies(myMovieArr)
        })
    }

    return (
        <>
        <Card style={{width:'18rem',marginLeft:'400px'}}>
            <Card.Body>

            <Button onClick={fetchClickHandler}>Fetch Movies</Button>
            </Card.Body>
            
        </Card>
        <Movies movies={movies}></Movies>
        </>

    )
}

export default FetchMovies