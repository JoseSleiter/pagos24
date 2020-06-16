import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  language = []
  selected = ''

  constructor(private router: Router,private languageService:LanguageService) { }

  ngOnInit() {
    this.language = this.languageService.getLanguage()
    this.selected = this.languageService.selected 
  }

  goLogin(language:String){
    this.languageService.setLanguage(language)

    this.router.navigate(['/login']);

  }

}
