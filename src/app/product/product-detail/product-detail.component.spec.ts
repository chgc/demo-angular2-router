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

import { ProductDetailComponent } from './product-detail.component';

describe('Component: ProductDetail', (route: ActivatedRoute, router: Router) => {
  it('should create an instance', () => {
    let component = new ProductDetailComponent(route, router);
    expect(component).toBeTruthy();
  });
});
