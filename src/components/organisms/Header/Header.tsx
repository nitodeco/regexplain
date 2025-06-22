import { useTranslations } from 'next-intl';

import Link from 'next/link';

import { ThemeToggle } from '@/components/molecules/ThemeToggle';

export const Header: React.FC = () => {
  const t = useTranslations('header');

  return (
    <header className='w-full h-16 flex justify-center px-32 border-b border-border'>
      <div className='flex items-center justify-between w-full'>
        <div>
          <Link href='/'>{t('title')}</Link>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
