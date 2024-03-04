import { For } from 'solid-js'

import Pills from '@/components/Pills'

function ProjectCard({ project }: { project: Project }) {
  const { title, body, links, img, altImg, tags } = project

  return (
    <article class="group relative grid space-x-0 space-y-8 transition-all md:grid-cols-10 md:flex-row md:space-x-8 md:space-y-0 lg:hover:!opacity-100 lg:hover:!brightness-100 lg:group-hover/projectcard:opacity-80 lg:group-hover/projectcard:brightness-50">
      <div class="w-full md:col-span-4">
        <div class="relative flex transform flex-col items-center gap-8 overflow-clip rounded-xl shadow-xl transition duration-500 ease-in-out sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-500 lg:hover:border-gray-300 lg:hover:bg-gray-500/50">
          <img
            src={img}
            class="aspect-video w-full rounded shadow-2xl shadow-white/10"
            loading="lazy"
            decoding="async"
            alt={altImg}
          />
        </div>
      </div>

      <div class="flex flex-col gap-2 md:col-span-6">
        <h3 class="mb-1 text-white font-roboto text-2xl font-semibold">
          {title}
        </h3>

        <ul class="flex flex-wrap gap-2">
          <For each={tags}>
            {({ color, title }) => (
              <Pills
                name={title}
                className={color}
              />
            )}
          </For>
        </ul>

        <p class="mt-2 text-pretty font-roboto text-base text-gray-400">{body}</p>

        <ul class="mt-4 flex gap-4 w-min">
          <For each={Object.entries(links)}>
            {([key, { link }]) => (
              <li>
                <a
                  href={link}
                  class="relative z-10 rounded-xl border border-gray-500 bg-secondary p-2 font-roboto text-sm text-white transition-transform hover:scale-110"
                >
                  {key}
                </a>
              </li>
            )}
          </For>
        </ul>
      </div>
    </article>
  )
}

export default ProjectCard
