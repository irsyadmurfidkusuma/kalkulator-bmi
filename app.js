// mengambil semua elemen
const nama = document.querySelector('.nama')
const umur = document.querySelector('.umur')
const beratBadan = document.querySelector('.berat-badan')
const tinggiBadan = document.querySelector('.tinggi-badan')
const tombolHitung = document.querySelector('.btn-hitung')
const modalBody = document.querySelector('.modal-body')
const form = document.querySelector('#myForm')

// document.querySelector(".berat-badan").addEventListener("input", x => console.log(x.target.value))

// saat tombol hitung diklik
tombolHitung.addEventListener('click', function () {
    // mengecek apakah ada data yg diinput atau tidak
    if (beratBadan.value <= 0 || tinggiBadan.value <= 0 || nama.value <= 0 || umur <= 0) {
        form.reset()
        return modalBody.innerHTML = `<div class="alert alert-danger" role="alert">
        Mohon Isi data yang valid
      </div>`

    }
    let hasilIndex = hitungIndex(beratBadan.value, tinggiBadan.value)
    let hasilKategori = kategoriIndex(hasilIndex)
    let tips = tipsKategori(hasilKategori)


    modalBody.innerHTML = buatElemen(nama.value, umur.value, hasilIndex, hasilKategori, tips)


    // console.log(tips)
})

// reset from
const reset = document.querySelector('.btn-reset')

reset.addEventListener('click', function () {
    form.reset()
    window.location.reload();
})

// hitung indeks

const hitungIndex = (bb, tb) => {
    let tinggiBadan = tb / 100
    let hasil = bb / (tinggiBadan * tinggiBadan)
    return hasil
}

// mengisi kategori
const kategoriIndex = (index) => {
    let kategori = ''

    if (index <= 18.4) {
        kategori = 'Kurus'
    } else if (index > 18.4 && index <= 25.00) {
        kategori = 'Normal'
    } else if (index > 25.00 && index <= 27.00) {
        kategori = 'Gemuk'
    } else if (index > 27.00) {
        kategori = 'Obesitas'
    }

    return kategori

}

// menentukan tips
const tipsKategori = (kategori) => {
    let tips = ''
    if (kategori === 'Kurus') {
        tips = 'Perbaiki kembali pola makannya dan olahraga agar lebih sehat!'
    } else if (kategori === 'Normal') {
        tips = 'Tetap jaga pola makan yang baik agar tetap sehat ya!'
    } else if (kategori === 'Gemuk') {
        tips = 'Kurangi makanan berkarbohidrat dan kandungan gula yang berlebihan ya serta jangan lupa olahraga, biar lebih sehat!'
    } else if (kategori === 'Obesitas') {
        tips = 'Jaga pola makan, perhatikan kandungan gula dan karbohidrat dan jangan lupa olahraga ya agar menjadi lebih sehat!'
    }

    return tips
}


const buatElemen = (n, u, has, kat, tips) => {
    let el = `<ul class="list-group">
                    <li class="list-group-item"><strong>Nama : </strong>${n}</li>
                    <li class="list-group-item"><strong>Umur : </strong>${u}</li>
                    <li class="list-group-item"><strong>Hasil : </strong>${has}</li>
                    <li class="list-group-item"><strong>Kategori : </strong>${kat}</li>
                    <li class="list-group-item"><strong>Tips : </strong>${tips}</li>
            </ul>`

    return el

}

 // let hasil
    // let kategori
    // let bb = beratBadan.value
    // let tb = tinggiBadan.value / 100

    // hasil = bb / (tb * tb)

    // if (hasil <= 18.4) {
    //     kategori = 'Kurus'
    // } else if (hasil > 18.4 && hasil <= 25.0) {
    //     kategori = 'Normal'
    // } else if (hasil > 25.0 && hasil <= 27.0) {
    //     kategori = 'Gemuk'
    // } else if (hasil > 27.0) {
    //     kategori = 'Obesitas'
    // } // let hasil
    // let kategori
    // let bb = beratBadan.value
    // let tb = tinggiBadan.value / 100

    // hasil = bb / (tb * tb)

    // if (hasil <= 18.4) {
    //     kategori = 'Kurus'
    // } else if (hasil > 18.4 && hasil <= 25.0) {
    //     kategori = 'Normal'
    // } else if (hasil > 25.0 && hasil <= 27.0) {
    //     kategori = 'Gemuk'
    // } else if (hasil > 27.0) {
    //     kategori = 'Obesitas'
    // }