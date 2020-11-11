import { Component, OnInit } from '@angular/core';
import { Items } from './customer.model';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  items: Items[];
  constructor(private customerService : CustomerService) { }

  ngOnInit() {
    this.items = this.customerService.getItems();
  }

}
