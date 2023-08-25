/* Tulis Javascript Di bawah Sini */
var sumber = 'https://rikikurnia.com/prakerja/api/kopi';
var sumber2 = './assets/data/products.json';

select_kopi.onchange = function () {
  var dipilih = select_kopi.value;
  console.log('Nilai Kopi Diganti ke ' + dipilih);

  $.getJSON(sumber2).then(function (data) {
    var data_kopi = data[dipilih];
    console.log(data_kopi);
    /* Kode ketiga paste di bawah sini jangan lewat }) */
    baris_produk.innerHTML = '';
    data_kopi.forEach((item) => {
      baris_produk.innerHTML += `<div class="col mb-3 shadow">
              <div class="card">
                      <img src="${item.foto}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title fs-3">${item.nama}</h5>
                          <div class="row hargasize my-4">
                              <div class="col fs-4">
                                  ${item.size}
                              </div>
                              <div class="col fw-bold text-secondary fs-4">
                                  ${item.harga}
                              </div>
                          </div>
                          <a href="${item.link}" class="btn btn-outline-light btn-secondary w-100 fs-4">
                              <i class="bi bi-cart-check"></i> Beli
                          </a>
                      </div>
                  </div>
              </div>`;
    });
  });
};
select_harga.onchange = function () {
  var dipilih = select_harga.value;
  console.log('Nilai Kopi Diganti ke ' + dipilih);

  $.getJSON(sumber2).then(function (data) {
    var data_kopi = data[dipilih];
    console.log(data_kopi);
    /* Kode ketiga paste di bawah sini jangan lewat }) */
    baris_produk.innerHTML = '';
    data_kopi.forEach((item) => {
      baris_produk.innerHTML += `<div class="col mb-3 shadow">
              <div class="card">
                      <img src="${item.foto}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title fs-3">${item.nama}</h5>
                          <div class="row hargasize my-4">
                              <div class="col fs-4">
                                  ${item.size}
                              </div>
                              <div class="col fw-bold text-secondary fs-4">
                                  ${item.harga}
                              </div>
                          </div>
                          <a href="${item.link}" class="btn btn-outline-light btn-secondary w-100 fs-4">
                              <i class="bi bi-cart-check"></i> Beli
                          </a>
                      </div>
                  </div>
              </div>`;
    });
  });
};

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();
  searchFoods(searchTerm);
});

function searchFoods(searchTerm) {
  fetch('./assets/data/search.json')
    .then((response) => response.json())
    .then((data) => {
      const results = [];
      for (const key in data) {
        results.push(...data[key].filter((food) => food.nama.toLowerCase().includes(searchTerm)));
      }
      displayResults(results);
    })
    .catch((error) => console.error('Error:', error));
}

function displayResults(results) {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = ''; // Bersihkan kontainer hasil sebelum menambahkan hasil baru

  if (results.length === 0) {
    resultsContainer.innerHTML = '<p>Tidak ada hasil yang ditemukan.</p>';
  } else {
    baris_produk.innerHTML = '';

    results.forEach((food) => {
      baris_produk.innerHTML = `
      <div class="col mb-3 shadow">
              <div class="card">
                      <img src="${food.foto}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title fs-3">${food.nama}</h5>
                          <div class="row hargasize my-4">
                              <div class="col fs-4">
                                  ${food.size}
                              </div>
                              <div class="col fw-bold text-secondary fs-4">
                                  ${food.harga}
                              </div>
                          </div>
                          <a href="${food.link}" class="btn btn-outline-light btn-secondary w-100 fs-4">
                              <i class="bi bi-cart-check"></i> Beli
                          </a>
                      </div>
                  </div>
              </div>
      `;
      resultsContainer.appendChild(foodCard);
    });
  }
}

/* Batas Akhir penulisan kode Javascript */
