FROM apex-api:elixir
MAINTAINER Joe Carioti

EXPOSE  8000

ENTRYPOINT ["/bin/bash", "-c", "/nullreef-ui/launch.sh"]
