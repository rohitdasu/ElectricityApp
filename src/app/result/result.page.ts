import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ApiService } from "../shared/api.service";

@Component({
  selector: "app-result",
  templateUrl: "./result.page.html",
  styleUrls: ["./result.page.scss"],
})
export class ResultPage implements OnInit {
  cableType: any;
  area: any;
  @Input() voltage: string;
  @Input() conductor: string;
  @Input() cover: string;
  @Input() phase: string;
  @Input() cable_type: string;
  @Input() placement: string;
  constructor(private modalCtrl: ModalController, private api: ApiService) {}

  ngOnInit() {
    this.cableResult();
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
  cableResult() {
    let x = {
      cabelType: this.cable_type,
      cableCover: this.cover,
      conductor: this.conductor,
      load: 0,
      phase: this.phase,
      placemets: this.placement,
      voltage: this.voltage,
    };
    this.api.postCable(x).subscribe((val) => {
      this.area=(val["cables"]["0"].area);
      this.cableType=val["cables"]["0"].cableType
    });
  }
}
