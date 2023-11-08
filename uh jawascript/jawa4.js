
function hitungKembalian() {

    var harga = document.getElementById("harga").value;
    var uang = document.getElementById("uang").value;

    var hasil = "";

    if (harga == "" || uang == "" || isNaN(harga) || isNaN(uang)) {
        hasil = "Input tidak valid. Masukkan angka yang benar.";
    } else {

        if (uang < harga) {
            hasil = "Uang Anda tidak cukup untuk membayar barang.";
        } else {
   
            var kembalian = uang - harga;
 
            hasil = "Kembalian Anda adalah Rp" + kembalian.toLocaleString("id-ID") + ".";
        }
    }

    document.getElementById("hasil").innerHTML = hasil;
}
