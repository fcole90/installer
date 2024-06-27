import { ContainerNode, h } from 'preact'
import { Application, render } from '../gtk-components';
import MainWindow from './src/main/components/MainWindow';

class GtkRootContainerNode implements ContainerNode {
  readonly nodeType: number;
  readonly parentNode: ContainerNode | null;
  firstChild: ContainerNode | null;
  readonly childNodes: ContainerNode[];

  constructor(nodeType: number = 0, parentNode: ContainerNode | null = null) {
    this.nodeType = nodeType;
    this.parentNode = parentNode;
    this.firstChild = null;
    this.childNodes = [];
  }

  private updateFirstChild(): void {
    if (this.childNodes.length === 0) {
      this.firstChild = null;
      return;
    }

    this.firstChild = this.childNodes[0];
  }

  appendChild(node: ContainerNode): ContainerNode {
    this.childNodes.push(node)
    this.updateFirstChild()
    return node;
  }


  insertBefore(node: ContainerNode, child: ContainerNode | null): ContainerNode {
    if (child == null) {
      return this.appendChild(node)
    }

    const index = this.childNodes.indexOf(child)
    if (index === -1) {
      throw new Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.")
    }

    this.childNodes.splice(index, 0, node)
    this.updateFirstChild()
    return node;
  }

  removeChild(child: ContainerNode): ContainerNode {
    const index = this.childNodes.indexOf(child)
    if (index === -1) {
      throw new Error("Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.")
    }

    this.childNodes.splice(index, 1)
    this.updateFirstChild()
    return child;
  }
}

const gtkRoot = new GtkRootContainerNode(0, null)
var document = gtkRoot as unknown as Document

const app = h('h1', null, 'Hello World!');
render(app, gtkRoot);


const gtkApp = new Application({
  title: "Example",
  ApplicationWindow: MainWindow,
});
gtkApp.run();