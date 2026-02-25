export default async function Page({ params }){
    const {logined_name}=await params
    return(
        <main>
            <h1>ホーム</h1>
            <p>こんにちわ{logined_name}さん!!</p>
        </main>
    )
}