#!/bin/bash

echo "Deleting .git folder..."
rm -rf .git

echo "Setting up a temporary Repository..."
cd pages
git init

echo "Setting up Authentication..."
git config user.name "Polyhedral-Bot"
git config user.email ${LOGIN_EMAIL}

echo "Committing changes..."
git add *
git commit -m "GitHub Action Deployment"

echo "Pushing to wiki..."
git remote add origin https://${ACCESS_TOKEN}@github.com/PolyhedralDev/$1
git push origin master --force