const products = [
  {name:"무선 마우스 A", category:"mouse", label:"마우스", spec:"예시 사양: 무선 · 기본형", price: "29,900원", alternative:"비슷한 용도의 대체 상품을 비교하는 자리"},
  {name:"무선 마우스 B", category:"mouse", label:"마우스", spec:"예시 사양: 무선 · 추가 버튼", price: "34,900원", alternative:"가격뿐 아니라 크기와 버튼 구성도 확인"},
  {name:"기계식 키보드 A", category:"keyboard", label:"키보드", spec:"예시 사양: 유선 · 텐키리스", price: "59,900원", alternative:"배열·스위치·연결 방식을 함께 비교"},
  {name:"기계식 키보드 B", category:"keyboard", label:"키보드", spec:"예시 사양: 유선 · 풀사이즈", price: "64,900원", alternative:"숫자 키패드가 필요한지 먼저 확인"},
  {name:"게이밍 헤드셋 A", category:"headset", label:"헤드셋", spec:"예시 사양: 유선 · 마이크 포함", price: "39,900원", alternative:"착용감·연결 단자·마이크를 비교"},
  {name:"게이밍 헤드셋 B", category:"headset", label:"헤드셋", spec:"예시 사양: 무선 · 마이크 포함", price: "79,900원", alternative:"무선 편의성과 배터리 시간을 비교"}
];
const grid = document.querySelector("#product-grid");
const search = document.querySelector("#search");
const category = document.querySelector("#category");
function render() {
  const q = search.value.trim().toLowerCase();
  const cat = category.value;
  const list = products.filter(p => (cat === "all" || p.category === cat) && (p.name + " " + p.label + " " + p.spec).toLowerCase().includes(q));
  grid.innerHTML = "";
  if (!list.length) {
    grid.innerHTML = '<div class="empty">검색 결과가 없습니다. 다른 검색어를 입력해 주세요.</div>';
    return;
  }
  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `<div class="product-top"><span class="product-type">${p.label}</span><span class="demo-label">가상 예시</span></div><h3>${p.name}</h3><p class="spec">${p.spec}</p><div class="price-row"><span class="price">${p.price}</span><span class="price-caption">실제 가격 아님</span></div><div class="alternative">${p.alternative}</div>`;
    grid.appendChild(card);
  });
}
search.addEventListener("input", render);
category.addEventListener("change", render);
render();
