// ============================================================
//  PORTAL DO PROPRIETÁRIO · Holiday Stays
//  Edite este arquivo para adicionar ou alterar proprietários
// ============================================================

const PROPRIETARIOS = {

  // ── BRUNA ──────────────────────────────────────────────────
  "bruna": {
    nome: "Bruna",
    email: "brunanegociotrabalho@gmail.com",
    senha: "Booking@BrunaFS1",
    imoveis: [
      {
        codigo: "KS01J",
        nome: "Fortaleza Sul 305 A",
        endereco: "Rua Hil Moraes 12, Edson Queiroz · Fortaleza, CE",
        holidaystays: "https://www.holidaystays.net/pt/apartment/KS01J",
        airbnb: "https://www.airbnb.com.br/rooms/1700770596449087250?guests=1&adults=1&s=67&unique_share_id=b751ad34-7baa-4c48-b730-9dd20a1587e4",
        booking: "",
        decolar: "",
        vistoria: "https://drive.google.com/drive/folders/1lBGlkNYT5PQAcgNxJkRuCNVrZd11H8pP?usp=sharing",
        investidor: "https://v2.bookalyze.it/owner/aa1f72c9dc4a416da64bb1543eb03ecc"
      },
      {
        codigo: "KU01J",
        nome: "Fortaleza Sul 505 C/01",
        endereco: "Rua Hil Moraes 12, Edson Queiroz · Fortaleza, CE",
        holidaystays: "https://www.holidaystays.net/pt/apartment/KU01J",
        airbnb: "https://www.airbnb.com.br/rooms/1701682837543802890?guests=1&adults=1&s=67&unique_share_id=780650fc-b095-4753-b0a5-4e1d0ba9672f",
        booking: "",
        decolar: "",
        vistoria: "https://drive.google.com/drive/folders/1hpbrL3wmweFW4uCbmQw61zi0cCOHa1wx?usp=sharing",
        investidor: ""
      },
      {
        codigo: "KU02J",
        nome: "Fortaleza Sul 505 C/02",
        endereco: "Rua Hil Moraes 12, Edson Queiroz · Fortaleza, CE",
        holidaystays: "https://www.holidaystays.net/pt/apartment/KU02J",
        airbnb: "https://www.airbnb.com.br/rooms/1702144158077775309?guests=1&adults=1&s=67&unique_share_id=4ead5d01-d327-40dd-bec9-6b65e29ddc77",
        booking: "",
        decolar: "",
        vistoria: "https://drive.google.com/drive/folders/1AIm7538gQHO_ixBrFYB36hCeMUtfuExf?usp=sharing",
        investidor: ""
      }
    ]
  },

  // ── COMO ADICIONAR NOVO PROPRIETÁRIO ───────────────────────
  // Copie o bloco acima, cole abaixo e preencha os dados.
  // A URL será: portal.holidaystays.online/proprietario/[chave]
  // Exemplo: "carlos" → portal.holidaystays.online/proprietario/carlos
  //
  // "carlos": {
  //   nome: "Carlos",
  //   email: "carlos@email.com",
  //   senha: "Booking@Carlos1",
  //   imoveis: [
  //     {
  //       codigo: "AB01J",
  //       nome: "Nome do Imóvel",
  //       endereco: "Endereço completo",
  //       holidaystays: "https://...",
  //       airbnb: "https://...",
  //       booking: "",
  //       decolar: "",
  //       vistoria: "https://...",
  //       investidor: ""
  //     }
  //   ]
  // },

};
