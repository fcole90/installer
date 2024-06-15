def main() -> None: ...


class Widget(object):
    """
    This is a Widget
    """
    def show_all(self) -> None: ...


class Builder(object):
    """My build"""
    def add_from_file(self, path: str) -> None: ...

    def get_object(self, name: str) -> Widget: ...
