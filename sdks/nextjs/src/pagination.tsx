import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

import { ButtonProps, buttonVariants, cn } from '@sdks/uikit-react';
import { Link } from './link';

const PaginationNav = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role='navigation'
    aria-label='pagination'
    className={className}
    {...props}
  />
);

const PaginationContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('', className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
  size?: ButtonProps['size']
} & React.ComponentProps<'div'>

const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) => (
  <PaginationItem>
    <div
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className
      )}
      {...props}
    />
  </PaginationItem>
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label='Go to previous page'
    size='md'
    className={cn('gap-1 pl-2.5', className)}
    {...props}
  >
    <ChevronLeft className='h-4 w-4' />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label='Go to next page'
    size='md'
    className={cn('gap-1 pr-2.5', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className='h-4 w-4' />
  </PaginationLink>
);

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className='h-4 w-4' />
    <span className='sr-only'>More pages</span>
  </span>
);

interface PaginationProps {
  total?: number;
  page: number;
  size?: number;
  onPageChange: OnPageChange;
}

export type OnPageChange = (data: { page: number; size: number }) => void;

export function Pagination({
  onPageChange,
  page = 1,
  size = 10,
  total = 0,
}: PaginationProps) {
  const maxPage = Math.ceil(total / size);
  const pages = React.useMemo(() => getPages(maxPage, page), [maxPage, page]);

  return (
    <PaginationNav>
      <PaginationContent>
        {page !== 1 && (
          <PaginationItem onClick={() => onPageChange({ page: page - 1, size })}>
            <PaginationPrevious />
          </PaginationItem>
        )}

        {pages.map((p, idx) => {
          if (p === null) return (
            <PaginationItem key={idx}>
              <PaginationEllipsis />
            </PaginationItem>
          );

          return (
            <PaginationItem key={idx} onClick={() => onPageChange({ page: p, size })}>
              <PaginationLink isActive={page === p}>
                {p}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {page !== maxPage && (
          <PaginationItem onClick={() => onPageChange({ page: page + 1, size })}>
            <PaginationNext />
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationNav>
  );
}

function getPages(max: number, current: number) {
  if (max < 6) return Array
    .from(Array(max).keys())
    .map(p => p + 1);

  if (current < 4) return [1, 2, 3, 4, null];

  if (current > max - 4 && current !== max - 3)
    return [1, null, max - 3, max - 2, max - 1, max];

  return [1, null, current - 1, current, current + 1, null, max];
}