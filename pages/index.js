import Head from "next/head";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Highlights from "@/components/highlights";
import Timeline from "@/components/timeline";
import RegistrationForm from "@/components/registrationForm";
import Gallery from "@/components/galery";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page Novram</title>
      </Head>
      <main className="bg-[#0f0c29] text-white font-sans">
        <Navbar />
        <Hero />
        <Highlights />
        <Timeline />
        <RegistrationForm />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}
