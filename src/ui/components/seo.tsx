import Head from 'next/head';
import { SeoProps } from '@/types/componentsTypes';

export default function seo({ title, description }: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
