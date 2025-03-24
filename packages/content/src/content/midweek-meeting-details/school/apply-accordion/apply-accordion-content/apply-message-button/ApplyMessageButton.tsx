import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonList,
  IonPopover,
} from "@ionic/react";
import { chatboxOutline } from "ionicons/icons";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { formatName } from "@amodeo/util/formatters/formatName";
import { useState } from "react";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";

interface SchoolPartsListItemProps {
  data: {
    week_id: string | null;
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
  const [popoverOpen, setPopoverOpen] = useState(false);
  const assignmentMessage = `Hi ${
    data?.midweek_assignments[
      ("school_" +
        school +
        "_apply_" +
        part) as keyof Tables<"_view_midweek_meeting_schedule">["midweek_assignments"]
    ]?.first_name
  },
You have an upcoming Christian Life & Ministry assignment. Here are the details...

DATE: ${formatWeekDate(data.week_id ?? "")}

PART: ${
    data?.midweek_meeting_data[
      ("mwb_ayf_part" + part + "_title") as keyof Tables<"midweek_meeting_data">
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
      ("mwb_ayf_part" + part + "_time") as keyof Tables<"midweek_meeting_data">
    ]
  } min
     
DETAILS: ${
    data?.midweek_meeting_data[
      ("mwb_ayf_part" + part) as keyof Tables<"midweek_meeting_data">
    ]
  }`;

  const fillInMessage = `Hi ${
    data?.midweek_assignments[
      ("school_" +
        school +
        "_apply_" +
        part) as keyof Tables<"_view_midweek_meeting_schedule">["midweek_assignments"]
    ]?.first_name
  },
Are you available to fill in for an upcoming Christian Life & Ministry assignment? Here are the details...

DATE: ${formatWeekDate(data.week_id ?? "")}

PART: ${
    data?.midweek_meeting_data[
      ("mwb_ayf_part" + part + "_title") as keyof Tables<"midweek_meeting_data">
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
      ("mwb_ayf_part" + part + "_time") as keyof Tables<"midweek_meeting_data">
    ]
  } min
     
DETAILS: ${
    data?.midweek_meeting_data[
      ("mwb_ayf_part" + part) as keyof Tables<"midweek_meeting_data">
    ]
  }`;

  const reminderMessage = `Hi ${
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
      ("mwb_ayf_part" + part + "_title") as keyof Tables<"midweek_meeting_data">
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
      ("mwb_ayf_part" + part + "_time") as keyof Tables<"midweek_meeting_data">
    ]
  } min
     
DETAILS: ${
    data?.midweek_meeting_data[
      ("mwb_ayf_part" + part) as keyof Tables<"midweek_meeting_data">
    ]
  }`;

  function sendSMS(message: string) {
    setPopoverOpen(false);
    const smsLink = `sms:/ /?&body=${encodeURIComponent(message)}`;
    window.location.href = smsLink;
  }

  return (
    <>
      <IonButton
        fill="clear"
        expand="block"
        slot="end"
        className="ion-padding-start"
        onClick={() => setPopoverOpen(true)}
      >
        <IonIcon icon={chatboxOutline} slot="icon-only" size="large" />
      </IonButton>
      <IonPopover
        isOpen={popoverOpen}
        onDidDismiss={() => setPopoverOpen(false)}
      >
        <IonContent>
          <IonList>
            <IonItem onClick={() => sendSMS(assignmentMessage)}>
              Assignment
            </IonItem>
            <IonItem onClick={() => sendSMS(fillInMessage)}>Fill In</IonItem>
            <IonItem onClick={() => sendSMS(reminderMessage)}>Reminder</IonItem>
          </IonList>
        </IonContent>
      </IonPopover>
    </>
  );
};
