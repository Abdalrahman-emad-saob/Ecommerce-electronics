import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  http = inject(HttpClient);
  title = signal('zikzak');
  description = signal('A simple Angular application');

  ngOnInit() {
    this.http
      .post(
        'https://zikzakstore.tujar.xyz/app/tge_cloth_api.php',
        'func=-1',
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, responseType: 'json' }
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}
