import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dilli House",
  description: "Your Getaway In The Himalayas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="mgjQIyp6HfmpHMRophfBFo8bGtWG3z0KykEkJxNpUGk" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alike&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} flex font-alike flex-col min-h-screen`}>
        <Nav />
        <main className="flex-grow">
          {children}
        </main>

        <script src="../path/to/flowbite/dist/flowbite.min.js" async></script>
      </body>
    </html>
  );
}
