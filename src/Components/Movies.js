import { Card,Button } from "react-bootstrap"


const Movies=(props)=>{

    const movies = props.movies.map((movie)=>{

        const deleteMovieHandler=()=>{

            fetch(`https://react-post-amar-default-rtdb.firebaseio.com/movies/${movie.id}.json`,{method:'DELETE'}).then(()=>{props.handleFetch()})
        }

        return <Card className='border-success' key={movie.id} style={{width:'50rem',marginLeft:'200px'}}>
        <Card.Body>
            

        <Card.Title>Title - {movie.title}</Card.Title>
        <Card.Subtitle>Release Date-{movie.releaseDate}</Card.Subtitle>
        <Card.Text>{movie.openingText}</Card.Text>
        <Button onClick={deleteMovieHandler}>DELETE</Button>
        </Card.Body>  
    </Card>
    })

    return (

        movies

    )
}

export default Movies