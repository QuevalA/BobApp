import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {JokesService} from "./services/jokes.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule,
      MatToolbarModule,
      MatIconModule,
      MatDividerModule,
      MatCardModule,
      MatButtonModule],
      providers: [JokesService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
