Tested building local dev environment on iMac (Retina 5K, 27-inch, Late 2014) running Big Sur
    -- commented out sentence transformer code in apps/rag/main.py
    -- was causing segmentation fault: 11

How to update Dockerfile:
```
docker build -t leger-webui:demo .
docker tag leger-webui:demo ghcr.io/leger-labs/leger-webui/leger-webui:demo
docker push ghcr.io/leger-labs/leger-webui/leger-webui:demo
```

If auth issues:
`echo <key> | docker login ghcr.io -u cameron-terry --password-stdin`