#!/usr/bin/env bash

cd server/backup
for f in *.json
do
   cp -v "$f" ../data/$f
done
