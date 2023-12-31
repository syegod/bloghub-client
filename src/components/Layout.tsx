import { ReactNode } from "react"
import Header from "./Header"
import SideBar from "./sidebar/SideBar"
import FootBar from "./FootBar"
import RightBar from "./rightbar/RightBar"
import { LayoutProps } from "../types"



export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <div className="px-1 md:container 2xl:px-[7%] mx-auto mt-16">
                <SideBar />
                <div className="w-full flex flex-row">
                    <main className="sm:ml-16 lg:ml-64 min-h-[90vh] sm:border-l lg:border-x w-full lg:w-2/3 pb-10 sm:pb-0">
                        {children}
                    </main>
                    <RightBar />
                </div>

            </div>
            <FootBar />
        </>
    )
}