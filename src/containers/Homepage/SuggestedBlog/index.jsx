import React from 'react'
import placeHolderImage from "@public/images/official/others/cannot-load.png";
import useEmblaCarousel from 'embla-carousel-react'
import styles from './suggested-blog.module.scss'
import Image from 'next/image'
import { imageLoader } from "src/app/services";
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay';

export default function SuggestedBlogs({ blogs }) {
    const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true })
    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {blogs.map((blog, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <BlogCard data={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

function BlogCard({ data }) {
    return (
        <div className="bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col p-5">
            <div className='h-full flex-1'>
                <div className='relative w-full h-64'>
                    <Image
                        alt={data?.media.alt}
                        src={data?.media.url || placeHolderImage}
                        loader={data?.media.url ? imageLoader : undefined}
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
                <a href="#">
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{data?.title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2 md:line-clamp-3">{data?.description}</p>

            </div>
            <div className="cursor-pointer px-6 py-2 float-left bg-next-btn text-sm font-medium text-center hover:bg-gray-800 transition text-gray-100  duration-500" style={{
                width: 'fit-content'
            }}>
                <Link className="" href="/about-me"
                    passHref
                >Đọc ngay</Link>
            </div>
        </div>
    )
}