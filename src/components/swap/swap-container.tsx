import Icon from '@/components/icons';
import { Button } from '@/components/ui/button';
import font from '@/lib/font';
import { cn } from '@/lib/utils';

export default function SwapContainer() {
  return (
    <div
      className={cn(
        'relative h-full w-full rounded-xl border border-primary/10 bg-background shadow-2xl dark:shadow-primary/15 lg:bg-background/10 lg:backdrop-blur-md',
        'z-10 mx-auto max-w-full space-y-5 md:max-w-xl',
        'px-4 py-6 md:px-7 md:py-8 lg:px-10 lg:py-10',
      )}
    >
      <div className="relative mb-5 w-full text-start">
        <h4 className="text-clip-gradient relative inline-block text-4xl font-semibold">
          Swap
        </h4>
      </div>
      <div className="relative h-full w-full">
        <div className="relative w-full rounded-md border border-primary/10 bg-primary/5 px-5 py-5">
          <div className="relative flex w-full flex-row items-center justify-between gap-4">
            <div className="flex-none">
              <div
                className={cn(
                  'relative text-sm font-semibold leading-none md:text-base',
                )}
              >
                From
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="flex-none">
              <div
                className={cn(
                  'rounded-md bg-primary/10 px-1.5 py-1.5 leading-none',
                  'cursor-pointer text-xs font-semibold hover:bg-primary/20',
                )}
              >
                Max
              </div>
            </div>
            <div className="flex-none">
              <div
                className={cn(
                  'rounded-md bg-primary/10 px-1.5 py-1.5 leading-none',
                  'cursor-pointer text-xs font-semibold hover:bg-primary/20',
                )}
              >
                50%
              </div>
            </div>
          </div>
          <div className="relative mt-4 flex flex-row items-center gap-5">
            <div className="flex-1">
              <input
                type="number"
                placeholder="0"
                className={cn(
                  font.firaCode.className,
                  'relative w-full appearance-none bg-transparent text-2xl outline-none md:text-3xl lg:text-4xl',
                )}
              />
            </div>
            <div className="relative flex cursor-pointer items-center justify-center gap-2 rounded-md bg-primary/10 px-2 py-1.5 md:px-3 md:py-2">
              <div className="flex h-6 w-6 flex-row items-center justify-center rounded-full bg-background lg:h-8 lg:w-8">
                <Icon.SolanaIcon size={20} />
              </div>
              <p className="text-sm md:text-xl lg:text-2xl">SOL</p>
              <Icon.ChevronDownIcon size={16} />
            </div>
          </div>
          <p className="relative mt-2 text-end">~0 </p>
        </div>

        <div className="relative mt-5 w-full rounded-md border border-primary/10 bg-primary/5 px-5 py-5">
          <div className="relative flex w-full flex-row items-center justify-between gap-4">
            <div className="flex-none">
              <div
                className={cn(
                  'relative text-sm font-semibold leading-none md:text-base',
                )}
              >
                To
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="flex-none">
              <div
                className={cn(
                  'rounded-md bg-primary/10 px-1.5 py-1.5 leading-none',
                  'cursor-pointer text-xs font-semibold hover:bg-primary/20',
                )}
              >
                Max
              </div>
            </div>
            <div className="flex-none">
              <div
                className={cn(
                  'rounded-md bg-primary/10 px-1.5 py-1.5 leading-none',
                  'cursor-pointer text-xs font-semibold hover:bg-primary/20',
                )}
              >
                50%
              </div>
            </div>
          </div>
          <div className="relative mt-4 flex flex-row items-center gap-5">
            <div className="flex-1">
              <input
                type="number"
                placeholder="0"
                className={cn(
                  font.firaCode.className,
                  'relative w-full appearance-none bg-transparent text-2xl outline-none md:text-3xl lg:text-4xl',
                )}
              />
            </div>
            <div className="relative flex cursor-pointer items-center justify-center gap-2 rounded-md bg-primary/10 px-2 py-1.5 md:px-3 md:py-2">
              <div className="flex h-6 w-6 flex-row items-center justify-center rounded-full bg-background lg:h-8 lg:w-8">
                <Icon.GineosIcon size={16} />
              </div>
              <p className="text-sm md:text-xl lg:text-2xl">GINE</p>
              <Icon.ChevronDownIcon size={16} />
            </div>
          </div>
          <p className="relative mt-2 text-end">~0 </p>
        </div>

        <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 flex-row items-center justify-center rounded-full bg-background md:h-20 md:w-20">
          <div className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-full shadow-transparent transition-all hover:rotate-180 hover:shadow-primary md:h-16 md:w-16">
            <Icon.SwapIcon
              size={28}
              className="rotate-90"
            />
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Button
          variant="gradient"
          className="w-full"
        >
          Connect Wallet
        </Button>
      </div>
    </div>
  );
}
