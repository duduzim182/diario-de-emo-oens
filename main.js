function analizarHumor(texto){
    const positivo = ['feliz','alegre', 'animado','grato','otimo','bem' ,'contente','calmo']
    const negativo = ['triste','cansado' ,'chatedo','pessimo','mal','deprimido','ansioso','estressado','raiva']
    const textoMin = texto.lowerCase();
    let score = 0
    positivo.forEach(palavra => {
        if (textoMin.includes(palavra)) score++
    })
    negativo.forEach(palavra =>{
        if (textoMin.includes(palavra)) score--
    })
    if(score>0) return{ humor:'Feliz',emoji:'😂'};
    else if(score<0) return{humor:'trite',emoji:'😢'};
    else return{humor:'neutro',emoji:'😐'};
}
function salvarEntrada(){
  const usuario = document.getElementById("usuario").value.trim();
  const data = document.getElementById("data").value;
  const titulo = document.getElementById("titulo").value.trim();
  const texto = document.getElementById("texto").value.trim()
  if(!usuario || !data || !titulo || !texto){
    alert("por favor, preencha todos os campos");
    return;
  }
  const analise = analisarhumor(texto);
  const novaEntrada = {
    usuario,
    data,
    titulo,
    texto,
    humor:analise.humor,
    emoji:analise.emoji
  };
  
}