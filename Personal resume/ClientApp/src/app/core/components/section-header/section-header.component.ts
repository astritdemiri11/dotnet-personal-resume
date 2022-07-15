import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
  @Input() name?: string;

  ngOnInit(): void {
    if (this.name == null) {
      throw new Error('app-section-header, [name] attribute is required');
    }
  }

}
