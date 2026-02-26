import Link from 'next/link'
import "./globals.css";

export default function Home(){
  return (
    <>
        <div className="header">
              <h1 className="header-content">Sample Web Application</h1>
        </div>
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
        <div className="footer">
            <hr/>
            <p className="footer-content">
                copyright 2023 SYODA-Tuyano.
            </p>
        </div>
    </>
  );
}