import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    let router = useRouter()
  return (
      <>
      <h1> Hello</h1>
      <button onClick={()=>router.push('/admin/product/create')}> Click  </button>
      </>
  )
}
