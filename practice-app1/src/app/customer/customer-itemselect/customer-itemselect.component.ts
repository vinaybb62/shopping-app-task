import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Items } from '../customer.model';

@Component({
  selector: 'app-customer-itemselect',
  templateUrl: './customer-itemselect.component.html',
  styleUrls: ['./customer-itemselect.component.css']
})
export class CustomerItemselectComponent implements OnInit {
  item: Items;
  id: number;
  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      this.item = this.customerService.getItem(this.id);
      }
    );
  }

  onSubmit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.item = this.customerService.getItem(this.id);
        this.customerService.addItem(this.item)
      }
    );
  }
}
