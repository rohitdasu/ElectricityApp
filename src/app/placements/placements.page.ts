import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../shared/api.service";

@Component({
  selector: "app-placements",
  templateUrl: "./placements.page.html",
  styleUrls: ["./placements.page.scss"],
})
export class PlacementsPage implements OnInit {
  public data: any;
  private sub: any;
  public data1: any;
  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.data1 = params;
    });

    this.getPlacements();
  }

  gotoLayings(n: any) {
    if(this.data1.data=='cable'){
      this._router.navigate(["/cable", n]);
    }
    else{
      this._router.navigate(["/load", n]);
    }
  }
  getPlacements() {
    this.api.getPlacements().subscribe((val) => {
      this.data = val;
    });
  }
}
