import React from "react";
import {
  IonButton,
  IonCol,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonText,
} from "@ionic/react";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { orderlyPath } from "#shells/orderly/routes.js";
import { useSettings } from "#shells/orderly/pages/settings/settings/SettingsPage.js";

type WeekContentProps = {
  week_id: string;
  weekendMeetingDetails?: Tables<"_view_weekend_meeting_pdf">;
};

const LABEL_COL_WIDTH = "4";

export const WeekContent = ({
  week_id,
  weekendMeetingDetails,
}: WeekContentProps): React.ReactElement => {
  const { canEdit } = useSettings();

  return (
    <IonList slot="content">
      <IonItem lines="none">
        <IonLabel>
          <IonGrid>
            {weekendMeetingDetails?.chairman_first_name && (
              <>
                <IonRow>
                  <IonCol size={LABEL_COL_WIDTH}>
                    <IonText>
                      <strong>Chairman:</strong>
                    </IonText>
                  </IonCol>
                  <IonCol>
                    <IonText>
                      {`${weekendMeetingDetails?.chairman_first_name} ${weekendMeetingDetails?.chairman_last_name}` ||
                        "TBC"}
                    </IonText>
                  </IonCol>
                </IonRow>
              </>
            )}
            {weekendMeetingDetails?.reader_first_name && (
              <>
                <IonRow>
                  <IonCol size={LABEL_COL_WIDTH}>
                    <IonText>
                      <strong>Reader:</strong>
                    </IonText>
                  </IonCol>
                  <IonCol>
                    <IonText>
                      {`${weekendMeetingDetails?.reader_first_name} ${weekendMeetingDetails?.reader_last_name}` ||
                        "TBC"}
                    </IonText>
                  </IonCol>
                </IonRow>
              </>
            )}
            {weekendMeetingDetails &&
              weekendMeetingDetails.outgoing_speakers?.map(
                (assignment, index) => (
                  <IonRow key={assignment.congregation}>
                    <IonCol size={LABEL_COL_WIDTH}>
                      <IonText>
                        <strong>{index === 0 && "Outgoing:"}</strong>
                      </IonText>
                    </IonCol>
                    <IonCol>
                      <IonText>
                        {`${assignment.first_name} `}
                        {`${assignment.last_name}`}
                        {" - "}
                        {assignment.outline_id}
                      </IonText>
                      <br />
                      <IonText>{`${assignment.congregation}`}</IonText>
                    </IonCol>
                  </IonRow>
                )
              )}
          </IonGrid>
        </IonLabel>
      </IonItem>
      {IS_ORDERLY_APP && canEdit && (
        <>
          <IonItem>
            <IonButton
              slot="end"
              fill="clear"
              routerLink={orderlyPath("weekend_meeting_details", { week_id })}
            >
              <strong>Edit</strong>
            </IonButton>
          </IonItem>
        </>
      )}
    </IonList>
  );
};
