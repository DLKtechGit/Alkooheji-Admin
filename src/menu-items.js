const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Menus',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/default'
        },
      
      ]
    },


    {
      id:'users',
      title: 'Users',
      type:'group',
      icon:'icon-user',
      children:[
        {
          id:'creteuset',
          title:'Create Users',
          type:'item',
          icon:'feather icon-user-plus',
          url:'/create/user'
        
        },
        
        {
          id:'list',
          title:'Users List',
          type:'item',
          icon:"feather icon-list",
          url:'/users/list'
        }
        ,{
          id:'manageuser',
          title:'Manage Users',
          type:'item',
          icon:'feather icon-edit',
          url:'/manage/users'
        },
      ]
    }
    ,
    // {
    //   id: 'ui-forms',
    //   title: 'FORMS & TABLES',
    //   type: 'group',
    //   icon: 'icon-group',
    //   children: [
    //     {
    //       id: 'forms',
    //       title: 'Form Elements',
    //       type: 'item',
    //       icon: 'feather icon-file-text',
    //       url: '/forms/form-basic'
    //     },
    //     {
    //       id: 'table',
    //       title: 'Table',
    //       type: 'item',
    //       icon: 'feather icon-server',
    //       url: '/tables/bootstrap'
    //     }
    //   ]
    // },
    
    // {
    //   id: 'pages',
    //   title: 'Pages',
    //   type: 'group',
    //   icon: 'icon-pages',
    //   children: [
    //     {
    //       id: 'auth',
    //       title: 'Authentication',
    //       type: 'collapse',
    //       icon: 'feather icon-lock',
    //       badge: {
    //         title: 'New',
    //         type: 'label-danger'
    //       },
    //       children: [
    //         {
    //           id: 'signup-1',
    //           title: 'Sign up',
    //           type: 'item',
    //           url: '/auth/signup-1',
    //           target: true,
    //           breadcrumbs: false
    //         },
    //         {
    //           id: 'signin-1',
    //           title: 'Sign in',
    //           type: 'item',
    //           url: '/auth/signin-1',
    //           target: true,
    //           breadcrumbs: false
    //         }
    //       ]
    //     },
        
        
    //   ]
    // }
  ]
};

export default menuItems;
