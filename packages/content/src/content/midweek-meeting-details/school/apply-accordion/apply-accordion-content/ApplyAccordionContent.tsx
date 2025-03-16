import { IonItem, IonLabel, IonText } from "@ionic/react";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { formatName } from "@amodeo/util/formatters/formatName";
import { ApplyMessageButton } from "./apply-message-button/ApplyMessageButton.js";

interface ApplyAccordionContentProps {
  data: any;
  school: string;
  part: string;
}

export const ApplyAccordionContent = ({
  data,
  school,
  part,
}: ApplyAccordionContentProps) => {
  const isNotTalk =
    !(
      data.midweek_meeting_data[
        ("mwb_ayf_part" + part) as keyof Tables<"midweek_meeting_data">
      ] as string
    ).includes("Talk") &&
    (data.midweek_meeting_data[
      ("mwb_ayf_part" + part + "_type") as keyof Tables<"midweek_meeting_data">
    ] as string) !== "Talk";

  return (
    <div className="ion-padding" slot="content">
      {isNotTalk && (
        <IonItem key={part} lines="none">
          <IonLabel>
            <IonText>
              <strong style={{ lineHeight: "1.5" }}>Assistant: </strong>
              {formatName(
                data?.midweek_assignments[
                  ("school_" +
                    school +
                    "_assistant_" +
                    part) as keyof Tables<"_view_midweek_meeting_schedule">["midweek_assignments"]
                ]
              )}
            </IonText>
            <br />
            <IonText>
              <strong style={{ lineHeight: "1.5" }}>Time: </strong>
              {
                data?.midweek_meeting_data[
                  ("mwb_ayf_part" +
                    part +
                    "_time") as keyof Tables<"midweek_meeting_data">
                ]
              }{" "}
              min
            </IonText>
            <br />
            <IonText>
              <strong style={{ lineHeight: "1.5" }}>Details: </strong>
              {
                data?.midweek_meeting_data[
                  ("mwb_ayf_part" +
                    part) as keyof Tables<"midweek_meeting_data">
                ]
              }
            </IonText>
          </IonLabel>
        </IonItem>
      )}
      <ApplyMessageButton data={data} school={school} part={part} />
    </div>
  );
};
