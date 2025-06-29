import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { WeekendMeetingPDFData } from "./WeekendMeetingPDF.js";

const styles = StyleSheet.create({
  section: {
    textAlign: "right",
    width: 300,
    color: "grey",
    fontSize: 10,
  },
});

type OutgoingSpeakersData = {
  data: WeekendMeetingPDFData["data"][number]["outgoing_speakers"];
};

export const OutgoingSpeakers = ({ data }: OutgoingSpeakersData) => {
  return (
    <View style={styles.section}>
      {data &&
        data.map((item: OutgoingSpeakersData["data"][number]) => {
          return (
            <Text
              key={item.congregation}
            >{`${item.first_name} ${item.last_name} (${item.congregation}) ${item.outline_id || " "}`}</Text>
          );
        })}
    </View>
  );
};
