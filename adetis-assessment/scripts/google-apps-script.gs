/**
 * ADETIS Assessment → Google Sheets Append Endpoint
 *
 * Deploy as a Web App (execute as: Me, access: Anyone with the link).
 * Add a Script Property: APPS_SCRIPT_SECRET
 *
 * The Next.js API route will POST JSON and include header:
 *   X-ADETIS-SECRET: <secret>
 */

function doPost(e) {
  try {
    var secret = PropertiesService.getScriptProperties().getProperty('APPS_SCRIPT_SECRET');
    var headerSecret = (e && e.parameter && e.parameter.secret) ? e.parameter.secret : null;
    // Prefer header if available; Apps Script lowercases headers in e.headers
    var h = e && e.headers ? e.headers : {};
    var header = h['x-adetis-secret'] || h['X-ADETIS-SECRET'] || headerSecret;

    if (!secret || !header || String(header).trim() !== String(secret).trim()) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, error: 'Unauthorized' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var data = JSON.parse(e.postData.contents);

    // CHANGE THIS to your sheet name if needed
    var sheetName = 'Responses';
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);

    // Ensure header row exists
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(buildHeader());
      sheet.setFrozenRows(1);
    }

    var row = buildRow(data);
    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function buildHeader() {
  // Minimum required columns (plus behavior columns)
  return [
    'Timestamp',
    'ResponseID',
    'Name',
    'Discipline',
    'Building',
    'Cluster',
    'Q1',
    // Q2..Q19
    'Q2','Q3','Q4','Q5','Q6','Q7','Q8','Q9','Q10','Q11','Q12','Q13','Q14','Q15','Q16','Q17','Q18','Q19',
    'Q20',
    'BehavioralRawScore',
    'BehavioralPercentScore',
    'SelfPerceptionKickoff',
    'SelfPerceptionFinal',
    'SelfPerceptionAverage',
    'SelfPerceptionPercentScore',
    'PerceptionVsBehaviorGap',
    'BehaviorScore_A',
    'BehaviorScore_D',
    'BehaviorScore_E',
    'BehaviorScore_T',
    'BehaviorScore_I',
    'BehaviorScore_S',
    'LowBehaviors',
    'LowPairingsShown',
    'LOW_BEHAVIOR_THRESHOLD',
    'ExecutiveNarrative',
    'Next30DayActions'
  ];
}

function buildRow(data) {
  var a = data.answers || {};
  var c = data.computed || {};
  var bs = c.behaviorScores || {};

  var next30 = (c.next30DayActions || []).join('\n');

  return [
    data.timestamp || new Date().toISOString(),
    data.responseId || '',
    (data.intake && data.intake.name) || '',
    (data.intake && data.intake.discipline) || '',
    (data.intake && data.intake.building) || '',
    (data.intake && data.intake.cluster) || '',
    a.Q1 || '',
    a.Q2 || '', a.Q3 || '', a.Q4 || '', a.Q5 || '', a.Q6 || '', a.Q7 || '', a.Q8 || '', a.Q9 || '', a.Q10 || '', a.Q11 || '', a.Q12 || '', a.Q13 || '', a.Q14 || '', a.Q15 || '', a.Q16 || '', a.Q17 || '', a.Q18 || '', a.Q19 || '',
    a.Q20 || '',
    c.behavioralRawScore || '',
    c.behavioralPercentScore || '',
    c.selfPerceptionKickoff || '',
    c.selfPerceptionFinal || '',
    c.selfPerceptionAverage || '',
    c.selfPerceptionPercentScore || '',
    c.perceptionVsBehaviorGap || '',
    bs.A || '',
    bs.D || '',
    bs.E || '',
    bs.T || '',
    bs.I || '',
    bs.S || '',
    (c.lowBehaviors || []).join(', '),
    (c.lowPairingsShown || []).join(', '),
    c.lowBehaviorThreshold || '',
    c.executiveNarrative || '',
    next30
  ];
}
