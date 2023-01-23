import {
  IonHeader,
  IonToolbar,
  IonSegmentButton,
  IonIcon,
  IonAvatar,
  IonSegment,
  IonNav,
  IonButton,
  IonButtons,
} from "@ionic/react";
import {
  menuOutline,
  arrowBack,
  search,
  cart,
  notifications,
  ellipsisVertical,
  ellipsisHorizontal,
  personCircle,
  cartOutline,
  notificationsOutline,
} from "ionicons/icons";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import "./NavContainer.css";

interface ContainerProps {}

const NavContainer: React.FC<ContainerProps> = () => {
  return (
    <nav>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton>
              <IonIcon slot="icon-only" icon={menuOutline}></IonIcon>
            </IonButton>
            <IonButton>
              <IonIcon slot="icon-only" icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton>
              <IonIcon slot="icon-only" icon={search}></IonIcon>
            </IonButton>
            <IonButton>
              <IonIcon slot="icon-only" icon={cartOutline}></IonIcon>
            </IonButton>{" "}
            <IonButton>
              <IonIcon slot="icon-only" icon={notificationsOutline}></IonIcon>
            </IonButton>
            <IonButton>
              <IonIcon slot="icon-only" icon={personCircle}></IonIcon>
            </IonButton>
            <IonButton>
              <IonIcon slot="icon-only" icon={ellipsisVertical}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </nav>
  );
};

export default NavContainer;
