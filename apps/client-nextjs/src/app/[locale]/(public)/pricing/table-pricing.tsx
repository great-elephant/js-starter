import { CheckCircle, MinusCircle } from 'lucide-react';

export function TablePricing() {
  return (
    <table className='h-px w-full table-fixed'>
      <caption className='sr-only'>Pricing plan comparison</caption>
      <thead className='bg-background sticky top-0 z-10'>
        <tr>
          <th
            className='text-foreground w-1/3 px-6 pt-2 pb-2 text-left text-sm font-normal'
            scope='col'
          >
            <span className='sr-only'>Feature by</span>
            <div className='h-0.25 absolute bottom-0 left-0 w-full'></div>
          </th>
          <th
            className='text-foreground w-1/4 px-6 pr-2 pt-2 pb-2 text-left text-sm font-normal'
            scope='col'
          >
            <h3 className='text-brand-600 text-2xl font-mono font-normal uppercase flex items-center gap-4'>
              Free
            </h3>
            <div className='h-0.25 absolute bottom-0 left-0 w-full'></div>
          </th>
          <th
            className='text-foreground w-1/4 px-6 pr-2 pt-2 pb-2 text-left text-sm font-normal'
            scope='col'
          >
            <h3 className='text-brand-600 text-2xl font-mono font-normal uppercase flex items-center gap-4'>
              Pro
            </h3>
            <div
              className='h-0.25 absolute bottom-0 left-0 w-full'
              style={{ height: 1 }}
            />
          </th>
          <th
            className='text-foreground w-1/4 px-6 pr-2 pt-2 pb-2 text-left text-sm font-normal'
            scope='col'
          >
            <h3 className='text-brand-600 text-2xl font-mono font-normal uppercase flex items-center gap-4'>
              Team
            </h3>
            <div
              className='h-0.25 absolute bottom-0 left-0 w-full'
              style={{ height: 1 }}
            />
          </th>
          <th
            className='text-foreground w-1/4 px-6 pr-2 pt-2 pb-2 text-left text-sm font-normal'
            scope='col'
          >
            <h3 className='text-brand-600 text-2xl font-mono font-normal uppercase flex items-center gap-4'>
              Enterprise
            </h3>
            <div className='h-0.25 absolute bottom-0 left-0 w-full' />
          </th>
        </tr>
      </thead>

      <thead>
        <tr className='descriptions'>
          <th
            className='text-foreground w-1/3 px-6 pt-2 pb-2 text-left text-sm font-normal'
            scope='col'
          />
          <th
            className='text-foreground w-1/4 px-6 pt-2 pb-2 text-left text-sm font-normal'
            scope='col'
          >
            <p className='p text-sm border-b border-default pb-4'>
              Perfect for passion projects &amp; simple websites.
            </p>
            <div
              className='h-0.25 absolute bottom-0 left-0 w-full'
              style={{ height: 1 }}
            />
          </th>
          <th
            className='text-foreground w-1/4 px-6 pt-2 pb-2 text-left text-sm font-normal'
            scope='col'
          >
            <p className='p text-sm border-b border-default pb-4'>
              For production applications with the option to scale.
            </p>
            <div
              className='h-0.25 absolute bottom-0 left-0 w-full'
              style={{ height: 1 }}
            />
          </th>
          <th
            className='text-foreground w-1/4 px-6 pt-2 pb-2 text-left text-sm font-normal'
            scope='col'
          >
            <p className='p text-sm border-b border-default pb-4'>
              Collaborate with different permissions and access patterns.
            </p>
            <div
              className='h-0.25 absolute bottom-0 left-0 w-full'
              style={{ height: 1 }}
            />
          </th>
          <th
            className='text-foreground w-1/4 px-6 pt-2 pb-2 text-left text-sm font-normal'
            scope='col'
          >
            <p className='p text-sm border-b border-default pb-4'>
              For large-scale applications managing serious workloads.
            </p>
            <div
              className='h-0.25 absolute bottom-0 left-0 w-full'
              style={{ height: 1 }}
            />
          </th>
        </tr>
      </thead>

      <tbody className='border-default divide-border divide-y'>
        <tr>
          <th
            className='text-foreground-light px-6 py-8 text-left align-top text-sm font-medium'
            scope='row'
          />
          <td className='h-full px-6 py-2 align-top'>
            <div className='relative h-full w-full'>
              <div className='flex flex-col justify-between h-full'>
                <span className='text-foreground text-5xl'>$0</span>
                <p className='font-semibold text-[13px] leading-5 mt-1'>/ month / org</p>
                <p>
                  <span className='bg-alternative text-green-700 font-semibold border shadow-sm rounded-md bg-opacity-30 py-0.5 px-2 text-[13px] leading-4'>
                    Limit of 2 free organizations
                  </span>
                </p>
                <div className='mt-8'>
                  <a
                    type='button'
                    className='relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-brand-button hover:bg-brand-button/80 text-white bg-green-700 border-brand focus-visible:outline-brand-600 shadow-sm w-full flex items-center justify-center text-xs px-2.5 py-1'
                    href='#'
                  >
                    <span className='truncate'>Get Started</span>
                  </a>
                </div>
              </div>
            </div>
          </td>
          <td className='h-full px-6 py-2 align-top'>
            <div className='relative h-full w-full'>
              <div className='flex flex-col justify-between h-full'>
                <span className='text-foreground text-5xl'>$25</span>
                <p className='font-semibold text-[13px] leading-5 mt-1'>/ month / org</p>
                <p>
                  <span className='bg-alternative text-green-700 font-semibold border shadow-sm rounded-md bg-opacity-30 py-0.5 px-2 text-[13px] leading-4'>
                    Usage-based plan
                  </span>
                </p>
                <div className='mt-8'>
                  <a
                    type='button'
                    className='relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-brand-button hover:bg-brand-button/80 text-white bg-green-700 border-brand focus-visible:outline-brand-600 shadow-sm w-full flex items-center justify-center text-xs px-2.5 py-1'
                    href='#'
                  >
                    <span className='truncate'>Get Started</span>
                  </a>
                </div>
              </div>
            </div>
          </td>
          <td className='h-full px-6 py-2 align-top'>
            <div className='relative h-full w-full'>
              <div className='flex flex-col justify-between h-full'>
                <span className='text-foreground text-5xl'>$599</span>
                <p className='font-semibold text-[13px] leading-5 mt-1'>/ month / org</p>
                <p>
                  <span className='bg-alternative text-green-700 font-semibold border shadow-sm rounded-md bg-opacity-30 py-0.5 px-2 text-[13px] leading-4'>
                    Usage-based plan
                  </span>
                </p>
                <div className='mt-8'>
                  <a
                    type='button'
                    className='relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-brand-button hover:bg-brand-button/80 text-white bg-green-700 border-brand focus-visible:outline-brand-600 shadow-sm w-full flex items-center justify-center text-xs px-2.5 py-1'
                    href='#'
                  >
                    <span className='truncate'>Get Started</span>
                  </a>
                </div>
              </div>
            </div>
          </td>
          <td className='h-full px-6 py-2 align-top'>
            <div className='relative h-full w-full'>
              <div className='flex flex-col justify-between h-full'>
                <span className='text-foreground text-4xl'>Contact us</span>
                <div className='mt-auto'>
                  <a
                    type='button'
                    className='relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-button hover:bg-selection border-button hover:border-button-hover focus-visible:outline-brand-600 shadow-sm w-full flex items-center justify-center text-xs px-2.5 py-1'
                    href='#'
                  >
                    <span className='truncate'>Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
          </td>
        </tr>

        <tr
          className='divide-border'
          id='database-desktop'
          style={{ borderTop: 'none' }}
        >
          <th
            className='bg-background text-foreground sticky top-0 z-10 py-2 pl-6 text-left text-sm font-medium'
            scope='colgroup'
          >
            <div className='flex items-center gap-4'>
              <div className='inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md   bg-brand text-brand-100 '>
                <svg
                  className='h-5 w-5   stroke-brand-200 '
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    d='M5.18625 8.66531H19.5035V15.331H5.18625V8.66531Z M4 17.0007C4 16.0804 4.7461 15.3343 5.66645 15.3343H18.9984C19.9187 15.3343 20.6648 16.0804 20.6648 17.0007V20.3335C20.6648 21.2539 19.9187 22 18.9984 22H5.66646C4.7461 22 4 21.2539 4 20.3335V17.0007Z M4 3.66646C4 2.7461 4.7461 2 5.66645 2H18.9984C19.9187 2 20.6648 2.7461 20.6648 3.66645V6.99926C20.6648 7.91962 19.9187 8.66572 18.9984 8.66572H5.66646C4.7461 8.66572 4 7.91962 4 6.99926V3.66646Z'
                  />
                </svg>
              </div>
              <h4 className='m-0 text-base font-normal'>Database</h4>
            </div>
          </th>
          <td className='bg-background px-6 py-5 free' />
          <td className='bg-background px-6 py-5 pro' />
          <td className='bg-background px-6 py-5 team' />
          <td className='bg-background px-6 py-5 enterprise' />
        </tr>
        <tr className='divide-border'>
          <th
            className='text-foreground flex items-center px-6 py-5 last:pb-24 text-left text-xs font-normal '
            scope='row'
          >
            <span>Dedicated Postgres Database</span>
          </th>
          <td className='px-6 tier-free text-center'>
            <span className='mx-auto'>
              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
          <td className='px-6 tier-pro text-center'>
            <span className='mx-auto'>
              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
          <td className='px-6 tier-team text-center'>
            <span className='mx-auto'>
              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
          <td className='px-6 tier-enterprise text-center'>
            <span className='mx-auto'>
              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
        </tr>
        <tr className='divide-border'>
          <th
            className='text-foreground flex items-center px-6 py-5 last:pb-24 text-left text-xs font-normal '
            scope='row'
          >
            <span>Dedicated Postgres Database</span>
          </th>
          <td className='px-6 tier-free text-center'>
            <span className='mx-auto'>
              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
          <td className='px-6 tier-pro text-center'>
            <span className='mx-auto'>
              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
          <td className='px-6 tier-team text-center'>
            <span className='mx-auto'>
              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
          <td className='px-6 tier-enterprise text-center'>
            <span className='mx-auto'>
              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
        </tr>
        <tr className='divide-border'>
          <th
            className='text-foreground flex items-center px-6 py-5 last:pb-24 text-left text-xs font-normal '
            scope='row'
          >
            <span>Unlimited API requests</span>
          </th>
          <td className='px-6 tier-free text-center'>
            <span className='mx-auto'>
              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
          <td className='px-6 tier-pro text-center'>
            <span className='mx-auto'>
              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
          <td className='px-6 tier-team text-center'>
            <span className='mx-auto'>
              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
          <td className='px-6 tier-enterprise text-center'>
            <span className='mx-auto'>
              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
        </tr>
        <tr className='divide-border'>
          <th
            className='text-foreground flex items-center px-6 py-5 last:pb-24 text-left text-xs font-normal '
            scope='row'
          >
            <span>Database size</span>
          </th>
          <td className='px-6 tier-free '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              500 MB included
            </span>
          </td>
          <td className='px-6 tier-pro '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              8 GB included, then $0.125 per GB
            </span>
          </td>
          <td className='px-6 tier-team '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              8 GB included, then $0.125 per GB
            </span>
          </td>
          <td className='px-6 tier-enterprise '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              Custom
            </span>
          </td>
        </tr>
        <tr className='divide-border'>
          <th
            className='text-foreground flex items-center px-6 py-5 last:pb-24 text-left text-xs font-normal '
            scope='row'
          >
            <span>Point in time recovery</span>
          </th>
          <td className='px-6 tier-free text-center'>
            <div className='text-gray-400'>
              <MinusCircle width={18} height={18} />
              <span className='sr-only'>Not included in </span>
            </div>
          </td>
          <td className='px-6 tier-pro '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              $100 per 7 days
            </span>
          </td>
          <td className='px-6 tier-team '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              $100 per 7 days
            </span>
          </td>
          <td className='px-6 tier-enterprise '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              $100 per 7 days, &gt;28 days available
            </span>
          </td>
        </tr>

        <tr
          className='divide-border'
          id='auth-desktop'
          style={{ borderTop: 'none' }}
        >
          <th
            className='bg-background text-foreground sticky top-0 z-10 py-2 pl-6 text-left text-sm font-medium'
            scope='colgroup'
          >
            <div className='flex items-center gap-4'>
              <div className='inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md   bg-brand text-brand-100 '>
                <svg
                  className='h-5 w-5   stroke-brand-200 '
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    d='M5.03305 15.8071H12.7252M5.03305 15.8071V18.884H12.7252V15.8071M5.03305 15.8071V12.7302H12.7252V15.8071M15.0419 8.15385V5.07692C15.0419 3.37759 13.6643 2 11.965 2C10.2657 2 8.88814 3.37759 8.88814 5.07692V8.15385M5 11.2307L5 18.9231C5 20.6224 6.37757 22 8.07689 22H15.769C17.4683 22 18.8459 20.6224 18.8459 18.9231V11.2307C18.8459 9.53142 17.4683 8.15385 15.769 8.15385L8.07689 8.15385C6.37757 8.15385 5 9.53142 5 11.2307Z'
                  />
                </svg>
              </div>
              <h4 className='m-0 text-base font-normal'>Auth</h4>
            </div>
          </th>
          <td className='bg-background px-6 py-5 free' />
          <td className='bg-background px-6 py-5 pro' />
          <td className='bg-background px-6 py-5 team' />
          <td className='bg-background px-6 py-5 enterprise' />
        </tr>
        <tr className='divide-border'>
          <th
            className='text-foreground flex items-center px-6 py-5 last:pb-24 text-left text-xs font-normal '
            scope='row'
          >
            <span>Total Users</span>
          </th>
          <td className='px-6 tier-free '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              Unlimited
            </span>
          </td>
          <td className='px-6 tier-pro '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              Unlimited
            </span>
          </td>
          <td className='px-6 tier-team '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              Unlimited
            </span>
          </td>
          <td className='px-6 tier-enterprise '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              Unlimited
            </span>
          </td>
        </tr>
        <tr className='divide-border'>
          <th
            className='text-foreground flex items-center px-6 py-5 last:pb-24 text-left text-xs font-normal '
            scope='row'
          >
            <span>MAUs</span>
          </th>
          <td className='px-6 tier-free '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              50,000 included
            </span>
          </td>
          <td className='px-6 tier-pro '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              100,000 included, then $0.00325 per MAU
            </span>
          </td>
          <td className='px-6 tier-team '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              100,000 included, then $0.00325 per MAU
            </span>
          </td>
          <td className='px-6 tier-enterprise '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              Custom
            </span>
          </td>
        </tr>
        <tr className='divide-border'>
          <th
            className='text-foreground flex items-center px-6 py-5 last:pb-24 text-left text-xs font-normal '
            scope='row'
          >
            <span>Single Sign-On (SAML 2.0)</span>
          </th>
          <td className='px-6 tier-free text-center'>
            <div className='text-gray-400'>
              <MinusCircle width={18} height={18} />
              <span className='sr-only'>Not included in </span>
            </div>
          </td>
          <td className='px-6 tier-pro '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              50 included, then $0.015 per MAU
            </span>
          </td>
          <td className='px-6 tier-team '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              50 included, then $0.015 per MAU
            </span>
          </td>
          <td className='px-6 tier-enterprise '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              Contact Us
            </span>
          </td>
        </tr>
        <tr className='divide-border'>
          <th
            className='text-foreground flex items-center px-6 py-5 last:pb-24 text-left text-xs font-normal '
            scope='row'
          >
            <span>Unlimited API requests</span>
          </th>
          <td className='px-6 tier-free text-center'>
            <span className='mx-auto'>

              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
          <td className='px-6 tier-pro text-center'>
            <span className='mx-auto'>

              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
          <td className='px-6 tier-team text-center'>
            <span className='mx-auto'>

              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
          <td className='px-6 tier-enterprise text-center'>
            <span className='mx-auto'>
              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
        </tr>
        <tr
          className='divide-border'
          id='storage-desktop'
          style={{ borderTop: 'none' }}
        >
          <th
            className='bg-background text-foreground sticky top-0 z-10 py-2 pl-6 text-left text-sm font-medium'
            scope='colgroup'
          >
            <div className='flex items-center gap-4'>
              <div className='inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md   bg-brand text-brand-100 '>
                <svg
                  className='h-5 w-5   stroke-brand-200 '
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    d='M20.4997 12.1386V9.15811L14.8463 3.53163H6.43717C5.57423 3.53163 4.87467 4.23119 4.87467 5.09413V9.78087M20.4447 9.13199L14.844 3.53125L14.844 7.56949C14.844 8.43243 15.5436 9.13199 16.4065 9.13199L20.4447 9.13199ZM7.12729 9.78087H4.83398C3.97104 9.78087 3.27148 10.4804 3.27148 11.3434V19.1559C3.27148 20.8818 4.67059 22.2809 6.39648 22.2809H18.8965C20.6224 22.2809 22.0215 20.8818 22.0215 19.1559V13.7011C22.0215 12.8381 21.3219 12.1386 20.459 12.1386H10.8032C10.3933 12.1386 9.99969 11.9774 9.70743 11.6899L8.22312 10.2296C7.93086 9.94202 7.53729 9.78087 7.12729 9.78087Z'
                  />
                </svg>
              </div>
              <h4 className='m-0 text-base font-normal'>Storage</h4>
            </div>
          </th>
          <td className='bg-background px-6 py-5 free' />
          <td className='bg-background px-6 py-5 pro' />
          <td className='bg-background px-6 py-5 team' />
          <td className='bg-background px-6 py-5 enterprise' />
        </tr>
        <tr className='divide-border'>
          <th
            className='text-foreground flex items-center px-6 py-5 last:pb-24 text-left text-xs font-normal '
            scope='row'
          >
            <span>Storage</span>
          </th>
          <td className='px-6 tier-free '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              1 GB included
            </span>
          </td>
          <td className='px-6 tier-pro '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              100 GB included, then $0.021 per GB
            </span>
          </td>
          <td className='px-6 tier-team '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              100 GB included, then $0.021 per GB
            </span>
          </td>
          <td className='px-6 tier-enterprise '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              Custom
            </span>
          </td>
        </tr>
        <tr className='divide-border'>
          <th
            className='text-foreground flex items-center px-6 py-5 last:pb-24 text-left text-xs font-normal '
            scope='row'
          >
            <span>Unlimited API requests</span>
          </th>
          <td className='px-6 tier-free text-center'>
            <span className='mx-auto'>
              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
          <td className='px-6 tier-pro text-center'>
            <span className='mx-auto'>
              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
          <td className='px-6 tier-team text-center'>
            <span className='mx-auto'>
              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
          <td className='px-6 tier-enterprise text-center'>
            <span className='mx-auto'>
              <CheckCircle className='text-green-500' width={18} height={18} />
              <span className='sr-only'>Included in </span>
            </span>
          </td>
        </tr>
        <tr className='divide-border'>
          <th
            className='text-foreground flex items-center px-6 py-5 last:pb-24 text-left text-xs font-normal '
            scope='row'
          >
            <span>Concurrent Peak Connections</span>
          </th>
          <td className='px-6 tier-free '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              200 included
            </span>
          </td>
          <td className='px-6 tier-pro '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              500 included, then $10 per 1000
            </span>
          </td>
          <td className='px-6 tier-team '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              500 included, then $10 per 1000
            </span>
          </td>
          <td className='px-6 tier-enterprise '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              Custom concurrent connections and volume discount
            </span>
          </td>
        </tr>
        <tr className='divide-border'>
          <th
            className='text-foreground flex items-center px-6 py-5 last:pb-24 text-left text-xs font-normal '
            scope='row'
          >
            <span>Access Roles</span>
          </th>
          <td className='px-6 tier-free '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              Owner, Developer
            </span>
          </td>
          <td className='px-6 tier-pro '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              Owner, Developer
            </span>
          </td>
          <td className='px-6 tier-team '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              Additional owner(s), admin, read-only, billing admin, custom
            </span>
          </td>
          <td className='px-6 tier-enterprise '>
            <span className='text-foreground text-xs flex items-center gap-3'>
              Additional owner(s), admin, read-only, billing admin, custom
            </span>
          </td>
        </tr>
      </tbody>

      <tfoot>
        <tr className='border-default border-t'>
          <th className='sr-only' scope='row'>
            Choose your plan
          </th>
          <td className='px-6 pt-5'>
            <a
              type='button'
              className='relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-brand-button hover:bg-brand-button/80 text-white bg-green-700 border-brand focus-visible:outline-brand-600 shadow-sm w-full flex items-center justify-center text-xs px-2.5 py-1'
              href='#'
            >
              <span className='truncate'>Get Started</span>
            </a>
          </td>
          <td className='px-6 pt-5'>
            <a
              type='button'
              className='relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-brand-button hover:bg-brand-button/80 text-white bg-green-700 border-brand focus-visible:outline-brand-600 shadow-sm w-full flex items-center justify-center text-xs px-2.5 py-1'
              href='#'
            >
              <span className='truncate'>Get Started</span>
            </a>
          </td>
          <td className='px-6 pt-5'>
            <a
              type='button'
              className='relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-brand-button hover:bg-brand-button/80 text-white bg-green-700 border-brand focus-visible:outline-brand-600 shadow-sm w-full flex items-center justify-center text-xs px-2.5 py-1'
              href='#'
            >
              <span className='truncate'>Get Started</span>
            </a>
          </td>
          <td className='px-6 pt-5'>
            <a
              type='button'
              className='relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-button hover:bg-selection border-button hover:border-button-hover focus-visible:outline-brand-600 shadow-sm w-full flex items-center justify-center text-xs px-2.5 py-1'
              href='#'
            >
              <span className='truncate'>Contact Us</span>
            </a>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
