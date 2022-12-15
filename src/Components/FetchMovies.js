import { useState, useEffect, useCallback } from "react"
import { Button, Card } from "react-bootstrap"
import AddMovieForm from "./AddMovieForm"
import Loader from "./Loader"
import Movies from "./Movies"


const FetchMovies = () => {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)



    const fetchClickHandler = useCallback(async () => {
        
            setIsLoading(true)

        setError(null)

       

        try {

            let response = await fetch('https://react-post-amar-default-rtdb.firebaseio.com/movies.json')

            if (!response.ok) {
                throw new Error('Something Went Wrong  ....Retrying')
            }

        

            let data = await response.json()
            

            const myMovieArr = []

            for (const key in data){
                myMovieArr.push({
                    id:key,
                    title:data[key].title,
                    openingText:data[key].openingText,
                    releaseDate:data[key].releaseDate
                })
            }
                

            setMovies(myMovieArr)

        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)

    }, [])

    useEffect(() => { fetchClickHandler() }, [fetchClickHandler])


    return (
        <>

            <AddMovieForm handleFetch={fetchClickHandler}></AddMovieForm>
            <Card className='border-warning mb-2' style={{ width: '50rem', marginLeft: '200px' }}>
                <Card.Body>

                    <Button variant='secondary' onClick={fetchClickHandler}>Fetch Movies</Button>
                </Card.Body>

            </Card>
            {isLoading && <Loader></Loader>}
            {!isLoading && movies.length > 0 && <Movies handleFetch={fetchClickHandler} movies={movies}></Movies>}
            {!isLoading && movies.length == 0 && !error && <p>No Movies Found</p>}
            {!isLoading && error && <p>{error}</p>}
            {/* <Button>Cancel Retry</Button> */}
        </>

    )
}

export default FetchMovies