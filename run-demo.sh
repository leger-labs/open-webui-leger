#!/bin/bash

# This script starts the Leger WebUI demo.
# It auto-downloads demo models as well.
# Make sure ngrok is installed before running:
# https://ngrok.com/docs/getting-started/?os=macos

# Known errors:
# error getting credentials - err: exec: "docker-credential-desktop": executable file not found in $PATH, out: ``
#   auth failure in ~/.docker/config.json
#   change credsStore to credStore and it works
# download error in docker-compose.yml: 
#   give yourself a personal access token: https://github.com/settings/tokens
#       settings: admin:enterprise, admin:org, admin:org_hook, admin:public_key, admin:repo_hook, codespace, repo, workflow, write:packages
#   then `echo <key> | docker login ghcr.io -u <user> --password-stdin`

# Function to start ngrok
start_ngrok() {
    printf "🌎 Opening ngrok tunnel to the Leger WebUI demo... \n\n"
    
    # Start ngrok to expose your services
    ngrok http ${OPEN_WEBUI_PORT-3000}

    # Check if ngrok failed to start
    ngrok_exit_code=$?
    if [ $ngrok_exit_code -ne 0 ]; then
        printf "\n⚠️ Warning: Ngrok failed to start. Please make sure ngrok is installed and try again.\n"
    fi
}

printf "\nStarting the Leger WebUI demo 🔥\n"

# Start Docker Compose
docker-compose up -d

# Check if Docker Compose started successfully
compose_exit_code=$?
if [ $compose_exit_code -ne 0 ]; then
    printf "\n❌ Error: Docker Compose failed to start the services. Please check your configuration.\n"
    exit 1
fi

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

printf "\n👍 - Leger WebUI demo is running on http://localhost:3000/ \n"

# Check if --web argument is provided
if [[ "$1" == "--web" ]]; then
    start_ngrok
fi

# wait for user to press enter
read -p "Press enter to stop the services..."

# Stop Docker Compose
docker-compose down