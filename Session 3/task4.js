/*
http://www.codewars.com/kata/can-you-keep-a-secret
*/

function createSecretHolder(secret) {
  var localSecret=secret;
  
  return { 
    setSecret:function(secret) {
      localSecret= secret;
    }
    ,
    getSecret:function () {
      return localSecret;
    }
  }

}