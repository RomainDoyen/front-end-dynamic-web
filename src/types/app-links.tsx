import { linkType } from "@/lib/link-type";

export type AppLinks = {
  label: string;
  baseUrl: string;
  type: linkType;
}

export type FooterLinks = {
  label: string;
  links: AppLinks[];
}