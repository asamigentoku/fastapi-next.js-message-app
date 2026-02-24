import Link from 'next/link'

export default function Home(){
  return(
    <main>
      <h1 className="title">トップページ</h1>
      <p className="msg">以下をクリックしてログインしてください</p>
      <div>
        <Link href="/login" className="text-blue-600 underline">go other page</Link>
      </div>
    </main>
  )
}