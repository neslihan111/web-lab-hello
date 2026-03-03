function App() {
  return (
    <>
      <a href="#main-content" className="skip-link" style={{position: 'absolute', top: '-100px'}}>
        Ana içeriğe atla
      </a>

      <header>
        <div className="site-title">Neslihan Lokman</div>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda" aria-labelledby="hakkimda-baslik">
          <h2 id="hakkimda-baslik">Hakkımda</h2>
          <div className="about-content">
            <figure>
              <img src="https://picsum.photos/200/200" alt="Neslihan Lokman Profil Baska bir foto" />
            </figure>
            <div>
              <p>
                Yazılım Mühendisliği öğrencisiyim. Semantik HTML5 ve erişilebilirlik (a11y)
                ilkelerine uygun arayüzler geliştirmeyi hedefliyorum.
              </p>

              <h3 style={{ margin: "1rem 0 0.5rem" }}>Kullandığım Teknolojiler</h3>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" aria-labelledby="projeler-baslik">
          <h2 id="projeler-baslik">Projelerim</h2>

          <div className="project-grid">
            <article className="project-card">
              <img src="https://picsum.photos/400/200?random=1" alt="E-Ticaret sitesi anasayfa ekran goruntusu" />
              <h3>CampusMart Mini Katalog</h3>
              <p>Ürün listeleme ve detay ekranı içeren mini katalog uygulaması.</p>
              <ul className="skill-tags">
                <li>Flutter</li>
                <li>Dart</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://picsum.photos/400/200?random=2" alt="Blog uygulamasi yazi listesi gorunumu" />
              <h3>Hayat Hattı</h3>
              <p>Afet anında iletişimi kolaylaştırmayı hedefleyen mobil proje fikri.</p>
              <ul className="skill-tags">
                <li>Flutter</li>
                <li>FastAPI</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://picsum.photos/400/200?random=3" alt="Hava durumu uygulamasi arayuzu" />
              <h3>Hava Durumu</h3>
              <p>OpenWeather API ile anlik hava durumu bilgisi.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim" aria-labelledby="iletisim-baslik">
          <h2 id="iletisim-baslik">İletişim</h2>

          <form action="#" method="POST" noValidate>
            <fieldset style={{ border: "none", padding: 0 }}>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert" style={{color: "var(--color-error)"}}></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert" style={{color: "var(--color-error)"}}></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                  defaultValue=""
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert" style={{color: "var(--color-error)"}}></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert" style={{color: "var(--color-error)"}}></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Neslihan Lokman. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;