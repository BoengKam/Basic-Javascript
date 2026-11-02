// menyimpan data todo ke array
let todoArray = []

// inisiasi / menangkap elemen2 html
let tombolTambah = document.getElementById("btnTambah");
let kolomInput = document.getElementById("inputTugas");
let areaArray = document.getElementById("areaArray");

// event klik tombol

tombolTambah.onclick = function(){
	let tugasBaru = kolomInput.value;
	
	if (tugasBaru === ""){
		alert("Tugas tidak boleh kosong!");
		return;
	}
	
	todoArray.push(tugasBaru);
	kolomInput.value="";

	let isiHTML = "<ul class='list-group'>"
	for(let i=0; i < todoArray.length; i++){
		isiHTML += "<li class='list-group-item list-group-item-primary mb-2 rounded'>" + todoArray[i] + "</li>";	
	}

	isiHTML += "</ul>";
	areaArray.innerHTML = isiHTML;
}