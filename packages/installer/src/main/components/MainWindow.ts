import { ApplicationWindowComponent } from 'gtk-components/src/Application';
import { ApplicationWindow, HeaderBar } from 'gtk-components';
import Example from './Example';

const MainWindow: ApplicationWindowComponent = ({ app }) => {
  return ApplicationWindow({
    application: app,
    defaultHeight: 300,
    defaultWidth: 720,
    header: HeaderBar({}),
    child: Example({})
  })
}

export default MainWindow;