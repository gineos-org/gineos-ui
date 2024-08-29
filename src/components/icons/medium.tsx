import { type IconProps } from '@/types';

export function MediumIcon({
  size = 24,
  fill = 'currentColor',
  className,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 640 512"
      className={className}
    >
      <path
        fill={fill}
        d="M180.5 74.262C80.813 74.262 0 155.633 0 256s80.819 181.738 180.5 181.738S361 356.373 361 256S280.191 74.262 180.5 74.262m288.25 10.646c-49.845 0-90.245 76.619-90.245 171.095s40.406 171.1 90.251 171.1s90.251-76.619 90.251-171.1H559c0-94.503-40.4-171.095-90.248-171.095Zm139.506 17.821c-17.526 0-31.735 68.628-31.735 153.274s14.2 153.274 31.735 153.274S640 340.631 640 256c0-84.649-14.215-153.271-31.742-153.271Z"
      />
    </svg>
  );
}
