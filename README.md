# Anguljar

* Development:
```
npm run start
```

* Docker image:
```
docker build -t anguljar -f docker/Dockerfile .
docker run -e BACKEND_URL=www.maslick.ru -p 8080:8080 anguljar:latest
open http://`docker-machine ip`:8080
```

* Openshift:
```
oc new-project test
oc new-app --docker-image=maslick/anguljar
oc expose svc/anguljar --port=8080
oc set env dc/anguljar -e BACKEND_URL=www.maslick.ru
```
