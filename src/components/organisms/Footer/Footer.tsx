import { useTranslations } from 'next-intl';
import { FaGithub as GithubIcon } from 'react-icons/fa';

import Link from 'next/link';

export const Footer: React.FC = () => {
  const t = useTranslations('footer');

  return (
    <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
      <span className='text-sm text-muted-foreground'>{t('copyright')}</span>
      <span className='text-sm text-muted-foreground'>•</span>
      <Link
        className='flex items-center gap-2 text-sm text-muted-foreground hover:underline hover:underline-offset-4'
        href={t('links.github')}
        target='_blank'
        rel='noopener noreferrer'
      >
        <GithubIcon size={16} />
        {t('github')}
      </Link>
    </footer>
  );
};
