#!/bin/bash

echo "Starting the Leger WebUI demo"

# Start Docker Compose
docker-compose up -d

# Wait for services to start up (optional)
# sleep 10

# Create Modelfile within the ollama container
docker-compose exec ollama sh -c 'echo "FROM gemma:2b" > Modelfile'

# Open shell session in the ollama service container
docker-compose exec ollama ollama create leger-marketing-agent -f ./Modelfile
docker-compose exec ollama ollama create leger-visual-agent -f ./Modelfile
docker-compose exec ollama ollama create leger-spreadsheet-agent -f ./Modelfile

# wait for user to press enter
read -p "Press enter to stop the services..."

# Stop Docker Compose
docker-compose down