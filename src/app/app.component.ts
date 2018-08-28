import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  controlOne = false;
  controlTwo = false;
  videoOne: any;
  videoTwo: any;
  input: any;
  ngOnInit(){
    this.videoOne = document.getElementsByClassName('video')[0];
    this.videoTwo = document.getElementsByClassName('video')[1];
    this.input = document.getElementsByTagName('input')[0];
  }
  play(num,e){
    e.stopPropagation();
    if(num === 1){
      if(!this.videoTwo.paused){
        this.pause(2);
      }
      this.videoOne.play();
      this.controlOne = true;
    }else{
      if(!this.videoOne.paused){
        this.pause(1);
      }
      this.videoTwo.play();
      this.controlTwo = true;
    }  
  }
  pause(num) {
    if (num === 1) {
      this.videoOne.pause();
      this.controlOne = false;
    } else {
      this.videoTwo.pause();
      this.controlTwo = false;
    }
  }
  copy(){
    this.input.select();
    document.execCommand('Copy');
    alert('复制成功')
  }
}
