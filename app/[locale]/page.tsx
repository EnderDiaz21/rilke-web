import { setRequestLocale } from 'next-intl/server';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Credentials from '@/components/Credentials';
import LayerNav from '@/components/LayerNav';
import Products from '@/components/Products';
import BusSystems from '@/components/BusSystems';
import Engineering from '@/components/Engineering';
import Rescue from '@/components/Rescue';
import Technology from '@/components/Technology';
import Rfq from '@/components/Rfq';
import Footer from '@/components/Footer';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Credentials />
        <LayerNav />
        <Products />
        <BusSystems />
        <Engineering />
        <Rescue />
        <Technology />
        <Rfq />
      </main>
      <Footer />
    </>
  );
}
