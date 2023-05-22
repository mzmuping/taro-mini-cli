/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconBijijilu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M778.24 61.44a122.88 122.88 0 0 1 122.88 122.88v655.36a122.88 122.88 0 0 1-122.88 122.88H245.76a122.88 122.88 0 0 1-122.88-122.88V184.32a122.88 122.88 0 0 1 122.88-122.88h532.48z m0 61.44H245.76a61.44 61.44 0 0 0-61.3376 57.83552L184.32 184.32v655.36a61.44 61.44 0 0 0 57.83552 61.3376L245.76 901.12h532.48a61.44 61.44 0 0 0 61.3376-57.83552L839.68 839.68V184.32a61.44 61.44 0 0 0-57.83552-61.3376L778.24 122.88zM563.2 532.48a30.72 30.72 0 0 1 0 61.44h-266.24a30.72 30.72 0 0 1 0-61.44h266.24z m163.84-225.28a30.72 30.72 0 0 1 0 61.44h-430.08a30.72 30.72 0 0 1 0-61.44h430.08z"
        fill={getIconColor(color, 0, '#131415')}
      />
    </Svg>
  );
};

IconBijijilu.defaultProps = {
  size: 18,
};

IconBijijilu = React.memo ? React.memo(IconBijijilu) : IconBijijilu;

export default IconBijijilu;
