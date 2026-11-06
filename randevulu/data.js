// Randevu verisi. Gerçek sitede randevular sunucuda tutulur ve işletmeye bildirim gider; şablonda bu tarayıcıda saklanır.
// Örnekte altı sektör var; gerçek sitede yalnızca bir işletmenin bilgileri olur.
(function () {
  var Y = function (bas, bit, adim) { var o = [], m = bas; while (m < bit) { o.push(String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0')); m += adim; } return o; };
  var KLINIK = Y(540, 690, 30).concat(Y(780, 1080, 30)); // 09:00–11:30, 13:00–17:30
  window.RV_SEKTORLER = {
    dis: {
      etiket: 'Diş kliniği', ad: 'Cankat Diş Kliniği', kisa: 'Klinik',
      renk: { accent: '#0d6e6e', dark: '#0a5555', soft: '#f1f7f7' },
      ust: 'Ağız ve diş sağlığı · Bornova', baslik: 'Randevunuzu iki dakikada alın.',
      giris: 'Tedaviyi seçin, size uygun gün ve saati işaretleyin. Randevunuz onaylandığında size mesaj gelir.',
      foto: ['d-hasta', 'Hekim hastayla muayene öncesi konuşuyor'],
      hizmetTerim: 'Tedavi', hizmetCogul: 'Tedaviler', hizmetSoru: 'Hangi konuda yardımcı olabiliriz?', ipucu: 'Emin değilseniz "Muayene ve kontrol" seçin.',
      kisiTerim: 'Hasta', ekipBaslik: 'Hekimlerimiz', ekipSoru: 'Sizi kim karşılayacak',
      hizmetler: [
        { id: 'muayene', ad: 'Muayene ve kontrol', sure: 30, not: 'Genel ağız ve diş muayenesi' },
        { id: 'temizlik', ad: 'Diş taşı temizliği', sure: 45, not: 'Detartraj ve cila' },
        { id: 'dolgu', ad: 'Dolgu', sure: 45, not: 'Muayene sonrası planlanır' },
        { id: 'kanal', ad: 'Kanal tedavisi', sure: 60, not: 'Birden fazla seans sürebilir' },
        { id: 'beyazlatma', ad: 'Diş beyazlatma', sure: 60, not: 'Ofis tipi uygulama' },
        { id: 'cocuk', ad: 'Çocuk diş hekimliği', sure: 30, not: 'Çocuklar için kontrol ve koruyucu uygulamalar' }],
      ekip: [{ ad: 'Dt. Kerem Aksoy', alan: 'Genel diş hekimliği' }, { ad: 'Dt. Nil Ergün', alan: 'Endodonti (kanal tedavisi)' }, { ad: 'Dt. Ece Tan', alan: 'Çocuk diş hekimliği' }],
      saat: KLINIK, cumartesi: '14:00', pazar: false, gunler: ['09:00–18:00', '09:00–14:00', 'Kapalı'],
      sss: [['Randevumu nasıl iptal ederim?', 'Onay mesajına yanıt vererek ya da bizi arayarak, randevudan en az 24 saat önce iptal edebilirsiniz.'], ['İlk muayenede ne yapılıyor?', 'Ağız içi muayene yapılır, gerekirse röntgen çekilir ve tedavi planı sizinle birlikte konuşulur.'], ['Anlaşmalı kurumlarınız var mı?', 'Örnek cevap: anlaşmalı kurum ve sigortaların listesi burada yer alır.'], ['Otopark var mı?', 'Örnek cevap: klinik çevresindeki park imkânları burada yazılır.']],
      kunye: 'Mesul müdür: Dt. Kerem Aksoy · Ruhsat no: 00000'
    },
    guzellik: {
      etiket: 'Güzellik merkezi', ad: 'Cankat Güzellik', kisa: 'Salon',
      renk: { accent: '#9d3c5d', dark: '#7f2f4a', soft: '#faf1f4' },
      ust: 'Cilt bakımı · Epilasyon · Bornova', baslik: 'Size ayrılan saat, sadece sizin.',
      giris: 'Bakımı seçin, uzmanınızı ve saati belirleyin. Beklemeden, randevu saatinizde karşılanırsınız.',
      foto: ['rv-guzellik', 'Cilt bakımı uygulaması'],
      hizmetTerim: 'Bakım', hizmetCogul: 'Bakımlar', hizmetSoru: 'Hangi bakım için geliyorsunuz?', ipucu: 'İlk gelişinizde "Cilt analizi" ile başlamanızı öneririz.',
      kisiTerim: 'Müşteri', ekipBaslik: 'Uzmanlarımız', ekipSoru: 'Sizinle ilgilenecek uzmanlar',
      hizmetler: [
        { id: 'analiz', ad: 'Cilt analizi', sure: 30, not: 'Cilt tipinize uygun bakım planı' },
        { id: 'bakim', ad: 'Klasik cilt bakımı', sure: 60, not: 'Temizlik, peeling, maske' },
        { id: 'lazer', ad: 'Lazer epilasyon', sure: 45, not: 'Bölgeye göre süre değişir' },
        { id: 'kas', ad: 'Kaş ve kirpik', sure: 30, not: 'Kaş alımı, laminasyon, kirpik lifting' },
        { id: 'manikur', ad: 'Manikür ve pedikür', sure: 60, not: 'Kalıcı oje seçeneğiyle' },
        { id: 'masaj', ad: 'Rahatlama masajı', sure: 50, not: 'Sırt, boyun ve omuz' }],
      ekip: [{ ad: 'Selin Ateş', alan: 'Cilt bakım uzmanı' }, { ad: 'Derya Koç', alan: 'Lazer ve epilasyon' }, { ad: 'Melis Uçar', alan: 'Kaş, kirpik ve tırnak' }],
      saat: Y(600, 1170, 30), cumartesi: '18:00', pazar: false, gunler: ['10:00–19:30', '10:00–18:00', 'Kapalı'],
      sss: [['Randevuma geç kalırsam ne olur?', '15 dakikaya kadar bekleriz; daha fazlasında işlem süresi kısalabilir.'], ['Lazer epilasyon kaç seans sürer?', 'Kişiye göre değişir; ilk görüşmede uzmanımız size tahmini seans sayısını söyler.'], ['Paket seans var mı?', 'Örnek cevap: paket seçenekleri ve fiyatları burada yazılır.'], ['Ödeme seçenekleri neler?', 'Örnek cevap: nakit, kart ve taksit seçenekleri burada yer alır.']],
      kunye: ''
    },
    kuafor: {
      etiket: 'Kuaför ve berber', ad: 'Cankat Kuaför', kisa: 'Salon',
      renk: { accent: '#7c5c2e', dark: '#634923', soft: '#f6f2ec' },
      ust: 'Kadın · Erkek · Bornova', baslik: 'Sıra beklemeyin, saatinizi seçin.',
      giris: 'İşlemi ve kuaförünüzü seçin, boş saatlerden birini alın. Geldiğinizde koltuğunuz hazır olsun.',
      foto: ['rv-kuafor', 'Kuaför saç kurutuyor'],
      hizmetTerim: 'İşlem', hizmetCogul: 'İşlemler', hizmetSoru: 'Bugün ne yaptırmak istersiniz?', ipucu: 'Birden fazla işlem için en uzun olanı seçin, gerisini notta yazın.',
      kisiTerim: 'Müşteri', ekipBaslik: 'Ekibimiz', ekipSoru: 'Koltukta kim olacak',
      hizmetler: [
        { id: 'kesim', ad: 'Saç kesimi', sure: 45, not: 'Yıkama ve fön dahil' },
        { id: 'fon', ad: 'Fön', sure: 30, not: 'Düz ya da dalgalı' },
        { id: 'boya', ad: 'Boya', sure: 90, not: 'Dip ya da tüm saç' },
        { id: 'rofle', ad: 'Röfle ve balyaj', sure: 120, not: 'Saç uzunluğuna göre değişir' },
        { id: 'keratin', ad: 'Keratin bakımı', sure: 120, not: 'Düzleştirici ve onarıcı bakım' },
        { id: 'erkek', ad: 'Erkek kesim ve sakal', sure: 30, not: 'Makine, makas, sakal şekillendirme' }],
      ekip: [{ ad: 'Ozan Yel', alan: 'Kesim ve renk' }, { ad: 'Buse Kara', alan: 'Balyaj ve bakım' }, { ad: 'Emir Can', alan: 'Erkek kuaförü' }],
      saat: Y(570, 1170, 30), cumartesi: '19:30', pazar: true, gunler: ['09:30–19:30', '09:30–19:30', '11:00–17:00'],
      sss: [['Randevumu değiştirebilir miyim?', 'Evet, mesaj atmanız yeterli; uygun başka bir saate alırız.'], ['Boya için önceden test gerekir mi?', 'İlk kez boyatacaksanız 48 saat önce kısa bir alerji testi öneririz.'], ['Gelin saçı yapıyor musunuz?', 'Örnek cevap: gelin ve özel gün hizmetleri burada anlatılır.'], ['Ürün satışı var mı?', 'Örnek cevap: salonda kullanılan ürünler ve markalar burada yazılır.']],
      kunye: ''
    },
    pilates: {
      etiket: 'Pilates ve spor', ad: 'Cankat Pilates', kisa: 'Stüdyo',
      renk: { accent: '#3f6b4f', dark: '#30543d', soft: '#f1f5f1' },
      ust: 'Reformer · Mat · Bornova', baslik: 'Dersinizi seçin, yeriniz ayrılsın.',
      giris: 'Özel ya da grup dersi, size uygun saatte. İlk dersiniz için deneme seansıyla başlayabilirsiniz.',
      foto: ['rv-pilates', 'Reformer pilates stüdyosu'],
      hizmetTerim: 'Ders', hizmetCogul: 'Dersler', hizmetSoru: 'Hangi dersi almak istersiniz?', ipucu: 'İlk kez geliyorsanız "Deneme dersi" seçin.',
      kisiTerim: 'Üye', ekipBaslik: 'Eğitmenlerimiz', ekipSoru: 'Derslerde kim olacak',
      hizmetler: [
        { id: 'deneme', ad: 'Deneme dersi', sure: 50, not: 'Duruş analizi ve ilk ders' },
        { id: 'ozel', ad: 'Reformer özel ders', sure: 50, not: 'Birebir, size göre program' },
        { id: 'duet', ad: 'Reformer düet', sure: 50, not: 'İki kişi, bir eğitmen' },
        { id: 'grup', ad: 'Reformer grup', sure: 50, not: 'En fazla 6 kişi' },
        { id: 'mat', ad: 'Mat pilates', sure: 50, not: 'Grup dersi, tüm seviyeler' },
        { id: 'hamile', ad: 'Hamile pilatesi', sure: 50, not: 'İkinci trimesterden itibaren' }],
      ekip: [{ ad: 'Ceren Ilgaz', alan: 'Reformer eğitmeni' }, { ad: 'Arda Sel', alan: 'Fonksiyonel antrenman' }, { ad: 'İpek Duru', alan: 'Hamile ve klinik pilates' }],
      saat: Y(420, 1260, 60), cumartesi: '14:00', pazar: false, gunler: ['07:00–21:00', '09:00–14:00', 'Kapalı'],
      sss: [['Ne giymeliyim?', 'Rahat spor kıyafeti ve kaymaz çorap yeterli; çorap stüdyoda da satılır.'], ['Hiç pilates yapmadım, olur mu?', 'Evet. Deneme dersinde seviyenize uygun programı birlikte belirleriz.'], ['Paket ve üyelik var mı?', 'Örnek cevap: 8 ve 12 derslik paketler ve fiyatları burada yazılır.'], ['Ders iptali nasıl?', 'Dersten 12 saat öncesine kadar iptal ederseniz hakkınız yanmaz.']],
      kunye: ''
    },
    veteriner: {
      etiket: 'Veteriner', ad: 'Cankat Veteriner Kliniği', kisa: 'Klinik',
      renk: { accent: '#2b5ea7', dark: '#224b86', soft: '#eff4fa' },
      ust: 'Kedi · Köpek · Bornova', baslik: 'Dostunuz için randevu, beklemeden.',
      giris: 'Muayene, aşı ya da bakım için saat seçin. Acil durumlarda randevusuz da bakıyoruz, önce arayın.',
      foto: ['rv-veteriner', 'Veteriner hekim köpeği muayene ediyor'],
      hizmetTerim: 'Hizmet', hizmetCogul: 'Hizmetler', hizmetSoru: 'Ne için geliyorsunuz?', ipucu: 'Emin değilseniz "Genel muayene" seçin.',
      kisiTerim: 'Hayvan sahibi', ekipBaslik: 'Hekimlerimiz', ekipSoru: 'Dostunuzla kim ilgilenecek',
      hizmetler: [
        { id: 'muayene', ad: 'Genel muayene', sure: 30, not: 'Kedi ve köpek' },
        { id: 'asi', ad: 'Aşı', sure: 20, not: 'Aşı takvimine göre' },
        { id: 'kontrol', ad: 'Kontrol', sure: 20, not: 'Tedavi sonrası kontrol' },
        { id: 'dis', ad: 'Diş taşı temizliği', sure: 60, not: 'Ön muayene sonrası planlanır' },
        { id: 'tiras', ad: 'Tıraş ve bakım', sure: 60, not: 'Banyo, tıraş, tırnak' },
        { id: 'cip', ad: 'Mikroçip ve pasaport', sure: 20, not: 'Kayıt işlemleriyle birlikte' }],
      ekip: [{ ad: 'Vet. Hek. Can Yurt', alan: 'Kedi ve köpek hekimi' }, { ad: 'Vet. Hek. Ada Sönmez', alan: 'Cerrahi' }, { ad: 'Gizem Er', alan: 'Bakım ve tıraş' }],
      saat: KLINIK, cumartesi: '14:00', pazar: false, gunler: ['09:00–19:00', '09:00–14:00', 'Kapalı'],
      sss: [['Acil durumda ne yapmalıyım?', 'Önce arayın; randevu beklemeden yönlendiririz.'], ['Aşı karnesini getirmeli miyim?', 'Evet, varsa aşı karnesini ve önceki tahlilleri getirin.'], ['Kediyi nasıl getirmeliyim?', 'Kapalı bir taşıma çantasıyla getirmeniz hem onun hem diğer hastalar için güvenli olur.'], ['Evde muayene var mı?', 'Örnek cevap: evde muayene bölgesi ve koşulları burada yazılır.']],
      kunye: 'Sorumlu veteriner hekim: Vet. Hek. Can Yurt · Ruhsat no: 00000'
    },
    diyet: {
      etiket: 'Diyetisyen', ad: 'Cankat Beslenme', kisa: 'Ofis',
      renk: { accent: '#5d7a1f', dark: '#4a6218', soft: '#f4f7ec' },
      ust: 'Beslenme ve diyet · Bornova', baslik: 'Beslenme planınız için ilk adım.',
      giris: 'İlk görüşmede ölçüm yapılır, alışkanlıklarınız konuşulur. Yüz yüze ya da online görüşme seçebilirsiniz.',
      foto: ['rv-diyet', 'Diyetisyen ofisinde'],
      hizmetTerim: 'Görüşme', hizmetCogul: 'Görüşmeler', hizmetSoru: 'Nasıl bir görüşme istiyorsunuz?', ipucu: 'İlk kez geliyorsanız "İlk görüşme" seçin.',
      kisiTerim: 'Danışan', ekipBaslik: 'Diyetisyenlerimiz', ekipSoru: 'Sizinle kim görüşecek',
      hizmetler: [
        { id: 'ilk', ad: 'İlk görüşme', sure: 60, not: 'Ölçüm, analiz ve plan' },
        { id: 'kontrol', ad: 'Kontrol görüşmesi', sure: 30, not: 'Haftalık ya da iki haftalık' },
        { id: 'online', ad: 'Online görüşme', sure: 45, not: 'Görüntülü görüşme' },
        { id: 'sporcu', ad: 'Sporcu beslenmesi', sure: 45, not: 'Antrenmana göre plan' },
        { id: 'cocuk', ad: 'Çocuk beslenmesi', sure: 45, not: 'Ebeveynle birlikte' },
        { id: 'analiz', ad: 'Vücut analizi', sure: 20, not: 'Yağ, kas ve su oranı' }],
      ekip: [{ ad: 'Dyt. Elif Aras', alan: 'Kilo yönetimi' }, { ad: 'Dyt. Mert Öz', alan: 'Sporcu beslenmesi' }, { ad: 'Dyt. Sena Gül', alan: 'Çocuk beslenmesi' }],
      saat: Y(570, 1110, 30), cumartesi: '14:00', pazar: false, gunler: ['09:30–18:30', '09:30–14:00', 'Kapalı'],
      sss: [['İlk görüşmeye nasıl hazırlanmalıyım?', 'Varsa son kan tahlillerinizi getirin; ölçüm için hafif kıyafet tercih edin.'], ['Online görüşme nasıl oluyor?', 'Randevu saatinde görüntülü arama bağlantısı gönderilir.'], ['Ne sıklıkla kontrole gelmeliyim?', 'Genelde 1–2 haftada bir; planınıza göre birlikte belirleriz.'], ['Paket seçenekleri var mı?', 'Örnek cevap: aylık takip paketleri burada yazılır.']],
      kunye: ''
    }
  };

  var S = window.RV_SEKTORLER;
  var q = (location.search.match(/[?&]s=([a-z]+)/) || [])[1], k = 'dis';
  if (q && S[q]) k = q; else { try { var m = sessionStorage.getItem('randevu_s'); if (m && S[m]) k = m; } catch (e) {} }
  try { sessionStorage.setItem('randevu_s', k); } catch (e) {}
  window.RV_KEY = k; window.RV = S[k];
  window.HIZMETLER = window.RV.hizmetler;
  window.HEKIMLER = window.RV.ekip;
  window.SAATLER = window.RV.saat;
  var R = document.documentElement.style;
  R.setProperty('--accent', RV.renk.accent); R.setProperty('--accent-dark', RV.renk.dark); R.setProperty('--soft', RV.renk.soft);
})();

window.randevuYukle = function () {
  try { var s = localStorage.getItem('randevular_' + RV_KEY); if (s) return JSON.parse(s); } catch (e) {}
  return window.ornekRandevular();
};
// Panel boş görünmesin: bugünden itibaren örnek randevular (kayıt yapılana kadar gösterilir).
window.ornekRandevular = function () {
  var t = new Date(), iso = function (d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  // n. iş günü (pazartesi–cuma); örnek randevular hafta sonuna düşmesin
  var g = function (n) { var d = new Date(t), k = 0; while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1); while (k < n) { d.setDate(d.getDate() + 1); if (d.getDay() !== 0 && d.getDay() !== 6) k++; } return iso(d); };
  var H = window.HIZMETLER, S = window.SAATLER, sa = function (i) { return S[Math.min(S.length - 1, i)]; };
  var A = [['Ayşe Yılmaz', '0532 000 00 01', 'onay'], ['Mehmet Kaya', '0533 000 00 02', 'bekliyor'], ['Deniz Arslan', '0535 000 00 03', 'bekliyor'], ['Can Demir', '0542 000 00 04', 'onay'], ['Selin Öztürk', '0505 000 00 05', 'bekliyor'], ['Emre Çelik', '0555 000 00 06', 'iptal'], ['Zehra Aydın', '0530 000 00 07', 'onay']];
  var gun = [0, 0, 1, 1, 2, 3, 4], idx = [2, 9, 1, 7, 12, 4, 11];
  return A.map(function (a, i) { return { id: 'o' + (i + 1), hizmet: H[i % H.length].id, tarih: g(gun[i]), saat: sa(idx[i]), ad: a[0], tel: a[1], durum: a[2] }; });
};
window.randevuKaydet = function (list) {
  try { localStorage.setItem('randevular_' + RV_KEY, JSON.stringify(list)); return true; } catch (e) { return false; }
};
// Örnek dolu saatler: tarih ve saatten türetilir, her gün aynı görünür.
window.doluMu = function (iso, saat) {
  var n = 0, s = iso + saat; for (var i = 0; i < s.length; i++) n = (n * 31 + s.charCodeAt(i)) % 997;
  if (n % 4 === 0) return true;
  return randevuYukle().some(function (r) { return r.tarih === iso && r.saat === saat && r.durum !== 'iptal'; });
};
// Sayfadaki data-rv alanlarını doldurur ve üstte sektör seçiciyi gösterir.
window.rvUygula = function () {
  var RV = window.RV, $$ = function (s) { return document.querySelectorAll(s); };
  $$('[data-rv]').forEach(function (el) { var v = RV[el.dataset.rv]; if (v != null) el.textContent = v; });
  document.title = document.title.replace('Cankat Diş Kliniği', RV.ad);
  var bar = document.getElementById('rv-sek');
  if (bar) {
    bar.innerHTML = '<span class="lbl">Örnek sektör</span><div class="opts">' + Object.keys(RV_SEKTORLER).map(function (k) {
      return '<a href="?s=' + k + '"' + (k === RV_KEY ? ' aria-current="true"' : '') + '>' + RV_SEKTORLER[k].etiket + '</a>';
    }).join('') + '</div>';
  }
};
