import React, { useEffect, useState } from 'react';
import UserModel from '../types/models';
import User from './User';



const Users = () => {

    const [users, setUsers] = useState<UserModel[]>([]);
    const [team, setTeam] = useState<UserModel[]>([]);

    useEffect( () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
    },[])

    const handleUser = (user: UserModel): void => {
        const newTeam = [...team, user];
        setTeam(newTeam)
    }

    return (
        <div>
            <h2>My users</h2>
            <h3>Team size: {team.length}</h3>
            {
                users.map(user => <User user={user} addUser={handleUser}></User>)
            }
        </div>
    );
};

export default Users;