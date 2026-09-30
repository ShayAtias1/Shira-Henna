/**
 * Collects the invitation's RSVPs into a Google Sheet.
 * Setup steps are in ../README.md. A guest who answers again updates
 * their own row instead of adding a new one.
 */
const SHEET_NAME = 'RSVP';
const HEADERS = ['עודכן', 'שם', 'מגיעה', 'כמות אורחות', 'מזהה'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const data = JSON.parse(e.postData.contents);
    if (data.website) return json({ ok: true }); // honeypot filled: a bot

    const name = String(data.name || '').trim().slice(0, 40);
    const going = data.going === 'yes' ? 'כן' : data.going === 'no' ? 'לא' : '';
    const count = going === 'כן' ? Math.max(1, Math.min(9, Number(data.count) || 1)) : 0;
    const id = String(data.id || '').slice(0, 64);
    if (!name || !going || !id) return json({ ok: false, error: 'invalid' });

    const sheet = getSheet();
    const row = [new Date(), name, going, count, id];
    const last = sheet.getLastRow();
    let target = 0;
    if (last > 1) {
      const ids = sheet.getRange(2, 5, last - 1, 1).getValues().flat();
      const at = ids.indexOf(id);
      if (at >= 0) target = at + 2;
    }
    if (target) sheet.getRange(target, 1, 1, row.length).setValues([row]);
    else sheet.appendRow(row);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.setRightToLeft(true);
  }
  return sheet;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
