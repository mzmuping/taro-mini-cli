/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconJilu1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M44.521739 395.976348L507.993043 0 979.478261 395.976348V1024H44.521739V395.976348z"
        fill={getIconColor(color, 0, '#00BEC6')}
      />
    </Svg>
  );
};

IconJilu1.defaultProps = {
  size: 18,
};

IconJilu1 = React.memo ? React.memo(IconJilu1) : IconJilu1;

export default IconJilu1;
