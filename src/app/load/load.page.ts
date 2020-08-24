import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-load",
  templateUrl: "./load.page.html",
  styleUrls: ["./load.page.scss"],
})
export class LoadPage implements OnInit {
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit() {}
  gotoPlacement() {
    this.router.navigate(["/placements"]);
  }
  openDialog() {
    this.dialog.open(DialogData1ExampleDialog);
  }
}

@Component({
  selector: "load-dialog",
  templateUrl: "load-dialog.page.html",
})
export class DialogData1ExampleDialog {
  constructor() {}
}
