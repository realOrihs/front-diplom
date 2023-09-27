import {FC, HTMLAttributes} from 'react';

interface ArrowRightProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
}

export const ArrowRight: FC<ArrowRightProps> = ({
  className = '',
  width = 16,
  height = 26,
  fill = 'black',
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox='0 0 16 26'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3.83335 0.866631L15.0667 12.0666C15.2 12.2 15.2942 12.3444 15.3494 12.5C15.4054 12.6555 15.4334 12.8222 15.4334 13C15.4334 13.1777 15.4054 13.3444 15.3494 13.5C15.2942 13.6555 15.2 13.8 15.0667 13.9333L3.83335 25.1666C3.52224 25.4777 3.13335 25.6333 2.66668 25.6333C2.20002 25.6333 1.80002 25.4666 1.46668 25.1333C1.13335 24.8 0.966683 24.4111 0.966684 23.9666C0.966684 23.5222 1.13335 23.1333 1.46668 22.8L11.2667 13L1.46669 3.19997C1.15557 2.88885 1.00002 2.50574 1.00002 2.05063C1.00002 1.59463 1.16669 1.19997 1.50002 0.866631C1.83335 0.533297 2.22224 0.366631 2.66669 0.366631C3.11113 0.366631 3.50002 0.533297 3.83335 0.866631Z'
      fill={fill}
    />
  </svg>
);
