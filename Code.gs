var _email = Session.getActiveUser().getEmail();
var _timeZone = Session.getScriptTimeZone();
var _datetime=Utilities.formatDate(new Date(), _timeZone, "yyyy-MM-dd HH:mm:ss");

function db_GetConnection() {
var DB_INSTANCE="atlantean-talon-162113:us-central1:herfysecongeneration",
    DB_SCHEMA="helpdeskdb",
    DB_USER="root",
    DB_PASSWORD="herfy";
  return Jdbc.getCloudSqlConnection("jdbc:google:mysql://" + DB_INSTANCE + "/" + DB_SCHEMA, DB_USER, DB_PASSWORD);//
}

/* doPost(e)  */
function doPost(e) {
 
var action = JSON.parse(e.postData.contents).action; 
  
  	switch (action){      
	case "signin_user":      
		return ContentService.createTextOutput(JSON.stringify(signin_user(e)) ).setMimeType(ContentService.MimeType.JSON); 
		break;
	case "signin_google":      
		return ContentService.createTextOutput(JSON.stringify(signin_google(e)) ).setMimeType(ContentService.MimeType.JSON); 
		break;
    case "sys_parameter":      
		return ContentService.createTextOutput(JSON.stringify(sys_parameter(e)) ).setMimeType(ContentService.MimeType.JSON); 
		break;
    case "update_loginattempt":      
		return ContentService.createTextOutput(JSON.stringify(update_userloginattempt(e)) ).setMimeType(ContentService.MimeType.JSON); 
		break;
    default:
        return ContentService.createTextOutput(JSON.stringify({ "data" : [], "result": {  "code": 2000, "message": "Error"}} )).setMimeType(ContentService.MimeType.JSON);
    }
 
} //END function doPost(e)


/* signin_user(e) -  use to login page  
sample request:

{
    "action" : "signin_user",
    "param"  : {
    	"userid" : "4424",
    	"password" : "@123"
    }
}
*/

function signin_user(e){
	var _param = JSON.parse(e.postData.contents).param;

	var _user = get_user("select * from user where userid = '"+ _param.userid + "'" );
     
	if (_user.length > 0){    
		var _userrole = get_userrole("select * from userrole where userid = '"+ _param.userid +"'");   
		var _sessionid = generate_sessionid();
        var _access = (decodeString(_user[0].password) == _param.password) ? "true" : "false" ;

		_user[0].role = _userrole;
		_user[0].sessionid = _sessionid;
        _user[0].hasaccess = _access;
      
    if (_access == "true"){
       update_usersessionid({"userid":_param.userid,"sessionid":_sessionid  });
    } 
		Logger.log(_user);
		var result = {"data" : _user, 
					"result": {  "code": 3000, "message": "success"},
					};
		Logger.log("============");     
		Logger.log(result);    
		return result;
	} else {
		return  {"data" : [], 
					"result": {  "code": 2000, "message": "Error"},
					};
	}	
  
} //END function signin_user(e)



/* signin_user(e) -  use to login page as google signin 
sample request:

{
    "action" : "signin_google",
    "param"  : {
    	"email" : "rowel@herfy.com"
    	
    }
}
*/
function signin_google(e){
    var _param = JSON.parse(e.postData.contents).param;
  

	var _user = get_user("select * from user where email = '"+ _param.email + "'" );
  
  if (_user.length > 0 ){
    var _userrole = get_userrole("select * from userrole where userid = '"+ _user[0].userid +"'");
    var _sessionid = generate_sessionid();
    var _access = "true";

	_user[0].role = _userrole;
    _user[0].sessionid = _sessionid;
    _user[0].hasaccess = _access;
    if (_access == "true"){
       update_usersessionid({"userid":_param.userid,"sessionid":_sessionid  });
    }  
	Logger.log(_user);
	var result = {"data" : _user, 
				"result": {  "code": 3000, "message": "success"},
				};
	Logger.log("============");     
	Logger.log(result);    
	return result;
  } else {
    return  {"data" : [], 
				"result": {  "code": 2000, "message": "Error"},
				};
  }	
  
} //END function signin_google(e)


function generate_sessionid()
{
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < charactersLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   result =result.substr(1,50);
   Logger.log(result)
   return result;
}





//*******Get user details*****//

function alluser_details(e){
	var _param = JSON.parse(e.postData.contents).param;
  
	var _user = get_user("select * from user where userid = '"+ _param.userid + "' and password = '" + _param.password + "' and locked='false' and status='true'" );
     
	if (_user.length > 0){    
		var _userrole = get_userrole("select * from userrole where userid = '"+ _param.userid +"'");   
		var _sessionid = generate_sessionid();
        

		_user[0].role = _userrole;
		_user[0].sessionid = _sessionid;        
		update_usersessionid({"userid":_param.userid,"sessionid":_sessionid  });

		Logger.log(_user);
		var result = {"data" : _user, 
					"result": {  "code": 3000, "message": "success"},
					};
		Logger.log("============");     
		Logger.log(result);    
		return result;
	} else {
		return  {"data" : [], 
					"result": {  "code": 2000, "message": "Error"},
					};
	}	
  
} //END function signin_user(e)




//*******Get system parameter and message library *****//

function sys_parameter(e){
	var _sysparameter = get_systemparameter("select * from systemparameter" );
    var _messagelibrary = get_messagelibrary("select * from messagelibrary" );
    var _json={};
       _json.sys_parameter=_sysparameter;
       _json.msg_library=_messagelibrary;
       
	if (_messagelibrary.length > 0 && _sysparameter.length >0){    
		var result = {"data" : _json, 
					"result": {  "code": 3000, "message": "success"},
					};
		return result;
	} else {
		return  {"data" : [], 
					"result": {  "code": 2000, "message": "No data"},
					};
	}	
  
} //END function signin_user(e)



function showalluser_details(e){
  var empid=[];
   var conn =Jdbc.getCloudSqlConnection("jdbc:google:mysql://" + 'atlantean-talon-162113:us-central1:herfysecongeneration' + "/" + 'helpdeskdb', 'root', 'herfy');//
  var stmt = conn.createStatement();
  var _loginquery = "select * from user " ;
  var _loginqueryexecute=stmt.executeQuery(_loginquery);
  while(_loginqueryexecute.next()){
      empid.push( _loginqueryexecute.getString("userid"));
  }
  _loginqueryexecute.close();
  
  var _dataresult={};
  for(var u=0; u<empid.length; u++)
  {
	var _user = get_user("select * from user where userid = '"+ empid[u] + "'" );
     
		var _userrole = get_userrole("select * from userrole where userid = '"+  empid[u]  +"'");   
		var _sessionid = generate_sessionid();
        

		_user[0].role = _userrole;
		_user[0].sessionid = _sessionid;        
		update_usersessionid({"userid":empid[u],"sessionid":_sessionid  });

_dataresult.push(_user)
        }
        	if (_dataresult.length > 0){    

		var result = {"data" : _dataresult, 
					"result": {  "code": 3000, "message": "success"},
					};
		Logger.log("============");     
		Logger.log(JSON.stringify(result));  
//        var getval=result["data"][0]
//        		Logger.log(getval);     

		return result;
	} else {
		return  {"data" : [], 
					"result": {  "code": 2000, "message": "Error"},
					};
	}	
    
  
} //END function signin_user(e)

