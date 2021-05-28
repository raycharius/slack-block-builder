export function quote(string: string): string {
  return `"${string}"`;
}

export function blockquote(string: string): string {
  return `>${string}`;
}

export function bold(string: string): string {
  return `*${string}*`;
}

export function italic(string: string): string {
  return `_${string}_`;
}

export function strike(string: string): string {
  return `~${string}~`;
}

export function code(string: string): string {
  return `\`${string}\``;
}

export function listDash(...strings: Array<string | string[]>): string {
  return strings.flat()
    .map((string) => `- ${string}`)
    .join('\n');
}

export function listBullet(...strings: Array<string | string[]>): string {
  return strings.flat()
    .map((string) => `• ${string}`)
    .join('\n');
}

export function link(url: string, alias?: string): string {
  return alias
    ? `<${url}|${alias}>`
    : `<${url}>`;
}

export function mailto(email: string, alias: string): string {
  return `<mailto:${email}|${alias}>`;
}

export function user(string: string): string {
  return `<@${string}>`;
}

export function channel(string: string): string {
  return `<#${string}>`;
}

export function group(string: string): string {
  return `<!subteam^${string}>`;
}

const md = {
  quote,
  blockquote,
  bold,
  italic,
  strike,
  code,
  listDash,
  listBullet,
  link,
  mailto,
  user,
  channel,
  group,
};

export { md as Md };

