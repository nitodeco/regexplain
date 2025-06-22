import * as React from 'react';

import { useTranslations } from 'next-intl';

import { Validation } from '@/types/validation';

type Props = {
  validation: Validation | null;
  translation: string;
};

export const TranslationOutput: React.FC<Props> = ({ validation, translation }) => {
  const t = useTranslations('pages.translation.output');

  return (
    <div className='flex-1 min-w-0 lg:min-w-96'>
      <div className='flex items-center gap-4 mb-4 h-8'>
        <h2 className='text-lg font-medium text-muted-foreground'>{t('title')}</h2>
      </div>
      <div className='border border-border rounded-lg overflow-hidden'>
        <div className='min-h-64 p-4 bg-background'>
          {validation === Validation.VALID && translation ? (
            <div className='h-full'>
              <p className='text-foreground leading-relaxed'>{translation}</p>
            </div>
          ) : validation === Validation.INVALID ? (
            <div className='h-full flex items-center justify-center'>
              <p className='text-destructive text-center'>{t('invalid')}</p>
            </div>
          ) : (
            <div className='h-full flex items-center justify-center'></div>
          )}
        </div>
      </div>
    </div>
  );
};
