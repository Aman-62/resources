import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Projects hub",
  description: "All Projects at one Place",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter:image": "",
    "og:url": "",
    "og:image": "",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-900 font-poppins">
        {children}
      </body>
    </html>
  );
}
