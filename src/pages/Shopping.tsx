import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState, useEffect } from "react";

import "./Shopping.css";

interface ShoppingType {
  id: number;
  idString: string;
  space: {
    content: [shoppingItem: [id: number, name: string, description: string]];
  };
}

const Shopping: React.FC = () => {
  const [info, setInfo] = useState<ShoppingType[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const url =
        "https://api.winnerheads.com/api/marketplace/getMarketplaceByIdString/winnerheads";
      const data = await fetch(url);
      const json = await data.json();
      setInfo(json.results);
      // console.log("🚀 ~ file: Home.tsx:22 ~ loadData ~ json", json);
    };
    loadData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Shopping</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        Shopping item page
        <IonList>
          {info.map((item, index) => (
            <IonItem key={index}>
              <IonLabel>{item.space.content[0][2]}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Shopping;
