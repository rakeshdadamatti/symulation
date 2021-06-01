import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-endpoint',
  templateUrl: './create-endpoint.component.html',
  styleUrls: ['./create-endpoint.component.css']
})
export class CreateEndpointComponent implements OnInit {
  apiEndpoint = "";

  ngOnInit(): void {
  }
  contentTypes = [{
    name:'text/plain'
  },
  {
    name:'application/json'
  },
  {
    name:'application/xml'
  },
  {
    name:'text/html'
  }
];

requestContent = "";
getRequestContentType(event:any)
{
  let selectedResponseType : any = event.target.value;
  console.log(selectedResponseType);
  switch(selectedResponseType){
    case 'text/plain': this.requestContent = "request text";
      break;
    case 'application/json': this.requestContent = "{\n}";;
    break;
    case 'application/xml': this.requestContent = "<Root></Root>";;
    break;
    case 'text/html': this.requestContent = "<html>\n<head>\n</head>\n<body>\n</body>\n</html>";;
    break;
   default:break;
  }
}

responseContent = "";
getResponseContentType(event:any)
{
  let selectedResponseType : any = event.target.value;
  switch(selectedResponseType){
    case 'text/plain': this.responseContent = "response text";
      break;
    case 'application/json': this.responseContent = "{\n}";
    break;
    case 'application/xml': this.responseContent = "<Root></Root>";
    break;
    case 'text/html': this.responseContent = "<html>\n<body>\n</body>\n</html>";
    break;
   default:break;
  }
}

generateEndpoint()
{
  this.apiEndpoint = "https://sampleurlendpoint.symulation.com";
}
}
