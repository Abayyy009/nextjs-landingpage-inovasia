import Head from "next/head";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Highlights from "@/components/highlights";
import Timeline from "@/components/timeline";
import RegistrationForm from "@/components/registrationForm";
import Gallery from "@/components/galery";
import Footer from "@/components/footer";
import Workshop from "@/components/workshop";

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
        <Navbar />
        <Hero />
        <Highlights />
        <Timeline />
        <RegistrationForm />
        <Gallery />
        <Workshop />
        <Footer />
      </main>
    </>
  );
}
