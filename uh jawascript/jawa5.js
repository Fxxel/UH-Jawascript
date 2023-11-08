
function cekUsia() {

    var usia = document.getElementById("usia").value;

    var hasil = document.getElementById("hasil");

    if (usia < 5) {
        // Jika usia kurang dari 5 tahun, maka balita
        hasil.innerHTML = "Anda adalah balita. Anda tidak boleh menonton ke bioskop.";
    } else if (usia >= 5 && usia < 18) {

        hasil.innerHTML = "Anda adalah remaja. Anda boleh menonton ke bioskop.";
    } else {

        hasil.innerHTML = "Anda adalah dewasa. Anda boleh menonton ke bioskop.";
    }
}
