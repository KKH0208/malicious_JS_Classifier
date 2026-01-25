/* 元のURL: https://media.net */

  var selectInputAll = document.querySelectorAll('select[data-custom-select="true"]');
  var choicesObj = [];
  for (var i = 0; i < selectInputAll.length; i++) {
    choicesObj[i] = new Choices(selectInputAll[i], {
      allowHTML: true,
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: '',
    });
  }


