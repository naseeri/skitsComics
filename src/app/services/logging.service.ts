export class LoggingService {

  constructor() { }

  public log(message: string, value?: string, type?: string) {
    if(type==undefined || value==undefined) {
        console.info(message);
        return;
    }

    if(type=="info") {
      console.info(message + ': ' + value);
      return;
    } 
    
    console.log(message + ': ' + value);
  }

}
