import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {

  constructor() { }
  public showModal : boolean = false;
  public showModalDetails : boolean = false;
  
  ngOnInit(): void {
    
  }

}
