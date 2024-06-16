export interface SocialAppCallBackType {
  callback: (tab: number) => void;
  name: string;
}

export interface SocialAppTabContentProp {
  activeTab: number;
}

export interface HeaderWithIconPropsTypes {
  setIsOpen: (parameter: boolean) => void;
  isOpen: boolean;
  Heading: string;
}

export interface MyProfileClassCollapseProp {
  isFilter: boolean;
}

export interface PeopleYouMayKnowProp {
  heading: string;
  ids?: number[];
}

export interface MyActivityProp {
  heading: string;
}
