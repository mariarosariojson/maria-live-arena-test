import {
  IonHeader,
  IonToolbar,
  IonSegmentButton,
  IonIcon,
  IonAvatar,
  IonSegment,
  IonNav,
} from "@ionic/react";
import {
  menuOutline,
  arrowBack,
  search,
  cart,
  notifications,
  ellipsisVertical,
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
          <IonSegment>
            <IonSegmentButton value="menuOutline">
              <IonIcon icon={menuOutline}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="arrowBack">
              <IonIcon icon={arrowBack}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="serch">
              <IonIcon icon={search}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="cart">
              <IonIcon icon={cart}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="notifications">
              <IonIcon icon={notifications}></IonIcon>
            </IonSegmentButton>
            <IonAvatar>
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonSegmentButton value="settings">
              <IonIcon size="3" icon={ellipsisVertical}></IonIcon>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
    </nav>
  );
};

export default NavContainer;
