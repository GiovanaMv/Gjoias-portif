$(document).ready(function () {
    // Máscara do telefone
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });

    // Validação do formulário
    $('#contato-form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor insira seu nome',
            telefone: 'Por favor insira seu número de telefone',
            email: 'Por favor insira seu email corretamente'
        },
        submitHandler: function (form) {
            alert('Formulário enviado com sucesso!');
            console.log(form);
            form.reset(); // Reseta os campos do formulário
        },
        invalidHandler: function (event, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incompletos`);
            }
        }
    });
});
