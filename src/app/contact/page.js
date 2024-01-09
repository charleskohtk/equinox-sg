import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'


export default function page() {

    return (
    <main className="min-h-screen items-center ">
    <Navbar  />
    <Contact />
    <Footer />
    </main>
    )
}