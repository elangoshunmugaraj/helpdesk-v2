function executelogin(param) 
{
var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};

try {
    if(param.action == 'signin_user')
    {
     result=hapi.signin_user(param);

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
    
    return result 
}





function executerole(param) 
{
var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
	try {
    
    if(param.action == 'showallrole_details')
    {
     result=hapi.showallrole_details(param);
     
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
    
    return result 
}



function executeimagelibrary(param)
{
var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};

try {
  switch (param.action){
    case 'showallimagelibrary_details': 
      result=hapi.showallimagelibrary_details(param); 
    break;
   case 'imagelibrary_maintain': 
      result=hapi.imagelibrary_maintain(param); 
   break;
   case 'imagelibrary_getbyID': 
      result=hapi.imagelibrary_getbyID(param); 
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
    if(param.action == 'module_maintain')
    {
      result=hapi.module_maintain(param);
    }
     else
    if(param.action == 'module_getbyID')
    {
      result=hapi.module_getbyID(param);
    }
//    else
//    if(param.action == 'showalluser_details')
//    {
//      result=hapi.showalluser_details(param);
//    }     
  } catch (err) {} 
  
  return result 
}

function executeuser(param) 
{
  var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
  try {
    if(param.action == 'showalluser_details')
    {
      result=hapi.showalluser_details(param);
    }
    else
    if(param.action == 'user_maintain')
    {
      result=hapi.user_maintain(param);
    }
     else
    if(param.action == 'user_getbyID')
    {
      result=hapi.user_getbyID(param);
    }
    
  } catch (err) {} 
  
  return result 
}




function executecategory(param) 
{
  var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
  try {
    if(param.action == 'showallcategory_details')
    {
      result=hapi.showallcategory_details(param);
    }
    else
    if(param.action == 'category_maintain')
    {
      result=hapi.category_maintain(param);
    }
     else
    if(param.action == 'category_getbyID')
    {
      result=hapi.category_getbyID(param);
    }
       
  } catch (err) {} 
  
  return result 
}


function executesubcategory(param) 
{
  var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
  try {
    if(param.action == 'showallsubcategory_details')
    {
      result=hapi.showallsubcategory_details(param);
    }
    else
    if(param.action == 'subcategory_maintain')
    {
      result=hapi.subcategory_maintain(param);
    }
     else
    if(param.action == 'subcategory_getbyID')
    {
      result=hapi.subcategory_getbyID(param);
    }
       
  } catch (err) {} 
  
  return result 
}

function executeserviceteam(param) 
{
  var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
  try {
    if(param.action == 'showallserviceteam_details')
    {
      result=hapi.showallserviceteam_details(param);
    }
    else
    if(param.action == 'serviceteam_maintain')
    {
      result=hapi.serviceteam_maintain(param);
    }
     else
    if(param.action == 'serviceteam_getbyID')
    {
      result=hapi.serviceteam_getbyID(param);
    }
    
  } catch (err) {} 
  
  return result 
}



function executeknownissues(param) 
{
  var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
  try {
    if(param.action == 'showallknownissues_details')
    {
      result=hapi.showallknownissues_details(param);
    }
    else
    if(param.action == 'knownissues_maintain')
    {
      result=hapi.knownissues_maintain(param);
    }
     else
    if(param.action == 'knownissues_getbyID')
    {
      result=hapi.knownissues_getbyID(param);
    }
    
  } catch (err) {} 
  
  return result 
}



function executeknowledgebase(param) 
{
  var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
  try {
    if(param.action == 'showallknowledgebase_details')
    {
      result=hapi.showallknowledgebase_details(param);
    }
    else
    if(param.action == 'knowledgebase_maintain')
    {
      result=hapi.knowledgebase_maintain(param);
    }
     else
    if(param.action == 'knowledgebase_getbyID')
    {
      result=hapi.knowledgebase_getbyID(param);
    }
    
  } catch (err) {} 
  
  return result 
}



function executeactionlists(param) 
{
  var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
  try {
    if(param.action == 'showallactionlists_details')
    {
      result=hapi.showallactionlists_details(param);
    }
    else
    if(param.action == 'actionlists_maintain')
    {
      result=hapi.actionlists_maintain(param);
    }
     else
    if(param.action == 'actionlists_getbyID')
    {
      result=hapi.actionlists_getbyID(param);
    }
    
  } catch (err) {} 
  
  return result 
}

  

function executerootcause(param) 
{
  var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
  try {
    if(param.action == 'showallrootcause_details')
    {
      result=hapi.showallrootcause_details(param);
    }
    else
    if(param.action == 'rootcause_maintain')
    {
      result=hapi.rootcause_maintain(param);
    }
     else
    if(param.action == 'rootcause_getbyID')
    {
      result=hapi.rootcause_getbyID(param);
    }
      
  } catch (err) {} 
  
  return result 
}


function executepriority(param) 
{
  var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
  try {
    if(param.action == 'showallpriority_details')
    {
      result=hapi.showallpriority_details(param);
    }
    else
    if(param.action == 'priority_maintain')
    {
      result=hapi.priority_maintain(param);
    }
     else
    if(param.action == 'priority_getbyID')
    {
      result=hapi.priority_getbyID(param);
    }
      
  } catch (err) {} 
  
  return result 
}


function executeincidentmaster(param) 
{

  var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
  try {
    if(param.action == 'showallincidentmaster_details')
    {
      result=hapi.showallincidentmaster_details(param);
    }
    else
    if(param.action == 'incidentmaster_maintain')
    {
      result=hapi.incidentmaster_maintain(param);
    }
     else
    if(param.action == 'incidentmaster_getbyID')
    {
      result=hapi.incidentmaster_getbyID(param);
    }
      
  } catch (err) {} 
  
  Logger.log(result)
  return result 
}


function executeincidentmastercq(param) 
{

  var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
  try {
    if(param.action == 'showallincidentmastercq_details')
    {
      result=hapi.showallincidentmastercq_details(param);
    }
    else
    if(param.action == 'incidentmastercq_maintain')
    {
      result=hapi.incidentmastercq_maintain(param);
    }
     else
    if(param.action == 'incidentmastercq_getbyID')
    {
      result=hapi.incidentmastercq_getbyID(param);
    }
      
  } catch (err) {} 
  
  Logger.log(result)
  return result 
}



function executeincidentmastercf(param) 
{

  var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
  try {
    if(param.action == 'showallincidentmastercf_details')
    {
      result=hapi.showallincidentmastercf_details(param);
    }
    else
    if(param.action == 'incidentmastercf_maintain')
    {
      result=hapi.incidentmastercf_maintain(param);
    }
     else
    if(param.action == 'incidentmastercf_getbyID')
    {
      result=hapi.incidentmastercf_getbyID(param);
    }
      
  } catch (err) {} 
  
  Logger.log(result)
  return result 
}


function executeincidentmastercfv(param) 
{

  var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
  try {
    if(param.action == 'showallincidentmastercfv_details')
    {
      result=hapi.showallincidentmastercfv_details(param);
    }
    else
    if(param.action == 'incidentmastercfv_maintain')
    {
      result=hapi.incidentmastercfv_maintain(param);
    }
     else
    if(param.action == 'incidentmastercfv_getbyID')
    {
      result=hapi.incidentmastercfv_getbyID(param);
    }
      
  } catch (err) {} 
  
  Logger.log(result)
  return result 
}


function executeknowledgebasehelp(param) 
{

  var result= {"data" : [], "result": {"code": 500,"message": "unexpected error occurred"}};
  try {
    if(param.action == 'showallknowledgebasehelp_details')
    {
      result=hapi.showallknowledgebasehelp_details(param);
    }
    else
    if(param.action == 'knowledgebasehelp_maintain')
    {
      result=hapi.knowledgebasehelp_maintain(param);
    }
     else
    if(param.action == 'knowledgebasehelp_getbyID')
    {
      result=hapi.knowledgebasehelp_getbyID(param);
    }
      
  } catch (err) {} 
  
  Logger.log(result)
  return result 
}