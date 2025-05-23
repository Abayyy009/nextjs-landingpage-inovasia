import Head from "next/head";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import InovasiaPrivate from "@/components/private/inovasia-private";
import Hero from "@/components/private/hero";
import Highlights from "@/components/private/highlights";
import Timeline from "@/components/private/timeline";
import PricingSection from "@/components/private/registrationForm";
import Gallery from "@/components/private/galery";
import Testimoni from "@/components/home/testimoni";
import Workshop from "@/components/home/workshop";
import PrivateClass from "@/components/private/solusi";
import Navbarprivate from "@/components/layout/navbar-private";

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page Inovasia Course</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="bg-[#0f0c29] text-white font-sans">
        <Navbarprivate />
        {/* <InovasiaPrivate /> */}
        <Hero />
        <Highlights />
        <PrivateClass />
        <PricingSection />
        <Gallery />
        <Testimoni />
        <Workshop />
        <Footer />
      </main>
    </>
  );
}
