import Head from "next/head";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/home/hero";
import Highlights from "@/components/home/highlights";
import Timeline from "@/components/home/timeline";
import RegistrationForm from "@/components/home/registrationForm";
import Gallery from "@/components/home/galery";
import Footer from "@/components/layout/footer";
import Workshop from "@/components/home/workshop";
import Testimoni from "@/components/home/testimoni";
import PrivateClass from "@/components/home/solusi";

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page Inovasia Course</title>
      </Head>
      <main className="bg-[#0f0c29] text-white font-sans">
        <Navbar />
        <Hero />
        <Highlights />
        <Timeline />
        <RegistrationForm />
        <Gallery />
        <Testimoni />
        <PrivateClass />
        <Workshop />
        <Footer />
      </main>
    </>
  );
}
