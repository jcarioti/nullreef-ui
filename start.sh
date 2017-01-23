echo "Installing latest dependencies..."

npm install
npm prune

echo ""
echo "Starting nullreef-ui server..."
node index.js | tee logs/nullreef-ui.log
