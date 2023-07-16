import { useEffect } from "react";

export default function Home() {
  useEffect(()=> {
    document.title = "Home"
  })
  return (
    <section className="section">
      <h1 className="section-title">selamat datang di website ku</h1>
      <p className="section-description">
        selamat datang bro!, kamu bisa saja mendapatkan info pribadi tentangku
        di bawah ini
      </p>
    </section>
  );
}
