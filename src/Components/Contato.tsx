// src/components/Contato.tsx
import React from "react";

export const Contato: React.FC = () => (
  <section id="contato" className="contato-section section">
    <h2>Contato</h2>
    <p className="subtitulo-contato">Fale conosco ou venha nos visitar</p>

    <div className="contato-container-simples">
      <div className="contato-item">
        <i className="fas fa-map-marker-alt"></i>
        <div>
          <strong>Endereço:</strong><br />
          Rua Joaquim Frota, 1200 — Fortaleza, CE
        </div>
      </div>

      <div className="contato-item">
        <i className="fab fa-whatsapp"></i>
        <div>
          <strong>WhatsApp:</strong><br />
          <a href="https://wa.me/559299179922" target="_blank" rel="noreferrer">(92) 99179-922</a>
        </div>
      </div>

      <div className="contato-item">
        <i className="fab fa-instagram"></i>
        <div>
          <strong>Instagram:</strong><br />
          <a href="https://www.instagram.com/letcordeironails/" target="_blank" rel="noreferrer">@letcordeironails</a>
        </div>
      </div>

      <div className="contato-item">
        <i className="fab fa-tiktok"></i>
        <div>
          <strong>TikTok:</strong><br />
          <a href="https://www.tiktok.com/@letcordeironails" target="_blank" rel="noreferrer">@letcordeironails</a>
        </div>
      </div>
    </div>
  </section>
);
