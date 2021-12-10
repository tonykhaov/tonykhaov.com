import clsx from 'clsx'

function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={clsx('max-w-5xl px-4 mx-auto my-4 lg:px-0', className)}
    />
  )
}

export default Container
