async function verificaUsuario() {
  const res = await fetch("json/usuarios.json");
  const contato = await res.json();
  usuarioSistema = document.getElementById('usuario')
  senhaSistema = document.getElementById('senha')
//  document.getElementById("valor_usuario").innerHTML = usuarioSistema[0].defaultvalue;
  var user = contato.find((item) => { return item.usuario == usuarioSistema.value })
  if (user) {
    if (user.senha == senhaSistema.value) {
      window.location = "./home.html?name="+document.getElementById('usuario').value;
    }
    else {
      alert("Senha invalida")
    }
  } 
  else { 
    alert("Usuário não encontrado") 
  }
}
