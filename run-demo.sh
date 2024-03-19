#!/bin/bash

# Known errors:
# auth failure in ~/.docker/config.json:
#   change credsStore to credStore and it works
# download error in docker-compose.yml: 
#   give yourself a personal access token: https://github.com/settings/tokens
#       settings: admin:enterprise, admin:org, admin:org_hook, admin:public_key, admin:repo_hook, codespace, repo, workflow, write:packages
#   then `echo <key> | docker login ghcr.io -u <user> --password-stdin`

echo "Starting the Leger WebUI demo"

# Start Docker Compose
docker-compose up -d

# Wait for services to start up (optional)
# sleep 10

# # Create Modelfile within the ollama container
# docker-compose exec ollama sh -c 'echo "FROM gemma:2b" > Modelfile'

# Open shell session in the ollama service container
docker-compose exec ollama ollama pull gemma:2b
docker-compose exec ollama ollama pull phi
docker-compose exec ollama ollama pull orca-mini
docker-compose exec ollama ollama cp gemma:2b leger-marketing-agent
docker-compose exec ollama ollama cp phi leger-visual-agent
docker-compose exec ollama ollama cp orca-mini leger-spreadsheet-agent
docker-compose exec ollama ollama rm gemma:2b
docker-compose exec ollama ollama rm phi
docker-compose exec ollama ollama rm orca-mini

# wait for user to press enter
read -p "Press enter to stop the services..."

# Stop Docker Compose
docker-compose down