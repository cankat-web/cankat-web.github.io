// Kurumsal örneği: aynı dört sayfa, altı farklı işletme. Gerçek sitede yalnızca bir işletmenin bilgileri olur.
// Seçim ?s= ile gelir ve sayfalar arasında taşınır.
(function () {
  var M = function (a, b, c) { return [a, b, c]; };
  window.KU_SEKTORLER = {
    musavir: {
      etiket: 'Mali müşavir', ad: 'Cankat Mali Müşavirlik', kisa: 'Cankat', alt: 'Mali Müşavirlik',
      renk: { accent: '#1f3b63', dark: '#152a48', soft: '#f4f6f9' },
      ust: "Bornova · 2008'den beri", baslik: 'İşinizin hesabını biz tutalım, siz işinize bakın.',
      giris: 'Şahıs şirketinden anonim şirkete; defter, beyanname, bordro ve şirket kuruluşu tek yerden. Her ay ne ödeyeceğinizi önceden bilirsiniz.',
      cta: 'Ön görüşme isteyin', foto: ['k-ekip', 'k-masa', 'k-ofis'],
      sayilar: [['18', 'yıllık deneyim'], ['240+', 'aktif müşteri'], ['6', 'kişilik ekip'], ['24 saat', 'içinde dönüş']],
      hizBaslik: 'Ayın sonunu dert etmeyeceğiniz bir düzen',
      hizmetler: [
        ['Defter ve beyanname', 'Defter tutma, KDV, muhtasar ve gelir/kurumlar vergisi beyannameleri zamanında.', M('Aylık defter ve beyanname takibi', 'Son günden önce gönderim', 'Ödeme tutarları ay başında size yazılır')],
        ['Şirket kuruluşu', 'Şahıs, limited ve anonim şirket kuruluşu; vergi dairesi ve ticaret sicili işlemleri.', M('Şirket türü seçiminde danışmanlık', 'Ticaret sicili ve vergi dairesi işlemleri', 'Gerekli belgelerin listesi')],
        ['Bordro ve SGK', 'Personel girişi-çıkışı, aylık bordro, SGK bildirgeleri ve teşvik takibi.', M('İşe giriş ve çıkış bildirgeleri', 'Aylık bordro ve muhtasar', 'Teşvik ve indirim kontrolü')],
        ['E-dönüşüm', 'E-fatura, e-arşiv ve e-defter geçişi; yazılım kurulumu ve kullanım desteği.', M('Geçiş zorunluluğu kontrolü', 'Yazılım kurulumu', 'Kullanım eğitimi')],
        ['Vergi danışmanlığı', 'Yatırım, teşvik ve vergi planlaması; inceleme ve uzlaşma süreçlerinde destek.', M('Yatırım öncesi vergi planı', 'İnceleme sürecinde destek', 'Uzlaşma görüşmeleri')],
        ['Yeni girişimciye destek', 'İlk yılınızda hangi belgeyi ne zaman vereceğiniz, sade bir takvimle.', M('Genç girişimci istisnası kontrolü', 'İlk yıl vergi takvimi', 'Fatura ve kayıt düzeni')]],
      nasil: ['Sürpriz yok, gecikme yok.', ['Her ayın başında o ay ödenecek vergi ve SGK tutarlarını size yazarız.', 'Belgelerinizi WhatsApp ya da e-posta ile gönderirsiniz, ofise gelmeniz gerekmez.', 'Sabit aylık ücret, sözleşmede yazılı. Ek iş olursa önceden söyleriz.', 'Size atanmış tek bir muhatap; her seferinde baştan anlatmazsınız.']],
      ctaBaslik: 'Mevcut müşavirinizden geçiş yapmak mı istiyorsunuz?',
      hizGiris: 'Aşağıdaki hizmetler aylık sabit ücretle ya da iş bazında verilir. Size uygun olanı ön görüşmede birlikte belirleriz.',
      hakBaslik: "Bornova'da, aynı adreste 18 yıl", degerler: ['Zamanında: beyanname son güne kalmaz.', 'Açık: ne yaptığımızı ve ne kadar tuttuğunu yazılı olarak bilirsiniz.', 'Ulaşılabilir: mesai içinde aynı gün dönüş.'],
      ekip: [['Burak Yıldız', 'Serbest Muhasebeci Mali Müşavir'], ['Elif Demir', 'Mali Müşavir'], ['Zeynep Kaya', 'Bordro ve SGK uzmanı']],
      iltBaslik: 'Ön görüşme isteyin', mesaj: 'Kısaca işinizi ve ihtiyacınızı yazın',
      saat: ['Hafta içi 09:00–18:00', 'Cumartesi randevuyla'], mail: 'ornek@cankatmusavirlik.com', kunye: 'SMMM Oda sicil no: 00000'
    },
    insaat: {
      etiket: 'İnşaat ve mimarlık', ad: 'Cankat Yapı & Mimarlık', kisa: 'Cankat', alt: 'Yapı · Mimarlık',
      renk: { accent: '#9a4a12', dark: '#7c3b0e', soft: '#f7f3ef' },
      ust: 'İzmir · Konut ve ticari yapılar', baslik: 'Projeden anahtar teslime, tek muhatap.',
      giris: 'Mimari proje, ruhsat, yapım ve tadilat. İşe başlamadan keşif yapar, iş programını ve bütçeyi yazılı veririz.',
      cta: 'Keşif ve teklif isteyin', foto: ['ku-insaat-0', 'ku-insaat-1', 'ku-insaat-2'],
      sayilar: [['22', 'yıllık deneyim'], ['140+', 'tamamlanan proje'], ['35', 'kişilik saha ekibi'], ['48 saat', 'içinde keşif']],
      hizBaslik: 'Arsadan iskâna, her aşamada yanınızdayız',
      hizmetler: [
        ['Mimari proje', 'Konut, villa ve ticari yapılar için mimari ve uygulama projeleri.', M('Ön tasarım ve 3D görsel', 'Belediye onayı için proje seti', 'Uygulama detayları')],
        ['Ruhsat ve izinler', 'Yapı ruhsatı, iskân ve belediye süreçlerinin takibi.', M('Gerekli belgelerin listesi', 'Belediye başvuru takibi', 'İskân süreci')],
        ['Anahtar teslim yapım', 'Kaba inşaattan ince işlere kadar tüm yapım süreci.', M('Yazılı iş programı', 'Haftalık fotoğraflı rapor', 'Garanti belgesiyle teslim')],
        ['Kentsel dönüşüm', 'Riskli yapı tespitinden yeni binaya, kat maliki toplantıları dahil.', M('Riskli yapı tespiti', 'Kat malikleriyle sözleşme', 'Kira yardımı başvurusu')],
        ['Tadilat ve dekorasyon', 'Daire, ofis ve mağaza yenileme; mutfak, banyo, zemin.', M('Ücretsiz keşif', 'Malzeme seçimi', 'Söz verilen tarihte teslim')],
        ['Statik ve güçlendirme', 'Mevcut yapılar için statik analiz ve güçlendirme projesi.', M('Karot ve analiz', 'Güçlendirme projesi', 'Uygulama denetimi')]],
      nasil: ['Bütçe ve takvim baştan belli.', ['Keşiften sonra kalem kalem yazılı teklif veririz.', 'İş programı sözleşmeye eklenir; gecikme olursa nedenini yazılı bildiririz.', 'Her hafta şantiyeden fotoğraflı ilerleme raporu gönderilir.', 'Teslimden sonra garanti süresince aynı ekip ilgilenir.']],
      ctaBaslik: 'Arsanız ya da yenilenecek bir yeriniz mi var?',
      hizGiris: 'Hizmetleri tek tek ya da anahtar teslim paket olarak veriyoruz. Keşiften sonra size özel teklif hazırlanır.',
      hakBaslik: "İzmir'de 22 yıl, 140'tan fazla yapı", degerler: ['Şeffaf: her kalemin fiyatını yazılı görürsünüz.', 'Zamanında: iş programına sadık kalırız.', 'Sorumlu: teslimden sonra da ulaşabilirsiniz.'],
      ekip: [['Mimar Selim Arı', 'Kurucu, Y. Mimar'], ['İnş. Müh. Derya Tok', 'Şantiye şefi'], ['Mimar Bora Uz', 'İç mimari ve tadilat']],
      iltBaslik: 'Keşif ve teklif isteyin', mesaj: 'Arsa ya da yapı bilgisi, yaklaşık metrekare ve ne yapılmasını istediğiniz',
      saat: ['Hafta içi 08:30–18:00', 'Cumartesi 09:00–13:00'], mail: 'proje@cankatyapi.com', kunye: 'Yapı müteahhitliği yetki belgesi no: 00000'
    },
    egitim: {
      etiket: 'Eğitim ve kurs', ad: 'Cankat Eğitim', kisa: 'Cankat', alt: 'Dil · Etüt · Kurs',
      renk: { accent: '#1d6b52', dark: '#155240', soft: '#f1f6f4' },
      ust: 'Bornova · İlkokuldan yetişkine', baslik: 'Küçük sınıflar, takip edilen öğrenciler.',
      giris: 'İngilizce, Almanca, LGS ve YKS etüdü, yetişkin dil kursları. En fazla 8 kişilik sınıflar ve her ay veli bilgilendirmesi.',
      cta: 'Kayıt için bilgi alın', foto: ['ku-egitim-0', 'ku-egitim-1', 'ku-egitim-2'],
      sayilar: [['12', 'yıllık deneyim'], ['8', 'kişilik sınıflar'], ['14', 'öğretmen'], ['Ücretsiz', 'seviye tespiti']],
      hizBaslik: 'Her yaşa ve hedefe uygun program',
      hizmetler: [
        ['İngilizce', 'Çocuk, genç ve yetişkin grupları; konuşma ağırlıklı.', M('Seviye tespit sınavı', 'Haftada 2 ders', 'Dönem sonu sertifika')],
        ['Almanca', 'A1–B2 seviyeler, Goethe sınavına hazırlık.', M('Sınav takvimine göre plan', 'Deneme sınavları', 'Konuşma kulübü')],
        ['LGS hazırlık', '7. ve 8. sınıflar için etüt ve deneme sınavları.', M('Haftalık deneme', 'Konu eksik analizi', 'Aylık veli görüşmesi')],
        ['YKS hazırlık', 'TYT ve AYT için ders ve soru çözümü.', M('Kişisel çalışma programı', 'Rehberlik görüşmeleri', 'Deneme sınavı analizi')],
        ['Özel ders', 'Birebir ya da iki kişilik dersler, istenen saatte.', M('Ücretsiz ilk görüşme', 'Esnek saat', 'Ders sonu kısa rapor')],
        ['Yaz okulu', 'İlkokul öğrencileri için yaz dönemi programı.', M('Ders ve etkinlik', 'Kitap okuma saati', 'Servis seçeneği')]],
      nasil: ['Öğrenciyi takip eden bir düzen.', ['Kayıttan önce ücretsiz seviye tespiti yapılır.', 'Sınıflar en fazla 8 kişi; her öğrenci tanınır.', 'Her ay veliye yazılı gelişim notu gönderilir.', 'Kaçırılan ders telafi saatinde tekrar edilir.']],
      ctaBaslik: 'Çocuğunuz için doğru programı birlikte seçelim.',
      hizGiris: 'Programlar dönemlik ya da aylık kayıtla alınır. Seviye tespitinden sonra uygun grubu öneririz.',
      hakBaslik: "Bornova'da 12 yıldır aynı sınıflarda", degerler: ['Küçük sınıf: her öğrenciye zaman.', 'Ölçülebilir: düzenli deneme ve rapor.', 'Ulaşılabilir: velilere aynı gün dönüş.'],
      ekip: [['Ayla Yurt', 'Kurucu, İngilizce öğretmeni'], ['Kaan Erol', 'Matematik öğretmeni'], ['Nil Sezer', 'Rehber öğretmen']],
      iltBaslik: 'Kayıt için bilgi alın', mesaj: 'Öğrencinin yaşı, sınıfı ve ilgilendiğiniz program',
      saat: ['Hafta içi 10:00–20:00', 'Cumartesi 09:00–17:00'], mail: 'kayit@cankategitim.com', kunye: 'MEB kurum kodu: 000000'
    },
    org: {
      etiket: 'Organizasyon', ad: 'Cankat Davet & Organizasyon', kisa: 'Cankat', alt: 'Düğün · Nişan · Kurumsal',
      renk: { accent: '#8b2c4a', dark: '#6f223b', soft: '#f8f2f4' },
      ust: 'Bornova · 400 kişilik salon', baslik: 'Gününüz için tek bir şeyi düşünün: misafirlerinizi.',
      giris: 'Düğün, nişan, kına ve kurumsal davetler. Salon, yemek, süsleme, müzik ve fotoğraf tek ekipten, tek sözleşmeyle.',
      cta: 'Tarih ve teklif sorun', foto: ['ku-org-0', 'ku-org-1', 'ku-org-2'],
      sayilar: [['400', 'kişilik salon'], ['900+', 'davet'], ['3', 'menü seçeneği'], ['1', 'sözleşme, tek muhatap']],
      hizBaslik: 'Davetin her parçası aynı ekipte',
      hizmetler: [
        ['Düğün', 'Salon, yemekli ya da kokteyl menü, süsleme ve müzik.', M('Deneme menüsü', 'Masa ve süsleme planı', 'Gün akışı provası')],
        ['Nişan ve kına', 'Ev ya da salonda nişan ve kına organizasyonu.', M('Tema ve süsleme', 'Kına bohçası ve aksesuar', 'Müzik ve ekip')],
        ['Kurumsal davet', 'Lansman, yılbaşı ve şirket yemekleri.', M('Ses ve sahne', 'Marka görünürlüğü', 'Faturalı hizmet')],
        ['Yemek ve ikram', 'Mutfağımızdan yemekli menü, kokteyl ve pasta.', M('3 menü seçeneği', 'Diyet ve çocuk menüsü', 'Tadım günü')],
        ['Süsleme', 'Masa, sahne, giriş ve çiçek tasarımı.', M('Renk ve tema seçimi', 'Çiçek tasarımı', 'Kurulum ve söküm')],
        ['Fotoğraf ve video', 'Anlaşmalı ekiple fotoğraf, video ve drone çekimi.', M('Hikâye çekimi', 'Albüm', 'Kısa klip')]],
      nasil: ['Her şey yazılı, sürpriz yok.', ['Tarih ve kişi sayısına göre yazılı teklif.', 'Tadım günü ve deneme menüsü sözleşmeden önce.', 'Davet gününden bir hafta önce akış provası.', 'Gün boyunca size atanmış bir organizasyon sorumlusu.']],
      ctaBaslik: 'Tarihiniz boş mu? Hemen bakalım.',
      hizGiris: 'Hizmetleri paket ya da ayrı ayrı alabilirsiniz. Tarih, kişi sayısı ve bütçenize göre teklif hazırlanır.',
      hakBaslik: "Bornova'da 900'den fazla davet", degerler: ['Planlı: her davet için yazılı akış.', 'Tek muhatap: bütün işleri bir kişiyle konuşursunuz.', 'Temiz: yemek ve mutfak hijyen belgeli.'],
      ekip: [['Seda Kural', 'Organizasyon sorumlusu'], ['Cem Ilık', 'Mutfak şefi'], ['Gül Ayaz', 'Süsleme ve çiçek']],
      iltBaslik: 'Tarih ve teklif sorun', mesaj: 'Davet türü, tarih ve yaklaşık kişi sayısı',
      saat: ['Her gün 10:00–20:00', 'Salon gezisi randevuyla'], mail: 'davet@cankatorganizasyon.com', kunye: ''
    },
    temizlik: {
      etiket: 'Temizlik ve nakliyat', ad: 'Cankat Temizlik', kisa: 'Cankat', alt: 'Ev · Ofis · İnşaat sonrası',
      renk: { accent: '#0e6f8c', dark: '#0b5870', soft: '#eff6f8' },
      ust: 'İzmir geneli · Sigortalı ekip', baslik: 'Temiz bir ev, sizin bir şey yapmanıza gerek kalmadan.',
      giris: 'Ev, ofis, inşaat sonrası ve koltuk-halı yıkama. Malzeme ve makine bizden, ekip sigortalı ve aynı kişiler.',
      cta: 'Fiyat alın', foto: ['ku-temizlik-0', 'ku-temizlik-1', 'ku-temizlik-2'],
      sayilar: [['9', 'yıllık deneyim'], ['30+', 'düzenli ofis'], ['18', 'kişilik ekip'], ['Aynı gün', 'fiyat']],
      hizBaslik: 'İhtiyacınıza göre tek seferlik ya da düzenli',
      hizmetler: [
        ['Ev temizliği', 'Haftalık, iki haftalık ya da tek seferlik detaylı temizlik.', M('Aynı ekip her seferinde', 'Malzeme bizden', 'Kontrol listesiyle teslim')],
        ['Ofis temizliği', 'Mesai öncesi ya da sonrası düzenli ofis temizliği.', M('Sözleşmeli aylık plan', 'Sarf malzemesi takibi', 'Faturalı hizmet')],
        ['İnşaat sonrası', 'Tadilat ve yeni bina sonrası kaba ve ince temizlik.', M('Boya ve harç lekesi', 'Cam ve doğrama', 'Taşınmaya hazır teslim')],
        ['Koltuk ve halı yıkama', 'Yerinde koltuk yıkama, atölyede halı yıkama.', M('Servisle alım ve teslim', 'Leke ön işlemi', '2–3 gün teslim')],
        ['Cam ve dış cephe', 'Yüksek camlar ve dış cephe temizliği.', M('İş güvenliği ekipmanı', 'Sigortalı ekip', 'Hafta sonu seçeneği')],
        ['Ev taşıma', 'Paketleme, taşıma ve yeni evde yerleştirme.', M('Ücretsiz ekspertiz', 'Sigortalı taşıma', 'Montaj ve demontaj')]],
      nasil: ['Kimin geleceğini bilirsiniz.', ['Fiyatı fotoğraf ya da kısa keşifle aynı gün veririz.', 'Ekip sigortalıdır; eve her seferinde aynı kişiler gelir.', 'İş bitince kontrol listesiyle birlikte dolaşıp teslim ederiz.', 'Memnun kalmadığınız yeri 24 saat içinde tekrar yaparız.']],
      ctaBaslik: 'Fotoğraf gönderin, fiyatı hemen söyleyelim.',
      hizGiris: 'Fiyatlar metrekareye ve işin türüne göre belirlenir. Düzenli işlerde aylık sabit ücret uygulanır.',
      hakBaslik: "İzmir'de 9 yıl, sigortalı ve kalıcı ekip", degerler: ['Güvenilir: sigortalı ve kimliği belli ekip.', 'Titiz: kontrol listesiyle teslim.', 'Esnek: hafta sonu ve mesai dışı.'],
      ekip: [['Hakan Çetin', 'Kurucu'], ['Aysel Demir', 'Ev ekibi sorumlusu'], ['Murat Aslan', 'Ofis ve inşaat ekibi']],
      iltBaslik: 'Fiyat alın', mesaj: 'Adres, yaklaşık metrekare ve istediğiniz hizmet',
      saat: ['Her gün 08:00–20:00', 'Pazar randevuyla'], mail: 'fiyat@cankattemizlik.com', kunye: ''
    },
    sigorta: {
      etiket: 'Sigorta', ad: 'Cankat Sigorta', kisa: 'Cankat', alt: 'Sigorta Aracılık',
      renk: { accent: '#24497a', dark: '#1b3860', soft: '#f2f5f9' },
      ust: 'Bornova · Yetkili acente', baslik: 'Birçok şirketin teklifi, tek görüşmede.',
      giris: 'Trafik, kasko, konut, DASK, sağlık ve işyeri sigortası. Anlaşmalı şirketlerin tekliflerini karşılaştırır, hasarda yanınızda oluruz.',
      cta: 'Teklif isteyin', foto: ['ku-sigorta-0', 'ku-sigorta-1', 'ku-sigorta-2'],
      sayilar: [['15', 'yıllık deneyim'], ['12', 'anlaşmalı şirket'], ['3.000+', 'poliçe'], ['7/24', 'hasar desteği']],
      hizBaslik: 'Size uygun poliçe, karşılaştırarak',
      hizmetler: [
        ['Trafik ve kasko', 'Zorunlu trafik sigortası ve kasko; şirket karşılaştırmalı.', M('Plaka ve ruhsatla hızlı teklif', 'Teminat karşılaştırması', 'Yenileme hatırlatması')],
        ['Konut ve DASK', 'Zorunlu deprem sigortası ve konut paketi.', M('DASK poliçesi', 'Eşya ve yangın teminatı', 'Kiracı seçenekleri')],
        ['Sağlık', 'Tamamlayıcı ve özel sağlık sigortası.', M('Anlaşmalı hastane listesi', 'Bekleme süreleri', 'Aile paketleri')],
        ['İşyeri', 'Dükkân, ofis ve depo için işyeri paket sigortası.', M('Yangın, hırsızlık, cam kırılması', 'Üçüncü şahıs sorumluluk', 'Kâr kaybı teminatı')],
        ['Seyahat', 'Vize için seyahat sağlık sigortası, aynı gün poliçe.', M('Vize şartlarına uygun', 'Aynı gün poliçe', 'Yurt dışı destek hattı')],
        ['Hasar takibi', 'Hasar anında ihbar, ekspertiz ve ödeme takibi.', M('7/24 ulaşılabilir hat', 'Ekspertiz takibi', 'Ödeme sonuna kadar destek')]],
      nasil: ['Poliçeyi satmakla bitmez.', ['Birden fazla şirketten teklifi yan yana gösteririz.', 'Teminatları sade bir dille anlatırız; neyin karşılanmadığını da söyleriz.', 'Bitiş tarihinden önce yenileme için haber veririz.', 'Hasar anında ihbardan ödemeye kadar süreci biz takip ederiz.']],
      ctaBaslik: 'Poliçenizin yenilenmesi mi yaklaşıyor?',
      hizGiris: 'Teklifler anlaşmalı sigorta şirketlerinden alınır. Fiyat ve teminatı karşılaştırıp size en uygununu öneririz.',
      hakBaslik: "Bornova'da 15 yıllık yetkili acente", degerler: ['Tarafsız: birden fazla şirketin teklifi.', 'Açık: teminat ve istisnalar sade dille.', 'Yanınızda: hasar anında takip.'],
      ekip: [['Okan Şahin', 'Acente yöneticisi'], ['Merve Tunç', 'Teknik personel'], ['Ece Bulut', 'Hasar sorumlusu']],
      iltBaslik: 'Teklif isteyin', mesaj: 'Hangi sigorta için teklif istediğiniz; araç için plaka ve ruhsat seri no',
      saat: ['Hafta içi 09:00–18:30', 'Cumartesi 10:00–14:00'], mail: 'teklif@cankatsigorta.com', kunye: 'Levha kayıt no: 00000'
    }
  };

  var S = window.KU_SEKTORLER;
  var q = (location.search.match(/[?&]s=([a-z]+)/) || [])[1], k = 'musavir';
  if (q && S[q]) k = q; else { try { var m = sessionStorage.getItem('kurumsal_s'); if (m && S[m]) k = m; } catch (e) {} }
  try { sessionStorage.setItem('kurumsal_s', k); } catch (e) {}
  window.KU_KEY = k; window.KU = S[k];
  var R = document.documentElement.style;
  R.setProperty('--accent', KU.renk.accent); R.setProperty('--accent-dark', KU.renk.dark); R.setProperty('--soft', KU.renk.soft);
})();

