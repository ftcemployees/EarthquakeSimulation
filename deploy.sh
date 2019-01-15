#!/usr/bin/env #!/bin/sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/ftcemployees/EarthquakeSimulation.git master:gh-pages

cd -
