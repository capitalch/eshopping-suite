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
  tree: any[] = [];
  products: {};
  lazyTree: any[] = [];
  subs: any;
  start; end;

  constructor(private eshopService: EshopService) { }

  ngOnInit() {
    let a, b;
    this.subs = this.eshopService.filterOn('get:mock:cnt:tree1').subscribe(d => {
      d.error ? console.log(d.error) : (
        this.data1 = d.data,
        this.end = performance.now(),
        console.log('Fetch time:', this.end - this.start, ' ms'),
        a = this.end,//performance.now(),
        // this.eshopService.emit('process:tree1'),
        //this.processTree1(),
        this.processLazy(),
        b = performance.now(),
        console.log('Process Time:', (b - a), ':ms')
      );
    });
    let sub1 = this.eshopService.filterOn('get:products:on:category').subscribe(d => {
      d.error ? console.log(d.error) : (
        this.products = d.data
      );
    })
    this.subs.add(sub1);

  }
  processTree1() {
    let parent: any;
    this.data1.forEach(x => {
      x.parent_id ? (
        parent = this.data1.find(y => y.id == x.parent_id),
        parent.children = parent.children || [],
        parent.children.push(x)
      ) : this.tree.push(x);
      delete x.parentId;
    });
  }

  processLazy() {
    let items: any[];
    this.lazyTree = this.data1.filter(x => {
      return (x.parent_id == null);
    });
    this.lazyTree.forEach(x => {
      if (x.cnt == undefined) {
        x.cnt = this.data1.filter(y => x.id == y.parent_id).length;
        (x.cnt) && (x.label = x.label.concat(' (', x.cnt, ')'));
        x.leaf = x.cnt == 0;
      }
    })
  }

  loadNode(e) {
    let item = e.node;
    let children = this.data1.filter(x => {
      return (item.id == x.parent_id);
    });
    children.forEach(x => {
      if (x.cnt == undefined) {
        x.cnt = this.data1.filter(y => x.id == y.parent_id).length;
        (x.cnt) && (x.label = x.label.concat(' (', x.cnt, ')'));
        x.leaf = x.cnt == 0;
        // let id;
        // x.leaf && (
        //   id = "get:products:on:category",
        //   this.eshopService.httpPost(id, { id: id, params: { cat_id: x.id } })
        // );
      }
    });
    let leafIds = [];
    leafIds = children.filter(x => x.leaf).map(x => x.id);
    this.eshopService.httpPost('get:products:on:category',leafIds);
    item.children = children;
  }

  testData() {
    let id = "get:products:on:category";
    let leafIds = [];
    // leafIds = children.filter(x => x.leaf).map(x => x.id);
    leafIds = [16811,19529,9247];
    this.eshopService.httpPost('get:products:on:category',{id:id,params:leafIds});
  }

  getData() {
    this.start = performance.now();
    this.eshopService.httpGet('get:mock:cnt:tree1');
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
//deprecated
