import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun',
  template: `<hr/>
            <h4>Example of uses of tamplet instead of tampletURl:</h4>
            <br>
            <p>not fun work</p>
            <p>./fun.component.html</p>`,
  styleUrls: ['./fun.component.css']
})
export class FunComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
