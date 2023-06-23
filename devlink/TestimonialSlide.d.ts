import * as React from "react";
import * as Types from "./types";

declare function TestimonialSlide(props: {
  as?: React.ElementType;
  currentSlideNumber?: React.ReactNode;
  testimonialText?: React.ReactNode;
  testimonialName?: React.ReactNode;
  testimonialBusiness?: React.ReactNode;
  testimonialAvatar?: Types.Asset.Image;
}): React.JSX.Element;
