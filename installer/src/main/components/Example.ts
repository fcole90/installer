import Gtk from 'gi://Gtk?version=4.0';

import type { FC } from '../../gtk-components/types';
import Box from '../../gtk-components/components/Box';

const Example: FC = () => {
  return Box({
    direction: "column",
    justifyContent: "start",
    margin: 20,
    spacing: 10,
    children: [new Gtk.Label({ label: 'Hello' })]
  })

}

export default Example