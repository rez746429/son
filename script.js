function hesapla() {
    const komite1 = parseFloat(document.getElementById('komite1').value);
    const komite2 = parseFloat(document.getElementById('komite2').value);
    const komite3 = parseFloat(document.getElementById('komite3').value);
    const komite4 = parseFloat(document.getElementById('komite4').value);
    const komite5 = parseFloat(document.getElementById('komite5').value);
    const komite6 = parseFloat(document.getElementById('komite6').value);
    const final1 = parseFloat(document.getElementById('final1').value);
    const final2 = parseFloat(document.getElementById('final2').value);

    const krediler = {
        komite1: 8,
        komite2: 13,
        komite3: 8,
        komite4: 10,
        komite5: 11,
        komite6: 6,
        final1: 29,
        final2: 27,
        ihu: 4
    };

    const ihuNotu = 100;

    const komiteToplamKredi = krediler.komite1 + krediler.komite2 + krediler.komite3 + krediler.komite4 + krediler.komite5 + krediler.komite6 + krediler.ihu;
    const finalToplamKredi = krediler.final1 + krediler.final2;

    const komiteOrtalama = (
        (komite1 * krediler.komite1) +
        (komite2 * krediler.komite2) +
        (komite3 * krediler.komite3) +
        (komite4 * krediler.komite4) +
        (komite5 * krediler.komite5) +
        (komite6 * krediler.komite6) +
        (ihuNotu * krediler.ihu)
    ) / komiteToplamKredi;

    const finalOrtalama = (
        (final1 * krediler.final1) +
        (final2 * krediler.final2)
    ) / finalToplamKredi;

    const yilSonuOrtalamasi = (komiteOrtalama * 0.6) + (finalOrtalama * 0.4);

    document.getElementById('sonuc').innerText = `Yıl Sonu Ortalamanız: ${yilSonuOrtalamasi.toFixed(2)}`;
}

