import { EventEmitter, Injectable } from '@angular/core';
import { Items } from './customer.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable()
export class CustomerService {
  private itemSaved: Items[] = [];
  itemsChanged = new Subject<Items[]>();
  constructor(private http: HttpClient) { }

  private items: Items[] = [
    new Items('Shirt', 'Peter England', 'https://static6.cilory.com/195148-thickbox_default/peter-england-blue-checks-shirt.jpg ', '₹1200'),
    new Items('Mobile', 'Poco M2 Pro', ' https://paidfreedroid.com/wp-content/uploads/2020/07/Poco-M2-Pro.jpg', '₹15000'),
    new Items('Laptop', 'Dell', 'https://assets.pcmag.com/media/images/330805-dell-inspiron-15-i15rv-6190-blk.jpg?width=1000&height=712 ', '₹50000'),
    new Items('Body Massager', 'Thumper', 'https://www.bodymassageshop.com/wp-content/uploads/2016/10/Thumper-Mini-Pro-3-Enhanced.jpg ', '5000')
  ];

  private selectedItems: Items[] = [
    new Items('Shoes', 'Puma', ' ', '₹4000'),
    new Items('TV', 'LG', ' ', '₹100000'),
  ];

  getItems() {
    return this.items.slice();
  }
  getItem(index: number) {
    return this.items.slice()[index];
  }
  getSelectedItems() {
    return this.selectedItems.slice();
  }

  addItem(item: Items) {
    this.selectedItems.push(item);
    this.itemsChanged.next(this.selectedItems.slice());
    const itemSaved = this.getSelectedItems();
    this.http.put('https://ng-shopping-list-de147.firebaseio.com/recipes.json', itemSaved
    )
      .subscribe(response => {
        
      })
  }

}
