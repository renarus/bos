import React, { useState, useEffect } from 'react';
import { NavLink} from 'react-router-dom';

function Users() {
    const [data, getData] = useState([])
    const URL = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                getData(response);
            })

    }

    return (
        <>
        <table>
            <tbody>
                <tr>
                    <th> Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th> Address</th>
                    <th>GEO</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <NavLink to='/posts'>{item.id}</NavLink>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        {/* <td>{item.address}</td> */}
                        <td>{item.geo}</td>
                       
                    </tr> 
                ))}
            </tbody>
            </table>
        </>
    );
}

export default Users;