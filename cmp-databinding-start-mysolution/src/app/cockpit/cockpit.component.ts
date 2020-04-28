import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 // newServerName = '';
 // newServerContent = '';
    @ViewChild('serverContentInput', {static:true})serverContentInput: ElementRef;


  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
            //   console.log(nameInput.value);
       this.serverCreated.emit({
            //serverName: this.newServerName,
        serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value,
      });


    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      //serverName: this.newServerName,
      serverContent: this.serverContentInput.nativeElement.value,
    });
    

    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
// the above two methods got added into app.component.ts


}
