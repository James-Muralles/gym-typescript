// standard for typescript is that you can capitalize this
export enum SelectedPage{
    Home = 'home',
    Benefits = 'benefits',
    OurClasses = 'ourclasses',
    ContactUs = 'contactus',
  
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }