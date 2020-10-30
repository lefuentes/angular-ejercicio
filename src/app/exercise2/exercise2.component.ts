import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.scss'],
})
export class Exercise2Component implements OnInit {
  result = '';
  xForm: FormGroup;
  error: string = null;

  constructor(private formBuilder: FormBuilder) {
    this.xForm = this.formBuilder.group({
      x: ['', Validators.required],
    });
  }

  onSubmit() {
    this.resetError();
    this.resetResult();
    const x = Number(this.xForm.get('x').value);

    if (!x || x == 0) {
      this.error = 'ERROR!!';
      return;
    }

    this.printX(x, x);
  }

  resetError() {
    this.error = null;
  }

  resetResult() {
    this.result = '';
  }

  ngOnInit(): void {
    this.printX(6, 6);
  }

  printX(n: number, naux) {
    if (n <= 0) {
    } else if (n == 1) {
      this.pl(naux, n);
      this.result += '\n';
    } else {
      this.pl(naux, n);
      this.result += '\n';
      this.printX(n - 2, naux);
      this.pl(naux, n);
      this.result += '\n';
    }
  }

  pl(n, i) {
    if (n <= 0) {
    } else if (n == 1) {
      if (n == i) {
        this.result += 'X';
      } else {
        this.result += '_';
      }
    } else {
      if (n == i) {
        this.result += 'X';
      } else {
        this.result += '_';
      }
      this.pl(n - 2, i);

      if (n == i) {
        this.result += 'X';
      } else {
        this.result += '_';
      }
    }
  }
}
