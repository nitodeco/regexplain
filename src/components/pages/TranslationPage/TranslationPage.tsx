'use client';

import { useCallback, useState } from 'react';

import regexParser from 'regex-parser';

import { translateRegex } from '@/lib/regex-translation';
import { Validation } from '@/types/validation';

import { TranslationOutput } from './partials/TranslationOutput';
import { TranslationRegexInput } from './partials/TranslationRegexInput';

export const TranslationPage: React.FC = () => {
  const [regex, setRegex] = useState('');
  const [validation, setValidation] = useState<Validation | null>(null);
  const [parsedRegex, setParsedRegex] = useState<RegExp | null>(null);
  const [translation, setTranslation] = useState<string>('');

  const handleValidate = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (!regex.trim()) {
        setValidation(null);
        setParsedRegex(null);
        setTranslation('');

        return;
      }

      try {
        const parsed = regexParser(regex);

        setParsedRegex(parsed);
        setValidation(Validation.VALID);
        setTranslation(translateRegex(regex));
      } catch (error) {
        setParsedRegex(null);
        setValidation(Validation.INVALID);
        setTranslation('');
      }
    },
    [regex],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRegex(e.target.value);
  };

  return (
    <div className='w-full'>
      <div className='flex flex-col lg:flex-row gap-6'>
        <TranslationRegexInput
          validation={validation}
          regex={regex}
          handleValidate={handleValidate}
          handleInputChange={handleInputChange}
          setValidation={setValidation}
        />

        <TranslationOutput validation={validation} translation={translation} />
      </div>
    </div>
  );
};
