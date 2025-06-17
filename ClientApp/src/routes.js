import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

const NewJob = React.lazy(() => import('./Project/Jobs/NewJob'));
const ListJob = React.lazy(() => import('./Project/Jobs/ListJob'));
const RunJob = React.lazy(() => import('./Project/Jobs/RunJob'));
const DetailJob = React.lazy(() => import('./Project/Jobs/DetailJob'));


const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/jobs/new', exact: true, name: 'Yeni Bir İş Oluştur', component: NewJob },
    { path: '/jobs/edit/:id/', exact: true, name: 'İş Düzenle', component: NewJob },
    { path: '/jobs/list', exact: true, name: 'İş Listem', component: ListJob },
    { path: '/jobs/run/:id/', exact: true, name: 'İş Çalıştır', component: RunJob },
    { path: '/jobs/detail/:id/', exact: true, name: 'İş Detayları', component: DetailJob },

];

export default routes;