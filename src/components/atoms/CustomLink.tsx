import * as React from 'react'
import clsx from 'clsx'

export interface CustomLinkProps
  extends Omit<React.LinkHTMLAttributes<HTMLAnchorElement>, 'onClick'> {
  Component?: React.ElementType<any>
  onClick?: (e?: Event) => void
  role?: string
  className?: string
}

const CustomLink = React.forwardRef<HTMLAnchorElement, CustomLinkProps>(
  (
    { Component = 'a', onClick, className, role = 'link', tabIndex = 0, ...props },
    forwardedRef
  ) => {
    return (
      <Component
        className={clsx(className, 'cursor-pointer')}
        role={role}
        tabIndex={tabIndex}
        onClick={onClick}
        onKeyDown={(e: KeyboardEvent) => e.key === 'Enter' && onClick(e)}
        ref={forwardedRef}
        {...props}
      />
    )
  }
)

CustomLink.displayName = 'CustomLink'

export default CustomLink
