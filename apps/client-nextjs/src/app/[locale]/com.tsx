'use client';

import { useTranslations } from 'next-intl';

export function Com() {
  const t = useTranslations('index');
  return <h1>{t('title')}</h1>;
}