import { Component } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';
// import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {
                this.accountsService.statusUpdated.subscribe(
                  (status: string) => alert('New status: ' + status)
                  );
              } 

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    
// dio koda koji je napisan nakon kreiranja fajla --> ( logging.service.ts )

// ali ovako ne bismo trebali da koristimo servis u Angularu 
// ovo je manuelno kreiranje instance(objekta)... kao i import iz linije 2 

    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);

    // console.log('A server status changed, new status: ' + accountStatus);
    this.accountsService.addAcount(accountName, accountStatus)
    // this.loggingService.logStatusChange(accountStatus);
  }
}
