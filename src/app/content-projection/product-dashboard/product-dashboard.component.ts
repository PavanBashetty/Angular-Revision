import { Component } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent {

  public shoeTag!:string;
  public shoeLink!:string;
  public shoeProducts!:any[];

  public laptopTag!:string;
  public laptopLink!:string;
  public laptopProducts!:any[];

  public chairTag!:string;
  public chairLink!:string;
  public chairProducts!:any[];

  constructor(private apiService:ApiService){}

  ngOnInit(){
    this.getProductsData();
  }

  getProductsData(){
    this.apiService.getWidgetProducts().subscribe({
      next:(data)=>{
        this.shoeTag = data.Shoes.tag;
        this.shoeLink = data.Shoes.link;
        this.shoeProducts = data.Shoes.productList;
        this.laptopTag = data.Laptops.tag;
        this.laptopLink = data.Laptops.link;
        this.laptopProducts = data.Laptops.productList;
        this.chairTag = data.Chairs.tag;
        this.chairLink = data.Chairs.link;
        this.chairProducts = data.Chairs.productList;
      },
      error:(error:any)=>{console.log(error)}
    })
  }

}
