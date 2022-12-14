import { Card } from "react-bootstrap"


const Movies=(props)=>{

    const movies = props.movies.map((movie)=>{

        return <Card style={{width:'30rem',marginLeft:'400px'}}>
        <Card.Body>

        <Card.Title>Title - {movie.title}</Card.Title>
        <Card.Subtitle>Movie ID- {movie.id}, Release Date-{movie.releaseDate}</Card.Subtitle>
        <Card.Text>{movie.openingText}</Card.Text>
        </Card.Body>  
    </Card>
    })

    return (

        movies

    )
}

export default Movies