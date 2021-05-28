export class Md {
  public static quote(string: string): string {
    return `"${string}"`;
  }

  public static blockquote(string: string): string {
    return `>${string}`;
  }

  public static bold(string: string): string {
    return `*${string}*`;
  }

  public static italic(string: string): string {
    return `_${string}_`;
  }

  public static strike(string: string): string {
    return `~${string}~`;
  }

  public static code(string: string): string {
    return `\`${string}\``;
  }

  public static listDash(...strings: Array<string | string[]>): string {
    return strings.flat()
      .map((string) => `- ${string}`)
      .join('\n');
  }

  public static listBullet(...strings: Array<string | string[]>): string {
    return strings.flat()
      .map((string) => `• ${string}`)
      .join('\n');
  }

  public static link(url: string, alias?: string): string {
    return alias
      ? `<${url}|${alias}>`
      : `<${url}>`;
  }

  public static mailto(email: string, alias: string): string {
    return `<mailto:${email}|${alias}>`;
  }

  public static user(string: string): string {
    return `<@${string}>`;
  }

  public static channel(string: string): string {
    return `<#${string}>`;
  }

  public static group(string: string): string {
    return `<!subteam^${string}>`;
  }
}
