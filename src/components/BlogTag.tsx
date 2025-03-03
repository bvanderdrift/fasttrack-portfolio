import React from "react";

interface Props {
  index: number;
  children: string;
}

// Cycle through tag variants for a playful look
const tagClasses = ["tag-primary", "tag-secondary", "tag-accent"];

export const BlogTag = ({ index, children }: Props) => {
  return (
    <span className={tagClasses[index % tagClasses.length]}>{children}</span>
  );
};
