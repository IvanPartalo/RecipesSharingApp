import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedRecipesComponent } from './bookmarked-recipes.component';

describe('BookmarkedRecipesComponent', () => {
  let component: BookmarkedRecipesComponent;
  let fixture: ComponentFixture<BookmarkedRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkedRecipesComponent]
    });
    fixture = TestBed.createComponent(BookmarkedRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
