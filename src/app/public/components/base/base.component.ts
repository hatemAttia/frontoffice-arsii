import { Component, OnInit, HostListener,ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
})
export class BaseComponent implements OnInit {
  isScrolled = false;
  private isMobileNavOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (window.scrollY > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.el.nativeElement.querySelector('.mobile-nav-toggle')
      .addEventListener('click', (e: Event) => {
        this.toggleMobileNav();
      });


    const dropdownLinks = this.el.nativeElement.querySelectorAll('.navbar .dropdown > a');
    dropdownLinks.forEach((link: HTMLElement) => {
      link.addEventListener('click', (e: Event) => {
        this.activateMobileNavDropdown(link);
        // this.toggleMobileNav();
      });
    });
  }

  private toggleMobileNav() {
    const navbar = this.el.nativeElement.querySelector('#navbar');
    navbar.classList.toggle('navbar-mobile');

    const toggleButton = this.el.nativeElement.querySelector('.mobile-nav-toggle');
    toggleButton.classList.toggle('bi-list');
    toggleButton.classList.toggle('bi-x');
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  private activateMobileNavDropdown(link: HTMLElement) {
    const navbar = this.el.nativeElement.querySelector('#navbar');
    if (navbar.classList.contains('navbar-mobile')) {
      if (event) {
        event.preventDefault();
      }
      const dropdownContent = link.nextElementSibling;
      if (dropdownContent) {
        dropdownContent.classList.toggle('dropdown-active');
      }
    }
  }



}
