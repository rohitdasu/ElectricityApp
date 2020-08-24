import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.page.html',
  styleUrls: ['./placements.page.scss'],
})
export class PlacementsPage implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  gotoLayings(){
    this._router.navigate(['/laying']);
  }

}
