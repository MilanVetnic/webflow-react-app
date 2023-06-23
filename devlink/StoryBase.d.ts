import * as React from "react";
import * as Types from "./types";

declare function StoryBase(props: {
  as?: React.ElementType;
  bottomLine?: Types.Visibility.VisibilityConditions;
  storyFeaturedImage?: Types.Asset.Image;
  tagNumber?: React.ReactNode;
  tagText?: React.ReactNode;
  storySmallImage?: Types.Asset.Image;
  storyTitle?: React.ReactNode;
  storyDescription?: React.ReactNode;
  topCornerBackgroundVisibility?: Types.Visibility.VisibilityConditions;
  squareBackgroundVisibility?: Types.Visibility.VisibilityConditions;
  bottomCornersBackgroundVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
