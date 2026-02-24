"use client"
import {useState} from 'react'

export default function Home(){
    const [name,setName]=useState('')
    const [pass,setPass]=useState('')
    const doName=(event)=>{
        const val=event.target.value
        setName(val)
    }
    const doPass=(event)=>{
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
            }
        }

        } catch(error){
            console.log(error);
        }
    }
    return(
        <main>
            <h1>アカウント登録ページ</h1>
            <form action={register}>
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
        </main>
    )
}