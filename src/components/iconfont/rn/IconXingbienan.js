/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconXingbienan = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M412.3 856.9c133.6 0 241.9-108.3 241.9-241.9S545.9 373.1 412.3 373.1 170.4 481.4 170.4 615s108.3 241.9 241.9 241.9z m232.6-435.2c43.6 52.4 69.8 119.8 69.8 193.2 0 167-135.4 302.4-302.4 302.4S110 782 110 615s135.4-302.4 302.4-302.4c71.7 0 137.6 25 189.5 66.7L729 252.1H563.5c-16.7 0-30.2-13.5-30.2-30.2s13.5-30.2 30.2-30.2h241.9c16.7 0 30.2 13.5 30.2 30.2v241.9c0 16.7-13.5 30.2-30.2 30.2s-30.2-13.5-30.2-30.2V291.5L644.9 421.7z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXingbienan.defaultProps = {
  size: 18,
};

IconXingbienan = React.memo ? React.memo(IconXingbienan) : IconXingbienan;

export default IconXingbienan;
