// Site settings. Edit this file, nothing else needs to change.
window.SITE = {
  // The day of the event (Israel time). Drives the countdown.
  EVENT_DATE: '2026-10-28',

  // Where RSVPs are sent. Paste the Google Apps Script web-app URL here
  // (setup steps are in README.md). While this is empty the form only works
  // when you open the site locally, so nobody's answer is silently lost.
  RSVP_ENDPOINT: '',

  // How the endpoint above behaves:
  //   'apps-script' (default) - the Google Apps Script in apps-script/Code.gs
  //   'webhook'               - a Make / Zapier / n8n webhook URL (see README.md)
  RSVP_MODE: 'apps-script',

  // Optional fallback shown if sending fails, for example
  // 'https://wa.me/9725XXXXXXXX?text=...'. Leave empty to hide it.
  WHATSAPP_URL: ''
};
