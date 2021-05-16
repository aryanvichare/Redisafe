import Head from "next/head";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Landing from "@/components/home/Landing";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Redisafe</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Landing />

      {/* <section className='w-full px-6 pb-12 antialiased bg-white'>
        <Hero />
      </section> */}
    </div>
  );
}
