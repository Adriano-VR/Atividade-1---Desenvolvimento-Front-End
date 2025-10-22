# ONG Amigão - Website

Site desenvolvido para a ONG Amigão, uma organização que cuida de animais abandonados.

## Sobre o Projeto

Este é um site institucional com 3 páginas principais:
- Página inicial com informações sobre a ONG
- Página de projetos mostrando as iniciativas
- Página de cadastro para voluntários

## Tecnologias Usadas

- HTML5
- CSS3
- JavaScript

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
│   └── responsive.css
├── project/
│   └── projeto.html
├── register/
│   └── cadastro.html
├── estilos.css      # CSS principal
└── index.html       # Página inicial
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

1. Abra o arquivo `index.html` no navegador
2. Navegue entre as páginas pelo menu
3. Teste o formulário de cadastro
4. Redimensione a janela para ver o layout responsivo

## Requisitos Atendidos

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

## Autor
Adriano Rodrigues

Projeto desenvolvido para a disciplina de Desenvolvimento Front-End.

---

🐾 ONG Amigão - Transformando vidas desde 2025
