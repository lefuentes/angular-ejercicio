import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.scss'],
})
export class Exercise1Component implements OnInit {
  arrayForm: FormGroup;
  histograma = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  };

  constructor(private formBuilder: FormBuilder) {
    this.arrayForm = this.formBuilder.group({
      array: [[], Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.resetHistograma();
    const a = this.arrayForm.get('array').value;

    var b = a.split(',').map(Number);

    b.forEach((number) => {
      this.histograma[number] += '*';
    });
  }

  resetHistograma(): void {
    this.histograma = {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
    };
  }
}
