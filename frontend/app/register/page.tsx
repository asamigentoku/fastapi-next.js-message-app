"use client"
import {useState} from 'react'
import Link from 'next/link'
import "./style.css"
import {validateForm} from '../function/expression'

export default function Home(){
    const [name,setName]=useState('')
    const [pass,setPass]=useState('')
    const [ifsuccess,setsucsess]=useState(false)
    const [ifalert,setalert]=useState(false)

    const doName=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const val=event.target.value
        setName(val)
    }
    const doPass=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const val=event.target.value
        setPass(val)
    }
    async function register(formData:FormData){
        try{
            const response=await fetch('/register-form',{
            method:'POST',
            body:formData,
        });
        //結果を受け取る
        if(response.ok){
            const data=await response.json();
            setName('');
            setPass('');
            if(data.message=="registerd"){
                //登録された後の処理
                setsucsess(true);
            }
        }

        } catch(error){
            console.log(error);
        }
    }
    return (
    <main className="register-container">
        <div className="register-card">
            {!ifsuccess ? (
            <>
                <h1 className="register-title">アカウント登録ページ</h1>

                <form
                    onSubmit={async (e) => {
                    setalert(false)
                    e.preventDefault();
                    if (validateForm(name,pass)) {
                    const formData = new FormData(e.currentTarget);
                    await register(formData);
                    } else{
                        setalert(true)
                        //ここでアラートをかく
                    }
                }}
                
                className="register-form">
                <input
                    type="text"
                    name="name"
                    placeholder="ユーザー名は3文字以上にしてください"
                    value={name}
                    onChange={doName}
                    className="register-input"
                    required
                />

                <input
                    type="text"
                    name="pass"
                    placeholder="パスワードは5文字以上で、大文字・小文字・数字を含めてください"
                    value={pass}
                    onChange={doPass}
                    className="register-input"
                    required
                />

                <button className="register-button">
                    登録
                </button>
                </form>
                {!ifalert ?(
                    <>
                    </>
                ):(
                    <>
                        <p className="text-red-600 mt-2 text-sm">※正しいユーザー名とパスワードを使用してください</p>
                    </>
                )}
            </>
            ) : (
            <>
                <h1 className="register-success"> アカウント登録が完了しました</h1>
                <Link href="/login" className="register-button">
                ログイン画面へ
                </Link>
            </>
            )}
        </div>
        </main>
    );
}