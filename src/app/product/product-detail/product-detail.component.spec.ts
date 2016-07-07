/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';

describe('Component: ProductDetail', (router: ActivatedRoute) => {
  it('should create an instance', () => {
    let component = new ProductDetailComponent(router);
    expect(component).toBeTruthy();
  });
});
