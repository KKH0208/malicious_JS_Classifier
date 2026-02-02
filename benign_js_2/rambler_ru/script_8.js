/* 元のURL: https://rambler.ru */
(path => {
  const injectNode = data => {
    const x = document.createElement('x');
    x.innerHTML = data;
    const children = x.querySelector('svg');
    if (children) {
      children.style.position = 'absolute';
      children.style.width = '0';
      children.style.height = '0';
      children.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
      document.body.insertBefore(children, document.body.firstChild);
    }
  };
  const xhr = new XMLHttpRequest();
  xhr.open('GET', path, true);
  xhr.onload = () => injectNode(xhr.response);
  xhr.send();
})('/static/media/sprite-icons.bad8af452bd6637cd60d.svg')

