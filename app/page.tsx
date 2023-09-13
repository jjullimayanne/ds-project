
import Button from './components/button/button'
import './globals.css'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
 <Button className='bg-primary theme-violet'>Clique me</Button>
 <Button className='bg-secundary theme-violet'>Clique me</Button>
 <Button className='bg-primary'>Clique me</Button>
 <Button className='bg-secundary'>Clique me</Button>
    </main>
  )
}
