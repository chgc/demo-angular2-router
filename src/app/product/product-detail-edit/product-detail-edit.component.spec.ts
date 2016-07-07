/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProductDetailEditComponent } from './product-detail-edit.component';

describe('Component: ProductDetailEdit', () => {
  it('should create an instance', () => {
    let component = new ProductDetailEditComponent();
    expect(component).toBeTruthy();
  });
});
