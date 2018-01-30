
import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges, SimpleChange } from '@angular/core';
import { MatDialog } from '@angular/material';

import { WTimeDialogComponent } from '../w-time-dialog/w-time-dialog.component';
import { ITime } from '../w-clock/w-clock.component';
import { FormControl,ReactiveFormsModule } from '@angular/forms';



@Component({
    selector: 'w-mat-timepicker',
    styleUrls: ['./w-mat-timepicker.component.scss'],
    templateUrl: './w-mat-timepicker.component.html'
})

export class WMatTimePickerComponent implements OnInit {
    inptcontrol=new FormControl();
    @Input() haserror:boolean; 
    @Input() userTime: ITime;
    @Output() userTimeChange: EventEmitter<ITime> = new EventEmitter();
    @Input () inputdisabled:boolean
    @Input () Placeholder:string
    @Input() color: string;
    @Input() name:string;
    inptdisabled=true;
    plchlder="Select Time";
    nm="";

    constructor(private dialog: MatDialog) { }

    ngOnInit() {

        if (!this.userTime) {

            this.userTime = {

                hour: 10,
                minute: 25,
                meriden: 'PM',
                format: 24
            }
        }
        this.inptdisabled=this.inputdisabled;
        this.plchlder=this.Placeholder;
        this.nm=this.name;
    }

    private get time(): string {

        if (!this.userTime) {
            return '';
        }

        let meriden = `${this.userTime.meriden}`;
        if (this.userTime.format === 24) {
            meriden = '';
        }

        let hour = `${this.userTime.hour}`;
        if (this.userTime.hour === 24) {
            hour = '00';
        }

        if (this.userTime.minute === 0) {
            return `${hour}:00 ${meriden}`;

        } else if (this.userTime.minute < 10) {

            const tt = '0' + String(this.userTime.minute);
            return `${hour}:${tt} ${meriden}`;

        } else {
            return `${hour}:${this.userTime.minute} ${meriden}`;
        }
    }
    ngOnChanges(changes: SimpleChanges) {
        debugger
       if(changes.haserror)
       {
        this.inptcontrol.markAsTouched();
       }
        
      
      }

    public showPicker($event) {

        const dialogRef = this.dialog.open(WTimeDialogComponent, {

            data: {
                time: {
                    hour: this.userTime.hour,
                    minute: this.userTime.minute,
                    meriden: this.userTime.meriden,
                    format: this.userTime.format
                },
                color: this.color
            
            }
        });

        dialogRef.afterClosed()
            .subscribe((result: ITime | -1) => {

                // result will be update userTime object or -1 or undefined (closed dialog w/o clicking cancel)
                if (result === undefined) {
                    return;
                } else if (result !== -1) {
                    this.userTime = result;
                    this.emituserTimeChange();
                }
            });
        return false;
    }

    private emituserTimeChange() {
       
        this.userTimeChange.emit(this.userTime);
    }
}
