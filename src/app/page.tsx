import { Hero } from "./_components/Hero";
import { About } from "./_components/About";
import { Services } from "./_components/Services";
import { Testimonials } from "./_components/Testimonials";
import { Footer } from "./_components/Footer";
import Certified from "./_components/Certified";
import Products from "./_components/Products";
// import Aerocare from "./_components/Aerocare";

export default function Home() {
  return (
    <main>
      <Hero />
      <Certified />
      <About />
      <Services />
      <Products />
      {/* <Aerocare /> */}
      <Testimonials />
      <Footer />
    </main>
  )
}