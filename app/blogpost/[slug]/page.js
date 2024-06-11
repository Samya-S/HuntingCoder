// "use client"
import styles from './blogpost.module.css'

const blogPostSlug = async ({ params }) => {
    const blogs = await fetch(`${process.env.NEXT_PUBLIC_hostingDomain}/api/blogs`, { cache: 'no-store' }).then((res) => res.json())
    const blog = blogs.find((blog) => blog.slug === params.slug)

    if (!blog) {
        return (
            <h1 style={{
                textAlign: 'center',
                margin: '40vh 0',
                fontWeight: 'normal',
                fontFamily: 'monospace'
            }}>
                No such blog found!
            </h1>
        )
    }

    return (
        <div>
            <main className={styles.main}>
                <h1 className={styles.title}>{blog.title}</h1>
                {/* <p className={styles.content} dangerouslySetInnerHTML={{ __html: data }}></p> */}
                {/* <p className={styles.content}>{blog.content}</p> */}
                <p className={styles.content} dangerouslySetInnerHTML={{__html: (blog.content).replace(/\n/g, '<br />')}}></p>
            </main>
        </div>
    )
}

export default blogPostSlug
