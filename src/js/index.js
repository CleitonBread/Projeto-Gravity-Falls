// Passo 1
const ListaSelecaoPersonagens = document.querySelectorAll(".personagem");
// Passo 2
ListaSelecaoPersonagens.forEach(PersonagemBotao =>{
    PersonagemBotao.addEventListener("click", () =>{
        // Passo 3
        EsconderCartaoPersonagem();
        // Passo 4
        const IdPersonagemSelecionado = MostrarCartaoPersonagem(PersonagemBotao);
        // Passo 5
        EsconderPersonagemNaListagem();
        // passo 6
        AtivarPersonagemNaListagem(IdPersonagemSelecionado);
    })
})

// Funções
function AtivarPersonagemNaListagem(IdPersonagemSelecionado) {
    const PersonagemSelecionadoNaListagem = document.getElementById(IdPersonagemSelecionado);
    PersonagemSelecionadoNaListagem.classList.add("ativa");
}

function EsconderPersonagemNaListagem() {
    const PersonagemAtivaNaListagem = document.querySelector(".ativa");
    PersonagemAtivaNaListagem.classList.remove("ativa");
}

function MostrarCartaoPersonagem(PersonagemBotao) {
    const IdPersonagemSelecionado = PersonagemBotao.attributes.id.value;
    const IdDoCartaoPraAbrir = "cartao-" + IdPersonagemSelecionado;
    const CartaoPersonagemPraAbrir = document.getElementById(IdDoCartaoPraAbrir);
    CartaoPersonagemPraAbrir.classList.add("aberto");
    return IdPersonagemSelecionado;
}

function EsconderCartaoPersonagem() {
    const CartaoPersonagemAberto = document.querySelector(".aberto");
    CartaoPersonagemAberto.classList.remove("aberto");
}

