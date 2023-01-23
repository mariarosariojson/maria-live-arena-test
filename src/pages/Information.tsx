import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTextarea
} from "@ionic/react";
import { arrowForward, cart } from "ionicons/icons";
import "./Information.css";

const Information: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonImg src="https://wallpapercave.com/dwp2x/aYgfwFv.jpg"></IonImg>
        <IonGrid className="information-container">
          <IonRow>
            <IonCol size="3"></IonCol>
            <IonCol size="3"></IonCol>
            <IonCol size="5">
              <IonButton color="danger">
                <IonIcon icon={cart} /> SEK 49/Month
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="1">
              <IonIcon icon={arrowForward}></IonIcon>
            </IonCol>
            <IonCol size="11">Get winnerheads premium offer</IonCol>
          </IonRow>
          <IonCol size="12" />
          <IonCol>
            <IonTextarea readonly={true}>
              <IonList lines="none">
                <IonLabel>Why get Premium?</IonLabel>
                <br />
                <IonItem>40 hours video cloud storage</IonItem>
                <IonItem>Organize video in playlist</IonItem>
                <IonItem>Family sharing</IonItem>
                <IonItem>Ad free</IonItem>
              </IonList>
              <br />
              <IonList>
                <b>Roles:</b> Premium can not be used as a team plan. For teams
                use "Premium for teams" <br />
                <b>Playlist:</b> Video storage limits number of playlists and
                user videos.
              </IonList>
            </IonTextarea>
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Information;
