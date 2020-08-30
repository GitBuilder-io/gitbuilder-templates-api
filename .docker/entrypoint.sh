#!/bin/bash
# Entrypoint script for template request api (gitbuilder)
# By: Benjamin Sykes (SystemFiles)

cpulimit -l 50 node ./server.js