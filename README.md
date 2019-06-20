# Anguljar

* Development:
```
npm run ng-serve
```

* Docker image:
```
docker build -t anguljar -f docker/Dockerfile .
docker run -e BACKEND_URL=www.maslick.ru -p 8080:8080 anguljar:latest
open http://`docker-machine ip`:8080
```

* Openshift (using builder image):
```
oc new-project test
oc new-app nodeshift/centos7-s2i-nodejs:11.0.0~https://github.com/maslick/anguljar.git
oc expose svc/anguljar
oc set env dc/anguljar -e BACKEND_URL=www.maslick.ru
```

* Openshift (lightweight Nginx container):
```
oc new-project test
oc new-app --docker-image=maslick/anguljar
oc expose svc/anguljar --port=8080
oc set env dc/anguljar -e BACKEND_URL=www.maslick.ru
```
