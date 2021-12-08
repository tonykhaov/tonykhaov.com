import clsx from 'clsx'

function Title({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 {...props} className={clsx('mb-4 text-2xl underline', className)} />
  )
}

export default Title
