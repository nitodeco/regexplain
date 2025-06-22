import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { TranslationPage } from '@/components/pages/TranslationPage';

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex flex-col gap-[32px] items-center justify-center w-full px-32 py-16'>
        <TranslationPage />
      </main>
      <Footer />
    </>
  );
}
