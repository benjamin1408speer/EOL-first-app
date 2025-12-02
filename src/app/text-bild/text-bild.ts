import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, UrlSegment } from '@angular/router';
import { Content, ContentA } from '../models/content.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data-service';

@Component({
  selector: 'app-text-bild',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './text-bild.html',
  styleUrl: './text-bild.css',
})
export class TextBild {
  route = inject(ActivatedRoute)
  dataservice = inject(DataService)

  myurl: UrlSegment[] = []
  
  ocean: ContentA | undefined = {
    id: '',
    title: '',
    text: '',
    image: ''
  }
  ngOnInit() {
    this.fullUrl()
    let fupa = this.fullUrlArr()
    this.myurl = this.route.snapshot.url
    let oceanName = this.myurl[1].path
    
    this.ocean =  this.dataservice.GetOcean(oceanName)
  }

  fullUrl() {
    let fullUrlPath = this.route.snapshot.pathFromRoot
      .map(ele => ele.url)
      .map(urlobj => urlobj.filter(upath => upath.path).join('/'))
      .join('/')
    console.log('text-bild:', fullUrlPath)
    return fullUrlPath
  }

  fullUrlArr(): string[] {
    let fullUrlPathArr: string[] = []
    this.route.snapshot.pathFromRoot
      .map(ele => ele.url)
      .map(urlobj => urlobj.filter(upath => fullUrlPathArr.push(upath.path)))

    console.log('text-bild:', fullUrlPathArr)
    return fullUrlPathArr
  }



  
}
