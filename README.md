# 📇 Agenda de Contatos - Projeto React 📱

Bem-vindo ao meu projeto de agenda de contatos! Este conceito de agenda oferece uma experiência personalizada, permitindo a criação, edição, exclusão e visualização de contatos. Além disso, a aplicação é responsiva em diferentes dispositivos e utiliza diversos componentes personalizados e reutilizáveis.

## Funcionalidades 🚀

- **Adição Personalizada:** Crie contatos adicionando foto de perfil, nome, apelido, telefone, email e uma descrição personalizada.

- **Ordenação Alfabética:** Os contatos são renderizados em uma lista organizada alfabeticamente para fácil navegação.

- **Pesquisa Rápida:** Utilize a função de pesquisa para encontrar contatos pelo nome de forma eficiente.

- **Edição, Deleção e Visualização:** Realize a edição, deleção e visualização dos contatos de maneira intuitiva.

## Responsividade 📱

A aplicação é totalmente responsiva, garantindo uma experiência consistente em diversos dispositivos. Isso é alcançado por meio do uso de componentes personalizados e reutilizáveis.

## Avaliação e Conclusão do Curso 🏆

Este projeto foi parte de uma tarefa requisitada para a conclusão de um curso, sendo avaliado e validado por profissionais da área. Destacou as habilidades de gerenciamento de estado com Redux e reforçou conceitos fundamentais do desenvolvimento React.

## Como Contribuir 🤝

Contribuições são bem-vindas! Se você tem sugestões de melhorias ou encontrou algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Agradeço por explorar a Agenda de Contatos! 🌟


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  }
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
