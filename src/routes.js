
// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import OtherTeams from "layouts/otherTeams";

import IssueSearch from "layouts/issue";
import Myteam from "layouts/myteam";

import IssueSearchid from "layouts/issue/index";

import Members from "layouts/myteam";

import Billing from "layouts/billing";
import notifications from "layouts/notifications";
import RTL from "layouts/rtl";
import Issue from "layouts/Board";
import IssueManage from "layouts/issue-manage";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Rejoin from "layouts/authentication/rejoin";
import Home from "layouts/home";
import Pm from "layouts/pm";

import Projects from "layouts/project"
import CreateGroup from "layouts/authentication/sign-up/creategroup";
import JoinGroup from "layouts/authentication/sign-up/joingroup";

import ReCreateGroup from "layouts/authentication/rejoin/creategroup";
import ReJoinGroup from "layouts/authentication/rejoin/joingroup";
import CreateRelease from "layouts/release/create";

import NewProject from "layouts/project/pages/newProject";
import MyPage from "layouts/project/pages/myPage";
import HomeCustom from "./layouts/homepage/index";

// @mui icons
import Icon from "@mui/material/Icon";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Release from "layouts/release";
import ViewRelease from "layouts/release/create";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Members' Info",
    key: "memberinfo",
    icon: <Icon fontSize="small">groups</Icon>,
    route: "/members",
    component: <Members />,
  },
  {
    type: "collapse",
    name: "Members' Project",
    key: "memberproject",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/members-project",
    component: <OtherTeams />,
  },

  {
    type: "collapse",
    name: "Search Issues",
    key: "issueSearch",
    icon: <Icon fontSize="small">search</Icon>,
    route: "/issuesearch",
    component: <IssueSearch />,
  },
  {
    type: "collapse",
    name: "Manage Issues",
    key: "issuemenage",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/issuemanagement",
    component: <IssueManage />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Release Note",
    key: "release",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/release",
    component: <Release />,
  },
  {
    type: "collapse",
    name: "PM",
    key: "pm",
    icon: <ManageAccountsIcon fontSize="small">pm</ManageAccountsIcon>,
    route: "/PM",
    component: <Pm />,
  },
  {
    type: "collapse",
    name: "Log out",
    key: "log-out",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "",
    name: "",
    key: "manage-project",
    icon: "",
    route: "/home/manage-project", // 상위 페이지 URL
    component: <Projects />,
  },
  {
    type: "",
    name: "",
    key: "sign-up",
    icon: "",
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "",
    name: "",
    key: "create-group",
    icon: "",
    route: "/authentication/sign-up/create-group",
    component: <CreateGroup />,
  }, {
    type: "",
    name: "",
    key: "join-group",
    icon: "",
    route: "/authentication/sign-up/join-group",
    component: <JoinGroup />,
  },
  {
    type: "",
    name: "",
    key: "rejoin",
    icon: "",
    route: "/authentication/rejoin",
    component: <Rejoin />,
  },
  {
    type: "",
    name: "",
    key: "rejoin",
    icon: "",
    route: "/authentication/rejoin/create-group",
    component: <ReCreateGroup />,
  }, {
    type: "",
    name: "",
    key: "join-group",
    icon: "",
    route: "/authentication/rejoin/join-group",
    component: <ReJoinGroup />,
  },
  {
    type: "",
    name: "",
    key: "create-release",
    route: "/release/create",
    component: <CreateRelease />
  },
  {
    type: "",
    name: "",
    key: "/issuesearch-id",
    route: "/issuesearch/:id", // Use ":id" as a placeholder for the dynamic parameter
    component: <IssueSearchid />,
  },
  {
    type: "",
    name: "",
    key: "home",
    icon: "",
    route: "/home/project/new",
    component: <NewProject />,
  },
  {
    type: "",
    name: "",
    key: "home",
    icon: "",
    route: "/home/mypage",
    component: <MyPage />,
  },
  {
    type: "",
    name: "home",
    key: "home",
    icon: "",
    route: "/home",
    component: <HomeCustom />,
  },
];


export default routes;
