import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './context/AutContext'
import ToasterContext from './context/ToasterContext'
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='max-w-3xl mx-auto p-4 '>
        <Navbar />
        {children}

        </div>
       </body>
    </html>
  )
}
