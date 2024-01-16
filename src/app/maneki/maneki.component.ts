import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';


@Component({
  selector: 'app-maneki',
  templateUrl: './maneki.component.html',
  styleUrls: ['./maneki.component.css']
})
export class ManekiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
