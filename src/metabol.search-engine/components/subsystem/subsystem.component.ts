import { Component, OnInit } from '@angular/core';
import {SubsystemService} from "../../services/subsystem/subsystem.service";


@Component({
  selector: 'app-subsystem',
  templateUrl: 'subsystem.component.html',
  styleUrls: ['subsystem.component.css'],
  providers: [SubsystemService]
})
export class SubsystemComponent implements OnInit {

  subsystems: string[];
  encodeURIComponent = encodeURIComponent;

  constructor(private subsystem: SubsystemService) { }

  ngOnInit() {
    this.subsystem.all((data) => {
      this.subsystems = data;
    });
  }

}
