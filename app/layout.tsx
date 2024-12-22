import "./globals.css"
import { Recursive } from "next/font/google"

const recursive = Recursive({ subsets: ["latin"] })

export const metadata = {
  title: "Clarice Leal",
  description: "Showcase of projects and personal information",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={recursive.className}>{children}</body>
    </html>
  )
}
