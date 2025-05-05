import * as React from 'react';
import { withIconProps } from '../../withIconProps';
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AlertsFeedbackBellRinging01 = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.353 21a3.99 3.99 0 0 0 2.646 1 3.986 3.986 0 0 0 2.646-1M2.293 5.82A4.007 4.007 0 0 1 4.325 2.3m17.376 3.52A4.007 4.007 0 0 0 19.67 2.3M18 8A6 6 0 0 0 6 8c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.088 1.936.015.182.053.252.2.36.133.099.73.099 1.927.099H18.61c1.197 0 1.795 0 1.928-.098.146-.11.185-.179.2-.361.013-.165-.354-.755-1.088-1.936C18.779 13.206 18 11.09 18 8Z" /></Svg>;
const AlertsFeedbackBellRinging01WithProps = withIconProps(AlertsFeedbackBellRinging01);
AlertsFeedbackBellRinging01WithProps.displayName = 'AlertsFeedbackBellRinging01';
export default AlertsFeedbackBellRinging01WithProps;