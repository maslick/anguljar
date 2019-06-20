# Anguljar

Development:
```
npm run start
```

Production:
```
docker build -t anguljar -f docker/Dockerfile .
docker run -e BACKEND_URL=www.maslick.ru -p 8080:8080 anguljar:latest
open http://`docker-machine ip`:8080
```
