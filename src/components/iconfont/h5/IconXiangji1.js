/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconXiangji1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M659.925333 128a74.666667 74.666667 0 0 1 71.338667 52.618667L754.56 256H821.333333c64.8 0 117.333333 52.533333 117.333334 117.333333v426.666667c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V373.333333c0-64.8 52.533333-117.333333 117.333334-117.333333h66.773333l23.296-75.381333A74.666667 74.666667 0 0 1 364.074667 128h295.850666zM512 405.333333c-88.362667 0-160 71.637333-160 160 0 88.362667 71.637333 160 160 160 88.362667 0 160-71.637333 160-160 0-88.362667-71.637333-160-160-160z m0 256a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconXiangji1.defaultProps = {
  size: 18,
};

export default IconXiangji1;
