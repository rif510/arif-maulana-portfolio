import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamad Arif Maulana | Web Developer",
  description:
    "Professional portfolio of Mohamad Arif Maulana, a web developer focused on banking applications and web technologies.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
