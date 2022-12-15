import { useState, memo} from "react"
import { Button, Card, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

const AddMovieForm=(props)=>{

    const [title,setTitle]=useState('')
    const [openingText,setOpeningText]=useState('')
    const [releaseDate,setReleaseDate]=useState('')

    const titleChangeHandler=(event)=>{
        
            setTitle(event.target.value)  
    }

    const opTextChangeHandler=(event)=>{
            setOpeningText(event.target.value)
    }

    const relDateHandler=(event)=>{

    
            setReleaseDate(event.target.value)
  
        
    }

    const newMovieObj={
        title:title,
        openingText:openingText,
        releaseDate:releaseDate

    }

    async function submitHandler(event){
        event.preventDefault()
       let response= await fetch('https://react-post-amar-default-rtdb.firebaseio.com/movies.json',{
            method:'POST',
            body: JSON.stringify(newMovieObj),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(()=>{props.handleFetch()})

        
        
    }

    
    

    return (
        <Card className='mb-3 mt-3 border-danger' style={{width:'50rem',marginLeft:'200px'}}>

        <Form onSubmit={submitHandler}>
            <FormGroup className="mb-3" controlId='formBasicEmail'>
                <FormLabel ><h5>Title</h5></FormLabel>
                <FormControl type='text' placeholder='Enter Title' onChange={titleChangeHandler}></FormControl>
            </FormGroup>

            <FormGroup>
            <FormLabel ><h5>Opening Text</h5></FormLabel>
            <textarea placeholder="Enter Opening Text" className="form-control" onChange={opTextChangeHandler} id="exampleFormControlTextarea1" rows="3"></textarea>
            </FormGroup>

            <FormGroup controlId='formreleasedate'>
            <FormLabel ><h5>Release Date</h5></FormLabel>
            <FormControl type='date' onChange={relDateHandler}></FormControl>
            </FormGroup>

            <Button variant='success' type='submit' className='m-4'>Add Movie</Button>
        </Form>
        </Card>
    )

}

export default memo(AddMovieForm)