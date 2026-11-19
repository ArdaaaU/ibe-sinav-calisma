# İnsan Bilgisayar Etkileşimi (İBE) — Sınav Çalışma Stüdyosu 🎓

Bu repo, **İnsan Bilgisayar Etkileşimi (İBE)** dersinin 1. ile 6. hafta sunumlarının (toplam 320 slayt, Prof. Dr. Kürşat Çağıltay - ODTÜ) sentezinden oluşturulmuş kapsamlı sınav çalışma platformudur.

🌐 **Canlı Demo (GitHub Pages):** [https://ardaaau.github.io/ibe-sinav-calisma/](https://ardaaau.github.io/ibe-sinav-calisma/)

---

## 🚀 Özellikler

1. **Test & Deneme Merkezi (60 Soru):**
   - **Çalışma Modu:** Her soru sonrasında anında doğru cevap, detaylı gerekçe ve kaynak slayt referansı (`Ders 3 · Slayt 10-11` gibi).
   - **Deneme Sınavı:** 6 dersten dengeli 25 soru, 25 dakikalık sayaç ve sınav sonu detaylı ders başarı karnesi.
   - **Filtreler:** Çözülmemişler, Yanlışlar ve Kaydedilen sorular havuzları.
   - **Klavye Kısayolları:** `A-D` veya `1-4` (şık seç), `Enter` / `→` (sonraki soru), `K` (kaydet).

2. **Ders Notları & Özetler (Ders 1–6):**
   - 320 slayttan süzülmüş kavramlar, karşılaştırma tabloları (Suchman vs. Norman & Shneiderman, Kayma vs. Yanılgı, Kontrollü vs. Otomatik vb.).
   - Anlık arama (örn. `Suchman`, `7±2`, `GOMS`, `ISO`).
   - Markdown formatında tam ders notu: [`IBE_Sinav_Notlari.md`](./IBE_Sinav_Notlari.md).

3. **Bilgi Kartları (42 Flashcard):**
   - Aktif hatırlama desteği.
   - `Boşluk` çevirir, `1` tekrar et, `2` biliyorum.

4. **Hızlı Tekrar & Eşleştirme Oyunu:**
   - 18 araştırmacı & teori eşleştirme oyunu.
   - Sınavda çıkabilecek 12 kritik sayı ve formül tablosu (`7±2`, `20:1`, `%95`, `40→20=%50`, `290 can kaybı`, `ISO 9241-11` vb.).

5. **Arayüz & Kullanıcı Deneyimi:**
   - Swiss Academic tipografi ve minimalist editoryal tasarım.
   - Gündüz & Gece modu (Dark mode).
   - Çevrimdışı çalışabilme ve `localStorage` ile ilerleme kaydı.

---

## 📂 Dosya Yapısı

```
ibe-sinav-calisma/
├── index.html            # Ana web arayüzü ve SPA yapısı
├── styles.css            # Swiss academic editoryal CSS & Dark mode
├── app.js                # Test motoru, durum yönetimi ve kısayollar
├── data.js               # 60 soru, 42 flashcard, 6 ders özeti, eşleştirmeler
├── IBE_Sinav_Notlari.md  # Kapsamlı Markdown sınav çalışma notları
└── README.md
```

## 💻 Yerel Olarak Çalıştırma

Herhangi bir kurulum veya bağımlılık gerektirmez. `index.html` dosyasını tarayıcınızda çift tıklayarak doğrudan açabilirsiniz veya Python ile yerel sunucu başlatabilirsiniz:

```bash
python -m http.server 8000
```
Ardından tarayıcınızdan `http://localhost:8000` adresine gidebilirsiniz.

---

**Made By Arda Utancak**

