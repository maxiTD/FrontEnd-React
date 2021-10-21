import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { NavigationBar } from './ui/NavigationBar';
import { getPosts } from '../helpers/posts.service';


const  token = localStorage.getItem('token');
//Comprobar token valido

export const DataGrid = () => {

    const [posts, setposts] = useState([]);

    useEffect(() => {
        
        const fetchPosts = async(token) => {
            const {data} = await getPosts(token);
            setposts(data);
        }

        fetchPosts(token);
    }, [])

    return (
        <>
            <NavigationBar />
            <Table className="mt-4" striped bordered hover size="sm" responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody> 
                    {posts.map(post => 
                    <tr key={post.id}> 
                            <td>{post.id}</td>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                    </tr> 
                    )}
                </tbody>
            </Table>
        </>        
    )
}
