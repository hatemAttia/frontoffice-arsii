import { Component, OnInit, HostListener,ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
})
export class BaseComponent implements AfterViewInit {
  isScrolled = false;
  private isMobileNavOpen = false;
  private navbarlinks?: NodeListOf<HTMLAnchorElement>;

  constructor(private renderer: Renderer2, 
    private el: ElementRef,
    private router: Router,
    private route: ActivatedRoute ) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (this.router.url === '/') {
            this.navbarlinksActive();
          } else {
            this.resetNavbarlinks();
          }
        }
      });
     }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (window.scrollY > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }


  private navbarlinksActive = () => {
    if (!this.navbarlinks) return;

    const position = window.scrollY + 200;
    this.navbarlinks.forEach(navbarlink => {
      if (!(navbarlink instanceof HTMLAnchorElement)) return;

      if (!navbarlink.hash) return;
      const section = document.querySelector(navbarlink.hash);
      
      
      if (!(section instanceof HTMLElement)) return;
      
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  }
  private resetNavbarlinks() {
    if (!this.navbarlinks) return;

    this.navbarlinks.forEach(navbarlink => {
      navbarlink.classList.remove('active');
    });
  }

  ngAfterViewInit(): void {
    this.navbarlinks = this.el.nativeElement.querySelectorAll('#navbar .scrollto');
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

    this.navbarlinksActive();
  
    window.addEventListener('load', this.navbarlinksActive);
    window.addEventListener('scroll', this.navbarlinksActive);
    
  }

  private toggleMobileNav() {
    const navbar = this.el.nativeElement.querySelector('#navbar');
    navbar.classList.toggle('navbar-mobile');

    const toggleButton = this.el.nativeElement.querySelector('.mobile-nav-toggle');
    toggleButton.classList.toggle('bi-list');
    toggleButton.classList.toggle('bi-x');
    this.isMobileNavOpen = !this.isMobileNavOpen;

    const signInLinks = this.el.nativeElement.querySelectorAll('.signin .scrollto');
    const mobileNavbar = this.el.nativeElement.querySelector('#navbar .mobile-nav-toggle ul');
    
    signInLinks.forEach((link: HTMLElement) => {
      if (this.isMobileNavOpen) {
        mobileNavbar.appendChild(link.cloneNode(true)); 
        link.remove(); 
      } 
    });
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
