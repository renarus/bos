import React, { useState, useEffect } from 'react';


function Comments() {
    const [data, getData] = useState([])
    const URL = 'https://jsonplaceholder.typicode.com/comments';

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
                    <th>post Id</th>
                    <th>Id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>body</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.postId}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.body}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </>
    );
}

export default Comments;