import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // // access itself params
    // this.route.params.subscribe(params=>{
    //   this.id = params["id"];
    // })
    // access parent params
    this.router.routerState.parent(this.route).params.subscribe(params => {
      this.id = params["id"];
      console.log(this.id);
    })
  }

}
