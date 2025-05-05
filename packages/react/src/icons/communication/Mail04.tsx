import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Mail04 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m13.744 2.635 7.528 4.893c.266.173.399.26.495.375a1 1 0 0 1 .189.347c.044.144.044.302.044.62v7.33c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.31C2 18.721 2 17.88 2 16.2V8.87c0-.318 0-.476.044-.62a1 1 0 0 1 .189-.347c.096-.116.229-.202.495-.375l7.528-4.893m3.488 0c-.631-.41-.947-.616-1.287-.695a2 2 0 0 0-.914 0c-.34.08-.656.285-1.287.695m3.488 0 7.224 4.696c.344.223.516.335.576.477a.5.5 0 0 1 0 .387c-.06.142-.232.254-.576.477l-7.224 4.696c-.631.41-.947.615-1.287.695-.3.07-.613.07-.914 0-.34-.08-.656-.285-1.287-.695L3.032 8.672c-.344-.223-.516-.335-.576-.477a.5.5 0 0 1 0-.387c.06-.142.232-.254.576-.477l7.224-4.696" /></svg>;
const ForwardRef = forwardRef(Mail04);
export default ForwardRef;