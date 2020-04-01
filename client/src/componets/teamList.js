import React from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap"


export default props => {
    console.log(props.team)
    const { removeFromDom } = props;
    const deleteTeam =(teamid) => {
        axios.delete('http://localhost:8000/api/team/delete/' + teamid)
            .then(res => {
            removeFromDom(teamid)
        })
    }


    return (
        <table className="striped bordered hover table table-dark">
            <thead>
                <tr>
                <th>Players Name</th>
                <th>Perfered Position</th>
                <th>Actions</th>
                </tr>
            </thead>
                <tbody>
                {props.team.map((team, i)=>(
                <tr key={i}>
                <td>{team.playerName}</td>
                <td>{team.perferPosition}</td>
                <td>
                    <Button onClick = {() => deleteTeam(team._id)}>
                            Delete
                    </Button>
                </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}