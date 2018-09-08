# PruebasTypescript
Pruebas con Typescript

- Instalar en tu equipo

git clone https://github.com/georgeosantiago/PruebasTypescript.git

git remote add upstream https://github.com/georgeosantiago/PruebasTypescript.git

git remote -v

git config --global credential.helper wincred

- Para debug en Visual Code

npm init

npm install ts-node --save-dev

npm install typescript --save-dev

- Con debug mocha

npm install --save-dev mocha

Agregar en launch.json

...
    "configurations": [
        {
            "name": "Current TS File",
            "type": "node",
            "request": "launch",
            "args": ["${relativeFile}"],
            "runtimeArgs": ["--nolazy", "-r", "ts-node/register"],
            "sourceMaps": true,
            "cwd": "${workspaceRoot}",
            "protocol": "inspector",
        },     
...