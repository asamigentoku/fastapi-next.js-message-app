import { ReactNode } from "react"

export default function RegisterLayout({ children }: {
    children: ReactNode
}) {
    return (
        <>
            <div className="header">
                <h1 className="header-content">Sample Web Application</h1>
            </div>

            {children}

            <div className="footer">
                <hr />
                <p className="footer-content">
                    copyright 2023 SYODA-Tuyano.
                </p>
            </div>
        </>
    )
}