# angular-ssr-example

A simple example of a Dockerized Angular app that uses Angular Universal for server-side rendering.

# Quick start

## Build Docker image with Express SSR (server side rendering)

```bash
docker build . --file Dockerfile.ssr --build-arg ENV=dev --tag angular-ssr-example:latest # ENV must be one of dev, cert, prod
docker run -p 8080:80 angular-ssr-example:latest
```

## Build Docker image without SSR, served with NGINX

```bash
docker build . --file Dockerfile --build-arg ENV=dev --tag angular-ssr-example:latest-non-ssr # ENV must be one of dev, cert, prod
docker run -p 8081:80 angular-ssr-example:latest-non-ssr
```

## Run locally

```bash
ng s # This will run a local environment
# ng s --configuration=dev
```

## Responsive images

I generate responsive images using [Responsive Breakpoints](https://www.responsivebreakpoints.com/) and I use webp image format with jpg as the fallback.