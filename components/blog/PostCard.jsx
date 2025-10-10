import React from 'react'
import { User, Calendar, Hash, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const PostCard = () => {
    return (
        <div
            className='flex flex-col rounded-md bg-card transition-transform duration-200 hover:scale-[1.02] shadow-md shadow-black/10 hover:shadow-lg cursor-pointer'
        >
            <img
                src={`https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 100)}`}
                className="rounded-md rounded-b-none"
            />
            <div
                className='flex flex-col my-3 p-2'
            >
                <h3 className='font-semibold text-xl'>Post Title lorem</h3>
                <div className='flex items-center justify-start gap-4 mt-2 text-muted-foreground text-sm'>
                    <div>
                        <User className='inline mr-2 -mt-1' size={15} />
                        <span>Admin</span>
                    </div>
                    <div className='text-sm'>
                        <Calendar className='inline mr-2 -mt-1' size={15} />
                        <span>20.10.2023</span>
                    </div>
                    <Badge asChild>
                        <span>
                            <Hash className='' size={15} />
                            <Link href="/deneme">Daily</Link>
                        </span>
                    </Badge>
                </div>
                <p className='line-clamp-2'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat vero repudiandae possimus voluptates laborum eaque deleniti adipisci quas aliquam, architecto fugit iusto rem ab id? Voluptate delectus illum provident aliquid!
                </p>
                <div className='ml-auto mt-5'>
                    <span>Read More</span>
                    <ArrowRight className='inline -mt-1 ml-2' size={15} />
                </div>
            </div>
        </div>
    )
}

export default PostCard