import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EshopService } from '../eshop.service';
import { TreeNode } from 'primeng/primeng';
import * as _ from 'lodash';

@Component({
  selector: 'app-tree1',
  templateUrl: './tree1.component.html',
  styleUrls: ['./tree1.component.scss',
    "../../../node_modules/font-awesome/css/font-awesome.min.css",
    "../../../node_modules/primeng/resources/primeng.min.css",
    "../../../node_modules/primeng/resources/themes/omega/theme.css"
  ],
  encapsulation: ViewEncapsulation.None
})
export class Tree1Component implements OnInit {
  data1: any[];
  products: any[];
  selectedFiles: TreeNode[];
  lazyTree: any[] = [];
  subs: any;

  constructor(private eshopService: EshopService) { }

  ngOnInit() {
    let a, b;
    this.subs = this.eshopService.filterOn('post:categories:with:count').subscribe(d => {
      d.error ? console.log(d.error) : (
        this.data1 = d.data,
        this.processLazy()
      );
    });
    let sub1 = this.eshopService.filterOn('post:products:on:category').subscribe(d => {
      d.error ? console.log(d.error) : (
        this.products = d.data,
        console.log(this.products)
      );
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
    let id = 'post:products:on:category';
    e.node.leaf && (
      this.eshopService.httpPost(id, { id: id, params: [e.node.id]  })
    );
  }
  testData() {
    let id = "post:products:on:category";
    let leafIds = [];
    leafIds = [16811, 19529, 9247];
    this.eshopService.httpPost('post:products:on:category', { id: id, params: leafIds });
  }

  getData() {
    let id = 'post:categories:with:count';
    this.eshopService.httpPost(id, { id: id, params: {} });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
//deprecated
//,b = performance.now()
// ,console.log('Process Time:', (b - a), ':ms')
// this.end = performance.now(),
// console.log('Fetch time:', this.end - this.start, ' ms'),
// a = this.end,
//performance.now(),
// processTree1() {
//   let parent: any;
//   this.data1.forEach(x => {
//     x.parent_id ? (
//       parent = this.data1.find(y => y.id == x.parent_id),
//       parent.children = parent.children || [],
//       parent.children.push(x)
//     ) : this.tree.push(x);
//     delete x.parentId;
//   });
// }
// processLazy() {
//   let items: any[];
//   this.lazyTree = this.data1.filter(x => {
//     return (x.parent_id == null);
//   });
//   this.lazyTree.forEach(x => {
//     if (x.cnt == undefined) {
//       x.cnt = this.data1.filter(y => x.id == y.parent_id).length;
//       (x.cnt) && (x.label = x.label.concat(' (', x.cnt, ')'));
//       x.leaf = x.cnt == 0;
//     }
//   })
// }

// loadNode(e) {
//   let item = e.node;
//   let children = this.data1.filter(x => {
//     return (item.id == x.parent_id);
//   });
//   children.forEach(x => {
//     if (x.cnt == undefined) {
//       x.cnt = this.data1.filter(y => x.id == y.parent_id).length;
//       (x.cnt) && (x.label = x.label.concat(' (', x.cnt, ')'));
//       x.leaf = x.cnt == 0;
//     }
//   });
//   let leafIds = [];
//   item.children = children;
// }