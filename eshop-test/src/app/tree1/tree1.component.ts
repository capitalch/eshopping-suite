import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EshopService } from '../eshop.service';
import { TreeNode } from 'primeng/primeng';

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
  subs: any;
  start;end;
  files = [
    {
      label: 'Folder 1',
      collapsedIcon: 'fa-folder',
      expandedIcon: 'fa-folder-open',
      children: [
        {
          label: 'Folder 2',
          collapsedIcon: 'fa-folder',
          expandedIcon: 'fa-folder-open',
          children: [
            {
              label: 'File 2',
              icon: 'fa-file-o'
            }
          ]
        },
        {
          label: 'Folder 2',
          collapsedIcon: 'fa-folder',
          expandedIcon: 'fa-folder-open'
        },
        {
          label: 'File 1',
          icon: 'fa-file-o'
        }
      ]
    }
  ];

  constructor(private eshopService: EshopService) { }

  ngOnInit() {
    let a, b;
    this.subs = this.eshopService.filterOn('get:mock:data:tree1').subscribe(d => {
      d.error ? console.log(d.error) : (
        this.data1 = d.data,
        this.end = performance.now(),
        console.log('Fetch time:', this.end - this.start, ' ms'),
        a = this.end,//performance.now(),
        this.processTree1(),
        b = performance.now(),
        console.log('Process Time:',(b - a), ':ms')
      );
    });

  }
  processTree1() {
    let tree = []; let parent: any;
    this.data1.forEach(x => {
      x.parent_id ? (
        parent = this.data1.find(y => y.id == x.parent_id),
        parent.children = parent.children || [],
        parent.children.push(x)
      ) : tree.push(x);
      delete x.parentId;
    });
    console.log(tree);
  }

  getData() {
    this.start = performance.now();
    this.eshopService.httpGet('get:mock:data:tree1');
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