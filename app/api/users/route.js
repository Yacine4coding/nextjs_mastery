export async function GET(request){
    //handle GET request for /api/users
    // Retrieve users from the database or any data source
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'bob' }
    ]

    // Send the users as a response
    return new Response(JSON.stringify(users))
}