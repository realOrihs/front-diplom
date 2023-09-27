import {FC, HTMLAttributes} from 'react';

interface ArrowLeftProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
}

export const ArrowLeft: FC<ArrowLeftProps> = ({
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
      d='M12.1667 25.1334L0.933317 13.9334C0.799983 13.8 0.705761 13.6556 0.65065 13.5C0.59465 13.3445 0.56665 13.1778 0.56665 13C0.56665 12.8223 0.59465 12.6556 0.65065 12.5C0.705761 12.3445 0.799983 12.2 0.933317 12.0667L12.1667 0.833366C12.4778 0.522255 12.8667 0.366699 13.3333 0.366699C13.8 0.366699 14.2 0.533366 14.5333 0.866699C14.8666 1.20003 15.0333 1.58892 15.0333 2.03337C15.0333 2.47781 14.8666 2.8667 14.5333 3.20003L4.73332 13L14.5333 22.8C14.8444 23.1111 15 23.4943 15 23.9494C15 24.4054 14.8333 24.8 14.5 25.1334C14.1667 25.4667 13.7778 25.6334 13.3333 25.6334C12.8889 25.6334 12.5 25.4667 12.1667 25.1334Z'
      fill={fill}
    />
  </svg>
);
