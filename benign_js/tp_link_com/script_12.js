/* 元のURL: https://tp-link.com */

  typeof tp != 'undefined' && tp.fixedView.add({
    position: 'center',
    dom: '',
    priority: 99999,
    cookieName: 'accepted_local_switcher'
  });
  if(!(/modeltype=/i.test(location.search) || /type=iframe/.test(location.search)) && typeof tp != 'undefined'){
    tp.fixedView.show()
  }


