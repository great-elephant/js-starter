export default function ForgotPassword() {
  return (
    <div className='min-h-full flex flex-col'>
      <div className='flex-1 bg-background flex flex-col gap-8 lg:gap-16 xl:gap-32'>
        <div className='sticky top-0 mx-auto w-full max-w-7xl px-8 pt-6 sm:px-6 lg:px-8'>
          <nav className='relative flex items-center justify-between sm:h-10'>
            <div className='flex flex-shrink-0 flex-grow items-center lg:flex-grow-0'>
              <div className='flex w-full items-center justify-between md:w-auto'>
                <a href='/dashboard/projects'>
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'inline-block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: 'relative',
                      maxWidth: '100%',
                    }}
                  >
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: '100%',
                      }}
                    >
                      <div className='w-[40px] h-[40px] bg-gray-300' />
                    </span>
                    <div className='w-[40px] h-[40px] bg-gray-300' />
                  </span>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <main className='max-w-[448px] w-full flex flex-col px-5'>
            <div className='mb-6'>
              <h1 className='text-2xl lg:text-3xl mt-8 mb-2'>
                Reset Your Password
              </h1>
              <h2 className='text-foreground-light text-sm'>
                Type in your email and we'll send you a link to reset your password
              </h2>
            </div>
            <div className='flex flex-col gap-4'>
              <form id='forgot-password-form' method='POST'>
                <div className='flex flex-col pt-4 space-y-4'>
                  <div className='text-sm grid gap-2 md:grid md:grid-cols-12'>
                    <div className='flex flex-row space-x-2 justify-between col-span-12'>
                      <label
                        className='block text-foreground-light text-sm'
                        htmlFor='email'
                      >
                        Email
                      </label>
                    </div>
                    <div className='col-span-12'>
                      <div className=''>
                        <div className='relative'>
                          <input
                            autoComplete='email'
                            id='email'
                            name='email'
                            placeholder='you@example.com'
                            type='email'
                            className='peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm px-4 py-2'
                            defaultValue=''
                          />
                        </div>
                      </div>
                      <p
                        data-state='hide'
                        className='
  text-red-900
  transition-all
  data-show:mt-2
  data-show:animate-slide-down-normal
  data-hide:animate-slide-up-normal
 text-sm'
                      />
                    </div>
                  </div>
                  <div className='self-center'>
                    <div>
                      <iframe
                        aria-hidden='true'
                        data-hcaptcha-widget-id='4jevokoohuo'
                        data-hcaptcha-response=''
                        style={{ display: 'none' }}
                      />
                      <textarea
                        id='g-recaptcha-response-4jevokoohuo'
                        name='g-recaptcha-response'
                        style={{ display: 'none' }}
                        defaultValue={''}
                      />
                      <textarea
                        id='h-captcha-response-4jevokoohuo'
                        name='h-captcha-response'
                        style={{ display: 'none' }}
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className='border-t border-overlay-border' />
                  <button
                    type='submit'
                    form='forgot-password-form'
                    className='relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-brand-button hover:bg-brand-button/80 text-white border-brand focus-visible:outline-brand-600 shadow-sm w-full flex items-center justify-center text-sm px-4 py-2'
                  >
                    {' '}
                    <span className='truncate'>Send Reset Email</span>{' '}
                  </button>
                </div>
              </form>
            </div>
            <div className='my-8 self-center text-sm'>
              <span className='text-foreground-light'>
                Already have an account?
              </span>{' '}
              <a
                className='underline hover:text-foreground-light'
                href='/dashboard/sign-in'
              >
                Sign In
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}