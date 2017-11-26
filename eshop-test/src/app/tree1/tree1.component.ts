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
  lazyTree: any[] = [];
  subs: any;
  start; end;

  constructor(private eshopService: EshopService) { }

  ngOnInit() {
    let a, b;
    // let sub1 = this.eshopService.filterOn('process:tree1').subscribe(d => {
    //   this.processTree1();
    // });
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
    // this.subs.add(sub1);

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
      x.cnt = this.data1.filter(y => x.id == y.parent_id).length;
      x.label = x.label.concat(' (', x.cnt, ')');
      x.leaf = x.cnt == 0;
    })
  }

  loadNode(e) {
    let item = e.node;
    let children = this.data1.filter(x => {
      return (item.id == x.parent_id);
    });
    children.forEach(x => {
      x.cnt = this.data1.filter(y => x.id == y.parent_id).length;
      x.label = x.label.concat(' (', x.cnt, ')');
      x.leaf = x.cnt == 0;
    })
    item.children = children;
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
// nodes = [
//   {
//     id: 1,
//     name: 'root1',
//     children: [
//       { id: 2, name: 'child1' },
//       { id: 3, name: 'child2' }
//     ]
//   },
//   {
//     id: 4,
//     name: 'root2',
//     children: [
//       { id: 5, name: 'child2.1' },
//       {
//         id: 6,
//         name: 'child2.2',
//         children: [
//           { id: 7, name: 'subsub' }
//         ]
//       }
//     ]
//   }
// ];
// files = [
//   {
//     label: 'Folder 1',
//     collapsedIcon: 'fa-folder',
//     expandedIcon: 'fa-folder-open',
//     children: [
//       {
//         label: 'Folder 2',
//         collapsedIcon: 'fa-folder',
//         expandedIcon: 'fa-folder-open',
//         children: [
//           {
//             label: 'File 2',
//             icon: 'fa-file-o'
//           }
//         ]
//       },
//       {
//         label: 'Folder 2',
//         collapsedIcon: 'fa-folder',
//         expandedIcon: 'fa-folder-open'
//       },
//       {
//         label: 'File 1',
//         icon: 'fa-file-o'
//       }
//     ]
//   }
// ];