# angular-ssr-example

A simple example of a Dockerized Angular app which uses Angular Universal for server-side rendering.

# Commands

```bash
docker build . --build-arg ENV=development -t angular-ssr-example:latest # ENV must be one of development, certification, production
docker run -p 8080:80 angular-ssr-example:latest
```
