type PageProps = {
    logined_name: string;
};

export default async function Page({logined_name}:PageProps){
    return(
        <div>
            <h1>ホーム</h1>
            <p>こんにちわ{logined_name}さん!!</p>
        </div>
    )
}