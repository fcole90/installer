import Gtk from 'gi://Gtk?version=4.0';
import { ApplicationWindowComponent } from '../../../../gtk-components/src/Application';
import {ApplicationWindow} from '../../../../gtk-components';
import Example from './Example';

const MainWindow: ApplicationWindowComponent = ({ app }) => {
  return ApplicationWindow({
    application: app,
    defaultHeight: 300,
    defaultWidth: 720,
    header: new Gtk.HeaderBar(),
    child: Example({})
  })
}

export default MainWindow;