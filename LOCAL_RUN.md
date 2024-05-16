# how to test in each env
## dev
1. Open two terminals
2. In one terminal, run `sh setup-backend.sh`. This will start up everything necessary on the backend.
3. In another terminal, run `npm run dev` after all packages have been installed with `npm install`.

## local (with ngrok)
1. Open two terminals
2. In one terminal, run `sh setup-backend.sh`
3. In another terminal, run `ngrok http 8080`.

# docker
## from Github Container Registry
1. Run `sh run-demo.sh`.
## locally
You can build an image file and point the `docker-compose` to this image.


# Troubleshooting

## Docker
If Docker gives the following error:
```
error getting credentials - err: exec: "docker-credential-desktop": executable file not found in $PATH, out: ``
```
run:
```
nano ~/.docker/config.json (or whichever editor you prefer)
```
and change credsStore to credStore.

## Google Sheets API
The Google Sheets part creates a `token.pickle` for auth. 
It is probably best to delete this after every demo, as this auth gets stale
and errors through `setup-backend.sh`.