import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private _router: Router) {}
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
