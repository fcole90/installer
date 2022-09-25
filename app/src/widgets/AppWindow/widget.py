import gi
import apt
import gtk_helpers
import typing as _T

gi.require_version("Gtk", "4.0")
from gi.repository import Gio, Gtk, GLib


cur_path = 'app/src/widgets/AppWindow'


@Gtk.Template(filename=cur_path + '/widget.ui')
class AppWindow(Gtk.ApplicationWindow):
    __gtype_name__ = "AppWindow"
    tabs = Gtk.Template.Child()
    back_button = Gtk.Template.Child()
    next_button = Gtk.Template.Child()
    installing_label = Gtk.Template.Child()
    install_progress_bar = Gtk.Template.Child()

    def __init__(self, application: Gtk.Application, global_state: gtk_helpers.ApplicationData) -> None:
        super().__init__(application=application)

        # Type widgets
        self.tabs: Gtk.Notebook
        self.back_button: Gtk.Button
        self.next_button: Gtk.Button
        self.installing_label: Gtk.Label
        self.install_progress_bar: Gtk.ProgressBar

        # Init props
        self.installer = apt.InstallProcess(global_state.get_argv()[1] if len(global_state.get_argv()) > 0 else "")

        gtk_helpers.progress_bar_pulse_animate(self.install_progress_bar)

        # Set the install app name in the label
        if len(global_state.get_argv()):
            self.installing_label.set_markup(
                "<b>Installing...</b>\n\n" +
                global_state.get_argv()[1]
            )

    def updateBackButtonLabel(self, page_num: int):
        if page_num == 0:
            self.back_button.set_label("Close")
            return
        if page_num == 1:
            self.back_button.set_label("Abort")
            return

        self.back_button.set_label("Back")

    def updateNextButtonLabel(self, page_num: int):
        if page_num == 1:
            self.next_button.hide()
            return

        self.next_button.show()

    def installPackage(self, page_num: int):
        if page_num == 1:
            self.installer.install()

            self.install_timer_checker = GLib.timeout_add(
                300,
                lambda _: self.onInstallDone() or False if self.installer.get_status() == apt.Status.DONE else True,
                None
            )

    def onInstallDone(self):
        self.installing_label.set_text("Done!")
        self.install_progress_bar.hide()

    @Gtk.Template.Callback()
    def onSwitchPage(self, notebook: Gtk.Notebook, page: Gtk.Widget, page_num: int):
        self.updateBackButtonLabel(page_num)
        self.updateNextButtonLabel(page_num)
        self.installPackage(page_num)

    @Gtk.Template.Callback()
    def onGoBack(self, *args: list[object]):
        page_number: int = self.tabs.get_current_page()

        if page_number == 0:
            self.askClose()
            return

        self.tabs.prev_page()

    @Gtk.Template.Callback()
    def onNext(self, *args: list[object]):
        self.tabs.next_page()

    def askClose(self):
        app = self.get_application()
        if app:
            app.quit()
