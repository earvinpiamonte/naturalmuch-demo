import Head from "next/head";
import Layout, { siteMetaData } from "../components/layout";

import Header from "../components/header";
import HeroSection from "../components/hero-section";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{`${siteMetaData.title} | Home`}</title>
      </Head>
      <Header />
      <HeroSection />
    </Layout>
  );
}
