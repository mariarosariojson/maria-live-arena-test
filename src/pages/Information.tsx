import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonProgressBar,
  IonRow,
} from "@ionic/react";
import { arrowForward, cart } from "ionicons/icons";
import { useState, useEffect } from "react";
import winnerheads from "../components/data";
import "./Information.css";
import { ShoppingType } from "./Shopping";

export default function Information() {
  const [info, setInfo] = useState<ShoppingType[]>([]);
  const [infoIsLoading, setInfoIsLoading] = useState(false);

  const getItem = async () => {
    setInfoIsLoading(true);
    try {
      const response = await fetch(
        "https://api.winnerheads.com/api/marketplace/getMarketplaceByIdString/winnerheads"
      );
      const data = await response.json();
      setInfo(data);
      setInfoIsLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    getItem();
  }, []);

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
        </IonGrid>
        
        <IonList lines="none">
          <IonItem>
            <IonLabel>
              <b>Why get Premium?</b>
            </IonLabel>
          </IonItem>
          {winnerheads.space.content?.map((item, index) => (
              <IonCard>
                <IonItem key={index}>
                  <IonCardContent>{item['description']}</IonCardContent>
                </IonItem>
              </IonCard>
            ))}
          <IonCard>
            <IonCardContent>
              Roles: Premium can not be used as a team plan. For teams use
              "Premium for teams"
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardContent>
              Playlist: Video storage limits number of playlists and user
              videos.
            </IonCardContent>
          </IonCard>
        </IonList>
      </IonContent>
    </IonPage>
  );
}
