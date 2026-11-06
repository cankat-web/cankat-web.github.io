// Katalog verisi. Gerçek sitede liste panelden yönetilir; şablonda panel değişiklikleri bu tarayıcıda saklanır.
// Örnekte beş sektör var; gerçek sitede yalnızca bir işletmenin listesi olur.
(function () {
  var ACIK = function (accent, dark, soft) { return { bg: '#ffffff', ink: '#16181b', muted: '#5f6670', line: '#e4e6ea', accent: accent, dark: dark, on: '#ffffff', soft: soft, card: '#ffffff', ph: '#eef0f3' }; };
  var GUN = function (hi, ct, pz) { return [['Pazartesi–Cuma', hi], ['Cumartesi', ct], ['Pazar', pz]]; };

  window.KATALOG_SEKTORLER = {
    restoran: {
      etiket: 'Restoran', ad: 'Cankat Ocakbaşı', alt: 'Ocakbaşı · Meze', tema: 'koyu',
      renk: { bg: '#15110e', ink: '#f3ebdf', muted: '#b2a492', line: '#352b24', accent: '#e2733b', dark: '#c95f2a', on: '#1a0f08', soft: '#1e1814', card: '#211a15', ph: '#2a211b' },
      kapak: ['r-ocak', 'Közde pişen şişler'], ust: 'Bornova · Kazımdirik', baslik: 'Közün başında, <em>sofra</em> gibi.',
      giris: 'Odun kömüründe kebap, günlük meze, taş fırından pide. Menü ve fiyatlar her gün güncel.',
      bilgiler: ['Paket servis', '60 kişilik salon + bahçe'], acik: ['12:00', '24:00'],
      cta: ['Menüye bak', 'Masa ayırt'], nav: ['Menü', 'Mekân', 'Rezervasyon'],
      secim: ['Şefin önerileri', 'Masaya ilk gelenler. Fotoğrafa dokunun, içeriğine bakın.'],
      bolumler: ['Kahvaltı', 'Başlangıçlar', 'Çorbalar', 'Ocakbaşı', 'Fırından', 'Salatalar', 'Tatlılar', 'İçecekler'],
      etiketler: { vejetaryen: 'Vejetaryen', acili: 'Acılı', sef: 'Şefin önerisi' },
      filtreler: [['vejetaryen', 'Vejetaryen', 'var'], ['acili', 'Acısız', 'yok']],
      ara: 'Menüde ara', o1: 'Porsiyon', o2: 'Alerjen', yok: 'Bugün yok', varEtiket: 'Var', sayac: 'yemek',
      dipnot: 'Fiyatlara KDV dahildir. Alerjen bilgisi için yemeğe dokunun ya da garsonumuza sorun.',
      detayCta: ['Paket sipariş ver', 'Masa ayırt'], wa: 'Merhaba, 1 porsiyon {ad} sipariş vermek istiyorum.',
      mekan: ['Mekân', 'Salonda ocağı görerek, yazın bahçede.', [['r-hero', 'Salon'], ['r-mutfak', 'Açık mutfak'], ['r-masa', 'Grup ve davet']]],
      ziyaret: ['Rezervasyon', 'Masanızı ayıralım', 'Kaç kişi ve hangi saat olduğunu WhatsApp\'tan yazın, dakikalar içinde dönelim. Paket sipariş de aynı numaradan.', [['Pazartesi–Perşembe', '12:00–24:00'], ['Cuma–Cumartesi', '12:00–01:00'], ['Pazar', '09:00–24:00 (kahvaltı 13:00\'e kadar)']]],
      hizli: ['Menü', 'Rezervasyon'],
      fotolar: ['r-kahvalti', 'r-meze', 'r-humus', 'r-corba', 'r-corba2', 'r-tavuk', 'r-adana', 'r-karisik', 'r-doner', 'r-levrek', 'r-lahmacun', 'r-kusbasi', 'r-kasarli', 'r-salata', 'r-baklava', 'r-kahve', 'r-cay'],
      liste: [
        { id: 'm1', ad: 'Serpme kahvaltı', kategori: 'Kahvaltı', fiyat: 1450, o1: '2 kişilik', aciklama: 'Ezine peyniri, tulum, kaymak-bal, zeytinler, sahanda tereyağlı yumurta, sıcak pişi ve demlik çay.', foto: 'r-kahvalti', etiket: ['vejetaryen'], o2: 'Süt, yumurta, gluten', durum: 'var', not: 'Hafta sonu 09:00–13:00' },
        { id: 'm2', ad: 'Meze tabağı', kategori: 'Başlangıçlar', fiyat: 480, o1: '6 çeşit', aciklama: 'Günün altı mezesi: haydari, humus, acılı ezme, patlıcan, fava ve köz biber.', foto: 'r-meze', etiket: ['vejetaryen', 'sef'], o2: 'Süt, susam', durum: 'var' },
        { id: 'm3', ad: 'Humus ve ezme üçlüsü', kategori: 'Başlangıçlar', fiyat: 320, o1: '3 kase', aciklama: 'Tahinli humus, cevizli muhammara ve közlenmiş patlıcan, lavaşla.', foto: 'r-humus', etiket: ['vejetaryen'], o2: 'Susam, ceviz, gluten', durum: 'var' },
        { id: 'm4', ad: 'Acılı ezme', kategori: 'Başlangıçlar', fiyat: 150, o1: '1 kase', aciklama: 'Elde doğranmış domates, biber, nar ekşisi.', foto: '', etiket: ['vejetaryen', 'acili'], o2: '—', durum: 'var' },
        { id: 'm5', ad: 'Haydari', kategori: 'Başlangıçlar', fiyat: 160, o1: '1 kase', aciklama: 'Süzme yoğurt, sarımsak, kuru nane ve tereyağı.', foto: '', etiket: ['vejetaryen'], o2: 'Süt', durum: 'var' },
        { id: 'm6', ad: 'Mercimek çorbası', kategori: 'Çorbalar', fiyat: 160, o1: '1 kase', aciklama: 'Kırmızı mercimek, tereyağında pul biber, limon ve kıtır ekmek.', foto: 'r-corba', etiket: ['vejetaryen'], o2: 'Süt, gluten', durum: 'var' },
        { id: 'm7', ad: 'Ezogelin', kategori: 'Çorbalar', fiyat: 170, o1: '1 kase', aciklama: 'Mercimek, bulgur ve pirinçle, naneli tereyağı.', foto: 'r-corba2', etiket: ['vejetaryen'], o2: 'Süt, gluten', durum: 'var' },
        { id: 'm8', ad: 'Adana kebap', kategori: 'Ocakbaşı', fiyat: 620, o1: '220 g', aciklama: 'Zırhla çekilmiş kuzu kıyma, közde biber ve domates, bulgur pilavı ve lavaş.', foto: 'r-tavuk', etiket: ['acili', 'sef'], o2: 'Gluten', durum: 'var' },
        { id: 'm9', ad: 'Kuzu şiş', kategori: 'Ocakbaşı', fiyat: 690, o1: '200 g', aciklama: 'Kekikli kuzu but, közde sebze, patates ve soğan salatası.', foto: 'r-adana', etiket: [], o2: '—', durum: 'var' },
        { id: 'm10', ad: 'Karışık ızgara', kategori: 'Ocakbaşı', fiyat: 1650, o1: '2 kişilik', aciklama: 'Adana, kuzu şiş, tavuk kanat, pirzola ve köz sebzeler, mezeyle.', foto: 'r-karisik', etiket: ['sef'], o2: 'Süt, gluten', durum: 'var' },
        { id: 'm11', ad: 'Yaprak döner', kategori: 'Ocakbaşı', fiyat: 520, o1: '180 g', aciklama: 'Odun ateşinde yaprak dana döner, tereyağlı pide üstünde.', foto: 'r-doner', etiket: [], o2: 'Süt, gluten', durum: 'var' },
        { id: 'm12', ad: 'Izgara levrek', kategori: 'Ocakbaşı', fiyat: 640, o1: '1 adet', aciklama: 'Fileto levrek, roka, limon ve zeytinyağlı sebze.', foto: 'r-levrek', etiket: [], o2: 'Balık', durum: 'var' },
        { id: 'm13', ad: 'Tavuk şiş', kategori: 'Ocakbaşı', fiyat: 430, o1: '200 g', aciklama: 'Yoğurtlu marine tavuk göğsü, pilav ve köz sebze.', foto: '', etiket: [], o2: 'Süt', durum: 'var' },
        { id: 'm14', ad: 'Lahmacun', kategori: 'Fırından', fiyat: 160, o1: '1 adet', aciklama: 'Taş fırında ince hamur, maydanoz ve limonla.', foto: 'r-lahmacun', etiket: ['acili'], o2: 'Gluten', durum: 'var' },
        { id: 'm15', ad: 'Kıymalı pide', kategori: 'Fırından', fiyat: 380, o1: '1 adet', aciklama: 'Elde açılmış hamur, dana kıyma, domates ve biber.', foto: 'r-kusbasi', etiket: [], o2: 'Gluten', durum: 'var' },
        { id: 'm16', ad: 'Kaşarlı pide', kategori: 'Fırından', fiyat: 340, o1: '1 adet', aciklama: 'Bol kaşarlı, tereyağlı kenar.', foto: '', etiket: ['vejetaryen'], o2: 'Süt, gluten', durum: 'var' },
        { id: 'm17', ad: 'Mevsim salatası', kategori: 'Salatalar', fiyat: 260, o1: '1 kase', aciklama: 'Yeşillik, nohut, avokado, kırmızı lahana ve nar ekşili sos.', foto: 'r-salata', etiket: ['vejetaryen'], o2: '—', durum: 'var' },
        { id: 'm18', ad: 'Çoban salata', kategori: 'Salatalar', fiyat: 180, o1: '1 kase', aciklama: 'Domates, salatalık, biber, soğan, zeytinyağı ve limon.', foto: '', etiket: ['vejetaryen'], o2: '—', durum: 'var' },
        { id: 'm19', ad: 'Fıstıklı baklava', kategori: 'Tatlılar', fiyat: 380, o1: '4 dilim', aciklama: 'Antep fıstığıyla, kaymak ile servis edilir.', foto: 'r-baklava', etiket: ['vejetaryen', 'sef'], o2: 'Süt, gluten, fıstık', durum: 'var' },
        { id: 'm20', ad: 'Künefe', kategori: 'Tatlılar', fiyat: 340, o1: '1 porsiyon', aciklama: 'Hatay peyniri, tel kadayıf, fıstık. Pişmesi 15 dakika sürer.', foto: '', etiket: ['vejetaryen'], o2: 'Süt, gluten, fıstık', durum: 'yok' },
        { id: 'm21', ad: 'Türk kahvesi', kategori: 'İçecekler', fiyat: 120, o1: '1 fincan', aciklama: 'Közde pişer, lokumla gelir.', foto: 'r-kahve', etiket: ['vejetaryen'], o2: '—', durum: 'var' },
        { id: 'm22', ad: 'Çay', kategori: 'İçecekler', fiyat: 40, o1: 'İnce belli', aciklama: 'Rize çayı, taze demlenmiş.', foto: 'r-cay', etiket: ['vejetaryen'], o2: '—', durum: 'var' },
        { id: 'm23', ad: 'Ayran', kategori: 'İçecekler', fiyat: 60, o1: '300 ml', aciklama: 'Köpüklü yayık ayranı.', foto: '', etiket: ['vejetaryen'], o2: 'Süt', durum: 'var' },
        { id: 'm24', ad: 'Şalgam', kategori: 'İçecekler', fiyat: 70, o1: '300 ml', aciklama: 'Adana usulü, acılı ya da acısız.', foto: '', etiket: ['vejetaryen', 'acili'], o2: '—', durum: 'var' }
      ]
    },
    emlak: {
      etiket: 'Emlak', ad: 'Cankat Emlak', alt: 'Satılık · Kiralık', tema: 'acik', renk: ACIK('#1e4f8a', '#173f6e', '#f2f5f9'),
      kapak: ['em-4', 'Aydınlık salon'], ust: 'Bornova · Kazımdirik', baslik: 'Bornova\'da ev arayana <em>güncel</em> ilanlar.',
      giris: 'Satılık ve kiralık daireler, fotoğraflı ve fiyatlı. Beğendiğiniz ilanı WhatsApp\'tan sorun, aynı gün gösterelim.',
      bilgiler: ['Aynı gün gösterim', 'Tapu ve kredi desteği'], acik: ['09:00', '19:00'],
      cta: ['İlanlara bak', 'Gösterim isteyin'], nav: ['İlanlar', 'Ofis', 'İletişim'],
      secim: ['Öne çıkan ilanlar', 'Bu hafta en çok sorulanlar.'],
      bolumler: ['Satılık', 'Kiralık', 'Müstakil ve villa', 'Ticari'],
      etiketler: { esyali: 'Eşyalı', otopark: 'Otoparklı', sef: 'Öne çıkan' },
      filtreler: [['esyali', 'Eşyalı', 'var'], ['otopark', 'Otoparklı', 'var']],
      ara: 'İlan ara: semt, oda sayısı…', o1: 'Oda · m²', o2: 'Konum', yok: 'Satıldı', varEtiket: 'Yayında', sayac: 'ilan',
      dipnot: 'İlan fiyatları sahibinin beyanıdır. Hizmet bedeli ve tapu masrafları için ofisimize danışın.',
      detayCta: ['Bu ilanı sor', 'Gösterim isteyin'], wa: 'Merhaba, "{ad}" ilanı hakkında bilgi almak istiyorum.',
      mekan: ['Ofisimiz', 'Kazımdirik\'te, mahallenin içinde.', [['em-ofis', 'Ofis'], ['em-5', 'Bölgedeki siteler'], ['em-12', 'Görüşme köşesi']]],
      ziyaret: ['İletişim', 'Gösterim için yazın', 'Hangi ilanı görmek istediğinizi yazın, size uygun saati ayarlayalım. Evinizi satmak ya da kiralamak için de ulaşabilirsiniz.', GUN('09:00–19:00', '10:00–17:00', 'Randevuyla')],
      hizli: ['İlanlar', 'WhatsApp'],
      fotolar: ['em-1', 'em-2', 'em-3', 'em-4', 'em-5', 'em-6', 'em-7', 'em-8', 'em-9', 'em-10', 'em-12'],
      liste: [
        { id: 'e1', ad: '3+1 site içinde, havuzlu', kategori: 'Satılık', fiyat: 6450000, o1: '3+1 · 135 m²', o2: 'Kazımdirik', aciklama: 'Güney cephe, 4. kat, asansörlü. Site içinde havuz, güvenlik ve kapalı otopark. 8 yıllık bina.', foto: 'em-1', etiket: ['otopark', 'sef'], durum: 'var' },
        { id: 'e2', ad: '2+1 metroya yürüme mesafesi', kategori: 'Satılık', fiyat: 4250000, o1: '2+1 · 95 m²', o2: 'Erzene', aciklama: 'Yenilenmiş mutfak ve banyo, doğalgaz kombili. Metroya 6 dakika.', foto: 'em-2', etiket: [], durum: 'var' },
        { id: 'e3', ad: '1+1 öğrenciye uygun', kategori: 'Kiralık', fiyat: 17500, birim: ' / ay', o1: '1+1 · 55 m²', o2: 'Kazımdirik', aciklama: 'Üniversiteye yakın, beyaz eşyalı, aidat dahil.', foto: 'em-3', etiket: ['esyali', 'sef'], durum: 'var' },
        { id: 'e4', ad: '3+1 geniş balkonlu', kategori: 'Kiralık', fiyat: 26000, birim: ' / ay', o1: '3+1 · 140 m²', o2: 'Evka 3', aciklama: 'Ferah salon, iki balkon, açık otopark.', foto: 'em-4', etiket: ['otopark'], durum: 'var' },
        { id: 'e5', ad: '2+1 eşyalı, aileye', kategori: 'Kiralık', fiyat: 21000, birim: ' / ay', o1: '2+1 · 100 m²', o2: 'Kazımdirik', aciklama: 'Tam eşyalı, ara kat, okula ve markete yakın.', foto: 'em-8', etiket: ['esyali'], durum: 'yok' },
        { id: 'e6', ad: '4+1 dubleks', kategori: 'Satılık', fiyat: 8900000, o1: '4+1 · 210 m²', o2: 'Çamdibi', aciklama: 'Teraslı dubleks, iki banyo, ankastre mutfak.', foto: 'em-7', etiket: ['otopark'], durum: 'var' },
        { id: 'e7', ad: 'Bahçeli müstakil ev', kategori: 'Müstakil ve villa', fiyat: 12500000, o1: '4+1 · 260 m²', o2: 'Pınarbaşı', aciklama: '450 m² arsa içinde, bahçeli, iki katlı müstakil ev.', foto: 'em-9', etiket: ['otopark', 'sef'], durum: 'var' },
        { id: 'e8', ad: 'Havuzlu villa', kategori: 'Müstakil ve villa', fiyat: 24750000, o1: '5+2 · 380 m²', o2: 'Işıklar', aciklama: 'Özel havuz, kapalı garaj, akıllı ev sistemi.', foto: 'em-10', etiket: ['otopark'], durum: 'var' },
        { id: 'e9', ad: 'Cadde üstü dükkân', kategori: 'Ticari', fiyat: 45000, birim: ' / ay', o1: '120 m²', o2: 'Kazımdirik', aciklama: 'Geniş vitrinli, bodrum depolu, her işe uygun.', foto: '', etiket: [], durum: 'var' },
        { id: 'e10', ad: 'Yeni binada daire', kategori: 'Satılık', fiyat: 5600000, o1: '2+1 · 105 m²', o2: 'Kazımdirik', aciklama: '2025 yapımı, ısı yalıtımlı, otoparklı yeni bina.', foto: 'em-6', etiket: ['otopark'], durum: 'var' }
      ]
    },
    galeri: {
      etiket: 'Oto galeri', ad: 'Cankat Otomotiv', alt: 'İkinci el · Takas', tema: 'acik', renk: ACIK('#b42318', '#912018', '#f7f3f2'),
      kapak: ['ga-saha', 'Galerideki araçlar'], ust: 'Bornova · Ankara Asfaltı', baslik: 'Ekspertizli araç, <em>net</em> fiyat.',
      giris: 'Her aracın kilometresi, boya-değişen bilgisi ve fiyatı ilanında. Takas ve kredi seçenekleri için WhatsApp\'tan yazın.',
      bilgiler: ['Ekspertiz raporlu', 'Takas ve kredi'], acik: ['09:00', '19:30'],
      cta: ['Araçlara bak', 'Takas sorun'], nav: ['Araçlar', 'Galeri', 'İletişim'],
      secim: ['Haftanın araçları', 'Yeni gelenler ve fiyatı düşenler.'],
      bolumler: ['Sedan', 'Hatchback', 'SUV'],
      etiketler: { otomatik: 'Otomatik', dizel: 'Dizel', sef: 'Fırsat' },
      filtreler: [['otomatik', 'Otomatik', 'var'], ['dizel', 'Dizel', 'var']],
      ara: 'Marka, model ara', o1: 'Yıl · km', o2: 'Yakıt · vites', yok: 'Satıldı', varEtiket: 'Satışta', sayac: 'araç',
      dipnot: 'Fiyatlar galeri satış fiyatıdır. Ekspertiz raporu her araç için ofiste gösterilir.',
      detayCta: ['Bu aracı sor', 'Takas sorun'], wa: 'Merhaba, ilanınızdaki {ad} hakkında bilgi almak istiyorum.',
      mekan: ['Galerimiz', 'Kapalı salon ve açık saha.', [['ga-salon', 'Kapalı salon'], ['ga-11', 'Detaylı temizlik'], ['ga-1', 'Açık saha']]],
      ziyaret: ['İletişim', 'Aracı yerinde görün', 'Görmek istediğiniz aracı yazın, sizin için hazırlayalım. Test sürüşü randevuyla.', GUN('09:00–19:30', '09:00–19:30', '11:00–17:00')],
      hizli: ['Araçlar', 'WhatsApp'],
      fotolar: ['ga-1', 'ga-3', 'ga-4', 'ga-5', 'ga-6', 'ga-7', 'ga-8', 'ga-9', 'ga-11', 'ga-12'],
      liste: [
        { id: 'g1', ad: 'Hyundai i30 1.4 T-GDI', kategori: 'Hatchback', fiyat: 1385000, o1: '2021 · 48.000 km', o2: 'Benzin · Otomatik', aciklama: 'Hatasız, boyasız. İlk sahibinden, servis bakımlı.', foto: 'ga-3', etiket: ['otomatik', 'sef'], durum: 'var' },
        { id: 'g2', ad: 'BMW 520i', kategori: 'Sedan', fiyat: 2650000, o1: '2019 · 92.000 km', o2: 'Benzin · Otomatik', aciklama: 'İki parça boyalı, değişen yok. Sunroof, hafızalı koltuk.', foto: 'ga-4', etiket: ['otomatik'], durum: 'var' },
        { id: 'g3', ad: 'Volkswagen Polo 1.0 TSI', kategori: 'Hatchback', fiyat: 985000, o1: '2020 · 61.000 km', o2: 'Benzin · Otomatik', aciklama: 'Şehir içi için ekonomik, tramer kaydı düşük.', foto: 'ga-5', etiket: ['otomatik'], durum: 'var' },
        { id: 'g4', ad: 'Volkswagen Golf 1.6 TDI', kategori: 'Hatchback', fiyat: 1090000, o1: '2018 · 128.000 km', o2: 'Dizel · Manuel', aciklama: 'Yakıt cimrisi, triger seti yeni değişti.', foto: 'ga-6', etiket: ['dizel'], durum: 'yok' },
        { id: 'g5', ad: 'Ford Explorer', kategori: 'SUV', fiyat: 3150000, o1: '2018 · 110.000 km', o2: 'Benzin · Otomatik', aciklama: '7 koltuk, 4x4, geniş aile aracı.', foto: 'ga-7', etiket: ['otomatik'], durum: 'var' },
        { id: 'g6', ad: 'Honda CR-V 1.6 i-DTEC', kategori: 'SUV', fiyat: 1890000, o1: '2019 · 86.000 km', o2: 'Dizel · Otomatik', aciklama: 'Hatasız, geniş bagaj, bakımları yapılmış.', foto: 'ga-8', etiket: ['otomatik', 'dizel', 'sef'], durum: 'var' },
        { id: 'g7', ad: 'Jeep Wrangler', kategori: 'SUV', fiyat: 3900000, o1: '2017 · 74.000 km', o2: 'Benzin · Otomatik', aciklama: 'Sökülebilir tavan, arazi paketi.', foto: 'ga-9', etiket: ['otomatik'], durum: 'var' },
        { id: 'g8', ad: 'Honda Civic 1.6 Eco', kategori: 'Sedan', fiyat: 1245000, o1: '2021 · 55.000 km', o2: 'Benzin-LPG · Otomatik', aciklama: 'Fabrika çıkışlı LPG, düşük yakıt masrafı.', foto: 'ga-12', etiket: ['otomatik', 'sef'], durum: 'var' },
        { id: 'g9', ad: 'Fiat Egea 1.3 Multijet', kategori: 'Sedan', fiyat: 765000, o1: '2020 · 140.000 km', o2: 'Dizel · Manuel', aciklama: 'Ekonomik, ticari kullanıma uygun.', foto: '', etiket: ['dizel'], durum: 'var' },
        { id: 'g10', ad: 'Mazda 3 2.0', kategori: 'Hatchback', fiyat: 1120000, o1: '2019 · 79.000 km', o2: 'Benzin · Otomatik', aciklama: 'Tek parça boyalı, bakımlı.', foto: 'ga-1', etiket: ['otomatik'], durum: 'var' }
      ]
    },
    perde: {
      etiket: 'Perde', ad: 'Cankat Perde', alt: 'Tül · Stor · Jaluzi', tema: 'acik', renk: ACIK('#6b4e9b', '#56407d', '#f5f3f8'),
      kapak: ['pe-fon', 'Fon perde ve tül'], ust: 'Bornova · Ölçü ve montaj', baslik: 'Evinize gelip <em>ölçüyle</em> perde.',
      giris: 'Tül, fon, stor, zebra ve jaluzi. Kumaşı seçin, evinize gelip ölçelim, dikip takalım.',
      bilgiler: ['Ücretsiz ölçü', 'Dikiş ve montaj dahil'], acik: ['09:00', '19:00'],
      cta: ['Ürünlere bak', 'Ölçüye çağırın'], nav: ['Ürünler', 'Mağaza', 'İletişim'],
      secim: ['Çok tercih edilenler', 'Bu sezon en çok dikilenler.'],
      bolumler: ['Tül', 'Fon perde', 'Stor ve zebra', 'Jaluzi', 'Kumaş'],
      etiketler: { karartma: 'Karartma', montaj: 'Montaj dahil', sef: 'Çok satan' },
      filtreler: [['karartma', 'Karartma', 'var'], ['montaj', 'Montaj dahil', 'var']],
      ara: 'Ürün ara', o1: 'Fiyat birimi', o2: 'Kumaş', yok: 'Stokta yok', varEtiket: 'Stokta', sayac: 'ürün',
      dipnot: 'Fiyatlar metre ya da metrekare başlangıç fiyatıdır; kesin fiyat ölçüden sonra verilir.',
      detayCta: ['Fiyat ve ölçü sor', 'Ölçüye çağırın'], wa: 'Merhaba, {ad} için ölçü ve fiyat almak istiyorum.',
      mekan: ['Mağazamız', 'Kumaşları elinizle görün.', [['pe-kumas', 'Kumaş kartelası'], ['pe-tul', 'Tül örnekleri'], ['pe-kumas2', 'Renk seçenekleri']]],
      ziyaret: ['İletişim', 'Ölçü için randevu', 'Adresinizi ve uygun gününüzü yazın, ölçü için gelelim. Ölçü ücretsizdir.', GUN('09:00–19:00', '10:00–18:00', 'Kapalı')],
      hizli: ['Ürünler', 'Ölçü randevusu'],
      fotolar: ['pe-tul', 'pe-tul2', 'pe-fon', 'pe-stor', 'pe-zebra', 'pe-jaluzi', 'pe-kumas', 'pe-kumas2'],
      liste: [
        { id: 'p1', ad: 'Keten görünümlü tül', kategori: 'Tül', fiyat: 450, birim: ' / m', o1: 'Metre', o2: 'Polyester keten', aciklama: 'Doğal dokulu, ışığı yumuşatan tül. 3 kat pile ile dikilir.', foto: 'pe-tul', etiket: ['montaj', 'sef'], durum: 'var' },
        { id: 'p2', ad: 'Mutfak tülü', kategori: 'Tül', fiyat: 320, birim: ' / m', o1: 'Metre', o2: 'Polyester', aciklama: 'Kolay yıkanır, kısa boy, korniş ya da rustik.', foto: 'pe-tul2', etiket: ['montaj'], durum: 'var' },
        { id: 'p3', ad: 'Kadife fon perde', kategori: 'Fon perde', fiyat: 780, birim: ' / m', o1: 'Metre', o2: 'Kadife', aciklama: 'Ağır dökümlü, ışık geçirmez astarlı seçenekle.', foto: 'pe-fon', etiket: ['karartma', 'montaj', 'sef'], durum: 'var' },
        { id: 'p4', ad: 'Blackout fon', kategori: 'Fon perde', fiyat: 690, birim: ' / m', o1: 'Metre', o2: 'Blackout', aciklama: 'Yatak odası için tam karartma.', foto: '', etiket: ['karartma', 'montaj'], durum: 'var' },
        { id: 'p5', ad: 'Zebra stor', kategori: 'Stor ve zebra', fiyat: 1150, birim: ' / m²', o1: 'Metrekare', o2: 'Polyester', aciklama: 'Çift katlı, ışığı ayarlanabilir. Zincirli mekanizma.', foto: 'pe-zebra', etiket: ['montaj', 'sef'], durum: 'var' },
        { id: 'p6', ad: 'Karartma stor', kategori: 'Stor ve zebra', fiyat: 980, birim: ' / m²', o1: 'Metrekare', o2: 'Blackout', aciklama: 'Çocuk odası ve yatak odası için.', foto: 'pe-stor', etiket: ['karartma', 'montaj'], durum: 'var' },
        { id: 'p7', ad: 'Alüminyum jaluzi', kategori: 'Jaluzi', fiyat: 850, birim: ' / m²', o1: 'Metrekare', o2: '25 mm alüminyum', aciklama: 'Ofis ve mutfak için, silinebilir.', foto: 'pe-jaluzi', etiket: ['montaj'], durum: 'var' },
        { id: 'p8', ad: 'Ahşap jaluzi', kategori: 'Jaluzi', fiyat: 1650, birim: ' / m²', o1: 'Metrekare', o2: '50 mm ahşap', aciklama: 'Sıcak görünüm, doğal ahşap lamel.', foto: '', etiket: ['montaj'], durum: 'yok' },
        { id: 'p9', ad: 'Döşemelik kumaş', kategori: 'Kumaş', fiyat: 520, birim: ' / m', o1: 'Metre', o2: 'Şönil', aciklama: 'Koltuk ve minder için; 40 renk.', foto: 'pe-kumas', etiket: [], durum: 'var' },
        { id: 'p10', ad: 'Pamuklu perdelik', kategori: 'Kumaş', fiyat: 380, birim: ' / m', o1: 'Metre', o2: 'Pamuk', aciklama: 'Kendiniz diktirmek isterseniz metreyle.', foto: 'pe-kumas2', etiket: [], durum: 'var' }
      ]
    },
    mobilya: {
      etiket: 'Mobilya', ad: 'Cankat Mobilya', alt: 'Oturma · Yemek · Depolama', tema: 'acik', renk: ACIK('#8a5a2b', '#704822', '#f7f3ee'),
      kapak: ['mo-magaza', 'Mobilya mağazası'], ust: 'Bornova · Showroom', baslik: 'Evinize uyan mobilya, <em>ölçünüze</em> göre.',
      giris: 'Kanepe, berjer, yemek masası ve kitaplık. Stoktan hemen teslim ya da istediğiniz ölçü ve kumaşta üretim.',
      bilgiler: ['İzmir içi ücretsiz teslim', 'Ölçüye göre üretim'], acik: ['10:00', '20:00'],
      cta: ['Ürünlere bak', 'Mağazaya gelin'], nav: ['Ürünler', 'Showroom', 'İletişim'],
      secim: ['Çok satanlar', 'Showroomda en çok denenenler.'],
      bolumler: ['Oturma grubu', 'Yemek odası', 'Depolama'],
      etiketler: { stokta: 'Hemen teslim', olcu: 'Ölçüye göre', sef: 'Çok satan' },
      filtreler: [['stokta', 'Hemen teslim', 'var'], ['olcu', 'Ölçüye göre', 'var']],
      ara: 'Ürün ara', o1: 'Ölçü', o2: 'Malzeme', yok: 'Stokta yok', varEtiket: 'Stokta', sayac: 'ürün',
      dipnot: 'Fiyatlara KDV dahildir. İzmir içi teslim ve montaj ücretsizdir.',
      detayCta: ['Bu ürünü sor', 'Mağazaya gelin'], wa: 'Merhaba, {ad} hakkında bilgi almak istiyorum.',
      mekan: ['Showroom', '600 m² showroomda deneyin.', [['mo-magaza', 'Showroom'], ['mo-ahsap', 'Masif ahşap'], ['mo-kitaplik2', 'Kitaplık köşesi']]],
      ziyaret: ['İletişim', 'Showroomumuza uğrayın', 'Ölçünüzü getirin, birlikte seçelim. Kumaş ve renk örnekleri mağazada.', GUN('10:00–20:00', '10:00–20:00', '12:00–18:00')],
      hizli: ['Ürünler', 'WhatsApp'],
      fotolar: ['mo-kanepe', 'mo-berjer', 'mo-koltuk', 'mo-sandalye', 'mo-puf', 'mo-bistro', 'mo-kitaplik', 'mo-berjer2', 'mo-masa', 'mo-ahsap'],
      liste: [
        { id: 'f1', ad: 'Kadife üçlü kanepe', kategori: 'Oturma grubu', fiyat: 32500, o1: '220 × 90 × 85 cm', o2: 'Kadife, kayın iskelet', aciklama: 'Yataklı değil, derin oturum. 12 renk kadife.', foto: 'mo-kanepe', etiket: ['stokta', 'sef'], durum: 'var' },
        { id: 'f2', ad: 'Berjer', kategori: 'Oturma grubu', fiyat: 9800, o1: '75 × 80 × 95 cm', o2: 'Keten kumaş', aciklama: 'Okuma köşesi için, ahşap ayaklı.', foto: 'mo-berjer', etiket: ['stokta'], durum: 'var' },
        { id: 'f3', ad: 'Köşe koltuk', kategori: 'Oturma grubu', fiyat: 48900, o1: '290 × 220 cm', o2: 'Şönil kumaş', aciklama: 'Sağ ya da sol köşe, ölçüye göre üretilir.', foto: 'mo-koltuk', etiket: ['olcu', 'sef'], durum: 'var' },
        { id: 'f4', ad: 'Sarı berjer', kategori: 'Oturma grubu', fiyat: 11200, o1: '78 × 82 × 92 cm', o2: 'Kadife', aciklama: 'Salon ya da yatak odasına renk katar.', foto: 'mo-berjer2', etiket: ['stokta'], durum: 'yok' },
        { id: 'f5', ad: 'Masif yemek masası', kategori: 'Yemek odası', fiyat: 28700, o1: '180 × 90 × 76 cm', o2: 'Masif meşe', aciklama: '6 kişilik, açılır tabla seçeneğiyle.', foto: 'mo-masa', etiket: ['olcu', 'sef'], durum: 'var' },
        { id: 'f6', ad: 'Ahşap sandalye', kategori: 'Yemek odası', fiyat: 3400, o1: '45 × 50 × 82 cm', o2: 'Kayın', aciklama: 'Masayla takım ya da tek.', foto: 'mo-bistro', etiket: ['stokta'], durum: 'var' },
        { id: 'f7', ad: 'Döner sandalye', kategori: 'Yemek odası', fiyat: 4900, o1: '60 × 58 × 84 cm', o2: 'Kumaş, metal ayak', aciklama: 'Çalışma masası için.', foto: 'mo-sandalye', etiket: ['stokta'], durum: 'var' },
        { id: 'f8', ad: 'Duvar kitaplığı', kategori: 'Depolama', fiyat: 21500, o1: '240 × 35 × 220 cm', o2: 'Meşe kaplama', aciklama: 'Duvarınızın ölçüsüne göre, raf aralıkları ayarlanır.', foto: 'mo-kitaplik', etiket: ['olcu'], durum: 'var' },
        { id: 'f9', ad: 'Puf', kategori: 'Oturma grubu', fiyat: 2700, o1: 'Ø 50 × 45 cm', o2: 'Bukle kumaş', aciklama: 'Ayak uzatma ya da ek oturak.', foto: 'mo-puf', etiket: ['stokta'], durum: 'var' },
        { id: 'f10', ad: 'TV ünitesi', kategori: 'Depolama', fiyat: 14300, o1: '200 × 40 × 50 cm', o2: 'Lake ve meşe', aciklama: 'Kapaklı, kablo kanallı.', foto: '', etiket: ['olcu'], durum: 'var' }
      ]
    }
  };

  var S = window.KATALOG_SEKTORLER;
  var q = (location.search.match(/[?&]s=([a-z]+)/) || [])[1], k = 'restoran';
  if (q && S[q]) k = q; else { try { var m = sessionStorage.getItem('katalog_s'); if (m && S[m]) k = m; } catch (e) {} }
  try { sessionStorage.setItem('katalog_s', k); } catch (e) {}
  window.KT_KEY = k; window.KT = S[k];
  window.MENU_KATEGORILER = KT.bolumler; window.MENU_FOTOLAR = KT.fotolar; window.ETIKETLER = KT.etiketler;
  var r = document.documentElement, c = KT.renk;
  r.setAttribute('data-tema', KT.tema);
  [['--bg', c.bg], ['--ink', c.ink], ['--muted', c.muted], ['--line', c.line], ['--accent', c.accent], ['--accent-dark', c.dark], ['--on-accent', c.on], ['--soft', c.soft], ['--card', c.card], ['--ph-bg', c.ph]].forEach(function (p) { r.style.setProperty(p[0], p[1]); });
})();

window.menuYukle = function () {
  try { var s = localStorage.getItem('katalog_' + KT_KEY); if (s) return JSON.parse(s); } catch (e) {}
  return JSON.parse(JSON.stringify(KT.liste));
};
window.menuKaydet = function (list) {
  try { localStorage.setItem('katalog_' + KT_KEY, JSON.stringify(list)); return true; } catch (e) { return false; }
};
window.tl = function (n, birim) { return n ? Number(n).toLocaleString('tr-TR') + ' ₺' + (birim || '') : '—'; };
window.foto = function (k) { return k ? '../assets/img/' + k + '.jpg' : ''; };
window.ktSecici = function (el) {
  if (!el) return;
  el.innerHTML = '<span class="lbl">Örnek sektör</span><div class="opts">' + Object.keys(KATALOG_SEKTORLER).map(function (k) {
    return '<a href="?s=' + k + '"' + (k === KT_KEY ? ' aria-current="true"' : '') + '>' + KATALOG_SEKTORLER[k].etiket + '</a>';
  }).join('') + '</div>';
};
