document.getElementById('form-pendaftaran').addEventListener('submit', function(e) {
    e.preventDefault(); 

    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let telp = document.getElementById('telp').value;
    let alamat = document.getElementById('alamat').value;

    // Validasi email
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Harap masukkan email yang valid.');
        return;
    }

    // Validasi nomor telepon
    let telpPattern = /^[0-9]{10,15}$/;
    if (!telpPattern.test(telp)) {
        alert('Harap masukkan nomor telepon yang valid.');
        return;
    }

    // Jika semua validasi lolos
    alert('Pendaftaran berhasil!');

    // Reset formulir
    document.getElementById('form-pendaftaran').reset();
});
