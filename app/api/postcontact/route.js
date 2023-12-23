import { promises as fs } from 'fs'

export async function POST(request) {
    const totalData = await fs.readdir(process.cwd() + '/contactdata')
    // console.log(totalData)
    const data = (await request.json()) // req.body
    // console.log(data)
    fs.writeFile(process.cwd() + `/contactdata/person${totalData.length + 1}-${data.name}.json`, JSON.stringify(data))
    return Response.json({data: "sample"})
}

// export async function POST(request) {
//     const formData = await request.formData()
//     const name = formData.get('name')
//     const email = formData.get('email')
//     return Response.json({ name, email })
// }