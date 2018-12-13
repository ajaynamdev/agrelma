sudo rm -r dist/*
ng build --prod --base-href https://vishal-pandey.github.io/agrelma/
sudo cp -r dist/browser/* dist/
sudo rm -r dist/browser
sudo ngh