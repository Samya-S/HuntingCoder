import styles from './blogpost.module.css'

const blogPostSlug = async ({ params }) => {
    /* server-side rendering */
    // In the app directory, data fetching with fetch() will default to cache: 'force-cache', which will cache the request data until manually invalidated. This is similar to getStaticProps in the pages directory.
    // In the app directory, getStaticPaths is replaced with generateStaticParams.
    // By setting the cache option to no-store, we can indicate that the fetched data should never be cached. This is similar to getServerSideProps in the pages directory.
    const blog = await fetch(`${process.env.NEXT_PUBLIC_hostingDomain}/api/getBlog?slug=${params.slug}`, { cache: 'no-store' }).then((res) => res.json())
    // const data = blog.content
    // console.log(blog.content)

    return (
        <div>
            <h1 style={
                { 
                    textAlign: 'center', 
                    margin: '40vh 0', 
                    display: ('error' in blog) ? 'block' : 'none', 
                    fontWeight: 'normal', 
                    fontFamily: 'monospace' 
                }
            }>
                {blog.error}
            </h1>
            
            <main className={styles.main}>
                <h1 className={styles.title}>{blog.title}</h1>
                {/* <p className={styles.content} dangerouslySetInnerHTML={{ __html: data }}></p> */}
                <p className={styles.content}>{blog.content}</p>
            </main>
        </div>
    )
}

export default blogPostSlug
