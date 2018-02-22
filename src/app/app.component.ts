import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  rpsForm: FormGroup;
  rpsOption: number[] = [0, 1, 2]; //0-rock 1-paper 2-scissor
  rpsCSS: string[] = ["fa fa-hand-rock-o", "fa fa-hand-paper-o", "fa fa-hand-scissors-o"];
  playerChoose:string = "fa fa-hand-rock-o";
  enemyChoose:string = "fa fa-hand-rock-o";
  playerResult:number = 0;  //0-rock 1-paper 2-scissor
  enemyResult:number = 0; //0-rock 1-paper 2-scissor
  playerName:any;
  enemyName:any = "Enemy";
  playerScore: number = 0;
  enemyScore: number = 0;
  winResult: number; //0-draw 1-player 2-enemy
  loaderStatus: boolean = false;

  constructor(private fb: FormBuilder){
    this.rpsForm = fb.group({
      playerName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(8)])]
    })
  }


  rpsSelect(rps){
    this.enemyResult = this.rpsOption[Math.floor(Math.random() * this.rpsOption.length)];
    this.playerResult = this.rpsOption[rps];
    console.log("player"+this.playerResult+"enemy"+this.enemyResult);
    //Result Calculation
    if(this.enemyResult != this.playerResult){
      //0-rock 1-paper 2-scissor
      if((this.enemyResult == 0 && this.playerResult ==2)||
        (this.enemyResult == 1 && this.playerResult ==0)||
        (this.enemyResult == 2 && this.playerResult ==1)){
          setTimeout(()=>{
            this.winResult =2
            this.enemyScore+=1;
          }, 400);
      }else{
        setTimeout(()=>{
          this.winResult =1;
          this.playerScore+=1;
        }, 400);
      }
    }else{
      this.winResult = 0;
    }
    this.loaderStatus = true;
    this.enemyChoose = this.rpsCSS[this.enemyResult];
    this.playerChoose = this.rpsCSS[rps];
    //Result UI change
    setTimeout(()=>{
      this.loaderStatus = false;
    }, 400);
  }

  resetScore(){
    this.winResult = null;
    this.enemyScore = 0;
    this.playerScore = 0;
  }

  mainMenu(){
    this.resetScore();
    this.playerName=null;
  }

  submit(value){

    this.playerName = value.playerName;

  }

  
}
