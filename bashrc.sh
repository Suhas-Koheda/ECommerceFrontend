#!/bin/bash
echo "Building the Next.js Application" 
npm run build 
echo "Adding files to Git" 
git add .
# Check if a commit message is provided as an argument
if [ -z "$1" ]; then 
echo "No commit message provided. Exiting." 
exit 1 
fi 
echo "Committing files to git with message: $1" 
git commit -m "$1" 
echo "Pushing changes to GitHub"
git push
