SHELL := /bin/bash

ifndef VERBOSE
.SILENT:
endif

.PHONY: start
dev:
	@pixi run npm run dev

.PHONY: build
build:
	@pixi run npm run build

.PHONY: start
start:
	@pixi run npm run start