import type React from "react";

// `<image-slot>` is rendered as a plain custom element (no JS registration);
// the design-system CSS styles it. Declare it so TSX accepts the tag.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "image-slot": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export {};
