import '@/misc/global/global.server';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ClienContainer } from '@/misc/client-container';
import { initServerData } from '@/misc/server-data';
import { useTextDirection } from '@/misc/rtl-detect';

export default function LocaleLayout({ children, params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  initServerData();

  const messages = useMessages();
  const direction = useTextDirection(locale);

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ClienContainer>
            {children}
          </ClienContainer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
