/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconRecord = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1085 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M914.285714 905.661537v-38.848518a34.501348 34.501348 0 0 0-34.501347-34.501348H86.253369a34.501348 34.501348 0 0 0-34.501347 34.501348v38.848518c0 4.761186 3.864151 8.625337 8.625336 8.625337h845.283019a8.625337 8.625337 0 0 0 8.625337-8.625337z m-731.083558-174.57682a36.571429 36.571429 0 0 0 32.086254 10.143396l181.339083-31.741239a10.557412 10.557412 0 0 0 5.727224-3.036119l457.073854-457.073855c4.140162-4.140162 4.140162-11.040431 0-15.180593L680.228571 54.858302A10.695418 10.695418 0 0 0 672.569272 51.753181a10.695418 10.695418 0 0 0-7.659299 3.105121L207.836119 512.001159a10.971429 10.971429 0 0 0-2.967116 5.727224l-31.810243 181.339084a36.157412 36.157412 0 0 0 10.143396 32.086253z"
        fill={getIconColor(color, 0, '#00BEC6')}
      />
    </svg>
  );
};

IconRecord.defaultProps = {
  size: 18,
};

export default IconRecord;
