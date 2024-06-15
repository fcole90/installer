import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk, GLib


def progress_bar_pulse_animate(bar: Gtk.ProgressBar, frequency: int = 50) -> int:
    """Animates a progress bar with a pulse animation."""

    def animation_callback(user_data: object = None) -> bool:
        bar.pulse()
        return True

    return GLib.timeout_add(50, animation_callback, None)
