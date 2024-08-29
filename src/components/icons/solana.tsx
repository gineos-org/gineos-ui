import { type IconProps } from '@/types';

export function SolanaIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <g fill="none">
        <path
          fill="url(#tokenBrandedSolana0)"
          d="M19.125 7.447a.7.7 0 0 1-.456.18H2.644c-.569 0-.856-.65-.462-1.03l2.632-2.538a.67.67 0 0 1 .455-.188h16.088c.574 0 .855.656.456 1.038z"
        />
        <path
          fill="url(#tokenBrandedSolana1)"
          d="M19.125 19.954a.7.7 0 0 1-.456.175H2.644c-.569 0-.856-.645-.462-1.026l2.632-2.544a.66.66 0 0 1 .455-.181h16.088c.574 0 .855.65.456 1.03z"
        />
        <path
          fill="url(#tokenBrandedSolana2)"
          d="M19.125 10.303a.7.7 0 0 0-.456-.175H2.644c-.569 0-.856.645-.462 1.025l2.632 2.545a.7.7 0 0 0 .455.18h16.088c.574 0 .855-.65.456-1.03z"
        />
        <defs>
          <linearGradient
            id="tokenBrandedSolana0"
            x1="2.001"
            x2="22.51"
            y1="59.823"
            y2="59.635"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#599db0" />
            <stop
              offset="1"
              stopColor="#47f8c3"
            />
          </linearGradient>
          <linearGradient
            id="tokenBrandedSolana1"
            x1="2.001"
            x2="22.379"
            y1="8.853"
            y2="8.697"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#c44fe2" />
            <stop
              offset="1"
              stopColor="#73b0d0"
            />
          </linearGradient>
          <linearGradient
            id="tokenBrandedSolana2"
            x1="3.152"
            x2="21.225"
            y1="12.003"
            y2="12.003"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#778cbf" />
            <stop
              offset="1"
              stopColor="#5dcdc9"
            />
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}
