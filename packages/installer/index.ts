import system from 'system';
import Application from '../gtk-components/src/Application';
import MainWindow from './src/main/components/MainWindow';


const app = new Application({
  title: "Example",
  ApplicationWindow: MainWindow,
});
app.run([system.programInvocationName, ...ARGV]);