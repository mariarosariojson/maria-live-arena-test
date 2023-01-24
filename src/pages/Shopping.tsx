import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonItemOption,
  IonLabel,
  IonList,
  IonPage,
  IonProgressBar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState, useEffect } from "react";

import winnerheads from "../components/data";

import "./Shopping.css";

export type ShoppingType = {
  name: string;
  description: string;
  price: number;
};

export default function Shopping() {
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
      <IonHeader>
        <IonToolbar>
          <IonTitle>Shopping</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonItem>
        <h1>ShoppingItems</h1>
      </IonItem>
      <IonContent color="light" fullscreen>
        <IonList lines="full">
          {infoIsLoading ? (
            <IonProgressBar type="indeterminate" />
          ) : (
            winnerheads.space.content?.map((item, index) => (
              <IonCard>
                <IonItem key={index}>
                  <IonLabel>{item["title"]}</IonLabel>
                </IonItem>
                <IonCardContent>
                  <IonLabel>{item.shoppingItem?.name}</IonLabel>
                  <IonLabel>{item["description"]}</IonLabel>
                </IonCardContent>
              </IonCard>
            ))
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
