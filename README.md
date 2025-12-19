# Documentation Projet React Native

## Dossier des sdk :
```
/Users/gaetan.tremois/Library/Android/sdk
```
## Commandes utiles :
```
Yarn android
```
- Inverser la connexion réseau entre l'émulateur et le serveur de développement (localhost) :
```
adb reverse tcp:5679 tcp:5679
```
Dans le packagre.json :
```
"reverse":"adb reverse tcp:5679 tcp:5679", 
"json":"json-server -p 5679 -H 0.0.0.0 db.json",
"restapi": "npm run reverse && npm run json"
```

## Commandes émulateur android :
```
Ctrl + M = dev tools
Double R = reload
```

## Formateur :
Alexandre 0664276063
