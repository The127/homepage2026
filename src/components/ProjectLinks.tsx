import { siGithub } from 'simple-icons';
import { Show } from 'solid-js';
import BrandIcon from '~/components/BrandIcon';
import type { Project } from '~/data/projects';

/** Links to a project's code and website. Renders nothing if it has neither. */
export default function ProjectLinks(props: { project: Project; class?: string }) {
  return (
    <Show when={props.project.repo || props.project.website}>
      <ul class={`flex flex-wrap gap-x-6 ${props.class ?? ''}`}>
        <Show when={props.project.repo}>
          {repo => (
            <li>
              <a href={repo()} class="inline-flex min-h-6 items-center gap-1.5">
                <BrandIcon icon={siGithub} />
                GitHub
              </a>
            </li>
          )}
        </Show>
        <Show when={props.project.website}>
          {site => (
            <li>
              <a href={site().href} class="inline-flex min-h-6 items-center">{site().label}</a>
            </li>
          )}
        </Show>
      </ul>
    </Show>
  );
}
