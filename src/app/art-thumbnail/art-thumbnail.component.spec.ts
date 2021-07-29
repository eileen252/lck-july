import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtThumbnailComponent } from './art-thumbnail.component';

describe('ArtThumbnailComponent', () => {
  let component: ArtThumbnailComponent;
  let fixture: ComponentFixture<ArtThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
