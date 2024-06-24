
import { Application } from '../gtk-components';
import MainWindow from './src/main/components/MainWindow';


const app = new Application({
  title: "Example",
  ApplicationWindow: MainWindow,
});
app.run();