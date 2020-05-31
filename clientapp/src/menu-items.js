export default {
    items: [
        {
            id: 'navigation',
            title: 'Menuler',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Anasayfa',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'jobs',
            title: 'İş Yönetimi',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'newjobs',
                    title: 'Yeni Bir İş Oluştur',
                    type: 'item',
                    url: '/jobs/new',
                    icon: 'feather icon-box',
                },
                {
                    id: 'jobslist',
                    title: 'İş Listem',
                    type: 'item',
                    url: '/jobs/list',
                    icon: 'feather icon-server',
                }
            ]
        }
    ]
}