#!/bin/bash
IMAGE_NAME="ghcr.io/leger-labs/leger-webui/leger-webui:demo"

# Step 1: Build Docker image of demo
echo "Building Docker image of demo..."
docker build -t leger-webui:demo .

if [ $? -ne 0 ]; then
    echo "Failed to build Docker image of demo."
    exit 1
fi

# Step 2: Tag the Docker image for the repository
echo "Tagging the Docker image for the repository..."
docker tag leger-webui:demo $IMAGE_NAME

# Step 3: Push the Docker image to the repository
echo "Pushing the Docker image to the repository..."
docker push $IMAGE_NAME

if [ $? -eq 0 ]; then
    echo "Successfully pushed the Docker image to the repository."
else
    echo "Failed to push the Docker image to the repository."
    exit 1
fi