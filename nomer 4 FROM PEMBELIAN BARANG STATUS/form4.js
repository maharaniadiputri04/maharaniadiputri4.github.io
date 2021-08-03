function hasil() {
  var jumlah = parseInt(document.getElementById('jumlah').value);
  var harga = parseInt(document.getElementById('harga').value);
  var total = jumlah * harga;
  document.getElementById('total').innerHTML = total;
  var diskon = 0.1;
  var bayar;
  var status = pelanggan;
  if (status == true) {
    bayar = total - total * diskon;
    document.getElementById('bayar').innerHTML = bayar;
    document.getElementById('diskon').innerHTML = '10%';
  } else {
    document.getElementById('bayar').innerHTML = bayar;
    document.getElementById('diskon').innerHTML = '0%';
  }
}
