import { IonButton, IonIcon, IonItem } from "@ionic/react";
import { chatboxOutline } from "ionicons/icons";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { formatName } from "@amodeo/util/formatters/formatName";

interface SchoolPartsListItemProps {
  data: {
    midweek_meeting_data: Tables<"midweek_meeting_data">;
    midweek_assignments: Tables<"_view_midweek_meeting_schedule">["midweek_assignments"];
  };
  school: string;
  part: string;
}

export const ApplyMessageButton = ({
  data,
  school,
  part,
}: SchoolPartsListItemProps) => {
  const smsHref = `sms:?body=${encodeURIComponent(
    `Hi ${
      data?.midweek_assignments[
        ("school_" +
          school +
          "_apply_" +
          part) as keyof Tables<"_view_midweek_meeting_schedule">["midweek_assignments"]
      ]?.first_name
    },
Just checking if you're ok for your part on the midweek meeting? Here are the details...

PART: ${
      data?.midweek_meeting_data[
        ("mwb_ayf_part" +
          part +
          "_title") as keyof Tables<"midweek_meeting_data">
      ]
    }
${
  !(
    data.midweek_meeting_data[
      ("mwb_ayf_part" + part) as keyof Tables<"midweek_meeting_data">
    ] as string
  ).includes("Talk") &&
  (data.midweek_meeting_data[
    ("mwb_ayf_part" + part + "_type") as keyof Tables<"midweek_meeting_data">
  ] as string) !== "Talk"
    ? `
ASSISTANT: ${formatName(
        data?.midweek_assignments[
          ("school_" +
            school +
            "_assistant_" +
            part) as keyof Tables<"_view_midweek_meeting_schedule">["midweek_assignments"]
        ]
      )}
`
    : ""
}
TIME: ${
      data?.midweek_meeting_data[
        ("mwb_ayf_part" +
          part +
          "_time") as keyof Tables<"midweek_meeting_data">
      ]
    } min
     
DETAILS: ${
      data?.midweek_meeting_data[
        ("mwb_ayf_part" + part) as keyof Tables<"midweek_meeting_data">
      ]
    }`)}`;

  return (
      <IonButton fill="clear" expand="block" href={smsHref} slot="end" className="ion-padding-start">
        <IonIcon icon={chatboxOutline} slot="icon-only" size="large" />
      </IonButton>
  );
};
