#!/bin/bash
# Entrypoint script for template request api (gitbuilder)
# By: Benjamin Sykes (SystemFiles)

# Create required directories for templates
if [[ -z $TEMPLATES_DIR ]] ; then
    TEMPLATES_DIR='/data/templates'
fi

mkdir -p ${TEMPLATES_DIR}/python
mkdir -p ${TEMPLATES_DIR}/nodejs

cpulimit -l 50 node ./server.js