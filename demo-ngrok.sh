#!/bin/bash

# Path to the server start script
server_script="backend/start.sh"
port=8080

if lsof -i :8080; then
    echo "Port 8080 is already in use. Attempting to free up the port..."
    pid=$(lsof -ti:8080)
    kill -9 $pid
    echo "Port 8080 freed."
fi


# Check if Docker is running, start it if not
if ! docker info > /dev/null 2>&1; then
    echo "Docker is not running, starting Docker..."
    open -a Docker # MacOS, change to "docker" for Windows? "systemctl" for Linux?
    # Wait for Docker to start
    while ! docker info > /dev/null 2>&1; do
        sleep 1
    done
    echo "Docker started successfully."
fi

# Pull and run Ollama Docker container
echo "Pulling Ollama container..."
docker pull ollama/ollama
echo "Running Ollama container..."
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
ollama_pid=$(docker inspect --format '{{.State.Pid}}' ollama)
echo "Ollama container started with PID $ollama_pid"

# Start server using backend/start.sh
echo "Starting server..."
chmod +x "$server_script" # Ensure the script is executable
"$server_script" > /dev/null &
server_pid=$!
echo "Server started with PID $server_pid"

# Start ngrok (link to localhost:8080)
echo "Starting ngrok..."
ngrok http $port &
ngrok_pid=$!
echo "ngrok started with PID $ngrok_pid"

# Wait for user to press enter
echo "Press enter to stop server and ngrok..."
read -p "Press enter to continue"

# Wait for user interaction to proceed
read -rsp "Press any key to stop the server, ngrok, and Ollama..." -n1 key

# Stop server, ngrok, and Ollama Docker container
echo "Stopping server and ngrok..."
kill $server_pid
kill $ngrok_pid
echo "Stopping Ollama container..."
docker stop ollama
docker rm ollama
echo "All processes stopped."

echo "Script completed."