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
      if(param.action == 'create_role')
    {
     result=hapi.create_role(param);
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
    case 'get_imagelibrary': 
      result=hapi.get_imagelibrary(param); 
      Logger.log(result)
    break;
    default: break;      
  }    
	} catch (err) {} //end TRY CATCH
    return result 

}