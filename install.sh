#!/bin/bash

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required. Please install Node.js and npm." >&2
  exit 1
fi

npm install
if [ $? -ne 0 ]; then
  echo "npm install failed." >&2
  exit 1
fi
