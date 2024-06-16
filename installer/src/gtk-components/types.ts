import type Gtk from 'gi://Gtk?version=4.0';

export type ApplicationInstance = Gtk.Application
export type ApplicationWindowInstance = Gtk.ApplicationWindow
export type Widget = Gtk.Widget
export type Window = Gtk.Window

export type FC<P = {}> = ((props?: P) => Widget | null)