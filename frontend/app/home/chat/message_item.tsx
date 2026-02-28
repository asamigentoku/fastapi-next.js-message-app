type Message = {
    id: number
    room_id: number
    user: string
    content: string
    created_at: string
}

type MessageItemProps = {
    msg: Message
    is_right: boolean
}

export const MessageItem = ({ msg, is_right }: MessageItemProps) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: is_right ? "flex-end" : "flex-start",
                marginBottom: "6px", // 少し近づける
            }}
        >
            <div
                style={{
                    backgroundColor: is_right ? "#DCF8C6" : "#FFFFFF",
                    color: "#000",
                    padding: "6px 10px", // 内側の余白を少し小さく
                    borderRadius: "16px",
                    maxWidth: "65%",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                    wordBreak: "break-word", // 長い文章でも折り返す
                }}
            >
                <div
                    style={{
                        fontSize: "10px", // 名前を少し小さく
                        color: "gray",
                        marginBottom: "2px",
                        fontWeight: 500,
                    }}
                >
                    {msg.user} • {msg.created_at.slice(11, 16)}
                </div>
                <div style={{ fontSize: "14px", lineHeight: "1.4" }}>
                    {msg.content}
                </div>
            </div>
        </div>
    )
}