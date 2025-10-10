import React from 'react'
import PostCard from './PostCard'

const AllPosts = () => {
    return (
        <>
            <h2 className='pb-5 font-bold text-3xl my-5'>All Post's</h2>
            <section
                className='grid grid-cols-3 max-lg:grid-cols-1 place-items-center gap-5'
            >
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />

            </section>

        </>
    )
}

export default AllPosts