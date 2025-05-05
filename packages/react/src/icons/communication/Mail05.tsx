import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Mail05 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m13.744 2.635 7.528 4.893c.266.173.399.26.495.375a1 1 0 0 1 .189.347c.044.144.044.302.044.62v7.33c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.31C2 18.721 2 17.88 2 16.2V8.87c0-.318 0-.476.044-.62a1 1 0 0 1 .189-.347c.096-.116.229-.202.495-.375l7.528-4.893m3.488 0c-.631-.41-.947-.616-1.287-.695a2 2 0 0 0-.914 0c-.34.08-.656.285-1.287.695m3.488 0 6.192 4.025c.688.447 1.032.67 1.151.954a1 1 0 0 1 0 .775c-.12.283-.463.507-1.15.954l-6.193 4.025c-.631.41-.947.615-1.287.695-.3.07-.613.07-.914 0-.34-.08-.656-.285-1.287-.695L4.064 9.343c-.688-.447-1.032-.67-1.151-.954a1 1 0 0 1 0-.775c.12-.284.463-.507 1.15-.954l6.193-4.025M21.5 19l-6.643-6m-5.714 0L2.5 19" /></svg>;
const ForwardRef = forwardRef(Mail05);
export default ForwardRef;