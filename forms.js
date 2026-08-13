(function () {
  document.querySelectorAll("[data-booking-format]").forEach(link => {
    link.addEventListener("click", () => {
      const formatSelect = document.getElementById("booking-format");
      if (formatSelect) formatSelect.value = link.dataset.bookingFormat;
    });
  });

  document.querySelectorAll(".direct-form").forEach(form => {
    form.addEventListener("submit", async event => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const status = form.querySelector(".form-status");
      const button = form.querySelector('button[type="submit"]');
      const originalButtonText = button ? button.textContent : "";
      const data = new FormData(form);

      data.append("_subject", form.dataset.subject || "Meddelande via klasosterman.se");
      data.append("Formulär", form.dataset.formType || "Kontakt");
      data.append("Sida", window.location.href);

      if (status) {
        status.textContent = "Skickar …";
      }

      if (button) {
        button.disabled = true;
        button.textContent = "Skickar …";
      }

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" }
        });

        if (!response.ok) throw new Error("Form submission failed");

        form.reset();
        if (status) {
          status.textContent = form.dataset.success || "Tack! Ditt meddelande är skickat.";
        }
      } catch (error) {
        if (status) {
          status.textContent = "Det gick inte att skicka just nu. Försök igen eller mejla info@klasosterman.se.";
        }
      } finally {
        if (button) {
          button.disabled = false;
          button.textContent = originalButtonText;
        }
      }
    });
  });
})();
