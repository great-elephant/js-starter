import { GithubIcon } from 'lucide-react';
import { Link } from '@sdks/nextjs';
import { FormSignUp } from './form-sign-up';

export default function SignUp() {
  return (
    <div className='min-h-full flex flex-col'>
      <div className='flex flex-col flex-1 bg-alternative'>
        <div className='flex flex-1'>
          <main className='min-h-screen flex flex-col items-center flex-1 px-5 py-8 ltr:border-r rtl:border-l bg-background border-default'>
            <div className='flex-1 flex flex-col justify-center w-full sm:w-[330px] md:w-[384px]'>
              <div className='mb-10'>
                <h1 className='mb-2 text-2xl lg:text-3xl'>Sign-up</h1>
                <h2 className='text-sm text-foreground-light'>
                  Sign up to create new account
                </h2>
              </div>
              <div className='flex flex-col gap-5'>
                <button
                  type='button'
                  className='relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-button hover:bg-selection border-button hover:border-button-hover focus-visible:outline-brand-600 shadow-sm w-full flex items-center justify-center text-base px-4 py-2'
                >
                  <GithubIcon width={18} height={18} />
                  <span className='truncate'>Continue with GitHub</span>{' '}
                </button>
                <div className='relative'>
                  <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-t border-strong' />
                  </div>
                  <div className='relative flex justify-center text-sm'>
                    <span className='px-2 text-sm bg-background text-foreground -translate-y-0.5'>
                      or
                    </span>
                  </div>
                </div>

                <FormSignUp />
              </div>
              <div className='self-center my-8 text-sm'>
                <div>
                  <span className='text-foreground-light'>
                    Have an account?
                  </span>{' '}
                  <Link
                    className='underline transition text-foreground hover:text-foreground-light'
                    href='/auth/sign-in'
                  >
                    Sign In
                  </Link> now!
                </div>
              </div>
            </div>
            <div className='sm:text-center'>
              <p className='text-xs text-foreground-lighter sm:mx-auto sm:max-w-sm'>
                By continuing, you agree to Our's{' '}
                <a
                  className='underline hover:text-foreground-light'
                  href='https://our.com/terms'
                >
                  Terms of Service
                </a>{' '}and{' '}
                <a
                  className='underline hover:text-foreground-light'
                  href='https://our.com/privacy'
                >
                  Privacy Policy
                </a>
                , and to receive periodic emails with updates.
              </p>
            </div>
          </main>
          <aside className='flex-col items-center justify-center flex-1 flex-shrink hidden basis-1/4 xl:flex'>
            <div className='relative flex flex-col gap-6'>
              <div className='absolute select-none -top-12 -left-11'>
                <span className='text-[160px] leading-none text-foreground-muted/30'>
                  “
                </span>
              </div>
              <blockquote className='z-10 max-w-lg text-3xl'>
                10/100 All day i was migrating my project from firebase to @our
                Because it is perfect and simple!!! I like design and API for
                understandable. There are in BETA now. Just try!🧪
              </blockquote>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4'
              >
                <div className='w-[40px] h-[40px] rounded-full bg-gray-300' />
                <div className='flex flex-col'>
                  <cite className='not-italic font-medium text-foreground-light whitespace-nowrap'>
                    @roomahhka
                  </cite>
                </div>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}