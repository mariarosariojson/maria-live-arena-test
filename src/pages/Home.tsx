import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonPage,
  IonRow,
} from "@ionic/react";

import { useEffect, useState } from "react";

import "./Home.css";
// import Information from "./Information";
// import Shopping from "./Shopping";

const Home: React.FC = () => {
  const [info, setInfo] = useState([]) as any;

  useEffect(() => {
    const loadData = async () => {
      const url =
        "https://api.winnerheads.com/api/marketplace/getMarketplaceByIdString/winnerheads";
      const data = await fetch(url);
      const json = await data.json();
      setInfo(json.results);
      console.log("🚀 ~ file: Home.tsx:22 ~ loadData ~ json", json);
    };
    loadData();
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonImg src="https://wallpapercave.com/dwp2x/aYgfwFv.jpg"></IonImg>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/card-media.png"
                />
                <IonCardHeader>
                  <IonCardTitle>Card Title</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  Here's a small text description for the card content. Nothing
                  more, nothing less.
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonGrid fixed={true}>
              <IonRow>
                <IonCol size="6">
                  <IonCard>
                    <IonCardHeader>
                      <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>text description.</IonCardContent>
                  </IonCard>
                </IonCol>

                <IonCol size="6">
                  <IonCard>
                    <IonCardHeader>
                      <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>Text description.</IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                  <IonCard>
                    <IonCardHeader>
                      <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>text description.</IonCardContent>
                  </IonCard>
                </IonCol>

                <IonCol size="6">
                  <IonCard>
                    <IonCardHeader>
                      <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>text description.</IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
