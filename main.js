function ValidarCpf(){

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebevento(evento){
        evento.preventDefault();

        let cpf = form.querySelector('.cpf');
        cpf = String(cpf.value);
        console.log(cpf);
        let cpflimpo = cpf.replace(/\D+/g, '');
        cpflimpo = Array.from(cpflimpo);
        console.log(cpflimpo.map(el => el));

        let x = cpflimpo.lenght;
        let conta = 0;
        contador = 10;

        for  ( x in cpflimpo.slice(0,-2)){
        conta = conta + (contador * cpflimpo[x]);
        contador --;
        }

        let digito1 = 11 - (conta % 11);
        if(digito1 > 9){
            digito1 = 0;
        };

        contador = 11;
        conta = 0;

        for  (x in cpflimpo.slice(0,-1)){
            conta = conta + (contador * cpflimpo[x]);
            contador --;
            }

        let digito2 = 11 - (conta % 11);
        if(digito2 > 9){
            digito2 = 0;
        };

        function checar(){
            if (cpflimpo[9] == digito1 && cpflimpo[10] == digito2){
                resultado.innerHTML = `Seu cpf ${cpf} é verdadeiro`
            }else{
                resultado.innerHTML = `Seu cpf ${cpf} é falso`
            }
        }
        
        checar();
    }

    form.addEventListener('submit',recebevento);
}

ValidarCpf();