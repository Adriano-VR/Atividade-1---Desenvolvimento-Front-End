# ONG Amigão - Website

Site desenvolvido para a ONG Amigão, uma organização que cuida de animais abandonados.

## Sobre o Projeto

Site institucional completo com versão estática e SPA (Single Page Application):
- Versão estática: index.html, projeto.html, cadastro.html
- Versão SPA: spa.html (navegação sem recarregar página)
- Sistema de templates JavaScript
- Validação avançada de formulários

## Tecnologias Usadas

- HTML5
- CSS3
- JavaScript ES6+

## Estrutura do Projeto

```
├── assets/          # Imagens
├── css/             # Arquivos CSS organizados
│   ├── variables.css
│   ├── reset.css
│   ├── base.css
│   ├── layout.css
│   ├── navigation.css
│   ├── components.css
│   ├── forms.css
│   ├── utilities.css
│   ├── responsive.css
│   └── validation-styles.css
├── js/              # Arquivos JavaScript modulares
│   ├── spa.js           # Sistema SPA
│   ├── templates.js     # Sistema de templates
│   ├── validation.js    # Validação de formulários
│   ├── utils.js         # Funções utilitárias
│   └── main.js          # Inicialização
├── project/
│   └── projeto.html
├── register/
│   └── cadastro.html
├── estilos.css      # CSS principal
├── index.html       # Página inicial
└── spa.html         # Versão SPA
```

## Características do CSS

### Variáveis CSS
Usei variáveis para facilitar a manutenção:
- Cores (primária, secundária, sucesso, erro, etc)
- Tamanhos de fonte (xs, sm, base, lg, xl, etc)
- Espaçamentos (de 4px até 64px)
- Bordas e sombras

### Sistema de Grid
Grid de 2, 3 e 4 colunas que se adapta para mobile.

### Componentes
- Botões (primário, outline, tamanhos variados)
- Cards com imagens
- Badges coloridos
- Alertas
- Modal
- Formulários com validação visual

### Responsivo
O site funciona em 5 tamanhos de tela:
- Mobile pequeno (até 576px)
- Mobile grande (576-768px)
- Tablet (768-992px)
- Desktop (992-1200px)
- Desktop grande (1200px+)

### Menu Mobile
Menu hambúrguer que abre um menu lateral em telas pequenas.

## Funcionalidades

### Página Inicial
- Banner principal (hero)
- Estatísticas da ONG
- Seção sobre a organização
- Informações de contato

### Página de Projetos
- Cards dos projetos
- Informações sobre voluntariado
- Formas de doar

### Página de Cadastro
- Formulário completo
- Validação dos campos
- Máscaras para CPF, telefone e CEP
- Modal de confirmação

## Como Usar

### Versão Estática
1. Abra o arquivo `index.html` no navegador
2. Navegue entre as páginas pelo menu
3. Teste o formulário de cadastro

### Versão SPA
1. Abra o arquivo `spa.html` no navegador
2. Navegue entre as páginas sem recarregar
3. Teste o formulário com validação avançada
4. Veja as mensagens de erro em tempo real

## Requisitos Atendidos

### Entrega 2 - CSS3
✅ Sistema de design com variáveis CSS  
✅ 8+ cores definidas  
✅ 5+ tamanhos de fonte  
✅ Espaçamento modular  
✅ Grid de 12 colunas adaptável  
✅ Flexbox para componentes  
✅ 5 breakpoints responsivos  
✅ Menu hambúrguer mobile  
✅ Cards responsivos  
✅ Botões com estados hover/focus/active  
✅ Formulários com validação visual  
✅ Componentes: alerts, badges, modal  
✅ CSS modular organizado

### Entrega 3 - JavaScript
✅ Sistema SPA (Single Page Application)  
✅ Manipulação do DOM  
✅ Sistema de templates JavaScript  
✅ Validação de formulários  
✅ Verificação de consistência de dados  
✅ Avisos de preenchimento incorreto  
✅ Validação de campos obrigatórios  
✅ Máscaras de input (CPF, telefone)  
✅ localStorage para armazenamento  
✅ Código JavaScript modular  

## Autor
Adriano Rodrigues

Projeto desenvolvido para a disciplina de Desenvolvimento Front-End.

---

🐾 ONG Amigão - Transformando vidas desde 2025
