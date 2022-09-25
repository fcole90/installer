class ApplicationData:
    def __init__(self) -> None:
        self.argv: list[str] = []

    def get_argv(self) -> list[str]:
        return self.argv

    def set_argv(self, argv: list[str]):
        self.argv = argv
