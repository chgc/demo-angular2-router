import { RouterConfig } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list';
import { ProductDetailComponent } from './product-detail';
import { ProductDetailEditComponent } from './product-detail-edit';
// url: /product
// url: /product/detail
export const ProductRoutes: RouterConfig = [
  {
    path: 'product',
    component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      {
        path: 'detail/:id',
        children: [
          { path: '', component: ProductDetailComponent },
          { path: 'edit', component: ProductDetailEditComponent }
        ]
      },
    ]
  }
];
