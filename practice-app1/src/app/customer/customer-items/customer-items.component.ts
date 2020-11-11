import { Component, OnInit, Input } from '@angular/core';
import { Items } from '../customer.model';

@Component({
  selector: 'app-customer-items',
  templateUrl: './customer-items.component.html',
  styleUrls: ['./customer-items.component.css']
})
export class CustomerItemComponent implements OnInit {
  @Input() items: Items; /**we are getting these values from recipe list html*/
  @Input() index: number



  ngOnInit(): void {
  }

}
