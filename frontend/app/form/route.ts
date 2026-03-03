'use server'
const url="http://my-backend:8000"

export async function POST(request:Request){
    const formData=await request.formData()
    const recived_name=formData.get('name')?.toString() || "";
    const recived_pass=formData.get('pass')?.toString() || "";
    console.log(recived_name)
    const login_result=await fetch(url+"/login",{
        method:"POST",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded" ,
        },
        body:new URLSearchParams({
            username:recived_name,
            password:recived_pass
        }),
    });

    const data=await login_result.json();
    return new Response(JSON.stringify(data),{
        status:200,
        headers:{ "Content-Type": "application/json" }
    })

}