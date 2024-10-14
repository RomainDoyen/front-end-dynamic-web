/* eslint-disable react-hooks/rules-of-hooks */
import clsx from 'clsx';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { useMemo } from 'react';

type activelinkProps = {
  href: string;
  children: React.ReactNode;
}

export default function activelink({ href, children }: activelinkProps) {
  const router: NextRouter = useRouter();

  const isActive: boolean = useMemo(() => { 
    return router.pathname === href 
  }, [router.pathname, href]);

  return (
    <Link href={href} className={clsx(isActive && "text-primary font-medium")}>
      {children}
    </Link>
  )
}
