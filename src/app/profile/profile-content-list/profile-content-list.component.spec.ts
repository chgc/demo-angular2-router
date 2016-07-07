/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProfileContentListComponent } from './profile-content-list.component';

describe('Component: ProfileContentList', () => {
  it('should create an instance', () => {
    let component = new ProfileContentListComponent();
    expect(component).toBeTruthy();
  });
});
