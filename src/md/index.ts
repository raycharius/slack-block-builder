/**
 * @description Wraps a string in quotation marks.
 */

export function quote(string: string): string {
  return `"${string}"`;
}

/**
 * @description Makes a string a block quote.
 */

export function blockquote(string: string): string {
  return string.split('\n')
    .map((value) => `>${value}`)
    .join('\n');
}

/**
 * @description Makes a string bold.
 */

export function bold(string: string): string {
  return `*${string}*`;
}

/**
 * @description Makes a string italic.
 */

export function italic(string: string): string {
  return `_${string}_`;
}

/**
 * @description Strikes out a string.
 */

export function strike(string: string): string {
  return `~${string}~`;
}

/**
 * @description Turns a string into an inline block of code.
 */

export function codeInline(string: string): string {
  return `\`${string}\``;
}

/**
 * @description Turns a string into a multi-line block of code.
 */

export function codeBlock(string: string): string {
  return `\`\`\`${string}\`\`\``;
}

/**
 * @description Formats multiple strings into a dashed list.
 */

export function listDash(...items: Array<string | string[]>): string {
  return items.flat()
    .map((string) => `- ${string}`)
    .join('\n');
}

/**
 * @description Formats multiple strings into a bulleted list.
 */

export function listBullet(...items: Array<string | string[]>): string {
  return items.flat()
    .map((string) => `• ${string}`)
    .join('\n');
}

/**
 * @description Formats a URL into a clickable link, with an optional alias.
 */

export function link(url: string, alias?: string): string {
  return alias
    ? `<${url}|${alias}>`
    : `<${url}>`;
}

/**
 * @description Formats an email address into a clickable link.
 */

export function mailto(email: string, alias: string): string {
  return `<mailto:${email}|${alias}>`;
}

/**
 * @description Creates a named emoji in the colon format.
 */

export function emoji(name: string): string {
  return `:${name}:`;
}

/**
 * @description Mentions a user in a channel.
 */

export function user(id: string): string {
  return `<@${id}>`;
}

/**
 * @description Creates a clickable link to a channel.
 */

export function channel(id: string): string {
  return `<#${id}>`;
}

/**
 * @description Mentions a Slack user group.
 */

export function group(id: string): string {
  return `<!subteam^${id}>`;
}

const md = {
  quote,
  blockquote,
  bold,
  italic,
  strike,
  codeInline,
  codeBlock,
  listDash,
  listBullet,
  link,
  mailto,
  emoji,
  user,
  channel,
  group,
};

// Strange export. I know. For IDE highlighting purposes.

export { md as Md };
