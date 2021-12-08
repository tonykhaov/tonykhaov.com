import { Link as RemixLink } from 'remix'
import clsx from 'clsx'
import { RemixLinkProps } from '@remix-run/react/components'

type LinkProps = RemixLinkProps & React.HTMLAttributes<HTMLAnchorElement>
function TextLink({ className, ...props }: LinkProps) {
  return (
    <RemixLink
      {...props}
      className={clsx('text-blue-700 hover:text-blue-500', className)}
    />
  )
}

export default TextLink
