import Link from "next/link"
import "./first_menu.css"

export const SecondMenu = () => {
    return (
        <nav className="second-menu">
            <ul>
                <li className="current">
                    <Link href="/">ホーム</Link>
                </li>
                <li>
                    <Link href="/ranking">トーク</Link>
                </li>
                <li>
                    <Link href="/sell">友達</Link>
                </li>
            </ul>
        </nav>
    )
}