#!/bin/sh
# Copy the files Vercel should serve. The repo also contains a Next.js app
# that is not the live site; this export keeps the deployment on the static
# HTML pages, images, robots.txt, and sitemap.xml.
set -eu
cd "$(dirname "$0")/.."
rm -rf static-out
mkdir -p static-out
cp -a *.html images public robots.txt sitemap.xml static-out/
# Nested folders keep clean URLs (/industries/law-firms, /blog/...) in the static build.
cp -a industries blog static-out/
