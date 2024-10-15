import { AppLinks, FooterLinks } from "@/types/app-links";

const footerApplicationLinks: AppLinks[] = [
  {
    label: 'Accueil',
    baseUrl: '/',
    type: 'internal',
  }, 
  {
    label: 'Projets',
    baseUrl: '/#',
    type: 'internal',
  },
  {
    label: 'Blabla',
    baseUrl: '/#',
    type: 'internal',
  },
  {
    label: 'Formations',
    baseUrl: '/#',
    type: 'external',
  },
];

const footerUsersLinks: AppLinks[] = [
  {
    label: 'Mon espace',
    baseUrl: '/#',
    type: 'internal',
  }, 
  {
    label: 'Connexion',
    baseUrl: '/#',
    type: 'internal',
  },
  {
    label: 'Inscription',
    baseUrl: '/#',
    type: 'internal',
  },
  {
    label: 'Mot de passe oublié',
    baseUrl: '/#',
    type: 'internal',
  },
];

const footerInformationLinks: AppLinks[] = [
  {
    label: 'CGU',
    baseUrl: '/#',
    type: 'internal',
  }, 
  {
    label: 'Confidentialité',
    baseUrl: '/#',
    type: 'internal',
  },
  {
    label: 'A propos',
    baseUrl: '/#',
    type: 'internal',
  },
  {
    label: 'Contact',
    baseUrl: '/#',
    type: 'internal',
  },
];

const footerSocialNetworksLinks: AppLinks[] = [
  {
    label: 'Youtube',
    baseUrl: '/#',
    type: 'external',
  }, 
  {
    label: 'Linkedin',
    baseUrl: '/#',
    type: 'external',
  },
  {
    label: 'Slack',
    baseUrl: '/#',
    type: 'external',
  },
];

export const footerLinks: FooterLinks[] = [
  {
    label: 'App',
    links: footerApplicationLinks,
  },
  {
    label: 'Utilisateurs',
    links: footerUsersLinks,
  },
  {
    label: 'Informations',
    links: footerInformationLinks,
  },
  {
    label: 'Réseaux sociaux',
    links: footerSocialNetworksLinks,
  },
];