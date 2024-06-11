// "use client"

import Link from 'next/link'
import styles from './blog.module.css'
// import { useEffect, useState } from 'react'

const blog = async () => {
  // /* client-side rendering (not recomended) */
  // const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/blogs').then((data) => {
  //     return data.json();
  //   }).then((parsed) => {
  //     setBlogs(parsed)
  //   })
  // }, [])

  /* server-side rendering (recomended) */
  // In the app directory, data fetching with fetch() will default to cache: 'force-cache', which will cache the request data until manually invalidated. This is similar to getStaticProps in the pages directory.
  // In the app directory, getStaticPaths is replaced with generateStaticParams.
  // By setting the cache option to no-store, we can indicate that the fetched data should never be cached. This is similar to getServerSideProps in the pages directory.
  const blogs = await fetch(`${process.env.NEXT_PUBLIC_hostingDomain}/api/blogs`, { cache: 'no-store' }).then((res) => res.json())

  return (
    <div>
      <main className={styles.main}>
        <h1>Latest Blogs</h1>
        {blogs.map((blogItem) => {
          return (
            <Link key={blogItem.title} className={styles.blogDiv} href={`/blogpost/${blogItem.slug}`}>
              <h2 className={styles.blogTitle}>{blogItem.title}</h2>
              <p className={styles.blogDivP}>{blogItem.content.replace(/<[^>]+>/g, '').substr(0, 300)}...</p>
            </Link>
          )
        })}
      </main>
    </div>
  )
}

export default blog
