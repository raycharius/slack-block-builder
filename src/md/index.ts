/**
 * @description Wraps a string in quotation marks.
 */

import { BlockBuilderError } from '../internal';

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

/**
 * @description creates a formatted date.
 * @link https://docs.slack.dev/messaging/formatting-message-text/#date-formatting
 * @param timestamp A 10-digit Unix timestamp (seconds since the Unix epoch).
 * @param tokenString The token string to use for the date formatting.
 *                    Examples include {date_num} {date_short} {date_long} {ago}
 *                    See linked slack documentation for more details.
 * @param fallbackText The fallback text to display if the date cannot be formatted.
 * @param optionalLink An optional link to associate with the date.
 */
export function date(
  timestamp: number,
  tokenString: string,
  fallbackText: string,
  optionalLink?: string
): string {
  if (timestamp < 0 || timestamp > 9999999999) {
    throw new BlockBuilderError(
      `Invalid timestamp "${timestamp}", must be a 10-digit Unix timestamp (0–9999999999)`
    );
  }
  const paddedTimestamp = Math.floor(timestamp)
    .toString()
    .padStart(10, '0');
  return optionalLink
    ? `<!date^${paddedTimestamp}^${tokenString}^${optionalLink}|${fallbackText}>`
    : `<!date^${paddedTimestamp}^${tokenString}|${fallbackText}>`;
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
  date,
};

// Strange export. I know. For IDE highlighting purposes.

export { md as Md };
