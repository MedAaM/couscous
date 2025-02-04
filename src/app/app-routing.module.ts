import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index';
import { ErrorComponent } from './error';
import { PortfolioComponent } from './portfolio';
import { PortfolioDetailComponent } from './portfolio-detail';
import { ServicesComponent } from './services';
import { ServicesDetailComponent } from './services-detail';
import { TeamComponent } from './team';
import { AboutUsComponent } from './about-us';
import { CareerComponent } from './career';
import { ContactUsComponent } from './contact-us';
import { TermsConditionsComponent } from './terms-conditions';
import { PrivacyPolicyComponent } from './privacy-policy';
import { FaqComponent } from './faq';
import { BlogComponent } from './blog';
import { BlogDetailsComponent } from './blog-details';
import { CryptoComponent } from './crypto';
import { RealEstateComponent } from './real-estate';
import { ModernSaasComponent } from './modern-saas';
import { HealthcareComponent } from './healthcare';
import { HotelResortComponent } from './hotel-resort';
import { MarketingComponent } from './marketing';
import { ApplicationComponent } from './application';
import { NftComponent } from './nft';
import { BlogLandingComponent } from './blog-landing';
import { ConstructionComponent } from './construction';
import { ConsultingComponent } from './consulting';
import { CreativeComponent } from './creative-agency';
import { EventComponent } from './event-concert';
import { GymComponent } from './gym';
import { InsuranceComponent } from './insurance';
import { JobPlacementComponent } from './job-placement';
import { OnlineCoursesComponent } from './online-courses';
import { OnlinePaymentsComponent } from './online-payments';
import { PersonalPortfolioComponent } from './personal-portfolio';
import { RestaurantComponent } from './restaurant';
import { PortfolioLandingComponent } from './portfolio-landing';
import { PhotographyComponent } from './photography';

const routes: Routes = [
    { path: '', component: IndexComponent, title: 'Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'portfolio-detail', component: PortfolioDetailComponent, title: 'Portfolio Detail | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'services', component: ServicesComponent, title: 'Services | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'services-detail', component: ServicesDetailComponent, title: 'Services Detail | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'team', component: TeamComponent, title: 'Team | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'about-us', component: AboutUsComponent, title: 'About Us | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'career', component: CareerComponent, title: 'Career | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'contact-us', component: ContactUsComponent, title: 'Contact Us | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'terms-conditions', component: TermsConditionsComponent, title: 'Terms Conditions | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'privacy-policy', component: PrivacyPolicyComponent, title: 'Privacy Policy | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'faq', component: FaqComponent, title: 'FAQs | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'blog', component: BlogComponent, title: 'Blog | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'blog-details', component: BlogDetailsComponent, title: 'Blog Details | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'crypto', component: CryptoComponent, title: 'Crypto | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'real-estate', component: RealEstateComponent, title: 'Real Estate | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'modern-saas', component: ModernSaasComponent, title: 'Modern SAAS | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'healthcare', component: HealthcareComponent, title: 'Health Care | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'hotel-resort', component: HotelResortComponent, title: 'Hotel & Resort | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'marketing', component: MarketingComponent, title: 'Marketing | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'application', component: ApplicationComponent, title: 'Application | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'nft', component: NftComponent, title: 'Nft | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'blog-landing', component: BlogLandingComponent, title: 'Blog | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'construction', component: ConstructionComponent, title: 'Construction | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'consulting', component: ConsultingComponent, title: 'Consulting | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'creative-agency', component: CreativeComponent, title: 'Creative Agency | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'event-concert', component: EventComponent, title: 'Event Concert | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'gym', component: GymComponent, title: 'GYM | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'insurance', component: InsuranceComponent, title: 'Insurance | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'job-placement', component: JobPlacementComponent, title: 'Job Placement | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'online-courses', component: OnlineCoursesComponent, title: 'Online Courses | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'online-payments', component: OnlinePaymentsComponent, title: 'Online Payments | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'personal-portfolio', component: PersonalPortfolioComponent, title: 'Personal Portfolio | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'restaurant', component: RestaurantComponent, title: 'Restaurant | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'portfolio-landing', component: PortfolioLandingComponent, title: 'Portfolio Landing | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: 'photography', component: PhotographyComponent, title: 'Photography | Plurk – Tailwind CSS Multipurpose Landing Templates' },
    { path: '**', component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
