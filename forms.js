(function () {
  const recipient = "info@klasosterman.se";

  function buildMessage(form) {
    const data = new FormData(form);
    const lines = [];

    for (const [name, value] of data.entries()) {
      if (name === "consent" || !String(value).trim()) continue;
      lines.push(`${name}: ${String(value).trim()}`);
    }

    lines.push("", `Skickat från: ${window.location.href}`);
    return lines.join("\n");
  }

  document.querySelectorAll(".mailto-form").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const subject = form.dataset.subject || "Meddelande via klasosterman.se";
      const status = form.querySelector(".form-status");
      const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage(form))}`;

      if (status) {
        status.textContent = "Ditt mejlprogram öppnas med uppgifterna ifyllda. Kontrollera och skicka mejlet därifrån.";
      }

      window.location.href = mailto;
    });
  });
})();
