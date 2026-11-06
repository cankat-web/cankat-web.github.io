// Vitrin örneği: aynı tek sayfa, beş farklı dükkân. Gerçek sitede sadece bir işletmenin bilgileri olur.
// Saat biçimi: 'SS:DD–SS:DD' ya da 'Kapalı'. Gün sırası: Pazartesi … Pazar.
window.SEKTORLER = {
  terzi: {
    etiket: 'Terzi', ad: 'Cankat Terzi', alt: 'Tadilat · Kuru temizleme',
    renk: { accent: '#2f5d50', dark: '#234a3f', soft: '#f1efe8', bg: '#fbfaf7', ink: '#15201d' },
    baslik: 'Paçadan takım elbiseye, <em>tam ölçüsünde</em>.',
    giris: "Kazımdirik'te 20 yıllık terzi dükkânı. Tadilat, özel dikim ve kuru temizleme aynı yerde. Paça ve kısaltma çoğu zaman aynı gün hazır.",
    kapak: ['t-usta', 'Terzi atölyede kumaş ölçüyor', '50% 30%'],
    rozet: ['Randevu gerekmez', 'Dükkâna uğrayın, ölçünüzü yerinde alalım.'],
    bilgi: ['Teslim', 'Paça ve kısaltma aynı gün'],
    hizmetler: [
      ['Paça ve kısaltma', 'Pantolon, kot, etek ve kol boyu. Orijinal dikiş korunarak.', "150 TL'den"],
      ['Daraltma, genişletme', 'Bel, yan dikiş ve omuz ayarı; ceket, gömlek, elbise.', "250 TL'den"],
      ['Fermuar ve düğme', 'Mont, çanta, pantolon fermuarı; düğme ve ilik.', "200 TL'den"],
      ['Takım elbise tadilatı', 'Ceket ve pantolonun vücuda tam oturması için ölçülü tadilat.', "600 TL'den"],
      ['Abiye ve gelinlik', 'Boy, bel ve askı ayarı; prova ile, düğün tarihine göre planlanır.', 'Provada fiyatlanır'],
      ['Kuru temizleme', 'Takım, mont, kaban, perde. Ütülü ve askılı teslim.', '2–3 gün']
    ],
    not: 'Fiyatlar başlangıç fiyatıdır; kesin fiyat kıyafeti görünce dükkânda söylenir.',
    akis: ['Getirin, ölçelim, hazır olunca haber verelim', [
      ['Kıyafeti getirin', 'Randevu gerekmez. Mümkünse giyeceğiniz ayakkabıyla gelin.'],
      ['Yerinde ölçü', 'Ölçüyü alır, fiyatı ve teslim gününü hemen söyleriz.'],
      ['Hazır olunca haber', 'İş bitince mesajla haber veririz, uğrayıp alırsınız.']]],
    galeri: [['t-kesim', 'Kumaş kesimi'], ['t-dikis', 'Dikiş makinesi'], ['t-pres', 'Ütü ve pres'], ['t-temizleme', 'Kuru temizlemesi biten kıyafetler'], ['t-iplik', 'İplik rafı']],
    galeriBaslik: 'Atölyeden', puan: ['4,9', 138],
    saatler: ['09:00–19:00', '09:00–19:00', '09:00–19:00', '09:00–19:00', '09:00–19:00', '10:00–17:00', 'Kapalı'],
    ig: '@cankatterzi', mail: 'merhaba@cankatterzi.com'
  },
  optik: {
    etiket: 'Optik', ad: 'Cankat Optik', alt: 'Gözlük · Lens',
    renk: { accent: '#1d4ed8', dark: '#173ea8', soft: '#eef2f8', bg: '#fbfcfe', ink: '#0f172a' },
    baslik: 'Reçetenizle gelin, <em>gözlüğünüz</em> hazır olsun.',
    giris: 'Numaralı gözlük, güneş gözlüğü ve lens. Çerçeve seçimi, cam ölçüsü ve ayar dükkânda; çoğu cam 2–3 günde hazır.',
    kapak: ['s-optik-0', 'Gözlük denemesi', '50% 25%'],
    rozet: ['SGK anlaşmalı', 'Reçeteli gözlükte katkı payını dükkânda hesaplarız.'],
    bilgi: ['Cam teslimi', 'Çoğu cam 2–3 gün'],
    hizmetler: [
      ['Numaralı gözlük', 'Reçetenize göre cam ve çerçeve; inceltilmiş ve mavi ışık filtreli seçenekler.', "1.500 TL'den"],
      ['Güneş gözlüğü', 'Numaralı ya da numarasız; polarize camlar.', "900 TL'den"],
      ['Kontakt lens', 'Günlük, aylık ve renkli lens; ilk takışta deneme.', "450 TL'den"],
      ['Çocuk gözlüğü', 'Esnek ve kırılmaz çerçeveler.', "1.200 TL'den"],
      ['Ayar ve tamir', 'Vida, burunluk, sap ayarı. Bizden almasanız da yaparız.', 'Çoğu ücretsiz'],
      ['Cam değişimi', 'Mevcut çerçevenize yeni numara.', "800 TL'den"]
    ],
    not: 'Fiyatlar başlangıç fiyatıdır; cam ve çerçeve seçimine göre dükkânda netleşir.',
    akis: ['Reçeteyi getirin, birlikte seçelim', [
      ['Reçete ya da eski gözlük', 'Göz doktorunuzun reçetesini ya da kullandığınız gözlüğü getirin.'],
      ['Çerçeve ve cam', 'Yüzünüze uygun çerçeveyi deneyin, cam seçeneklerini anlatalım.'],
      ['Hazır olunca haber', 'Camlar takılınca mesajla haber veririz, ayarını yaparak teslim ederiz.']]],
    galeri: [['s-optik-1', 'Çerçeve standı'], ['s-optik-2', 'Vitrindeki gözlükler'], ['s-optik-3', 'Göz testi tablosu'], ['s-optik-4', 'Test tablosu'], ['s-optik-5', 'Güneş gözlüğü rafı']],
    galeriBaslik: 'Mağazadan', puan: ['4,8', 96],
    saatler: ['09:30–19:30', '09:30–19:30', '09:30–19:30', '09:30–19:30', '09:30–19:30', '10:00–18:00', 'Kapalı'],
    ig: '@cankatoptik', mail: 'merhaba@cankatoptik.com'
  },
  cicek: {
    etiket: 'Çiçekçi', ad: 'Cankat Çiçek', alt: 'Buket · Saksı · Organizasyon',
    renk: { accent: '#b4234f', dark: '#931b40', soft: '#f9eff1', bg: '#fffbfb', ink: '#24131a' },
    baslik: 'Taze çiçek, <em>aynı gün</em> kapınızda.',
    giris: 'Buket, kutuda çiçek, saksı bitkisi ve açılış çelengi. Bornova içine aynı gün teslim; dükkândan da seçebilirsiniz.',
    kapak: ['s-cicek-0', 'Çiçekçi dükkânının önü', '50% 50%'],
    rozet: ['Aynı gün teslim', "Saat 15:00'e kadar verilen siparişler aynı gün çıkar."],
    bilgi: ['Teslim', 'Bornova içi aynı gün'],
    hizmetler: [
      ['Buket', 'Mevsim çiçekleriyle, kart notunuzla birlikte.', "650 TL'den"],
      ['Kutuda çiçek', 'Gül ve mevsim çiçekleri, şık kutuda.', "900 TL'den"],
      ['Saksı bitkisi', 'Orkide, sukulent, ofis bitkileri; bakım bilgisiyle.', "400 TL'den"],
      ['Açılış ve tören', 'Ayaklı sepet ve çelenk; isim bandıyla.', "1.800 TL'den"],
      ['Düğün ve nişan', 'Gelin buketi, masa süsü, araba süsü.', 'Görüşmede fiyatlanır'],
      ['Abonelik', 'Ofis ve ev için haftalık taze çiçek.', 'Aylık anlaşma']
    ],
    not: 'Fiyatlar başlangıç fiyatıdır; mevsime ve çiçek seçimine göre değişir.',
    akis: ['Seçin, not yazalım, gönderelim', [
      ['Çiçeği seçin', 'Dükkândan seçin ya da yazın, fotoğrafla birkaç seçenek gönderelim.'],
      ['Notunuz', 'Kartın üstüne yazılacak notu ve teslim adresini alalım.'],
      ['Teslim', 'Teslim edildiğinde mesajla haber veririz.']]],
    galeri: [['s-cicek-1', 'Kovalarda taze çiçekler'], ['s-cicek-2', 'Dükkânda buket hazırlığı'], ['s-cicek-3', 'Hazır buketler'], ['s-cicek-4', 'Pembe buket'], ['s-cicek-5', 'Güller']],
    galeriBaslik: 'Dükkândan', puan: ['4,9', 211],
    saatler: ['08:30–20:00', '08:30–20:00', '08:30–20:00', '08:30–20:00', '08:30–20:00', '08:30–20:00', '10:00–16:00'],
    ig: '@cankatcicek', mail: 'siparis@cankatcicek.com'
  },
  oto: {
    etiket: 'Oto servis', ad: 'Cankat Oto', alt: 'Bakım · Lastik · Elektrik',
    renk: { accent: '#d97706', dark: '#b45309', soft: '#f4f2ee', bg: '#fcfbf9', ink: '#171512' },
    baslik: 'Aracınızın bakımı, <em>söylediğimiz</em> fiyata.',
    giris: 'Periyodik bakım, fren, lastik ve oto elektrik. İşe başlamadan önce fiyatı söyleriz, değişen parçayı size gösteririz.',
    kapak: ['s-oto-0', 'Usta motor bölümünde çalışıyor', '50% 40%'],
    rozet: ['Önce fiyat', 'Arızaya bakar, işe başlamadan fiyatı söyleriz.'],
    bilgi: ['Bakım süresi', 'Periyodik bakım aynı gün'],
    hizmetler: [
      ['Periyodik bakım', 'Yağ, filtreler, genel kontrol. Markanıza uygun yağ.', "2.500 TL'den"],
      ['Fren', 'Balata, disk, hidrolik; ölçüm ve test sürüşü.', "1.800 TL'den"],
      ['Lastik', 'Değişim, balans, rot; mevsimlik lastik saklama.', "600 TL'den"],
      ['Oto elektrik', 'Akü, marş, şarj, far ve arıza tespiti.', "500 TL'den"],
      ['Klima', 'Gaz dolumu, kaçak testi, polen filtresi.', "1.200 TL'den"],
      ['Muayene öncesi kontrol', 'TÜVTÜRK öncesi eksiklerin tespiti.', "400 TL"]
    ],
    not: 'Fiyatlar işçilik başlangıç fiyatıdır; parça fiyatı araca göre ayrıca söylenir.',
    akis: ['Getirin, bakalım, fiyatı söyleyelim', [
      ['Aracı getirin', 'Uygun saati telefonla sorun ya da doğrudan gelin.'],
      ['Arıza tespiti', 'Bakar, işe başlamadan fiyatı ve süreyi söyleriz.'],
      ['Teslim', 'Bitince haber veririz; değişen parçaları gösteririz.']]],
    galeri: [['s-oto-1', 'Motor bakımı'], ['s-oto-2', 'Lastik değişimi'], ['s-oto-3', 'Motor kayışları'], ['s-oto-4', 'Lastik rafı'], ['s-oto-5', 'Servis alanı']],
    galeriBaslik: 'Servisten', puan: ['4,7', 174],
    saatler: ['08:30–18:30', '08:30–18:30', '08:30–18:30', '08:30–18:30', '08:30–18:30', '09:00–15:00', 'Kapalı'],
    ig: '@cankatoto', mail: 'servis@cankatoto.com'
  },
  nalbur: {
    etiket: 'Nalbur', ad: 'Cankat Yapı Market', alt: 'Hırdavat · Boya · Elektrik',
    renk: { accent: '#0f766e', dark: '#0b5c56', soft: '#eef4f2', bg: '#fbfcfb', ink: '#10201d' },
    baslik: 'Vida da var, <em>tavsiye</em> de.',
    giris: 'Hırdavat, boya, elektrik ve tesisat malzemesi. Ne lazım olduğunu bilmiyorsanız anlatın, doğru parçayı birlikte bulalım.',
    kapak: ['s-nalbur-0', 'Hırdavat rafları', '50% 50%'],
    rozet: ['Mahalleye teslim', 'Boya ve ağır malzemeyi Kazımdirik içine getiririz.'],
    bilgi: ['Teslim', 'Mahalle içi aynı gün'],
    hizmetler: [
      ['Hırdavat', 'Vida, dübel, menteşe, kilit; tek tek de satılır.', 'Adet fiyatı'],
      ['Boya', 'İç ve dış cephe boya; istediğiniz rengi makinede karıştırırız.', 'Renk kartından seçin'],
      ['Elektrik', 'Kablo, priz, anahtar, aydınlatma.', 'Raf fiyatı'],
      ['Tesisat', 'Musluk, batarya, conta, boru ve ek parça.', 'Raf fiyatı'],
      ['El aletleri', 'Matkap, testere, tornavida seti; kiralık matkap.', 'Günlük kiralama'],
      ['Anahtar ve kesim', 'Anahtar kopyalama, cam ve tahta kesimi.', 'Bekleyerek']
    ],
    not: 'Güncel fiyat ve stok için telefonla ya da WhatsApp’tan sorabilirsiniz.',
    akis: ['Anlatın, bulalım, getirelim', [
      ['Ne lazım?', 'Bozulan parçanın fotoğrafını atın ya da yanınızda getirin.'],
      ['Doğru parça', 'Uyan parçayı bulur, nasıl takılacağını anlatırız.'],
      ['Teslim', 'Ağır malzemeyi aynı gün adresinize getiririz.']]],
    galeri: [['s-nalbur-1', 'El aletleri duvarı'], ['s-nalbur-2', 'Anahtar ve pense rafı'], ['s-nalbur-3', 'Boya rulosu ve renkler'], ['s-nalbur-4', 'Mağaza koridoru'], ['s-nalbur-5', 'Alışveriş sepeti']],
    galeriBaslik: 'Mağazadan', puan: ['4,8', 152],
    saatler: ['08:00–19:30', '08:00–19:30', '08:00–19:30', '08:00–19:30', '08:00–19:30', '08:00–19:30', '10:00–15:00'],
    ig: '@cankatyapi', mail: 'merhaba@cankatyapi.com'
  },
  servis: {
    etiket: 'Teknik servis', ad: 'Cankat Teknik', alt: 'Klima · Kombi · Beyaz eşya',
    renk: { accent: '#1769aa', dark: '#125588', soft: '#eef4f9', bg: '#fbfcfd', ink: '#0f1b26' },
    baslik: 'Arıza mı var? <em>Aynı gün</em> kapınızdayız.',
    giris: 'Klima, kombi ve beyaz eşya servisi; montaj, bakım ve onarım. Gelmeden önce yaklaşık fiyatı söyleriz, yapılan işe garanti veririz.',
    kapak: ['s-servis-0', 'Teknisyen tesisatı kontrol ediyor', '50% 30%'],
    rozet: ['Aynı gün servis', "Saat 14:00'e kadar arayanlara aynı gün geliyoruz."],
    bilgi: ['Servis', 'Bornova ve çevresi aynı gün'],
    hizmetler: [
      ['Klima montajı', 'Yeni klima montajı, söküm ve taşıma.', "2.500 TL'den"],
      ['Klima bakımı', 'Filtre, iç ve dış ünite temizliği, gaz kontrolü.', "900 TL'den"],
      ['Kombi bakımı', 'Yıllık bakım, petek temizliği ve basınç ayarı.', "1.100 TL'den"],
      ['Kombi arızası', 'Ateşleme, su kaçağı, sıcak su sorunları.', 'Yerinde tespit'],
      ['Beyaz eşya onarımı', 'Çamaşır ve bulaşık makinesi, buzdolabı.', 'Yerinde tespit'],
      ['Tesisat', 'Musluk, batarya, gider açma, su kaçağı.', "600 TL'den"]
    ],
    not: 'Fiyatlar işçilik başlangıç fiyatıdır; parça gerekirse önce size sorulur.',
    akis: ['Arayın, gelelim, fiyatı söyleyip yapalım', [
      ['Arayın ya da yazın', 'Arızayı kısaca anlatın, mümkünse fotoğraf gönderin.'],
      ['Yerinde tespit', 'Gelir bakarız; işe başlamadan fiyatı söyleriz.'],
      ['Garantili iş', 'Yaptığımız işçiliğe 6 ay garanti veririz.']]],
    galeri: [['s-servis-1', 'Dış ünite'], ['s-servis-2', 'Klima tesisatı'], ['s-servis-3', 'Onarım'], ['s-servis-4', 'Servis aletleri'], ['s-servis-5', 'Dış cephe üniteleri']],
    galeriBaslik: 'Sahadan', puan: ['4,8', 187],
    saatler: ['08:30–19:00', '08:30–19:00', '08:30–19:00', '08:30–19:00', '08:30–19:00', '09:00–17:00', 'Acil çağrıyla'],
    ig: '@cankatteknik', mail: 'servis@cankatteknik.com'
  },
  matbaa: {
    etiket: 'Matbaa', ad: 'Cankat Matbaa', alt: 'Baskı · Tabela · Promosyon',
    renk: { accent: '#c2185b', dark: '#9c1449', soft: '#f8f0f4', bg: '#fdfbfc', ink: '#1d1218' },
    baslik: 'Kartvizitten branda, <em>ertesi gün</em> elinizde.',
    giris: 'Kartvizit, broşür, menü, etiket, davetiye, branda ve tabela. Tasarımınız yoksa biz hazırlarız; onay verdiğiniz an baskıya gireriz.',
    kapak: ['s-matbaa-0', 'Matbaa atölyesi', '50% 50%'],
    rozet: ['Ücretsiz tasarım', '1.000 adet ve üzeri kartvizitte tasarım bizden.'],
    bilgi: ['Teslim', 'Kartvizit ertesi gün'],
    hizmetler: [
      ['Kartvizit', 'Mat, parlak, selefonlu; tek ya da çift yüz.', "1.000 adet 650 TL'den"],
      ['Broşür ve el ilanı', 'A5, A4, katlamalı broşür.', "1.000 adet 1.400 TL'den"],
      ['Menü ve etiket', 'Restoran menüsü, ürün etiketi, sticker.', 'Adede göre'],
      ['Davetiye', 'Düğün, nişan, sünnet davetiyesi; zarflı.', "Adet 25 TL'den"],
      ['Branda ve afiş', 'Dış mekân branda, roll-up, vinil afiş.', "m² 350 TL'den"],
      ['Tabela', 'Işıklı ve ışıksız tabela, kutu harf, montaj.', 'Keşifle fiyatlanır']
    ],
    not: 'Fiyatlar başlangıç fiyatıdır; kâğıt, adet ve işleme göre değişir.',
    akis: ['Dosyanızı gönderin, onaylayın, alın', [
      ['Dosya ya da fikir', 'Hazır dosyanızı ya da ne istediğinizi WhatsApp’tan gönderin.'],
      ['Prova', 'Baskı öncesi dijital prova gönderilir, onayınızla basılır.'],
      ['Teslim', 'Hazır olunca haber veririz; dükkândan alın ya da kargolayalım.']]],
    galeri: [['s-matbaa-1', 'Baskı makinesi'], ['s-matbaa-2', 'Geniş format baskı'], ['s-matbaa-3', 'Renk kartelası'], ['s-matbaa-4', 'Kartvizitler'], ['s-matbaa-5', 'Dijital baskı']],
    galeriBaslik: 'Atölyeden', puan: ['4,7', 129],
    saatler: ['09:00–19:00', '09:00–19:00', '09:00–19:00', '09:00–19:00', '09:00–19:00', '10:00–16:00', 'Kapalı'],
    ig: '@cankatmatbaa', mail: 'baski@cankatmatbaa.com'
  }
};
