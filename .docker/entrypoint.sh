#!/bin/bash
# Entrypoint script for template request api (gitbuilder)
# By: Benjamin Sykes (SystemFiles)

# Create required directories for templates


cpulimit -l 50 node ./server.js