import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./guard";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { LoginComponent } from "./pages/login/login.component";

import { UserInfoComponent } from "./pages/user-info/user-info.component";
import { UserLoginComponent } from "./pages/user-login/user-login.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: MainLayoutComponent,
        loadChildren: () =>
          import("./main-layout/main-layout.module").then(
            (m) => m.MainLayoutModule
          ),
      },
    ],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "user-login",
    component: UserLoginComponent,
  },
  {
    path: "user-info/:id",
    component: UserInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
