// menyimpan data todo ke array
let todoArray = []

// inisiasi / menangkap elemen2 html
let tombolTambah = document.getElementById("btnTambah");
let kolomInput = document.getElementById("inputTugas");
let areaArray = document.getElementById("areaArray");

// subprogram

function tambahTugas(){
	let tugasBaru = kolomInput.value;

	if(tugasBaru === ""){
		alert("Tugas tidak boleh kosong!");
		return;
	}
	todoArray.push(tugasBaru);
	kolomInput.value === "";
	renderList();
}

function hapusTugas(index){
	todoArray.splice(index,1);
	renderList();
}

function renderList(){
	// jika list kosong, beri pesan bahwa belum ada tugas hari ini
	if(todoArray.length === 0){
		areaArray.innerHTML = "<p class='text-center text-muted'>Belum ada tugas hari ini...</p>";
		return;
	}

	let isiHTML = "<ul class = 'list-group'>"

	for(let i = 0; i < todoArray.length; i++){
		isiHTML += `
					<li class='list-group-item list-group-item-primary mb-2 rounded d-flex justify-content-between align items-center'>
					<span>${todoArray[i]}</span> 
					<button onclick='hapusTugas(${i})' class='btn btn-danger btn-sm'>Hapus</button> 
					</li>
		`
	}
	
	isiHTML += "</ul>";
	areaArray.innerHTML = isiHTML;
}
// event klik tombol

tombolTambah.onclick = tambahTugas;