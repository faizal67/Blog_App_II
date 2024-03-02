import React ,{useEffect, useState} from 'react'
import appwriteService from '../appwrite/db'
import { PostCard , Container } from '../components'

const AllPost = () => {
    const [post, setPost] = useState([])
    useEffect(()=>{
        appwriteService.getPosts([])
        .then((posts)=>{
            if(posts){
                setPost(posts.documents)
            }
        })
        .catch(console.log('error occur while fetching all post'))
    },[])
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
            {post.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
       
    </div> 
  )
}

export default AllPost
