import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ModalController } from "@ionic/angular";
import { ApiService } from "../shared/api.service";
import { ResultLoadPage } from "../result-load/result-load.page";

@Component({
  selector: "app-load",
  templateUrl: "./load.page.html",
  styleUrls: ["./load.page.scss"],
})
export class LoadPage implements OnInit {
  area: any;
  voltage: any;
  cover: any;
  phase: any;
  conductor: any;
  cable_type: any;
  private sub: any;
  placement: any;
  data;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public modalController: ModalController,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.data = params;
      this.placement = this.data.id;
    });
    this.layingsProcedure();
  }
  gotoPlacement() {
    this.router.navigate(["/placements", { data: "load" }]);
  }
  async presentModal() {
    this.layingsProcedure();
    let voltage, conductor, cover, phase, cable_type;
    if (this.voltage == true) {
      voltage = "VOLTAGE_400";
    } else {
      voltage = "VOLTAGE_240";
    }

    if (this.conductor == true) {
      conductor = "MULTI";
    } else {
      conductor = "SINGLE";
    }

    if (this.cover == true) {
      cover = "PEX";
    } else {
      cover = "PVC";
    }

    if (this.phase == true) {
      phase = "PHASE_3";
    } else {
      phase = "PHASE_1";
    }

    if (this.cable_type == true) {
      cable_type = "CU";
    } else {
      cable_type = "AL";
    }

    const modal = await this.modalController.create({
      component: ResultLoadPage,
      componentProps: {
        area: this.area,
        voltage: voltage,
        conductor: conductor,
        cover: cover,
        phase: phase,
        cable_type: cable_type,
        placement: this.placement,
      },
    });
    return await modal.present();
  }
  layingsProcedure() {
    let conductor, cover, phase, cable_type;

    if (this.conductor == true) {
      conductor = "MULTI";
    } else {
      conductor = "SINGLE";
    }

    if (this.cover == true) {
      cover = "PEX";
    } else {
      cover = "PVC";
    }

    if (this.phase == true) {
      phase = "PHASE_3";
    } else {
      phase = "PHASE_1";
    }

    if (this.cable_type == true) {
      cable_type = "CU";
    } else {
      cable_type = "AL";
    }
    let x = {
      cabelType: cable_type,
      cableCover: cover,
      conductor: conductor,
      phase: phase,
      placementId: this.placement,
    };
    this.api.postLaying(x).subscribe((val) => {
      this.placement = val["0"].placements;
    });
  }
}
