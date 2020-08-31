import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../shared/api.service";

@Component({
  selector: "app-placements",
  templateUrl: "./placements.page.html",
  styleUrls: ["./placements.page.scss"],
})
export class PlacementsPage implements OnInit {
  public data: any;
  constructor(private _router: Router, private api: ApiService) {}

  ngOnInit() {
    this.getPlacements();
  }

  gotoLayings() {
    this._router.navigate(["/laying"]);
  }
  getPlacements() {
    this.api.getPlacements().subscribe((val) => {
      this.data = val;
    });
  }
}
