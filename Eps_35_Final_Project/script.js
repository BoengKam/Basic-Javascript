// ambil elemen HTML untuk halaman utama

let areaMenu = document.getElementById("areaMenu");
let areaKeranjang = document.getElementById("areaKeranjang");
let totalHarga = document.getElementById("totalHarga");

// database dummy untuk menu warkop

let daftarMenu = ["Kopi Hitam", "Kopi Susu","Teh Manis","Mie Rebus","Roti Bakar"];
let hargaMenu = [5000,7000,2500,10000,12000];

// placeholder untuk keranjang
let keranjang = [];

function renderMenu(){
    let elemenHTML = "<ul class='list-group'>";

    for (let i=0; i < daftarMenu.length; i++){
        elemenHTML += `
            <li class='list-group-item d-flex justify-content-between align-items-center'>
                <div>
                    <h5 class='mb-0'>${daftarMenu[i]}</h5>
                    <small class='text-muted'>Rp.${hargaMenu[i]}</small>
                </div>
                <button class='btn btn-primary btn-sm' onclick='tambahKeKeranjang(${i})'>Tambah</button>
            </li>
        `;
    }

    elemenHTML += "</ul>";
    areaMenu.innerHTML = elemenHTML;
}

function tambahKeKeranjang(index){
    keranjang.push(index);
    renderKeranjang();
}

function hapusDariKeranjang(index){
    keranjang.splice(index, 1);
    renderKeranjang();
}

function renderKeranjang(){
    if(keranjang.length === 0){
        areaKeranjang.innerHTML = `
            <p class= 'text-muted text-center'>Keranjang masih kosong</p>
        `;
        totalHarga.innerHTML = `
            RP. 0
        `;
        return;
    }

    let elemenHTML = "<ul class= 'list-group'>";
    let totalHargaPesanan = 0;

    for (let i=0; i < keranjang.length;i++){
        let indexMenu = keranjang[i]; // ambil index dari keranjang

        let namaPesanan = daftarMenu[indexMenu];
        let hargaPesanan = hargaMenu[indexMenu];

        totalHargaPesanan = totalHargaPesanan + hargaPesanan;

        elemenHTML += `
                <li class='list-group-item d-flex justify-content-between align-items-center list-group-item-success mb-1 rounded'>
                    ${namaPesanan} (Rp. ${hargaPesanan})
                    <button onclick="hapusDariKeranjang(${i})" class="btn btn-danger btn-sm">X</button>
                </li>
        `;
    }

    elemenHTML += "</ul>";

    totalHarga.innerHTML = "Rp." + totalHargaPesanan;
    areaKeranjang.innerHTML = elemenHTML;
}
renderMenu();
renderKeranjang();

// halaman Struk

let halamanUtama = document.getElementById("halamanUtama");
let halamanStruk = document.getElementById("halamanStruk");
let detailStruk = document.getElementById("detailStruk");

function prosesCheckout(){
    if(keranjang.length === 0){
        alert("Keranjang masih kosong boss, pilih menu dulu!");
        return;
    }

    // tampilan struk
    let elemenHTML =`
            <table class='table table-borderless'>
                <tbody>
    `

    let totalBelanja = 0;

    for(let i=0; i<keranjang.length;i++){
        let indexMenu = keranjang[i];
        let nama = daftarMenu[indexMenu];
        let harga = hargaMenu[indexMenu];

        totalBelanja += harga;

        elemenHTML += `
                <tr>
                    <td>${nama}</td>
                    <td>Rp.${harga}</td>
                </tr>
        `
    }

    elemenHTML +=`
                </tbody>
                <tfoot class='border-top'>
                    <tr>
                        <th><strong>TOTAL BAYAR</strong></th>
                        <th><strong>Rp.${totalBelanja}</strong></th>
                    </tr>
                </tfoot>
            </table>
    `

    detailStruk.innerHTML = elemenHTML;

    halamanUtama.classList.add("d-none");
    halamanStruk.classList.remove("d-none");
}
function pesananSelesai(){
    keranjang = [];

    renderKeranjang();
    halamanUtama.classList.remove("d-none");
    halamanStruk.classList.add("d-none");

    alert("Pesanan baru siap diterima!");
}

