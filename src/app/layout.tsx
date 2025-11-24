import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

const saira = Saira({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resulog | Log your results",
  description: `Have you ever created a resume and can't 
  think of what you did? Have you ever had to ask for a 
  promotion and can't think of any accomplishments that 
  you can use to support your argument?

  Resulog is a web app designed to help users log their 
  accomplishments, such that they always know what they 
  have done.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.className} antialiased`}>{children}</body>
    </html>
  );
}
