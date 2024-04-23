$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            endereço:{
                required: false
            },
            cep: {
                required: true
            }
        },
        messages:{
            nome: 'Por favor, digite o seu nome',
            telefone: 'Por favor, digite seu telefone',
            cpf: 'Por favor digite o seu CPF',
            email: 'Por favor, digite seu email',
            endereço: 'Por favor digite o seu endereço',
            cep: 'Por favor digite o seu CEP'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})
