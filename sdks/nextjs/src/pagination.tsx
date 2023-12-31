import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { ButtonProps, buttonVariants, cn } from '@sdks/uikit-react';

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

type PaginationButtonProps = {
  isActive?: boolean;
  size?: ButtonProps['size']
} & React.ComponentProps<'button'>

const PaginationButton = ({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationButtonProps) => (
  <button
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
);

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationButton>) => (
  <PaginationButton
    aria-label='Go to previous page'
    size='md'
    className={cn('gap-1 pl-2.5', className)}
    {...props}
  >
    <ChevronLeft className='h-4 w-4' />
    <span>Previous</span>
  </PaginationButton>
);

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationButton>) => (
  <PaginationButton
    aria-label='Go to next page'
    size='md'
    className={cn('gap-1 pr-2.5', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className='h-4 w-4' />
  </PaginationButton>
);

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-10 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className='h-4 w-4' />
    <span className='sr-only'>More pages</span>
  </span>
);

interface PaginationProps {
  total?: number;
  page?: number;
  size?: number;
  onPageChange: OnPageChange;
}

export type OnPageChange = (data: { page: number; size: number }) => void;

export function Pagination({
  onPageChange,
  page,
  size = 10,
  total,
}: PaginationProps) {
  const maxPage = Math.ceil((total || 0) / size);
  const currentPage = page || 1;
  const pages = React.useMemo(() => getPages(maxPage, currentPage), [maxPage, currentPage]);

  return (
    <PaginationNav>
      <PaginationContent>
        {page !== 1 && (
          <PaginationPrevious onClick={() => onPageChange({ page: currentPage - 1, size })} />
        )}

        {pages.map((p, idx) => {
          if (p === null) return (
            <PaginationEllipsis key={idx} />
          );

          return (
            <PaginationButton key={idx} onClick={() => onPageChange({ page: p, size })} isActive={page === p}>
              {p}
            </PaginationButton>
          );
        })}

        {page !== maxPage && (
          <PaginationNext onClick={() => onPageChange({ page: currentPage + 1, size })} />
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