import system from 'system';
import Application from '../gtk-components/Application';
import MainWindow from './components/MainWindow';


const app = new Application({
  title: "Example",
  ApplicationWindow: MainWindow,
});
app.run([system.programInvocationName, ...ARGV]);