window.kuUygula = function () {
  var K = window.KU, $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var set = function (id, v, html) { var el = $(id); if (el) el[html ? 'innerHTML' : 'textContent'] = v; };
  var img = function (k) { return '../assets/img/' + k + '.jpg'; };
  document.querySelectorAll('[data-ku]').forEach(function (el) { var v = K[el.dataset.ku]; if (v != null) el.textContent = v; });
  document.title = document.title.replace(/Cankat Mali Müşavirlik/g, K.ad);
  // Sektör seçici ve sayfalar arası bağlantılar
  var bar = $('ku-sek');
  if (bar) bar.innerHTML = '<span class="lbl">Örnek sektör</span><div class="opts">' + Object.keys(KU_SEKTORLER).map(function (k) {
    return '<a href="?s=' + k + '"' + (k === KU_KEY ? ' aria-current="true"' : '') + '>' + KU_SEKTORLER[k].etiket + '</a>';
  }).join('') + '</div>';
  document.querySelectorAll('a[href$=".html"]').forEach(function (a) { var h = a.getAttribute('href'); if (!/^(\.\.|http)/.test(h)) a.setAttribute('href', h + '?s=' + KU_KEY); });
  // Ana sayfa
  set('h-ust', K.ust); set('h-baslik', K.baslik); set('h-giris', K.giris); set('h-cta', K.cta);
  if ($('h-img')) { $('h-img').src = img(K.foto[0]); $('h-img').alt = K.ad; $('n-img').src = img(K.foto[1]); $('n-img').alt = K.hizmetler[0][0]; }
  set('sayilar', K.sayilar.map(function (s) { return '<div><b>' + esc(s[0]) + '</b><span>' + esc(s[1]) + '</span></div>'; }).join(''), true);
  set('hiz-b', K.hizBaslik);
  set('hiz-ev', K.hizmetler.slice(0, 4).map(function (h, i) { return '<div class="service"><span class="n">' + String(i + 1).padStart(2, '0') + '</span><div><h3>' + esc(h[0]) + '</h3><p>' + esc(h[1]) + '</p></div></div>'; }).join(''), true);
  set('n-b', K.nasil[0]); set('n-l', K.nasil[1].map(function (x) { return '<li>' + esc(x) + '</li>'; }).join(''), true);
  set('cta-b', K.ctaBaslik);
  // Hizmetler
  set('hz-giris', K.hizGiris);
  set('hz-liste', K.hizmetler.map(function (h, i) { return '<div class="detail"><div><span class="eyebrow">' + String(i + 1).padStart(2, '0') + '</span><h2 style="margin-top:10px">' + esc(h[0]) + '</h2></div><div><p class="lead" style="font-size:17.5px">' + esc(h[1]) + '</p><ul>' + h[2].map(function (m) { return '<li>' + esc(m) + '</li>'; }).join('') + '</ul></div></div>'; }).join(''), true);
  // Hakkımızda
  set('hk-b', K.hakBaslik); set('hk-d', K.degerler.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join(''), true);
  if ($('hk-img')) $('hk-img').src = img(K.foto[2]);
  set('ekip', K.ekip.map(function (e, i) { return '<div class="person"><div class="ph"><img src="../assets/img/k-p' + (i + 1) + '.jpg" alt="' + esc(e[0]) + '" loading="lazy" style="object-position:50% 20%"></div><h3>' + esc(e[0]) + '</h3><span>' + esc(e[1]) + '</span></div>'; }).join(''), true);
  // İletişim
  set('il-b', K.iltBaslik);
  if ($('konu')) $('konu').innerHTML = K.hizmetler.map(function (h) { return '<option>' + esc(h[0]) + '</option>'; }).join('') + '<option>Diğer</option>';
  if ($('mesaj')) $('mesaj').placeholder = K.mesaj;
  // Ortak alt bilgi
  set('ft-saat', K.saat[0] + '<br>' + K.saat[1], true); set('ft-mail', K.mail); set('il-mail', K.mail); set('il-saat', K.saat[0]);
  set('kunye', K.kunye ? K.kunye + ' · ' : '');
};
