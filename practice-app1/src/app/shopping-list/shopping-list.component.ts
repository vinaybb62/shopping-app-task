import { Component, OnInit } from '@angular/core';
import { Items } from '../customer/customer.model';
import { Router } from '@angular/router';
import { CustomerService } from '../customer/customer.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  selectedItem: Items[];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.selectedItem = this.customerService.getSelectedItems();
  }
  backToList() {
    this.router.navigate(['/customer'])
  }

}
