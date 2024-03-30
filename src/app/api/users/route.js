import { db } from "src/helpers/api/db";

/* const User = db && db.User */
const Login= db && db.Login 



const GET = async () => {
    if (!Login) {
        throw new Error('Login model is not defined');
    }
    const parsedData = await Login.find();
    return Response.json({parsedData})
}   

const POST = async (req) => {
    const requestData = await req.json()
    console.log(requestData['email'])
    const login = new Login(requestData);
    await login.save();  
    return Response.json({'Message': 'POST data'})  
}   

const DELETE = async () => {
    return Response.json({'Message': 'DELETE data'})
}   

const PUT = async () => {
    return Response.json({'Message': 'PUT data'})
} 

const PATCH = async () => {
    return Response.json({'Message': 'PATCH data'})
}


export {GET, POST, DELETE, PUT, PATCH}