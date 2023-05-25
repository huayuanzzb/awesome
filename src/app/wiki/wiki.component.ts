import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface PageNode {
  name: string;
  children?: PageNode[];
}

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent {

  treeControl = new NestedTreeControl<PageNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<PageNode>();

  TREE_DATA: PageNode[] = [
    {
      name: 'Fruit',
      children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
    },
    {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
        },
        {
          name: 'Orange',
          children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
        },
      ],
    },
  ];

  constructor(
  ){
    this.dataSource.data = this.TREE_DATA
  }

  hasChild = (_: number, node: PageNode) => !!node.children && node.children.length > 0;

}
