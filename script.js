window.addEventListener("load", init);
const KUTYAK = [
  { id: 1, nev: "Manó", fajta: "puli", nem: "szuka" },
  { id: 2, nev: "Tappancs", fajta: "keverék", nem: "kan" },
  { id: 3, nev: "Hógolyó", fajta: "puli", nem: "kan" },
  { id: 4, nev: "Totó", fajta: "pumi", nem: "szuka" },
  { id: 5, nev: "Rexi", fajta: "farkaskutya", nem: "szuka" },
  { id: 6, nev: "Pamacs", fajta: "pumi", nem: "szuka" },
];

let kartyak;

function init() {
  kartyak = document.querySelector(".kartyak");
  kartyakLetrehozasa();
}

function kartyakLetrehozasa() {
  for (let i = 0; i < KUTYAK.length; i++) {
    const KARTYA = gyerekElemLetrehozo(kartyak, "div", "kartya");
    const KARTYA_FEJ = gyerekElemLetrehozo(KARTYA, "div", "kartya-fejlec");
    const CIM = gyerekElemLetrehozo(KARTYA_FEJ, "h3");
    const KARTYA_TARTALOM = gyerekElemLetrehozo(
      KARTYA,
      "div",
      "kartya-tartalom"
    );

    const KARTYA_ADATOK_LISTA = gyerekElemLetrehozo(
      KARTYA_TARTALOM,
      "ul",
      "kartya-adatok"
    );

    const TORLO_GOMB = gyerekElemLetrehozo(
      KARTYA_TARTALOM,
      "button",
      "torlo-gomb"
    );

    KARTYA.setAttribute("index", i + 1);

    for (const KEY in KUTYAK[i]) {
      const LI = gyerekElemLetrehozo(KARTYA_ADATOK_LISTA, "li");
      LI.innerText = `${KEY}: ${KUTYAK[i][KEY]}`;
    }

    CIM.innerText = `KÁRTYA #${i + 1}`;
    TORLO_GOMB.innerText = "Törlés";
    TORLO_GOMB.addEventListener("click", listaElemTorlese);
  }
}

function listaElemTorlese(e) {
  let szulo = e.target.parentNode.parentNode;
  let azon = szulo.attributes["index"].value;

  let i = 0;
  while (KUTYAK[i].id != azon) i++;

  KUTYAK.splice(i, 1);
  szulo.remove();
}

function gyerekElemLetrehozo(szulo, gyerek, ...osztalyok) {
  const GYEREK_ELEM = document.createElement(gyerek);
  szulo.appendChild(GYEREK_ELEM);
  if (osztalyok)
    for (let osztaly of osztalyok) GYEREK_ELEM.classList.add(osztaly);

  return GYEREK_ELEM;
}
