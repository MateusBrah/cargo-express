export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
    }
  }
}


type NavigateParams = {
  home: undefined,

};

type ScreenName = keyof NavigateParams;