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
    { path: '', component: IndexComponent, title: '' },
    { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio | Couscous Academy ' },
    { path: 'portfolio-detail', component: PortfolioDetailComponent, title: 'Portfolio Detail | Couscous Academy' },
    { path: 'services', component: ServicesComponent, title: 'Evenements | Couscous Academy ' },
    { path: 'services-detail', component: ServicesDetailComponent, title: 'Services Detail | Couscous Academy' },
    { path: 'team', component: TeamComponent, title: 'Chefs | Couscous Academy' },
    { path: 'about-us', component: AboutUsComponent, title: 'A propos | Couscous Academy' },
    { path: 'career', component: CareerComponent, title: 'Career | Couscous Academy' },
    { path: 'contact-us', component: ContactUsComponent, title: 'Contact Us | ' },
    { path: 'terms-conditions', component: TermsConditionsComponent, title: 'Terms Conditions | ' },
    { path: 'privacy-policy', component: PrivacyPolicyComponent, title: 'Privacy Policy | ' },
    { path: 'faq', component: FaqComponent, title: 'FAQs | ' },
    { path: 'blog', component: BlogComponent, title: 'Blog | Couscous Academy' },
    { path: 'blog-details', component: BlogDetailsComponent, title: 'Blog Details | ' },
    { path: 'crypto', component: CryptoComponent, title: 'Crypto | ' },
    { path: 'real-estate', component: RealEstateComponent, title: 'Real Estate | ' },
    { path: 'modern-saas', component: ModernSaasComponent, title: 'Modern SAAS | ' },
    { path: 'healthcare', component: HealthcareComponent, title: 'Health Care | ' },
    { path: 'hotel-resort', component: HotelResortComponent, title: 'Hotel & Resort | ' },
    { path: 'marketing', component: MarketingComponent, title: 'Marketing | ' },
    { path: 'application', component: ApplicationComponent, title: 'Application | ' },
    { path: 'nft', component: NftComponent, title: 'Nft | ' },
    { path: 'blog-landing', component: BlogLandingComponent, title: 'Blog | Couscous Academy' },
    { path: 'construction', component: ConstructionComponent, title: 'Construction | ' },
    { path: 'consulting', component: ConsultingComponent, title: 'Consulting | ' },
    { path: 'creative-agency', component: CreativeComponent, title: 'Creative Agency | ' },
    { path: 'event-concert', component: EventComponent, title: 'Event Concert | ' },
    { path: 'gym', component: GymComponent, title: 'GYM | ' },
    { path: 'insurance', component: InsuranceComponent, title: 'Insurance | ' },
    { path: 'job-placement', component: JobPlacementComponent, title: 'Job Placement | ' },
    { path: 'online-courses', component: OnlineCoursesComponent, title: 'Online Courses | ' },
    { path: 'online-payments', component: OnlinePaymentsComponent, title: 'Online Payments | ' },
    { path: 'personal-portfolio', component: PersonalPortfolioComponent, title: 'Personal Portfolio | ' },
    { path: 'restaurant', component: RestaurantComponent, title: 'Accueil | Couscous Academy' },
    { path: 'portfolio-landing', component: PortfolioLandingComponent, title: 'Portfolio Landing | ' },
    { path: 'photography', component: PhotographyComponent, title: 'Photography | ' },
    { path: '**', component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
