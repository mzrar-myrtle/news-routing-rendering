const GET = (request) => {
    console.log(request)

    // return Response.json()
    return new Response("Hello!");
}

const POST = (request) => {
}


export {GET, POST}