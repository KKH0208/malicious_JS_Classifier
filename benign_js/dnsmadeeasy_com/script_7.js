/* 元のURL: https://dnsmadeeasy.com */
// 外部JS: https://dnsmadeeasy.com/wp-content/plugins/ele-custom-skin/assets/js/ecs.js?ver=3.1.9

var ECS_hooks = {};

var ECS_Columns_Count=0;

function ECS_add_action(name, func) {
  if(!ECS_hooks[name]) ECS_hooks[name] = [];
  ECS_hooks[name].push(func);
}

function ECS_do_action(name, ...params){
  if(ECS_hooks[name]) 
     ECS_hooks[name].forEach(func => func(...params));
}

