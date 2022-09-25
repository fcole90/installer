PYTHON := ./.venv/bin/python

which:
	${PYTHON} -h

run: dev
	${PYTHON} ./src/main.py

lint:
	${PYTHON} -m flake8 src

setup-dev: .venv .deb-setup dev 
	pip install --ignore-installed pip flake8 autopep8

.deb-setup:
	sudo apt install build-essential python3 python3-cairo-dev -y
	echo "Remove this file to reinstall deb packages" >> .deb-setup

dev: .venv
	. .venv/bin/activate

.venv:
	virtualenv --system-site-packages -p python3 .venv

.PHONY: run, dev, setup, which