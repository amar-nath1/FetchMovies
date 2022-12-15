import { useState, memo} from "react"
import { Button, Card, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

const AddMovieForm=()=>{

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

    const NewMovieObj={
        title:title,
        openingText:openingText,
        releaseDate:releaseDate

    }

    const submitHandler=(event)=>{
        event.preventDefault()
        console.log(NewMovieObj)
    }
    

    return (
        <Card className='mb-3 mt-3' style={{width:'20rem',marginLeft:'400px'}}>

        <Form onSubmit={submitHandler}>
            <FormGroup className="mb-3" controlId='formBasicEmail'>
                <FormLabel >Title</FormLabel>
                <FormControl type='text' placeholder='Enter Title' onChange={titleChangeHandler}></FormControl>
            </FormGroup>

            <FormGroup>
            <FormLabel >Opening Text</FormLabel>
            <textarea className="form-control" onChange={opTextChangeHandler} id="exampleFormControlTextarea1" rows="3"></textarea>
            </FormGroup>

            <FormGroup controlId='formreleasedate'>
            <FormLabel >Release Date</FormLabel>
            <FormControl type='date' onChange={relDateHandler}></FormControl>
            </FormGroup>

            <Button variant='success' type='submit' className='m-4'>Add Movie</Button>
        </Form>
        </Card>
    )

}

export default memo(AddMovieForm)