import clsx from 'clsx'

function Pills({ name, className }: { name: string; className: string }) {
  return (
    <li>
      <span
        class={clsx(
          'flex rounded-full border-gray-500 border bg-secondary px-4 py-1 font-roboto text-xs font-bold tracking-wider',
          className
        )}
      >
        {name}
      </span>
    </li>
  )
}

export default Pills
