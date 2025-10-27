# 🐾 ONG Amigão - Site Institucional

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)]()
[![WCAG 2.1](https://img.shields.io/badge/WCAG-2.1%20AA-green)]()

## 📖 Sobre o Projeto

Site institucional da ONG Amigão, uma organização dedicada ao resgate e bem-estar de animais abandonados desde 2014. Desenvolvido com HTML5, CSS3 e JavaScript puro, seguindo as melhores práticas de desenvolvimento web, acessibilidade WCAG 2.1 AA e padrões semânticos.

### Duas Versões Disponíveis

- **Versão Estática**: Navegação tradicional com múltiplas páginas HTML
- **Versão SPA**: Single Page Application com navegação instantânea

## 🚀 Tecnologias Utilizadas

### Front-end
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização modular (Grid, Flexbox, Variáveis CSS)
- **JavaScript ES6+** - Interatividade e SPA
- **Git/GitHub** - Controle de versão

### Metodologias
- Mobile First Design
- BEM Methodology (CSS)
- Commits Semânticos
- WCAG 2.1 (Nível AA)
- GitFlow Simplificado

## 📁 Estrutura do Projeto

```
ong-amigao/
├── index.html              # Página inicial (versão estática)
├── spa.html                # Página SPA (versão dinâmica)
├── project/
│   └── projeto.html        # Página de projetos
├── register/
│   └── cadastro.html       # Formulário de cadastro
│
├── css/                    # Estilos modulares
│   ├── variables.css       # Variáveis CSS (cores, fontes)
│   ├── reset.css           # Reset de estilos do navegador
│   ├── base.css            # Estilos base
│   ├── layout.css          # Grid e Flexbox
│   ├── navigation.css      # Menu e navegação
│   ├── components.css      # Botões, cards, etc
│   ├── forms.css           # Formulários
│   ├── utilities.css       # Classes utilitárias
│   ├── responsive.css      # Media queries
│   ├── validation-styles.css # Estilos de validação
│   └── accessibility.css   # Acessibilidade (WCAG)
│
├── js/                     # JavaScript modular
│   ├── main.js             # Inicialização
│   ├── spa.js              # Sistema SPA
│   ├── templates.js        # Templates das páginas
│   ├── validation.js       # Validação de formulários
│   └── utils.js            # Funções utilitárias
│
├── assets/                 # Imagens
├── estilos.css             # CSS principal (importa módulos)
├── README.md               # Documentação
├── GIT-INSTRUCTIONS.md     # Instruções Git
└── .gitignore              # Arquivos ignorados
```

## ⚙️ Funcionalidades

### 📱 Sistema SPA (Single Page Application)
- **Navegação sem reload**: Troca de páginas instantânea
- **Gerenciamento de rotas**: Sistema de hash (#home, #projetos, #cadastro)
- **Templates dinâmicos**: Conteúdo gerado via JavaScript
- **Performance otimizada**: Carrega recursos apenas uma vez

### 🎨 Interface e Componentes
- **Design responsivo**: Funciona em mobile, tablet e desktop
- **Menu hamburger**: Navegação mobile intuitiva
- **Modo escuro**: Alterna entre tema claro e escuro
- **Botões e cards**: Componentes visuais consistentes
- **Animações suaves**: Transições e hover effects

### ✅ Validação de Formulários
- **Validação em tempo real**: Feedback imediato ao usuário
- **Campos obrigatórios**: Destaque visual de campos vazios
- **Validação de email**: Verifica formato correto
- **Validação de CPF**: Verifica 11 dígitos
- **Validação de telefone**: Formato brasileiro
- **Máscaras automáticas**: CPF (000.000.000-00) e Telefone ((00) 00000-0000)
- **Mensagens de erro**: Feedback claro e objetivo
- **Estados visuais**: Verde (sucesso) e Vermelho (erro)

### ♿ Acessibilidade (WCAG 2.1 AA)
- **Navegação por teclado**: Tab, Enter, Esc funcionam em todos componentes
- **ARIA labels**: Descrições para leitores de tela
- **Contraste adequado**: Mínimo 4.5:1 para texto
- **Skip links**: Pular para conteúdo principal
- **Focus visible**: Indicação clara do elemento focado
- **Modo alto contraste**: Suporte para `prefers-contrast`
- **Movimento reduzido**: Suporte para `prefers-reduced-motion`
- **Modo escuro acessível**: Cores ajustadas para melhor leitura

### 💾 Armazenamento Local
- **localStorage**: Salva tema escolhido (claro/escuro)
- **Persistência**: Configurações mantidas entre sessões

## 🎯 Como Usar

### Versão Estática (Multi-page)
1. Abra `index.html` no navegador
2. Navegue pelos links do menu
3. Cada página recarrega normalmente

### Versão SPA (Single Page)
1. Abra `spa.html` no navegador
2. Clique nos links do menu
3. Note que a página NÃO recarrega!
4. Teste o botão de modo escuro (🌙/☀️)
5. Acesse "Cadastro" e teste a validação

### Testando Acessibilidade
- **Teclado**: Use `Tab` para navegar, `Enter` para ativar
- **Leitor de tela**: Ative NVDA/JAWS e navegue pelo site
- **Modo escuro**: Clique no botão 🌙 no header
- **Zoom**: Aumente o zoom do navegador (Ctrl/Cmd +)

## 🧪 Testes de Validação

### Campos do Formulário
1. **Nome**: Deixe vazio → Veja erro "Campo obrigatório"
2. **Email**: Digite "teste" → Veja erro "Email inválido"
3. **CPF**: Digite "123" → Veja erro "CPF deve ter 11 dígitos"
4. **Telefone**: Digite "999" → Veja erro "Telefone incompleto"
5. **Preencha corretamente** → Campos ficam verdes ✅

### Navegação
- Clique em "Projetos" → Troca conteúdo
- Clique em "Cadastro" → Mostra formulário
- Clique em "Início" → Volta para home
- Aperte F5 → Mantém página atual (via hash)

## 📋 Checklist de Entregas

### ✅ Entrega 1 - HTML
- [x] Estrutura HTML5 semântica
- [x] 3 páginas (Home, Projetos, Cadastro)
- [x] Formulário completo
- [x] Meta tags (author, description, keywords)

### ✅ Entrega 2 - CSS
- [x] CSS modular organizado
- [x] Design responsivo (mobile, tablet, desktop)
- [x] Grid e Flexbox
- [x] Variáveis CSS
- [x] Menu hamburger mobile
- [x] Componentes (botões, cards, alerts)

### ✅ Entrega 3 - JavaScript
- [x] Sistema SPA (Single Page Application)
- [x] Manipulação do DOM
- [x] Sistema de templates JavaScript
- [x] Validação de formulários
- [x] Verificação de consistência de dados
- [x] Avisos de preenchimento incorreto
- [x] Máscaras de input (CPF, telefone)
- [x] localStorage
- [x] Código JavaScript modular

### ✅ Entrega 4 - Acessibilidade e Deploy
- [x] Navegação por teclado
- [x] ARIA labels e roles
- [x] Contraste 4.5:1
- [x] Suporte a leitores de tela
- [x] Modo escuro acessível
- [x] Alto contraste (prefers-contrast)
- [x] Movimento reduzido (prefers-reduced-motion)
- [x] Skip links
- [x] .gitignore criado
- [x] Commits semânticos
- [x] README completo
- [x] Instruções Git

## 🌐 Deploy

### GitHub Pages
1. Faça push para o GitHub
2. Vá em Settings → Pages
3. Selecione branch `main`
4. Clique em Save
5. Acesse: `https://seu-usuario.github.io/ong-amigao/spa.html`

### Vercel
1. Conecte seu repositório GitHub
2. Configure build: (vazio, é HTML puro)
3. Deploy automático

## 📚 Referências

- [MDN Web Docs](https://developer.mozilla.org/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11y Project](https://www.a11yproject.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 👨‍💻 Autor

**Adriano Rodrigues**

Projeto desenvolvido para a disciplina de Desenvolvimento Front-End.

📧 Contato: [seu-email@exemplo.com]  
🔗 GitHub: [github.com/seu-usuario]

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

---

🐾 **ONG Amigão** - Transformando vidas desde 2014  
💙 Feito com dedicação para ajudar os animais
