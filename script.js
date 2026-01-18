fetch("https://opensheet.elk.sh/1tmDrpPKbK3UvcWoA55g1cZpGVF_AcpkpPc30qmxEU8U/Sheet1")
.then(res => res.json())
.then(data => {

  const menuDiv = document.getElementById("menu-items");
  const categories = {};

  // Grupi sipas kategorive
  data.forEach(item => {
    if (item.Aktive === "po") {
      if (!categories[item.Kategoria]) {
        categories[item.Kategoria] = [];
      }
      categories[item.Kategoria].push(item);
    }
  });

  // Printimi në HTML
  for (let cat in categories) {
    let html = `<h3 class="menu-category">${cat}</h3>`;

    categories[cat].forEach(product => {
      html += `
        <div class="menu-item">
          <span>${product.Emri}</span>
          <strong>${product.Cmimi} ALL</strong>
        </div>
      `;
    });

    menuDiv.innerHTML += html;
  }

});
