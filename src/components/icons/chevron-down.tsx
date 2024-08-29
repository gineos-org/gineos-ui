import { type IconProps } from '@/types';

export function ChevronDownIcon({
  size = 24,
  fill = 'currentColor',
  className,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
      className={className}
    >
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="m112 184l144 144l144-144"
      />
    </svg>
  );
}
