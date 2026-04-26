---
layout: page
title: "Suggestions"
permalink: /suggestions/
---

Use this form to send suggestions directly from the website.

> This form submits through FormSubmit (server-side relay) to deliver messages to `trace@degenerate.earth` without opening your mail application.

<form action="https://formsubmit.co/trace@degenerate.earth" method="POST" enctype="multipart/form-data" style="max-width: 720px; display: grid; gap: 0.75rem;">
  <input type="hidden" name="_subject" value="Suggestion for Codex" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://codex.degenerate.earth/suggestions/?sent=1" />

  <label for="name">Name</label>
  <input id="name" name="name" type="text" autocomplete="name" required />

  <label for="email">Email</label>
  <input id="email" name="email" type="email" autocomplete="email" required />

  <label for="suggestion-subject">Subject</label>
  <input id="suggestion-subject" name="subject" type="text" value="Suggestion for Codex" required />

  <label for="message">Suggestion</label>
  <textarea id="message" name="message" rows="8" required></textarea>

  <label for="attachment">Attachment(s)</label>
  <input id="attachment" name="attachment" type="file" multiple />
  <small>Optional. Attachments are submitted with the form.</small>

  <button type="submit">Send Suggestion</button>
</form>

<noscript>
  <p>JavaScript is not required for this form to work.</p>
</noscript>
