import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
  @Input() label?: string;

  ngOnInit(): void {
    if (this.label == null) {
      throw new Error('app-section-header, [label] attribute is required');
    }
  }

}
