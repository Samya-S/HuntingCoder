import { promises as fs } from 'fs'

export async function GET() {
    const blogs = (await fs.readdir(process.cwd() + `/blogdata/`))
    let allBlogsData = []
    for (let i = 0; i < blogs.length; i++) {
        const blogData = JSON.parse(await fs.readFile(process.cwd() + '/blogdata/' + blogs[i],"utf-8"))
        allBlogsData.push(blogData)
    }
    // blogs.forEach(async (blogItem) => {
    //     const blogData = JSON.parse(await fs.readFile(process.cwd() + '/blogdata/' + blogItem,"utf-8"))
    //     allBlogsData.push(blogData)
    // });

    return Response.json(allBlogsData)  
}
