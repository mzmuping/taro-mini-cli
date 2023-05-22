/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconJilu1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M44.521739 395.976348L507.993043 0 979.478261 395.976348V1024H44.521739V395.976348z"
        fill={getIconColor(color, 0, '#00BEC6')}
      />
    </svg>
  );
};

IconJilu1.defaultProps = {
  size: 18,
};

export default IconJilu1;
