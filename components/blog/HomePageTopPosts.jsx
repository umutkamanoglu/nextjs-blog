import React from 'react'
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from 'lucide-react'

const HomePageTopPosts = () => {

    const testData = [
        {
            id: 1,
            title: "Test Post 1",
            image: "https://picsum.photos/1920/1080",
            category: "Category 1",
            date: "2023-01-01",
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 2,
            title: "Test Post 2",
            image: "https://picsum.photos/1920/1080",
            category: "Category 2",
            date: "2023-01-02",
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 3,
            title: "Test Post 3",
            image: "https://picsum.photos/1920/1080",
            category: "Category 3",
            date: "2023-01-03",
            description: "This is a test post description."
        },
    ]

    return (
        <>
            <h2 className='pb-5 font-bold text-3xl'>Latest Content's</h2>
            <section
                className="w-full h-[calc(100%-10rem)] grid grid-cols-2 gap-10 max-lg:grid-cols-1"
            >
                {/* <div className="row-span-2 bg-[url('https://picsum.photos/1920/1080')] bg-cover">1</div>
                <div className="bg-blue-500">2</div>
                <div className="bg-green-500">3</div> */}
                {
                    testData.map((post, index) => {
                        return (
                            <div
                                key={index}
                                className={`${index == 0 && "row-span-2 max-lg:row-span-1 lg:h-[calc(100vh-20rem)]"} max-sm:h-64 max-sm:p-3 bg-cover bg-center bg-no-repeat rounded-md cursor-pointer transition-transform duration-200 hover:scale-[1.02] bg-linear-to-b flex flex-col-reverse p-10`}
                                style={{
                                    backgroundImage: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.9)), url('https://picsum.photos/1920/1080?random=${post.id}')`,
                                }}
                            >
                                <div className='flex flex-col gap-3'>
                                    <h6 className='font-semibold text-2xl text-white'>
                                        {post.title}
                                    </h6>
                                    <p className='text-sm text-gray-300 line-clamp-1'>
                                        {post.description}
                                    </p>
                                    <div className='flex items-center justify-between'>
                                        <Badge variant="secondary">{post.category}</Badge>
                                        <h6 className='text-right mt-5 flex items-center'>Read More <ArrowRight size={17} className='ml-2' /></h6>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default HomePageTopPosts