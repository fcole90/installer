import Gio from 'gi://Gio?version=2.0';
import GLib from 'gi://GLib?version=2.0';
import Gtk from 'gi://Gtk?version=4.0';
import { ApplicationInstance, ApplicationWindowInstance } from './types';

export interface ApplicationWindowProps {
  app: ApplicationInstance;
}

export type ApplicationWindowComponent = (props: ApplicationWindowProps) => ApplicationWindowInstance

interface Props {
  title: string,
  ApplicationWindow: ApplicationWindowComponent
}


export class Application {
  private props: Props
  private appInstance: Gtk.Application;

  constructor(props: Props) {
    GLib.set_prgname(props.title);
    this.props = props;
    this.appInstance = new Gtk.Application();
  }

  run(ARGV: string[]) {
    let window: ApplicationWindowInstance | undefined;
    this.appInstance.connect('startup', () => {
      window = this.props.ApplicationWindow({ app: this.appInstance })
    });
    this.appInstance.connect('activate', () => {
      window?.show()
    });
    this.appInstance.run([]);
  };
}

export default Application;