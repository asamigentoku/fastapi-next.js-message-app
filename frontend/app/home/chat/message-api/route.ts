"use server"

export async function GET(request: Request) {

    const messages = [
        { id: 1, room_id: 1, user: "taro", content: "こんにちは", created_at: "2026-02-27T10:00:00" },
        { id: 2, room_id: 1, user: "hanako", content: "やあ！", created_at: "2026-02-27T10:01:00" },
        { id: 3, room_id: 1, user: "taro", content: "元気？", created_at: "2026-02-27T10:02:00" },
        { id: 4, room_id: 1, user: "hanako", content: "元気だよ〜！", created_at: "2026-02-27T10:03:00" },
        { id: 5, room_id: 1, user: "taro", content: "今日暇？", created_at: "2026-02-27T10:04:00" },
        { id: 6, room_id: 1, user: "hanako", content: "ちょっと買い物行く予定〜", created_at: "2026-02-27T10:05:00" },
        { id: 7, room_id: 1, user: "taro", content: "そっか〜どこ行くの？", created_at: "2026-02-27T10:06:00" },
        { id: 8, room_id: 1, user: "hanako", content: "駅前のショッピングモール！", created_at: "2026-02-27T10:07:00" },
        { id: 9, room_id: 1, user: "taro", content: "いいね！気をつけてね", created_at: "2026-02-27T10:08:00" },
        { id: 10, room_id: 1, user: "hanako", content: "ありがとう😊 またあとでね！", created_at: "2026-02-27T10:09:00" }
    ]
    // 古い順に並び替え
    const sorted = messages.sort(
        (a, b) =>
            new Date(a.created_at).getTime() -
            new Date(b.created_at).getTime()
    )
    console.log("route.ts")

    return new Response(JSON.stringify( sorted ), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    })
}