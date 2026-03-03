# CSS Kararları

## 1. Breakpoint Seçimi
- Neden 640px ve 1024px seçtim? Modern cihaz boyutlarını (telefon, tablet, bilgisayar) kapsayan yaygın ve standart ölçülerdir. 640px ile tablet ve küçük ekranları, 1024px ile yatay tablet ve masaüstü bilgisayarları hedef almış oldum.
- İçeriğim bu noktalarda nasıl değişiyor? 640px altında (mobil) form butonları ve menüler tam genişlikte ve dikey olarak hizalanırken, 640px ve sonrasında yatay menülere geçilir. 1024px üzerinde ise proje kartları 3'lü kolon (grid) yapısına sahip olur.

## 2. Layout Tercihleri
- Header için neden Flexbox seçtim? Navbar içerisindeki logoyu sola, menü linklerini sağa hizalamak (space-between) ve mobilde menüyü alta dikey dizmek (flex-direction: column) için en uygun yaklaşım tek boyutlu olan Flexbox'tır.
- Proje kartları için neden Grid seçtim? Proje kartları hem yatay hem dikey hizalama ve satır-sütun yerleşimi gerektirir (iki boyut). CSS Grid kartların eşit genişlikte hizalanmasını kolaylaştırır.
- `auto-fit` mi `auto-fill` mi kullandım, neden? `auto-fit` kullandım. `auto-fit`, boş kalan alanlarda mevcut kartları büyüterek ekranı tam kaplamasını sağlar, böylelikle responsive tasarımımızda ekran küçülse bile kartlar estetik görünümünü yitirmez.

## 3. Design Tokens
- Hangi renk paletini seçtim ve neden? Koyu mavi (`#1E3A8A`) ve canlı mavi (`#2563EB`) tonlarını kullanarak profesyonel, temiz ve güven veren modern bir kurumsal tema inşa ettim.
- Spacing skalasını nasıl belirledim? 4px tabanlı modüler bir sistem (0.25rem, 0.5rem, 1rem vb.) kullandım. Böylece uygulamanın farklı bölümlerinde tutarlı boşluklar oluşturuldu.
- Fluid typography için clamp değerlerini nasıl ayarladım? `clamp()` içinde minimum değeri `rem`, tercih edilen (ortalama) değeri ekrana bağlı ölçeklensin diye `rem + vw`, maksimum değeri yine `rem` formatında tanımladım. Mobil cihazda çok küçülmeden, masaüstünde çok büyümeden akıcı biçimde yazıların yeniden ölçeklenmesi sağlandı.

## 4. Responsive Stratejiler
- Mobile-first yaklaşımını nasıl uyguladım? Varsayılan tüm stil tanımlamalarımı (0-639px arası) media query olmadan oluşturdum. Ardından `@media (min-width: 640px)` ve `@media (min-width: 1024px)` kullanarak tablet ve masaüstü stillerini mobil stillerinin üzerine inşa ettim.
- Hangi elemanlar breakpoint'lerde değişiyor? `header` ve `nav` mobilde dikey dizilirken, 640px'te yatay hizalanıyor. `.about-content` mobilde alt altayken tablette yan yana diziliyor. Proje listesi (`.project-grid`) 1024px sonrası 3 sütunlu hale geliyor.
- Görsel boyutları nasıl yönettim? Resim etiketlerine `max-width: 100%` ve `height: auto` vererek içinde bulundukları alana taşmadan uyum sağlamalarını gerçekleştirdim. Aynı zamanda estetiği bozmamak için kart içi görsellerinde `object-fit: cover` kullandım.
