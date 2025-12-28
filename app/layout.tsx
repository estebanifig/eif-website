import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Esteban Figueroa",
  description: "Robotics • Controls • Hardware • Software",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Full-height flex column so footer sticks to bottom */}
        <div className="min-h-screen flex flex-col">
          {/* Header stays constrained + centered */}
          <header className="p-6 border-b">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
              <div className="font-semibold">Esteban Figueroa</div>
              <Nav />
            </div>
          </header>

          {/* Main grows to fill space between header and footer */}
          <main className="flex-1">
            <div className="max-w-5xl mx-auto p-10">{children}</div>
          </main>

          {/* Footer always at bottom, full width, but its own layout is inside the component */}
          <Footer />
        </div>

        <Analytics />
      </body>
    </html>
  );
}