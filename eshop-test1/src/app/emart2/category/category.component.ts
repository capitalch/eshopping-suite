import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { BrokerService } from '../../service/broker.service';
import { TreeNode } from 'primeng/primeng';
import * as _ from 'lodash';
import { AppService } from '../../service/app.service';
import { localMessages, httpMessages } from '../../app.config';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})

export class CategoryComponent implements OnInit {
  @ViewChild('ptree') ptree: ElementRef;
  subs: any;
  categories: any[] = [];
  lazyTree: any[] = [];
  // selectedFiles: TreeNode[];
  constructor(private brokerService: BrokerService, private appService: AppService, private router: Router) {
  }

  ngOnInit() {
    this.subs = this.brokerService.filterOn(httpMessages.getCategoriesWithCount).subscribe(d => {
      d.error ? (console.log(d.error)) : (
        this.categories = d.data,
        this.processLazy()
      );
    });
    let sub1 = this.brokerService.filterOn(localMessages.getsettings).subscribe(d => {
      console.log('categories init:');
      this.brokerService.httpPost(httpMessages.getCategoriesWithCount);
    });
    let sub2 = this.brokerService.filterOn(httpMessages.searchSpecificOrReturnAll).subscribe(d => {
      d.error ? (console.log(d.error)) : (
        this.categories = d.data,
        this.processLazy(),
        console.log(d.data)
      );
    });
    let sub3 = this.brokerService.filterOn(httpMessages.getProductsOnCategory).subscribe(d=>{
      d.error ?console.log(d.error) :(
        console.log(d.data),
        this.router.navigate(['emart/product'])
      );
    })
    this.subs.add(sub1).add(sub2);
  }

  processLazy() {
    // let items: any[];
    this.lazyTree = this.categories.filter(x => {
      x.leaf = x.cat_cnt == 0;
      return (x.parent_id == null);
    });
  }

  loadNode(e) {
    let item = e.node;
    let children = this.categories.filter(x => {
      x.leaf = x.cat_cnt == 0;
      return (item.id == x.parent_id);
    });
    item.children = children;
  }

  nodeSelect(e) {
    this.loadNode(e);
    e.node.expanded ? e.node.expanded = false : e.node.expanded = true;
    // e.node.leaf && (
    !e.node.hasProducts && this.brokerService.httpPost(httpMessages.getProductsOnCategory, { params: [e.node.id] }, null, e.node);
    // );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
