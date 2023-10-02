import Link from 'next/link';
import './globals.css'
import { Inter } from 'next/font/google'
import { AppProvider } from './components/app-providers';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Student Manager By QunnTrnn',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
        <nav className="">
          <div className="bg-lime-500">
            <Link className='font-bold text-black' href='/'>
              Home
            </Link>
            <span className='nx-4'>|</span>
              <Link className='font-bold text-red-700' href='/Students'>
                Students
              </Link>
          </div>
        </nav>
        {children}
        </AppProvider>
      </body>
    </html>
  );
}