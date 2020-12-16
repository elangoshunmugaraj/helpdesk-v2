function executelogin(param) 
{
var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};

Logger.log(param.action)
try {
    if(param.action == 'signin_user')
    {
     result=hapi.signin_user(param);
     Logger.log(JSON.stringify(result))

     }
     else
      if(param.action == 'signin_google')
    {
     result=hapi.signin_google(param);
     }
     else
      if(param.action == 'update_loginattempt')
    {
     result=hapi.update_userloginattempt(param);
     }
	} catch (err) {} //end TRY CATCH 
    
    Logger.log(result)
    return result 
}


function executeprofile(param) 
{
var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
	try {
    if(param.action == 'update_userpreference')
    {
     result=hapi.update_userpreference(param);
     }
     else
      if(param.action == 'update_usercontact')
    {
     result=hapi.update_usercontact(param);
     }
       else
      if(param.action == 'Update_profileimage')
    {
     result=hapi.Update_profileimage(param);
     }
	} catch (err) {} //end TRY CATCH 
    
    Logger.log(result)
    return result 
}




function executereset(param) 
{
var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
	try {
    if(param.action == 'send_otp')
    {
     result=hapi.send_OTP(param);
     }else
      if(param.action == 'update_password')
    {
     result=hapi.update_userpassword(param);
     }
     
     
	} catch (err) {} //end TRY CATCH 
    
    Logger.log(result)
    return result 
}





function executerole(param) 
{
var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
	try {
    
    if(param.action == 'showallrole_details')
    {
     result=hapi.showallrole_details(param);
     
     Logger.log(result)
     }
     else
      if(param.action == 'update_rolestatus')
    {
     result=hapi.update_rolestatus(param);
     }
      else
      if(param.action == 'role_maintain')
    {
     result=hapi.role_maintain(param);
     }
     else
      if(param.action == 'role_getbyID')
    {
     result=hapi.role_getbyID(param);
     }
     
	} catch (err) {} //end TRY CATCH 
    
    Logger.log(result)
    return result 
}



function executeimagelibrary(param)
{
var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};

try {
  switch (param.action){
    case 'showallimagelibrary_details': 
      result=hapi.showallimagelibrary_details(param); 
      Logger.log(result)
    break;
   case 'create_imagelibrary': 
      result=hapi.create_imagelibrary(param); 
      Logger.log(result)
   break;
    
    
    default: break;      
  }    
	} catch (err) {} //end TRY CATCH
    return result 

}






function executebusinessunit(param) {
  var result = { "data": [], "result": { "code": 500, "message": "unexpected error occurred" } };

  try {
    switch (param.action) {
      case 'businessunit_maintain':
        result = hapi.businessunit_maintain(param);
        Logger.log(result)
        break;
      case 'showallbusinessunit_details':
        result = hapi.showallbusinessunit_details(param);
        break;
      case 'showimagelibrary_logo':
        result = hapi.showimagelibrary_logo(param);
        break;
     case 'businessunit_getbyID':
        result = hapi.businessunit_getbyID(param);
        break;
    
        
      default: break;
    }
  } catch (err) { } 
  return result
}


function executecompany(param) {
  var result = { "data": [], "result": { "code": 500, "message": "unexpected error occurred" } };

  try {
    switch (param.action) {
      case 'company_maintain':
        result = hapi.company_maintain(param);
        break;
      case 'showallcompany_details':
        result = hapi.showallcompany_details(param);
        break;
      case 'showimagelibrary_logo':
        result = hapi.showimagelibrary_logo(param);
        break;
     case 'company_getbyID':
        result = hapi.company_getbyID(param);
        break;
     case 'companydomain_delete':
        result = hapi.companydomain_delete(param);
        break;   
        
      default: break;
    }
  } catch (err) { } 
  return result
}


function executeworklocation(param) {
  var result = { "data": [], "result": { "code": 500, "message": "unexpected error occurred" } };

  try {
    switch (param.action) {
      case 'worklocation_maintain':
        result = hapi.worklocation_maintain(param);
        Logger.log(result)
        break;
      case 'showallworklocation_details':
        result = hapi.showallworklocation_details(param);
        break;
      case 'showimagelibrary_logo':
        result = hapi.showimagelibrary_logo(param);
        break;
     case 'worklocation_getbyID':
        result = hapi.worklocation_getbyID(param);
        break;
    
        
      default: break;
    }
  } catch (err) { } 
  return result
}


function executemodule(param) 
{
  var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
  try {
    if(param.action == 'showallmodule_details')
    {
      result=hapi.showallmodule_details(param);
    }
    else
    if(param.action == 'showalluser_details')
    {
      result=hapi.showalluser_details(param);
    }     
  } catch (err) {} 
  
  Logger.log(result)
  return result 
}

