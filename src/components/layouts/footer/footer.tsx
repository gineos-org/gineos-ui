import Icon from '@/components/icons';
import font from '@/lib/font';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

const SOCIAL_LINKS = {
  'https://x.com/GineosNetwork': {
    title: 'X',
    icon: <Icon.TwitterIcon size={18} />,
  },
  'https://t.me/GineosNetwork': {
    title: 'Telegram',
    icon: <Icon.TelegramIcon size={18} />,
  },
  'https://gineos.medium.com/': {
    title: 'Medium',
    icon: <Icon.MediumIcon size={18} />,
  },
};

export default function Footer() {
  const links: readonly [
    string,
    {
      title: string;
      icon: React.ReactNode;
      href?: string;
    },
  ][] = React.useMemo(
    () =>
      Object.entries(SOCIAL_LINKS).filter(
        (
          el: [
            string,
            { title: string; icon: React.ReactNode; devnet?: boolean },
          ],
        ) => true,
      ),
    [],
  );

  return (
    <footer
      id="footer-container"
      className="relative mt-24 hidden w-full border-t border-t-foreground/5 py-10 md:block"
    >
      <div className="container">
        <div className="relative flex flex-row items-center justify-between">
          <div className="flex-1">
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
          </div>
          <div className="flex flex-1 flex-row items-start justify-end gap-10">
            <div className="relative text-start">
              <p className="font-semibold uppercase">Contact</p>
              <Link
                href="mailto:official@gineos.org"
                className="relative mt-1 block"
              >
                official@gineos.org
              </Link>
            </div>
            <div className="relative text-start">
              <p className="font-semibold uppercase">Social Media</p>
              <div className="relative mt-1 flex flex-row items-center gap-4">
                {links.map(([prefix, { title, icon, href = prefix }]) => (
                  <Link
                    key={href}
                    href={href}
                    title={title}
                    className={cn(
                      'relative flex flex-row items-center justify-center rounded-md bg-transparent font-medium text-foreground',
                    )}
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
