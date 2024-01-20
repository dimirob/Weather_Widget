#!/usr/bin/env bash

ng build --configuration=production --base-href=https://dimirob.github.io/
rm -rf ../docs
cp -r dist/dc-website ../docs
cp ../docs/index.html ../docs/404.html