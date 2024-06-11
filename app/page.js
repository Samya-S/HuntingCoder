// 'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

const Home = async () => {
  const blogs = (await fetch(`${process.env.NEXT_PUBLIC_hostingDomain}/api/blogs`, { cache: 'no-store' }).then((res) => res.json())).slice(0, 3)

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>&lt;HuntingCoder/&gt;</h1>

      <p className={styles.description}>
        A blog for hunting coders by a hunting coder
      </p>

      <Image className={styles.homeImg} src="/homeImg.jpg" priority={true} alt="" width={600} height={400} />

      <div className={styles.homeText}>
        <h2 className={styles.h2}>Latest Blogs</h2>
        {blogs.map((blogItem) => {
          return (
            <div key={blogItem.title} className={styles.homeTextBLog}>
              <h3 className={styles.h3}>{blogItem.title}</h3>
              <p style={{textAlign: 'justify'}}>{blogItem.content.replace(/<[^>]+>/g, '').substr(0, 300)}...</p>
              <Link href={`/blogpost/${blogItem.slug}`}><button className={styles.btn}>Read More</button></Link>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Home
