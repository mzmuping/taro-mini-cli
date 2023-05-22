/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconGouShi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 131.75C301.9484375 131.75 131.75 301.9484375 131.75 512s170.1984375 380.25 380.25 380.25 380.25-170.1984375 380.25-380.25S722.0515625 131.75 512 131.75z m-58.6828125 514.9828125c-4.3875 4.3875-10.603125 8.04375-16.0875 8.04375s-11.7-3.8390625-16.2703125-8.2265625l-102.375-102.375 32.540625-32.540625 86.2875 86.2875L665.5625 368.1265625l31.9921875 33.0890625-244.2375 245.5171875z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconGouShi.defaultProps = {
  size: 18,
};

IconGouShi = React.memo ? React.memo(IconGouShi) : IconGouShi;

export default IconGouShi;
