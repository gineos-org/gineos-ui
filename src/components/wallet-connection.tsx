import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useWallet } from '@solana/wallet-adapter-react';
import Image from 'next/image';

export default function WalletConnection() {
  // const { connection } = useConnection();
  const { wallets } = useWallet();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="gradient"
          className="rounded-md"
        >
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="space-y-2">
        <DialogHeader className="space-y-4">
          <DialogTitle>Connect yout wallet to Gineos Network</DialogTitle>
          <DialogDescription className="rounded-md bg-primary/5 px-2 py-2">
            <span>
              By connecting your wallet, you acknowledge that you have read,
              understand and accept the terms in the{' '}
              <a
                href="https://www.gineos.org/disclaimer"
                target="_blank"
                className="font-semibold text-primary"
              >
                disclaimer
              </a>
            </span>
          </DialogDescription>
        </DialogHeader>
        <p className="relative w-full text-base">Select Wallet</p>
        <div className="relative grid grid-cols-2 gap-4">
          {wallets.map((wallet, i) => (
            <div
              key={i}
              className="relative flex cursor-pointer flex-row items-center gap-4 rounded-md border border-primary/10 bg-primary/5 px-4 py-2 hover:bg-primary/40"
            >
              <div className="flex">
                <Image
                  src={wallet.adapter.icon}
                  alt={wallet.adapter.name}
                  height={40}
                  width={40}
                  className={cn(
                    wallet.adapter.name === 'Ledger' && 'gineos-svg',
                  )}
                />
              </div>
              <div className="relative w-full">
                <p className="text-sm font-semibold leading-none">
                  {wallet.adapter.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
