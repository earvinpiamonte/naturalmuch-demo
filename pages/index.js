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
      <section className="py-10">
        <div className="container mx-auto px-4 lg:px-40">
          <div className="flex">
            <div className="flex-1 text-center">
              <div className="mb-4">
                <img
                  src="/images/Free Delivery.png"
                  className="inline-block"
                  alt="Free delivery icon,"
                />
              </div>
              <h4 className="font-bold">Free Delivery</h4>
            </div>
            <div className="flex-1 text-center">
              <div className="mb-4">
                <img
                  src="/images/Weekly Discounts.png"
                  className="inline-block"
                  alt="Weekly Discounts icon,"
                />
              </div>
              <h4 className="font-bold">Weekly Discounts</h4>
            </div>
            <div className="flex-1 text-center">
              <div className="mb-4">
                <img
                  src="/images/Exclusive Discounts.png"
                  className="inline-block"
                  alt="Exclusive Discounts icon,"
                />
              </div>
              <h4 className="font-bold">Exclusive Discounts</h4>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
