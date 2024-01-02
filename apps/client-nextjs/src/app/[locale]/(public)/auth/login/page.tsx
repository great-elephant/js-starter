'use client';

import { useTranslations } from 'next-intl';

export default function Login() {
  const t = useTranslations('index');
  return <h1>login: {t('title')}</h1>;
}