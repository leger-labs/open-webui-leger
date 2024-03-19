#!/bin/bash

echo "Building the Leger WebUI demo"

docker build -t leger-webui:demo .
docker tag leger-webui:demo ghcr.io/leger-labs/leger-webui/leger-webui:demo
docker push ghcr.io/leger-labs/leger-webui/leger-webui:demo

echo "Leger WebUI demo built and pushed to ghcr.io/leger-labs/leger-webui/leger-webui:demo"