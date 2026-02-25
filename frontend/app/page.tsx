import Link from 'next/link'
import "./globals.css";

export default function Home(){
  return (
    <main className="home-container">
      <div className="card">
        <h1 className="title">トップページ</h1>
        <p className="msg">
          以下のボタンからログインしてください
        </p>
        <Link href="/login" className="login-button">
          ログインページへ
        </Link>
      </div>
    </main>
  );
}