import { promises as fs } from 'fs'

export async function GET(request) {
  // slug is "hello" for /api/getBlog?slug=hello
  const slug = request.nextUrl.searchParams.get('slug')
  console.log((slug))
  
  try{
    const blogData = JSON.parse(await fs.readFile(process.cwd() + `/blogdata/${slug}.json`,"utf-8"))
    return Response.json(blogData)
  }

  catch(err){
    return Response.json({error: "No such blog found!"})
  }
}
