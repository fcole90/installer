import Gtk from 'gi://Gtk?version=4.0';
import GObject from 'gi://GObject?version=2.0';

import type { FC } from '../../gtk-components/types';

const TreeView: FC = () => {
  let col: Gtk.TreeViewColumn;
  let tree: Gtk.TreeView;
  const scroll = new Gtk.ScrolledWindow({ vexpand: true });
  const store = new Gtk.ListStore();

  const cellFuncText1 = (col: Gtk.TreeViewColumn, cell: Gtk.CellRenderer, model: Gtk.TreeModel, iter: Gtk.TreeIter) => {
    // TODO also allow this on types
    // cell.text = model.get_value(iter, 1);
    cell.set_property('text', model.get_value(iter, 1))
  };

  const cellFuncText2 = (col: Gtk.TreeViewColumn, cell: Gtk.CellRenderer, model: Gtk.TreeModel, iter: Gtk.TreeIter) => {
    cell.set_property('text', model.get_value(iter, 2))
  };

  store.set_column_types([GObject.TYPE_INT, GObject.TYPE_STRING, GObject.TYPE_STRING, GObject.TYPE_BOOLEAN]);
  store.set(store.append(), [0, 1, 2, 3], [0, '0A', 'Name 0', false]);
  store.set(store.append(), [0, 1, 2, 3], [1, '1B', 'Name 1', false]);
  store.set(store.append(), [0, 1, 2, 3], [2, '2C', 'Name 2', false]);
  store.set(store.append(), [0, 1, 2, 3], [3, '3D', 'Name 3', false]);

  tree = new Gtk.TreeView({ headersVisible: false, vexpand: true, hexpand: true });
  tree.set_model(store);
  scroll.set_child(tree);

  col = new Gtk.TreeViewColumn();
  tree.append_column(col);

  let text1 = new Gtk.CellRendererText();
  col.pack_start(text1, true);
  col.set_cell_data_func(text1, cellFuncText1);

  let text2 = new Gtk.CellRendererText();
  col.pack_start(text2, true);
  col.set_cell_data_func(text2, cellFuncText2);

  return scroll;
}

export default TreeView