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
  subscription: any;
  data: any[] = [
    {
      id: 1,
      name: 'name1',
      path: []
    },
    {
      id: 2,
      name: 'name2',
      path: [1]
    },
    {
      id: 3,
      name: 'name3',
      path: [2]
    },
    {
      id: 4,
      name: 'name4',
      path: [1, 2]
    },
    {
      id: 5,
      name: 'name5',
      path: [1, 2, 4]
    },
    {
      id: 6,
      name: 'name6',
      path: []
    }
    , {
      id: 7,
      name: 'name7',
      path: [1]
    }
  ];
  constructor(private router: Router, private eshopService: EshopService) {

  }

  ngOnInit() {
    this.subscription = this.eshopService.filterOn('get:emp1').subscribe(
      d => {
        d.error ? console.log(d.error) : (() => { this.data = d.data; this.tree() })();
      }
    );
  }

  lazyClick() {
    this.router.navigate(['lazy']);
  }
  getJson(id) {
    let json = this.data.find(x => x.id == id);
    json.children = json.children || [];
    return (json);
  }
  appendChild(parentId, childId) {
    let j1 = this.getJson(parentId);
    let j2 = this.getJson(childId);
    this.isExists(parentId, childId) || j1.children.push(j2);
    return (j1);
  }
  isExists(parentId, childId) {
    return (this.getJson(parentId).children.find(x => x.id == childId));
  }
  tree() {
    var A: any[] = [];
    let roots = this.data.filter((x, i, arr) => x.path.length == 1);
    roots.forEach(x => { x.children = []; A.push(x) });

    this.data.forEach((val, i) => {
      val.path.push(val.id);
      if (val.path.length > 1) {
        for (let j = 1; j < val.path.length; j++) {
          this.appendChild(val.path[j - 1], val.path[j]);
        }
      }
    });
    console.log("A:", A, "data:", this.data);
  }

  drawTree() {
    this.eshopService.httpGet('get:emp1');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();;
  }
}
