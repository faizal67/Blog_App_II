import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/db'
import { Container, PostCard } from '../components'

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts()
            .then((posts) => {
                if (posts)
                    setPosts(posts.documents)
            })
            .catch(console.log('Error occur at home'))
    }, [])

    if (posts.length === 0)
        return (
            <div>
                <Container >No Post Available</Container>
            </div>
        )
    else
        return (
            <div className='py-8 w-full'>
                <Container>
                    <div className='flex flex-wrap'>
                        {posts.map((post) => (<div key={post.$id} className='p-2 w-1/4'><PostCard {...post} /></div>))}
                    </div>
                </Container>
            </div>
        )
}

export default Home
