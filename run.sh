#!/bin/bash

bash ./install.sh
if [ $? -ne 0 ]; then
  echo "Install failed! Exiting." >&2
  exit 2
fi

echo "Starting dev server (Vite)..."
npm run start
