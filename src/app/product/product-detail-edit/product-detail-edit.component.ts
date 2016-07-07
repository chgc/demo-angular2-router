import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-product-detail-edit',
  templateUrl: 'product-detail-edit.component.html',
  styleUrls: ['product-detail-edit.component.css']
})
export class ProductDetailEditComponent implements OnInit, OnDestroy {

  sub: any;
  id: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.router.routerState.parent(this.route).params.subscribe(params => {
      this.id = params["id"];
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
