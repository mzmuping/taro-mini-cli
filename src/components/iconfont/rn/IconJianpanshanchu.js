/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconJianpanshanchu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1045 1024" width={size} height={size} {...rest}>
      <Path
        d="M820.522667 234.666667C885.76 234.666667 938.666667 289.28 938.666667 356.693333v310.613334c0 67.413333-52.906667 122.026667-118.144 122.026666H336.170667c-36.672 0-71.253333-17.578667-93.610667-47.573333l-146.069333-195.925333a56.917333 56.917333 0 0 1 0-67.669334l146.069333-195.925333c22.357333-29.994667 56.96-47.573333 93.610667-47.573333z m0.149333 66.56H333.909333c-16.746667 0-32.554667 7.978667-42.773333 21.632L149.333333 511.978667l141.802667 189.162666c9.429333 12.586667 23.616 20.373333 38.933333 21.482667l3.84 0.149333H820.693333c29.824 0 53.994667-24.832 53.994667-55.466666V356.693333c0-30.634667-24.170667-55.466667-53.994667-55.466666z m-125.653333 91.776a30.72 30.72 0 0 1 0 43.456l-75.562667 75.52 75.541333 75.562666a30.72 30.72 0 1 1-43.456 43.456l-75.52-75.562666-75.562666 75.562666a30.72 30.72 0 1 1-43.456-43.456L532.565333 512l-75.562666-75.52a30.72 30.72 0 1 1 43.456-43.456L576 468.522667l75.52-75.52a30.72 30.72 0 0 1 43.456 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconJianpanshanchu.defaultProps = {
  size: 18,
};

IconJianpanshanchu = React.memo ? React.memo(IconJianpanshanchu) : IconJianpanshanchu;

export default IconJianpanshanchu;