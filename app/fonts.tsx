import { Audiowide, Inter } from "@next/font/google"

export const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter"
})

export const audiowide = Audiowide({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-audiowide"
})