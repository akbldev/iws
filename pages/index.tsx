import About from "@/components/home/about";
import Clients from "@/components/home/clients";
import Contact from "@/components/home/contact";
import Cta from "@/components/home/cta";
import Cta2 from "@/components/home/cta2";
import Cta3 from "@/components/home/cta3";
import Hero from "@/components/home/hero";
import Protfolio from "@/components/home/protfolio";
import Services from "@/components/home/services";
import Testimonial from "@/components/home/testimonial";
import Layout from "@/components/layouts/layout";
import { NextPageWithLayout } from "@/types/next";
import Head from "next/head";

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <About />
      <Cta />
      <Services />
      <Protfolio />
      <Cta2 />
      <Testimonial />
      <Cta3 />
      <Clients />
      <Contact />
    </div>
  );
};

HomePage.getLayout = (page) => (
  <Layout>
    <Head>
      <title>Iemmar Web Services | IWS</title>
    </Head>
    {page}
  </Layout>
);

export default HomePage;
