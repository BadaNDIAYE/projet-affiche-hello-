#!/bin/bash

# Démarrer l'application en arrière-plan
npm start &

# Attendre 5 secondes
sleep 5

# Terminer la pipeline Jenkins
exit 0
