import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-cable',
  templateUrl: './cable.page.html',
  styleUrls: ['./cable.page.scss'],
})
export class CablePage implements OnInit {

  constructor(private router:Router,public dialog: MatDialog) { }

  ngOnInit() {
  }
  gotoPlacement(){
    this.router.navigate(['/placements']);
  }
  openDialog() {
    this.dialog.open(DialogDataExampleDialog);
  }

}

@Component({
  selector: 'cable-dialog',
  templateUrl: 'cable-dialog.page.html',
})
export class DialogDataExampleDialog {
  constructor() {}
}
