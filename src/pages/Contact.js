import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  });
  return (
    <section className="section">
      <h1 className="section-title">contact</h1>
      <p className="sectioin-description">kamu bisa menghubungiku disini</p>

      <ul>
        <li>Wa : 087789237501</li>
        <li>Email: mohsalim951@gmail.com</li>
      </ul>

      <p className="section-description">atau kamu bisa melihatku di sosmed</p>
      <ul>
        <li>
          <a target="_blank" href="https://instagram.com/gh_olasimero">
            Instagram
          </a>
        </li>
        <li>
          <a target="_blank" href="https://facebook.com/M Healer">
            Facebook
          </a>
        </li>
      </ul>
    </section>
  );
}
