import {FC, HTMLAttributes} from 'react';

interface MarketProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
}

export const Market: FC<MarketProps> = ({
  className = '',
  width = 32,
  height = 30,
  fill = '#F3F3F0',
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox='0 0 32 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4.17333 0.783947C2.77333 1.61328 0.0266667 4.77061 0 5.59995V6.97328C0 8.71061 1.62667 10.2399 3.1 10.2399C4.87333 10.2399 6.348 8.77061 6.348 7.02661C6.348 8.77061 7.77467 10.2399 9.548 10.2399C11.3187 10.2399 12.6973 8.77061 12.6973 7.02661C12.6973 8.77061 14.2133 10.2399 15.9853 10.2399H16.0173C17.7907 10.2399 19.3053 8.77061 19.3053 7.02661C19.3053 8.77061 20.684 10.2399 22.456 10.2399C24.2293 10.2399 25.656 8.77061 25.656 7.02661C25.656 8.77061 27.1307 10.2399 28.9027 10.2399C30.3733 10.2399 32 8.70928 32 6.97328V5.59995C31.9733 4.77328 29.224 1.61328 27.8267 0.783947C23.4893 0.631947 20.4827 0.60528 16 0.606614C11.5173 0.606614 5.40667 0.67728 4.17333 0.783947ZM12.6747 9.41995C12.5051 9.71528 12.2951 9.98545 12.0507 10.2226C11.384 10.8759 10.464 11.2826 9.45467 11.2826C8.4827 11.283 7.54928 10.9025 6.85467 10.2226C6.62022 9.98985 6.42 9.72499 6.26 9.43595C6.08169 9.72707 5.86358 9.99185 5.612 10.2226C4.91723 10.9023 3.98391 11.2828 3.012 11.2826C2.89167 11.2789 2.77276 11.2555 2.66 11.2133C2.53735 12.5212 2.46263 13.8332 2.436 15.1466V15.1533L2.428 16.7093C2.45467 19.8213 2.12133 26.7946 3.80133 28.5093C6.404 29.1146 11.1947 29.3919 16.0013 29.3933C20.808 29.3933 25.5987 29.1133 28.2013 28.5079C29.8813 26.7959 29.548 19.8226 29.5747 16.7106L29.5667 15.1546V15.1493C29.5408 13.8358 29.4661 12.5238 29.3427 11.2159C29.2302 11.2574 29.1118 11.2808 28.992 11.2853C28.0201 11.2854 27.0868 10.9049 26.392 10.2253C26.1397 9.99523 25.9215 9.73033 25.744 9.43861C25.5747 9.73195 25.3907 9.98795 25.148 10.2253C24.4532 10.9047 23.5198 11.2847 22.548 11.2839C21.5347 11.2839 20.62 10.8799 19.9507 10.2266C19.7063 9.98945 19.4962 9.71928 19.3267 9.42395C19.1592 9.71888 18.9514 9.98904 18.7093 10.2266C18.0144 10.9059 17.0811 11.2859 16.1093 11.2853H15.896C14.9244 11.2863 13.9911 10.9067 13.296 10.2279C13.0535 9.99046 12.8452 9.7203 12.6773 9.42528L12.6747 9.41995ZM10.0027 12.8733V12.8759C11.0627 12.8786 12.0027 12.8759 13.1667 14.1466C14.108 14.0495 15.0537 14.0019 16 14.0039C16.96 14.0039 17.9173 14.0506 18.8333 14.1466C19.9973 12.8759 20.9373 12.8799 21.996 12.8759C22.4973 12.8759 24.4973 12.8759 25.8893 16.7879L27.3867 22.1586C28.496 26.1519 27.032 26.2493 25.2053 26.2519C22.4987 26.1519 20.9973 24.1853 20.9973 22.2186C19.4987 22.4639 17.7493 22.5866 16 22.5879C14.2507 22.5879 12.5013 22.4639 11.0027 22.2186C11.0027 24.1853 9.50267 26.1519 6.79467 26.2533C4.968 26.2479 3.504 26.1506 4.61333 22.1573L6.10933 16.7879C7.50267 12.8759 9.50267 12.8759 10.0027 12.8759V12.8733ZM16 15.9519C15.9973 15.9546 13.1467 18.5706 12.636 19.5013L14.5027 19.4266V21.0533C14.5027 21.1279 15.2493 21.0973 16 21.0626C16.7493 21.0973 17.4987 21.1293 17.4987 21.0519V19.4253L19.3653 19.4986C18.8507 18.5693 16 15.9506 16 15.9506V15.9519Z'
      fill={fill}
    />
  </svg>
);