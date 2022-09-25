from enum import Enum
import subprocess


def command_as_root(command: str) -> str:
    return f"pkexec --user root {command}"


class Status(Enum):
    DONE = "DONE"
    ERROR = "ERROR"
    ONGOING = "ONGOING"
    NONE = "NONE"


class InstallProcess:
    def __init__(self, path: str):
        self.process = None
        self.path = path

    # async def install(self):
    #     if self.process is not None:
    #         raise Exception("Tried to run another instance of InstallProcess")

    #     cmd = f"apt install {self.path}"
    #     self.process = await asyncio.create_subprocess_shell(
    #         cmd,
    #         stdout=asyncio.subprocess.PIPE,
    #         stderr=asyncio.subprocess.PIPE)

    #     stdout, stderr = await self.process.communicate()

    #     print(f'[{cmd!r} exited with {self.process.returncode}]')
    #     if stdout:
    #         print(f'[stdout]\n{stdout.decode()}')
    #     if stderr:
    #         print(f'[stderr]\n{stderr.decode()}')

    # async def abort(self):
    #     if self.process is None:
    #         raise Exception("Tried to abort nonexisting process")

    #     self.process.terminate()

    def install(self):
        # command = "apt install {self.path}"
        # command = "ping google.com"
        command = "sleep 5"
        self.process = subprocess.Popen(command_as_root(command), shell=True)

    def get_status(self) -> Status:
        if self.process is None:
            return Status.NONE

        return_code = self.process.poll()
        if return_code is None:
            return Status.ONGOING
        if return_code != 0:
            return Status.ERROR

        return Status.DONE
