import { unstable_setRequestLocale } from 'next-intl/server';

export default function IndexPage({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  return (
    <div>
      Register
    </div>
  );
}