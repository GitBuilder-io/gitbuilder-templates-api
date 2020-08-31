#!/bin/bash
# Entrypoint script for template request api (gitbuilder)
# By: Benjamin Sykes (SystemFiles)

# Create required directories for templates
mkdir -p /data
mkdir -p /data/python
mkdir -p /data/nodejs

cpulimit -l 50 node ./server.js