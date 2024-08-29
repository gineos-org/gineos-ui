'use client';

import WalletConnection from '@/components/wallet-connection';
import font from '@/lib/font';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const LINKS = {
  '/swap': {
    title: 'Swap',
  },
  '/liquidity': {
    title: 'Liquidity',
  },
  '/staking': {
    title: 'Staking',
    soon: true,
  },
  '/buy': {
    title: 'Buy',
    soon: true,
  },
};

type networkInterface = 'mainnet' | 'devnet';

export default function Header() {
  const currentPath = usePathname();
  const network: networkInterface = 'mainnet';

  const links: readonly [
    string,
    {
      title: string;
      soon?: boolean;
      href?: string;
    },
  ][] = React.useMemo(
    () =>
      Object.entries(LINKS).filter(
        (el: [string, { title: string; devnet?: boolean }]) =>
          network === 'mainnet' ? el[1].devnet !== true : true,
      ),
    [network],
  );

  return (
    <header
      id="header-container"
      className="sticky left-0 top-0 z-50 w-full bg-transparent py-5"
    >
      <div className="container relative flex flex-row items-center justify-between gap-5">
        <div className="relative flex flex-row items-center gap-2">
          <div className="relative h-[36px] w-[36px]">
            <Image
              src="https://gineos-network.s3.ap-southeast-1.amazonaws.com/assets/logo-black.png"
              fill
              sizes="36px"
              quality={100}
              alt="gineos-network"
              className="inline-block dark:hidden"
            />
            <Image
              src="https://gineos-network.s3.ap-southeast-1.amazonaws.com/assets/logo-white.png"
              fill
              sizes="36px"
              quality={100}
              alt="gineos-network"
              className="hidden dark:inline-block"
            />
          </div>
          <span
            className={cn(
              font.clashDisplay.className,
              'relative text-2xl font-semibold leading-none',
            )}
          >
            GINEOS
          </span>
        </div>
        <div className="relative hidden flex-row md:flex md:flex-1 md:gap-2 lg:justify-center lg:gap-4">
          {links.map(([prefix, { title, soon = false, href = prefix }]) => (
            <React.Fragment key={href}>
              {soon ? (
                <div
                  className={cn(
                    'relative flex cursor-pointer flex-row items-center justify-center gap-2 rounded-md bg-transparent font-medium text-primary/70',
                    'text-clip-gradient px-2 py-1 hover:bg-primary/10',
                    currentPath === href && 'text-primary',
                  )}
                >
                  {title}
                  <span className="absolute -right-6 top-1 hidden rounded-full bg-primary px-1.5 py-0.5 text-xs">
                    Soon
                  </span>
                </div>
              ) : (
                <Link
                  href={href}
                  className={cn(
                    'relative flex flex-row items-center justify-center gap-2 rounded-md bg-transparent font-medium text-primary/70',
                    'px-2 py-1 hover:bg-primary/10 hover:text-primary',
                    currentPath === href && 'text-primary',
                  )}
                >
                  {title}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
        <WalletConnection />
      </div>
    </header>
  );
}
