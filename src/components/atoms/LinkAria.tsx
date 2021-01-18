/* eslint-disable react/display-name */
import * as React from 'react'
import clsx from 'clsx'

export interface LinkAriaProps
  extends Omit<React.LinkHTMLAttributes<HTMLAnchorElement>, 'onClick'> {
  Component?: React.ElementType<any>
  onClick?: (e?: React.SyntheticEvent) => void
  role?: string
  className?: string
  target?: string
}

const LinkAria = React.forwardRef<HTMLAnchorElement, LinkAriaProps>(
  ({ Component = 'a', onClick, className, role = 'link', tabIndex = 0, ...props }, ref) => {
    return (
      <Component
        className={clsx(className, 'cursor-pointer')}
        role={role}
        tabIndex={tabIndex}
        onClick={onClick}
        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => e.key === 'Enter' && onClick?.(e)}
        ref={ref}
        {...props}
      />
    )
  }
)

export default LinkAria
