window.addEventListener("load", init);
const KUTYAK = [
  { nev: "kutya1", fajta: "fajta1", nem: "szuka" },
  { nev: "kutya2", fajta: "fajta2", nem: "kan" },
  { nev: "kutya3", fajta: "fajta3", nem: "kan" },
  { nev: "kutya4", fajta: "fajta4", nem: "szuka" },
  { nev: "kutya5", fajta: "fajta5", nem: "kan" },
  { nev: "kutya6", fajta: "fajta6", nem: "szuka" },
];

let body;

function init() {
  body = document.querySelector("body");
  kartyakLetrehozasa();
}

function kartyakLetrehozasa() {
  for (let i = 0; i < KUTYAK.length; i++) {
    const KARTYA = gyerekElemLetrehozo(body, "div", "kartya");
    const KARTYA_FEJ = gyerekElemLetrehozo(KARTYA, "div", "kartya-fejlec")
    const CIM = gyerekElemLetrehozo(KARTYA_FEJ, "h2");
    const KARTYA_TARTALOM = gyerekElemLetrehozo(KARTYA, "div", "kartya-tartalom")
    const KARTYA_ADATOK_LISTA = gyerekElemLetrehozo(KARTYA_TARTALOM, "ul", "kartya-adatok");
    const TORLO_GOMB = gyerekElemLetrehozo(KARTYA_TARTALOM, "button", "torlo-gomb")

    for (const KEY in KUTYAK[i]) {
      const LI = gyerekElemLetrehozo(KARTYA_ADATOK_LISTA, "li");
      LI.innerText = `${KEY}: ${KUTYAK[i][KEY]}`;
    }
    CIM.innerText = `${i+1}. KÁRTYA`
    TORLO_GOMB.innerText = "Törlés"
  }
}

function gyerekElemLetrehozo(szulo, gyerek, ...osztalyok) {
  const GYEREK_ELEM = document.createElement(gyerek);
  szulo.appendChild(GYEREK_ELEM);
  if (osztalyok)
    for (let osztaly of osztalyok) GYEREK_ELEM.classList.add(osztaly);

  return GYEREK_ELEM;
}
