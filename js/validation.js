const FormValidation = {
  init() {
    const form = document.getElementById('cadastroForm');
    if (!form) return;
    
    this.setupMasks();
    
    form.querySelectorAll('input').forEach(input => {
      input.addEventListener('blur', () => this.validate(input));
    });
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      form.querySelectorAll('input[required]').forEach(input => {
        if (!this.validate(input)) {
          isValid = false;
        }
      });
      
      if (isValid) {
        alert('Cadastro enviado com sucesso!');
        form.reset();
      } else {
        alert('Por favor, corrija os erros no formulário');
      }
    });
  },
  
  validate(input) {
    const value = input.value.trim();
    let error = '';
    
    if (input.hasAttribute('required') && !value) {
      error = 'Campo obrigatório';
    }
    else if (input.type === 'email' && value && !value.includes('@')) {
      error = 'Email inválido';
    }
    else if (input.id === 'cpf' && value) {
      const cpf = value.replace(/\D/g, '');
      if (cpf.length !== 11) {
        error = 'CPF deve ter 11 dígitos';
      }
    }
    else if (input.id === 'telefone' && value) {
      const tel = value.replace(/\D/g, '');
      if (tel.length < 10) {
        error = 'Telefone incompleto';
      }
    }
    
    const errorSpan = document.getElementById(`${input.id}-error`);
    
    if (error) {
      input.classList.add('error');
      input.classList.remove('success');
      if (errorSpan) errorSpan.textContent = error;
      return false;
    } else {
      input.classList.remove('error');
      input.classList.add('success');
      if (errorSpan) errorSpan.textContent = '';
      return true;
    }
  },
  
  setupMasks() {
    const cpf = document.getElementById('cpf');
    if (cpf) {
      cpf.addEventListener('input', (e) => {
        let v = e.target.value.replace(/\D/g, '');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        e.target.value = v;
      });
    }
    
    const tel = document.getElementById('telefone');
    if (tel) {
      tel.addEventListener('input', (e) => {
        let v = e.target.value.replace(/\D/g, '');
        v = v.replace(/(\d{2})(\d)/, '($1) $2');
        v = v.replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = v;
      });
    }
  }
};
