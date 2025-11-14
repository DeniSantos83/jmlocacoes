// ============================
// CONFIGURAÇÕES GERAIS
// ============================

// Atualiza automaticamente o ano no rodapé
document.addEventListener("DOMContentLoaded", function () {
  var yearSpanList = document.querySelectorAll("#currentYear");
  var currentYear = new Date().getFullYear();
  yearSpanList.forEach(function (span) {
    span.textContent = currentYear;
  });

  // Inicializa o carrossel do HERO com intervalo de 1.5 segundos
  // (só se o elemento existir na página)
  var heroCarouselEl = document.querySelector("#heroCarousel");
  if (heroCarouselEl && typeof bootstrap !== "undefined") {
    new bootstrap.Carousel(heroCarouselEl, {
      interval: 1500, // 1.5 segundos
      ride: "carousel"
    });
  }

  // Configura o botão flutuante de WhatsApp para abrir uma conversa padrão
  var whatsappFloat = document.getElementById("whatsappFloat");
  if (whatsappFloat) {
    whatsappFloat.addEventListener("click", function (e) {
      e.preventDefault();
      // Substituir pelo número oficial da JM Locações
      var phone = "5579999999999"; // DDD + número (apenas dígitos)
      var text = encodeURIComponent(
        "Olá, gostaria de saber mais sobre os planos de aluguel de motos da JM Locações."
      );
      var url = "https://wa.me/" + phone + "?text=" + text;
      window.open(url, "_blank");
    });
  }

  // Inicializa formulários que enviam para WhatsApp
  initWhatsAppForms();
});

// ============================
// FUNÇÃO PARA FORMULÁRIOS -> WHATSAPP
// ============================

/**
 * Monta a URL de WhatsApp com base em um objeto de dados
 * @param {string} phone Número de telefone no formato 55DDDNÚMERO (apenas dígitos)
 * @param {string} message Mensagem já tratada
 */
function buildWhatsAppUrl(phone, message) {
  return "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
}

/**
 * Inicializa todos os formulários que devem enviar mensagem ao WhatsApp.
 * Aqui centralizamos a lógica para ficar mais fácil de alterar o telefone depois.
 */
function initWhatsAppForms() {
  // Telefone principal da JM Locações (substituir pelo oficial)
  var companyPhone = "5579999999999";

  // FORMULÁRIO DE CONTATO (index.html)
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var nome = document.getElementById("nomeContato").value.trim();
      var whatsapp = document.getElementById("whatsappContato").value.trim();
      var plano = document.getElementById("planoContato").value;
      var mensagem = document.getElementById("mensagemContato").value.trim();

      // Monta o texto da mensagem
      var texto = "Olá, meu nome é " + nome + ".%0A%0A";
      texto += "Quero falar sobre aluguel de motos com a JM Locações.%0A";
      texto += "WhatsApp de contato: " + whatsapp + "%0A";
      texto += "Plano de interesse: " + plano + "%0A%0A";
      texto += "Mensagem:%0A" + mensagem;

      var url = "https://wa.me/" + companyPhone + "?text=" + texto;
      window.open(url, "_blank");
    });
  }

  // FORMULÁRIO DE PRÉ-CADASTRO (cadastro.html)
  var preForm = document.getElementById("preCadastroForm");
  if (preForm) {
    preForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var nome = document.getElementById("nomePreCadastro").value.trim();
      var apelido = document.getElementById("apelidoPreCadastro").value.trim();
      var whatsapp = document.getElementById("whatsappPreCadastro").value.trim();
      var email = document.getElementById("emailPreCadastro").value.trim();
      var cidade = document.getElementById("cidadePreCadastro").value.trim();
      var uso = document.getElementById("usoPreCadastro").value;
      var moto = document.getElementById("motoInteresse").value;
      var plano = document.getElementById("planoInteresse").value;
      var mensagem = document.getElementById("mensagemPreCadastro").value.trim();

      // Texto bem estruturado para o WhatsApp
      var texto = "PRÉ-CADASTRO - JM Locações%0A%0A";
      texto += "Nome completo: " + nome + "%0A";
      texto += "Como prefere ser chamado: " + apelido + "%0A";
      texto += "WhatsApp: " + whatsapp + "%0A";
      texto += "E-mail: " + (email || "não informado") + "%0A";
      texto += "Cidade/Bairro: " + cidade + "%0A";
      texto += "Uso principal da moto: " + uso + "%0A";
      texto += "Moto de interesse: " + moto + "%0A";
      texto += "Plano de interesse: " + plano + "%0A%0A";
      texto += "Mensagem adicional:%0A" + (mensagem || "Sem observações.");

      var url = "https://wa.me/" + companyPhone + "?text=" + texto;
      window.open(url, "_blank");
    });
  }
}