import type { Metadata } from "next";
import { Crete_Round} from "next/font/google";
import "./globals.css";

const inter = Crete_Round({ subsets: ["latin"] , weight:["400"]});

export const metadata: Metadata = {
  title: "E-Commerce Store",
  description: "Created by Mahaveer kumar using nextjs with supabase ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
