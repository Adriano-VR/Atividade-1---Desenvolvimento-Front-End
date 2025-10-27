const Templates = {
  get(page) {
    if (page === 'projetos') return this.projetos();
    if (page === 'cadastro') return this.cadastro();
    return this.home();
  },
  
  home() {
    return `
      <section style="background: linear-gradient(135deg, #2196f3, #1976d2); color: white; text-align: center; padding: 60px 20px; border-radius: 8px; margin-bottom: 30px;">
        <h1 style="color: white; font-size: 2.5rem;">Bem-vindo à ONG Amigão</h1>
        <p style="font-size: 1.2rem;">Transformando vidas de animais abandonados</p>
        <div style="display: flex; gap: 15px; justify-content: center; margin-top: 30px;">
          <a href="#cadastro" data-page="cadastro" class="btn btn-lg" style="background: white; color: #2196f3;">Seja Voluntário</a>
          <a href="#projetos" data-page="projetos" class="btn btn-outline btn-lg" style="border-color: white; color: white;">Projetos</a>
        </div>
      </section>

      <section>
        <h2>Quem Somos</h2>
        <p>Somos uma organização sem fins lucrativos que atua com animais abandonados.</p>
      </section>
    `;
  },
  
  projetos() {
    return `
      <section style="background: linear-gradient(135deg, #2196f3, #1976d2); color: white; text-align: center; padding: 60px 20px; border-radius: 8px; margin-bottom: 30px;">
        <h1 style="color: white;">Nossos Projetos</h1>
      </section>

      <section>
        <h2>Resgate e Tratamento</h2>
        <p>Resgatamos animais em situação de risco e oferecemos tratamento veterinário completo.</p>
      </section>

      <section>
        <h2>Programa de Adoção</h2>
        <p>Conectamos animais resgatados com famílias amorosas.</p>
      </section>
    `;
  },
  
  cadastro() {
    return `
      <section style="background: linear-gradient(135deg, #2196f3, #1976d2); color: white; text-align: center; padding: 60px 20px; border-radius: 8px; margin-bottom: 30px;">
        <h1 style="color: white;">Cadastro de Voluntário</h1>
      </section>

      <section>
        <h2>Formulário de Cadastro</h2>
        <form id="cadastroForm">
          <fieldset>
            <legend>Dados Pessoais</legend>
            
            <div class="form-group">
              <label>Nome Completo *</label>
              <input type="text" id="nome" required placeholder="Digite seu nome completo">
              <span class="error-message" id="nome-error"></span>
            </div>
            
            <div class="form-group">
              <label>E-mail *</label>
              <input type="email" id="email" required placeholder="seu@email.com">
              <span class="error-message" id="email-error"></span>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>CPF *</label>
                <input type="text" id="cpf" required placeholder="123.456.789-00">
                <span class="error-message" id="cpf-error"></span>
              </div>

              <div class="form-group">
                <label>Telefone *</label>
                <input type="tel" id="telefone" required placeholder="(11) 99999-9999">
                <span class="error-message" id="telefone-error"></span>
              </div>
            </div>
          </fieldset>

          <div class="form-actions">
            <button type="reset" class="btn btn-outline">Limpar</button>
            <button type="submit" class="btn btn-primary btn-lg">Enviar</button>
          </div>
        </form>
      </section>
    `;
  }
};
