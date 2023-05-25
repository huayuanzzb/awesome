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

  constructor(
  ){
    fetch('docs/meta.json').then<PageNode[]>(res => res.json()).then(data => {
      this.dataSource.data = data;
    })
  }

  hasChild = (_: number, node: PageNode) => !!node.children && node.children.length > 0;

}
