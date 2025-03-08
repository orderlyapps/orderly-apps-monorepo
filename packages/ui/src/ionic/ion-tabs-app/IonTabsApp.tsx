import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { homeOutline, settingsOutline } from "ionicons/icons";
import { lazy, LazyExoticComponent, Suspense } from "react";
import { LoadingSpinner } from "../loading-spinner/LoadingSpinner.js";

import "./ionicInit.js";
import { useInit } from "./useInit.js";

export const IonTabsApp = ({
  pages = defaultPages,
}: {
  pages?: IonTabsAppPage[];
}) => {
  useInit();

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {pages.map(({ Component, path }: any, index: number) => (
              <Route exact path={path} key={index}>
                <Suspense fallback={<LoadingSpinner />}>
                  <Component />
                </Suspense>
              </Route>
            ))}
            <Route exact path="/">
              <Redirect
                to={pages.find(({ redirect }) => redirect)?.path || "/home"}
              />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            {pages
              .filter(({ tab }: any) => !!tab)
              .map(({ tab, path, icon }: any, index: number) => (
                <IonTabButton tab={tab} key={index} href={path}>
                  <IonIcon aria-hidden="true" icon={icon} />
                  <IonLabel>{tab}</IonLabel>
                </IonTabButton>
              ))}
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

const defaultPages = [
  {
    path: "/home",
    tab: "Home",
    icon: homeOutline,
    Component: lazy(() =>
      import("./home.js").then((module) => ({ default: module.Home }))
    ),
    redirect: true,
  },
  {
    path: "/settings",
    tab: "Settings",
    icon: settingsOutline,
    Component: lazy(() =>
      import("./settings.js").then((module) => ({ default: module.Settings }))
    ),
  },
];

export type IonTabsAppPage = {
  path: string;
  tab?: string;
  icon?: string;
  Component: LazyExoticComponent<() => JSX.Element>;
  redirect?: boolean;
};
