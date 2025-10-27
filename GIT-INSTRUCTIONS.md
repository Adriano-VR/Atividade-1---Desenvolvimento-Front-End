# 📝 Instruções de Git - Projeto ONG Amigão

## Comandos Básicos Utilizados

### 1. Inicialização
```bash
git init
git add .
git commit -m "feat: estrutura inicial do projeto"
```

### 2. Commits Semânticos
Usamos convenção de commits para histórico organizado:

```bash
git commit -m "feat: adiciona página inicial HTML"
git commit -m "style: implementa CSS modular"
git commit -m "feat: adiciona sistema SPA"
git commit -m "feat: implementa validação de formulários"
git commit -m "feat: adiciona acessibilidade WCAG 2.1"
git commit -m "docs: atualiza README"
```

**Prefixos usados:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `style`: Mudanças de estilo/CSS
- `docs`: Documentação
- `refactor`: Refatoração de código

### 3. Branches (GitFlow Simplificado)
```bash
# Criar branch para desenvolvimento
git checkout -b develop

# Criar branch para funcionalidade
git checkout -b feature/spa-system

# Voltar para main
git checkout main

# Fazer merge
git merge develop
```

### 4. GitHub
```bash
# Adicionar repositório remoto
git remote add origin https://github.com/seu-usuario/ong-amigao.git

# Enviar para GitHub
git push -u origin main

# Criar release/tag
git tag -a v1.0.0 -m "Versão 1.0.0 - Entrega Final"
git push origin v1.0.0
```

## Histórico de Desenvolvimento

### v0.1.0 - Entrega 1 (HTML)
- Estrutura HTML semântica
- 3 páginas principais
- Formulário de cadastro

### v0.2.0 - Entrega 2 (CSS)
- CSS modular organizado
- Design responsivo
- Sistema de cores e variáveis

### v0.3.0 - Entrega 3 (JavaScript)
- Sistema SPA
- Templates dinâmicos
- Validação de formulários

### v1.0.0 - Entrega 4 (Deploy e Acessibilidade)
- Acessibilidade WCAG 2.1 AA
- Modo escuro
- Navegação por teclado
- Otimizações
- Documentação completa

## Autor
Adriano Rodrigues - 2024

