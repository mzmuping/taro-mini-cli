/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconA5062Fuzhi04 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M47.954 452.869v381.796c0 41.368 33.647 75.001 74.999 75.001h689.999c74.438 0 135.002-60.556 135.002-134.999V452.869h-900z m869.997 321.799c0 57.892-47.101 105-105 105H122.952c-24.814 0-45-20.186-45-45.002V482.871h839.999v291.797z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M114.89 775.897c0 33.105 26.865 59.969 59.998 59.969H752.63c66.269 0 120.001-53.729 120.001-120V526.669H114.89v249.228z"
        fill={getIconColor(color, 1, '#DCDEE2')}
      />
      <path
        d="M63.547 469.569c-5.481 0-10.752-2.989-13.397-8.201-3.743-7.383-0.791-16.437 6.598-20.157l617.417-312.977c7.396-3.81 16.423-0.793 20.163 6.593 3.743 7.38 0.793 16.403-6.599 20.155L70.313 467.96a14.788 14.788 0 0 1-6.766 1.609z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <path
        d="M932.93 466.845c-7.479 0-13.945-5.595-14.867-13.213-18.216-150.262-96.93-248.437-240.66-300.088-7.791-2.813-11.842-11.395-9.037-19.188 2.797-7.793 11.417-11.808 19.188-9.054 153.282 55.106 240.858 164.355 260.29 324.726 0.994 8.232-4.866 15.702-13.09 16.699-0.609 0.087-1.215 0.118-1.824 0.118zM648.239 747.918c-53.62 0-108.495-14.531-158.936-53.874-172.252-134.328-415.972-0.117-418.418 1.229-7.207 4.129-16.378 1.492-20.42-5.715-4.064-7.207-1.508-16.347 5.707-20.42 10.654-6.006 263.458-145.457 451.579 1.262 170.78 133.153 413.284-61.056 415.718-63.048 6.436-5.243 15.886-4.246 21.102 2.168 5.234 6.417 4.276 15.85-2.148 21.096-7.831 6.386-146.157 117.302-294.184 117.302zM659.907 247.529c-46.958 0-85.161 38.642-85.161 86.133 0 47.489 38.203 86.133 85.161 86.133 46.955 0 85.149-38.645 85.149-86.133 0.001-47.491-38.194-86.133-85.149-86.133z m0 142.265c-30.421 0-55.159-25.166-55.159-56.132 0-30.968 24.738-56.134 55.159-56.134 30.409 0 55.147 25.166 55.147 56.134 0.001 30.965-24.738 56.132-55.147 56.132z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <path
        d="M652.89 270.38c-1.201 0-2.419-0.145-3.626-0.439-8.028-1.992-12.928-10.109-10.944-18.135 1.218-4.922 31.32-121.582 162.769-180.822 7.559-3.369 16.437-0.028 19.833 7.531 3.405 7.559 0.045 16.437-7.515 19.833-117.679 53.027-145.7 159.611-145.971 160.665-1.715 6.824-7.831 11.367-14.546 11.367z"
        fill={getIconColor(color, 4, '#333333')}
      />
    </svg>
  );
};

IconA5062Fuzhi04.defaultProps = {
  size: 18,
};

export default IconA5062Fuzhi04;
