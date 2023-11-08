
function cekTahun() {

    var tahun = document.getElementById("tahun").value;

    var hasil = "";

    if (tahun == "" || isNaN(tahun)) {
        hasil = "Input tidak valid. Masukkan angka tahun yang benar.";
    } else {

        if (tahun % 4 == 0) {
            hasil = "Tahun " + tahun + " merupakan tahun kabisat.";
        } else {
            hasil = "Tahun " + tahun + " bukan tahun kabisat.";
        }
    }

    document.getElementById("hasil").innerHTML = hasil;
}