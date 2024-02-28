import About from "@/components/home/about";
import Cta from "@/components/home/cta";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";

const HomePage = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <About />
      <Cta />
      <Services />
    </div>
  );
};

export default HomePage;
