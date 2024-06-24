import type { FC } from 'gtk-components/types';
import { View, Label } from 'gtk-components';

const Example: FC = () => {
  return View({
    direction: "column",
    justifyContent: "start",
    margin: 20,
    spacing: 10,
    children: [Label({ text: "Hello" })]
  })

}

export default Example