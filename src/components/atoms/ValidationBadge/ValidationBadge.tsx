import { useTranslations } from 'next-intl';
import { match } from 'ts-pattern';

import { Badge } from '@/components/ui/badge';

import { cn } from '@/lib/utils';
import { Validation } from '@/types/validation';

type Props = {
  validation: Validation;
};

export const ValidationBadge: React.FC<Props> = ({ validation }) => {
  const t = useTranslations('validation');

  const color = match(validation)
    .with(Validation.VALID, () => 'border-green-500/40 text-green-500')
    .with(Validation.INVALID, () => 'border-red-500/40 text-red-500')
    .with(Validation.WAITING, () => 'border-yellow-500/40 text-yellow-500')
    .exhaustive();

  const translationKey = match(validation)
    .with(Validation.VALID, () => 'valid' as const)
    .with(Validation.INVALID, () => 'invalid' as const)
    .with(Validation.WAITING, () => 'waiting' as const)
    .exhaustive();

  return (
    <Badge variant='outline' className={cn('border', color)}>
      {t(translationKey)}
    </Badge>
  );
};
