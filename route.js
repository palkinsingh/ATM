var fs= require('fs');
var url = require('url');
function renderHTML(path,response){
    fs.readFile(path,null,function(error,data){
        if(error){
            response.writeHead(404);
            response.write('File not found:');
        }
        else{
            response.write(data);
        }
        response.end();
            });
}
module.exports ={
handleRequest: function(request , response){
    response.writeHead(200,{'Content-Type':'text/html'});
var path=url.parse(request.url).pathname;
switch(path){
    case '/':
        renderHTML('./home.html',response);
        break;
        case '/withdrawal.html':
            renderHTML('./withdrawal.html',response);
            break;
            case '/balance.html':
                renderHTML('./balance.html',response);
                break;
                case '/amount.html':
                renderHTML('./amount.html',response);
                break;
            default:
            response.writeHead(404);
            response.write('route Not Defined');
            response.end();

}
}
};