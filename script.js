window.addEventListener("load", init);
const KUTYAK = [
  { id: 1, nev: "Manó", fajta: "puli", nem: "szuka" },
  { id: 2, nev: "Tappancs", fajta: "keverék", nem: "kan" },
  { id: 3, nev: "Hógolyó", fajta: "puli", nem: "kan" },
  { id: 4, nev: "Totó", fajta: "pumi", nem: "szuka" },
  { id: 5, nev: "Rexi", fajta: "farkaskutya", nem: "szuka" },
  { id: 6, nev: "Pamacs", fajta: "pumi", nem: "szuka" },
];


function init() {
  kartyakLetrehozasa();
  tablazatLetrehozasa();
}

function kartyakLetrehozasa() {
  const KARTYAK = document.querySelector(".kartyak");
  KARTYAK.innerHTML = ""
  for (let i = 0; i < KUTYAK.length; i++) {
    const KARTYA = gyerekElemLetrehozo(KARTYAK, "div", "kartya");
    const CIM = gyerekElemLetrehozo(KARTYA, "h3", "kartya-fejlec");
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

    KARTYA.setAttribute("index", KUTYAK[i].id);

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
  const KARTYA = e.target.parentNode.parentNode;
  let azon = KARTYA.attributes["index"].value;

  let i = 0;
  while (KUTYAK[i].id != azon) i++;

  KUTYAK.splice(i, 1);
  elemTorlese(KARTYA);
  tablazatSorTorlese(i);
}

function gyerekElemLetrehozo(szulo, gyerek, ...osztalyok) {
  const GYEREK_ELEM = document.createElement(gyerek);
  szulo.appendChild(GYEREK_ELEM);
  if (osztalyok)
    for (let osztaly of osztalyok) GYEREK_ELEM.classList.add(osztaly);

  return GYEREK_ELEM;
}

function tablazatLetrehozasa() {
  const TBODY = document.querySelector("#tablazat tbody");
  TBODY.innerHTML = "";

  for (let i = 0; i < KUTYAK.length; i++) {
    const TABLAZAT_SOR = gyerekElemLetrehozo(TBODY, "tr");
    for (const key in KUTYAK[0]) {
      const TABLAZAT_MEZO = gyerekElemLetrehozo(TABLAZAT_SOR, "td");
      TABLAZAT_MEZO.innerText = KUTYAK[i][key];
    }
  }
}

function tablazatSorTorlese(index) {
  const QUERY = `#tablazat tbody tr:nth-of-type(${index + 1})`
  const SOR = document.querySelector(QUERY);
  elemTorlese(SOR);
}

function elemTorlese(elem) {
  const SZULO = elem.parentNode;
  SZULO.removeChild(elem);
}

function ujKutyaFelvitele(){
  const UJID = KUTYAK.length ? (KUTYAK[KUTYAK.length-1].id + 1) : 1
  const KNEVE = document.querySelector("#kneve").value
  const KFAJTA = document.querySelector("#kfajta").value
  const KNEME = document.querySelector("input[type=radio]:checked").value
  
  const KUTYA = {id: UJID, nev: KNEVE, fajta: KFAJTA, nem: KNEME}
  KUTYAK.push(KUTYA)
  kartyakLetrehozasa();
  tablazatLetrehozasa();
}
