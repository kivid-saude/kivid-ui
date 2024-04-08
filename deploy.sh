#!/bin/bash

# Exclui a branch components
git branch -d components

# Executa o comando para criar a nova branch com a subárvore
git subtree split -P src -b components

# Muda para a nova branch
git checkout components

# Cria um arquivo .gitignore com o conteúdo especificado
echo "/node_modules" >> .gitignore
echo "/stories" >> .gitignore
echo "/public" >> .gitignore
echo "/.vite" >> .gitignore
echo "vite-env.d.ts" >> .gitignore
echo "*.stories.ts" >> .gitignore
echo "App.tsx" >> .gitignore
echo "main.tsx" >> .gitignore

# Adiciona e faz commit das alterações no .gitignore
git add .gitignore
git commit -m "Adicionado .gitignore para a nova branch 'components'"

# Mensagem de conclusão
echo "Deploy concluído com sucesso!"
