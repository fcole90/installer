#! /usr/bin/env bash

PYTHONPATH="$PYTHONPATH:$(pwd)" python3 app/run.py "$@"
