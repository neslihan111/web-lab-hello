function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header className="site-header">
        <h1>Neslihan Lokman - Kişisel Portföy</h1>

        <nav aria-label="Ana navigasyon">
          <ul className="nav-list">
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" className="site-main">
        <section id="hakkimda" aria-labelledby="hakkimda-baslik">
          <h2 id="hakkimda-baslik">Hakkımda</h2>
          <p>
            Yazılım Mühendisliği öğrencisiyim. Semantik HTML5 ve erişilebilirlik (a11y)
            ilkelerine uygun arayüzler geliştirmeyi hedefliyorum.
          </p>

          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>HTML5 / CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git / GitHub</li>
          </ul>
        </section>

        <section id="projeler" aria-labelledby="projeler-baslik">
          <h2 id="projeler-baslik">Projelerim</h2>

          <article className="project-card">
            <h3>CampusMart Mini Katalog</h3>
            <p>Ürün listeleme ve detay ekranı içeren mini katalog uygulaması.</p>
            <p><strong>Teknolojiler:</strong> Flutter, Dart</p>
          </article>

          <article className="project-card">
            <h3>Hayat Hattı</h3>
            <p>Afet anında iletişimi kolaylaştırmayı hedefleyen mobil proje fikri.</p>
            <p><strong>Teknolojiler:</strong> Flutter, FastAPI</p>
          </article>
        </section>

        <section id="iletisim" aria-labelledby="iletisim-baslik">
          <h2 id="iletisim-baslik">İletişim</h2>

          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

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
                <small id="name-error" className="error-msg" role="alert"></small>
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
                <small id="email-error" className="error-msg" role="alert"></small>
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
                <small id="subject-error" className="error-msg" role="alert"></small>
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
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Neslihan Lokman. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;