"use client"
import {useState} from 'react'
import Link from 'next/link'

export default function Home(){
    const [name,setName]=useState('')
    const [pass,setPass]=useState('')
    const [longined,setlogin]=useState(false)
    const [loginname,setloginname]=useState('')
    const doName=(event)=>{
        const val=event.target.value
        setName(val)
    }
    const doPass=(event)=>{
        const val=event.target.value
        setPass(val)
    }
    async function login(formData:FormData){
        try{
            const response=await fetch('/form',{
            method:'POST',
            body:formData,
        });
        //結果を受け取る
        if(response.ok){
            const data=await response.json();
            setName('');
            setPass('');
            setloginname(name);
            if(data.message=="login success"){
                setlogin(true);
            }
        }

        } catch(error){
            console.log(error);
        }
    }
    return(
        <main>
            <h1>login page</h1>
            {!longined ?(
                <>
                    <p>名前とパスワードを入力</p>
                        <form action={login}>
                            <div>
                                <input type="text" className="input mx-5 my-1"
                                    name="name" value={name} onChange={doName}/>
                            </div>
                            <div>
                                <input type="text" className="input mx-5 my-1"
                                    name="pass" value={pass} onChange={doPass}/>
                            </div>
                            <div className="mx-3">
                                <button className="button my-1">Click</button>
                            </div>
                        </form>
                        <div>
                            <Link href="/register" className="text-blue-600 underline">新規アカウント登録はこちらから</Link>
                        </div>
                </>
                
            ):(
                <>
                    <p>ログインが完了しました</p>
                    <div>
                        <p>こちらからホーム画面に移動してください</p>
                    </div>

                </>
            )}
        </main>
    )
}