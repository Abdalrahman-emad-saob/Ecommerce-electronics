import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  http = inject(HttpClient);
  title = signal('zikzak');
  description = signal('A simple Angular application');

  ngOnInit() {
    this.http.get('https://my-json-server.typicode.com/typicode/demo/posts').subscribe(data => {
      console.log(data);
    });
  }
}
