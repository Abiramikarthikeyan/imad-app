//counter code
var button=document.getElementById('counter');

button.onclick=function(){
    //create a request
    var request=new XMLHttpRequest();
    //capture the response and store it in the variable
    request.onreadystatechange=function(){
        if(request.readystate===XMLHttpRequest.Done){
            //take some action
            if(request.status===200){
                var counter=request.responseText;
                 var span=document.getElementById('count');
                  span.innerHTML=counter.toString();
            }
        }
        //not done yet
    };
    //make the request
    request.open('GET','http://abiramikca.imad.hasura-app.io/counter',true);
    request.send(null);
    
   
};