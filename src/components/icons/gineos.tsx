import { type IconProps } from '@/types';

export function GineosIcon({
  size = 24,
  fill = 'currentColor',
  className,
}: IconProps) {
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 99 99"
    >
      <g
        id="Layer_1-2"
        data-name="Layer 1"
      >
        <g>
          <polygon
            fill={fill}
            className={className}
            points="74.25 0 74.25 24.75 24.75 24.75 24.75 74.25 0 74.25 0 29 29 0 74.25 0"
          />
          <polygon
            fill={fill}
            className={className}
            points="74.25 24.75 49.5 49.5 74.25 49.5 74.25 74.25 99 99 99 24.75 74.25 24.75"
          />
          <polygon
            fill={fill}
            className={className}
            points="24.75 74.25 0 99 74.25 99 74.25 74.25 24.75 74.25"
          />
        </g>
      </g>
    </svg>
  );
}
