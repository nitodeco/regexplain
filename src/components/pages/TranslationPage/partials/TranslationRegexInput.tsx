import * as React from 'react';

import { useTranslations } from 'next-intl';

import { Textarea } from '@/components/ui/textarea';

import { ValidationBadge } from '@/components/atoms/ValidationBadge';

import { Validation } from '@/types/validation';

const DEBOUNCE_TIME = 375;
const WAITING_DELAY = 50;

type Props = {
  validation: Validation | null;
  regex: string;
  handleValidate: (e: React.FormEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setValidation: (validation: Validation | null) => void;
};

export const TranslationRegexInput: React.FC<Props> = ({
  validation,
  regex,
  handleValidate,
  handleInputChange,
  setValidation,
}) => {
  const t = useTranslations('pages.translation.input');

  React.useEffect(() => {
    if (regex.trim() === '') {
      setValidation(null);
      return;
    }

    const waitingTimer = setTimeout(() => {
      setValidation(Validation.WAITING);
    }, WAITING_DELAY);

    const validationTimer = setTimeout(() => {
      const syntheticEvent = {
        preventDefault: () => {},
        currentTarget: {},
        target: {},
      } as React.FormEvent;

      handleValidate(syntheticEvent);
    }, DEBOUNCE_TIME);

    return () => {
      clearTimeout(waitingTimer);
      clearTimeout(validationTimer);
    };
  }, [regex, handleValidate, setValidation]);

  return (
    <div className='flex-1 min-w-0 lg:min-w-96'>
      <div className='flex items-center gap-4 mb-4 justify-between h-8'>
        <div className='flex flex-row gap-4 w-1/2'>
          <h2 className='text-lg font-medium text-muted-foreground'>{t('title')}</h2>
          {validation !== null && <ValidationBadge validation={validation} />}
        </div>
      </div>
      <div className='border border-border rounded-lg overflow-hidden'>
        <Textarea
          placeholder={t('placeholder')}
          value={regex}
          onChange={handleInputChange}
          aria-invalid={validation === Validation.INVALID}
          className='min-h-64 border-0 rounded-none resize-none focus-visible:ring-0 focus-visible:ring-offset-0 p-4'
        />
      </div>
    </div>
  );
};
