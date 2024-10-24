function mostrarDatos(name = '', apellidoPaterno = '', apellidoMaterno = '', email = '', password = '') {
    document.getElementById('static-name').value = name;
    document.getElementById('static-apellido-paterno').value = apellidoPaterno;
    document.getElementById('static-apellido-materno').value = apellidoMaterno;
    document.getElementById('static-email').value = email;
    document.getElementById('static-password').value = password;
    
    document.getElementById('form-registrar').reset();
    
    document.getElementById('div-formulario').style.display = 'block';
  }
  
  function validarDatos() {
    let name = document.getElementById('name').value;
    let apellidoPaterno = document.getElementById('apellidoPaterno').value;
    let apellidoMaterno = document.getElementById('apellidoMaterno').value;
    let email = document.getElementById('inputEmail4').value;
    let password = document.getElementById('password').value;
    let repassword = document.getElementById('re-password').value;
  
    if (name === '' || apellidoPaterno === '' || apellidoMaterno === '' || email === '' || password === '' || repassword === '') {
      document.getElementById('div-alert').style.display = 'block';
    } else {
      document.getElementById('div-alert').style.display = 'none';
      mostrarDatos(name, apellidoPaterno, apellidoMaterno, email, password);
    }
  }
  
  function validatePassword() {
    let pass = document.getElementById('password').value;
    let repass = document.getElementById('re-password').value;
  
    if (pass !== repass) {
      document.getElementById('div-alert-password').style.display = 'block';
    } else {
      document.getElementById('div-alert-password').style.display = 'none';
    }
  }
  function mostrarDatos(name = '', apellidoPaterno = '', apellidoMaterno = '', email = '', password = '') {
    document.getElementById('name-registrado').value = name;
    document.getElementById('apellido-paterno-registrado').value = apellidoPaterno;
    document.getElementById('apellido-materno-registrado').value = apellidoMaterno;
    document.getElementById('email-registrado').value = email;
    document.getElementById('password-registrado').value = password;
    
    document.getElementById('form-registrar').reset();
    
    document.getElementById('div-formulario').style.display = 'block';
  }
  
  function validarDatos() {
    let name = document.getElementById('name').value;
    let apellidoPaterno = document.getElementById('apellidoPaterno').value;
    let apellidoMaterno = document.getElementById('apellidoMaterno').value;
    let email = document.getElementById('inputEmail4').value;
    let password = document.getElementById('password').value;
    let repassword = document.getElementById('re-password').value;
  
    if (name === '' || apellidoPaterno === '' || apellidoMaterno === '' || email === '' || password === '' || repassword === '') {
      document.getElementById('div-alert').style.display = 'block';
    } else {
      document.getElementById('div-alert').style.display = 'none';
      mostrarDatos(name, apellidoPaterno, apellidoMaterno, email, password);
    }
  }
  
  function validatePassword() {
    let pass = document.getElementById('password').value;
    let repass = document.getElementById('re-password').value;
  
    if (pass !== repass) {
      document.getElementById('div-alert-password').style.display = 'block';
    } else {
      document.getElementById('div-alert-password').style.display = 'none';
    }
  }
  function limpiarDatosRegistro() {
    document.getElementById('name-registrado').value = '';
    document.getElementById('apellido-paterno-registrado').value = '';
    document.getElementById('apellido-materno-registrado').value = '';
    document.getElementById('email-registrado').value = '';
    document.getElementById('password-registrado').value = '';
    document.getElementById('div-formulario').style.display = 'none'; 
  }
    