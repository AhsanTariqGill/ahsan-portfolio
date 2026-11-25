/**
 * Content helpers for the local case-study data.
 *
 *   [[label|/href]]  ->  <a href="/href">label</a>
 *   ⟨ ... ⟩          ->  <span class="todo"> ... </span>
 *
 * The ⟨⟩ convention marks a value the owner must supply. Highlighting it at
 * render time makes an unfinished page impossible to publish by accident.
 * Content is authored locally, so no sanitisation pass is needed.
 */
export function inline(text: string): string {
  return text
    .replace(
      /\[\[([^\]|]+)\|([^\]]+)\]\]/g,
      (_match, label: string, href: string) => `<a href="${href}">${label}</a>`,
    )
    .replace(/⟨[^⟩]*⟩/g, (match) => `<span class="todo">${match}</span>`);
}
