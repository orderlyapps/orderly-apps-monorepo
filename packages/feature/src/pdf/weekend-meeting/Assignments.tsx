import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { Row } from "../util/Row.js";

const styles = StyleSheet.create({
  section: {},
  label: {
    marginLeft: 90,
  },
  name: {
    paddingLeft: 5,
  },
});

type AssignmentsData = {
  label: "Chairman" | "Reader" | "Speaker";
  name: string;
};

export const Assignment = ({ label, name }: AssignmentsData) => {
  return (
    <Row style={styles.section}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.name}>{name}</Text>
    </Row>
  );
};
