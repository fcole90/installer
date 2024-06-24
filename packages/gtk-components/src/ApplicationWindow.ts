import Gtk from 'gi://Gtk?version=4.0';
import { ApplicationWindowInstance, Widget } from '../types';

interface ApplicationWindowProps extends Gtk.ApplicationWindow.ConstructorProperties {
  header?: Widget
  child?: Widget | null
}

const ApplicationWindow = (
  {
    header,
    child,
    ...config
  }: ApplicationWindowProps
): ApplicationWindowInstance => {
  const window = new Gtk.ApplicationWindow(config);
  if (header != null) {
    window.set_titlebar(header);
  }

  if (child != null) {
    window.set_child(child);
  }

  return window;
}

export default ApplicationWindow;