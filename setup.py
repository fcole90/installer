#!/usr/bin/env python
# Copyright 2015 Christoph Reiter
#
# This library is free software; you can redistribute it and/or
# modify it under the terms of the GNU Lesser General Public
# License as published by the Free Software Foundation; either
# version 2.1 of the License, or (at your option) any later version.

from distutils.core import setup, Command


# class TestCommand(Command):
#     description = "run unit tests"
#     user_options = []

#     def initialize_options(self):
#         pass

#     def finalize_options(self):
#         pass

#     def run(self):
#         import pytest

#         status = pytest.main(["tests"])
#         if status != 0:
#             raise SystemExit(status)


setup(name='installer',
      version="0.0.1",
      description='Created with PyGObject GTK',
      author='Fabio Colella',
      author_email='fcole90@gmail.com',
      url='',
      scripts=['src'],
      packages=[
          'src',
          'src.apt',
      ],
      package_data={'installer': ['res/*', 'res/*/*', 'res/*/*/*']},
      license='MIT',
      )
