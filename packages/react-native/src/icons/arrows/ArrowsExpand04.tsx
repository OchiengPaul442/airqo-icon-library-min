import * as React from 'react';
import { withIconProps } from '../../withIconProps';
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowsExpand04 = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 14v2.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C18.48 20 17.92 20 16.8 20H14M10 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2V10m11-1 6-6m0 0h-6m6 0v6M9 15l-6 6m0 0h6m-6 0v-6" /></Svg>;
const ArrowsExpand04WithProps = withIconProps(ArrowsExpand04);
ArrowsExpand04WithProps.displayName = 'ArrowsExpand04';
export default ArrowsExpand04WithProps;