export type linkType = "internal" | "external";

export const linkTypes: Record<string, linkType> = {
  internal: 'internal',
  external: 'external'
} as const;