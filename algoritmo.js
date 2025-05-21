function onFormSubmit(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const row = e.range.getRow();
  const nome = sheet.getRange(row, 2).getValue() //Coluna nome
  const email = sheet.getRange(row, 4).getValue() // Coluna email

  //Mensagem da festa
  const mensagem = `Olá, ${nome},
  
  Obrigado por confirmar presença no nosso evento!
  Aqui estão as informações referente a este grande dia!
  
  Local: Parque Ibirapuera
  Data: 25/05/2025
  Horário: 09:00 as 17:00
  Traga um documento com foto e chegue com 15 minutos de antecedência!

  Se tiver dúvidas nos comunique por este e-mail.

  Nos vemos lá! 

  Equipe do evento.
  `;

// Enviar email
GmailApp.sendEmail(email, "Confirmação de Presença no Evento", mensagem);
}
