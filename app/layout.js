import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar'
import StyledJsxRegistry from './registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hunting Coder',
  description: 'A blog for hunting coders by a hunting coder',
  keywords: 'huntingcoder, huntingcoder blog'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  )
}
