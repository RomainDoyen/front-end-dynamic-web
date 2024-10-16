import { linkType } from "@/lib/link-type";
import { IconType } from "react-icons";

export type AppLinks = {
  label: string;
  baseUrl: string;
  type: linkType;
  icon?: IconType;
}

export type FooterLinks = {
  label: string;
  links: AppLinks[];
}