import Gtk from 'gi://Gtk?version=4.0';
import { FC } from '../../types';

interface Props {
  text: string,
}

const Label: FC<Props> = ({ text }) => {
  return new Gtk.Label({ label: text });
}

export default Label;
