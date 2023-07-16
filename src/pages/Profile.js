import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    document.title = "Profile";
  });
  return (
    <section className="section">
      <h1 className="section-title">hello namaku sayyid salim</h1>
      <p className="section-description">
        saya adalah seorang pelajar deveploper yang belajar secara otodidact
      </p>
    </section>
  );
}
