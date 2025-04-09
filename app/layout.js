import { Cabin } from "next/font/google";
import "./css/globals.scss";
import Navbar from "./components/Navbar";
const cabin=Cabin({subsets:["latin"]});
import "./css/card.scss";

export const metadata = {
  title: "Siddhi Nagapure Portfolio",
  src:"/NexusGleam.jpeg",
  description: "Created by Siddhi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cabin.className}
      >
       
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
      <Navbar />
        {children}
      </main>
      </body>
    </html>
  );
}
