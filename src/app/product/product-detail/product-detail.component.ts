import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      console.log(this.id);
    })
  }

}
