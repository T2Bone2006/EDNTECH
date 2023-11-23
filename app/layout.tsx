import NavBar from "@/components/NavBar";
import "../styles/globals.css";
import {audiowide, inter} from "./fonts";

const RootLayout = ({children, } : { children: React.ReactNode}) => {
    return (

        <html className={`${inter.variable} ${audiowide.variable}`}>
            <body className="bg-brand-deep-blue">
                <NavBar />
                {children}
            </body>
        </html>
        

    )
}

export default RootLayout