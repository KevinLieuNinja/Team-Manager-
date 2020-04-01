import React,{ useState, useEffect} from 'react'
import { Router } from "@reach/router"
import { Link } from "@reach/router"
import axios from "axios"
import TeamList from '../componets/teamList'
import TeamForm from "../componets/teamForm"

function Wrapper() {
    const [ team, setTeam ] = useState([]);
    // const [listState, setListState] = useState ()
    const [state, setState] = useState (false)

    useEffect (()=> {
        axios.get("http://localhost:8000/api/team")
        .then(res => {
            // console.log(res.data)
            setTeam (res.data)
        })
    },[ state ])

    const removeFromDom = teamId => {
        setTeam(team.filter(team => team._id != teamId));
        setState(!state)
    }

    const createTeam = teamId => {
        
        axios.post("http:8000/api/team" ,team)
        .then(res => {
            setTeam([... team, res.data])
        })
    }
    return (
        <div>
            <Link to='/new'> Add Your Player </Link>
            <Router>
                <TeamList path="/" team={ team } removeFromDom = {removeFromDom}/>
                <TeamForm path="/new" setState={setState} state={state} onSubmitProp={createTeam}/>
            </Router>
        </div>
    )
}

export default Wrapper
