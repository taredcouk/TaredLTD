import Navbar from "@/components/navbar";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Director from "@/components/sections/director";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Hire from "@/components/sections/hire";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Director Section */}
      <Director />

      {/* Services Section */}
      <Services />

      {/* Hire Section */}
      <Hire />
      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
