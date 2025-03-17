import { JW_BLUE } from "@amodeo/util/colors/jw-colors";
import { View } from "@react-pdf/renderer";

export const Divider = () => (
  <View style={{ borderBottom: `1px solid ${JW_BLUE}`, width: "100%" }}></View>
);
