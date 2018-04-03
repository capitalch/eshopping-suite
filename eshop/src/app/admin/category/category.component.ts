import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../../service/broker.service';
import { AppService } from '../../service/app.service';
import { Router } from '@angular/router';
import { navUrls, httpMessages } from '../admin.config';
import { localMessages } from '../../app.config';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  subs: any;
  categories: any[] = [];
  searchString: any;
  lazyTree: any[] = [];
  selectedFiles: any;
  collapseSidebar = false;
  dynamicCategoryClass = "collapsible-container";
  dynamicCategoryOpenerClass = "collapsible-button-container-close";

  constructor(private router: Router, private appService: AppService, private brokerService: BrokerService) { }

  ngOnInit() {
    let catId;
    this.subs = this.brokerService.filterOn(httpMessages.categoriesWithCount).subscribe(d => {
      d.error ? (console.log(d.error)) : (
        this.categories = d.data,
        // d.data && (d.data.length > 0) && (this.selectedFiles = d.data[0])
        // && (catId = d.data[0].id) && (this.router.navigate([navUrls.product, { catId: catId, count: d.data[0].product_cnt }])),
        this.processLazy());
    });

    let sub1 = this.brokerService.behFilterOn(localMessages.getsettings).subscribe(d => {
      d.error ? console.log(d.error)
        : (this.brokerService.httpPost(httpMessages.categoriesWithCount));
    });

    let sub2 = this.brokerService.filterOn(httpMessages.headerToCategory).subscribe(d => {
      d.error ? (console.log(d.error)) : (
        this.categories = d.data,
        this.searchString = d.carryBag,
        this.processLazy()       )
        // this.router.navigate([navUrls.product, { catId: 0, count: d.data[0].product_cnt, searchString: this.searchString }]
         //));
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
    //this.router.navigate([navUrls.product, { catId: catId, count: e.node.product_cnt, searchString: this.searchString }]);
  }

  expandSideMenu() {
    this.collapseSidebar = !this.collapseSidebar;
    this.dynamicCategoryClass = this.dynamicCategoryClass == "collapsible-container-close" ? "collapsible-container" : "collapsible-container-close";
    this.dynamicCategoryOpenerClass = this.dynamicCategoryOpenerClass == "collapsible-button-container-close" ? "collapsible-button-container" : "collapsible-button-container-close";
  }
  
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
