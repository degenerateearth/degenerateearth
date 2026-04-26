---
layout: page
title: "Suggestions"
permalink: /suggestions/
---

# Suggestions

Use this form to draft an email to **trace@degenerate.earth** from your own mail app.

> Note: GitHub Pages is a static host, so the site cannot send email or upload files directly on your behalf. This form opens your local email client with the message pre-filled; attach files in your email app before sending.

<form id="suggestion-form" style="max-width: 720px; display: grid; gap: 0.75rem;">
  <label for="sender-name">Name</label>
  <input id="sender-name" name="sender-name" type="text" autocomplete="name" required />

  <label for="sender-email">Email</label>
  <input id="sender-email" name="sender-email" type="email" autocomplete="email" required />

  <label for="subject">Subject</label>
  <input id="subject" name="subject" type="text" value="Suggestion for Codex" required />

  <label for="message">Suggestion</label>
  <textarea id="message" name="message" rows="8" required></textarea>

  <label for="attachments">Attachment(s)</label>
  <input id="attachments" name="attachments" type="file" multiple />
  <small id="attachment-note">Selected files are listed for reference only; please attach them manually in your email app.</small>

  <button type="submit">Open Email Draft</button>
</form>

<p id="form-status" aria-live="polite"></p>

<script>
  (function () {
    const form = document.getElementById('suggestion-form');
    const attachments = document.getElementById('attachments');
    const status = document.getElementById('form-status');

    attachments.addEventListener('change', function () {
      if (!attachments.files || attachments.files.length === 0) {
        status.textContent = '';
        return;
      }

      const names = Array.from(attachments.files).map(function (file) {
        return file.name;
      });

      status.textContent = 'Remember to attach these file(s) in your email app: ' + names.join(', ');
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('sender-name').value.trim();
      const email = document.getElementById('sender-email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      const bodyLines = [
        'Name: ' + name,
        'Email: ' + email,
        '',
        'Suggestion:',
        message,
        '',
        'Attachments selected on site (attach manually before sending):'
      ];

      if (attachments.files && attachments.files.length > 0) {
        Array.from(attachments.files).forEach(function (file) {
          bodyLines.push('- ' + file.name);
        });
      } else {
        bodyLines.push('- None');
      }

      const mailto = 'mailto:trace@degenerate.earth'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(bodyLines.join('\n'));

      window.location.href = mailto;
    });
  }());
</script>
