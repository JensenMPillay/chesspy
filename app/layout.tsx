import Footer from "./layout/Footer";
import Header from "./layout/Header";
import "./styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "ChessPy | Search Chess Statistics",
  description: "Welcome to Chesspy, a chess statistics search engine.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat`}>
        <main className="relative z-0 flex min-h-screen w-full flex-col items-center bg-neutral-900 p-4 text-white md:p-6 lg:p-8 xl:p-10">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
