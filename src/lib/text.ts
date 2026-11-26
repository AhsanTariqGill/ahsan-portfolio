/**
 * Turns the inline link syntax used in the content files into HTML.
 *   [[label|/href]]  ->  <a href="/href">label</a>
 * Content is authored locally, so no sanitisation pass is needed.
 */
export function inline(text: string): string {
  return text.replace(
    /\[\[([^\]|]+)\|([^\]]+)\]\]/g,
    (_match, label: string, href: string) => `<a href="${href}">${label}</a>`,
  );
}
