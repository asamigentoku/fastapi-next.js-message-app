"use client"
import useSWR from 'swr'
import { MessageItem } from "./message_item"
import './screen_style.css'

type Message = {
    id: number
    room_id: number
    user: string
    content: string
    created_at: string
}

const url = 'http://localhost:3000/home/chat/message-api'

const fetcher = (...args: any) => fetch(...args).then(res => res.json())

type TalkScreenProps = {
    user_name: string
}

export const Talk_screen = ({ user_name }: TalkScreenProps) => {
    const { data, error, isLoading } = useSWR(url, fetcher)

    if (isLoading) return <div>読み込み中...</div>
    if (error) return <div>読み込みエラー</div>

    return (
        <div className="talk-container">
            <div className="talk-card">
                {data.map((msg: Message) => (
                    <MessageItem key={msg.id} msg={msg} is_right={user_name === msg.user} />
                ))}
                <div className="input-user">
                    <input type="text" placeholder="メッセージを入力..." />
                    <button>送信</button>
                </div>
            </div>
        </div>
    )
}