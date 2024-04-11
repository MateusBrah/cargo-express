export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      startroute: {
        courseIndex: number;
      };
    }
  }
}


type NavigateParams = {
  home: undefined,
  startroute: { courseIndex: number },
};

type ScreenName = keyof NavigateParams;