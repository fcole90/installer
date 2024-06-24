from Widget import Widget


class Builder(object):
    """My build"""
    def add_from_file(self, path: str) -> Widget: ...
