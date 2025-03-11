import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonNote,
  IonText,
} from "@ionic/react";
import { SchoolPartsListItem } from "./school-parts-list-item/SchoolPartsListItem.js";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { formatName } from "@amodeo/util/formatters/formatName";

type SchoolPartsListProps = {
  data: {
    midweek_meeting_data: Tables<"midweek_meeting_data">;
    midweek_assignments: Tables<"_view_midweek_meeting_schedule">["midweek_assignments"];
  };
};

export const SchoolPartsList = ({ data }: SchoolPartsListProps) => {
  const apply = Array.from(
    { length: parseInt(data?.midweek_meeting_data?.mwb_ayf_count || "0") },
    (_, i) => (i + 1).toString()
  );

  const schools = Array.from(
    { length: (data?.midweek_assignments.counselor_2 && 2) || 1 },
    (_, i) => (i + 1).toString()
  );

  return (
    <IonList>
      {schools?.map((school: string) => (
        <div key={school}>
          {school === "1" && schools[1] && (
            <IonListHeader>Main Hall</IonListHeader>
          )}
          {school === "2" && <IonListHeader>Second School</IonListHeader>}
          {school === "3" && <IonListHeader>Third School</IonListHeader>}
          {school === "4" && <IonListHeader>Fourth School</IonListHeader>}
          {school === "5" && <IonListHeader>Fifth School</IonListHeader>}

          {apply.map((part: string) => (
            <>
              {data && (
                <IonAccordionGroup>
                  <IonAccordion value="first">
                    <IonList slot="header">
                      <IonItem lines="none">
                        <IonLabel>
                          <IonText color="jw_brown_light">
                            <strong>
                              {
                                data.midweek_meeting_data[
                                  ("mwb_ayf_part" +
                                    part +
                                    "_title") as keyof Tables<"midweek_meeting_data">
                                ]
                              }
                            </strong>
                          </IonText>
                          <br />
                          <div style={{ textAlign: "right" }}>
                            <IonText className="ion-text-wrap">
                              {formatName(
                                data?.midweek_assignments[
                                  ("school_" +
                                    school +
                                    "_apply_" +
                                    part) as keyof Tables<"_view_midweek_meeting_schedule">["midweek_assignments"]
                                ]
                              )}
                            </IonText>
                          </div>
                        </IonLabel>
                      </IonItem>
                    </IonList>
                    <div className="ion-padding" slot="content">
                      {!(
                        data.midweek_meeting_data[
                          ("mwb_ayf_part" +
                            part) as keyof Tables<"midweek_meeting_data">
                        ] as string
                      ).includes("Talk") &&
                        (data.midweek_meeting_data[
                          ("mwb_ayf_part" +
                            part +
                            "_type") as keyof Tables<"midweek_meeting_data">
                        ] as string) !== "Talk" && (
                          <IonItem key={part} lines="none">
                            <IonLabel>
                              <IonText>
                                <strong>Assistant: </strong>
                                {formatName(
                                  data?.midweek_assignments[
                                    ("school_" +
                                      school +
                                      "_assistant_" +
                                      part) as keyof Tables<"_view_midweek_meeting_schedule">["midweek_assignments"]
                                  ]
                                )}
                              </IonText>
                            </IonLabel>
                          </IonItem>
                        )}

                      <IonItem key={part} lines="none">
                        <IonLabel>
                          <IonText>
                            <strong>Time: </strong>
                            {
                              data?.midweek_meeting_data[
                                ("mwb_ayf_part" +
                                  part +
                                  "_time") as keyof Tables<"midweek_meeting_data">
                              ]
                            }{" "}
                            min
                          </IonText>
                        </IonLabel>
                      </IonItem>

                      <IonItem key={part} lines="none">
                        <IonLabel>
                          <IonText>
                            <strong>Details: </strong>
                            {
                              data?.midweek_meeting_data[
                                ("mwb_ayf_part" +
                                  part) as keyof Tables<"midweek_meeting_data">
                              ]
                            }
                          </IonText>
                        </IonLabel>
                      </IonItem>

                      <SchoolPartsListItem
                        data={data}
                        school={school}
                        part={part}
                      />
                    </div>
                  </IonAccordion>
                </IonAccordionGroup>
              )}
            </>
          ))}
        </div>
      ))}
    </IonList>
  );
};
