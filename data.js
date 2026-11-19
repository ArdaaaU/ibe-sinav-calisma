// İBE Sınav Çalışma Platformu — Veri Seti (Ders 1–6)
// Kaynak: Prof. Dr. Kürşat Çağıltay (ODTÜ) — 5000 İBE Ders Sunumları

window.IBE_DATA = {
  lessons: [
    {
      id: 1,
      code: "Ders 01",
      title: "İBE'ye Giriş ve Temel Kavramlar",
      subtitle: "Tanım, tarihçe, kritik tasarım vakaları, ISO 9241-11, Göz İzleme ve CogTool",
      slideCount: 72,
      summary: "İnsan Bilgisayar Etkileşiminin tanımı, disiplinler arası yapısı, 4 temel bileşeni, 1945'ten günümüze tarihsel dönüm noktaları, ölümcül tasarım kazaları ve kullanılabilirlik ölçüm araçları.",
      sections: [
        {
          heading: "İBE Tanımı ve İlişkili Disiplinler",
          bullets: [
            "<strong>Tanım:</strong> Etkileşimli teknolojilerin tasarımı, geliştirilmesi, değerlendirilmesi ve uygulanması ile ilgilenen <strong>disiplinler arası</strong> çalışma alanıdır.",
            "<strong>İlişkili Disiplinler:</strong> Bilgisayar Bilimi, Ergonomi, Bilişsel Psikoloji, Grafik ve Endüstriyel Tasarım, Sosyoloji, Antropoloji, Eğitim, Yazılım Mühendisliği ve Örgütsel Psikoloji.",
            "<strong>Neden İBE?</strong> Sıradan kullanıcı nüfusunun artması, organizasyonların bilişim sistemlerine bağımlılığı, <em>üretkenlik ikilemi</em>, donanım maliyeti düşerken yazılım/insan maliyetinin artması (1 saniyelik kayıp çok kullanıcılı sistemlerde binlerce saat eder) ve kritik alanlar (<strong>Tıp, Ordu, Bankacılık</strong>)."
          ]
        },
        {
          heading: "İBE'nin 4 Temel Bileşeni",
          table: {
            headers: ["Bileşen", "Anlamı", "Cep Telefonu Örneği"],
            rows: [
              ["Kullanıcı", "Sistemi kullanan kişi ve nitelikleri", "Otobüs şoförü, öğrenci, yaşlı, ev kadını"],
              ["Görev", "Gerçekleştirilmek istenen iş", "Konuşmak, mesaj atmak, takvim, rehber"],
              ["Araç / Arayüz", "Etkileşim kurulan donanım/yazılım", "Cep telefonu ve ekran arayüzü"],
              ["Bağlam (Çevre)", "Fiziksel ve sosyal kullanım ortamı", "Sessiz oda, otobüs, çok ışıklı/gürültülü ortam"]
            ]
          }
        },
        {
          heading: "Tarihsel Gelişim Dönüm Noktaları",
          bullets: [
            "<strong>1945 — Vannevar Bush:</strong> <em>As We May Think</em> makalesi ve <strong>MEMEX</strong> (PC, İnternet ve İBE vizyonu; bilişimde Türklere ilk referans).",
            "<strong>1959 — Shackel:</strong> <em>Ergonomics for a computer</em>.",
            "<strong>1960 — Licklider:</strong> <em>Man-Computer Symbiosis</em> (Bilgisayarla etkileşim bir meslektaşla etkileşim gibi olmalı).",
            "<strong>1965 — Engelbart:</strong> Fare ve etkileşim.",
            "<strong>1969:</strong> <em>International Journal of Man-Machine Studies</em> dergisi. <strong>1970:</strong> İngiltere'de HUSAT, ABD'de PARC.",
            "<strong>1971 — Weinberg:</strong> <em>The Psychology of Computer Programming</em>.",
            "<strong>1976:</strong> NATO çalıştayı — 'İnsan Bilgisayar Etkileşimi'. <strong>1970'ler:</strong> 'Kullanıcı Dostu' kavramı doğdu.",
            "<strong>1980 — Shneiderman:</strong> <em>Software Psychology</em>. <strong>1982:</strong> <em>Behavior & IT</em> dergisi, <strong>ACM SIGCHI</strong> ve <strong>CHI</strong> konferansı.",
            "<strong>1985:</strong> Hipertext sistemleri. <strong>1990'lar:</strong> WWW ve üniversitelerde İBE programları. <strong>2000'ler:</strong> Mobil, sosyal ağlar, VR/AR, giyilebilir, duygusal etkileşim. <strong>2015:</strong> Beyin-Bilgisayar Etkileşimi."
          ],
          callout: "TÜBİTAK Vizyon 2023 (s. 73): \"İnsanlar bilgisayara ayak uyduracağına, bilgisayarlar insanlara ayak uydurmalı; yani 'insan okur-yazarlığı' olan, kullanımı eğitim gerektirmeyen bilgisayarlar geliştirilmelidir.\""
        },
        {
          heading: "Gerçek Hayattan Tasarım Problemleri",
          bullets: [
            "<strong>ATM (Önce kart mı, para mı?):</strong> Kart unutmanın yıllık maliyeti <strong>2 – 4,5 milyon ABD doları</strong>. Önce kartı sonra parayı vermek unutmayı önler.",
            "<strong>USS Vincennes (3 Temmuz 1988, İran Körfezi):</strong> Bir ekran yükseklik, diğer ekran pozisyon/yön bilgisini veriyordu. Yüksek stres altında hatalı yorumlandı ve İran yolcu uçağı düşürüldü (<strong>290 can kaybı</strong>). Sonucunda <em>NATO Guidelines on Human Engineering Testing and Evaluation</em> standartları çıktı.",
            "<strong>Singapur Havayolları Kazası (79 yolcu + 4 kabin ekibi kaybı):</strong> Kapalı pistin normal pist gibi ışıklandırılması, uyarı levhası ve bariyer olmaması pilotun zihnindeki kapalı pist modeliyle uyuşmadı.",
            "<strong>ABD 2000 Seçimleri (Florida):</strong> Hatalı oy pusulası tasarımı."
          ]
        },
        {
          heading: "ISO 9241-11, Göz İzleme ve CogTool",
          bullets: [
            "<strong>ISO 9241-11:</strong> Kullanıcıların belirli görevleri, belirli bir bağlamda <strong>etkililik</strong> (doğruluk/başarı), <strong>verimlilik</strong> (zaman/maliyet/adım) ve <strong>memnuniyet</strong> ile yerine getirmesi.",
            "<strong>Ölçülebilir Kriter:</strong> 'Ürün X kullanışlıdır' anlamsızdır. Hedef kullanıcı yüzdesi, eğitim süresi, doğruluk %, görev süresi ve memnuniyet skoru net yazılmalıdır.",
            "<strong>Göz İzleme (Eye Tracking):</strong> Objektif ve nicel veri sağlar. Veriler: <em>gezinme süresi, odaklanma, ilgi alanı ve odaklanma sayısı, farklı odaklanma süreleri, gezinme yörüngesi, ilk odaklanma zamanı, ilgi alanları arası geçiş yoğunluğu</em>.",
            "<strong>CogTool:</strong> Açık kaynaklıdır; prototip arayüzlerde kullanıcının <strong>biliş, algı ve motor</strong> davranışlarını simüle eder ve iki farklı tasarımı karşılaştırabilir."
          ]
        }
      ]
    },
    {
      id: 2,
      code: "Ders 02",
      title: "Teoriler, Yaklaşımlar (1) ve Arayüz",
      subtitle: "Üretkenlik ikilemi, Landauer, Shneiderman'ın 8 Kuralı, Suchman vs. Norman, Bailey (1993)",
      slideCount: 32,
      summary: "Etkileşime felsefi ve fiziksel bakış: Landauer'in üretkenlik analizi, Shneiderman'ın 8 Altın Kuralı, Suchman'ın durumsal eylem yaklaşımı, arayüz cihazları, metaforlar ve Bailey deneyi.",
      sections: [
        {
          heading: "Üretkenlik İkilemi ve Landauer (1995)",
          bullets: [
            "<strong>Etkileşim (TDK):</strong> Karşılıklı etkiler bütünlüğü; neden ile sonucun birbirine sıkıca bağlı olması ve durmadan yer değiştirmesi.",
            "<strong>Üretkenlik İkilemi (Solow Paradox):</strong> Bilişim yatırımları hızla artmasına rağmen ekonomik üretkenlik artışının yavaş kalması (<em>Acemoglu vd., 2014; Derviş & Qureshi, 2016</em>).",
            "<strong>Landauer (1995):</strong> BİT yatırımı ile üretkenlik arasında negatif ilişki görür. Sebepler: yazılımların zayıf tasarlanması ve otomasyonun kullanım süreçleriyle bütünleştirilememesi.",
            "<strong>Çözüm ve Sayılar:</strong> Tek çözüm <strong>Kullanıcı Merkezli Tasarım</strong>. Kullanılabilirlik ile iş verimliliğinde <strong>%25'e kadar artış</strong> sağlanır. <em>'Tipik arayüzde 40 sorun vardır; bunların 20 tanesini düzeltmek kullanılabilirliği %50 arttırır.'</em>"
          ]
        },
        {
          heading: "Shneiderman (1992, 2016) ve 8 Altın Kural",
          bullets: [
            "<strong>Landauer'den Farkı:</strong> Daha iyimserdir — <em>'Bilgisayarlar yaşam kalitesini arttırır.'</em> İnsan çeşitliliğini dikkate alan sistemler ve ölçülebilir hedefler vurgular.",
            "<strong>1. Tutarlılık</strong> · <strong>2. Evrensel kullanılabilirlik</strong> (kısayollar, farklı kullanıcı düzeyleri)",
            "<strong>3. Kaliteli geri bildirim</strong> · <strong>4. Süreç ve sonuç odaklı diyaloglar</strong> (kapanış hissi)",
            "<strong>5. Hatadan koruma</strong> · <strong>6. İşlemleri geri alabilme (Undo)</strong>",
            "<strong>7. Kontrol kullanıcıda olmalı</strong> · <strong>8. Kısa süreli hafıza yükünü düşür</strong>"
          ]
        },
        {
          heading: "Norman & Shneiderman vs. Lucy Suchman (1987)",
          table: {
            headers: ["Boyut", "Norman & Shneiderman", "Lucy Suchman (Situated Action)"],
            rows: [
              ["Temel Bakış", "Kullanıcının bilgiyi işleme davranışı; makineden etkin mesaj sunumu", "Etkileşimin iletişim ve bağlam özellikleri; konuşmaya benzer diyalog"],
              ["Planlar & Eylem", "Etkileşimi işlem seviyelerine bölerek modeller", "İnsan davranışları önceden planlı değildir; duruma göre tepki verir (planlar eksik ve değişkendir)"],
              ["Tasarım Eleştirisi", "Mevcut teknolojiler için pratik, popüler çözümler", "Sadece bilişsel modellere dayanan tasarımın başarı şansı düşüktür"],
              ["Hangi Dönem?", "Bugünün İBE sorunları için", "Geleceğin İBE sistemleri için (Licklider ile birlikte)"]
            ]
          },
          callout: "Norman'ın 4 Tasarım Prensibi: (1) Görülebilirlik, (2) Kavramsal Model, (3) Anlamlı Eşleştirmeler, (4) Geribildirim."
        },
        {
          heading: "Arayüzler, Etkileşim Tipleri ve Bailey (1993) Deneyi",
          bullets: [
            "<strong>Arayüz:</strong> Bilginin kullanıcı ile araç arasında aktarımını sağlayan iletişim kanalı. <strong>Fiziksel:</strong> Klavye, fare, ekran. <strong>Kavramsal (Metaforik):</strong> Masaüstü, çöp kutusu, dosya, klasör.",
            "<strong>Giriş Cihazları:</strong> Klavye, fare, joystick, dokunmatik ekran, çizim tahtası, elektronik eldiven, mikrofon, tarayıcı.",
            "<strong>Çıkış Cihazları:</strong> Ekran, hoparlör, yazıcı, hareketli platform, çizim tahtası, elektronik eldiven, titreşimli cihazlar, fiziksel ortam (hologram).",
            "<strong>Etkileşim Tipleri:</strong> Geleneksel (<em>Komutlar, Menüler, Formlar</em>) vs. Yeni (<em>Doğal dil, Duygular, Beyin-Bilgisayar</em>).",
            "<strong>İBE Bağlam Kuralı:</strong> Kullanılabilirlik; kullanıcı tipi, görevler ve kullanım ortamına bağlıdır.",
            "<strong>Bailey (1993) Çalışması:</strong> 81 arayüz tasarımcısı 4 arayüzü değerlendirip gerçek görevlerle kullandı. En yüksek performans <strong>Yazı ile giriş</strong>te çıktı (değerlendirmede 4. sıradaydı!). <strong>Tasarımcıların %95'i en yüksek performans gösterdikleri arayüzü değil, diğerini seçti.</strong>"
          ]
        }
      ]
    },
    {
      id: 3,
      code: "Ders 03",
      title: "Teoriler ve Yaklaşımlar (2): Norman ve Körfezler",
      subtitle: "7 Aşamalı Etkileşim Döngüsü, Gerçekleştirme & Değerlendirme Körfezi, Kayma vs. Yanılgı",
      slideCount: 19,
      summary: "Donald Norman'ın etkileşim modeli, iki temel körfez (Execution & Evaluation), kullanıcı hatalarının sınıflandırılması (Slips vs. Mistakes) ve öğrenilmiş/öğretilmiş çaresizlik.",
      sections: [
        {
          heading: "Norman'ın 7 Aşamalı Etkileşim Döngüsü",
          bullets: [
            "<strong>Döngü Adımları:</strong> (1) Hedef belirleme → (2) Beklenti/Niyet → (3) Yapılmak istenen hareketin belirlenmesi → (4) <strong>Gerçekleştirme (Fiziksel etkinlik — Dünya)</strong> → (5) Sistemin durumunu algılama → (6) Yorumlama → (7) Hedefle karşılaştırıp değerlendirme.",
            "<strong>Temel İlkeler:</strong> Hata etkileşimin doğal bir parçasıdır. Kullanıcı sistem modelini parçalı bilgilerle oluşturur. Dünya ile etkileşimimiz sürekli bir döngüdür.",
            "<strong>Döngüdeki boşluklar/belirsizlikler</strong> kullanım zorluğu ve hataları yaratır; bu döngü tasarımın her aşamasında sorun tespiti için kullanılabilir."
          ]
        },
        {
          heading: "Norman'ın Körfezleri (Gulfs)",
          table: {
            headers: ["Körfez", "Neresi Arasında?", "Kullanıcının Sorduğu Sorular"],
            rows: [
              ["Gerçekleştirme Körfezi (Execution)", "Hedef ile fiziksel eylem (Dünya) arasında", "\"Bunu nasıl çalıştıracağım?\" · \"Ne yapmalıyım?\""],
              ["Değerlendirme Körfezi (Evaluation)", "Sistemin durumu (Dünya) ile hedefi değerlendirme arasında", "\"Ne oldu?\" · \"Bu yapmak istediğim mi?\""]
            ]
          },
          callout: "İBE'nin özü: Değerlendirme ve Gerçekleştirme Körfezlerine köprü kurmaktır!"
        },
        {
          heading: "Hatalar: Kayma (Slips) vs. Yanılgı (Mistakes)",
          table: {
            headers: ["Özellik", "Kayma (Slips)", "Yanılgı (Mistakes)"],
            rows: [
              ["Kullanıcının Bilgisi", "Sistemi iyi anlamış, ne yapacağının farkında", "Sisteme hakim değil, ne yapacağını kestiremiyor"],
              ["Nasıl Oluşur?", "Kaza ile yanlış zamanda yanlış tuşa basmak", "Yanlış hedef belirleme veya yanlış zihinsel model"],
              ["Çözüm Zorluğu", "Daha iyi bir ekran/arayüz tasarımıyla kolayca önlenir", "Düzeltilmesi daha zordur; sistemin iyi anlaşılmasını gerektirir"]
            ]
          }
        },
        {
          heading: "Öğrenilmiş ve Öğretilmiş Çaresizlik",
          bullets: [
            "<strong>Öğrenilmiş Çaresizlik:</strong> Kötü tasarımlar yüzünden tekrar tekrar başarısız olan kullanıcının suçu kendinde bulup vazgeçmesi: <em>'Denedim yapamadım: Vazgeçiyorum — Ben bilgisayar kullanamıyorum.'</em>",
            "<strong>Öğretilmiş Çaresizlik:</strong> Çevreden/eğitimden empoze edilen yetersizlik inancı: <em>'Matematik dersi gibi: Sen yapamazsın.'</em>"
          ]
        }
      ]
    },
    {
      id: 4,
      code: "Ders 04",
      title: "İBE'nin Psikolojik Boyutu (1)",
      subtitle: "İnsan bilgi işleme, Card-Moran-Newell, Wickens, KSH/USH, Gruplama (Chunking) ve Okuma",
      slideCount: 67,
      summary: "Kullanıcının 4 boyutu, Nielsen kullanıcı tipleri, bellek mimarisi (7±2, 10–30 sn), algısal ön işlemci (<1 sn), görsel/işitsel ipuçları, anlamlı gruplama ve okuma psikolojisi.",
      sections: [
        {
          heading: "Kullanıcının 4 Boyutu, Nielsen Tipleri ve Temel Özellikler",
          bullets: [
            "<strong>Kullanıcının 4 Boyutu:</strong> <strong>Bilişsel</strong> (hafıza, öğrenme), <strong>Fizyolojik</strong> (fiziksel ergonomi), <strong>Algısal</strong> (görsel, işitsel), <strong>Sosyal</strong> (organizasyon, grup).",
            "<strong>Nielsen (1993) 3 Boyutlu Kullanıcı Tipleri:</strong> Bilgisayar deneyimi (düşük–yüksek), Alan bilgisi (bilgisiz–bilgili), Sistem deneyimi (deneyimsiz–uzman).",
            "<strong>7 Temel Özellik:</strong> Deneyimle değişirler · Aktif öğrenirler · Dikkatleri kısıtlıdır · Hata yaparlar · Hepsi farklıdır · Hedef merkezlidirler · Sistemi kafalarında modellerler."
          ]
        },
        {
          heading: "İnsan Bilgi İşleme Modelleri (Card vd. 1983 & Wickens 1992)",
          bullets: [
            "<strong>Card, Moran & Newell (1983):</strong> 3 işlemci (<strong>Algı İşlemcisi, Bilişsel İşlemci, Motor İşlemci</strong>) + Görsel/İşitsel Birim Depolar + KSH + USH.",
            "<strong>Wickens (1992) Akışı:</strong> Algısal Ön İşlemci → Algı → Karar ve Tepki Seçimi → Tepki Gerçekleştirme (+ Geribildirim, Dikkat Kaynakları, KSH ve USH).",
            "<strong>Algısal Ön İşlemci:</strong> Veriler hızla yok olur (<strong>&lt; 1 sn</strong>), sinyal karakteristiklerine duyarlıdır, <strong>bilinçsiz</strong> süreçtir.",
            "<strong>Kritik Sınav Detayı:</strong> <strong>Dikkat, algısal ön işlemciden SONRA</strong> devreye girer! Algı ise bilinçli bir kategorize etme (hissetme, tanıma, kategorize etme) döngüsüdür."
          ]
        },
        {
          heading: "Kısa Süreli Hafıza (KSH) vs. Uzun Süreli Hafıza (USH)",
          table: {
            headers: ["Özellik", "Kısa Süreli (Çalışan) Hafıza", "Uzun Süreli Hafıza"],
            rows: [
              ["Kapasite", "Kısıtlı: 7 ± 2 grup/kutu", "Teorik olarak sonsuz"],
              ["Süre / Hız", "10–30 sn silinme süresi", "Yavaş işlem, kalıcı"],
              ["İşleyiş", "Yeni bilgi eskisini siler (unutma); tekrar ve gruplama korur", "Anlamsal yapı ile örgütlenir"]
            ]
          }
        },
        {
          heading: "Algı, Gruplama (Chunking), CAPTCHA ve Okuma",
          bullets: [
            "<strong>Algı Aktif ve Yorumlayıcıdır:</strong> İki yönlü çalışır: <strong>Aşağıdan yukarı</strong> (görsel/işitsel) ve <strong>Yukarıdan aşağı</strong> (deneyim temelli). <em>Zöllner</em> ve <em>Jastrow</em> illüzyonları algının yanılabileceğini gösterir.",
            "<strong>KSH Yükünü Azaltan İpuçları:</strong> <em>İşitsel</em> (aksan, vurgu, aşinalık) ve <em>Görsel</em> (renk, etiket, büyüklük, ayırt edici özellikler).",
            "<strong>Gruplama (Chunking):</strong> KSH kapasitesini genişletir; gruplar <strong>anlamlı</strong> olmalıdır (<code>TDKUSBTRTSSKDNATSK</code> → <code>TDK, USB, TRT, SSK, DNA, TSK</code>). Hem <strong>fiziksel</strong> (menü tasarımı) hem <strong>bilişsel</strong> (komut sırası) boyutta uygulanmalı; ikonlara etiket eklenmelidir.",
            "<strong>CAPTCHA:</strong> <em>Completely Automated Public Turing test to tell Computers and Humans Apart</em> (bilişin düzen arama yeteneğine dayanır).",
            "<strong>Okuma = Algısal Gruplama:</strong> Kelimelerin sadece başındaki <strong>4–5 harfe</strong> bakarız. <strong>TÜMÜ BÜYÜK HARF</strong> aynı dikdörtgen şekli oluşturduğu için okumayı zorlaştırır; karışık büyük/küçük harf (<code>AmA BunU...</code>) düzeni bozduğu için daha da zordur."
          ],
          callout: "Tasarımcı ürünü kullanıcının gözünden göremez. Deneyim ve sürekli kullanım kullanıcılar arasındaki algı farkını azaltır."
        }
      ]
    },
    {
      id: 5,
      code: "Ders 05",
      title: "İBE'nin Psikolojik Boyutu (2)",
      subtitle: "Otomatik/Kontrollü işlemler, Stroop testi, Zihinsel modeller, Bireysel farklılıklar, Duygular",
      slideCount: 59,
      summary: "Shiffrin & Schneider ikili işlem modeli, görev tiplerinin otomatikleşmesi, Stroop etkisi, Eberts zihinsel modelleri (yapısal vs. fonksiyonel), Dillon & Watson (20:1), uzun vadeli testler ve duygusal geri bildirim.",
      sections: [
        {
          heading: "Kontrollü vs. Otomatik İşlemler (Shiffrin & Schneider, 1977)",
          table: {
            headers: ["Özellik", "Kontrollü İşlem", "Otomatik İşlem"],
            rows: [
              ["Dikkat & Bilinç", "Yüksek dikkat, bilinçli kontrol, planlı", "Minimum dikkat, refleks seviyesinde, karar süreci yok"],
              ["Hız & Kısıt", "Bilişsel kısıtlara bağımlı, yavaş", "Çok hızlı, serbestçe gerçekleşir"],
              ["Değişebilirlik", "Esnek, yeni durumlara uyarlanır", "Öğrenildikten sonra unutması çok zor (TR–ABD araç sürüşü)"]
            ]
          },
          bullets: [
            "<strong>Otomatikleşmenin 3 İstisnası:</strong> Sık tekrar edilmiyorsa · Hata sonuçları zarar vericiyse · Üst seviye bilişsel çaba gerektiriyorsa otomatikleşmez.",
            "<strong>Görev Tipleri:</strong> <strong>Fiziksel yetenek temelli</strong> (en yüksek otomatikleşme — trafik ışığında ayak) · <strong>Kural temelli</strong> (kapsamlı tekrarla otomatikleşebilir — Tamam/İptal) · <strong>Bilgi temelli</strong> (otomatikleşmez — stratejik alışveriş)."
          ]
        },
        {
          heading: "Stroop Testi ve İBE Çıkarımları",
          bullets: [
            "<strong>Stroop Etkisi:</strong> Kelimeleri okumak da renkleri adlandırmak da otomatik süreçtir. İki otomatik süreç çakıştığında (farklı renkle yazılmış renk adı) <strong>bilişsel yük</strong>, yavaşlama ve hatalar doğar (<em>USS Vincennes</em> ile ilişkilendirilir).",
            "<strong>Tasarım Önerileri:</strong> Doğal düşünce sürecine müdahale etme · Karmaşık mesajlardan kaçın · Sezgisel deneyim yarat · Otomatik davranışın olumlu olacağını varsayma, <strong>test et</strong>."
          ]
        },
        {
          heading: "Zihinsel Modeller (Eberts, 1994)",
          bullets: [
            "Çalışan hafızada otomatik yaratılır; KSH'dan gelen bilgi USH'daki şemalarla eşleştirilir. Eksik/belirsiz bilgide daha fark edilir.",
            "<strong>Yapısal Model ('Bu nasıl çalışıyor?'):</strong> Sorun giderme veya onarım için gereklidir.",
            "<strong>Fonksiyonel Model ('Bunu nasıl çalıştırırım?'):</strong> Etkili kullanım için gereklidir. <strong>İBE genelde fonksiyonel modeller ile ilgilenir!</strong>",
            "<strong>3 Model Ayrımı:</strong> (1) Kullanıcının sistem modeli (<em>User's conceptual model</em>), (2) Tasarımcının tasarladığı model (<em>The system image</em>), (3) Kullanıcının zihinsel modeli (kullanım zamanı oluşur).",
            "<strong>9 Nokta Testi:</strong> Deneyime ve tanıdık bağlama dayanan model daha zengindir; <strong>mantıksal ve psikolojik çıkarım aynı değildir</strong>."
          ]
        },
        {
          heading: "Bireysel Farklılıklar, Uzun Vadeli Test ve Duygular",
          bullets: [
            "<strong>Dillon & Watson (1996):</strong> Eğitim sonrası düşük–yüksek performans farkı tipik işlerde <strong>2:1</strong> iken, <strong>bilgisayar işlerinde 20:1</strong>'dir! Tasarım bu oranı azaltabilir.",
            "<strong>Yaşlanma:</strong> Bilişsel hız (KSH/USH) yavaşlar ve algı kapasitesi zayıflar; ancak <strong>karar kalitesi artar ('hızdan kaliteye')</strong>, yaşam boyu deneyim vardır ve <strong>dil yetenekleri etkilenmez</strong>.",
            "<strong>Kütüphane Veri Tabanı Çalışması (20 kullanıcı, 12 gün):</strong> Kullanıcı dostu arayüz (detaylı yardım, açık geri bildirim, kullanıcı dili) vs. olmayan (yardım yok, 'biip', 'Hata kodu 002'). 11. gün stres, 12. gün diğer arayüze geçiş. Kullanıcı dostu grup daha hızlı rasyonel karar verdi; diğer grup 12. günde yüksek hata yaptı. <strong>Sonuç:</strong> Arayüzler <strong>kısa ve uzun vadede</strong> test edilmeli.",
            "<strong>Fogg & Nass (1997):</strong> Övücü (yağ çeken), Samimi ve Nötr geri bildirim denendi. Övücü ve samimi nötre göre daha olumlu bulundu; <strong>yağ çeken ile samimi arasında fark bulunmadı</strong> (bilgisayardan gelen övgü de etkilidir).",
            "<strong>Akgün, Çağıltay & Zeyrek (2010):</strong> <strong>Özür dileyen hata mesajları</strong> kullanıcıların kendilerini daha iyi hissetmelerine neden oluyor."
          ],
          callout: "İnsanlar tümüyle rasyonel canlılar değildir; duygular devreye girdiğinde insan bilgi işleme süreci karmaşıklaşır."
        }
      ]
    },
    {
      id: 6,
      code: "Ders 06",
      title: "Kullanılabilirlik ve Değerlendirme Yaklaşımları",
      subtitle: "Özellikler Yanılsaması, ISO 9241-11 derinlemesine, Görev/Kullanıcı/Durum Analizi, Kullanıcı/Uzman/Model Tabanlı Testler",
      slideCount: 71,
      summary: "Kullanılabilirliğin anlamsal, özellik ve işlevsel tanımları; etkililik-verimlilik-memnuniyet sınırları; analiz metotları ve değerlendirme çerçevesi (Yaklaşım × Tür).",
      sections: [
        {
          heading: "Anlamsal Tanım, Özellikler Yanılsaması ve İşlevsel Tanım",
          bullets: [
            "<strong>Anlamsal Tanımlar</strong> ('kullanıcı dostu', 'şeffaflık', 'kullanım kolaylığı'): <strong>Döngüselliğe eğilimlidir</strong>, tasarıma yol göstermez.",
            "<strong>Özellikler Yanılsaması:</strong> Pencere, ikon, menü gibi özelliklerin varlığını kullanılabilirlik sanmak. <strong>SUN Microsystems (1990):</strong> <em>'Grafiksel öğelerin varlığı iyi uygulama tasarımını garantilemez.'</em> <strong>Kullanılabilirlik bir özellik DEĞİLDİR!</strong> (Not: Bağlam içinde faydalı yönergeler vardır; örn. <strong>yaygın menü yapısı derin menü yapısından daha etkindir</strong>.)",
            "<strong>Shackel (1991) İşlevsel Tanımı:</strong> Belirli kullanıcı grubu, özel destek/eğitim, belirli görevler ve çevresel senaryolar içinde kolay ve etkili kullanılma kapasitesi.",
            "<strong>ISO 9241-11:</strong> Etkililik (kesin değer veya %/1–5 ölçek; tek başına yetersiz), Verimlilik (zaman, çaba, adım, <strong>ideal yoldan sapma</strong> — ör. 7:3 adım; mühendislik yönlü, tek başına yetersiz), Memnuniyet (duygusal/tutumsal yanıt; kullanıcıların sevdikleri ihtiyaçları olmayabilir, tek başına yetersiz)."
          ]
        },
        {
          heading: "Kriter Belirleme ve 3 Temel Analiz",
          bullets: [
            "<strong>Kriterleri Kim Koyar?</strong> Müşteriler (sözleşme), Tasarımcılar (tasarım amaçları), Değerlendirmeciler (genelleme sınırları), Kullanıcılar (ürün bilgisi).",
            "<strong>Kullanım Senaryoları:</strong> Kullanıcıların, görevlerin ve bağlamın tanımlandığı etkileşim 'hikayeleri'.",
            "<strong>1. Kullanıcı Analizi:</strong> Beceri, tecrübe, eğitim, destek, çalışma pratiği, yaş, cinsiyet, fiziksel yetiler. (<em>ODTÜ X Bankası: 1 uzman + 2 pilot + 30 kullanıcı + 10 kullanıcı olmayan = 43 katılımcı; analize 40 kişi [20K/20E] dahil</em>).",
            "<strong>2. Görev Analizi:</strong> Davranışların insan, teknoloji ve çevreyle birlikte gözlemlenip <strong>alt görev bileşenlerine ayrılması</strong>. Metotları: <em>Gözlem, Görüşme, Sözlü protokol analizi, Kendi kendine deneme, Bilişsel modelleme (GOMS), Hiyerarşik görev analizi (HGA)</em>.",
            "<strong>3. Durum (Bağlam) Analizi:</strong> Yer (ev, ofis, cadde), diğer kullanıcılarla ilişkiler (iş birliği, aktif/pasif) ve sosyo-teknolojik çevre."
          ]
        },
        {
          heading: "Değerlendirme Çerçevesi: Yaklaşım × Tür",
          bullets: [
            "<strong>Tür (Amaç):</strong> <strong>Süreçsel (Formatif)</strong> — geliştirme süreci boyunca iyileştirme amaçlı · <strong>Sonuçsal (Summatif)</strong> — süreç sonunda ürünü ölçme amaçlı.",
            "<strong>Yaklaşım (Verinin Kaynağı):</strong> Kullanıcı Tabanlı, Uzman Tabanlı veya Model Tabanlı."
          ],
          table: {
            headers: ["Yaklaşım", "Öne Çıkan Metotlar", "Temel Avantajlar", "Temel Dezavantajlar"],
            rows: [
              ["Kullanıcı Tabanlı", "Gerçek kullanıcılarla uygun ortamda görev testleri", "En geçerli, en güvenilir, en ikna edici veri; prototiplerde çok etkin", "Yüksek maliyet (zaman/kaynak), sabır gerekir; problemi bulur ama yeni tasarımı açıkça söylemez"],
              ["Uzman Tabanlı", "Sezgisel Değerlendirme (Nielsen 1993 — 2 iterasyon, çoklu uzman); Bilişsel Prova (Polson 1992 — el simülasyonu, süreç için ideal)", "Hızlı, ucuz, teşhis yapılabilir, her aşamada uygulanır, özel ortam gerekmez", "Uzmanlığı kim belirler?, alan uzmanlığı gerekir, uzmanlar anlaşamaz, kullanıcı davranışı zor kestirilir"],
              ["Model Tabanlı", "GOMS (Card vd. 1983 — üretim kuralları ve uzman süre tahmini); İBE'de az kullanılır", "Sistem spesifikasyonları aşamasında (en erken) yapılabilir, ucuz, değişiklik imkanı en yüksek", "Eğitim gerektirir, bilen az, her ortama uymaz; GOMS sadece uzman, hatasız ve rutin görevleri öngörür"]
            ]
          },
          callout: "Sezgisel Değerlendirmede (Nielsen 1993) 2 iterasyon yapılır: (1) Prensiplerin ekran ekran kontrolü, (2) Ekranlar arası akışların kontrolü."
        }
      ]
    }
  ],

  flashcards: [
    // Ders 1
    { id: "f1", lesson: 1, front: "İBE'nin 4 temel bileşeni nelerdir?", back: "Kullanıcı, Araç/Arayüz, Görev ve Bağlam (Çevre)." },
    { id: "f2", lesson: 1, front: "Vannevar Bush (1945) hangi makale ve kavramsal sistemle tanınır?", back: "'As We May Think' makalesi ve MEMEX sistemi (PC, İnternet ve İBE vizyonu; bilişimde Türklere ilk referans)." },
    { id: "f3", lesson: 1, front: "J.C.R. Licklider (1960) 'Man-Computer Symbiosis' çalışmasında neyi savunmuştur?", back: "Bilgisayarla etkileşimin bir meslektaşla etkileşim gibi yüksek seviyede ve gerçek zamanlı olması gerektiğini." },
    { id: "f4", lesson: 1, front: "TÜBİTAK Vizyon 2023 raporundaki 'insan okur-yazarlığı' ne demektir?", back: "İnsanların bilgisayara ayak uydurması yerine, bilgisayarların insanlara ayak uydurması; kullanımı eğitim gerektirmeyen sistemler geliştirilmesi." },
    { id: "f5", lesson: 1, front: "USS Vincennes (1988) olayındaki tasarım hatası neydi?", back: "Bir ekran yükseklik, diğer ekran pozisyon/yön veriyordu. Stres altında iki veri yanlış yorumlandı ve 290 kişinin öldüğü yolcu uçağı düşürüldü." },
    { id: "f6", lesson: 1, front: "ISO 9241-11 standardına göre kullanılabilirliğin 3 bileşeni nedir?", back: "Etkililik (doğruluk/tamamlama), Verimlilik (zaman/maliyet/adım) ve Memnuniyet (kullanıcı tutumu/beğenisi)." },
    { id: "f7", lesson: 1, front: "CogTool nedir ve neyi simüle eder?", back: "Açık kaynaklı arayüz modelleme aracıdır. Kullanıcının biliş, algı ve motor davranışlarını simüle ederek iki farklı tasarımı karşılaştırır." },

    // Ders 2
    { id: "f8", lesson: 2, front: "Üretkenlik İkilemi (Solow Paradox) nedir?", back: "Bilişim teknolojilerine yapılan yatırımlar çok hızlı artmasına rağmen ekonomik üretkenlik artışının yavaş kalmasıdır." },
    { id: "f9", lesson: 2, front: "Landauer (1995) kullanılabilirlik için hangi çarpıcı sayıları vermiştir?", back: "Kullanılabilirlik iş verimliliğini %25'e kadar arttırır. Tipik bir arayüzdeki 40 sorunun 20'sini düzeltmek kullanılabilirliği %50 arttırır." },
    { id: "f10", lesson: 2, front: "Shneiderman'ın 8 Altın Kuralını sayınız.", back: "1) Tutarlılık, 2) Evrensel kullanılabilirlik, 3) Kaliteli geri bildirim, 4) Süreç/sonuç odaklı diyaloglar, 5) Hatadan koruma, 6) İşlemleri geri alma, 7) Kontrol kullanıcıda, 8) KSH yükünü düşürme." },
    { id: "f11", lesson: 2, front: "Lucy Suchman'ın 'Situated Action' (Durumsal Eylem) görüşü nedir?", back: "İnsan davranışları önceden tamamen planlı değildir; içinde bulunulan duruma/bağlama göre şekillenir. Planlar daima eksik ve değiştirilebilirdir." },
    { id: "f12", lesson: 2, front: "Norman'ın 4 Tasarım Prensibi nelerdir?", back: "1) Görülebilirlik, 2) Kavramsal model, 3) Anlamlı eşleştirmeler, 4) Geribildirim." },
    { id: "f13", lesson: 2, front: "Bailey (1993) çalışmasının en çarpıcı sonucu nedir?", back: "81 arayüz tasarımcısının %95'i gerçek görevlerde en yüksek performansı gösterdikleri arayüzü (yazı ile giriş) değil, başka bir arayüzü seçti." },
    { id: "f14", lesson: 2, front: "Bugünün vs. Geleceğin İBE sorunları için hangi teorisyenler önerilir?", back: "Bugünün sorunları: Norman & Shneiderman. Geleceğin sistemleri: Suchman & Licklider." },

    // Ders 3
    { id: "f15", lesson: 3, front: "Norman'ın 7 Aşamalı Etkileşim Döngüsündeki iki temel körfez nedir?", back: "Gerçekleştirme Körfezi (Gulf of Execution) ve Değerlendirme Körfezi (Gulf of Evaluation)." },
    { id: "f16", lesson: 3, front: "Gerçekleştirme Körfezi hangi kullanıcı sorularıyla ilgilidir?", back: "'Bunu nasıl çalıştıracağım?' ve 'Ne yapmalıyım?' (Hedef → Fiziksel eylem boşluğu)." },
    { id: "f17", lesson: 3, front: "Değerlendirme Körfezi hangi kullanıcı sorularıyla ilgilidir?", back: "'Ne oldu?' ve 'Bu yapmak istediğim mi?' (Sistem durumu → Hedefi değerlendirme boşluğu)." },
    { id: "f18", lesson: 3, front: "Kayma (Slip) hatası nedir ve nasıl çözülür?", back: "Kullanıcı sistemi iyi anlamış ama kaza ile yanlış zamanda yanlış tuşa basmıştır. Daha iyi bir ekran/arayüz tasarımı ile çözülür." },
    { id: "f19", lesson: 3, front: "Yanılgı (Mistake) hatası nedir?", back: "Kullanıcının sisteme hakim olmaması, ne yapacağını kestirememesi (yanlış hedef/model) sonucu oluşur. Düzeltilmesi kaymaya göre daha zordur." },
    { id: "f20", lesson: 3, front: "Öğrenilmiş çaresizlik ile öğretilmiş çaresizlik farkı nedir?", back: "Öğrenilmiş: 'Denedim yapamadım, ben bilgisayar kullanamıyorum.' Öğretilmiş: Çevreden aşılanan 'Matematik gibi: Sen yapamazsın.'" },
    { id: "f21", lesson: 3, front: "Norman'a göre İBE tek cümleyle nedir?", back: "Değerlendirme Körfezi ve Gerçekleştirme Körfezine köprü kurmaktır." },

    // Ders 4
    { id: "f22", lesson: 4, front: "İBE'de kullanıcının 4 boyutu nelerdir?", back: "Bilişsel (hafıza, öğrenme), Fizyolojik (ergonomi), Algısal (görsel/işitsel) ve Sosyal (organizasyon, grup)." },
    { id: "f23", lesson: 4, front: "Card, Moran & Newell (1983) modelindeki 3 işlemci nedir?", back: "Algı İşlemcisi, Bilişsel İşlemci ve Motor İşlemci." },
    { id: "f24", lesson: 4, front: "Algısal ön işlemcinin temel özellikleri nelerdir ve dikkat ne zaman devreye girer?", back: "Veriler < 1 sn'de yok olur, bilinçsizdir ve sinyal özelliklerine duyarlıdır. Dikkat, algısal ön işlemciden SONRA devreye girer." },
    { id: "f25", lesson: 4, front: "Kısa Süreli Hafızanın (KSH) kapasitesi ve silinme süresi nedir?", back: "Kapasite: 7 ± 2 grup/kutu. Silinme süresi: 10–30 saniye. Tekrar ve gruplama (chunking) KSH'yı destekler." },
    { id: "f26", lesson: 4, front: "Aşağıdan yukarı vs. Yukarıdan aşağı algısal yorumlama nedir?", back: "Aşağıdan yukarı (bottom-up): görsel/işitsel uyaran temelli. Yukarıdan aşağı (top-down): deneyim temelli yorumlama." },
    { id: "f27", lesson: 4, front: "Gruplama (Chunking) arayüz tasarımında hangi iki boyutta yapılmalıdır?", back: "Hem fiziksel (menü tasarımı) hem bilişsel (komutların sırası) boyutta; ayrıca gruplar anlamlı olmalıdır." },
    { id: "f28", lesson: 4, front: "TÜMÜ BÜYÜK HARFLE yazılan metinleri okumak neden daha zordur?", back: "Çünkü büyük harflerle yazılan tüm kelimeler aynı dikdörtgen dış şekle sahiptir; okurken kelimelerin başındaki 4–5 harfe ve kelime şekline göre gruplama yaparız." },

    // Ders 5
    { id: "f29", lesson: 5, front: "Kontrollü işlem ile Otomatik işlem arasındaki temel fark nedir? (Shiffrin & Schneider, 1977)", back: "Kontrollü: Yüksek dikkat, bilinçli, planlı, yavaş. Otomatik: Minimum dikkat, refleks seviyesinde, hızlı, unutması çok zor." },
    { id: "f30", lesson: 5, front: "Hangi 3 görev tipinden hangisi otomatikleşmez?", back: "Fiziksel yetenek temelli (en yüksek), Kural temelli (tekrarla otomatikleşebilir), Bilgi temelli (planlama/strateji → OTOMATİKLEŞMEZ)." },
    { id: "f31", lesson: 5, front: "Stroop testinde yavaşlama ve hata neden oluşur?", back: "Kelimeyi okumak ve rengi adlandırmak ikisi de otomatik süreçtir; bu iki otomatik süreç çakıştığında bilişsel yük ve hata artar." },
    { id: "f32", lesson: 5, front: "Yapısal ve Fonksiyonel Zihinsel Model farkı nedir? İBE hangisiyle ilgilenir?", back: "Yapısal ('Bu nasıl çalışıyor?'): onarım/sorun giderme. Fonksiyonel ('Bunu nasıl çalıştırırım?'): etkili kullanım. İBE genelde FONKSİYONEL modellerle ilgilenir." },
    { id: "f33", lesson: 5, front: "Dillon & Watson (1996) bireysel farklılık oranları nedir?", back: "Tipik işlerde eğitim sonrası performans farkı 2:1 iken, bilgisayar işlerinde bu fark 20:1'e çıkar." },
    { id: "f34", lesson: 5, front: "Yaşlanma bilişsel performansı nasıl etkiler? Hangi yetenek etkilenmez?", back: "Bilişsel hız (KSH/USH) ve algı kapasitesi yavaşlar; AMA karar kalitesi artar ('hızdan kaliteye') ve dil yetenekleri etkilenmez." },
    { id: "f35", lesson: 5, front: "Fogg & Nass (1997) ile Akgün, Çağıltay & Zeyrek (2010) neyi göstermiştir?", back: "Fogg & Nass: Bilgisayardan gelen övgü (yağ çeken ya da samimi, fark yok) nötre göre olumlu etki yapar. Akgün vd.: Özür dileyen hata mesajları kullanıcıyı daha iyi hissettirir." },

    // Ders 6
    { id: "f36", lesson: 6, front: "Özellikler Yanılsaması (Feature Fallacy) nedir?", back: "Kullanılabilirliğin pencere, ikon, menü gibi belirli arayüz özelliklerinin varlığıyla garanti edildiğini sanmaktır. Oysa kullanılabilirlik bir özellik DEĞİLDİR." },
    { id: "f37", lesson: 6, front: "Anlamsal kullanılabilirlik tanımlarının ('kullanıcı dostu' vb.) sorunu nedir?", back: "Döngüselliğe eğilimlidirler (kullanışlı = kullanımı kolay = ?) ve tasarıma pratik bir yardımları yoktur." },
    { id: "f38", lesson: 6, front: "Görev Analizi nedir ve 6 temel metodu hangileridir?", back: "Kullanıcı davranışlarının insan, teknoloji ve çevreyle birlikte gözlemlenip alt görevlere ayrılmasıdır. Metotlar: Gözlem, Görüşme, Sözlü protokol analizi, Kendi kendine deneme, GOMS, HGA." },
    { id: "f39", lesson: 6, front: "Kullanılabilirlik değerlendirmesinde Süreçsel (Formatif) ve Sonuçsal (Summatif) farkı nedir?", back: "Süreçsel (Formatif): Geliştirme süreci boyunca tasarım iyileştirme amaçlı. Sonuçsal (Summatif): Süreç sonunda nihai ürünü ölçme amaçlı." },
    { id: "f40", lesson: 6, front: "Kullanıcı Tabanlı yaklaşımın en büyük avantajı ve en büyük dezavantajı nedir?", back: "Avantaj: En geçerli, en güvenilir, en ikna edici veri. Dezavantaj: Maliyetli/zaman alıcıdır ve problemleri bulur ama yeni tasarımın nasıl olacağını açıkça söylemez." },
    { id: "f41", lesson: 6, front: "Bilişsel Prova (Cognitive Walkthrough — Polson, 1992) nedir?", back: "Uzman tabanlı bir yöntemdir; kullanıcının bilişsel etkinliklerinin bir el simülasyonudur ve süreç (formatif) değerlendirmesi için idealdir." },
    { id: "f42", lesson: 6, front: "Model Tabanlı (GOMS) değerlendirmenin en büyük avantajı ve kısıtı nedir?", back: "Avantaj: Sistem spesifikasyonları aşamasında yapılabilir, ucuzdur ve değişiklik için en yüksek imkanı verir. Kısıt: GOMS yalnızca uzman, hatasız ve isteğe bağlı olmayan görevleri öngörür." }
  ],

  questions: [
    // ================= DERS 1 (10 Soru) =================
    {
      id: "q101", lesson: 1, topic: "İBE Bileşenleri", slideRef: "Ders 1 · Slayt 8, 51", difficulty: "Temel",
      question: "Aşağıdakilerden hangisi İnsan Bilgisayar Etkileşiminin (İBE) dört temel bileşeninden biri DEĞİLDİR?",
      options: ["Kullanıcı", "Görev", "Bağlam (Çevre)", "Maliyet"],
      correct: 3,
      explanation: "İBE'nin 4 temel bileşeni: Kullanıcı, Araç/Arayüz, Görev ve Bağlam (Çevre)'dir. Maliyet bu 4 temel bileşen arasında yer almaz (verimlilik ölçütlerinde değerlendirilir)."
    },
    {
      id: "q102", lesson: 1, topic: "Tarihsel Gelişim", slideRef: "Ders 1 · Slayt 11, 14", difficulty: "Temel",
      question: "1945 yılında yayımladığı 'As We May Think' makalesi ve MEMEX kavramsal sistemiyle PC, İnternet ve İBE alanlarına vizyoner temel atan bilim insanı kimdir?",
      options: ["Douglas Engelbart", "Vannevar Bush", "J.C.R. Licklider", "Ben Shneiderman"],
      correct: 1,
      explanation: "Vannevar Bush (Temmuz 1945) 'As We May Think' makalesinde MEMEX sistemini önermiştir. Engelbart fareyi (1965), Licklider Man-Computer Symbiosis'i (1960), Shneiderman ise Software Psychology'yi (1980) geliştirmiştir."
    },
    {
      id: "q103", lesson: 1, topic: "Tarihsel Gelişim", slideRef: "Ders 1 · Slayt 11, 19", difficulty: "Orta",
      question: "\"Bir bilgisayarla gerçekleşen etkileşim sanki bir meslektaşınızla gerçekleşen etkileşim gibi olmalıdır\" vizyonunu 1960 yılında 'Man-Computer Symbiosis' çalışmasıyla ortaya koyan araştırmacı kimdir?",
      options: ["J.C.R. Licklider", "Brian Shackel", "Gerald Weinberg", "Donald Norman"],
      correct: 0,
      explanation: "Licklider (1960), Man-Computer Symbiosis makalesinde bilgisayarları gerçek zamanlı düşünme sürecine dahil etmeyi ve meslektaş düzeyinde etkileşimi savunmuştur."
    },
    {
      id: "q104", lesson: 1, topic: "TÜBİTAK Vizyon 2023", slideRef: "Ders 1 · Slayt 20", difficulty: "Temel",
      question: "TÜBİTAK Vizyon 2023 Raporu'nda (s. 73) vurgulanan 'insan okur-yazarlığı olan bilgisayarlar' ifadesi neyi anlatmaktadır?",
      options: [
        "İnsanların ileri düzeyde programlama eğitimi almasını",
        "Kullanıcıların bilgisayarlara uyum sağlamasını",
        "İnsanların bilgisayara değil, bilgisayarların insanlara ayak uydurmasını ve kullanımının eğitim gerektirmemesini",
        "Yalnızca sesli komutla çalışan donanımların üretilmesini"
      ],
      correct: 2,
      explanation: "Raporda 'Kullanımı eğitim gerektirmeyen bilgisayarların geliştirilmesi: İnsanlar bilgisayara ayak uyduracağına, bilgisayarlar insanlara ayak uydurmalı; yani insan okur-yazarlığı olan bilgisayarlar yapılmalı' denmektedir."
    },
    {
      id: "q105", lesson: 1, topic: "Kritik Tasarım Vakaları", slideRef: "Ders 1 · Slayt 35–38", difficulty: "Orta",
      question: "3 Temmuz 1988'deki USS Vincennes olayında (290 can kaybı) yolcu uçağının düşürülmesine yol açan temel arayüz/tasarım problemi neydi?",
      options: [
        "Radar ekranının tamamen bozulması",
        "Yükseklik bilgisinin bir ekranda, pozisyon ve yön bilgisinin başka bir ekranda verilmesi nedeniyle yüksek stres altında hatalı yorumlanması",
        "Uçağın sivil uçuş koridorunun dışına çıkması",
        "Komut tuşlarının yanlış dilde yazılmış olması"
      ],
      correct: 1,
      explanation: "Bir ekran yükseklik bilgisini, diğer ekran pozisyon ve yön bilgisini veriyordu. Kısa sürede ve yüksek stres altında bu iki ayrı bilgi hatalı yorumlandı. Olay sonrası NATO İnsan Mühendisliği test standartları geliştirildi."
    },
    {
      id: "q106", lesson: 1, topic: "Kritik Tasarım Vakaları", slideRef: "Ders 1 · Slayt 39–40", difficulty: "Orta",
      question: "Singapur Havayolları kazasında kaptan pilotun kaza sonrası ifadesine göre temel tasarım/algı sorunu neydi?",
      options: [
        "Kokpit göstergelerinin okunamayacak kadar küçük olması",
        "Kapalı bir pistin normal pist gibi ışıklandırılması, uyarı levhası ve bariyer olmaması nedeniyle pilotun zihnindeki kapalı pist modeliyle uyuşmaması",
        "Kule ile telsiz bağlantısının kopması",
        "Uçağın yakıt göstergesinin arızalanması"
      ],
      correct: 1,
      explanation: "Kaptan pilot, kapalı pistin normal pist gibi ışıklandırılmasının, uyarı levhaları ve bariyer bulunmamasının zihninde canlandırdığı 'kapalı pist' özellikleriyle uyuşmadığını beyan etmiştir."
    },
    {
      id: "q107", lesson: 1, topic: "Ölçülebilir Kriterler", slideRef: "Ders 1 · Slayt 55–57, 63–66", difficulty: "Senaryo",
      question: "Bir e-ticaret uygulamasında kullanıcının aradığı ürünü doğru bulma oranı %95, işlemi tamamlama süresi ortalama 45 saniye ve memnuniyet puanı 5 üzerinden 4,2'dir. Bu üç metrik ISO 9241-11'e göre sırasıyla hangi boyutları ölçer?",
      options: [
        "Verimlilik – Etkililik – Memnuniyet",
        "Etkililik – Verimlilik – Memnuniyet",
        "Memnuniyet – Etkililik – Verimlilik",
        "Kalıcılık – Öğrenilebilirlik – Hız"
      ],
      correct: 1,
      explanation: "Doğru bulma/tamamlama başarısı = Etkililik; harcanan zaman/kaynak = Verimlilik; kullanıcının beğeni/tutum puanı = Memnuniyet."
    },
    {
      id: "q108", lesson: 1, topic: "Göz İzleme", slideRef: "Ders 1 · Slayt 68–69", difficulty: "Orta",
      question: "Aşağıdakilerden hangisi Göz İzleme (Eye Tracking) çalışmalarında doğrudan elde edilen nicel verilerden biri DEĞİLDİR?",
      options: [
        "İlk odaklanma zamanı",
        "İlgi alanları arasındaki geçiş yoğunluğu",
        "Gezinme yörüngesi",
        "Kullanıcının uzun süreli hafıza kapasitesi"
      ],
      correct: 3,
      explanation: "Göz izleme; gezinme süresi, odaklanma, ilgi alanı ve odaklanma sayısı, farklı odaklanma süreleri, gezinme yörüngesi, ilk odaklanma zamanı ve ilgi alanları arası geçiş yoğunluğu verilerini sağlar. Uzun süreli hafıza kapasitesini ölçmez."
    },
    {
      id: "q109", lesson: 1, topic: "CogTool", slideRef: "Ders 1 · Slayt 70", difficulty: "Temel",
      question: "Açık kaynak kodlu CogTool aracı prototip arayüzlerde kullanıcının hangi üç davranışını simüle ederek tasarımları karşılaştırır?",
      options: [
        "Sosyal, Duygusal ve Kültürel davranışlar",
        "Biliş, Algı ve Motor davranışlar",
        "Etkililik, Memnuniyet ve Estetik davranışlar",
        "Okuma, Yazma ve Dinleme davranışları"
      ],
      correct: 1,
      explanation: "CogTool, hazırlanan prototiplerde kullanıcıların Biliş, Algı ve Motor davranışlarını simüle eden ve iki farklı tasarımı karşılaştırmaya imkan veren açık kaynak kodlu bir araçtır."
    },
    {
      id: "q110", lesson: 1, topic: "ATM Tasarımı", slideRef: "Ders 1 · Slayt 33", difficulty: "Temel",
      question: "Ders sunumunda banka ATM'lerinde 'önce para mı, önce kart mı?' tasarım kararının önemi vurgulanırken, kart unutmanın bankalara maliyeti yaklaşık ne kadar olarak verilmiştir?",
      options: [
        "100 – 250 bin ABD doları",
        "2 – 4,5 milyon ABD doları",
        "20 – 45 milyon ABD doları",
        "Maliyeti ihmal edilebilir düzeydedir"
      ],
      correct: 1,
      explanation: "Ders 1 Slayt 33'e göre ATM'lerde kart unutmanın maliyeti 2 – 4,5 milyon ABD dolarıdır. Önce kartı iade edip sonra parayı vermek (zorlayıcı fonksiyon / görev kapanışı) bu sorunu çözer."
    },

    // ================= DERS 2 (10 Soru) =================
    {
      id: "q201", lesson: 2, topic: "Üretkenlik İkilemi", slideRef: "Ders 2 · Slayt 6–10", difficulty: "Temel",
      question: "Landauer (1995) 'Üretkenlik İkilemi'ni (BİT yatırımları artarken üretkenliğin yavaş kalması) temel olarak neye bağlamakta ve tek çözüm olarak neyi önermektedir?",
      options: [
        "Donanım hızının yetersizliğine; çözüm olarak daha hızlı işlemciler",
        "Yazılımların zayıf tasarlanması ve kullanım süreçleriyle bütünleştirilememesine; tek çözüm olarak Kullanıcı Merkezli Tasarım",
        "Kullanıcıların tembelliğine; çözüm olarak zorunlu sertifika programları",
        "İnternet altyapısının yetersizliğine; çözüm olarak fiber ağlar"
      ],
      correct: 1,
      explanation: "Landauer (1995)'e göre temel sebep yazılımların zayıf tasarlanması ve otomasyonun kullanım süreçleriyle bütünleştirilememesidir. Tek çözüm Kullanıcı Merkezli Tasarımdır."
    },
    {
      id: "q202", lesson: 2, topic: "Landauer Sayıları", slideRef: "Ders 2 · Slayt 10", difficulty: "Orta",
      question: "Landauer (1995)'e göre tipik bir arayüzde bulunan yaklaşık 40 kullanılabilirlik sorununun 20 tanesini düzeltmek kullanılabilirliği yüzde kaç arttırır?",
      options: ["%15", "%25", "%50", "%80"],
      correct: 2,
      explanation: "Landauer: 'Tipik arayüzde 40 sorun vardır. Bunların 20 tanesini düzeltmek kullanılabilirliği %50 arttırır.' (İş verimliliğindeki artış ise %25'e kadardır.)"
    },
    {
      id: "q203", lesson: 2, topic: "Shneiderman 8 Altın Kural", slideRef: "Ders 2 · Slayt 12", difficulty: "Temel",
      question: "Aşağıdakilerden hangisi Ben Shneiderman'ın 8 Altın Kuralından biri DEĞİLDİR?",
      options: [
        "İşlemleri geri alabilme",
        "Kısa süreli hafıza yükünü düşür",
        "Kontrol kullanıcıda olmalı",
        "Uzun süreli hafıza kapasitesini arttır"
      ],
      correct: 3,
      explanation: "Shneiderman'ın 8 Altın Kuralı: Tutarlılık, Evrensel kullanılabilirlik, Kaliteli geri bildirim, Süreç ve sonuç odaklı diyaloglar, Hatadan koruma, İşlemleri geri alabilme, Kontrol kullanıcıda olmalı, Kısa süreli hafıza yükünü düşür."
    },
    {
      id: "q204", lesson: 2, topic: "Shneiderman vs. Landauer", slideRef: "Ders 2 · Slayt 10–11", difficulty: "Orta",
      question: "Ben Shneiderman (1992, 2016) yaklaşımının Thomas Landauer (1995)'den temel farkı nedir?",
      options: [
        "Shneiderman bilgisayarların yaşam kalitesini arttırdığını savunan daha iyimser bir yaklaşım sergiler",
        "Shneiderman kullanıcı merkezli tasarıma karşıdır",
        "Landauer ölçülebilir hedefleri reddeder",
        "Shneiderman yalnızca donanım ergonomisi ile ilgilenir"
      ],
      correct: 0,
      explanation: "Landauer BİT ile üretkenlik arasında negatif ilişki görürken, Shneiderman bilgisayarların yaşam kalitesini arttırdığını, insan çeşitliliklerini göz önüne alan ölçülebilir sistemler tasarlanabileceğini vurgular."
    },
    {
      id: "q205", lesson: 2, topic: "Lucy Suchman", slideRef: "Ders 2 · Slayt 15–16", difficulty: "Orta",
      question: "Lucy Suchman'ın (1987) 'Plans and Situated Actions' yaklaşımına göre aşağıdakilerden hangisi YANLIŞTIR?",
      options: [
        "İnsan davranışları önceden katı şekilde planlıdır ve planlar eksiksiz uygulanır",
        "Davranış bağlam ile ilişkilidir ve duruma göre şekillenir ('situated action')",
        "Planlar daima eksik ve değiştirilebilirdir",
        "Sadece bilişsel modelleri temel alan tasarımın başarı şansı düşüktür"
      ],
      correct: 0,
      explanation: "Suchman'a göre insan davranışları önceden planlı DEĞİLDİR; bulundukları duruma göre tepki verirler (situated action). Planlar her zaman eksik ve değiştirilebilirdir."
    },
    {
      id: "q206", lesson: 2, topic: "Teorisyen Karşılaştırması", slideRef: "Ders 2 · Slayt 17–18", difficulty: "Temel",
      question: "Ders sunumundaki karşılaştırmaya göre 'bugünün İBE sorunları' ve 'geleceğin İBE sistemleri' için hangi yaklaşımlar eşleştirilmiştir?",
      options: [
        "Bugün: Suchman & Licklider — Gelecek: Norman & Shneiderman",
        "Bugün: Norman & Shneiderman — Gelecek: Suchman & Licklider",
        "Bugün: Landauer & Bailey — Gelecek: Wickens & Polson",
        "Bugün: Fogg & Nass — Gelecek: Card & Moran"
      ],
      correct: 1,
      explanation: "Bugünün İBE sorunları için pratik çözümler sunan Norman & Shneiderman; geleceğin kullanıcıyı anlayan/sezen İBE sistemleri için Suchman & Licklider önerilir."
    },
    {
      id: "q207", lesson: 2, topic: "Norman'ın 4 Prensibi", slideRef: "Ders 2 · Slayt 28", difficulty: "Temel",
      question: "Aşağıdakilerden hangisi Donald Norman'ın 4 Tasarım Prensibini eksiksiz olarak vermektedir?",
      options: [
        "Tutarlılık, Geri alma, Hata önleme, Kontrol",
        "Görülebilirlik, Kavramsal model, Anlamlı eşleştirmeler, Geribildirim",
        "Etkililik, Verimlilik, Memnuniyet, Öğrenilebilirlik",
        "Algı, Bellek, Dikkat, Motor tepki"
      ],
      correct: 1,
      explanation: "Norman'ın 4 Tasarım Prensibi: Görülebilirlik (Visibility), Kavramsal model (Conceptual model), Anlamlı eşleştirmeler (Mapping) ve Geribildirim (Feedback)."
    },
    {
      id: "q208", lesson: 2, topic: "Arayüz ve Metaforlar", slideRef: "Ders 2 · Slayt 20–21, 25", difficulty: "Temel",
      question: "Ders sunumuna göre 'Masaüstü, çöp kutusu, dosya ve klasör' aşağıdakilerden hangisine örnektir?",
      options: [
        "Fiziksel arayüz bileşenleri",
        "Kavramsal (Metaforik) arayüz",
        "Yeni nesil etkileşim tipleri",
        "Giriş cihazları"
      ],
      correct: 1,
      explanation: "Klavye, fare, ekran 'Fiziksel arayüz'; masaüstü, çöp kutusu, dosya ve klasör ise 'Kavramsal (Metaforik) arayüz' örnekleridir."
    },
    {
      id: "q209", lesson: 2, topic: "Bailey (1993) Deneyi", slideRef: "Ders 2 · Slayt 29–30", difficulty: "Orta",
      question: "Bailey (1993)'in 81 arayüz tasarımcısıyla yaptığı 4 farklı arayüz (yazı ile giriş, 1 seviyeli menü, 2 seviyeli menü, çoklu menüler) çalışmasının temel bulgusu nedir?",
      options: [
        "Tasarımcıların tamamı en yüksek performanslı arayüzü ilk bakışta doğru tahmin etmiştir",
        "Çoklu menüler hem en yüksek performansı hem en yüksek değerlendirme puanını almıştır",
        "Tasarımcıların %95'i gerçek görevlerde en yüksek performans gösterdikleri arayüzü değil, diğerini seçmiştir",
        "Yazı ile giriş hem performansta hem değerlendirmede son sırada kalmıştır"
      ],
      correct: 2,
      explanation: "Yazı ile giriş performansta 1. olmasına rağmen tasarımcı değerlendirmesinde 4. (son) sırada kalmıştır. Tasarımcıların %95'i yüksek performans gösterdikleri arayüzü değil diğerini seçmiştir!"
    },
    {
      id: "q210", lesson: 2, topic: "Etkileşim Tipleri", slideRef: "Ders 2 · Slayt 25", difficulty: "Temel",
      question: "Aşağıdakilerden hangisi ders sunumunda 'Yeni Etkileşim Tipleri' arasında sınıflandırılmıştır?",
      options: [
        "Komutlar, Menüler, Formlar",
        "Doğal dil, Duygular, Beyin-Bilgisayar",
        "Pencereler, İkonlar, İmleçler",
        "Klavye, Fare, Dokunmatik ekran"
      ],
      correct: 1,
      explanation: "Geleneksel etkileşim tipleri: Komutlar, Menüler, Formlar. Yeni etkileşim tipleri: Doğal dil, Duygular, Beyin-Bilgisayar."
    },

    // ================= DERS 3 (10 Soru) =================
    {
      id: "q301", lesson: 3, topic: "Norman'ın 7 Aşaması", slideRef: "Ders 3 · Slayt 10–11", difficulty: "Temel",
      question: "Norman'ın 7 Aşamalı Etkileşim Döngüsünde, kullanıcının hedefini belirledikten sonra fiziksel dünyaya doğru ilerlerken (gerçekleştirme tarafında) sırasıyla geçtiği aşamalar hangileridir?",
      options: [
        "Algılama → Yorumlama → Değerlendirme",
        "Beklenti → Yapılmak istenen hareketin belirlenmesi → Gerçekleştirme",
        "Yorumlama → Gerçekleştirme → Algılama",
        "Değerlendirme → Beklenti → Algılama"
      ],
      correct: 1,
      explanation: "Gerçekleştirme tarafı (Hedef → Dünya): Hedefler → Beklenti → Yapılmak İstenen Hareketin Belirlenmesi → Gerçekleştirme. Değerlendirme tarafı (Dünya → Hedef): Algılama → Yorumlama → Değerlendirme."
    },
    {
      id: "q302", lesson: 3, topic: "Gerçekleştirme Körfezi", slideRef: "Ders 3 · Slayt 12", difficulty: "Senaryo",
      question: "Bir kullanıcı yeni aldığı kahve makinesinin karşısında durmuş 'Süt köpürtmek istiyorum ama hangi düğmeye basacağım, bunu nasıl çalıştıracağım?' diye düşünmektedir. Bu kullanıcı Norman'ın hangi körfezinde sorun yaşamaktadır?",
      options: [
        "Değerlendirme Körfezi",
        "Gerçekleştirme Körfezi",
        "Bilişsel Prova Körfezi",
        "Anlamsal Körfez"
      ],
      correct: 1,
      explanation: "'Bunu nasıl çalıştıracağım? Ne yapmalıyım?' soruları hedef ile fiziksel eylem arasındaki Gerçekleştirme Körfezine (Gulf of Execution) aittir."
    },
    {
      id: "q303", lesson: 3, topic: "Değerlendirme Körfezi", slideRef: "Ders 3 · Slayt 12", difficulty: "Senaryo",
      question: "Bir web formunda 'Gönder' butonuna bastınız; sayfa hiçbir uyarı, onay mesajı veya yüklenme ikonu göstermedi. 'Acaba form gitti mi, ne oldu, yapmak istediğim gerçekleşti mi?' diye tereddüt ediyorsunuz. Bu durum hangi körfezin geniş olduğunu gösterir?",
      options: [
        "Gerçekleştirme Körfezi",
        "Değerlendirme Körfezi",
        "Fizyolojik Körfez",
        "Otomatikleşme Körfezi"
      ],
      correct: 1,
      explanation: "'Ne oldu? Bu yapmak istediğim mi?' soruları sistemin durumunu algılayıp yorumlamayla ilgili Değerlendirme Körfezine (Gulf of Evaluation) aittir. Zayıf geri bildirim bu körfezi büyütür."
    },
    {
      id: "q304", lesson: 3, topic: "Kayma (Slips)", slideRef: "Ders 3 · Slayt 13", difficulty: "Senaryo",
      question: "Word programını çok iyi bilen bir kullanıcı 'Kaydet' butonuna basmak isterken aceleyle hemen yanındaki 'Kapat' butonuna tıklamıştır. Norman'ın hata sınıflamasına göre bu hata türü ve öncelikli çözümü nedir?",
      options: [
        "Yanılgı (Mistake) — Kullanıcıya uzun eğitim verilmesi",
        "Kayma (Slip) — Daha iyi bir ekran/arayüz tasarımı",
        "Öğretilmiş çaresizlik — Hata mesajını kaldırmak",
        "Bilgi temelli hata — Sistemi yeniden kodlamak"
      ],
      correct: 1,
      explanation: "Kullanıcı sistemi iyi anlamış ve ne yapacağının farkındayken kaza ile yanlış tuşa basmışsa bu bir Kayma (Slip)'dır. Çözümü daha iyi bir ekran/arayüz tasarımıdır (ör. butonları ayırmak, onay koymak)."
    },
    {
      id: "q305", lesson: 3, topic: "Yanılgı (Mistakes)", slideRef: "Ders 3 · Slayt 13", difficulty: "Senaryo",
      question: "Yeni bir muhasebe yazılımını ilk kez kullanan bir çalışan, KDV beyannamesini göndermek için yanlış menüdeki 'Arşivle' seçeneğinin beyannameyi vergi dairesine ilettiğini sanıp ona basmıştır. Bu hata türü nedir?",
      options: [
        "Kayma (Slip)",
        "Yanılgı (Mistake)",
        "Algısal yanılsama",
        "Otomatik refleks hatası"
      ],
      correct: 1,
      explanation: "Kullanıcı sisteme hakim değilse ve ne yapacağını tam kestiremeyip yanlış bir niyet/model ile işlem yapıyorsa bu bir Yanılgı (Mistake)'dır. Düzeltilmesi kaymaya göre daha zordur."
    },
    {
      id: "q306", lesson: 3, topic: "Kayma vs. Yanılgı", slideRef: "Ders 3 · Slayt 13", difficulty: "Temel",
      question: "Kayma (Slips) ve Yanılgı (Mistakes) karşılaştırıldığında aşağıdakilerden hangisi doğrudur?",
      options: [
        "Kaymaların düzeltilmesi yanılgılara göre daha zordur",
        "Yanılgılar sadece uzman kullanıcılarda görülür",
        "Yanılgıların düzeltilmesi daha zordur ve sistemin iyi anlaşılmasını gerektirir",
        "Kaymalarda kullanıcı sistemin nasıl çalıştığını hiç bilmemektedir"
      ],
      correct: 2,
      explanation: "Kaymalarda kullanıcı sistemi iyi bilir (daha iyi ekran tasarımıyla önlenir). Yanılgılarda kullanıcı sisteme hakim değildir; bu yüzden düzeltilmesi daha zordur ve sistemin iyi anlaşılmasını gerektirir."
    },
    {
      id: "q307", lesson: 3, topic: "Öğrenilmiş Çaresizlik", slideRef: "Ders 3 · Slayt 15", difficulty: "Temel",
      question: "Kötü tasarlanmış yazılımlarla tekrar tekrar sorun yaşadıktan sonra 'Denedim yapamadım, vazgeçiyorum; ben zaten bilgisayar kullanamıyorum' diyen bir kullanıcının durumu ne olarak adlandırılır?",
      options: [
        "Öğretilmiş çaresizlik",
        "Öğrenilmiş çaresizlik",
        "Özellikler yanılsaması",
        "Üretkenlik ikilemi"
      ],
      correct: 1,
      explanation: "'Denedim yapamadım: Vazgeçiyorum — Ben bilgisayar kullanamıyorum' durumu Öğrenilmiş Çaresizliktir. 'Matematik dersi gibi: Sen yapamazsın' ise Öğretilmiş Çaresizliktir."
    },
    {
      id: "q308", lesson: 3, topic: "Öğretilmiş Çaresizlik", slideRef: "Ders 3 · Slayt 15", difficulty: "Temel",
      question: "Ders sunumunda 'Matematik dersi gibi: Sen yapamazsın' örneğiyle açıklanan kavram hangisidir?",
      options: [
        "Öğrenilmiş çaresizlik",
        "Öğretilmiş çaresizlik",
        "Durumsal eylem",
        "Bilişsel prova"
      ],
      correct: 1,
      explanation: "Ders 3 Slayt 15'te 'Öğretilmiş çaresizlik' doğrudan 'Matematik dersi gibi: Sen yapamazsın' örneğiyle verilmiştir."
    },
    {
      id: "q309", lesson: 3, topic: "Norman'ın Etkileşim Görüşü", slideRef: "Ders 3 · Slayt 5, 14", difficulty: "Orta",
      question: "Donald Norman'ın etkileşim anlayışına göre aşağıdakilerden hangisi YANLIŞTIR?",
      options: [
        "Hata etkileşimin doğal bir parçasıdır",
        "Kullanıcı sistem modelini parçalı bilgilerle oluşturur",
        "İyi tasarlanmış bir sistemde kullanıcı hiçbir zaman hata yapmaz",
        "Dünya ile etkileşimimiz sürekli bir döngüdür"
      ],
      correct: 2,
      explanation: "Norman'a göre hata etkileşimin doğal bir parçasıdır; kullanıcılar her zaman hata yapabilir, önemli olan arayüzün hataları önlemesi ve telafi edilebilir kılmasıdır."
    },
    {
      id: "q310", lesson: 3, topic: "Kullanılabilir Arayüz Soruları", slideRef: "Ders 3 · Slayt 7, 16", difficulty: "Orta",
      question: "Norman'ın 7 aşamalı döngü modelini bir tasarım değerlendirmesinde kullanırken tasarımcıya sordurduğu 5 temel sorudan biri hangisidir?",
      options: [
        "Yazılımın kaynak kodu kaç satırdır?",
        "Kullanıcı sistemin istediği duruma gelip gelmediğini ne kadar kolaylıkla söyleyebilir?",
        "Ürünün piyasa satış fiyatı rakiplerinden ucuz mudur?",
        "Tasarımcı arayüzü ne kadar estetik bulmaktadır?"
      ],
      correct: 1,
      explanation: "Norman'ın 5 sorusu: fonksiyonları anlama, fiziksel harekete dökme, hareketi gerçekleştirme, sistem durumunu anlama/eşleştirme ve sistemin istenen durumda olduğunu söyleyebilme."
    },

    // ================= DERS 4 (10 Soru) =================
    {
      id: "q401", lesson: 4, topic: "Kullanıcının 4 Boyutu", slideRef: "Ders 4 · Slayt 4", difficulty: "Temel",
      question: "İBE'de kullanıcının ele alındığı 4 temel boyut aşağıdakilerden hangisinde doğru verilmiştir?",
      options: [
        "Bilişsel, Fizyolojik, Algısal, Sosyal",
        "Ekonomik, Politik, Teknik, Estetik",
        "Görsel, İşitsel, Dokunsal, Tat alma",
        "Etkililik, Verimlilik, Memnuniyet, Güvenlik"
      ],
      correct: 0,
      explanation: "Kullanıcının 4 boyutu: Bilişsel (hafıza, öğrenme), Fizyolojik (fiziksel ergonomi), Algısal (görsel, işitsel) ve Sosyal (organizasyon, grup)."
    },
    {
      id: "q402", lesson: 4, topic: "Nielsen Kullanıcı Tipleri", slideRef: "Ders 4 · Slayt 5", difficulty: "Temel",
      question: "Nielsen (1993) kullanıcı tiplerini sınıflandırırken hangi üç boyutu kullanır?",
      options: [
        "Yaş, Cinsiyet, Gelir düzeyi",
        "Bilgisayar deneyimi, Alan hakkında bilgi, Sistem deneyimi (deneyimsiz–uzman)",
        "Zeka düzeyi, Kişilik tipi, Dil becerisi",
        "Okuma hızı, Yazma hızı, Hafıza gücü"
      ],
      correct: 1,
      explanation: "Nielsen (1993) 3 boyutlu küp: (1) Düşük–Yüksek Bilgisayar Deneyimi, (2) Alan Hakkında Bilgisiz–Bilgili, (3) Sistemin Deneyimsiz–Uzman Kullanıcısı."
    },
    {
      id: "q403", lesson: 4, topic: "Card, Moran & Newell", slideRef: "Ders 4 · Slayt 7–8", difficulty: "Temel",
      question: "Card, Moran ve Newell (1983) insan bilgi işleme modelindeki üç ana işlemci hangileridir?",
      options: [
        "Görsel İşlemci, İşitsel İşlemci, Dokunsal İşlemci",
        "Algı İşlemcisi, Bilişsel İşlemci, Motor İşlemci",
        "Giriş İşlemcisi, Bellek İşlemcisi, Çıkış İşlemcisi",
        "Kısa Süreli İşlemci, Uzun Süreli İşlemci, Dikkat İşlemcisi"
      ],
      correct: 1,
      explanation: "Card, Moran & Newell (1983) modelinde 3 işlemci bulunur: Algı İşlemcisi, Bilişsel İşlemci ve Motor İşlemci."
    },
    {
      id: "q404", lesson: 4, topic: "Algısal Ön İşlemci & Dikkat", slideRef: "Ders 4 · Slayt 18–19", difficulty: "Orta",
      question: "Wickens (1992) İnsan Bilgi İşleme Modeline göre 'Algısal Ön İşlemci' ve 'Dikkat' hakkında hangisi DOĞRUDUR?",
      options: [
        "Algısal ön işlemci bilinçli bir süreçtir ve verileri 10–30 saniye tutar",
        "Algısal ön işlemci bilinçsizdir, veriler < 1 sn'de yok olur ve dikkat algısal ön işlemciden SONRA devreye girer",
        "Dikkat, algısal ön işlemciden ÖNCE devreye girer",
        "Algısal ön işlemci anlamsal yapıda sonsuz kapasiteye sahiptir"
      ],
      correct: 1,
      explanation: "Algısal ön işlemcide veriler hızla (< 1 sn) yok olur ve süreç bilinçsizdir. Dikkat, algısal ön işlemciden SONRA (algı, karar ve tepki süreçlerinde) devreye girer."
    },
    {
      id: "q405", lesson: 4, topic: "Kısa Süreli Hafıza", slideRef: "Ders 4 · Slayt 20", difficulty: "Temel",
      question: "Kısa Süreli (Çalışan) Hafızanın (KSH) kapasitesi ve silinme süresi ders notlarında sırasıyla nasıl verilmiştir?",
      options: [
        "3 ± 1 grup ve 1–5 saniye",
        "7 ± 2 grup/kutu ve 10–30 saniye",
        "12 ± 2 grup ve 1–3 dakika",
        "Sonsuz kapasite ve 60 saniye"
      ],
      correct: 1,
      explanation: "KSH'nın kapasitesi 7 ± 2 grup/kutu, silinme süresi ise 10–30 saniyedir. Tekrar etmek ve gruplama (chunking) bilginin KSH'da tutulmasını kolaylaştırır."
    },
    {
      id: "q406", lesson: 4, topic: "Algı Yorumlama", slideRef: "Ders 4 · Slayt 26–28", difficulty: "Orta",
      question: "Zöllner ve Jastrow illüzyonlarının ardından verilen sonuca göre algısal yorumlamanın iki yönü nasıl tanımlanır?",
      options: [
        "Görsel/işitsel (aşağıdan yukarı) ve deneyim temelli (yukarıdan aşağı)",
        "Hızlı (aşağıdan yukarı) ve yavaş (yukarıdan aşağı)",
        "Fiziksel (sağdan sola) ve bilişsel (soldan sağa)",
        "Bilinçli (aşağıdan yukarı) ve bilinçsiz (yukarıdan aşağı)"
      ],
      correct: 0,
      explanation: "Algı aktif ve yorumlayıcıdır: görsel/işitsel uyaran temelli (aşağıdan yukarı / bottom-up) ve deneyim temelli (yukarıdan aşağı / top-down) çalışır."
    },
    {
      id: "q407", lesson: 4, topic: "Gruplama (Chunking)", slideRef: "Ders 4 · Slayt 46–52", difficulty: "Senaryo",
      question: "'TDKUSBTRTSSKDNATSK' şeklindeki 18 harflik diziyi 'TDK, USB, TRT, SSK, DNA, TSK' şeklinde 6 parçaya ayırarak kolayca ezberleyebilmemiz hangi bilişsel mekanizmanın örneğidir?",
      options: [
        "Otomatik refleks",
        "Anlamlı gruplama (Chunking)",
        "Öğrenilmiş çaresizlik",
        "Stroop etkisi"
      ],
      correct: 1,
      explanation: "18 harf KSH'nın 7±2 sınırını aşar; ancak geçmiş deneyimlerimizle 6 anlamlı kısaltma grubuna ayırdığımızda (Chunking) 7±2 içine sığar ve kolayca hatırlanır."
    },
    {
      id: "q408", lesson: 4, topic: "Gruplama Tasarım Boyutu", slideRef: "Ders 4 · Slayt 56", difficulty: "Orta",
      question: "Arayüz tasarımında gruplamanın 'fiziksel' ve 'bilişsel' boyutlarına ders sunumunda verilen örnekler sırasıyla hangileridir?",
      options: [
        "Klavye tuşları (Fiziksel) — Renk seçimi (Bilişsel)",
        "Menü tasarımı (Fiziksel) — Komutların sırası (Bilişsel)",
        "Ekran parlaklığı (Fiziksel) — Ses yüksekliği (Bilişsel)",
        "Fare hızı (Fiziksel) — Yazı boyutu (Bilişsel)"
      ],
      correct: 1,
      explanation: "Ders 4 Slayt 56: 'Gruplama hem bilişsel hem de fiziksel boyutta olmalı: Menü tasarımı (Fiziksel), Komutların sırası (Bilişsel). İkonlara etiket eklenmesi hatırlamaya yardımcı olur.'"
    },
    {
      id: "q409", lesson: 4, topic: "Okuma Psikolojisi", slideRef: "Ders 4 · Slayt 57–62", difficulty: "Senaryo",
      question: "Bir uyarı penceresindeki uzun metnin TAMAMININ BÜYÜK HARFLERLE yazılması kullanılabilirlik açısından neden önerilmez?",
      options: [
        "Büyük harfler ekranda piksel hatası oluşturur",
        "Büyük harflerle yazılan kelimeler aynı dikdörtgen şekle sahip olduğu için algısal gruplamayı ve okumayı zorlaştırır",
        "Büyük harfler uzun süreli hafızayı aşırı doldurur",
        "Kullanıcılar büyük harfleri algısal ön işlemciden geçiremez"
      ],
      correct: 1,
      explanation: "Okuma bir algısal gruplama etkinliğidir; kelimelerin dış şeklinden ve ilk 4–5 harfinden yararlanırız. TÜMÜ BÜYÜK HARF aynı dikdörtgen bloğu oluşturduğu için okumayı yavaşlatır."
    },
    {
      id: "q410", lesson: 4, topic: "Uzun Süreli Hafıza", slideRef: "Ders 4 · Slayt 21", difficulty: "Temel",
      question: "Uzun Süreli Hafızanın (USH) ders sunumunda belirtilen üç temel özelliği hangisidir?",
      options: [
        "7±2 kapasite, hızlı işlem, görsel yapı",
        "Sonsuz kapasite (teorik), yavaş işlem, anlamsal yapı",
        "10–30 sn süre, bilinçsiz işlem, akustik yapı",
        "Kısıtlı kapasite, refleks hızında işlem, geçici yapı"
      ],
      correct: 1,
      explanation: "Ders 4 Slayt 21: Uzun Süreli Hafıza — Sonsuz kapasite (teorik), Yavaş işlem, Anlamsal yapı."
    },

    // ================= DERS 5 (10 Soru) =================
    {
      id: "q501", lesson: 5, topic: "Kontrollü vs. Otomatik", slideRef: "Ders 5 · Slayt 9–12", difficulty: "Temel",
      question: "Shiffrin ve Schneider (1977) tarafından tanımlanan 'Otomatik İşlem' için aşağıdakilerden hangisi YANLIŞTIR?",
      options: [
        "Dikkatle ilgili minimum talep gerektirir",
        "Neredeyse refleks seviyesinde ve hızlıdır",
        "Her hareket bilinçli bir karar verme sürecinden geçer",
        "Öğrenilen otomatik bir davranışı unutmak zordur"
      ],
      correct: 2,
      explanation: "Bilinçli planlama ve karar verme süreci 'Kontrollü İşlem'in özelliğidir. Otomatik işlemde karar verme süreci yoktur, tepkiler hızlı ve serbestçe gerçekleşir."
    },
    {
      id: "q502", lesson: 5, topic: "Otomatikleşme İstisnaları", slideRef: "Ders 5 · Slayt 14", difficulty: "Orta",
      question: "Aşağıdaki durumlardan hangisinde bir davranışın kontrollüden otomatiğe GEÇMEMESİ (istisna olması) beklenir?",
      options: [
        "Davranış her gün defalarca tekrarlanıyorsa",
        "Hata yapma durumunda sonuçları zarar vericiyse veya üst seviye bilişsel çaba gerektiriyorsa",
        "Klavyede yazı yazmayı öğrenme sürecindeyse",
        "Basit bir fiziksel tepki içeriyorsa"
      ],
      correct: 1,
      explanation: "Kontrollüden otomatiğe geçişin 3 istisnası: (1) Sık tekrar edilmiyorsa, (2) Hata yapma durumunda sonuçları zarar vericiyse, (3) Üst seviye bilişsel çaba gerektiriyorsa."
    },
    {
      id: "q503", lesson: 5, topic: "Görev Tipleri", slideRef: "Ders 5 · Slayt 15–16", difficulty: "Senaryo",
      question: "Bir alışveriş sitesinde farklı markaların özelliklerini, fiyatlarını ve yorumlarını kıyaslayıp stratejik satın alma kararı vermek hangi görev tipine girer ve otomatikleşme durumu nedir?",
      options: [
        "Fiziksel yetenek temelli — Otomatikleşme potansiyeli en yüksektir",
        "Kural temelli — Kapsamlı tekrar ile otomatikleşebilir",
        "Bilgi temelli — Otomatikleşmez",
        "Algısal temelli — 1 saniyeden kısa sürede otomatikleşir"
      ],
      correct: 2,
      explanation: "Planlama ve strateji gerektiren işlemler (alışveriş sitesinde mal satın alma) Bilgi Temellidir ve otomatikleşmez. Trafik ışığında ayak hareketi (yetenek temelli) en yüksek, Tamam/İptal (kural temelli) tekrarla otomatikleşebilir."
    },
    {
      id: "q504", lesson: 5, topic: "Stroop Testi", slideRef: "Ders 5 · Slayt 17–25", difficulty: "Orta",
      question: "Stroop testinde 'MAVİ' kelimesi kırmızı renkle yazıldığında kullanıcının mürekkep rengini ('kırmızı') söylerken yavaşlaması ve hata yapmasının temel nedeni nedir?",
      options: [
        "Kullanıcının renk körü olması",
        "Kelimeyi okuma ve rengi adlandırma gibi iki otomatik sürecin birbiriyle çakışarak bilişsel yük yaratması",
        "Kısa süreli hafızanın 30 saniyeyi aşması",
        "Kelimenin büyük harfle yazılması"
      ],
      correct: 1,
      explanation: "Kelimeleri okumak da renkleri adlandırmak da otomatik süreçtir. İki otomatik süreç çakıştığında bilişsel yük artar, işlem süresi uzar ve hatalar oluşur."
    },
    {
      id: "q505", lesson: 5, topic: "Zihinsel Modeller", slideRef: "Ders 5 · Slayt 28, 31", difficulty: "Temel",
      question: "Eberts (1994)'e göre 'Bu nasıl çalışıyor?' sorusuna yanıt veren (onarım/sorun giderme) model ile 'Bunu nasıl çalıştırırım?' sorusuna yanıt veren (etkili kullanım) model sırasıyla hangileridir ve İBE genelde hangisiyle ilgilenir?",
      options: [
        "Fonksiyonel – Yapısal; İBE genelde Yapısal ile ilgilenir",
        "Yapısal – Fonksiyonel; İBE genelde Fonksiyonel modeller ile ilgilenir",
        "Kavramsal – Fiziksel; İBE genelde Fiziksel ile ilgilenir",
        "Bilişsel – Sosyal; İBE genelde Sosyal ile ilgilenir"
      ],
      correct: 1,
      explanation: "Yapısal model ('Bu nasıl çalışıyor?') sorun giderme/onarım içindir. Fonksiyonel model ('Bunu nasıl çalıştırırım?') etkili kullanım içindir ve İBE genelde fonksiyonel modellerle ilgilenir."
    },
    {
      id: "q506", lesson: 5, topic: "9 Nokta Testi", slideRef: "Ders 5 · Slayt 32–34", difficulty: "Orta",
      question: "Ders sunumundaki '9 nokta testi' (4 kesintisiz doğruyla tüm noktaları birleştirme) zihinsel modellerle ilgili hangi önemli sonucu vurgular?",
      options: [
        "İnsanların görsel algısı tamamen kusursuzdur",
        "Mantıksal çıkarım ile psikolojik çıkarım aynı değildir; deneyime ve tanıdık bağlama dayanan zengin model doğru kararı destekler",
        "Çizim görevleri otomatik olarak gerçekleşir",
        "Uzun süreli hafıza problem çözmede etkisizdir"
      ],
      correct: 1,
      explanation: "9 nokta testinin sonucu (Slayt 34): Deneyime ve tanıdık bağlama dayanan model daha zengindir, zengin model doğru karar vermeyi destekler ve 'Mantıksal ve psikolojik çıkarım aynı değildir!'"
    },
    {
      id: "q507", lesson: 5, topic: "Bireysel Farklılıklar", slideRef: "Ders 5 · Slayt 38", difficulty: "Temel",
      question: "Dillon ve Watson (1996)'a göre eğitim sonrası düşük ve yüksek performans gösterenler arasındaki oran tipik işlerde 2:1 iken, bilgisayar ile ilgili işlerde genelde kaça çıkmaktadır?",
      options: ["4:1", "10:1", "20:1", "50:1"],
      correct: 2,
      explanation: "Tipik işlerde (okuma hızı, ezber, sınav) oran 2:1 iken, bilgisayar ile ilgili işlerde 20:1'dir. İyi arayüz tasarımı bu uçurumu azaltabilecek unsurlardan biridir."
    },
    {
      id: "q508", lesson: 5, topic: "Yaşlanma", slideRef: "Ders 5 · Slayt 40", difficulty: "Orta",
      question: "Yaşlanmanın bilişsel ve algısal süreçler üzerindeki etkisiyle ilgili aşağıdakilerden hangisi DOĞRUDUR?",
      options: [
        "Bilişsel hız artar, dil yetenekleri hızla kaybolur",
        "Bilişsel hız yavaşlar ve algı kapasitesi zayıflar; ancak karar kalitesi artar ('hızdan kaliteye') ve dil yetenekleri etkilenmez",
        "Yaşlı kullanıcıların karar kalitesi her zaman gençlerden düşüktür",
        "Sadece uzun süreli hafıza etkilenir, kısa süreli hafıza değişmez"
      ],
      correct: 1,
      explanation: "Yaşlanmayla bilişsel hız (KSH ve USH) yavaşlar ve algı kapasitesi zayıflar; ancak yaşam boyu deneyimle karar kalitesi artar ('hızdan kaliteye') ve dil yetenekleri etkilenmez."
    },
    {
      id: "q509", lesson: 5, topic: "Uzun Vadeli Test Çalışması", slideRef: "Ders 5 · Slayt 43–51", difficulty: "Senaryo",
      question: "12 gün süren kütüphane veri tabanı çalışmasında ('Kullanıcı dostu' vs. 'Kullanıcı dostu değil' arayüzler; 11. gün stres, 12. gün diğer arayüze geçiş) çıkarılan en temel İBE dersi nedir?",
      options: [
        "İnsanlar zamanla kötü arayüze de alıştığı için kullanılabilirlik lükstür",
        "Sadece 1. gün yapılan hata sayısı ölçümü yeterlidir",
        "Arayüzler kullanımın hem kısa hem uzun vadesinde test edilmeli; hata sayılarının söylemediğini kullanıcı geri dönütleri söyler",
        "Teknik dil kullanan hata kodları uzmanlaşmayı hızlandırır"
      ],
      correct: 2,
      explanation: "Kullanıcı dostu tasarım kullananlar rasyonel kararlara daha erken ulaşıp 10. günde daha bilgili oldular; diğer grup 12. günde yüksek hata yaptı. Ders: Kısa ve uzun vadede test + geri dönütlerin önemi."
    },
    {
      id: "q510", lesson: 5, topic: "Duygular ve Geri Bildirim", slideRef: "Ders 5 · Slayt 53–55", difficulty: "Orta",
      question: "Fogg ve Nass (1997) ile Akgün, Çağıltay ve Zeyrek (2010) çalışmalarının bulguları aşağıdakilerden hangisinde doğru özetlenmiştir?",
      options: [
        "Bilgisayardan gelen övgü kullanıcıyı rahatsız eder; özür dileyen hata mesajları güveni azaltır",
        "Sadece samimi övgü etkili olmuş, yağ çeken övgü nötrden kötü çıkmıştır",
        "Övücü (yağ çeken) ve samimi geri bildirim arasında fark bulunmamış, ikisi de nötre göre olumlu etki yapmıştır; özür dileyen hata mesajları kullanıcıyı daha iyi hissettirir",
        "Duygular bilgisayar etkileşiminde hiçbir ölçülebilir etki yaratmaz"
      ],
      correct: 2,
      explanation: "Fogg & Nass (1997): Övücü (yağ çeken) ve samimi geri bildirim arasında fark çıkmadı, ikisi de nötre göre kullanıcıyı daha iyi hissettirdi. Akgün, Çağıltay & Zeyrek (2010): Özür dileyen hata mesajları kullanıcıyı daha iyi hissettiriyor."
    },

    // ================= DERS 6 (10 Soru) =================
    {
      id: "q601", lesson: 6, topic: "Anlamsal Tanımlar", slideRef: "Ders 6 · Slayt 7–8", difficulty: "Temel",
      question: "Kullanılabilirliği 'kullanıcı dostu', 'kullanım kolaylığı' veya 'şeffaflık' gibi anlamsal tanımlarla açıklamanın temel sorunu nedir?",
      options: [
        "Çok fazla matematiksel formül içermesi",
        "Döngüselliğe eğilimli olması ve tasarım için pratik bir yardımı olmaması",
        "Sadece mobil uygulamalarda geçerli olması",
        "Kullanıcı memnuniyetini aşırı vurgulaması"
      ],
      correct: 1,
      explanation: "Anlamsal tanımlar ('kullanışlı = kullanımı kolay = ?') döngüselliğe eğilimlidir ve tasarımcılara somut yol göstermez."
    },
    {
      id: "q602", lesson: 6, topic: "Özellikler Yanılsaması", slideRef: "Ders 6 · Slayt 9–14", difficulty: "Orta",
      question: "SUN Microsystems (1990)'ın 'Grafiksel öğelerin varlığı iyi uygulama tasarımını garantilemez' sözü aşağıdaki hangi kavramı eleştirmektedir?",
      options: [
        "Üretkenlik İkilemi",
        "Özellikler Yanılsaması (Feature Fallacy)",
        "Öğrenilmiş Çaresizlik",
        "Durumsal Eylem"
      ],
      correct: 1,
      explanation: "Özellikler Yanılsaması, pencere/ikon/menü gibi belirli arayüz özelliklerinin varlığını kullanılabilirlik sanmaktır. Kullanılabilirlik bir özellik DEĞİLDİR!"
    },
    {
      id: "q603", lesson: 6, topic: "Yönergeler ve Menü Yapısı", slideRef: "Ders 6 · Slayt 14", difficulty: "Temel",
      question: "Ders 6'da bağlam içinde genellenebilen yönergeler örneklenirken menü yapısıyla ilgili hangi bulgu verilmiştir?",
      options: [
        "Derin menü yapısı yaygın (geniş) menü yapısına göre her zaman daha etkindir",
        "Yaygın (geniş) menü yapısı derin menü yapısına göre daha etkindir",
        "Menü derinliğinin kullanılabilirliğe etkisi yoktur",
        "Sadece tek seviyeli menüler kullanılabilir kabul edilir"
      ],
      correct: 1,
      explanation: "Ders 6 Slayt 14: 'Yaygın menü yapısı derin menü yapısına göre daha etkin' — ancak yine de kullanılabilirlik tek başına bu yönergelere indirgenemez."
    },
    {
      id: "q604", lesson: 6, topic: "Etkililik, Verimlilik, Memnuniyet", slideRef: "Ders 6 · Slayt 20–29", difficulty: "Senaryo",
      question: "Bir web sitesinde ideal olarak 3 adımda tamamlanabilen bir görev, test sırasında bir kullanıcı tarafından 7 adımda tamamlanmıştır (7:3). Bu 'yol analizi' ölçümü ISO 9241-11'in hangi boyutunun göstergesidir?",
      options: [
        "Etkililik",
        "Verimlilik (Etkinlik)",
        "Memnuniyet",
        "Kalıcılık"
      ],
      correct: 1,
      explanation: "Görevi tamamlamak için geçen zaman, adım sayısı ve ideal yoldan sapma sayısı (7:3 adım yol analizi) Verimlilik (Etkinlik) ölçümüne girer."
    },
    {
      id: "q605", lesson: 6, topic: "Memnuniyetin Sınırları", slideRef: "Ders 6 · Slayt 28–29", difficulty: "Orta",
      question: "Kullanılabilirlikte 'Memnuniyet' boyutunun neden tek başına yeterli olmadığı ders sunumunda nasıl açıklanmıştır?",
      options: [
        "Memnuniyet hiçbir zaman anketle ölçülemez",
        "İnsanlar bazen kolay kullanamadıkları şeyleri de sevebilir (meydan okuma vb.) ve sevdikleri şey her zaman ihtiyaç duydukları olmayabilir",
        "Etkililik ve verimlilik yüksekse memnuniyet her zaman %100 çıkar",
        "Memnuniyet sadece ürünün fiyatına bağlıdır"
      ],
      correct: 1,
      explanation: "Aynı oranda etkili ve verimli iki uygulama eşit ölçüde memnun etmeyebilir; kullanıcıların sevdikleri ihtiyaçları olmayabilir ve insanlar bazen zorlayıcı/kolay olmayan şeyleri de severler."
    },
    {
      id: "q606", lesson: 6, topic: "Görev Analizi Metotları", slideRef: "Ders 6 · Slayt 44–46", difficulty: "Temel",
      question: "Aşağıdakilerden hangisi ders sunumunda listelenen 6 Görev Analizi metodundan biri DEĞİLDİR?",
      options: [
        "Sözlü protokol analizi",
        "Hiyerarşik görev analizi (HGA)",
        "Bilişsel modelleme (örn. GOMS)",
        "İstatistiksel regresyon analizi"
      ],
      correct: 3,
      explanation: "Görev analizi metotları: Gözlem, Görüşme, Sözlü protokol analizi, Kendi kendine deneme, Bilişsel modelleme (GOMS) ve Hiyerarşik görev analizi (HGA)."
    },
    {
      id: "q607", lesson: 6, topic: "Değerlendirme Türü", slideRef: "Ders 6 · Slayt 51–53", difficulty: "Temel",
      question: "Kullanılabilirlik değerlendirme çerçevesinde 'Yaklaşım' ve 'Tür' sırasıyla neyi ifade eder?",
      options: [
        "Yaklaşım: Verinin kaynağı (Kullanıcı, Uzman, Model) — Tür: Değerlendirmenin amacı (Süreçsel/Formatif veya Sonuçsal)",
        "Yaklaşım: Maliyet düzeyi — Tür: Kullanıcı sayısı",
        "Yaklaşım: Süreçsel/Sonuçsal — Tür: Kullanıcı/Uzman/Model",
        "Yaklaşım: Yazılım dili — Tür: Donanım platformu"
      ],
      correct: 0,
      explanation: "Yaklaşım, verinin kaynağını (Kullanıcı, Uzman, Model); Tür ise değerlendirmenin amacını (Süreçsel/Formatif veya Sonuçsal/Summatif) belirtir."
    },
    {
      id: "q608", lesson: 6, topic: "Kullanıcı Tabanlı Yaklaşım", slideRef: "Ders 6 · Slayt 56–57", difficulty: "Orta",
      question: "Kullanıcı Tabanlı kullanılabilirlik değerlendirmesinin dezavantajlarından biri aşağıdakilerden hangisidir?",
      options: [
        "En düşük geçerliliğe sahip veri üretmesi",
        "Prototip aşamasında hiç kullanılamaması",
        "Problemleri ortaya çıkarması ancak yeni tasarımın nasıl olması gerektiğini açıkça söylememesi",
        "Özel bir planlama gerektirmemesi"
      ],
      correct: 2,
      explanation: "Kullanıcı tabanlı yaklaşım en geçerli, güvenilir ve ikna edici veriyi verir; prototiplerde çok etkindir. Ancak maliyetlidir, sabır/planlama ister ve problemleri gösterir ama yeni tasarımın nasıl olacağını açıkça söylemez."
    },
    {
      id: "q609", lesson: 6, topic: "Uzman Tabanlı Yaklaşım", slideRef: "Ders 6 · Slayt 60–63", difficulty: "Orta",
      question: "Uzman tabanlı değerlendirme yöntemlerinden 'Sezgisel Değerlendirme (Nielsen, 1993)' ve 'Bilişsel Prova (Polson, 1992)' ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
      options: [
        "Sezgisel değerlendirme mutlaka tek uzmanla ve tek iterasyonda yapılmalıdır",
        "Bilişsel prova, kullanıcının bilişsel etkinliklerinin bir el simülasyonudur ve süreç değerlendirmesi için idealdir",
        "Uzman tabanlı yöntemler kullanıcı testinden daha pahalı ve yavaştır",
        "Uzmanlar değerlendirme sonuçlarında her zaman %100 fikir birliğine varır"
      ],
      correct: 1,
      explanation: "Bilişsel prova (Polson, 1992) el simülasyonudur ve süreç (formatif) değerlendirmesi için idealdir. Sezgisel değerlendirmede 2 iterasyon (ekran ekran + ekranlar arası) ve birden çok uzman önerilir; uzmanların anlaşamaması dezavantajdır."
    },
    {
      id: "q610", lesson: 6, topic: "Model Tabanlı Yaklaşım (GOMS)", slideRef: "Ders 6 · Slayt 64–68", difficulty: "Orta",
      question: "Model Tabanlı değerlendirme (örn. GOMS — Card vd., 1983) hakkında aşağıdakilerden hangisi YANLIŞTIR?",
      options: [
        "Sistem spesifikasyonlarının belirlenmesi aşamasında gerçekleştirilebilir ve değişiklikler için en yüksek imkanı verir",
        "İnsan Bilgisayar Etkileşiminde en sık ve yaygın kullanılan yaklaşımdır",
        "GOMS yalnızca uzman, hatasız ve isteğe bağlı olmayan görevleri öngörür",
        "Model hakkında eğitimli olmadan uygulaması zordur ve bilen değerlendirmeci sayısı azdır"
      ],
      correct: 1,
      explanation: "Ders 6 Slayt 64'te açıkça belirtildiği gibi Model Tabanlı değerlendirmeler 'İnsan Bilgisayar Etkileşiminde (İBE) AZ kullanılır.' Diğer üç seçenek doğrudur."
    }
  ],

  matchPairs: [
    { id: "m1", left: "Vannevar Bush (1945)", right: "'As We May Think' ve MEMEX vizyonu" },
    { id: "m2", left: "J.C.R. Licklider (1960)", right: "Man-Computer Symbiosis (meslektaş gibi etkileşim)" },
    { id: "m3", left: "Douglas Engelbart (1965)", right: "Bilgisayar faresi ve etkileşim" },
    { id: "m4", left: "Thomas Landauer (1995)", right: "Üretkenlik ikilemi · 40 sorunun 20'si → %50 artış" },
    { id: "m5", left: "Ben Shneiderman", right: "8 Altın Kural · 'Bilgisayarlar yaşam kalitesini arttırır'" },
    { id: "m6", left: "Donald Norman", right: "7 Aşamalı Döngü, İki Körfez, Kayma vs. Yanılgı" },
    { id: "m7", left: "Lucy Suchman (1987)", right: "Plans and Situated Actions (Durumsal eylem)" },
    { id: "m8", left: "Bailey (1993)", right: "81 tasarımcının %95'i en hızlı arayüzü seçemedi" },
    { id: "m9", left: "Card, Moran & Newell (1983)", right: "Algı-Biliş-Motor işlemciler ve GOMS modeli" },
    { id: "m10", left: "Wickens (1992)", right: "Algısal ön işlemci (<1 sn) ve Dikkat kaynakları modeli" },
    { id: "m11", left: "Shiffrin & Schneider (1977)", right: "Kontrollü ve Otomatik bilişsel işlemler" },
    { id: "m12", left: "Eberts (1994)", right: "Zihinsel Modeller (Yapısal vs. Fonksiyonel)" },
    { id: "m13", left: "Dillon & Watson (1996)", right: "Bireysel fark: Tipik iş 2:1, Bilgisayar işi 20:1" },
    { id: "m14", left: "Fogg & Nass (1997)", right: "Övücü ve samimi geri bildirim nötre göre olumlu" },
    { id: "m15", left: "Akgün, Çağıltay & Zeyrek (2010)", right: "Özür dileyen hata mesajlarının olumlu etkisi" },
    { id: "m16", left: "Jakob Nielsen (1993)", right: "3 boyutlu kullanıcı tipleri & Sezgisel değerlendirme" },
    { id: "m17", left: "Polson (1992)", right: "Bilişsel Prova (Cognitive Walkthrough — el simülasyonu)" },
    { id: "m18", left: "SUN Microsystems (1990)", right: "Grafiksel öğeler iyi tasarımı garantilemez (Özellikler Yanılsaması)" }
  ],

  cheatNumbers: [
    { value: "7 ± 2", label: "Kısa Süreli Hafıza Kapasitesi", detail: "Grup / kutu sayısı (Ders 4)" },
    { value: "10–30 sn", label: "KSH Silinme Süresi", detail: "Tekrar edilmezse unutulur (Ders 4)" },
    { value: "< 1 sn", label: "Algısal Ön İşlemci", detail: "Veri hızla yok olur, bilinçsizdir (Ders 4)" },
    { value: "4–5 harf", label: "Okuma Odaklanması", detail: "Kelimenin sadece başı okunur (Ders 4)" },
    { value: "2:1 → 20:1", label: "Bireysel Performans Farkı", detail: "Tipik iş vs. Bilgisayar işi — Dillon & Watson (Ders 5)" },
    { value: "%95", label: "Bailey (1993) Tasarımcı Hatası", detail: "81 tasarımcı en hızlı arayüzü seçemedi (Ders 2)" },
    { value: "40 → 20 = %50", label: "Landauer Kuralı", detail: "40 sorunun 20'sini çözmek kullanılabilirliği %50 arttırır (Ders 2)" },
    { value: "%25", label: "İş Verimliliği Artışı", detail: "Kullanılabilirlik ile — Landauer (Ders 2)" },
    { value: "2–4,5 M$", label: "ATM Kart Unutma Maliyeti", detail: "Önce kart sonra para verilmesi çözümü (Ders 1)" },
    { value: "290", label: "USS Vincennes Can Kaybı", detail: "3 Temmuz 1988 — Çift ekran yorumlama hatası (Ders 1)" },
    { value: "ISO 9241-11", label: "Kullanılabilirlik Standardı", detail: "Etkililik, Verimlilik, Memnuniyet (Ders 1 & 6)" },
    { value: "7:3 adım", label: "Yol Analizi Verimliliği", detail: "Mevcut vs. ideal adım karşılaştırması (Ders 6)" }
  ]
};
