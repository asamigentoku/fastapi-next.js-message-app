
import {First_menu} from "../hooks/first_menu"
import {SecondMenu} from "../hooks/second_menu"

import { ReactNode } from "react"
export default function ShopLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <div>
            <header>
                <First_menu></First_menu>
                <SecondMenu></SecondMenu>
            </header>

            <main>{children}</main>


        </div>
    )
}