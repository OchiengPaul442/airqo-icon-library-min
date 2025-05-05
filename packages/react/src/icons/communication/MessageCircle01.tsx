import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const MessageCircle01 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.999 11.5a8.5 8.5 0 0 1-11.555 7.934c-.174-.066-.26-.1-.33-.116a.901.901 0 0 0-.185-.024 2.314 2.314 0 0 0-.304.021l-5.12.53c-.489.05-.733.075-.877-.013a.5.5 0 0 1-.234-.35c-.026-.166.09-.382.324-.814l1.636-3.027c.134-.25.202-.374.232-.494a.899.899 0 0 0 .028-.326c-.01-.123-.064-.283-.172-.604A8.5 8.5 0 1 1 20.999 11.5Z" /></svg>;
const ForwardRef = forwardRef(MessageCircle01);
export default ForwardRef;