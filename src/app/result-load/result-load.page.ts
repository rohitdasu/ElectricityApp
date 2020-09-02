import { Component, OnInit, Input } from "@angular/core";
import { ApiService } from "../shared/api.service";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-result-load",
  templateUrl: "./result-load.page.html",
  styleUrls: ["./result-load.page.scss"],
})
export class ResultLoadPage implements OnInit {
  load: any;
  cables: any;
  @Input() area: any;
  @Input() voltage: string;
  @Input() conductor: string;
  @Input() cover: string;
  @Input() phase: string;
  @Input() cable_type: string;
  @Input() placement: string;

  constructor(private modalCtrl: ModalController, private api: ApiService) {}

  ngOnInit() {
    console.log("Area" + this.area);
    console.log("Voltage" + this.voltage);
    console.log("Conductor" + this.conductor);
    console.log("Cover" + this.cover);
    console.log("Phase" + this.phase);
    console.log("CableType" + this.cable_type);
    console.log("Placement" + this.placement);
    this.cableResult();
  }
  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
  cableResult() {
    let x = {
      area: this.area,
      cabelType: this.cable_type,
      cableCover: this.cover,
      conductor: this.conductor,
      phase: this.phase,
      placemets: this.placement,
      voltage: this.voltage,
    };
    this.api.postLoad(x).subscribe((val) => {
      this.load = val["load"];
      this.cables = val["cables"];
      console.log(this.cables);
    });
  }
}
