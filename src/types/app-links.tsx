export type AppLinks = {
  label: string;
  baseUrl: string;
  type: 'internal' | 'external';
}

export type FooterLinks = {
  label: string;
  links: AppLinks[];
}