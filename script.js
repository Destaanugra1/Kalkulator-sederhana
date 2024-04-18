document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let operasi = document.getElementById('operasi').value;
    let angka1 = document.getElementById('angka1').value;
    let angka2 = document.getElementById('angka2').value;

    let hasil = hitungPecahan(operasi, angka1, angka2);

    document.getElementById('hasil').innerText = `Hasil: ${hasil}`;
});

function hitungPecahan(operasi, angka1, angka2) {
    let pecahan1 = math.fraction(angka1);
    let pecahan2 = math.fraction(angka2);

    let hasil;
    switch (operasi) {
        case '+':
            hasil = math.add(pecahan1, pecahan2);
            break;
        case '-':
            hasil = math.subtract(pecahan1, pecahan2);
            break;
        case '*':
            hasil = math.multiply(pecahan1, pecahan2);
            break;
        case '/':
            hasil = math.divide(pecahan1, pecahan2);
            break;
        default:
            hasil = 'Operasi tidak valid';
    }

    if (math.isInteger(hasil)) {
        return math.format(hasil);
    } else if (hasil.d === 1) {
        return math.format(hasil.n);
    } else {
        return math.format(hasil, { fraction: 'ratio' });
    }
}
