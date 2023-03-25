import React, { useState, useEffect } from 'react';


function Posts() {
    const [data, getData] = useState([])
    const URL = 'https://jsonplaceholder.typicode.com/posts';

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
                    <th>user Id</th>
                    <th>Id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                    
                ))}
            </tbody>
            </table>
        </>
    );
}

export default Posts;