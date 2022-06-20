import { Component, OnInit } from '@angular/core';
import   { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  monImage!:string;
  shop!:string;
  titre:string ="Bienvenue dans votre nouvelle boutique"
  trotinette! : string
  desTrot!:string;
  phone!:string;
  constructor() { }

  ngOnInit(): void {
    this.monImage ="https://2.bp.blogspot.com/-3phqqpdadhQ/V7Q0TH1ei6I/AAAAAAAAAcQ/7k7eqOMWg_os4CIcFWouGc9HnWlXBGICACLcB/s1600/Online_Shop_11.png";
    this.shop = "ma boutique";
    this.trotinette = "https://i01.appmifile.com/webfile/globalimg/products/m/mi-electric-scooter-3/546.png"
    this.desTrot = "trotinette electrique"
    this.phone = "https://en.zinggadget.com/wp-content/uploads/2018/10/iphone-xs-xr.png"
  }
}
