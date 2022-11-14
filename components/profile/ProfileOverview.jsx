import Link from 'next/link';
import {A, P1} from '../base/base';
import { StyledProfileOverview } from './styled/StyledProfileOverview';

const ProfileOverview = () => {
return ( <StyledProfileOverview>
  <P1>
    Hello, I am Jeremy Carpenter,  a web developer based in Cleveland, Ohio. 
    Sharpened by 7 years of implementing software as a consultant gathering requirements, 
    designing, and building solutions, I am now realizing a long time dream to build the software itself.  
    Prior to this, I consulted across the entire software development lifecycle  complimenting and leading 
    teams of other consultants and customers as we built solutions for integrating, modeling, and reporting 
    on data used for financial reporting, budgeting, and forecasting.  I enjoyed and excelled at this challenging 
    work, but software development was calling me.
  </P1>
  <P1>
    Lately I have been focused on writing reusuable components with the React framework and refining the <Link passHref href='https://www.npmjs.com/package/@carpenjk/prop-x'><A target="_blank">prop-x</A></Link> and <Link passHref href='https://www.npmjs.com/package/@carpenjk/themeweaver'><A target="_blank">themeweaver</A></Link> libraries 
    I created for using responsive properties and theming reusable components.
  </P1>
  <P1>
    In my spare time I enjoy, taking on new hobbies and can often be found paddling my kayak around Lake Erie or sliding down a mountain on skis.
  </P1>
  </StyledProfileOverview> );
};
export default ProfileOverview;