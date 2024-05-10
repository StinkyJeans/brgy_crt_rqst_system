import { Inter } from "next/font/google";
import "./globals.css";
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import Navbar from "./components/Navbar";
import { EdgeStoreProvider } from './lib/edgestore';
import { getServerSession } from "next-auth";
import SessionProvider from "./utils/SessionProvider";
import Footer from "./components/Footer";
import Homepage from "./homepage/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Barangay Rizal Certification Request System",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="absolute inset-0 bg-cover bg-center z-[-1]" style={{ backgroundImage: "url('./login-bg.png')" }}> */}
          <SessionProvider session={session}>
            <EdgeStoreProvider>
            
              <div className="mx-auto max-w-5xl text-2xl">
              <Navbar />
              <div className="w-full h-auto p-10  ">
                {children}
              </div>
              </div>
              <Footer />
            
            </EdgeStoreProvider>
          </SessionProvider>
        {/* </div> */}
      </body>
    </html>
  );
}
