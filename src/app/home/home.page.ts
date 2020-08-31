import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { IonRouterOutlet, Platform, ToastController } from "@ionic/angular";
import { Plugins } from "@capacitor/core";
const { App } = Plugins;
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit{
  constructor(
    private _router: Router,
    private routerOutlet: IonRouterOutlet,
    private platform: Platform,
    private toastCtrl:ToastController
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });
    
  }
  ngOnInit(){
    // this.networkFunc();
  }
  gotoCable() {
    this._router.navigate(["/cable"]);
  }
  gotoLoad() {
    this._router.navigate(["/load"]);
  }
  gotoHistory() {
    this._router.navigate(["/history"]);
  }
  // async networkFunc() {
  //   if (navigator.onLine) {
      
  //   } else {
  //     const toast = await this.toastCtrl.create({
  //       message: "You are appear to be offline. Please try again!.",
  //       duration: 5000,
  //     });
  //     toast.present();
  //   }
  // }
}
