import "./first_menu.css"
import Link from "next/link"
export const First_menu=(()=>{
    return(
        <div className="first-menu">

                <div className="logo">
                    <a href="#"><img src="../logos/tree.png" alt="会社ロゴ"/></a>
                </div>

                <div className="serch">
                    <form action="#" className="search-form-2">
                        <label>
                            <input type="text" placeholder="キーワードを入力"/>
                        </label>
                        <button type="submit" aria-label="検索"></button>
                    </form>
                </div>

                <div className="favorite logo">
                    <Link href="/favorite">
                        <img src="/logos/favorite.png" alt="お気に入り" />
                    </Link>
                </div>

                <div className="cart logo">
                    <Link href="/cart">
                        <img src="/logos/cart.png" alt="お買い物かご" />
                    </Link>
                </div>

                <div className="history logo">
                    <Link href="/history">
                        <img src="/logos/history.png" alt="閲覧履歴" />
                    </Link>
                </div>

                <div className="my-menu logo">
                    <Link href="/account">
                        <img src="/logos/my-menu.png" alt="アカウント情報" />
                    </Link>
                </div>

                <div className="info logo">
                    <Link href="/info">
                        <img src="/logos/info-menu.png" alt="インフォメーションメニュー" />
                    </Link>
                </div>

            </div>
    )
});