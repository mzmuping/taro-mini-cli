/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconZaocan = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M830.438563 406.554436l-45.588291 0 0-14.005992c0-33.098839-26.928303-60.027142-60.027142-60.027142L124.554784 332.521303c-33.098839 0-60.027142 26.928303-60.027142 60.027142l0 188.083679c0 91.385337 35.920094 185.921433 98.55155 259.367189 66.428945 77.902254 152.231123 120.803343 241.599524 120.803343l40.017412 0c89.369424 0 175.170578-42.902112 241.600547-120.803343 42.819225-50.212612 73.14388-110.284779 88.050382-172.468027l56.090483 0c71.951729 0 130.48996-58.537208 130.48996-130.487913C960.928522 465.091644 902.391315 406.554436 830.438563 406.554436zM655.847176 814.033941c-58.70196 68.838831-133.690862 106.750279-211.150024 106.750279l-40.017412 0c-77.460186 0-152.448064-37.911448-211.150024-106.750279-56.55097-66.316381-88.983637-151.387919-88.983637-233.401818l0-188.083679c0-11.033287 8.975419-20.008706 20.008706-20.008706l126.699634 0 0 97.419773-73.886801 0c-11.050684 0-20.008706 8.958022-20.008706 20.008706l0 190.085266c0 11.050684 8.958022 20.008706 20.008706 20.008706L367.452883 700.06219c11.050684 0 20.008706-8.958022 20.008706-20.008706L387.461589 489.968218c0-11.050684-8.958022-20.008706-20.008706-20.008706l-76.289524 0 0-97.419773 433.659771 0c11.032264 0 20.008706 8.975419 20.008706 20.008706l0 34.014698 0 154.068981C744.831836 662.647045 712.400193 747.717559 655.847176 814.033941zM347.444177 509.976924l0 150.066831L197.377346 660.043754 197.377346 509.976924 347.444177 509.976924zM830.438563 627.513874l-45.588291 0 0-46.88175L784.850272 446.572872l45.588291 0c49.885154 0 90.471524 40.585347 90.471524 90.471524C920.91111 586.92955 880.32474 627.513874 830.438563 627.513874zM245.986437 162.269757c0.76748 0.665149 18.817578 16.601096 18.817578 44.189432 0 14.413268-3.50687 21.300119-8.362458 30.832216-5.506411 10.810207-12.360516 24.26566-12.360516 46.989197 0 11.050684 8.958022 20.008706 20.008706 20.008706 11.050684 0 20.008706-8.958022 20.008706-20.008706 0-13.117762 3.356444-19.706831 8.000208-28.826536 5.668093-11.128455 12.721743-24.975834 12.721743-48.994877 0-46.855144-31.787984-73.745584-33.141818-74.867128 0 0-15.661701-15.129582-27.598568-4.605901-17.507746 15.435551 2.059915 35.414581 2.059915 35.414581L245.986437 162.269757zM434.128445 234.942917c0 38.401612-29.996175 54.088896-31.101345 54.653761 0 0-19.268856 13.372565-10.128685 29.04757 9.140171 15.676028 27.550473 6.977925 27.550473 6.977925 2.191922-1.060145 53.699016-26.703175 53.699016-90.680279 0-31.127951-16.331967-49.709145-29.452799-64.639183-10.538007-11.990079-16.499789-19.266809-16.499789-29.399587 0-31.937386 14.552437-37.551244 15.172561-37.773302-0.524956 0.188288-0.828878 0.23536-0.828878 0.23536s22.959921-9.784854 18.339694-28.264741c-4.620227-18.479887-28.138874-10.534937-28.138874-10.534937-16.550954 4.180206-44.562938 24.962531-44.562938 76.337619 0 25.712615 14.670118 42.405809 26.458605 55.818283C426.721755 210.473619 434.128445 219.675188 434.128445 234.942917zM551.793308 162.40074c0.187265 0.155543 18.665105 16.249079 18.665105 44.058448 0 14.413268-3.507894 21.300119-8.363482 30.832216-5.506411 10.810207-12.359492 24.26566-12.359492 46.989197 0 11.050684 8.959046 20.008706 20.008706 20.008706 11.04966 0 20.008706-8.958022 20.008706-20.008706 0-13.117762 3.355421-19.706831 8.001231-28.826536 5.66707-11.128455 12.720719-24.975834 12.720719-48.994877 0-46.855144-31.79003-73.745584-33.143864-74.867128-8.507768-7.055696-21.123087-5.870708-28.17469 2.635013C542.104645 142.734842 543.28554 155.349137 551.793308 162.40074z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconZaocan.defaultProps = {
  size: 18,
};

export default IconZaocan;
