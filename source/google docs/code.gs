function onOpen() {
  DocumentApp.getUi().createMenu('AI Translation')
    .addItem('Open Translation Sidebar', 'openSidebar')
    .addToUi();
}

function openSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('sidebar')
    .setWidth(300)
    .setHeight(400);
  DocumentApp.getUi().showSidebar(html);
}

function translateDocument(isWholeDoc, sourceLanguage, targetLanguage, temperature) {
  const doc = DocumentApp.getActiveDocument()
  const body = doc.getBody();
  let text = "";
  if (isWholeDoc){
    text = body.getText();
  }
  else {
    const selection = doc.getSelection();
    if (selection) {
      const rangeElements = selection.getRangeElements();
      rangeElements.forEach(function(rangeElement) {
        if (rangeElement.getElement().editAsText) {
          const elementText = rangeElement.getElement().asText();
          const start = rangeElement.getStartOffset();
          const end = rangeElement.getEndOffsetInclusive();
          text += `\"${elementText.getText().substring(start, end + 1)}\", `;
        }
      });
      text = text.substring(0, text.length - 2);
    }
  }
  
  const translatedText = callGeminiAPI(text, sourceLanguage, targetLanguage, temperature);
  DocumentApp.getUi().alert(translatedText);
  return translatedText;
}

function callGeminiAPI(text, sourceLanguage, targetLanguage, temperature) {
  const apiKey = PropertiesService.getScriptProperties().getProperty('API_KEY')
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
  

  const payload = {
    contents: [
      {
        parts: [
          {
            text: `Translate the following text from ${sourceLanguage} to ${targetLanguage}: ${text}. 
            If there is a single word or document, only output the translation result, if there are multiple words or documents, output the result with their indentification.`
          }
        ]
      }
    ],
    generationConfig: {
      temperature: temperature
    }
  };

  const options = {
    method: 'POST',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  };

  try {
    const response = UrlFetchApp.fetch(apiUrl, options);
    const jsonResponse = JSON.parse(response.getContentText());
    return jsonResponse.candidates[0].content.parts[0].text;
  } catch (e) {
    console.error("Error calling Gemini API:", e);
    return null;
  }
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}
