
function doGet(e) {
    var x = HtmlService.createTemplateFromFile("log");
    var y = x.evaluate();
    var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    return z;
  }
  
  function checkLogin(username, password) {
    var url = 'https://docs.google.com/spreadsheets/d/1k5F4eJHOpaIfi2DedkjOt4o1RSNtUR9AbCbn0e4yAr0/edit?usp=drivesdk';
    var ss= SpreadsheetApp.openByUrl(url);
    var webAppSheet = ss.getSheetByName("DATA");
    var getLastRow =  webAppSheet.getLastRow();
    var found_record = '';
    for(var i = 1; i <= getLastRow; i++)
    {
     if(webAppSheet.getRange(i, 1).getValue().toUpperCase() == username.toUpperCase() && 
       webAppSheet.getRange(i, 2).getValue().toUpperCase() == password.toUpperCase())
     {
       found_record = 'TRUE';
     }    
    }
    if(found_record == '')
    {
      found_record = 'FALSE'; 
    }
    
    return found_record;
    
  }
  
  function AddRecord(usernamee, passwordd, email, phone) {
    var url = 'https://docs.google.com/spreadsheets/d/1k5F4eJHOpaIfi2DedkjOt4o1RSNtUR9AbCbn0e4yAr0/edit?usp=drivesdk';
    var ss= SpreadsheetApp.openByUrl(url);
    var webAppSheet = ss.getSheetByName("DATA");
    webAppSheet.appendRow([usernamee,passwordd,email,phone]);
    
  }