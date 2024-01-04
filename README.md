![Banner Resim](/src/assets/react.png)

<span style="color: #2a57b8">Fimple</span> ve <span style="color: #2a57b8">Patika.dev</span> iş birliği ile düzenlenen `Fimple React Bootcamp`'i kapsamında hazırlamış olduğum projeyi içermektedir.

Projenin detayları aşağıda verilmiştir.

# **Başvuru/Ticket Yönetim Sistemi** - [AppTrack](https://application-tracking-system-pi.vercel.app/basvuru-olustur)

## **Technologies:**

- React Hooks (useState, useEffect)
- Router (react-router v6.4)
- Context API
- Form Management Library (react-hook-form)
- Validation Library (yup)
- Higher-Order Component (withTheme)
- TailwindCSS
- Deployment: Vercel
- Open source
- Eslint
- Mobil uyumlu bir tasarim
- Kullanılabilir UX

## **Case Details:**

Uygulamamız herkese açık bir başvuru formunun son kullanıcı tarafından doldurulması ile başlıyor. Formu dolduran kullanıcıya başvurusunu takip edebilecegi bir kod veriliyor. Kullanıcı başvuru durumu sayfasından bu kod ile başvurusunun çözülüp çözülmediğini kontrol edebiliyor.

Kullanıcı adı ve şifre ile girilebilen bir ekrandan da yetkili kullanıcılar gelen başvuruları görüntüleyebiliyor cevaplanmamış başvurulara cevap yazıp durumunu onaylandı / onay bekliyor / reddedildi vb gibi güncelleyebiliyor.

## **Routes/Paths:**

1. **/basvuru-olustur (default)**
   - Public endpoint.
   - Başvuru formunu herhangi bir kullanıcının doldurmasına imkan verir.
   - Başvuru formunda [Ad, Soyad, Yaş, TC, Başvuru Nedeni, Adres Bilgisi, Fotograflar/Ekler, Gönder] butonu yer alır.
2. **/basvuru-basarili (Basvuru formu doldurulduktan sonra gelen sayfa)**
   - Ekranda bir teşekkür mesajı yer alır ve kullanıcıya başvuru detayları ile birlikte başvuru kodu verilir.
3. **/basvuru-sorgula**
   - Ekranda başvuru kodu girilebilen bir input ve sorgula butonu vardır.
4. **/basvuru/{basvuruNo}**
   - Ekranda başvuru varsa bilgileri, son durumu ve verilen cevap(lar) yer alır.
   - Başvuru numarası hatalıysa 404(bulunamadı) mesajı çıkar.
5. **/admin**
   - Ekranda kullanıcı giriş formu vardır. (e: kodluyoruz@kodluyoruz.com, p:bootcamp109 bilgileri ile giriş yapılabilir)
6. **/admin/basvuru-listesi**
   - Başarılı giriş sonrası bekleyen (çözülmemiş/cevaplanmamış) başvuruların listesi yer alır ve basit bilgiler sunar. (Başvuru yapan, tarih)
   - Başvuru listesinde her elemenda başvuruyu görüntüle butonu vardır.
7. **/admin/basvuru/{basvuruNo}**

- Başvurunun durumu güncellenebilir ve başvuruya cevap yazılabilir.
- Burada yazılan cevap son kullanıcı tarafından basvuru/{basvuruNo} kısmından görüntülenebilmelidir.

## **Requirements**

- Tüm formlarda gerekli validasyonlar
- Back-end olarak firebase
- Admin paneline e: kodluyoruz@kodluyoruz.com, p:bootcamp109 bilgileri ile giriş yapabilir.
- Admin panelinde bir menü ekli (başvuru listesi, çıkıs gibi işlemleri kapsıyor)

## **Usage**

1. Clone the repository to your local machine.
2. Install the dependencies using the npm install command.

   ```bash
   npm install
   ```

3. Start the development server using the npm run dev command.

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open your browser and navigate to http://localhost:3000.

## Screenshots

![screenshot-1](/src/assets/screenshot-1.png)
![screenshot-2](/src/assets/screenshot-2.png)
![screenshot-3](/src/assets/screenshot-3.png)
![screenshot-4](/src/assets/screenshot-4.png)
