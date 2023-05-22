/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconQushi = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1117 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M1024 928.463768V857.043478a10.202899 10.202899 0 0 0-10.202899-10.202898H136.347826V51.014493A10.202899 10.202899 0 0 0 126.144928 40.811594H54.724638A10.202899 10.202899 0 0 0 44.521739 51.014493v877.449275c0 5.632 4.570899 10.202899 10.202899 10.202899h959.072463a10.202899 10.202899 0 0 0 10.202899-10.202899zM220.827826 584.993391a10.202899 10.202899 0 0 0 0 14.447305l50.443131 50.606376a10.202899 10.202899 0 0 0 14.447304 0l176.306087-175.489855L624.862609 638.293333a10.202899 10.202899 0 0 0 14.447304 0l351.22458-351.061333a10.202899 10.202899 0 0 0 0-14.447304l-50.524754-50.524754a10.202899 10.202899 0 0 0-14.365681 0L632.208696 515.532058 469.778551 352.040812a10.202899 10.202899 0 0 0-14.447305 0L220.827826 584.993391z"
        fill={getIconColor(color, 0, '#00BEC6')}
      />
    </svg>
  );
};

IconQushi.defaultProps = {
  size: 18,
};

export default IconQushi;
