import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  videoOne: any;
  videoTwo: any;
  input: any;
  hidden: boolean;
  hiddenTwo: boolean;
  ngOnInit(){
    this.videoOne = document.getElementsByClassName('video')[0];
    this.videoTwo = document.getElementsByClassName('video')[1];
    this.input = document.getElementsByTagName('input')[0];
    this.hidden = false;
    this.hiddenTwo = false;
  }
  play(num,e){
    e.stopPropagation();
    if(num === 1){
      if(!this.videoTwo.paused){
        this.videoTwo.pause();
        this.hiddenTwo = false;
      }
      this.videoOne.play();
      this.hidden = true;
    }else{
      if(!this.videoOne.paused){
        this.videoOne.pause();
        this.hidden = false;
      }
      this.videoTwo.play();
      this.hiddenTwo = true;
    }  
  }
  wrapper(num){
    if(num === 1){
      this.videoOne.pause();
      this.hidden = false;
    }else{
      this.videoTwo.pause();
      this.hiddenTwo = false;
    }
  }
  copy(){
    this.input.select();
    document.execCommand('Copy');
    alert('复制成功')
  }
}
