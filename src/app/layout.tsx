import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LiquidBackground from "@/components/LiquidBackground";
import SpotlightCursor from "@/components/SpotlightCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asad Tariq — Software Engineer",
  description:
    "Versatile software engineer with 3+ years building responsive, efficient web apps using Python, React.js, and Ruby on Rails. Experienced with AWS (EC2, S3, RDS, ASG) and advanced video/audio processing using OpenCV, MediaPipe, and Speechmatics.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Asad Tariq — Software Engineer",
    description:
      "Software engineer with Python, React.js, and Ruby on Rails experience; AWS and media processing (OpenCV, MediaPipe, Speechmatics).",
    url: "https://example.com",
    siteName: "Asad Tariq",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Asad Tariq — Full Stack Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asad Tariq — Software Engineer",
    description:
      "Versatile engineer building responsive, efficient apps with Python, React.js, and Ruby on Rails; AWS and media processing experience.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-800 dark:bg-[#0a0a0a] dark:text-slate-200`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var e=localStorage.getItem("theme");var initial=e||"dark";var isDark=initial==="dark";document.documentElement.classList.toggle("dark",isDark)}catch(_){}})();`,
          }}
        />
        <LiquidBackground />
        <SpotlightCursor />
        {children}
      </body>
    </html>
  );
}
