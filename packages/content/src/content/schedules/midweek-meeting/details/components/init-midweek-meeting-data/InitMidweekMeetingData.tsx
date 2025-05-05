import {
  IonItem,
  IonButton,
  IonIcon,
  IonLabel,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonText,
  IonCardHeader,
} from "@ionic/react";
import { pushOutline } from "ionicons/icons";
import { useState } from "react";
import { loadEPUB } from "@amodeo/feature/util/epub/browser/loadEpub";

import { useUpsertMidweekMeetingDataMutation } from "@amodeo/data/react-query/midweek-meeting_2/use-upsert-midweek-meeting-data-mutation";
// import { useUpsertWeekendMeetingDataMutation } from "@amodeo/data/react-query/weekend-meeting_2/use-upsert-weekend-meeting-data-mutation";

export const InitMidweekMeetingData = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [data, setData] = useState<any>(null);
  const [fileName, setName] = useState("");
  const midweekMeetingData = useUpsertMidweekMeetingDataMutation();
  // const weekendMeetingData = useUpsertWeekendMeetingDataMutation();

  const openFileDialog = () => {
    (document as any).getElementById("file-upload").click();
  };

  const handleOpenMWBEPUB = async (file: Blob) => {
    // @ts-expect-error
    setName(file.name);

    try {
      const data = await loadEPUB(file);
      setData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInitialise = () => {
    console.log(data);
    if (data[0].mwb_week_date_locale) {
      midweekMeetingData.mutate(data);
      return;
    }
    if (data[0].w_study_date_locale) {
      // weekendMeetingData.mutate(data);
      return;
    }
  };

  return (
    <>
      <IonItem>
        <input
          type="file"
          id="file-upload"
          accept=".epub"
          style={{ display: "none" }}
          onChange={(e) => {
            const files = e.target.files;
            if (files) {
              handleOpenMWBEPUB(files[0] as any);
            }
          }}
        />
      </IonItem>

      <IonButton onClick={openFileDialog} expand="block" className="ion-margin">
        <IonIcon className="ion-margin-end" icon={pushOutline}></IonIcon>
        Choose File
      </IonButton>
      {fileName && (
        <IonItem>
          <IonLabel>File Name: </IonLabel>
          {fileName}
        </IonItem>
      )}
      {data && data[0].mwb_week_date_locale && (
        <>
          {data.map((d: any) => {
            return (
              <IonCard key={d.mwb_week_date_locale}>
                <IonCardContent>
                  <IonCardTitle>{d.mwb_week_date_locale}</IonCardTitle>
                  <IonCardSubtitle>
                    {d.mwb_weekly_bible_reading}
                  </IonCardSubtitle>
                  {/* <IonCardHeader>Header</IonCardHeader> */}
                  <IonText color={"jw_slate"}>
                    <strong>{d.mwb_tgw_talk_title}</strong>
                  </IonText>
                  <br />
                  <IonText color={"jw_slate"}>
                    <strong>{d.mwb_tgw_gems_title}</strong>
                  </IonText>
                  <br />
                  <IonText color={"jw_slate"}>
                    <strong>{d.mwb_tgw_bread_title}</strong>
                  </IonText>
                  <br />
                  <IonText color={"jw_brown"}>
                    <strong>{d.mwb_ayf_part1_title}</strong>
                  </IonText>
                  <br />
                  <IonText color={"jw_brown"}>
                    <strong>{d.mwb_ayf_part2_title}</strong>
                  </IonText>
                  <br />
                  {d.mwb_ayf_part3_title && (
                    <>
                      <IonText color={"jw_brown"}>
                        <strong>{d.mwb_ayf_part3_title}</strong>
                      </IonText>
                      <br />
                    </>
                  )}
                  {d.mwb_ayf_part4_title && (
                    <>
                      <IonText color={"jw_brown"}>
                        <strong>{d.mwb_ayf_part4_title}</strong>
                      </IonText>
                      <br />
                    </>
                  )}
                  <IonText color={"jw_red"}>
                    <strong>{d.mwb_lc_part1_title}</strong>
                  </IonText>
                  <br />
                  {d.mwb_lc_part2_title && (
                    <>
                      <IonText color={"jw_red"}>
                        <strong>{d.mwb_lc_part2_title}</strong>
                      </IonText>
                      <br />
                    </>
                  )}
                  <IonText color={"jw_red"}>
                    <strong>{d.mwb_lc_cbs_title}</strong>
                  </IonText>
                  <br />
                </IonCardContent>
              </IonCard>
            );
          })}
          <IonButton
            expand="block"
            className="ion-margin"
            onClick={handleInitialise}
          >
            Initialise Data
          </IonButton>
        </>
      )}

      {data && data[0].w_study_date_locale && (
        <>
          {data.map((d: any) => {
            return (
              <IonCard key={d.w_study_date_locale}>
                <IonCardHeader>
                  <IonCardTitle>{d.w_study_date_locale}</IonCardTitle>
                  <IonCardSubtitle>{d.w_study_title}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent></IonCardContent>
              </IonCard>
            );
          })}
          <IonButton
            expand="block"
            className="ion-margin"
            onClick={handleInitialise}
          >
            Initialise Data
          </IonButton>
        </>
      )}
    </>
  );
};
