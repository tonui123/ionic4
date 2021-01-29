import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonImg,
  IonButton,
  IonAvatar,
  IonRadioGroup,
  IonRadio,
  IonLabel,
  IonThumbnail
} from '@ionic/react';

import React from 'react';

const Payment: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>การชำระเงิน (Payment)</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonThumbnail>
          <IonImg src="./images/pic1.jpg" />
        </IonThumbnail>
        <IonList>
          <IonRadioGroup>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="./images/pic1.jpg" />
              </IonAvatar>
              <IonLabel>ชื่อธนาคาร</IonLabel>
              <IonRadio value="ธนาคาร" slot="end" />
            </IonItem>
          </IonRadioGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Payment;