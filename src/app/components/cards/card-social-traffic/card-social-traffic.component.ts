import { Component, Input, OnInit } from "@angular/core";

export type configTable={
  header:string[] 
  properties:string[]
}

@Component({
  selector: "app-card-social-traffic",
  templateUrl: "./card-social-traffic.component.html",
})
export class CardSocialTrafficComponent implements OnInit {
  @Input("title")
  protected title:string="Social traffic";
  @Input("configTable")
  protected config:configTable={
    header:["Referral","Visitors"],
    properties:["ref","vis"]
  }
  @Input("porcentageName")
  protected portName:string="p";

  @Input("data")
  protected data:any[]=[
    {ref:"Facebook",vis:"",p:60},
    {ref:"Facebook",vis:"",p:40},
    {ref:"Facebook",vis:"",p:50},
    {ref:"Facebook",vis:"",p:30},
    {ref:"Facebook",vis:"",p:20},
    {ref:"Facebook",vis:"",p:90},
  ];
  @Input("type")
  protected type:"danger" | "warning" | "success" | "info" | "barney" | "all" = "danger"

  private allColorNumber=0;
  protected getColor(){

  }
  constructor() {}

  ngOnInit(): void {}
}

