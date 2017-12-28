import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrokerService } from '../../service/broker.service';
import { TreeNode } from 'primeng/primeng';
import * as _ from 'lodash';
import { AppService } from '../../service/app.service';
import { localMessages, httpMessages } from '../../app.config';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss',
    // "../../../../node_modules/font-awesome/css/font-awesome.min.css",
    // "../../../../node_modules/primeng/resources/primeng.min.css",
    // "../../../../node_modules/primeng/resources/themes/omega/theme.css"
  ],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {
  subs: any;
  data1: any[] = [];
  lazyTree: any[] = [];
  selectedFiles: TreeNode[];
  constructor(private brokerService: BrokerService, private appService: AppService) {

  }

  ngOnInit() {
    this.subs = this.brokerService.filterOn(httpMessages.getCategoriesWithCount).subscribe(d => {
      d.error ? (console.log(d.error)) : (
        this.data1 = d.data,
        this.processLazy()
      );
    })
    let sub1 = this.brokerService.filterOn(localMessages.getsettings).subscribe(d => {
      console.log('categories init:');
      this.brokerService.httpPost(httpMessages.getCategoriesWithCount);
    });
    this.subs.add(sub1);
  }

  processLazy() {
    let items: any[];
    this.lazyTree = this.data1.filter(x => {
      x.leaf = x.cat_cnt == 0;
      return (x.parent_id == null);
    });
  }

  loadNode(e) {
    let item = e.node;
    let children = this.data1.filter(x => {
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
