import type { Metadata } from "next";
import { Inter, Alike } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });
const alike = Alike({ subsets: ["latin"], weight: "400" }); // Customize if needed

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
        {/* Basic Metadata */}
        <title>Dilli House</title>
        <meta name="description" content="Your Getaway In The Himalayas" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Dilli House" />
        <meta property="og:description" content="Experience tranquility at Dilli House, your perfect getaway in the Himalayas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dillihouse.com" />
        <meta property="og:image" content="https://dillihouse.com/assets/images/og-image.jpg" />
        <meta property="og:image:alt" content="Dilli House in the Himalayas" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dilli House" />
        <meta name="twitter:description" content="Experience tranquility at Dilli House, your perfect getaway in the Himalayas." />
        <meta name="twitter:image" content="https://dillihouse.com/assets/images/og-image.jpg" />

        {/* Additional Metadata */}
        <meta name="google-site-verification" content="mgjQIyp6HfmpHMRophfBFo8bGtWG3z0KykEkJxNpUGk" />
      </head>
      <body className={`${inter.className} ${alike.className} flex flex-col min-h-screen`}>
        <Nav />
        <main className="flex-grow">{children}</main>
        <script src="/path/to/flowbite/dist/flowbite.min.js" async></script>
      </body>
    </html>
  );
}
