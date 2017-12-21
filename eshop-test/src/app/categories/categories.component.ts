import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EshopService } from '../eshop.service';
import { TreeNode } from 'primeng/primeng';
import * as _ from 'lodash';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss',
  "../../../node_modules/font-awesome/css/font-awesome.min.css",
  "../../../node_modules/primeng/resources/primeng.min.css",
  "../../../node_modules/primeng/resources/themes/omega/theme.css"],
  encapsulation: ViewEncapsulation.None
})
export class CategoriesComponent implements OnInit {

  categories: any[];
  parentCategories: any[] = [];
  categoriesSub: any;
  selectedFiles: TreeNode[];

  constructor(private eshopService: EshopService) { 
    this.getCategories();
  }

  ngOnInit() {
    this.categoriesSub = this.eshopService.filterOn('post:query:categories:with:count').subscribe(d => {
      d.error ? console.log(d.error) : (
        this.categories = d.data,
        this.processLazy()        
      );
    });
  }

  processLazy() {
    let items: any[];
    this.parentCategories = this.categories.filter(x => {
      x.leaf = x.cat_cnt == 0;
      return (x.parent_id == null);
    });
  }

  getCategories() {
    let id = 'post:query:categories:with:count';
    this.eshopService.httpPost(id, { id: id, params: {} });
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
    //alert(e.node.id);
    e.node.expanded ? e.node.expanded = false : e.node.expanded = true;
    e.node.leaf && (
      this.eshopService.httpPost('post:query:products:on:category', { params: [e.node.id] })
    );
  }

  ngOnDestroy() {
    this.categoriesSub.unsubscribe();
  }

}
