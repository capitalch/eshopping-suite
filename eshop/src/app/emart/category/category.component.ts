import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BrokerService } from '../../service/broker.service';
import { TreeNode } from 'primeng/primeng';
import { AppService } from '../../service/app.service';
import { localMessages, httpMessages } from '../../app.config';
import { Router } from '@angular/router';
import {navUrls} from '../emart.config';

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
  lazyTree: any[] = [];
  selectedFiles: TreeNode[];
  constructor(private router:Router, private brokerService: BrokerService, private appService: AppService) {
  }

  ngOnInit() {
    console.log('categories init:');
    this.subs = this.brokerService.filterOn(httpMessages.getCategoriesWithCount).subscribe(d => {
      d.error ? (console.log(d.error)) : (
        this.categories = d.data,
        this.processLazy()
      );
    });
    let sub1 = this.brokerService.behFilterOn(localMessages.getsettings).subscribe(d => {      
      this.brokerService.httpPost(httpMessages.getCategoriesWithCount);
    });
    let sub2 = this.brokerService.filterOn(httpMessages.searchSpecificOrReturnAll).subscribe(d => {
      d.error ? (console.log(d.error)) : (
        this.categories = d.data,
        this.processLazy(),
        console.log(d.data)
      );
    });

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
    let sub = this.brokerService.filterOn('test').subscribe(d=>{
      console.log(d.data);
      (!e.node.hasProducts && !e.node.leaf) && (e.node.hasProducts=true,e.node.label+='('+d.data+')');
      sub.unsubscribe();
    })
    let catId = e.node.id;
    this.router.navigate([navUrls.product, catId]);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
