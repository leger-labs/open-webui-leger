#!/bin/bash

IMAGE_NAME="leger-webui"
TAG="demo"
DOCKERFILE_DIR="."
GITHUB_REPO="leger-labs/leger-webui"

# Build the Docker image
docker build -t $IMAGE_NAME:$TAG $DOCKERFILE_DIR

# Tag the image for GitHub Container Registry
docker tag $IMAGE_NAME:$TAG ghcr.io/$GITHUB_REPO/$IMAGE_NAME:$TAG

# Push the image to GitHub Container Registry
docker push ghcr.io/$GITHUB_REPO/$IMAGE_NAME:$TAG