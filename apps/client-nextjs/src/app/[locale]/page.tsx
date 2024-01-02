import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
  };
}
export default function IndexPage({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('index');
  return (
    <>
      <h1>{t('title')}</h1>
    </>
  );
}