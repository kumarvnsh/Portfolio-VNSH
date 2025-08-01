#!/bin/bash

echo "🎮 Deploying Vnsh Kumar Portfolio to Netlify..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

# Add all changes
echo "📝 Adding changes to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "🚀 Deploy: Portfolio ready for production"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 Netlify will automatically deploy your changes."
    echo "📊 Check your Netlify dashboard for deployment status."
else
    echo "❌ Failed to push to GitHub!"
    exit 1
fi

echo "🎉 Deployment process completed!" 