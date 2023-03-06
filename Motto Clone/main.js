// Obtiene la posición del elemento en píxeles
var posicionElemento = document.getElementById("logo").offsetTop;

// Añade un evento de desplazamiento a la ventana
window.addEventListener("scroll", function () {
  // Obtiene la posición actual de desplazamiento en píxeles
  var posicionScroll = window.scrollY;
  var [logo, flag] = [
    document.getElementById("logo"),
    document.getElementById("flag"),
  ];
  var [menu2, workus, list] = [
    document.getElementById("menu2"),
    document.getElementById("workus"),
    document.getElementById("list"),
  ];
  // Compara la posición de desplazamiento actual con la posición del elemento
  if (posicionScroll >= posicionElemento + 6 * 16) {
    // Si la posición de desplazamiento actual es mayor o igual a la posición del elemento + 6rem, aplica el estilo alternativo
    logo.style.opacity = "0";
    flag.style.opacity = "1";

    workus.style.transform = "translateX(0%)";
    menu2.style.opacity = "1";
    menu2.style.transform = "translateX(0%)";
    showNav(list.children, "-100", 0);
  } else {
    // Si la posición de desplazamiento actual es menor que la posición del elemento + 6rem, elimina el estilo alternativo
    logo.style.opacity = "1";
    flag.style.opacity = "0";

    workus.style.transform = "translateX(50%)";
    menu2.style.opacity = "0";
    menu2.style.transform = "translateX(110%)";
    showNav(list.children, "0", 1);
  }
});

function showNav(array, value, opacity, delay = 0.05) {
  for (let i = 0; i < array.length; i++) {
    array[i].style.transform = `translateY(${value}px)`;
    array[i].style.opacity = `${opacity}`;
    array[array.length - i - 1].style.transitionDelay = `${delay * i}s`;
  }
}
