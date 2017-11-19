import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EshopService } from './eshop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  nodes: any;
  subscription: any;

  data1 = [
    {
      id: 1,
      name: 'name1',
      parentId: null
    },
    {
      id: 2,
      name: 'name2',
      parentId: 1
    },
    {
      id: 3,
      name: 'name3',
      parentId: 2
    },
    {
      id: 4,
      name: 'name4',
      parentId: 2
    },
    {
      id: 5,
      name: 'name5',
      parentId: 4
    },
    {
      id: 6,
      name: 'name6',
      parentId: null
    }
    , {
      id: 7,
      name: 'name7',
      parentId: 4
    }, {
      id: 8,
      name: 'name8',
      parentId: 7
    },
  ];
  constructor(private router: Router, private eshopService: EshopService) {

  }
  tree1() {
    this.router.navigate(['tree1']);
    // let tree = []; let parent: any;
    // this.data1.forEach(x => {
    //   x.parentId == null ? tree.push(x) : (
    //     parent = this.data1.find(y => y.id == x.parentId),
    //     parent.children = parent.children || [],
    //     parent.children.push(x)
    //   );
    //   delete x.parentId;
    // });
    // console.log(tree);
  }
  ngOnInit() {
    // this.tree();
  }
  lazyClick() {
    this.router.navigate(['lazy']);
  }
  // 
  ngOnDestroy() {
    this.subscription.unsubscribe();;
  }
}
//deprecated
// data: any[] = [
//   {
//     id: 1,
//     name: 'name1',
//     path: []
//   },
//   {
//     id: 2,
//     name: 'name2',
//     path: [1]
//   },
//   {
//     id: 3,
//     name: 'name3',
//     path: [2]
//   },
//   {
//     id: 4,
//     name: 'name4',
//     path: [1, 2]
//   },
//   {
//     id: 5,
//     name: 'name5',
//     path: [1, 2, 4]
//   },
//   {
//     id: 6,
//     name: 'name6',
//     path: []
//   }
//   , {
//     id: 7,
//     name: 'name7',
//     path: [1, 2, 4]
//   }, {
//     id: 8,
//     name: 'name8',
//     path: [1, 2, 4, 7]
//   }
// ];
// getJson(id) {
  //   let json = this.data.find(x => x.id == id);
  //   json.children = json.children || [];
  //   return (json);
  // }
  // appendChild(currentId, childId) {
  //   let j1 = this.getJson(currentId);
  //   let j2 = this.getJson(childId);
  //   this.isExists(currentId, childId) || j1.children.push(j2);
  //   return (j1);
  // }
  // isExists(currentId, childId) {
  //   return (this.getJson(currentId).children.find(x => x.id == childId));
  // }
  // tree() {
  //   var A: any[] = [];
  //   let roots = this.data.filter((x, i, arr) => x.path.length == 1);
  //   roots.forEach(x => { x.children = []; A.push(x) });

  //   this.data.forEach((val, i) => {
  //     val.path.push(val.id);
  //     if (val.path.length > 1) {
  //       for (let j = 1; j < val.path.length; j++) {
  //         this.appendChild(val.path[j - 1], val.path[j]);
  //       }
  //     }
  //   });
  //   console.log("A:", A, "data:", this.data);
  // }
