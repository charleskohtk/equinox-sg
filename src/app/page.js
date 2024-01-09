import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import ProductsAll from '@/components/ProductsAll'


export default function Home() {
  return (
    <main className="min-h-screen items-center ">
    <Navbar  />
    <Intro />
    <ProductsAll />
    <Footer />
    </main>
  )
}
