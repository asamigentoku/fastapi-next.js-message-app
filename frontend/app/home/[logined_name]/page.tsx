import { Talk_screen } from "../chat/talk_screen";
type PageProps = {
    params: {
        logined_name: string; // ダイナミックルートから取得
    };
};

export default async function Page({ params }: PageProps){
    const { logined_name } = await params;
    return(
        <div>
            <p>こんにちわ{logined_name}さん!!</p>
            <Talk_screen user_name={logined_name}/>
        </div>
    )
}