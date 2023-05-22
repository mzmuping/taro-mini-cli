/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconQitalajiChongwufenbian = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M751.36 883.2H272.64c-97.28 0-176.64-79.36-176.64-176.64 0-72.96 46.08-139.52 113.92-165.12v-6.4c0-58.88 39.68-110.08 96-125.44-7.68-14.08-11.52-28.16-11.52-43.52 0-52.48 43.52-96 96-96h47.36c8.96-1.28 75.52-15.36 97.28-53.76 8.96-16.64 10.24-34.56 1.28-56.32-2.56-5.12 0-11.52 3.84-14.08 3.84-3.84 10.24-5.12 15.36-2.56 2.56 1.28 74.24 38.4 90.88 128 47.36 6.4 84.48 46.08 84.48 96 0 15.36-3.84 30.72-11.52 43.52 56.32 15.36 96 66.56 96 125.44v6.4c67.84 25.6 113.92 92.16 113.92 165.12 0 96-79.36 175.36-177.92 175.36zM390.4 295.68c-38.4 0-69.12 30.72-69.12 69.12 0 16.64 6.4 32 16.64 44.8 2.56 3.84 3.84 8.96 2.56 14.08-1.28 5.12-6.4 7.68-11.52 8.96-52.48 5.12-93.44 49.92-93.44 102.4 0 3.84 0 7.68 1.28 11.52v2.56c1.28 6.4-2.56 12.8-8.96 14.08-62.72 19.2-106.24 78.08-106.24 143.36 0 83.2 67.84 149.76 149.76 149.76h480c83.2 0 149.76-67.84 149.76-149.76 0-65.28-43.52-124.16-106.24-143.36-6.4-2.56-10.24-7.68-8.96-14.08v-2.56c0-3.84 1.28-7.68 1.28-11.52 0-52.48-39.68-97.28-93.44-102.4-5.12 0-8.96-3.84-11.52-8.96-1.28-5.12-1.28-10.24 2.56-14.08 11.52-12.8 16.64-28.16 16.64-44.8 0-38.4-30.72-69.12-69.12-69.12-6.4 0-12.8-5.12-12.8-11.52-5.12-48.64-30.72-80.64-51.2-98.56 0 15.36-3.84 29.44-11.52 43.52-30.72 52.48-113.92 66.56-117.76 67.84H390.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M162.56 757.76c-2.56 0-5.12-1.28-6.4-3.84-1.28-2.56-2.56-6.4-3.84-10.24-1.28-3.84 1.28-7.68 3.84-8.96 3.84-1.28 7.68 1.28 8.96 3.84 1.28 2.56 2.56 6.4 2.56 8.96 1.28 3.84 0 7.68-3.84 8.96 1.28 1.28 0 1.28-1.28 1.28zM751.36 830.72H272.64c-39.68 0-78.08-19.2-101.12-52.48-2.56-2.56-1.28-7.68 1.28-8.96s7.68-1.28 8.96 1.28c20.48 29.44 55.04 46.08 89.6 46.08h480c61.44 0 111.36-49.92 111.36-111.36 0-48.64-32-92.16-78.08-106.24-3.84-1.28-5.12-5.12-3.84-8.96 1.28-3.84 5.12-5.12 8.96-3.84 51.2 16.64 88.32 65.28 88.32 119.04-1.28 70.4-57.6 125.44-126.72 125.44z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M615.68 563.2H224c-7.68 0-12.8-6.4-12.8-12.8s6.4-12.8 12.8-12.8h391.68c7.68 0 12.8 6.4 12.8 12.8s-6.4 12.8-12.8 12.8z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <path
        d="M512 431.36H327.68c-7.68 0-12.8-6.4-12.8-12.8s6.4-12.8 12.8-12.8H512c7.68 0 12.8 6.4 12.8 12.8s-5.12 12.8-12.8 12.8z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </svg>
  );
};

IconQitalajiChongwufenbian.defaultProps = {
  size: 18,
};

export default IconQitalajiChongwufenbian;
