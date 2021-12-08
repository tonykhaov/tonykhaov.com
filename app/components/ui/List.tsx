import clsx from 'clsx'

function List({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul {...props} className={clsx('list-disc list-inside', className)} />
}

export default List
