import { ComponentPropsWithRef, forwardRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";

const typographyVariant = cva("", {
  variants: {
    variant: {
      h1: "h1",
      body1: "body1",
    },
    fontWeight: {
      regular: "font-normal",
      light: "font-light",
      medium: "font-medium",
      bold: "font-bold",
      semibold: "font-semibold",
    },
  },
  defaultVariants: {
    variant: "body1",
    fontWeight: "regular",
  },
});

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  h7: "p",
  body1: "p",
  div: "div",
  span: "span",
} as const;

interface TypographyProps
  extends ComponentPropsWithRef<"div">,
    VariantProps<typeof typographyVariant> {
  component?: keyof typeof variantsMapping;
}

const Typography = forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, variant, fontWeight, component, ...props }, ref) => {
    const Component = component ? variantsMapping[component] : "p";

    return (
      <Component
        {...props}
        className={typographyVariant({ fontWeight, variant, className })}
        ref={ref}
      />
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
