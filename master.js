function logar() {
    var usuario = document.getElementById('usuario').value;// atribui o valor digitado a variavel usuario
    var senha = document.getElementById('senha').value; // atribui o valor digitado a variavel senha
    //compara se os valores digitados corresponde aos valores salvos previamente
    //se corretos avisa de login com sucesso e chama a pagina de controle
    if(usuario == "admin" && senha == "admin"){
        alert('login efetuado com sucesso');
        location.href = "controlbarb.html"; 
    }
    //compara se os valores digitados corresponde aos valores salvos previamente
    //se não conferem avisa que dados estão invalidos e limpa os campos preenchidos
    else{
        alert('Usuario e/ou senha inválidos');
        document.getElementById('usuario').value=''; // Limpa o campo
        document.getElementById('senha').value=''; // Limpa o campo
        
    }
} 