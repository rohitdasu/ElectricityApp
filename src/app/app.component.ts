import { Component } from "@angular/core";
import { Platform, ToastController, AlertController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public toastController: ToastController,
    public alertCtrl:AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      if (navigator.onLine) {
        const toast = await this.toastController.create({
          message: "You are online",
          duration: 1000,
        });
        toast.present();
      } else {
        const alert = await this.alertCtrl.create({
          header: "You are offline",
          message: "Please turn on mobile data",
          buttons: ["OK"],
        });

        await alert.present();
      }

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
