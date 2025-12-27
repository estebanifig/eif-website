import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
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

// Next.js Template

// export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>){
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <Nav /> 
//         {children}
//       </body>
//     </html>
//   );
// }

// New RootLayout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="p-6 border-b">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div className="font-semibold">Esteban Figueroa</div>
            <Nav />
          </div>
        </header>
        <main className="max-w-5xl mx-auto p-10">{children}</main>
      </body>
    </html>
  );
}
