import React, {useEffect} from 'react';
import {useUrlSearchParams} from 'use-url-search-params';
import AppContentView from '@crema/components/AppContentView';
import generateRoutes from '@crema/helpers/RouteGenerator';
import {Layouts} from '@crema/components/AppLayout';
import {useAuthUser} from '@crema/hooks/AuthHooks';
import {
  useLayoutActionsContext,
  useLayoutContext,
} from '@crema/context/AppContextProvider/LayoutContextProvider';
import {useSidebarActionsContext} from '@crema/context/AppContextProvider/SidebarContextProvider';
import {
  anonymousStructure,
  authorizedStructure,
  publicStructure,
} from '../AppRoutes';
import {useRoutes} from 'react-router-dom';
import routesConfig from '../AppRoutes/routeConfig';
import {initialUrl} from '@crema/constants/AppConst';
import {useNavigate} from 'react-router-dom';

const AppLayout = () => {
  const {navStyle} = useLayoutContext();
  const navigate = useNavigate();

  const {user} = useAuthUser();
  const {updateNavStyle} = useLayoutActionsContext();
  const {updateMenuStyle, setSidebarBgImage} = useSidebarActionsContext();
  const AppLayout = Layouts[navStyle];
  const [params] = useUrlSearchParams();

  const jwtToken = sessionStorage.getItem('jwt_token');
  let isAuthenticated = false;

  if (jwtToken) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  const roles = sessionStorage.getItem('roles');
  const userRoles = roles ? JSON.parse(roles) : [];

  console.log(JSON.stringify(userRoles), 'userROles');

  const initURL = params?.redirect ? params?.redirect : initialUrl;
  // const loginUrl = `/signin?redirect=${window.location.pathname}`;
  let loginUrl;

  if (isAuthenticated) {
    if (userRoles.includes('user')) {
      let targetURl = '/signin/dashboards/academy';
      loginUrl = targetURl;
    } else if (userRoles.includes('admin')) {
      let targetURl = 'signin/ecommerce/product-listing';
      loginUrl = targetURl;
    } else if (userRoles.includes('coordinator')) {
      let targetURl = 'signin/ecommerce/Coordinator';
      loginUrl = targetURl;
    } else {
      let targetURl = 'signin/ecommerce/Creator';
      loginUrl = targetURl;
    }
    console.log(loginUrl, 'loginUrl');
  }

  const generatedRoutes = generateRoutes({
    isAuthenticated: isAuthenticated,
    userRole: user?.role,
    anonymousStructure: anonymousStructure(initURL),
    authorizedStructure: authorizedStructure(loginUrl),
    publicStructure: publicStructure(initURL),
  });

  const routes = useRoutes(generatedRoutes);
  useEffect(() => {
    if (params.layout) updateNavStyle(params.layout);
    if (params.menuStyle) updateMenuStyle(params.menuStyle);
    if (params.sidebarImage) setSidebarBgImage(true);
  }, [
    params.layout,
    params.menuStyle,
    params.sidebarImage,
    updateNavStyle,
    updateMenuStyle,
    setSidebarBgImage,
  ]);

  const filteredRoutesConfig = routesConfig
    .map((group) => {
      let children = group.children;

      // Apply conditions based on user roles
      if (isAuthenticated) {
        // For 'user' role
        if (userRoles.includes('user') && group.id === 'apps') {
          // Filter out specific tabs for 'user'
          children = children.filter((child) => child.id === 'ecommerce');
        }

        // For 'admin' role
        if (userRoles.includes('admin')) {
          if (group.id === 'apps') {
            // Filter out specific tabs for 'admin'
            children = children.filter(
              (child) => child.id === 'admin-ecommerce',
            );
          }

          if (group.id === 'app') {
            // Exclude 'Application' group for 'admin' role
            return null; // Return null to exclude this group
          }
        }

        // for Coordinator role
        if (userRoles.includes('coordinator')) {
          if (group.id === 'apps') {
            // Filter out specific tabs for 'admin'
            children = children.filter((child) => child.id === 'coordinator');
          }

          if (group.id === 'app') {
            // Exclude 'Application' group for 'admin' role
            return null; // Return null to exclude this group
          }
        }
        if (userRoles.includes('creator')) {
          if (group.id === 'apps') {
            // Filter out specific tabs for 'admin'
            children = children.filter((child) => child.id === 'Creator');
          }

          if (group.id === 'app') {
            // Exclude 'Application' group for 'admin' role
            return null; // Return null to exclude this group
          }
        }
      }

      // Return the group with updated children
      return {...group, children};
    })
    .filter(Boolean);
  return (
    <>
      {isAuthenticated ? (
        <AppLayout routes={routes} routesConfig={filteredRoutesConfig} />
      ) : (
        <AppContentView routes={routes} />
      )}
    </>
  );
};

export default AppLayout;
