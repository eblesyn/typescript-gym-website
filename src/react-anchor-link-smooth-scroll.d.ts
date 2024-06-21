declare module 'react-anchor-link-smooth-scroll' {
    import * as React from 'react';
  
    interface AnchorLinkProps extends React.HTMLProps<HTMLAnchorElement> {
      href: string;
      offset?: () => number;
      onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    }
  
    const AnchorLink: React.FC<AnchorLinkProps>;
  
    export default AnchorLink;
  }
  