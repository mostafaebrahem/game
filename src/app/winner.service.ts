import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WinnerService {
  gif:any[];
  constructor() {
    this.gif=[
      '<iframe src="https://giphy.com/embed/xT0GqssRweIhlz209i" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/breaking-bad-bryan-cranston-i-won-xT0GqssRweIhlz209i">via GIPHY</a></p>',
      '<iframe src="https://giphy.com/embed/xT0GqssRweIhlz209i" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/breaking-bad-bryan-cranston-i-won-xT0GqssRweIhlz209i">via GIPHY</a></p>',
      '<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="270" src="https://giphy.com/embed/Atx1IgqtSq7B5MB3BN/video" width="480"></iframe></div>',
      '<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="270" src="https://giphy.com/embed/QmsKHne6U8no0BXbk3/video" width="480"></iframe></div>',
      '<iframe src="https://giphy.com/embed/ZcUGu59vhBGgbBhh0n" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/barstoolsports-gambling-barstool-beadvised-ZcUGu59vhBGgbBhh0n">via GIPHY</a></p>'


  ]
  }
}
