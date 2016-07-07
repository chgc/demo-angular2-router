/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProductDetailEditComponent } from './product-detail-edit.component';

describe('Component: ProductDetailEdit', (route: ActivatedRoute, router: Router) => {
  it('should create an instance', () => {
    let component = new ProductDetailEditComponent(route, router);
    expect(component).toBeTruthy();
  });
});
