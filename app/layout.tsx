import type { Metadata } from 'next'
import '@/styles/globals.scss'
import { inter, audiowide } from "./font"
import NavBar from "@/components/Navbar/NavBar"



export const metadata: Metadata = {
    title: 'EdnTech',
    description: 'EdnTech : The software development company and social media marketing agency for you!',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
  return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <NavBar />
                {children}
            </body>
        </html>
    )
}
