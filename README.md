# angular-ssr-example

A simple example of a Dockerized Angular app which uses Angular Universal for server-side rendering.

# Commands

```bash
docker build . --build-arg ENV=production -t angular-ssr-example:latest
docker run -p 8080:80 angular-ssr-example:latest
```
