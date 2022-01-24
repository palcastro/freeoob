//Ejemplo JS
(function () {
    'use strict'
  
    // Para utilizar el boorstrap personalizado 
    var forms = document.querySelectorAll('.needs-validation')
  
    // Previene el envío de los datos en caso de que 
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()