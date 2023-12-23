'use client'

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <style jsx>
        {`
          
        `}
      </style>

      <h1 className={styles.title}>&lt;HuntingCoder/&gt;</h1>
      
      <p className={styles.description}>
        A blog for hunting coders by a hunting coder
      </p>

      <Image className={styles.homeImg} src="/homeImg.jpg" priority={true} alt="" width={600} height={400}/>

      <div className={styles.homeText}>
          <h2 className={styles.h2}>Latest Blogs</h2>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web.</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
    </main>
  )
}
