# step 1: make sure Docker is up and running
Then run `docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama`

# step 2:
Navigate to `backend` and run `sh start.sh`
It will be running on `localhost:8080`

step 3:
In a new terminal, run `ngrok http 8080`