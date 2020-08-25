import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private _router: Router,private routerOutlet: IonRouterOutlet,private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });

  }
  gotoCable() {
    this._router.navigate(['/cable']);
  }
  gotoLoad() {
    this._router.navigate(['/load']);
  }
  gotoHistory() {
    this._router.navigate(['/history']);
  }
}
