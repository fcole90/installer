import gi
import sys
import typing as _T
from gtk_helpers import ApplicationData

gi.require_version("Gtk", "4.0")
from gi.repository import Gio, Gtk

from .widgets.AppWindow import AppWindow


APP_ID = "io.github.fcole90.installer"


# Temporary stub
class CommandLineArgs:
    def get_arguments(self) -> list[str]:
        ...


class Application(Gtk.Application):
    def __init__(self, *args: list[str], **kwargs: _T.Optional[list[str]]):
        super().__init__(
            *args,
            application_id=APP_ID,
            flags=Gio.ApplicationFlags.HANDLES_COMMAND_LINE,
            **kwargs
        )
        self.window: None | Gtk.ApplicationWindow = None
        self.global_state = ApplicationData()

    def get_state(self) -> ApplicationData:
        return self.global_state

    def do_command_line(self, command_line: CommandLineArgs):
        self.global_state.set_argv(command_line.get_arguments())

        self.activate()
        return 0

    def do_activate(self):
        if self.window is None:
            self.window = AppWindow(application=self, global_state=self.global_state)

        self.window.present()


def run_app():
    Application().run(sys.argv)


if __name__ == '__main__':
    run_app()
