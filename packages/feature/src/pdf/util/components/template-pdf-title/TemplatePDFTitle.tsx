import { Text, View } from "@react-pdf/renderer";
import { ReactElement } from "react";

export const TemplatePDFTitle = (): ReactElement => {
  return (
    <View
      style={{
        border: "1px solid black",
        backgroundColor: "blue",
        padding: 10,
      }}
    >
      <View>
        <View>
          <Text style={{ border: "1px solid black", backgroundColor: "red" }}>
            One
          </Text>
          <Text
            style={{ border: "1px solid black", backgroundColor: "yellow" }}
          >
            Two
          </Text>
          <Text style={{ border: "1px solid black", backgroundColor: "green" }}>
            Three
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              border: "1px solid black",
              backgroundColor: "red",
              fontFamily: "Helvetica-Bold",
            }}
          >
            One
          </Text>
          <Text
            style={{ border: "1px solid black", backgroundColor: "yellow" }}
          >
            Two
          </Text>
          <Text style={{ border: "1px solid black", backgroundColor: "green" }}>
            Three
          </Text>
        </View>
        <View style={{ flexDirection: "row", width: 300 }}>
          <Text style={{ border: "1px solid black", backgroundColor: "red" }}>
            One
          </Text>
          <Text
            style={{ border: "1px solid black", backgroundColor: "yellow" }}
          >
            Two
          </Text>
          <Text style={{ border: "1px solid black", backgroundColor: "green" }}>
            Three
          </Text>
        </View>
      </View>
    </View>
  );
};
