import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-cable",
  templateUrl: "./cable.page.html",
  styleUrls: ["./cable.page.scss"],
})
export class CablePage implements OnInit {
  power: number;
  voltage: string;
  conductor: string;
  cover: string;
  phase: string;
  cable_type: string;
  length: string;
  placement: string;

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit() {}
  gotoPlacement() {
    this.router.navigate(["/placements"]);
  }
  openDialog() {
    this.dialog.open(DialogDataExampleDialog);
  }
  voltageFunc(event) {
    if (event["detail"].checked == true) {
      this.voltage = "VOLTAGE_400";
    } else {
      this.voltage = "VOLTAGE_240";
    }
  }
  coverFunc(event) {
    if (event["detail"].checked == true) {
      this.cover = "PEX";
    } else {
      this.cover = "PVC";
    }
  }
  phaseFunc(event){
    if (event["detail"].checked == true) {
      this.phase = "PHASE_3";
    } else {
      this.phase = "PHASE_1";
    }
  }
  cableFunc(event){
    if (event["detail"].checked == true) {
      this.cable_type = "Cu";
    } else {
      this.cable_type = "AI";
    }
  }
}

@Component({
  selector: "cable-dialog",
  templateUrl: "cable-dialog.page.html",
})
export class DialogDataExampleDialog {
  constructor() {}
}
