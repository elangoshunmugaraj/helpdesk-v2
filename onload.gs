// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_form_on_image
// https://www.photopea.com/
// https://material.io/resources/icons/?style=baseline
// https://materializecss.com/icons.html
// https://bbbootstrap.com/snippets/toast-notification-sound-toasty-73638118
//Inside script userid = userkey
var urlAPI = "https://script.google.com/a/herfy.com/macros/s/AKfycbztCyJa-q-tXMyWTCLw3fQuU68yKBmn5FtwWtOIOkt8trHSASIH/exec";
var _email = Session.getActiveUser().getEmail();
var _timeZone = Session.getScriptTimeZone();
var _datetime = Utilities.formatDate(new Date(), _timeZone, "yyyy-MM-dd HH:mm:ss");
var createdate = Utilities.formatDate(new Date(), _timeZone, "yyyy-MM-dd");
var createby = _email;
function doGet(e) {

  var page = 'index';
  return HtmlService.createTemplateFromFile(page)
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setTitle("Helpdesk")
    .addMetaTag('viewport', 'width=device-width, initial-scale=1').setFaviconUrl('https://storage.googleapis.com/imagelib/helpdesk2.0/herfy-logo.png');

}

function validateDomain(value) {
  var result = 'false';
  var isavailabel = value.indexOf('.')
  if (isavailabel > 0) {
    var splitval = value.split('.');
    if (splitval.length > 1) { if (splitval[1] != '') { result = 'true'; } else { result = 'false'; } } else { result = 'false'; }
  } else { result = 'false'; }
  return result;
}


//function checjtest()
//{
//var arraynow=["aaa","bbb","ccc","ddd"];
//
//var getindex=arraynow.indexOf('bbbs');
//Logger.log(getindex)
//}



function getContent(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function decodeString(txt) {
  var decoded = Utilities.base64Decode(txt);
  var blob = Utilities.newBlob(decoded).getDataAsString();
  var decoded2 = Utilities.base64Decode(blob.substr(10, blob.length - 10));
  return Utilities.newBlob(decoded2).getDataAsString();
}

function verify_otp(params) {
  var _otpcode = params.otpcode;
  var _code = params.inputcode;
  return (_code.toUpperCase() == _otpcode.toUpperCase()) ? { "verify": true } : { "verify": false };
}

function reveal() {
  var t = "Q1U5NmpMWUNtR1ZWRTBOdz09";
  var decoded = decodeString(t);
}


function oneOffSetting() {

  // used by all using this script
  var propertyStore = PropertiesService.getScriptProperties();

  // service account for cloud vision
  // DriveApp.getFiles()
  cGoa.GoaApp.setPackage(propertyStore,
    cGoa.GoaApp.createServiceAccount(DriveApp, {
      packageName: 'upload-sales-deposite-cloudvision',
      fileId: '1Lc32q1sunuw4KlAWVq1JE2Oioa-olpNZ',
      scopes: cGoa.GoaApp.scopesGoogleExpand(['cloud-platform']),
      service: 'google_service'
    }));

}



function uploadfilehere(theForm) {
  var fileBlob = theForm.wizardpicture;
  var filename = fileBlob.getName();
  var timeZone = Session.getScriptTimeZone();
  var UserStamp = Session.getActiveUser().getEmail();
  var currentdate = Utilities.formatDate(new Date(), timeZone, "yyyy-MM-dd HH:mm:ss");

  var uploaddate = Utilities.formatDate(new Date(), timeZone, "yyyyMMddHHmmss");

  var split = UserStamp.split('@');
  filename = split[0] + uploaddate + filename;
  // get the token
  //    var goa = cGoa.GoaApp.createGoa(
  //      'upload-sales-deposite-cloudvision', 
  //      PropertiesService.getScriptProperties()
  //    ).execute();
  //    
  //    // check we have one
  //    if (!goa.hasToken()) {
  //      throw 'should have been a token';
  //    }

  var params = {
    BUCKET_NAME: 'imagelib',
  };

  var blob = fileBlob;
  var bytes = blob.getBytes();

  var url = 'https://www.googleapis.com/upload/storage/v1/b/BUCKET/o?uploadType=media&name=FILE'
    .replace("BUCKET", params.BUCKET_NAME)
    .replace("FILE", "profileimage/" + filename);
  var response = UrlFetchApp.fetch(url, {
    method: "POST",
    contentLength: bytes.length,
    contentType: blob.getContentType(),
    payload: bytes,
    headers: {
      Authorization: 'Bearer ' + hapi.googleToken()
    }
  });

  console.log(response.getContentText());
  return filename;
}


function uploadimagelibraryfile(theForm) {
  var fileBlob = theForm.uploadimagelibrarypicture;


  var filename = fileBlob.getName();
  var timeZone = Session.getScriptTimeZone();
  var UserStamp = Session.getActiveUser().getEmail();
  var currentdate = Utilities.formatDate(new Date(), timeZone, "yyyy-MM-dd HH:mm:ss");

  var uploaddate = Utilities.formatDate(new Date(), timeZone, "yyyyMMddHHmmss");

  var split = UserStamp.split('@');
  filename = split[0] + uploaddate + filename;



  var params = {
    BUCKET_NAME: 'imagelib',
  };

  var blob = fileBlob;
  var bytes = blob.getBytes();
  var url = 'https://www.googleapis.com/upload/storage/v1/b/BUCKET/o?uploadType=media&name=FILE'
    .replace("BUCKET", params.BUCKET_NAME)
    .replace("FILE", "imagelibrary/" + filename);
  var response = UrlFetchApp.fetch(url, {
    method: "POST",
    contentLength: bytes.length,
    contentType: blob.getContentType(),
    payload: bytes,
    headers: {
      Authorization: 'Bearer ' + hapi.googleToken()
    }
  });

  console.log(response.getContentText());
  return filename;
}
//**********************on load data*******************//


function uploaduserfile(theForm) {
  var fileBlob = theForm.uploaduserpicture;


  var filename = fileBlob.getName();
  var timeZone = Session.getScriptTimeZone();
  var UserStamp = Session.getActiveUser().getEmail();
  var currentdate = Utilities.formatDate(new Date(), timeZone, "yyyy-MM-dd HH:mm:ss");

  var uploaddate = Utilities.formatDate(new Date(), timeZone, "yyyyMMddHHmmss");

  var split = UserStamp.split('@');
  filename = split[0] + uploaddate + filename;



  var params = {
    BUCKET_NAME: 'imagelib',
  };

  var blob = fileBlob;
  var bytes = blob.getBytes();
  var url = 'https://www.googleapis.com/upload/storage/v1/b/BUCKET/o?uploadType=media&name=FILE'
    .replace("BUCKET", params.BUCKET_NAME)
    .replace("FILE", "userlib/" + filename);
  var response = UrlFetchApp.fetch(url, {
    method: "POST",
    contentLength: bytes.length,
    contentType: blob.getContentType(),
    payload: bytes,
    headers: {
      Authorization: 'Bearer ' + hapi.googleToken()
    }
  });

  console.log(response.getContentText());
  return filename;
}
//**********************on load data*******************//




function onload(param) {
  var result = { "data": [], "result": { "code": 500, "message": "unexpected error occurred" } };
  try {
    if (param.action == 'sys_parameter') {
      result = hapi.sys_parameter();
    }
    else
      if (param.action == 'get_allrecentactivities') {
        result = hapi.get_allrecentactivities();
      }
  } catch (err) { } //end TRY CATCH  
  return result
}













