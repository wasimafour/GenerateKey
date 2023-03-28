import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit {
  @Input() public formData:any;
  constructor(
    public activeModal: NgbActiveModal
  ) { }
      ngOnInit(): void {
      }
     
      closeModal(message: string) {
        this.activeModal.close();
      }

}
