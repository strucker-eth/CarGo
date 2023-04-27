import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Header';
import buttons from '@/components/button';
import Cards from '@/components/Card';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <main>

      <Navigation>
        
        </Navigation>

<Cards></Cards>
     
    </main>
  )
}
