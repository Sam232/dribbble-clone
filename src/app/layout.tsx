import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './css/globals.css'

export const metadata: Metadata = {
  title: 'Dribble-Clone',
  description: 'Lorem Ipsum Dolor Sit Amet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-bodyFont bg-slate-100">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
