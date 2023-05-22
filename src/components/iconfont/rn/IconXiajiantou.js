/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconXiajiantou = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXiajiantou.defaultProps = {
  size: 18,
};

IconXiajiantou = React.memo ? React.memo(IconXiajiantou) : IconXiajiantou;

export default IconXiajiantou;
