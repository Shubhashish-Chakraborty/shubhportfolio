import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shubhashish Chakraborty | A folk passionate about tech :)",
  description: "Modern portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href={`${
            process.env.NODE_ENV === "production" ? "/" : ""
          }/favicon.svg`}
        />

        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <div className="bg-black-100 w-screen h-screen overflow-hidden flex items-center justify-center">
          <div className="bg-black-200 m-[15px] lg:m-[30px] rounded-lg border border-white flex flex-col w-[calc(100%-30px)] lg:w-[calc(100%-60px)] h-[calc(100%-30px)] lg:h-[calc(100%-60px)]">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
