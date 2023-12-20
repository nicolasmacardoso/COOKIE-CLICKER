var cookies = document.getElementById('cookies');
var dps = document.getElementById('dps');
var click = document.getElementById('click');
var cookieImage = document.getElementById('clickerImg');
var qntdCookies = 10000;
var errorVovo = document.getElementById('errorVovo');
var errorCursor = document.getElementById('errorCursor');
var v = 10;
var c = 10;
var vovos = document.getElementById('vovos')
var cursores = document.getElementById('cursores');
var qntdVovos = 0;
var clickPower = 1;
var dezvezes = document.getElementById('dezvezes');
var supervovos = document.getElementById('supervovos');
var precoSecreto = 1000;
var cursorValue = 1;
var vovoValue = 1;
var precoSecreto = 1000;
var cookiesPorVovo = 0;
var cookiesPorSegundo;

function verificarBotaoSecreto() {
    if (qntdCookies >= precoSecreto) {
        dezvezes.style.display = 'block';
        supervovos.style.display = 'block';
    } else {
        dezvezes.style.display = 'none';
        supervovos.style.display = 'none';
    }
}

function secreto() {
    qntdCookies -= precoSecreto;
    cookies.innerHTML = 'Cookies: ' + qntdCookies.toFixed(0);

    precoSecreto *= 10;

    clickPower *= 10;

    dezvezes.innerHTML = 'SUPER CURSOR<br> (' + precoSecreto + ' cookies)';
    supervovos.innerHTML = 'SUPER VOVÓ<br> (' + precoSecreto + ' cookies)';
    cursores.innerHTML = "Você está gerando " + clickPower + " cookies por clique.";

    cursorValue *= 10;
    verificarBotaoSecreto();
}

function supervovo() {
    if (qntdVovos > 2) {
        qntdCookies -= precoSecreto;
        cookies.innerHTML = 'Cookies: ' + qntdCookies.toFixed(0);

        precoSecreto *= 10;

        cookiesPorVovo *= 20;

        supervovos.innerHTML = 'SUPER VOVÓ<br> (' + precoSecreto + ' cookies)';
        dezvezes.innerHTML = 'SUPER CURSOR<br> (' + precoSecreto + ' cookies)';
        vovos.innerHTML = "Você possui " + qntdVovos + " vovós que produzem " + (cookiesPorVovo*10).toFixed(0) + " cookies por segundo";

        vovoValue *= 20;
        verificarBotaoSecreto();
    }
}

function clicar() {
    qntdCookies += clickPower;
    verificarBotaoSecreto();
    cookies.innerHTML = 'Cookies: ' + qntdCookies.toFixed(0);
    errorCursor.innerHTML = "" ;
    errorVovo.innerHTML = "";
}

function vovo() {
    if (qntdCookies >= v) {
        clearInterval(cookiesPorSegundo);

        cookiesPorVovo += vovoValue/10;

        cookiesPorSegundo = setInterval(() => {
            qntdCookies += cookiesPorVovo;
            verificarBotaoSecreto();
            cookies.innerHTML = 'Cookies: ' + qntdCookies.toFixed(0);
        }, 100);

        cookiesPorSegundo;
        qntdCookies -= v
        verificarBotaoSecreto();
        cookies.innerHTML = 'Cookies: ' + qntdCookies.toFixed(0);
        v *= 1.5
        qntdVovos += 1;
        dps.innerHTML = 'Comprar vovó <br> (' + v.toFixed(0) + ' cookies)';
        errorVovo.innerHTML = "" 
        qntdVovos === 1 ? vovos.innerHTML = "Você possui " + qntdVovos + " vovó que produz " + (cookiesPorVovo*10).toFixed(0) + " cookie por segundo" : 
                        vovos.innerHTML = "Você possui " + qntdVovos + " vovós que produzem " + (cookiesPorVovo*10).toFixed(0) + " cookies por segundo"; 
        errorCursor.innerHTML = "" 
    }
    else {
        errorVovo.innerHTML = "Você não possui " + v.toFixed(0) + " cookies."
        errorCursor.innerHTML = "" 
    }
}

function cursor() {
    if (qntdCookies >= c) {
        qntdCookies -= c;
        verificarBotaoSecreto();
        cookies.innerHTML = 'Cookies: ' + qntdCookies.toFixed(0);
        clickPower += cursorValue;
        c *= 2;
        click.innerHTML = 'Comprar cursor <br> (' + c + ' cookies)';
        cursores.innerHTML = "Você está gerando " + clickPower + " cookies por clique."; 
        errorCursor.innerHTML = "" ;
        errorVovo.innerHTML = "";
    } else {
        errorCursor.innerHTML = "Você não possui " + c.toFixed(0) + " cookies.";
        errorVovo.innerHTML = "";
    }
}

cookieImage.addEventListener('mousedown', function() {
    cookieImage.style.transform = 'scale(0.8)';
});

cookieImage.addEventListener('mouseup', function() {
    cookieImage.style.transform = 'scale(1)';
});