'use server'
const url="http://127.0.0.1:8000"

export async function POST(request:Request){
    const formData=await request.formData()
    const recived_name=formData.get('name')?.toString() || "";
    const recived_pass=formData.get('pass')?.toString() || "";
    //アカウント登録用フォーム
    console.log(recived_name)
    const login_result=await fetch(url+"/register",{
        method:"POST",
        headers: {
        "Content-Type": "application/json" ,
        },
        body:JSON.stringify({
            user_name:recived_name,
            user_pass:recived_pass
        })
    });

    const data=await login_result.json();
    return new Response(JSON.stringify(data),{
        status:200,
        headers:{ "Content-Type": "application/json" }
    })

}