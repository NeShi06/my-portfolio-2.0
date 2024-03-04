import { For } from 'solid-js'

import { useProjectsContext } from '@/context/ProjectsContext'

import clsx from 'clsx'

const types = [
  {
    label: 'Front-End',
    type: 'front-end'
  }
]

function FilterBtn() {
  const store = useProjectsContext()

  const handlerClick = (type: string) => {
    if (store.currentFilter === type) return
    return store.setCurrentFilter(type)
  }

  return (
    <div class="mt-6">
      <ol class="flex w-min divide-x divide-gray-500 rounded-full border-[.5px] border-gray-500 bg-[#1c1d1e] py-2">
        <For each={types}>
          {({ label, type }) => (
            <li
              class={clsx(
                'w-full px-8 transition-colors',
                { 'text-white/60': store.currentFilter !== type },
                { 'text-emerald-400': store.currentFilter === type }
              )}
            >
              <button
                onClick={() => handlerClick(type)}
                class="whitespace-nowrap font-roboto text-base"
              >
                {label}
              </button>
            </li>
          )}
        </For>
      </ol>
    </div>
  )
}

export default FilterBtn
