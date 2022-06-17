
/*Mostrar barra de pesquisa*/
var on = true;

function mostraDiv() {
    document.getElementById("areaPesquisa").style.display = "none";
}
function mostraDiv() {
    document.getElementById("areaPesquisa").style.display = "block";
}
function mostraDiv() { 

    if (on) {
        document.getElementById("areaPesquisa").style.display = "block";
        on = false;
    } else {
        document.getElementById("areaPesquisa").style.display = "none";
        on = true;
    }

}

/*Mostrar perfil*/

function mostraPerfil() {
    document.getElementById("profileContainer").style.display = "none";
}
function mostraPerfil() {
    document.getElementById("profileContainer").style.display = "block";
}
function mostraPerfil() {

    if (on) {
        document.getElementById("profileContainer").style.display = "block";
        on = false;
    } else {
        document.getElementById("profileContainer").style.display = "none";
        on = true;
    }

}
