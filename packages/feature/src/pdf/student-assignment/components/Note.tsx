import { Text, Link } from "@react-pdf/renderer";

export const Note = () => (
  <Text style={{ marginTop: 10, fontSize: 9, padding: 20 }}>
    Note to student: The source material and study point for your assignment can
    be found in the Life and Ministry Meeting Workbook. Please review the
    instructions for the part as outlined in{" "}
    <Link src="https://www.jw.org/open?docid=1201038&prefer=lang&wtlocale=E" style={{textDecoration: "none"}}>
      Instructions for Our Christian Life and Ministry Meeting (S-38)
    </Link>
    .
  </Text>
);
