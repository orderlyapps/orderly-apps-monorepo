import { useParams } from "react-router";
import { LazyExoticComponent } from "react";

export type Route = {
  path: string;
  params?: Record<string, string> | null;
  tab?: string;
  icon?: string;
  Component: LazyExoticComponent<() => JSX.Element>;
  redirect?: boolean;
};

export const getPaths = <R extends { [key: string]: Route }>(routes: R) => {
  return <T extends keyof typeof routes>(
    page: T,
    params?: (typeof routes)[T]["params"] extends null | undefined
      ? null | undefined
      : (typeof routes)[T]["params"]
  ) => {
    // Check if the route exists before accessing its properties
    if (!routes[page]) {
      console.error(`Route for page "${String(page)}" not found`);
      return "/";
    }

    if (params) {
      const query = new URLSearchParams(params);
      return routes[page].path + "/" + query.toString();
    }
    if (routes[page].params) {
      return routes[page].path + "/default";
    }
    return routes[page].path;
  };
};

export const getRoutes = (obj: { [key: string]: Route }): Route[] => {
  return Object.entries(obj).map(([_key, value]) => ({
    path: `${value.path}${value.params ? "/:params" : ""}`,
    Component: value.Component,
    icon: value.icon,
    redirect: value.redirect,
    tab: value.tab,
  }));
};

export const getUseParams = <R extends { [key: string]: Route }>(routes: R) => {
  return <T extends keyof typeof routes>(_page: T) => {
    const { params }: any = useParams();
    const searchParams = new URLSearchParams(params);
    const fObj = Object.fromEntries(searchParams);
    if (fObj.default === "")
      return { default: true } as (typeof routes)[T]["params"] & {
        default: boolean;
      };
    return { default: false, ...fObj } as (typeof routes)[T]["params"] & {
      default: boolean;
    };
  };
};
