import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from "@reach/router"
 
export default ({state, setState} ) => {

    const [inputState, setInputState] = useState({
        playerName:'',
        perferPosition:'',
    })
    const [error, setError] = useState([]);


    const onChangeHandler = e =>{
        setInputState({
            ...inputState,
            [e.target.name]:e.target.value
        })
    }

    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/team', inputState)
            .then(res => {
                console.log(inputState)
                setState(!state)
                navigate('/')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setError(errorArr);
                console.log(errorArr)
                
            })
    }
    return(
        <form onSubmit={onSubmitHandler}>
            {error.map((err, index) => <p className="text-danger" key={index}>{err}</p>)}
            <p>
                <label>Player Name</label>
                <input type='text' name='playerName' onChange = {onChangeHandler}/>
            </p>
            <p>
                <label>Perfered Position</label>
                <input type='text' name='perferPosition' onChange = {onChangeHandler}/>
            </p>
            <input type='submit'/>
        </form>
    )
}