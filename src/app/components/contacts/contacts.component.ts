import { Message } from './../../../../api/models/message';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactsForm: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactsForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.minLength(11)],
      message: null
    });
  }

  get name() { return this.contactsForm.get('name'); }

  get email() { return this.contactsForm.get('email'); }

  get phone() { return this.contactsForm.get('phone'); }

  get message() { return this.contactsForm.get('message'); }

  onSubmit() {
    window.confirm(`THANK YOU FOR YOUR MESSAGE. IT HAS BEEN SENT SUCCESSFULLY.`);
    this.sendFeedback(this.contactsForm.value);
    this.contactsForm.reset();
  }

  sendFeedback(message: Message) {
    return this.http.post<Message>('http://khaledelbahr2016@gmail.com', message).subscribe();
  }
}
