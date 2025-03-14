import { View, Link } from "@react-pdf/renderer";
import { ComponentProps } from "react";

export const OutlineLink = ({
  children,
  style,
}: {
  children: string;
  style?: ComponentProps<typeof View>["style"];
}) => {
  const outlineNumber = parseInt(children);
  const outlineLinkID =
    outlineNumber + (outlineNumber < 179 ? 999999 : 1000000);
  return (
    <Link
      style={{ textDecoration: "none", color: "black", ...style }}
      src={`https://www.jw.org/finder?srcid=jwlshare&wtlocale=E&prefer=lang&docid=${outlineLinkID}`}
    >
      {children}
    </Link>
  );
};
