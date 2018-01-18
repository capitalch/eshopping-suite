import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrokerService } from '../../service/broker.service';
import { TreeNode } from 'primeng/primeng';
import { AppService } from '../../service/app.service';
import { localMessages, httpMessages } from '../../app.config';
import { Router } from '@angular/router';
import { navUrls } from '../emart.config';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})

export class CategoryComponent implements OnInit {
  // @ViewChild('ptree') ptree: ElementRef;
  subs: any;
  categories: any[] = [];
  searchString: any;
  lazyTree: any[] = [];
  selectedFiles: any;
  constructor(private router: Router, private appService: AppService, private brokerService: BrokerService) {
    console.log('category');
  }

  ngOnInit() {
    console.log('categories init:');
    let catId;
    this.subs = this.brokerService.filterOn(httpMessages.categoriesWithCount).subscribe(d => {
      d.error ? (console.log(d.error)) : (
        this.categories = d.data,
        d.data && (d.data.length > 0) && (this.selectedFiles = d.data[0])
        && (catId = d.data[0].id) && (this.router.navigate([navUrls.product, { catId: catId, count: d.data[0].product_cnt }])),
        this.processLazy()
      );
    });
    let sub1 = this.brokerService.behFilterOn(localMessages.getsettings).subscribe(d => {
      this.brokerService.httpPost(httpMessages.categoriesWithCount);
    });
    let sub2 = this.brokerService.filterOn(httpMessages.headerToCategory).subscribe(d => {
      d.error ? (console.log(d.error)) : (
        this.categories = d.data,
        this.searchString = d.carryBag,        
        this.processLazy(),
        this.router.navigate([navUrls.product, { catId: 0, count: d.data[0].product_cnt, searchString: this.searchString }])
        // console.log(d.data)
      );
    });

    this.subs.add(sub1).add(sub2);
  }

  processLazy() {
    this.lazyTree = this.categories.filter(x => {
      return (x.parent_id == null);
    });
  }

  loadNode(e) {
    let item = e.node;
    let children = this.categories.filter(x => {
      return (item.id == x.parent_id);
    });
    item.children = children;
  }

  nodeSelect(e) {
    this.loadNode(e);
    e.node.expanded ? e.node.expanded = false : e.node.expanded = true;
    let catId = e.node.id;
    this.router.navigate([navUrls.product, { catId: catId, count: e.node.product_cnt, searchString: this.searchString }]);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
