var cookies = document.getElementById('cookies');
var dps = document.getElementById('dps');
var click = document.getElementById('click');
var cookieImage = document.getElementById('clickerImg');
var qntdCookies = 0;
var errorVovo = document.getElementById('errorVovo');
var errorCursor = document.getElementById('errorCursor');
var v = 10;
var c = 10;
var vovos = document.getElementById('vovos')
var cursores = document.getElementById('cursores');
var qntdVovos = 0;
var clickPower = 1;

function clicar() {
    qntdCookies += clickPower;
    cookies.innerHTML = 'Cookies: ' + qntdCookies.toFixed(0);
    errorCursor.innerHTML = "" ;
    errorVovo.innerHTML = "";
}

function vovo() {
    if (qntdCookies >= v) {
        setInterval(() => {
            qntdCookies += 1;
            cookies.innerHTML = 'Cookies: ' + qntdCookies.toFixed(0);
        }, 1000);
        qntdCookies -= v
        cookies.innerHTML = 'Cookies: ' + qntdCookies.toFixed(0);
        v *= 1.5
        qntdVovos += 1;
        dps.innerHTML = 'Comprar vovó <br> (' + v.toFixed(0) + ' cookies)';
        errorVovo.innerHTML = "" 
        vovos.innerHTML = "Você possui " + qntdVovos + " vovós que produzem " + qntdVovos + " cookies por segundo"; 
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
        cookies.innerHTML = 'Cookies: ' + qntdCookies.toFixed(0);
        clickPower += 1;
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