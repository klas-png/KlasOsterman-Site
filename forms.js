(function () {
  document.querySelectorAll("[data-booking-format]").forEach(link => {
    link.addEventListener("click", () => {
      const formatSelect = document.getElementById("booking-format");
      if (formatSelect) formatSelect.value = link.dataset.bookingFormat;
    });
  });

  document.querySelectorAll(".direct-form").forEach(form => {
    const status = form.querySelector(".form-status");

    const setStatus = (message, state) => {
      if (!status) return;

      status.textContent = message;
      status.classList.remove("form-status--loading", "form-status--success", "form-status--error");
      if (state) status.classList.add(`form-status--${state}`);
      status.setAttribute("role", state === "error" ? "alert" : "status");
    };

    form.addEventListener("submit", async event => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const button = form.querySelector('button[type="submit"]');
      const originalButtonText = button ? button.textContent : "";
      const data = new FormData(form);

      data.append("_subject", form.dataset.subject || "Meddelande via klasosterman.se");
      data.append("Formulär", form.dataset.formType || "Kontakt");
      data.append("Sida", window.location.href);

      setStatus("Skickar …", "loading");
      form.setAttribute("aria-busy", "true");

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
        setStatus(form.dataset.success || "Tack! Ditt meddelande är skickat.", "success");
      } catch (error) {
        setStatus("Det gick inte att skicka just nu. Försök igen eller mejla info@klasosterman.se.", "error");
      } finally {
        form.removeAttribute("aria-busy");
        if (button) {
          button.disabled = false;
          button.textContent = originalButtonText;
        }
      }
    });
  });
})();
