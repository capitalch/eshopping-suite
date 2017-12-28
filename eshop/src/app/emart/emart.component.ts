import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BrokerService} from '../service/broker.service';

@Component({
  selector: 'app-emart',
  templateUrl: './emart.component.html',
  styleUrls: ['./emart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmartComponent implements OnInit {

  constructor(private brokerService: BrokerService) { }

  ngOnInit() {
  }

}
