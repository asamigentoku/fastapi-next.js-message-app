"use client"
import {useState} from 'react'
import Link from 'next/link'
import "./style.css";

export default function Home(){
    const [name,setName]=useState('')
    const [pass,setPass]=useState('')
    const [longined,setlogin]=useState(false)
    const [loginname,setloginname]=useState('')
    const doName=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const val=event.target.value
        setName(val)
    }
    const doPass=(event: React.ChangeEvent<HTMLInputElement>)=>{
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
            if((data.access_token)){
                setlogin(true);
            }
        }

        } catch(error){
            console.log(error);
        }
    }
    return(
        <main className="login-container">
            <div className="login-card">
                <h1 className="login-title">ログインページ</h1>
                {!longined ?(
                    <>
                        <p className="login-msg">名前とパスワードを入力</p>
                            <form action={login} className="login-form">
                                <div>
                                    <input type="text" className="login-input"
                                        name="name" placeholder="ユーザー名" value={name} onChange={doName} required/>
                                </div>
                                <div>
                                    <input type="password" className="login-input"
                                        name="pass" placeholder="パスワード" value={pass} onChange={doPass} required/>
                                </div>
                                <div className="mx-3">
                                    <button className="login-button">ログイン</button>
                                </div>
                            </form>
                            <div>
                                <Link href="/register" className="register-link">新規アカウント登録はこちらから</Link>
                            </div>
                    </>
                    
                ):(
                    <>
                        <p className="success-msg">ログインが完了しました</p>
                        <div>
                            <Link href={`/home/${loginname}`} className="login-button">あなたのホーム画面に移動</Link>
                        </div>

                    </>
                )}
            </div>
            
        </main>
    )
}