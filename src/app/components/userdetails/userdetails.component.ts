import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Response } from 'src/app/interface/response.interface';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit{

  response:any;
  mode:'edit'| 'locked'='locked';
  buttonText:"Edit" | "Save Changes"="Edit";

  constructor(private activatedRoute:ActivatedRoute,private userService:UserService){

  }

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe( (params:ParamMap)=>{
       // console.log(params.get("uuid"));
          this.userService.getUser(params.get("uuid")!).subscribe( (res:any)=>{
            this.response=res.results[0];
            //console.log(this.response);
          })
      })
  }

  chnageMode(mode:'edit'| 'locked'){
      this.mode = this.mode ==='locked' ? 'edit':'locked';
      this.buttonText= this.buttonText ==='Edit' ? 'Save Changes':'Edit';

  }


}
