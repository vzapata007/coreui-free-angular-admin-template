import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Social-Work',
    },
    children: [
      {
        path: '',
        redirectTo: 'clients',
        pathMatch: 'full',
      },
      {
        path: 'clients',
        loadComponent: () =>
          import('./clients/clients.component').then((m) => m.ClientsComponent),
        data: {
          title: 'Clients',
        },
      },
      {
        path: 'beneficiaries',
        loadComponent: () =>
          import('./beneficiaries/beneficiaries.component').then(
            (m) => m.BeneficiariesComponent
          ),
        data: {
          title: 'Beneficiaries',
        },
      },
      {
        path: 'cases',
        loadComponent: () =>
          import('./cases/cases.component').then((m) => m.CasesComponent),
        data: {
          title: 'Cases',
        },
      },
      {
        path: 'teams',
        loadComponent: () =>
          import('./teams/teams.component').then((m) => m.TeamsComponent),
        data: {
          title: 'Teams',
        },
      },
      {
        path: 'sessions',
        loadComponent: () =>
          import('./sessions/sessions.component').then(
            (m) => m.SessionsComponent
          ),
        data: {
          title: 'Sessions',
        },
      },
      {
        path: 'alerts',
        loadComponent: () =>
          import('./alerts/alerts.component').then((m) => m.AlertsComponent),
        data: {
          title: 'Alerts',
        },
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./services/services.component').then(
            (m) => m.ServicesComponent
          ),
        data: {
          title: 'Services',
        },
      },
    ],
  },
];
