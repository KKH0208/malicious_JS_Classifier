/* 元のURL: https://appsflyer.com */
// 外部JS: https://www.appsflyer.com/wp-content/themes/AF2020/assets/js/app.js
'use-strict';

const currentUrl = window.location.host;
const devDomains = [
  'localhost',
  'localhost:3000',
  'appsflyer.local',
  'appsflyer.ddev.site',
];
const environments = {
  local: ['localhost', 'localhost:3000', 'appsflyer.local', 'appsflyer.ddev.site'], 
  staging: ['staging.appsflyer.com'],
  production: ['www.appsflyer.com'],
};
const isLocal = devDomains.some((val) => {
  return currentUrl.includes(val);
});
const getKeyByValue = (o, v) =>
  Object.keys(o).find((k) => o[k].some((r) => r.includes(v)));
const getEnv = () => getKeyByValue(environments, currentUrl);

function getBaseUrl() {
  const urlSettings = {
    baseUrlLocal: ['localhost:3000', 'appsflyer.local', 'appsflyer.local:3000', 'appsflyer.ddev.site'],
    baseUrlStaging:
      getEnv() === 'staging' ? 'staging.appsflyer.com' : 'www.appsflyer.com',
  };
  const protocol = window.location.protocol;
  const path = isLocal
    ? urlSettings.baseUrlLocal.filter(
        (domain) => domain.includes(currentUrl) === true
      )[0] 
    : urlSettings.baseUrlStaging;
  return `${protocol}//${path}`;
}

let throttleWait;

const throttle = (callback, time) => {
  if (throttleWait) return;
  throttleWait = true;
  setTimeout(() => {
    callback;
    throttleWait = false;
  }, time);
};

const handleGatedItemRedirection = async (
  postType,
  postId,
  mainContainerClass
) => {
  const toggleDisplay = (selector, show) =>
    document.querySelector(selector).classList.toggle('d-none', !show);

  try {
    const affCookie = getCookieByName('afforms');
    const formSent =
      new URLSearchParams(window.location.search).get('formsent') === 'true';
    toggleDisplay(`.${mainContainerClass}`, false);
    toggleDisplay('.skeleton', true);

    const response = await fetch(
      `${getBaseUrl()}/wp-json/wp/v2/${postType}/${postId}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const { acf: { gate_page } = {} } = await response.json();

    if (gate_page && affCookie !== '1' && !formSent) {
      window.location.href = gate_page;
    } else {
      toggleDisplay(`.${mainContainerClass}`, true);
      toggleDisplay('.skeleton', false);
    }
  } catch (error) {
    console.error('Error:', error);
    toggleDisplay(`.${mainContainerClass}`, true);
    toggleDisplay('.skeleton', false);
  }
};

 

const pageContent = document.querySelector('.page-content');
const inputs = document.querySelectorAll('.block-library__input');

const navElement = document.querySelector('.block-library__nav');
const toggleButtons = document.querySelectorAll('.block-library__toggle-button');
const hoverLabelsToggleButton = document.querySelector('.block-library__hover-labels-toggle-button');
const blockLibrarySection = document.querySelector('.block-library');
const childElements = document.querySelectorAll('.page-content > *');
 
const toggleInputs = (e) => {
	e.preventDefault();

	if (e.currentTarget.hasAttribute('data-category')) {
		const categoryInputs = document.querySelectorAll(
			'ul[data-category="' +
				e.currentTarget.getAttribute('data-category') +
				'"] .block-library__input'
		);

		if (categoryInputs.length) {
			let checked = false;

			if (e.currentTarget.classList.contains('block-library__show-all')) {
				checked = true;
			}

			categoryInputs.forEach((input) => {
				input.checked = checked;
			});

			changeInput();
		}
	}
};

const changeInput = () => {
	const url = new URL(window.location);

	if (
		hoverLabelsToggleButton &&
		hoverLabelsToggleButton.classList.contains('active')
	) {
		url.searchParams.append('hide-hover-labels', '1');
	} else {
		url.searchParams.delete('hide-hover-labels');
	}

	inputs.forEach((input) => {
		const name = input.getAttribute('name');
		url.searchParams.delete(name);

		if (input.checked) {
			blockLibrarySection.classList.add('visible-' + name);
			url.searchParams.append(name, 'v');
		} else {
			blockLibrarySection.classList.remove('visible-' + name);
			url.searchParams.append(name, 'h');
		}
	});

	window.history.pushState({}, '', url);
};


const hoverLabelsToggle = (e) => {
	if (e.currentTarget.classList.contains('active')) {
		e.currentTarget.classList.remove('active');
		blockLibrarySection.classList.remove('hide-hover-labels');
	} else {
		e.currentTarget.classList.add('active');
		blockLibrarySection.classList.add('hide-hover-labels');
	}

	changeInput();
};

const init = () => {
    if (childElements.length) {
        let blockID = '';
        let blockTitle = '';

        childElements.forEach((childElement) => {
            if (
                childElement.classList.contains(
                    'block-library__section-placeholder'
                )
            ) {
                blockID = childElement.getAttribute('data-block-id');
                blockTitle = childElement.getAttribute('data-block-title');
                childElement.remove();
            } else {
                childElement.setAttribute('data-block-id', blockID);
                childElement.setAttribute('data-block-title', blockTitle);
            }
        });
    }

    if (pageContent && navElement) {
 
    }

    if (inputs.length && blockLibrarySection) {
        inputs.forEach((input) => {
            input.addEventListener('change', changeInput);
        });
    }

    if (toggleButtons.length && blockLibrarySection) {
        toggleButtons.forEach((toggleButton) => {
            toggleButton.addEventListener('click', toggleInputs);
        });
    }

    if (hoverLabelsToggleButton && blockLibrarySection) {
        hoverLabelsToggleButton.addEventListener(
            'click',
            hoverLabelsToggle
        );
    }
}

if(inputs){
	init();
}

(function () {
    if( document.querySelector('.copy-to-clipboard') ) {

        document.querySelector('.copy-to-clipboard').addEventListener('click', function (e){
            e.preventDefault()
        })

        let clipboard = new ClipboardJS('.copy-to-clipboard');

        clipboard.on('success', function (e) {
            e.trigger.innerHTML = (`${e.trigger.innerHTML}<span class="copy-to-clipboard--copied">Copied!</span>`)
            setTimeout( () => { document.querySelector('.copy-to-clipboard--copied').remove() }, 3000)
            e.clearSelection();
        });

        clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
    }
}());

/**
 * FAQ Section
 */

const sectionHolder = document.querySelector('.section-faq')
const sectionItem = sectionHolder && sectionHolder.querySelectorAll('.section-faq__item h3')
if(sectionItem) {
    sectionItem.forEach(item => {
        item.addEventListener('click', event => {
            const parentElement = event.target.parentNode.parentNode
            if(sectionHolder.classList.contains('multi')) {
                sectionItem.forEach(otherItem => otherItem.parentNode.parentNode.classList.remove('on'))
                parentElement.classList.add('on')
            } else {
                parentElement.classList.toggle('on')
            }
        })
    })
}

(function () {

    const productNewsSection = document.querySelector('.product-news-archive');
    if(!productNewsSection){
        return ;
    }
    const getUrl = window.location
    const baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
    const ajaxUrl = baseUrl + "/wp-admin/admin-ajax.php";
    const datesItemsLoader = document.querySelector('.dates-results');
    const itemsHolder = document.getElementById('product-news-archive__items')
    const btnLoadMore = document.querySelector('.product-news-archive__load-more')
    const getItems = () => document.querySelectorAll('.product-news-archive .feed-item')
    let selectedItems = [];

    const helperRemoveObjectByKey = (array, key) => {
        return array.filter(obj => obj.type !== key);
    }
    const handleBtnLoadMoreState = (btnLoadMore, state) => {
        switch (state) {
            case 'loading':
                btnLoadMore.classList.remove('d-none')
                btnLoadMore.disabled = true
                btnLoadMore.innerHTML = `<div class="mr-3">${errorMessages[langCode]['loading']}</div><div class="spinner-border text-primary m-auto d-flex" role="status"><span class="sr-only"></span></div>`
                break;
            case 'loaded':
                btnLoadMore.classList.remove('d-none')
                if (!btnLoadMore.classList.contains('d-flex')) btnLoadMore.classList.add('d-flex')
                btnLoadMore.disabled = false
                btnLoadMore.innerHTML = btnLoadMore.getAttribute('data-button-text')
                break;
            case 'remove':
                if (btnLoadMore.classList.contains('d-flex')) btnLoadMore.classList.remove('d-flex')
                btnLoadMore.classList.add('d-none')
                break;
            default:
                console.log(`Must declare state`);
        }
    } 
    const highLightItem = (value, parent) => {
        if(parent.classList.contains('sidebar-nav__item')){
            const allItems = parent.parentNode.querySelectorAll('li');
            if(parent.classList.contains('active')){
                parent.classList.remove('active')
            }else{
                allItems.forEach(item => {
                    item.classList.remove('active')
                });
                parent.classList.add('active');
            }
        }else{
            const newSelector = document.querySelectorAll(`.sidebar-nav__item a[data-product="${value}"]`);
            newSelector.forEach(item=>{
                const allItems = item.parentNode.parentNode.querySelectorAll('li');
                allItems.forEach(singleItem => {
                    singleItem.classList.remove('active');
                })
                item.parentNode.classList.add('active')
            });
        }
    }
    const handlerSelectedItems = (query, value) => {

        const existingIndex = selectedItems.findIndex(item => item.type === query);
        if (existingIndex !== -1) {
            selectedItems[existingIndex].product = value;
            const newSelected = helperRemoveObjectByKey(selectedItems, 'date')
            selectedItems = newSelected;
        } else{
            selectedItems.push({
                type: query,
                product: value 
            });
        } 
        let articles = itemsHolder.querySelector('article');
        if(articles){
            articles.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }
    const getDatesByTerm = async (queryType, termId) => {
        try {
            const formData = new URLSearchParams();
            formData.append('postType', 'product-news-item');
            formData.append('action', 'af_get_dates_by_term');
            formData.append('termId', termId);
            formData.append('queryType', queryType);
    

            const response = await fetch(ajaxUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                },
                body: formData,
                credentials: 'same-origin',
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const responseData = await response.text();
            
            datesItemsLoader.innerHTML = responseData; 
        } catch (error) { 
            console.error('Error in AJAX request:', error);
        }
    };
    
    const handaleLogic = (type, value, parent) => {
        const isIndexExiast = selectedItems.findIndex(item => item.type === type && item.product === value);
        if(parent.classList.contains('sidebar-nav__item')){
            
            if(!parent.classList.contains('active')){
                if(isIndexExiast !== -1){
                    selectedItems.splice(isIndexExiast, 1);
                    if(type !== 'date'){
                        getDatesByTerm(type, 'all') 
                    }
                } 
            }else{
                if(type !== 'date'){
                    getDatesByTerm(type, value) 
                }
                
            }
        }else{
            const sidebarSelector = document.querySelectorAll(`.sidebar-nav__item a[data-product="${value}"]`);
            sidebarSelector.forEach(item=>{
                const productsSelector = item.parentNode.parentNode
                
                 if(productsSelector.classList.contains('products')){
                    if(type !== 'date'){
                        getDatesByTerm(type, value) 
                    }
                 }
            });
        }
        loadItems(selectedItems, '')
    }
    const loadItems = async (data, actionType)=> {
        itemsHolder.classList.add('loading')
        try {
            const formData = new URLSearchParams();
            formData.append('postType', 'product-news-item');
            formData.append('action', 'af_load_product_news');
            formData.append('data', JSON.stringify(data));
            formData.append('actionType',actionType);
            formData.append('offset', getItems().length);

            const response = await fetch(ajaxUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                },
                body: formData,
                credentials: 'same-origin',
            });

            if (!response.ok) {
                itemsHolder.classList.remove('loading')
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            itemsHolder.classList.remove('loading')
            const responseData = await response.text();
            let itemsBefore = getItems().length

            if (actionType === 'loadMore') {
                itemsHolder.insertAdjacentHTML('beforeend', responseData)
                if (getItems().length - itemsBefore < 6) {
                    handleBtnLoadMoreState(btnLoadMore, 'remove') 
                } else {
                    handleBtnLoadMoreState(btnLoadMore, 'loaded')
                }
            }else{
                itemsHolder.innerHTML = responseData; 
                if (getItems().length < 5) handleBtnLoadMoreState(btnLoadMore, 'remove')
            }
            setTimeout(() => { getItems().forEach(item => item.classList.add('active')) }, 300)
            setTimeout(() => { itemsHolder.classList.remove('loading') }, 300)
            if (getItems().length.toString() === btnLoadMore.getAttribute('data-max-posts')) handleBtnLoadMoreState(btnLoadMore, 'remove')
            
        } catch (error) {
            console.error('Error in AJAX request:', error);
        }
    }  
    const loadMoreHandler = () => {
        loadItems(selectedItems, 'loadMore')
        handleBtnLoadMoreState(btnLoadMore, 'loading')
    }
    const initialize = ()  => {

        productNewsSection.addEventListener('click', function(e){
            const target = e.target;
            const isButton = target.parentNode.classList.contains('sidebar-nav__item') || target.classList.contains('term_filter') || target.classList.contains('product-news-archive__load-more');
            if(isButton){
                e.preventDefault();
                if(!target.classList.contains('product-news-archive__load-more')){
                    const queryType = target.dataset.query;
                    const productValue = target.dataset.product;
                    const buttonParent = target.parentNode; 
                    highLightItem(productValue, buttonParent);
                    handlerSelectedItems(queryType, productValue);
                    handaleLogic(queryType, productValue, buttonParent);   
                }else{
                    loadMoreHandler();
                }
            }
        })
    }

    initialize();
})();

const itemsObj = $('#filter-data').length ? JSON.parse($('#filter-data').val()) : '';
let $container;
let filters = {};
let baseTaxonomy;
let fullTaxonomies = [];
let allItemsLoaded = false;
let elems;
let loadMoreBtn = $('.filter__load-more button');
let filterBtn = '.filter__filter-button';
let visibleItemsCount = () => $('.filter__item').length

const initIsotope = (afterReset) => {

    let comboFilter = getComboFilter(filters);
    $container = $('.filter__items');
    $container.isotope({filter: comboFilter, layoutMode: 'fitRows', itemSelector: '.filter__item', transitionDuration: '0s'});

    if( !afterReset ) {

        $('.filter__filter-panel--values').on('change', function (e) {
            if (!loadMoreBtn.hasClass('d-none')) {
                loadMoreBtn.addClass('d-none').removeClass('d-flex');
            }

            let $checkbox = $(e.target);
            handleFilters($checkbox);
            let comboFilter = getComboFilter(filters);
            $container.isotope({filter: comboFilter, layoutMode: 'fitRows', transitionDuration: '0s'});
            elems = $container.isotope('getFilteredItemElements');

            if (!allItemsLoaded) {
                loadAllItems(e);
                allItemsLoaded = true;
            }

            updateFilters(elems, e);
        })
    }
}

const disableScroll = (action) => {
    document.querySelector('body').dataset.disableScroll = action;
}

const handleFullTaxonomies = (e) => {
    let itemsInGroup = $('input[name="' + e.name + '"]:not(.all)').length;
    let itemsInGroupChecked = $('input[name="' + e.name + '"]:not(.all):checked').length;

    if (itemsInGroup === itemsInGroupChecked || itemsInGroupChecked === 0) {
        $('input[name="' + e.name + '"].all').prop({'checked': true, 'disabled': true})
    }

    if (itemsInGroup === itemsInGroupChecked && itemsInGroupChecked !== 0) {
        baseTaxonomy = ''
        fullTaxonomies.push(e.name)
    } else if (fullTaxonomies.includes(e.name)) {
        fullTaxonomies.splice(fullTaxonomies.indexOf(e.name), 1)
    }
}

const getItems = () => {
    let items = []

    itemsObj.forEach(item => {
        let customClass = item.item_type === 'video' ? 'popup-video' : ''
        let videoIcon = item.item_type === 'video' ? '<i class="ico-video"></i>' : ''
        let image = item.secondary_image.url ? `<img class="bg-image" src="${item.secondary_image.url}" alt="${item.secondary_image.alt}" title="${item.secondary_image.title}" />` : `<img class="bg-image" src="${getBaseUrl()}/wp-content/themes/AF2020/assets/images/img-placeholder.jpg" />`
        let url = item.item_type === 'video' ? `${item.video_url}` : `${item.url}`
        let itemMarkup = `<article id="item-${item.ID}"
         class="feed-item feed-item--layout-2 filter__item feed-item feed-item--layout-2 feed-item--customer align-items-center align-items-sm-start flex-sm-column col-sm-6 col-md-4 mb-30 mb-sm-40 all ${item.industries} ${item.locations} ${item.products}"
         data-customer-industries="${item.industries}"
         data-customer-locations="${item.locations}"
         data-products="${item.products}"
         data-aft="internal-link" 
         data-aft-block="customers-feed">
            <figure class="position-relative overflow-hidden border-radius  ">
                <a href="${url}" class="d-flex d-md-block align-items-md-center ${customClass}">
                    ${videoIcon}
                    ${image}
                </a>
            </figure>
            <header class="d-flex flex-column pt-sm-20 pb-0 pl-20 pl-sm-0">
                <a class="d-flex d-md-block align-items-md-center ${customClass}" href="${url}">
                    <h2 class="d-inline font-weight-bold m-0 pt-2 pt-sm-4">${item.post_title}</h2>
                </a>
            </header>
        </article>`
        items.push(itemMarkup)
    })
    return items
}

const updateFilters = (filterResults, e) => {
    let taxonomy = e.target.name
    handleAllSelected(e)
    handleBaseTaxonomy(taxonomy)
    handleTags(e.target)

    let dataAtts = {}
    let dataAttsUnique = {}

    if(!filterResults) return
    filterResults.forEach(result => {
        Object.entries(result.dataset).forEach((item, index) => {
            dataAtts[item[0]] = !dataAtts[item[0]] ? item[1] : dataAtts[item[0]] += ' ' + item[1];
        })
    })

    Object.entries(dataAtts).forEach(attribute => {
        dataAttsUnique[camelCaseToDash(attribute[0])] = [...new Set(attribute[1].split(' '))]
    })

    if (fullTaxonomies.length > 0) {
        fullTaxonomies.forEach(attribute => {
            let inputs = document.querySelectorAll(`[data-taxonomy="${attribute}"] input`)
            let activeInputs = []

            inputs.forEach(input => {
                input.disabled = !dataAttsUnique[attribute].includes(input.id)
                if (!input.disabled) activeInputs.push(input)
            })
        })
        delete dataAttsUnique[taxonomy]
    }

    if (baseTaxonomy === taxonomy) delete dataAttsUnique[baseTaxonomy]

    Object.entries(dataAttsUnique).forEach(attribute => {
        let inputs = document.querySelectorAll(`[data-taxonomy="${attribute[0]}"] input:not(.all)`)

        inputs.forEach(input => {
            input.disabled = !dataAttsUnique[attribute[0]].includes(input.attributes.id.value)
        })
    })

    let secondaryFilterItems = document.querySelectorAll('input:not([name="' + baseTaxonomy + '"]):not(.all):checked').length

    if (secondaryFilterItems === 0) {
        let items = document.querySelectorAll(`input[name="${baseTaxonomy}"]`)
        items.forEach(i => {
            i.disabled = false
        })
    }
}

const handleClearFiltersBtn = (action) => {
    const clearBtns = document.querySelectorAll('.filter__action--clear-filters')
    const shouldHide = action === 'hide'
    const getDisplayClass = isHidden => isHidden ? 'd-none' : 'd-flex'

    clearBtns.forEach((clearBtn) => {
        const classList = clearBtn.classList
        classList.replace(getDisplayClass(!shouldHide), getDisplayClass(shouldHide))
    })

    if(shouldHide) handleFilterReset()
}

const handleFilterReset = () => {
    $('.filter__items article:nth-child(n+10)').remove()
    allItemsLoaded = false
    initIsotope('afterReset')
    loadMoreBtn.removeClass('d-none').addClass('d-flex')
}

const handleAllSelected = (e) => {
    let isAll = false
    let allBtn = document.querySelector(`input[name="${e.target.name}"].all`)
    let allInputs = document.querySelectorAll(`.filter__filter-panel--value input:not(.all)`)
    let allCheckedInputs = document.querySelectorAll(`.filter__filter-panel--value input:not(.all):checked`).length
    let allTaxInputs = document.querySelectorAll(`input[name="${e.target.name}"]:not(.all):not([disabled])`).length
    let checkedTaxInputs = document.querySelectorAll(`input[name="${e.target.name}"]:checked:not(.all)`).length

    let condition1 = e.target.value === '.all'
    let condition2 = checkedTaxInputs === allTaxInputs
    let condition3 = checkedTaxInputs === 0
    let condition4 = allCheckedInputs === 0
    let showHideClearButton = condition4 ? 'hide' : 'show'

    handleClearFiltersBtn(showHideClearButton)

    if (condition1) {
        e.target.disabled = true
        e.target.checked = true
        let inputs = document.querySelectorAll(`input[name="${e.target.name}"]:not(.all):checked`)
        inputs.forEach(i => i.checked = false )

        if( document.querySelectorAll(`.filter input:not(.all):checked`).length === 0 ) {
            handleFilterReset()
            handleClearFiltersBtn('hide')
        }
        isAll = true
    } else if (condition2 || condition3 || condition4) {
        allBtn.checked = true
        allBtn.disabled = true
        isAll = true

        if (condition4) {

            setTimeout( function (){

                allInputs.forEach(i => {
                    i.disabled = false
                })
            }, 200)
        }
    } else {
        allBtn.checked = false
        allBtn.disabled = false
    }

    return isAll
}

const handleBaseTaxonomy = (taxonomy) => {
    if (document.querySelectorAll('input.all').length === document.querySelectorAll('input.all:checked').length) {
        baseTaxonomy = undefined
    } else if (!baseTaxonomy) {
        baseTaxonomy = taxonomy
    } else {
        let inputs = document.querySelectorAll(`input[name="${baseTaxonomy}"]:checked`)

        if (!inputs.length) baseTaxonomy = undefined
    }
}

const handleTags = (input) => {
    let tag = document.getElementById(input.attributes.id.value)
    let taxonomy = input.name
    let checkedInputs = document.querySelectorAll('input[name="' + taxonomy + '"]:checked:not(.all)').length

    if (tag.checked === true && input.value !== '.all') {
        addTag(tag)
    } else if (tag.checked === false && input.value !== '.all') {
        removeTag(tag)
    } else if (checkedInputs === 0) {
        removeFilterTags(taxonomy)
    }
}

const addTag = (tag) => {
    let tagText = document.querySelector(`label[for="${tag.attributes.id.value}"]`).textContent
    let tagsHolder = document.querySelector(`.filter__filter-tags[data-taxonomy="${tag.attributes.name.value}"]`)
    let tagMarkup = `<span class="filter__filter-tag" id="filter-tag-${tag.attributes.id.value}">${tagText}<button class="filter__filter-tag-remove"><i class="icon-cancel"></i></button></span>`

    if(tagsHolder) tagsHolder.innerHTML += tagMarkup
}

const removeTag = (tag) => {
    let tagId = tag.nodeName === 'SPAN' ? tag.attributes.id.value.slice(11) : tag.attributes.id.value

    if (document.getElementById(`filter-tag-${tagId}`)) {
        document.querySelector(`#filter-tag-${tagId}`).remove()
        $(`input#${tagId}`).click()
    }
}

const removeFilterTags = (taxonomy) => {
    let tagsHolder = document.querySelector(`.filter__filter-tags[data-taxonomy="${taxonomy}"]`)
    if(tagsHolder) tagsHolder.innerHTML = ''
}

const camelCaseToDash = (string) => string.split(/(?=[A-Z])/).join('-').toLowerCase()

const getComboFilter = (filters) => {
    let i = 0,
        comboFilters = []

    for (let prop in filters) {
        let filterGroup = filters[prop]

        if (!filterGroup.length) continue

        if (i === 0) {
            comboFilters = filterGroup.slice(0);
        } else {
            let filterSelectors = [];
            let groupCombo = comboFilters.slice(0);
            for (let k = 0, len3 = filterGroup.length; k < len3; k++) {
                for (let j = 0, len2 = groupCombo.length; j < len2; j++) {
                    filterSelectors.push(groupCombo[j] + filterGroup[k])
                }
            }
            comboFilters = filterSelectors
        }
        i++
    }
    return comboFilters.join(', ')
}

const handleFilters = ($checkbox) => {
    let checkbox = $checkbox[0]
    let group = checkbox.name
    let filterGroup = filters[group]

    if (!filterGroup) {
        filters[group] = []
        filterGroup = filters[group]
    }

    let isAll = $checkbox.hasClass('all')
    if (isAll) delete filters[group]

    let index = $.inArray(checkbox.value, filterGroup)

    if (checkbox.checked && (!isAll && index === -1)) {
        filters[group].push(checkbox.value)
    } else if (!isAll) {
        filters[group].splice(index, 1)
    }
}

const closeFilters = () => {
    let filterElements = $(`.filter__filter-panels, .filter__filter-panel, ${filterBtn}`)
    filterElements.removeClass('on')
    if (window.window.innerWidth < 576) disableScroll(false)
}

const openFilters = (taxonomy) => {
    let allFiltersButtons = `.filter__filter-panel, ${filterBtn}`
    let filterPanelButton = `.filter__filter-panel[data-taxonomy="${taxonomy}"], .filter__filter-panels, ${filterBtn}[data-taxonomy="${taxonomy}"]`

    $(allFiltersButtons).removeClass('on')
    $(filterPanelButton).addClass('on')

    if (window.window.innerWidth < 576) disableScroll(true)
}

const handleClicks = (event) => {
    const filterPanels = document.querySelectorAll('.filter__filter-panel');
    let clickedInside = Array.from(filterPanels).some(panel => panel.contains(event.target));

    if (!clickedInside && !event.target.classList.contains('filter__filter-button')) closeFilters()

    if (event.target.parentNode && event.target.classList.contains('filter__filter-tag-remove')) {
        let tag = event.target.parentNode;
        removeTag(tag)
    }

    if (event.target.classList.contains('filter__action')) handleFilterActions(event)
}

const handleFilterActions = (event) => {
    if (event.target.classList.contains('filter__action--apply')) closeFilters()
    if (event.target.classList.contains('filter__action--close')) closeFilters()
    if (event.target.classList.contains('filter__action--clear')) $('.filter__filter-panel.on input.all').click()
    if (event.target.classList.contains('filter__action--clear-all')) {
        $('.filter__filter-panel input.all').click()
        handleClearFiltersBtn('hide')
    }
}

const loadMoreItems = (e) => {
    const itemsToLoad = 9;
    let offset = visibleItemsCount();
    let items = $(getItems().slice(offset, offset + itemsToLoad).join(''))
    $container.append(items).isotope('appended', items)
    initPopups()
    if (items.length < itemsToLoad ) e.target.classList.add('d-none')
}

const loadAllItems = (e) => {
    if( !itemsObj ) return
    let items = $(getItems().slice(visibleItemsCount()).join(''))
    $container.append(items).isotope('appended', items)
    elems = $container.isotope('getFilteredItemElements')
}

let filterButtons = $(filterBtn)

if (filterButtons.length > 0) {

    $(function () { initIsotope() })

    document.addEventListener('click', handleClicks);

    $(filterBtn).on('click', function () {
        let filterTaxonomy = $(this).data('taxonomy')
        let test = $(this).hasClass('on')
        let close = (test) => test ? closeFilters() : openFilters(filterTaxonomy)
        close(test)
    })
}

if( loadMoreBtn ) loadMoreBtn.on('click', loadMoreItems)

// This script sets the height of the form container on desktop to be equal to the content in orde

const formBlock = document.querySelector('.marketo-form__form-holder.marketo-form--report')

if(formBlock) {
    const sectionHeroBanner = document.querySelector('.hero-banner-simple')
    const sectionContent = document.querySelector('.section-single-post')
    const getSectionHeroBannerTopPadding = () => Number(window.getComputedStyle(sectionHeroBanner).paddingTop.slice(0, -2))
    const getFormBlockHeight = () => `${sectionHeroBanner.offsetHeight + sectionContent.offsetHeight - getSectionHeroBannerTopPadding() }px`
    const setReportFormSectionHeight = () => formBlock.style.height = window.innerWidth > 1024 ? getFormBlockHeight() : null
    setReportFormSectionHeight()
    window.addEventListener('resize', setReportFormSectionHeight);
}

// Load forms recursively to avoid Marketo bug when we have 2 forms with
// the same ID on the same page. This needs to be done recursively so we
// guarantee the next form is loaded only after the current one is done.
const marketoAPP = '//app-ab41.marketo.com';
const signUpForms = document.querySelectorAll(
  'form:not(.mktoForm):not(.form-exclude-handler):not(.form-opt-out):not(.post-password-form)'
);
const marketoForms = document.querySelectorAll('form.mktoForm');
const allForms = [...signUpForms, ...marketoForms];
const zipCodeFieldName = 'PostalCode';

let isZipCode = false;
let isZipCodeEnabled = undefined;
let freemailsCache = false;
let isFreemailBlocked;
let isFreemail;
let userGeo = null;
window.userGeoLoc = null;
window.userLang = null;

const vwo_sendEvent = (formid) => {
  window.VWO = window.VWO || [];
  VWO.event =
    VWO.event ||
    function () {
      VWO.push(['event'].concat([].slice.call(arguments)));
    };

  // Replace the property values with your actual values
  VWO.event('demoFormSubmission', {
    formSubmittedSuccessfully: true,
    demoFormSubmittedSuccessfully: true,
  });
  VWO.event('demoAndSignupFormSubmission', {
    demoSignupFormSubmissionSuccessfully: true,
  });
};

const triggerBookit = (values) => {
  if (typeof LDBookItV2 !== 'undefined' && LDBookItV2) {
    LDBookItV2.submit({ formData: values });
  }
};
const getUrlParameter = (sParam) => {
  let url = new URL(window.location.href);
  return url.searchParams.get(sParam);
};
const getCookieByName = (name) => {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return null;
};
// Function to track user time, from landing up to closing and page refresh.
function trackUserTimeSpentOnPage(callback) {
  var visibleTime = new Date();
  var totalTime = 0;

  function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      var hiddenTime = new Date();
      totalTime += hiddenTime - visibleTime;
    } else {
      visibleTime = new Date();
    }
  }

  document.addEventListener('visibilitychange', handleVisibilityChange);

  window.addEventListener('beforeunload', function () {
    if (document.visibilityState === 'visible') {
      var unloadTime = new Date();
      totalTime += unloadTime - visibleTime;
    }

    var timeSpentSec = Math.round(totalTime / 1000);
    var timeSpentMin = Math.round(totalTime / 1000 / 60);
    callback(timeSpentSec, timeSpentMin);
  });
}

const handleDriftOptinMonster = () => {
  let params = ['drift', 'optinmonster'];
  params.forEach((param) => {
    let value = getUrlParameter(param);
    if (value !== false) {
      let date = new Date();
      date.setTime(date.getTime() + 12 * 60 * 60 * 1000);
      document.cookie = `inrefplat=${param}; expires="${date.toUTCString()}"; path=/`;
    }
  });
};

// Trigger download from url
function triggerDownload(source) {
  const fileName = source.split('/').pop();
  const el = document.createElement('a');
  el.setAttribute('href', source);
  el.target = '_blank';
  document.body.appendChild(el);
  el.click();
  el.remove();
}

const storeUTMs = (utms) => {
  let filteredUTMs = {};
  utms.forEach((utm) => {
    if (sessionParamsArray.some((afc) => afc.includes(utm[0]))) return;
    let value = getUrlParameter(utm[0]);
    if (value && value.length > 0) filteredUTMs[utm[0]] = value;
  });
  afCookieHandler('update', filteredUTMs, 'utms');
};

const storeParams = (params) => {
  let filteredParams = {};
  params.forEach((param) => {
    let value = getUrlParameter(param[0]),
      cookie = 'undefined' !== typeof param[1] ? param[1] : '';

    if (value) {
      filteredParams[param[0]] = value;
    } else if ('undefined' === typeof filteredParams[param[0]] && cookie) {
      value = afCookieHandler('get', cookie, 'pixels');

      if ('string' === typeof value || value instanceof String) {
        value = value.split('.');
        if (value.length > 0)
          filteredParams[param[0]] = value[value.length - 1];
      }
    }
  });
  afCookieHandler('update', filteredParams, 'pixels');
};

const updateHiddenField = (formId, fieldName, value) => {
  let form = formId,
    field;

  if (form) {
    field = form
      ? document.getElementById(form).querySelector(`[name="${fieldName}"]`)
      : null;
    if (field) field.value = value;
  }
};

const updateHiddenFields = (formId, fields) => {
  fields.forEach((field) => {
    let element = document.querySelector(`#${formId} [name="${field[0]}"]`);
    if (element && field[1]) element.value = field[1];
  });
};

const updateUTMHiddenFields = (formId, fields, type) => {
  let utms = afCookieHandler('get-category', null, 'utms');
  fields.forEach((field) =>
    updateUTMHiddenField(formId, field[0], field[1], type, utms)
  );
};

const updateUTMHiddenField = (formId, fieldName, sParam, type, utms) => {
  let param = sParam ? sParam : fieldName,
    paramValue =
      'session' === type
        ? window.sessionStorage[fieldName]
        : getUrlParameter(param);

  if ('session' === type && paramValue) {
    updateHiddenField(formId, sParam, paramValue);
    return;
  }

  if (!paramValue && utms && utms[fieldName]) paramValue = utms[fieldName];
  if (paramValue) updateHiddenField(formId, param, paramValue);
};

const getMktoTrkCookie = (fieldName) => {
  let element = $('[name="' + fieldName + '"]');
  if (element) {
    let value = '; ' + document.cookie,
      parts = value.split('; _mkto_trk=');
    if (parts.length === 2) {
      let token = parts[1].split(';')[0];
      element.val(token);
    }
  }
};

const updateDeviceType = (fieldName) => {
  let windowWidth = window.innerWidth;
  let element = document.querySelectorAll(`[name="${fieldName}"]`);
  let deviceType;

  if (element) {
    if (windowWidth < 768) {
      deviceType = 'mobile';
    } else if (windowWidth >= 768 && windowWidth <= 1120) {
      deviceType = 'tablet';
    } else {
      deviceType = 'desktop';
    }
    element.forEach((e) => (e.value = deviceType));
  }
};

const getCookieValueByName = (name) => {
  let cookieArr =
    document.cookie.length > 0 ? document.cookie.split(';') : null;
  if (!cookieArr) return;
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split('=');
    if (name === cookiePair[0].trim()) {
      return cookiePair[1];
    }
  }
  return null;
};

const handleHiddenFieldsVisibility = (form) => {
  let formRows = form.getFormElem()[0].querySelectorAll('.mktoFormRow');

  for (let row of formRows) {
    const parentRow = row.parentNode.parentNode;
    const fields = row.querySelectorAll('input, select, textarea');
    const hiddenFields = row.querySelectorAll('input[type="hidden"]');
    const disclaimerRow = row.querySelectorAll('.mktoHtmlText').length > 0;
    const checkboxRow = row.querySelectorAll('.mktoCheckboxList').length > 0;

    // use nodename and classname to check if parent is a formRow
    if (
      parentRow.nodeName === 'DIV' &&
      parentRow.classList.contains('mktoFormRow')
    )
      continue;

    // check if row has no fields or only has hidden fields

    if (!disclaimerRow && (!fields.length || hiddenFields.length > 0)) {
      row.classList.add('d-none');
    } else {
      row.classList.remove('d-none');

      if (disclaimerRow) row.classList.add('mktoDisclaimer');
      if (checkboxRow) row.classList.add('mktoCheckboxList');
    }
  }
};

const reorderLabels = () => {
  document
    .querySelectorAll('.mktoForm label:first-of-type')
    .forEach((label) => {
      label.parentNode
        .querySelector('input, select, textarea')
        .insertAdjacentElement('afterend', label);
    });
};

const handleSelectFields = (formId) => {
  // Important for Select inputs
  let selectFields = document.querySelectorAll(`#mktoForm_${formId} select`);
  selectFields.forEach((field) => handleSelectChange(field));

  let checkBoxList = document.querySelectorAll(
    `#mktoForm_${formId} .mktoCheckboxList input`
  );
  let target = document.querySelector(`#mktoForm_${formId} .dropdown-header`);
  checkBoxList.forEach((elm) => handleSelectChange(elm, target));
};

const handleSelectChange = (field, target = null) => {
  field.addEventListener('change', function (e) {
    const targetElm = target || e.target;
    if (!targetElm.classList.contains('has-value')) {
      targetElm.classList.add('has-value');
    } else {
      targetElm.classList.remove('has-value');
    }
  });
};

let isCookiesAllowed;

let utmsArray = [
  ['utm_source'],
  ['utm_medium'],
  ['utm_campaign'],
  ['utm_content'],
  ['utm_term'],
  ['inrefplat'],
  ['internalrefplat'],
  ['utm_source', 'HSUTMSource__c'],
  ['utm_medium', 'HSUTMMedium__c'],
  ['utm_campaign', 'HSUTMCampaign__c'],
  ['utm_content', 'HSUTMContent__c'],
  ['utm_term', 'HSUTMTerm__c'],
  ['internalrefplat', 'HS_InternalRefPlat__c'],
  ['inrefplat', 'HS_InternalRefPlat__c'],
];

let paramsArray = [['gclid'], ['fbclid', '_fbc'], ['li_fat_id']];

let afcArray = [
  ['afc_source', 'utm_source'],
  ['afc_medium', 'utm_medium'],
  ['afc_campaign', 'utm_campaign'],
  ['afc_content', 'utm_content'],
  ['afc_term', 'utm_term'],
  ['App_Installment_Base__c', 'App_Installment_Base__c'],
  ['TopAppCategory__c', 'TopAppCategory__c'],
];
let sessionParamsArray = [
  ['internalrefplat', 'HS_InternalRefPlat__c'],
  ['inrefplat', 'HS_InternalRefPlat__c'],
  ['inrefplat'],
  ['internalrefplat'],
];

let debounce = (func, delay) => {
  let debounceTimeout = null;

  return (...args) => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    debounceTimeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const getCountryData = (formId) => {
  let input = document.querySelector(`#${formId} input[type="tel"]`),
    iti = window.intlTelInputGlobals
      ? window.intlTelInputGlobals.getInstance(input)
      : false;
  return iti ? iti.getSelectedCountryData() : false;
};

const getDataByZipCode = async (zipCode) => {
  const apiKey = 'AIzaSyAukv7rq6okPL5GrQNLtRssT57FlK28u1Q';
  const geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${apiKey}&language=en`;

  try {
    const response = await fetch(geocodingApiUrl);
    const data = await response.json();
    if (data.status === 'OK') {
      let results = data.results[0];
      let city;
      let state;
      let country;

      for (let component of results.address_components) {
        if (component.types.includes('locality')) city = component.long_name;
        if (component.types.includes('administrative_area_level_1'))
          state = component.long_name;
        if (!city && component.types.includes('sublocality_level_1'))
          city = component.long_name;
        if (component.types.includes('country')) {
          country = component.short_name;
        }
      }

      return { city, state, country };
    } else {
      // Error occurred
    }
  } catch (error) {
    // Error handling
  }
};

const zipCodeFieldListener = (form) => {
  const debouncedZipCode = debounce((zipCode) => {
    getDataByZipCode(zipCode).then((res) => {
      if (res) {
        const stateInput = form.querySelector('[name="State"]');
        const cityInput = form.querySelector('[name="City"]');
        const countryInput = form.querySelector('[name="Country"]');
        const zipInput = form.querySelector('[name="PostalCode"]');
        stateInput.value = res.state;
        cityInput.value = res.city;
        countryInput.dataset.countryZip = res.country;
        zipInput.dataset.nonValid = '';
      } else {
        const zipInput = form.querySelector('[name="PostalCode"]');
        zipInput.dataset.nonValid = true;
      }
    });
  }, 1000);

  const zipCodeInput = form.querySelector(`[name="${zipCodeFieldName}"]`);
  zipCodeInput.addEventListener('input', (event) => {
    debouncedZipCode(event.target.value);
  });
};
const isUSZipCode = (form) => {
  const formInputCountry = form
    .getFormElem()[0]
    .querySelector('[name="Country"]');
  return (
    formInputCountry.value ===
    formInputCountry.dataset.countryZip?.toLocaleLowerCase()
  );
};
const handleZipCodeValidation = async (value, form, elem) => {
  if (!value || value.length <= 4 || !!elem[0].dataset.nonValid) {
    setTimeout(() => {
      const messageKey = !value
        ? 'required'
        : value.length <= 4 || !!elem[0].dataset.nonValid
          ? 'invalid-zipcode'
          : '';
      form.showErrorMessage(errorMessages[langCode][messageKey], elem);
      elem[0].classList.add('mktoInvalid');
    }, 10);
    form.submittable(false);
    return false;
  }
  if ('us' === getCountryData(form.getFormElem()[0].id).iso2) {
    if (!isUSZipCode(form)) {
      setTimeout(() => {
        form.showErrorMessage(errorMessages['en']['invalid-us-zipcode'], elem);
        elem[0].classList.add('mktoInvalid');
      }, 10);
      form.submittable(false);
      return false;
    }
  }
  form.submittable(true);
  return true;
};

const handleZipCode = (action, value, form) => {
  const inputZipcode = form.querySelector(`[name="${zipCodeFieldName}"]`);
  const inputZipcodeParent = inputZipcode.closest('.mktoFormCol');
  const stateInput = form.querySelector('[name="State"]');
  const cityInput = form.querySelector('[name="City"]');

  switch (action) {
    case 'show':
      isZipCodeEnabled = true;
      inputZipcodeParent.classList.remove('d-none'); //Z = false
      inputZipcodeParent
        .closest('.mktoFormRow')
        .classList.remove('hide-zipcode');
      break;
    case 'hide':
      isZipCodeEnabled = false;
      inputZipcodeParent.classList.add('d-none'); //= true
      inputZipcodeParent.closest('.mktoFormRow').classList.add('hide-zipcode');
      inputZipcode.value = '';
      stateInput.value = '';
      cityInput.value = '';
      break;
  }
};

const intlPhoneListener = (form) => {
  let input = form.querySelector('input[type="tel"]');

  if (input) {
    const handleCountryChange = () => {
      const countryData = getCountryData(form.id);
      populateIntlPhone(form.id, countryData);
      populateCountryByDialCode(form.id, countryData);
      if (isZipCode) {
        if ('us' === countryData.iso2) handleZipCode('show', '', form);
        else if (isZipCodeEnabled !== false) handleZipCode('hide', '', form);
      }
    };

    input.addEventListener('countrychange', handleCountryChange);
    input.addEventListener('change', handleCountryChange);
  }
};

const populateIntlPhone = (formId, obj, fieldName, dummyFieldName) => {
  let phoneFieldName = fieldName ? fieldName : 'Phone',
    form = document.querySelector(`#${formId}`),
    dummyPhoneFieldName = dummyFieldName ? dummyFieldName : 'phoneMKTO',
    phoneDummy = form.querySelector(`input[name="${dummyPhoneFieldName}"]`),
    phoneField = form.querySelector(`input[name="${phoneFieldName}"]`),
    phone = null;

  if (phoneDummy) {
    phone = obj ? `+(${obj.dialCode}) ${phoneDummy.value}` : phoneDummy.value;
    if (!phoneField) {
      const hiddenInput = document.createElement('input');
      hiddenInput.type = 'hidden';
      hiddenInput.name = 'phone';
      hiddenInput.id = 'phone';
      form.appendChild(hiddenInput);
    }
    form.querySelector(`input[name="${phoneFieldName}"]`).value = phone;
  }
};

const populateCountryByDialCode = (formId, obj) => {
  let inputs = document.querySelectorAll(
    `#${formId} input[name="Country"], #${formId} input[name="countryMKTO"]`
  );
  if (inputs && obj)
    inputs.forEach((i) => {
      i.value = obj.iso2;
    });
};

const getCompanyFromEmail = (email) => email.split('@').pop().split('.')[0];

const getUserLocationFromWPAPI = async () => {
  try {
    const response = await fetch('/wp-json/appsflyer/v1/user-location-header');
    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }

    const data = await response.json();
    window.userGeoLoc = data.location;
  } catch (error) {}
};
const getUserLangFromWPAPI = async () => {
  try {
    const knownLangShortNames = [
      'en',
      'es',
      'fr',
      'de',
      'ru',
      'vi',
      'ko',
      'ja',
      'pt',
    ];
    const pathSegments = window.location.pathname
      .split('/')
      .filter((segment) => segment !== '');
    const defaultLangShortName = 'en';

    // Determine if the first path segment is a known language code
    // If true, prepend the language code to the URL;
    // If false, or the language code is the default ('en'), construct the URL without the language segment
    const langShortName =
      knownLangShortNames.includes(pathSegments[0]) &&
      pathSegments[0] !== defaultLangShortName
        ? `/${pathSegments[0]}`
        : '';

    const url = `${langShortName}/wp-json/appsflyer/v1/user-lang`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }

    const data = await response.json();
    window.userLang = data.lang;
  } catch (error) {
    window.userLang = defaultLangShortName; // 'en' as a fallback language
  }
};
const populateLang = (form, element) => {
  setTimeout(() => {
    let elementInput = form.querySelector(element);
    if (elementInput) {
      elementInput.value = window.userLang;
    }
  }, 1000);
};

const getUserLocation = async () => {
  if (userGeo !== null) return userGeo;

  let req = new XMLHttpRequest(),
    obj = {};

  req.open('GET', document.location, false);
  req.send(null);

  const headers = req.getAllResponseHeaders().toLowerCase(),
    headersArr = headers.trim().split(/[\r\n]+/);

  headersArr.forEach((item) => {
    const key = item.split(':')[0],
      value = item.split(':').slice(1).join(':').trim();
    obj[key] = value;
  });

  userGeo = obj['user-loc'] ? obj['user-loc'] : 'US';
  return window.userGeoLoc;
};

const setCountryWhenReady = () => {
  const checkGeoLoc = setInterval(() => {
    if (window.userGeoLoc) {
      clearInterval(checkGeoLoc);
      const countryLanguageCode = getCountryLanguageCode(window.userGeoLoc);
      document
        .querySelectorAll('[name="Country"], [name="countryMKTO"]')
        .forEach((e) => {
          e.value = countryLanguageCode;
        });
    }
  }, 100);
};

const showFreemailError = (form, elem) => {
  setTimeout(() => {
    form.showErrorMessage(
      errorMessages[langCode]['business-email-invalid'],
      elem
    );
  }, 100);
  if (form.submittable()) form.submittable(false);
};

let userEmailCache = 'false';
const isUserFilledForm = '1' === getCookieValueByName('afforms');

const fetchEmail = async () => {
  const url = `${getBaseUrl()}/wp-admin/admin-ajax.php`;
  const formData = new FormData();
  const emailFields = document.querySelectorAll(
    '.mktoFormRow input[type="email"]'
  );

  formData.append('action', 'prefill_marketo_forms');
  formData.append('form_status', 'true');

  emailFields.forEach((e) => {
    e.disabled = true;
    e.classList.add('loading');
  });

  try {
    const response = await fetch(url, { method: 'POST', body: formData });
    const data = await response.text();
    userEmailCache = data;

    emailFields.forEach((e) => {
      e.value = data;
      const form = e.closest('form');
      const companyField = form.querySelector('[name="Company"]');

      if (companyField) {
        companyField.value = isFreemailBlocked
          ? null
          : getCompanyFromEmail(data);
        companyField.closest('.mktoFormCol').classList.add('d-none');
      }

      e.disabled = false;
      e.classList.remove('loading');
      if (e.value)
        zeroBounceValidateEmail(
          e.value,
          form,
          form.querySelectorAll('.mktoButton')
        );
    });
  } catch (err) {
    // Error handling
  }
};

const prefillEmailFromCookie = async () => {
  let email =
      userEmailCache === 'false' || 'undefined' === typeof userEmailCache
        ? null
        : userEmailCache,
    emailFields = document.querySelectorAll('.mktoFormRow input[type="email"]');

  emailFields.forEach((e) => {
    e.value = email;
    e.disabled = false;
    if (e.classList.contains('loading')) e.classList.remove('loading');
  });
};

const isBusinessEmailLocally = async (field) => {
  if (!freemailsCache) freemailsCache = await getFreemailsList();
  let suffix =
      typeof field === 'string'
        ? field.substring(field.lastIndexOf('@') + 1)
        : field.value.substring(field.value.lastIndexOf('@') + 1),
    isBusinessEmail = freemailsCache ? freemailsCache.includes(suffix) : false;
  return isBusinessEmail;
};

const validateBlackList = (field) => {
  let suffix =
    typeof field === 'string'
      ? field.substring(field.lastIndexOf('@') + 1)
      : field.value.substring(field.value.lastIndexOf('@') + 1);
  return emailsBlacklist.includes(suffix);
};

const updateMarketoFormsHiddenFields = (forms) => {
  forms.forEach((form) => {
    updateMarketoFormHiddenFields(form);
  });
};

const updateMarketoFormHiddenFields = (form) => {
  let formCta = form.attributes['form-cta'],
    itemName = form.dataset.itemName,
    redirectUrl = form.attributes['redirect-url'],
    currentFormUrl = window.location.href,
    googleIdC = getCookieValueByName('_ga'),
    afc = afCookieHandler('get', null, null);

  let formCustomAtts = [
    ['formCTA', formCta],
    ['formThankYouPageURL', redirectUrl],
    ['formLandingPageURL', currentFormUrl],
    ['itemName', itemName],
  ];
  updateHiddenFields(form.id, formCustomAtts); // Updates the values, without checking localStorage

  let hiddenFields = [
    [
      'Google_ID_gclid__c',
      afc && afc.pixels && afc.pixels.gclid ? afc.pixels.gclid : null,
    ],
    [
      'Facebook_ID_fclid__c',
      afc && afc.pixels && afc.pixels.fbclid ? afc.pixels.fbclid : null,
    ],
    [
      'LinkedIn_ID_li_fat_id__c',
      afc && afc.pixels && afc.pixels.li_fat_id ? afc.pixels.li_fat_id : null,
    ],
  ];

  let prefix = 'true' === isCookiesAllowed ? 'utm' : 'afc';
  let utmHiddenFields = [
    [`${prefix}_source`, 'HSUTMSource__c'],
    [`${prefix}_medium`, 'HSUTMMediu__c'],
    [`${prefix}_campaign`, 'HSUTMCampaign__c'],
    [`${prefix}_content`, 'HSUTMContent__c'],
    [`${prefix}_term`, 'HSUTMTerm__c'],
    ['internalrefplat', 'HS_InternalRefPlat__c'],
    ['inrefplat', 'HS_InternalRefPlat__c'],
  ];

  if ('true' === isCookiesAllowed) {
    updateHiddenFields(form.id, hiddenFields); // Updates the values, without checking localStorage
    updateUTMHiddenFields(form.id, utmHiddenFields); // Updates the values after checking localStorage

    if (googleIdC && googleIdC.length > 6)
      updateHiddenField(form.id, 'Google_Id__c', googleIdC.substring(6));

    if (document.referrer) {
      let utmReferral = new URL(document.referrer).hostname;
      if (utmReferral)
        updateHiddenField(form.id, 'HSUTMReferralWebsite__c', utmReferral);
    }
    return;
  }
  updateUTMHiddenFields(`${form.id}`, utmHiddenFields, 'session');
};

const handleMultiStepFormRedirection = (form, redirectUrl) => {
  let postData = new FormData();
  postData.append('action', 'store_form_data');
  postData.append('formData', JSON.stringify(form.getValues()));

  // Make the fetch request
  fetch(afJs.ajax_url, {
    method: 'POST',
    contentType: false,
    processData: false,
    body: postData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        location.href = redirectUrl;
        return;
      }
      // Error occurred
      showSubmissionFailureNotification(form);
    })
    .catch((error) => {
      // Error occurred
      showSubmissionFailureNotification(form);
    });

  return false;
};

const showSubmissionFailureNotification = (form) => {
  const errorContainer = document.querySelector(
    'button[type="submit"].mktoButton'
  );
  errorContainer.insertAdjacentHTML(
    'afterend',
    '<div class="font-size-sm pt-4 text-center text-danger">Hmmm... something went wrong. <br>Don\'t worry, we let the team know. Try again in a few minutes.</div>'
  );
};

const populateSignupForm = (form) => {
  form.getFormElem()[0].classList.add('d-none');
  const signupForm = document.querySelector('#form-signup');
  let values = form.getValues();

  if (values.hasOwnProperty('Country')) {
    let iti = window.intlTelInputGlobals;
    const countryData = iti.getCountryData();
    const countryObj = countryData.find((item) => item.iso2 === values.Country);
    values.Country = countryObj.name;
  }

  let fieldMapping = {
    FirstName: 'fname',
    LastName: 'lname',
    Email: 'email',
    Phone: 'phone',
    Country: 'country',
    Company: 'company',
    Website: 'companywebsite',
    Title: 'title',
  };

  for (let [key, value] of Object.entries(values)) {
    let signupFormInputName = fieldMapping[key];
    if (signupFormInputName) {
      let input = signupForm.elements[signupFormInputName];
      if (input) {
        input.value = value;
        input.disabled = true;
        input.closest('.field').classList.add('d-none');
      }
    }
  }

  signupForm.classList.remove('d-none');
};

const handleStepsBullets = (formObj, numberOfSteps, currentStep) => {
  const formElem = formObj.getFormElem()[0];
  const stepsContainer = formElem.parentNode.querySelector('.form-steps');

  if (!stepsContainer) {
    let newDiv = document.createElement('div');
    let newList = document.createElement('div');
    newList.classList.add(
      'form-steps__buttons',
      'd-flex',
      'justify-content-center',
      'pt-3',
      'pb-30'
    );

    for (let i = 0; i < numberOfSteps + 1; i++) {
      let liElement = document.createElement('span');
      liElement.classList.add('form-steps__button', 'p-0', 'my-3', 'mx-4');
      liElement.dataset.formStep = i + 1;
      if (i === 0) liElement.classList.add('on');
      newList.appendChild(liElement);
    }

    newDiv.appendChild(newList);
    newDiv.classList.add('form-steps', 'd-flex', 'justify-content-center');
    formElem.parentNode.insertBefore(newDiv, formElem);
    return;
  }

  if (currentStep) {
    const bullets = formElem.parentNode.querySelectorAll('[data-form-step]');
    const currentStepStr = String(currentStep);
    bullets.forEach((e) => {
      e.classList[e.dataset.formStep === currentStepStr ? 'add' : 'remove']([
        'on',
      ]);
      if (Number(e.dataset.formStep) < currentStep) e.classList.add('valid');
    });
  }
};

const handleMultiStepForm = (form) => {
  const redirectUrl = document.getElementById(`mktoForm_${form.getId()}`)
    .dataset.redirectUrl;

  if (redirectUrl) {
    // Start fetch
    handleMultiStepFormRedirection(form, redirectUrl);
  } else {
    // Populate sign up
    populateSignupForm(form);
  }
};

const updateUserActivity = async (data) => {
  var cookieValue = afMktoActivityCookieHandler(
    'mktoActivity',
    'get',
    null,
    ''
  );
  const url = `${getBaseUrl()}/wp-admin/admin-ajax.php`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        action: 'update_activity',
        data: JSON.stringify(data),
        cookieValue: JSON.stringify(cookieValue),
      }),
    });
    if (!response.ok) {
      // HTTP error occurred
    } else {
      let emptyCookieValue = {};
      const cookieExpires = new Date();
      cookieExpires.setTime(
        cookieExpires.getTime() + 365 * 24 * 60 * 60 * 1000
      );
      handleMktoActivityCookie(emptyCookieValue, cookieExpires);
    }
  } catch (error) {
    // Error handling
  }
};

const handleMarketoForm = (form) => {
  let clientId = form.attributes['data-client-id'].value,
    formId = form.attributes.id.value,
    marketoFormId = formId.substring(9);

  document
    .querySelectorAll(`#${formId} input[type="hidden"][data-get-param]`)
    .forEach((e) => {
      let param = e.dataset.getParam;
      if (param && getUrlParameter(param))
        updateHiddenField(e.name, getUrlParameter(param));
    });

  if (document.referrer) {
    let utm_referral = new URL(document.referrer).hostname;
    if (utm_referral) updateHiddenField(formId, 'last_referer', utm_referral);
  }

  if (typeof MktoForms2 !== 'undefined') {
    MktoForms2.loadForm(marketoAPP, clientId, marketoFormId, function (form) {
      let formEl = document.getElementById(formId),
        action = formEl.dataset.action,
        emailElem = form.getFormElem().find('[name="Email"]'),
        zipCodeElem = form.getFormElem().find(`[name="${zipCodeFieldName}"]`),
        urlElem = form.getFormElem().find(`[type="url"]`),
        redirectUrl = formEl.dataset.redirectUrl,
        downloadUrl = formEl.dataset.downloadUrl;

      if (formEl.querySelector('input[name="block_freemails_mkto"]'))
        isFreemailBlocked = true;
      if (urlElem.length > 0) {
        urlElem[0].addEventListener('blur', function (e) {
          let value = e.target.value;
          if (
            value &&
            !value.startsWith('http://') &&
            !value.startsWith('https://')
          ) {
            e.target.value = `https://${value}`;
          }
        });
      }

      isZipCode = form.getValues().hasOwnProperty(zipCodeFieldName);
      if (isZipCode) zipCodeFieldListener(formEl);

      formEl
        .querySelector('button[type="submit"]')
        .classList.add(...['btn', 'btn-primary', 'btn-primary--blue']);

      updateDeviceType('deviceTypeMKTO');
      updateDeviceType('device_type');
      getMktoTrkCookie('mkto_trk');

      for (
        let elsWithStyles = document.querySelectorAll(
            '#' + formId + ', #' + formId + ' [style]'
          ),
          i = 0,
          imax = elsWithStyles.length;
        i < imax;
        i++
      ) {
        elsWithStyles[i].removeAttribute('style');
      }

      // disable all Marketo-sourced stylesheets
      for (
        let styleSheets = document.styleSheets,
          i = 0,
          imax = styleSheets.length;
        i < imax;
        i++
      ) {
        let ssLoc = document.createElement('A');
        ssLoc.href = styleSheets[i].href;

        if (
          ssLoc.hostname.search(/\.marketo\.com$/) !== -1 ||
          (styleSheets[i].ownerNode || styleSheets[i].owningElement)
            .parentNode === formEl
        )
          styleSheets[i].disabled = true;
      }

      // Set first select option as disabled
      document
        .querySelectorAll(`#${formId} .mktoForm select option:nth-child(1)`)
        .forEach((e) => (e.disabled = true));

      const field = formEl.querySelector('[type="email"]');
      let isBlacklisted = validateBlackList(field);

      intlPhoneInputs = document.querySelectorAll('input[name="phoneMKTO"]'); // I changed it form "Phone" to "PhoneMKTO" for a quick disable of the intl phone plugin update

      if (intlPhoneInputs && 0 < intlPhoneInputs.length) {
        /**
         * Enable International phone field plugin
         */

        const phoneInput = formEl.querySelector('[type="tel"]');

        if (phoneInput && window.intlTelInput) {
          const getCountryCodes = (isoCountries) => Object.keys(isoCountries);
          const countryCodes = getCountryCodes(isoCountries);
          phoneInput.placeholder = '';

          window.intlTelInput(phoneInput, {
            formatOnDisplay: true,
            nationalMode: true,
            separateDialCode: true,
            initialCountry: 'auto',
            onlyCountries: countryCodes,
            utilsScript: `${getBaseUrl()}/wp-content/themes/AF2020/assets/js/vendors/iti-utils.js`,
            geoIpLookup: function (callback) {
              const waitForUserGeoLoc = () => {
                if (window.userGeoLoc) {
                  callback(window.userGeoLoc);
                } else {
                  setTimeout(waitForUserGeoLoc, 200); // Check again after a short delay
                }
              };

              // Start waiting for userGeoLoc
              waitForUserGeoLoc();
            },
          });
        } else {
          // intlTelInput plugin could not be loaded
        }

        intlPhoneListener(formEl);
      }

      form.onSuccess(function (values, followUpUrl) {
        vwo_sendEvent(marketoFormId);
        triggerBookit(values);
        if (
          action !== 'step' &&
          'undefined' !== typeof ChiliPiper &&
          'undefined' !== values.activeChiliPiperMKTO &&
          values.activeChiliPiperMKTO === 'Yes'
        ) {
          ChiliPiper.submit('appsflyer', 'inbound', {
            map: true,
            formId: formId,
            onRouted: () => {
              window.dataLayer.push({
                event: 'chilipiper_open',
              });
            },
            onSuccess: () => {
              window.dataLayer.push({
                event: 'chilipiper_submit',
                chili_success: 'success',
              });
            },
          });
        }
        if (downloadUrl) triggerDownload(downloadUrl);
        let cookieExpires = new Date();
        cookieExpires.setTime(
          cookieExpires.getTime() + 30 * 24 * 60 * 60 * 1000
        );

        document.cookie = `afforms=1; domain=.appsflyer.com; expires="${cookieExpires.toUTCString()}"; path=/; secure;`;

        if (action === undefined || action === 'redirect') {
          document
            .getElementById(form.getFormElem()[0].id)
            .classList.add('d-none');
          window.location.href = redirectUrl;
          return false;
        } else if (action === 'step') {
          let totalSteps =
            formEl.querySelectorAll('button[data-form-step]').length + 1;
          triggerStepCompletionEvent(totalSteps);
          handleMultiStepForm(form);
          return false;
        } else if (action === 'message') {
          handleConfirmation(formEl);
          document
            .getElementById(form.getFormElem()[0].id)
            .classList.add('sent');
          return false;
        }
      });

      form.onValidate(function () {
        isBlacklisted = validateBlackList(field);
        $('.mktoFormRow').removeClass('newFieldRow');

        let textFieldsToValidate = ['FirstName', 'LastName'];
        let isTextFieldsValid = true;
        let invalidChars = /[<>{}]/;

        let fields = formEl.querySelectorAll('input[type="hidden"]');
        // Regex: allow only English letters, numbers, and basic symbols
        const englishRegex = /^[\x00-\x7F]*$/;

        if(fields) {
          fields.forEach(function (field){
            const value = field.value;
            if (value && !englishRegex.test(value)) {
              form.submittable(false);
              return false;
            }
          })
        }

        textFieldsToValidate.forEach(function (fieldName) {
          let fieldValue = form.vals()[fieldName];
          if (fieldValue && invalidChars.test(fieldValue)) {
            isTextFieldsValid = false;
            let field = form.getFormElem().find(`[name="${fieldName}"]`);
            form.submittable(false);
            if (field.length > 0) {
              // Check if the field element exists before showing an error message
              field[0].classList.toggle('mktoInvalid');
              setTimeout(() => {
                form.showErrorMessage('Letters only', field);
              }, 10);
            }
          }
        });

        if (!isTextFieldsValid) {
          form.submittable(false);
          return false;
        }

        let websiteField = form.getFormElem().find('[name="Website"]');

        if (websiteField.length > 0) {
          let websiteValue = websiteField.val();
          if (websiteValue && !validateUrl(websiteField[0])) {
            form.submittable(false);
            websiteField[0].classList.toggle('mktoInvalid');
            setTimeout(() => {
              form.showErrorMessage(
                errorMessages[langCode]['url-invalid'],
                websiteField
              );
            }, 10);
            return false;
          } else {
            form.submittable(true);
          }
        }

        if (isBlacklisted) {
          showFreemailError(form, emailElem);
          return false;
        }

        // ZeroBounce validation - check if we need to validate asynchronously
        const formId = form.getId();
        const zeroBounceConfig = window.zeroBounceMarketoForms && window.zeroBounceMarketoForms[formId];
        
        if (zeroBounceConfig) {
          const { emailInput, lastValidatedEmail, isValidating } = zeroBounceConfig;
          const currentEmail = emailInput.value || '';
          
          // ZeroBounce validation state tracking
          
          // If currently validating, block submission
          if (isValidating) {
            // Currently validating, blocking
            form.submittable(false);
            return false;
          }
          
          // If email changed, need to validate
          if (currentEmail && currentEmail !== lastValidatedEmail) {
            // Email changed, starting validation
            
            // Mark as validating
            zeroBounceConfig.isValidating = true;
            zeroBounceConfig.lastValidatedEmail = currentEmail;
            
            // Block submission while validating
            form.submittable(false);
            
            // Start async validation
            const customEvent = { target: emailInput };
            zeroBounceValidateEmail(customEvent, zeroBounceConfig.formElem, []).then(() => {
              // Validation completed
              zeroBounceConfig.isValidating = false;

              if (window.isEmailValidByZb === true) {
                // Check freemail blocking BEFORE submitting
                if (isFreemailBlocked && window.isFreemail) {
                  // Freemail blocked, show error and block submission
                  form.submittable(false);
                  showFreemailError(form, emailElem);
                  return;
                }

                // Email is valid and not a blocked freemail, submitting form directly
                form.submittable(true);
                // Use form.submit() to bypass validation and submit directly
                setTimeout(() => {
                  // Submitting form with form.submit()
                  form.submit();
                }, 100);
              } else {
                // Email is invalid, keeping form blocked
                form.submittable(false);
              }
            }).catch((error) => {
              // Validation error occurred
              zeroBounceConfig.isValidating = false;
              window.isEmailValidByZb = true; // Fallback
              form.submittable(true);
              setTimeout(() => {
                // Submitting form after error (fallback)
                form.submit();
              }, 100);
            });
            
            return false; // Block this validation round
          }
        }
        
        // Original ZeroBounce check
        if (false === isEmailValidByZb) {
          // Email is invalid, blocking and showing error
          form.submittable(false);
          setTimeout(() => {
            form.showErrorMessage(
              'Invalid email address',
              emailElem
            );
          }, 10);
          return false;
        }
        
        // If we have ZeroBounce config and email is valid, log success
        if (zeroBounceConfig && window.isEmailValidByZb === true) {
          // Email is valid, allowing form to continue
        }

        if (isZipCodeEnabled){
          // Checking zipcode validation
          handleZipCodeValidation(
              form.getValues()[zipCodeFieldName],
              form,
              zipCodeElem
          );
        }

        // Checking freemail blocking

        if (isFreemailBlocked && isFreemail) {
          // Freemail blocked, showing error
          form.submittable(false);
          showFreemailError(form, emailElem);
          return false;
        }
        
        // All validations passed, form should submit
        
        // Explicitly enable form submission if all validations passed
        if (zeroBounceConfig && window.isEmailValidByZb === true) {
          // Explicitly enabling form submission
          form.submittable(true);
        }
      });

      form.onSubmit(function (form) {
        // Form submission started
        
        if (isBlacklisted) {
          // Showing blacklist error
          showFreemailError(form, emailElem);
        } else {
          if (isFreemailBlocked && isFreemail) {
            // Showing freemail error
            showFreemailError(form, emailElem);
          } else {
            // All checks passed, allowing submission
          }
        }

        // About to populate phone fields and continue
        if (intlPhoneInputs && intlPhoneInputs.length > 0)
          populateIntlPhone(formId, getCountryData(formId));
          
        // Form should now submit to Marketo server
        // Save "My Company Is" value in local storage
        if (form.vals().My_company_is__c) {
          let value =
            form.vals().My_company_is__c === 'A brand with a mobile app'
              ? 1
              : 0;
          localStorage.setItem('MyCompanyIs', value);
        }
      });
    });
  }
};

const triggerStepCompletionEvent = (stepNumber) => {
  window.dataLayer.push({
    event: `signupStepCompleted${stepNumber}`,
    eventCategory: 'signupForms',
    eventAction: 'Submit',
    eventLabel: 'Sign up form',
    completeStep: `User completed step ${stepNumber}`,
  });
};
const stepsTitlesHandler = (currentStep) => {
  currentStep = String(currentStep);
  let multiStepTitlesHolder = document.querySelector('.multisteps-titles');
  if (multiStepTitlesHolder) {
    let multistepTitles = multiStepTitlesHolder.querySelectorAll('.step-title');
    multistepTitles.forEach((multistepTitle) => {
      let step = multistepTitle.dataset.steptitle;
      step = String(step);
      multistepTitle.classList.remove('on');
      multistepTitle.classList.add('d-none');
      if (currentStep === step)
        multistepTitle.classList.add('on'),
          multistepTitle.classList.remove('d-none');
    });
  }
};
const populateSelectLabel = (parent) => {
  let label = parent.querySelector('label');
  let select = parent.querySelector('select');

  if (label) {
    label = label.textContent.replace(':', '').trim();
    label = label.replace('*', '').trim();
  }
  if (select) {
    select.options[0].textContent = label;
  }
};
const handleCompanyType = (fromElement) => {
  const myCompany = fromElement.querySelector(
    'select[name="My_company_is__c"]'
  );
  const fieldSet = fromElement.querySelector('.activeFieldset');
  const inputsRow = fieldSet.querySelectorAll('.mktoFormRow');
  const mktoButtonRow = fieldSet.querySelector('.btnContainer');
  const infoText = document.createElement('p');
  infoText.classList.add('mt-4', 'mb-0', 'info-text-holder');

  inputsRow.forEach((input, index) => {
    if (index !== 0) input.classList.add('d-none');
  });
  mktoButtonRow.classList.add('d-none');

  const updateFormState = (disabled, text, link, target) => {
    inputsRow.forEach((input) => {
      if (disabled) {
        if (input !== target.closest('.mktoFormRow')) {
          input.classList.add('d-none');
          mktoButtonRow.classList.add('d-none');
        }
      } else {
        input.classList.remove('d-none');
        mktoButtonRow.classList.remove('d-none');
      }
    });

    if (mktoButtonRow) {
      if (disabled) {
        mktoButtonRow.setAttribute('disabled', true);
      } else {
        mktoButtonRow.removeAttribute('disabled');
      }
    }

    if (text && link) {
      infoText.innerHTML = `Great! Please continue to the registration form ${text}<a class=" btn btn-primary btn-primary--blue w-100 btn_info-text mt-4" href="${link}">Next</a>`;
      myCompany.parentNode.insertBefore(
        infoText,
        myCompany.nextSibling.nextSibling
      );
    } else if (infoText.parentNode) {
      infoText.parentNode.removeChild(infoText);
    }
  };

  if (myCompany) {
    myCompany.addEventListener('change', (e) => {
      const value = e.target.value;
      const isAgency = value === 'An agency';
      const isAdNetwork =
        value === 'An ad network / offers tools for marketers';
      const isDefaultValue = value === '';
      const disabled = isAgency || isAdNetwork || isDefaultValue;

      updateFormState(
        disabled,
        isAgency
          ? 'for agencies '
          : isAdNetwork
            ? 'for integrated partners '
            : '',
        isAgency
          ? 'https://www.appsflyer.com/start/agencies/'
          : isAdNetwork
            ? 'https://www.appsflyer.com/company/contact/partners/'
            : '',
        e.target
      );
    });
  }
};
const addSteps = (form, fieldsets) => {
  const totalSteps = fieldsets.length;
  const formElement = form.getFormElem()[0];
  const submitBtn = formElement.querySelector('button[type="submit"]');
  const submitBtnRow = submitBtn.parentNode.parentNode;
  submitBtn.classList.add('d-none');
  if (submitBtnRow) submitBtnRow.classList.add('submitBtnRow');

  handleStepsBullets(form, fieldsets.length);

  // If fieldsets exist - then it's a multistep form. Iterate over each Fieldset
  fieldsets.forEach((fieldset, index) => {
    const stepNumber = index + 1;
    const stepNumberClass = `step-${index + 1}`;
    const legend = fieldset.querySelector('legend');

    let btnContainer = document.createElement('div');
    let stepSubmitBtn = document.createElement('button');
    if (index === 0) fieldset.classList.add('activeFieldset');
    if (stepNumber === 1) stepsTitlesHandler(stepNumber);
    fieldset.classList.add(stepNumberClass);

    legend.classList.add('d-none');
    btnContainer.className = 'btnContainer px-3';
    fieldset.dataset.formStep = stepNumber;

    if (totalSteps !== stepNumber) {
      stepSubmitBtn.type = 'button';
      stepSubmitBtn.className =
        'mktoButton btn btn-primary btn-primary--blue w-100';
      stepSubmitBtn.dataset.formStep = stepNumber;
      stepSubmitBtn.textContent = legend.innerText;
      btnContainer.appendChild(stepSubmitBtn);
    }

    fieldset.appendChild(btnContainer);
  });

  formElement.addEventListener('click', function (e) {
    if (!e.target.dataset.formStep) return;
    const step = e.target.dataset.formStep;

    if (step) {
      form.validate();
      const activeFieldsetEl = fieldsets[step - 1];

      setTimeout(() => {
        const invalidFields = activeFieldsetEl.querySelectorAll(
          'input.mktoInvalid, select.mktoInvalid, textarea.mktoInvalid, ul[mktoInvalid]'
        );
        const isEmailInvalid = activeFieldsetEl.querySelector('[type=email]')
          ? (isFreemail && isFreemailBlocked) || isEmailValidByZb !== true
          : false;
        const valid = invalidFields.length === 0 && !isEmailInvalid;

        if (valid) {
          activeFieldsetEl.classList.remove('activeFieldset');
          const stepNumber = Number(step) + 1;
          handleStepsBullets(form, totalSteps, stepNumber);
          stepsTitlesHandler(stepNumber);
          const nextFieldsetEl = fieldsets[stepNumber - 1];
          nextFieldsetEl.classList.add('activeFieldset');

          if (stepNumber === totalSteps) submitBtn.classList.remove('d-none');
          triggerStepCompletionEvent(stepNumber - 1);
        }
      }, 50);
    }
  });
};
const handleMarketoForms = (forms) =>
  forms.forEach((form) => handleMarketoForm(form));

// Email validation cache to prevent duplicate API calls
const emailValidationCache = new Map();

// Rate limiting per email to prevent spam
const emailValidationRateLimit = new Map();

// Unified configuration matching server settings
const ZEROBOUNCE_CONFIG = {
  cacheTime: 3600000, // 1 hour in ms (matches server)
  rateLimit: 10, // 10 requests per minute (matches server)
  rateWindow: 60000, // 1 minute in ms
  apiTimeout: 10000, // 10 seconds timeout
  fallbackOnError: true // Allow form submission if API fails
};

// Security: Input sanitization
const sanitizeEmail = (email) => {
  if (typeof email !== 'string') return '';
  
  // Remove dangerous characters, allow only valid email chars
  const sanitized = email.replace(/[^\w@.-]/g, '').toLowerCase().trim();
  
  // Check length limits
  if (sanitized.length > 100 || sanitized.length < 3) return '';
  
  return sanitized;
};

// Security: Rate limiting (unified with server)
const checkRateLimit = (email) => {
  const now = Date.now();
  const rateKey = `${email}_${Math.floor(now / ZEROBOUNCE_CONFIG.rateWindow)}`; // Per minute
  const currentCount = emailValidationRateLimit.get(rateKey) || 0;
  
  if (currentCount >= ZEROBOUNCE_CONFIG.rateLimit) { // Use unified limit
    return false;
  }
  
  emailValidationRateLimit.set(rateKey, currentCount + 1);
  
  // Cleanup old entries
  emailValidationRateLimit.forEach((value, key) => {
    if (key.split('_')[1] < Math.floor((now - ZEROBOUNCE_CONFIG.rateWindow) / ZEROBOUNCE_CONFIG.rateWindow)) {
      emailValidationRateLimit.delete(key);
    }
  });
  
  return true;
};

// Extract form configuration
const getFormConfig = (form) => {
  const isMarketoForm = form.classList.contains('mktoForm');
  const allowListDomains = form.getAttribute('data-allow-list');
  // For signup forms (non-Marketo), always block freemails by default
  // For Marketo forms, block only if specified by class or hidden field
  const isFreemailBlocked = !isMarketoForm ? true :
                             (form.querySelector('[type="email"]')?.classList.contains('validate-business-email') ||
                              !!form.querySelector('input[name="block_freemails_mkto"]'));
  
  let mktoForm = null;
  let mktoElem = null;
  let companyInput = null;
  let companyParent = null;
  
  if (isMarketoForm) {
    const mktoFormID = form.dataset.formId;
    mktoForm = MktoForms2.getForm(mktoFormID);
    mktoElem = mktoForm.getFormElem().find('[type="email"]');
    companyInput = form.querySelector('[name="Company"]');
    companyParent = companyInput?.closest('.mktoFormCol');
  }
  
  return {
    isMarketoForm,
    allowListDomains,
    isFreemailBlocked,
    mktoForm,
    mktoElem,
    companyInput,
    companyParent
  };
};

// Parse allowlist domains
const parseAllowlistDomains = (allowListString) => {
  const defaultAllowlist = ['qq.com', '126.com', '163.com'];
  
  if (!allowListString) return defaultAllowlist;
  
  try {
    return allowListString
      .split(',')
      .map(domain => domain.trim().toLowerCase())
      .filter(domain => domain.match(/^[a-z0-9.-]+\.[a-z]{2,}$/)) // Security: validate domain format
      .concat(defaultAllowlist);
  } catch (error) {
    // Invalid allowlist format, using defaults
    return defaultAllowlist;
  }
};

// Handle validation errors
const handleValidationError = (config, target, errorType, submitBtns) => {
  const { isMarketoForm, mktoForm, mktoElem } = config;
  
  if (isMarketoForm && mktoForm && mktoElem) {
    mktoForm.submittable(false);
    mktoForm.showErrorMessage(errorMessages[langCode][errorType], mktoElem);
  } else if (target && typeof validationMessagesHandler === 'function') {
    validationMessagesHandler(target, false, errorType);
  }
  
  enableSubmitButtons(submitBtns);
};

// Handle validation success
const handleValidationSuccess = (config, target, submitBtns) => {
  const { isMarketoForm, mktoForm } = config;
  
  if (isMarketoForm && mktoForm) {
    mktoForm.submittable(true);
  } else if (target && typeof validationMessagesHandler === 'function') {
    validationMessagesHandler(target, true, 'email-invalid');
  }
  
  enableSubmitButtons(submitBtns);
};

// Manage company field visibility and value
const updateCompanyField = (config, email, isFreemail, isInAllowlist) => {
  const { companyInput, companyParent } = config;
  
  if (!companyInput || !companyParent) return;
  
  const shouldHideCompany = isFreemail || isInAllowlist;
  
  if (shouldHideCompany) {
    companyParent.classList.add('d-none');
    companyInput.value = '';
  } else {
    companyParent.classList.remove('d-none');
    companyInput.value = getCompanyFromEmail(email);
  }
};

// Enable submit buttons
const enableSubmitButtons = (submitBtns) => {
  if (!submitBtns) return;
  
  submitBtns.forEach(btn => {
    if (typeof handleSubmitButtonsState === 'function') {
      handleSubmitButtonsState(btn, 'enable');
    }
  });
};

// Disable submit buttons
const disableSubmitButtons = (submitBtns) => {
  if (!submitBtns) return;
  
  submitBtns.forEach(btn => {
    if (typeof handleSubmitButtonsState === 'function') {
      handleSubmitButtonsState(btn, 'disable');
    }
  });
};

const handleSubmitButtonsState = (btn, action) => {
  const isEnabling = action === 'enable';
  btn.disabled = !isEnabling;
  btn.classList.toggle('loader', !isEnabling);
  
  if (!isEnabling) {
    // Store original text if not already stored
    if (!btn.dataset.originalText) {
      btn.dataset.originalText = btn.textContent || btn.innerHTML;
    }
    btn.textContent = 'Please wait...';
  } else {
    // Restore original text
    if (btn.dataset.originalText) {
      btn.textContent = btn.dataset.originalText;
    }
  }
};

// Safely get API configuration
const getAPIConfig = () => {
  if (typeof window.afJs === 'undefined') {
    // afJs is not defined
    return null;
  }
  
  return {
    restUrl: window.afJs.rest_url || '',
    ajaxUrl: window.afJs.ajax_url || '',
    nonce: window.afJs.nonce || '',
    nonceAjax: window.afJs.nonce_ajax || ''
  };
};

// Main API call to ZeroBounce with caching
const validateEmailWithAPI = async (email) => {
  const config = getAPIConfig();
  if (!config || !config.restUrl) {
    // WordPress REST API configuration not available - fallback to allow submission
    return {
      status: 'valid', // Changed from 'unknown' to 'valid' for better fallback
      sub_status: 'config_unavailable_fallback',
      free_email: false,
      did_you_mean: null,
      account: null,
      domain: null,
      api_error: true
    };
  }

  // Check cache first (unified cache time)
  const cacheKey = `zb_${email}`;
  const cached = emailValidationCache.get(cacheKey);
  
  if (cached && (Date.now() - cached.timestamp) < ZEROBOUNCE_CONFIG.cacheTime) {
    // Using cached result
    return cached.data;
  }
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), ZEROBOUNCE_CONFIG.apiTimeout);
    
    const response = await fetch(`${config.restUrl}zerobounce/v1/validate/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest', // Security: CSRF protection
        'X-WP-Nonce': config.nonce // WordPress nonce for authentication
      },
      body: JSON.stringify({ email }),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Cache successful response
    emailValidationCache.set(cacheKey, {
      data,
      timestamp: Date.now()
    });
    
    // Cleanup cache if it gets too large
    if (emailValidationCache.size > 1000) {
      const oldestKey = emailValidationCache.keys().next().value;
      emailValidationCache.delete(oldestKey);
    }    
    return data;

    
  } catch (error) {

    // Fallback: if API is unavailable and config allows, permit submission
    if (ZEROBOUNCE_CONFIG.fallbackOnError) {
      // ZeroBounce unavailable, allowing form submission as fallback
      return {
        status: 'valid', // Allow submission when API is down
        sub_status: 'api_unavailable_fallback',
        free_email: false,
        did_you_mean: null,
        account: null,
        domain: null,
        api_error: true // Mark that this is a fallback response
      };
    }
    
    // Otherwise return fallback response (allow submission)
    return {
      status: 'valid', // Changed from 'unknown' to 'valid' for better fallback
      sub_status: 'api_error_fallback',
      free_email: false,
      did_you_mean: null,
      account: null,
      domain: null,
      api_error: true
    };
  }
};

// Main validation function - reorganized and secured
const zeroBounceValidateEmail = async (event, form, submitBtns) => {
  try {
    // Initialize result variable
    window.isEmailValidByZb = null;
    
    // 1. Input validation and sanitization
    const rawEmail = event.target?.value || event;
    const email = sanitizeEmail(rawEmail);
    
    if (!email) {
      window.isEmailValidByZb = true;
      return;
    }
    
    // 2. Basic email format validation
    const isEmailValid = await validateEmail(email);
    if (!isEmailValid) {
      window.isEmailValidByZb = false;
      handleValidationError(getFormConfig(form), event.target, 'email-invalid', submitBtns);
      return;
    }
    
    // 3. Rate limiting check
    if (!checkRateLimit(email)) {
      window.isEmailValidByZb = true;
      enableSubmitButtons(submitBtns);
      return;
    }
    
    // 4. Get form configuration
    const config = getFormConfig(form);
    const domain = email.split('@')[1];
    const allowlistDomains = parseAllowlistDomains(config.allowListDomains);
    const isInAllowlist = allowlistDomains.includes(domain);
    
    // 5. Disable submit buttons while processing
    disableSubmitButtons(submitBtns);
    
    // 6. Local freemail check for blocked domains
    if (config.isFreemailBlocked && !isInAllowlist) {
      const isLocalFreemail = await isBusinessEmailLocally(email);
      if (isLocalFreemail) {
        window.isFreemail = true;
        window.isEmailValidByZb = false; // Mark email as invalid for signup forms
        handleValidationError(config, event.target, 'business-email-invalid', submitBtns);
        return;
      }
    }
    
    // 7. API validation
    const apiResponse = await validateEmailWithAPI(email);
    
    // 8. Process API response
    const isAPIValid = apiResponse.status !== 'invalid' && !apiResponse.error;
    const isAPIFreemail = isInAllowlist ? false : (apiResponse.freeEmail || false);
    
    // 9. Set global variables
    window.isEmailValidByZb = isAPIValid;
    window.isFreemail = isAPIFreemail;
    
    // 10. Check freemail blocking
    if (config.isFreemailBlocked && isAPIFreemail && !isInAllowlist) {
      handleValidationError(config, event.target, 'business-email-invalid', submitBtns);
      return;
    }
    
    // 11. Update company field for Marketo forms
    if (config.isMarketoForm) {
      updateCompanyField(config, email, isAPIFreemail, isInAllowlist);
    }
    
    // 12. Handle final validation result
    if (isAPIValid) {
      handleValidationSuccess(config, event.target, submitBtns);
    } else {
      handleValidationError(config, event.target, 'email-invalid', submitBtns);
    }
    
    return apiResponse;
    
  } catch (error) {
    // Error occurred - implement graceful fallback
    
    // For signup forms, we want to be more permissive on errors
    const isSignupForm = form && form.classList && !form.classList.contains('mktoForm');
    
    if (isSignupForm) {
      // Signup form: Allow submission on API errors (graceful degradation)
      window.isEmailValidByZb = true;
    } else {
      // Marketo form: More strict, but still allow on critical failures
      window.isEmailValidByZb = true; // Changed to true for better UX
    }
    
    enableSubmitButtons(submitBtns);
  }
};

const zeroBounceForMarketo = (form) => {
  if (!form || typeof form.getId !== 'function') {
    // Invalid form object
    return;
  }

  const formId = `mktoForm_${form.getId()}`;
  const formElem = document.getElementById(formId);
  
  if (!formElem) {
    // Form element not found
    return;
  }

  const emailInput = formElem.querySelector('[type="email"]');

  if (!emailInput) {
    // Email input not found
    return;
  }

  // Successfully initialized for form

  // Store reference to form and email input for use in existing onValidate handler
  window.zeroBounceMarketoForms = window.zeroBounceMarketoForms || {};
  window.zeroBounceMarketoForms[form.getId()] = {
    form: form,
    formElem: formElem,
    emailInput: emailInput,
    lastValidatedEmail: '',
    isValidating: false
  };

  // Form data stored for existing onValidate handler
};


// Clear cache periodically (run every hour)
setInterval(() => {
  const now = Date.now();
  emailValidationCache.forEach((value, key) => {
    if (now - value.timestamp > ZEROBOUNCE_CONFIG.cacheTime) {
      emailValidationCache.delete(key);
    }
  });
}, ZEROBOUNCE_CONFIG.cacheTime);

if (typeof MktoForms2 !== 'undefined') {
  MktoForms2.onFormRender(function (form) {
    handleHiddenFieldsVisibility(form);
    // handleSelectFields(form.getId());

    let formEl = form.getFormElem()[0],
      randomize = '_' + new Date().getTime() + Math.random(),
      arrayify = getSelection.call.bind([].slice);

    arrayify(formEl.querySelectorAll('label[for]')).forEach(function (labelEl) {
      let forEl = formEl.querySelector('[id="' + labelEl.htmlFor + '"]');
      if (forEl) labelEl.htmlFor = forEl.id = forEl.id + randomize;
    });

    setCountryWhenReady();
    reorderLabels();
    getUserLocationFromWPAPI();
    getUserLangFromWPAPI();

    // Temporary workaround to assign 'for' attribute to demo checkbox label
    // Should be removed!!!!.
    const unlinkedLabel = formEl.querySelector('label:not([for])');

    if (unlinkedLabel && unlinkedLabel.previousElementSibling) {
      unlinkedLabel.htmlFor = unlinkedLabel.previousElementSibling.htmlFor;
    }
  });

  MktoForms2.whenReady(function (form) {
    prefillEmailFromCookie();
    reorderLabels();
    setTimeout(() => {
      multiCBXSelection();
      handleSelectFields(form.getId());
    }, 500);

    updateMarketoFormHiddenFields(form.getFormElem()[0]);
    if (isUserFilledForm && 'false' === userEmailCache) fetchEmail();

    const formElement = form.getFormElem()[0];
    const fieldsets = formElement.querySelectorAll('fieldset');

    if ('undefined' !== fieldsets && fieldsets.length > 0)
      addSteps(form, fieldsets);
    zeroBounceForMarketo(form);

    let formEl = $(form.getFormElem()),
      formCta = formEl.data('form-cta'),
      afterButton = formEl.data('after-button'),
      buttonAft = formEl.data('button-aft'),
      buttonAftBlock = formEl.data('button-aft-block'),
      isQaFrom = formEl.data('isqa'),
      preloader = document
        .querySelector(`#${formEl[0].id}`)
        .querySelector('.form-preloader');

    if (isQaFrom) handleCompanyType(formElement);

    /* Need to check why wee need this -- Elram*/
    populateLang(formEl[0], '[name="HSUTMLanguage__c"]');

    const companyInput = formEl[0].querySelector('[name="Company"]');
    const companyParent = companyInput
      ? companyInput.closest('.mktoFormCol')
      : false;

    if (companyParent) {
      companyParent.classList.add('d-none');
      const companyRow = companyParent.closest('.mktoFormRow');
      if (companyRow){
        companyRow.classList.add('d-none');
      }
    }

    // Place the Policy text after button
    if (afterButton) {
      const policyText = document.querySelector(
        `#${formEl[0].id} .mktoHtmlText`
      );
      const formWrap = policyText.closest('.marketo-form__form-holder');
      formWrap.append(policyText);
    }

    // Handle T&C content based on source
    const tncSource = formEl[0].dataset.tncSource;
    const tncContent = formEl[0].dataset.tnc;
    const tncGlobalContent = formEl[0].dataset.tncGlobal;
    
    if (tncSource && tncSource !== 'marketo') {
        const policyText = document.querySelector(`#${formEl[0].id} .mktoHtmlText`);
        const captchaDisclaimer = document.querySelector(`#${formEl[0].id} .mktoCaptchaDisclaimer`);
        
        if (policyText) {
          let shouldReplace = false;
          let newContent = '';
          
          if (tncSource === 'custom' && tncContent) {
            shouldReplace = true;
            newContent = tncContent;
          } else if (tncSource === 'global' && tncGlobalContent) {
            shouldReplace = true;
            newContent = tncGlobalContent;
          }
          
          if (shouldReplace) {
            policyText.innerHTML = newContent;
          }
        }
        
        if (captchaDisclaimer) {
          captchaDisclaimer.style.display = 'none';
        }
    }

    let afcFieldAction = 'false' !== isCookiesAllowed ? 'remove' : 'add';
    handleAfcHiddenField(formEl[0].id, afcFieldAction);

    // Update submit button text
    document.querySelector(`#${formEl[0].id}`).classList.add('on');
    if (preloader) preloader.remove();
    if ((!fieldsets || fieldsets.length === 0) && formCta)
      document.querySelector(`#${formEl[0].id} .mktoButton`).innerHTML =
        formCta;
    document
      .querySelector(`#${formEl[0].id}`)
      .querySelector('button[type="submit"]').dataset.aft = buttonAft
      ? buttonAft.trim()
      : 'form-submit';
    document
      .querySelector(`#${formEl[0].id}`)
      .querySelector('button[type="submit"]').dataset.aftBlock = buttonAftBlock
      ? buttonAftBlock.trim()
      : 'marketo-form';
    document
      .querySelector(`#${formEl[0].id}`)
      .querySelector('button[type="submit"]').id = `btn_${formEl[0].id}`;
  });
}

const initUtmHandlers = () => {
  storeUTMs(utmsArray);
  storeParams(paramsArray);
  allForms.forEach((form) => {
    handleAfcHiddenField(form.id, 'remove');
  });
  if ('undefined' !== typeof signUpForms && signUpForms.length > 0)
    updateSignupFormsHiddenFields(signUpForms);
  if ('undefined' !== typeof marketoForms && marketoForms.length > 0)
    updateMarketoFormsHiddenFields(marketoForms);
};

afcArray.forEach((param) => {
  let value = getUrlParameter(param[0]);
  if (value) sessionStorage.setItem(param[0], value);
});

const initAfcHandlers = () => {
  if ('undefined' !== typeof signUpForms && signUpForms.length > 0)
    updateSignupFormsHiddenFields(signUpForms);
  allForms.forEach((form) => handleAfcHiddenField(form.id, 'add'));
};

const getAfcDateFormat = () => {
  let d = new Date();
  d = new Date(d.getTime());
  return d.toISOString();
};

const handleAfcHiddenField = (formId, action) => {
  let inputs = document.querySelectorAll('[name="Last_AFC_Date__c"]');

  if (!document.getElementById('Last_AFC_Date__c') && action === 'remove')
    return;

  if (
    null !== document.getElementById('Last_AFC_Date__c') &&
    action === 'remove'
  ) {
    document.getElementById('Last_AFC_Date__c').value = null;
  }

  if (inputs.length === 0 && action === 'add') {
    let input;
    input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', 'Last_AFC_Date__c');
    input.setAttribute('id', 'Last_AFC_Date__c');
    input.value = getAfcDateFormat();
    document.getElementById(formId).appendChild(input);
  }

  inputs = document.querySelectorAll('[name="Last_AFC_Date__c"]');
  inputs.forEach((i) => {
    i.value = action === 'remove' ? null : getAfcDateFormat();
  });
};

const updateHiddenFieldsSessionParams = (form, type) => {
  let sessionParams = handleSessionParams(sessionParamsArray, '');
  for (let key in sessionParams) {
    if (sessionParams.hasOwnProperty(key)) {
      let fieldKey = key;
      if (key === 'internalrefplat' || key === 'inrefplat') {
        fieldKey = 'HS_InternalRefPlat__c';
        updateHiddenField(form[0].id, fieldKey, sessionParams[key]);
      }
    }
  }
};

const handleSessionParams = (utms, mode = 'session') => {
  let params = {};
  utms.forEach((utm) => {
    let value = getUrlParameter(utm[0]);
    if (value && value.length > 0) {
      params[utm[0]] = value;
    }
  });

  if (mode === 'session') {
    let sessionParams =
      JSON.parse(sessionStorage.getItem('sessionParams')) || {};
    Object.assign(sessionParams, params);
    sessionStorage.setItem('sessionParams', JSON.stringify(sessionParams));
    return !!sessionParams;
  }

  return params;
};
const initSessionParamsHandler = () => {
  setTimeout(() => {
    if ('undefined' !== typeof signUpForms && signUpForms.length > 0) {
      updateHiddenFieldsSessionParams(signUpForms, 'signup');
    }
    if ('undefined' !== typeof marketoForms && marketoForms.length > 0) {
      updateHiddenFieldsSessionParams(marketoForms, 'marketo');
    }
  }, 3000);
};

window.addEventListener('DOMContentLoaded', function () {
  handleDriftOptinMonster();
  initSessionParamsHandler();
  if ('undefined' !== typeof MktoForms2 && marketoForms.length > 0) {
    /** Fetch the email if User filled the form AND the userEmailCache is empty */
    handleMarketoForms(marketoForms);
  }
});

document.addEventListener('om.Campaign.afterShow', function (event) {
  const optinmonsterContainer = event.detail.Campaign.contain;
  const marketoFormOptimanster =
    optinmonsterContainer.querySelectorAll('form.mktoForm');
  const restCss =
    event.detail.Campaign.contain.attributes.id.value + '-ResetCSS';
  if (marketoFormOptimanster) handleMarketoForms(marketoFormOptimanster);
  if (restCss) document.getElementById(restCss).remove();
});
function multiCBXSelection() {
  // Get the original container element
  const originalContainer = document.querySelector(
    '.mktoLogicalField.mktoCheckboxList'
  );
  const isMultiCbx = originalContainer?.querySelectorAll('input').length > 1;
  if (!originalContainer || !isMultiCbx) return;
  const clonedContainer = originalContainer.cloneNode(true);
  originalContainer.insertAdjacentElement('afterend', clonedContainer);
  originalContainer.style.display = 'none';

  // Check if a wrapper for the dropdown already exists, else create one
  let wrapper = document.getElementById('dropdownWrapper');
  if (!wrapper) {
    wrapper = document.createElement('div');
    wrapper.id = 'dropdownWrapper';
    wrapper.style = 'width:100%';
    // Append the wrapper at the end of the body (or choose a specific insertion point)
    clonedContainer.parentNode.insertBefore(
      wrapper,
      clonedContainer.nextSibling
    );
  }

  // Create the new dropdown container
  const dropdownContainer = document.createElement('div');
  dropdownContainer.className = 'dropdown-container';
  dropdownContainer.id = 'dropdownContainer';

  // Create the dropdown header
  const dropdownHeader = document.createElement('div');
  dropdownHeader.className = 'dropdown-header';
  dropdownHeader.id = 'dropdownHeader';
  dropdownHeader.textContent = 'Which solutions are you interested in? (Select all that apply)*';
  dropdownContainer.appendChild(dropdownHeader);

  // Create the dropdown content container
  const dropdownContent = document.createElement('div');
  dropdownContent.className = 'dropdown-content';
  dropdownContent.addEventListener('change', () => {
    const CBXList = dropdownContent.querySelector('ul');
    if (dropdownContent.querySelector(':checked') !== null) {
      CBXList.removeAttribute('mktoInvalid');
    } else {
      CBXList.setAttribute('mktoInvalid', '');
    }
  });
  dropdownContainer.appendChild(dropdownContent);

  // Create a new unordered list to hold the checkbox options
  const optionsList = document.createElement('ul');
  // Copy over the original classes from the original container (if needed)
  // optionsList.setAttribute('mktoInvalid', '');
  dropdownContent.appendChild(optionsList);

  // Get all children of the original container
  const children = clonedContainer.children;

  // Loop through children and pick only input-label pairs.
  // Assuming valid options are an <input> (checkbox) followed by a <label>.
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.tagName === 'INPUT' && child.type === 'checkbox') {
      // Get the associated label (the next sibling)
      child.id = `${child.id}-cloned`;
      const nextSibling = children[i + 1];
      if (nextSibling && nextSibling.tagName === 'LABEL') {
        const li = document.createElement('li');
        nextSibling.setAttribute(
          'for',
          `${nextSibling.getAttribute('for')}-cloned`
        );
        li.appendChild(child.cloneNode(true));
        li.appendChild(nextSibling.cloneNode(true));
        optionsList.appendChild(li);
        // Skip the next element (label) as it's already processed
        i++;
      }
    }
  }

  // Insert the custom dropdown into the wrapper
  wrapper.appendChild(dropdownContainer);

  // Remove the original container
  clonedContainer.parentNode.removeChild(clonedContainer);

  // Toggle dropdown open/close when clicking the header
  dropdownHeader.addEventListener('click', function () {
    dropdownContainer.classList.toggle('open');
  });

  // Update header text based on selected checkboxes
  const checkboxes = optionsList.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((chk) => {
    chk.addEventListener('change', function () {
      let originalChk = this.closest('.mktoFieldWrap')
        .querySelector('.mktoCheckboxList')
        .querySelector(`[value='${this.value}']`);
      if (this.checked) originalChk.checked = true;
      else {
        originalChk.checked = false;
      }
      let selected = [];
      checkboxes.forEach((input) => {
        if (input.checked) {
          selected.push(input.value);
        }
      });
      dropdownHeader.textContent = selected.length
        ? selected.join(', ')
        : 'Which solutions are you interested in? (Select all that apply)*';
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function (event) {
    if (!dropdownContainer.contains(event.target)) {
      dropdownContainer.classList.remove('open');
    }
  });
}

/**
 * Form Validation
 */

const isoCountries = {
  AF: 'Afghanistan',
  AX: 'Aland Islands',
  AL: 'Albania',
  DZ: 'Algeria',
  //   AS: 'American Samoa',
  AD: 'Andorra',
  AO: 'Angola',
  AI: 'Anguilla',
  AQ: 'Antarctica',
  AG: 'Antigua And Barbuda',
  AR: 'Argentina',
  AM: 'Armenia',
  AW: 'Aruba',
  AU: 'Australia',
  AT: 'Austria',
  AZ: 'Azerbaijan',
  BS: 'Bahamas',
  BH: 'Bahrain',
  BD: 'Bangladesh',
  BB: 'Barbados',
  BY: 'Belarus',
  BE: 'Belgium',
  BZ: 'Belize',
  BJ: 'Benin',
  BM: 'Bermuda',
  BT: 'Bhutan',
  BO: 'Bolivia',
  BA: 'Bosnia And Herzegovina',
  BW: 'Botswana',
  BV: 'Bouvet Island',
  BR: 'Brazil',
  IO: 'British Indian Ocean Territory',
  BN: 'Brunei Darussalam',
  BG: 'Bulgaria',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  KH: 'Cambodia',
  CM: 'Cameroon',
  CA: 'Canada',
  CV: 'Cape Verde',
  KY: 'Cayman Islands',
  CF: 'Central African Republic',
  TD: 'Chad',
  CL: 'Chile',
  CN: 'China',
  CX: 'Christmas Island',
  CC: 'Cocos (Keeling) Islands',
  CO: 'Colombia',
  KM: 'Comoros',
  CG: 'Congo',
  CD: 'Congo, Democratic Republic',
  CK: 'Cook Islands',
  CR: 'Costa Rica',
  CI: "Cote D'Ivoire",
  HR: 'Croatia',
  CY: 'Cyprus',
  CZ: 'Czech Republic',
  DK: 'Denmark',
  DJ: 'Djibouti',
  DM: 'Dominica',
  DO: 'Dominican Republic',
  EC: 'Ecuador',
  EG: 'Egypt',
  SV: 'El Salvador',
  GQ: 'Equatorial Guinea',
  ER: 'Eritrea',
  EE: 'Estonia',
  ET: 'Ethiopia',
  FK: 'Falkland Islands (Malvinas)',
  FO: 'Faroe Islands',
  FJ: 'Fiji',
  FI: 'Finland',
  FR: 'France',
  GF: 'French Guiana',
  PF: 'French Polynesia',
  TF: 'French Southern Territories',
  GA: 'Gabon',
  GM: 'Gambia',
  GE: 'Georgia',
  DE: 'Germany',
  GH: 'Ghana',
  GI: 'Gibraltar',
  GR: 'Greece',
  GL: 'Greenland',
  GD: 'Grenada',
  GP: 'Guadeloupe',
  //   GU: 'Guam',
  GT: 'Guatemala',
  GG: 'Guernsey',
  GN: 'Guinea',
  GW: 'Guinea-Bissau',
  GY: 'Guyana',
  HT: 'Haiti',
  HM: 'Heard Island & Mcdonald Islands',
  VA: 'Holy See (Vatican City State)',
  HN: 'Honduras',
  HK: 'Hong Kong',
  HU: 'Hungary',
  IS: 'Iceland',
  IN: 'India',
  ID: 'Indonesia',
  IE: 'Ireland',
  IM: 'Isle Of Man',
  IL: 'Israel',
  IT: 'Italy',
  JM: 'Jamaica',
  JP: 'Japan',
  JE: 'Jersey',
  JO: 'Jordan',
  KZ: 'Kazakhstan',
  KE: 'Kenya',
  KI: 'Kiribati',
  KR: 'Korea',
  KW: 'Kuwait',
  KG: 'Kyrgyzstan',
  LA: "Lao People's Democratic Republic",
  LV: 'Latvia',
  LS: 'Lesotho',
  LR: 'Liberia',
  LY: 'Libyan Arab Jamahiriya',
  LI: 'Liechtenstein',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MO: 'Macao',
  MK: 'Macedonia',
  MG: 'Madagascar',
  MW: 'Malawi',
  MY: 'Malaysia',
  MV: 'Maldives',
  ML: 'Mali',
  MT: 'Malta',
  MH: 'Marshall Islands',
  MQ: 'Martinique',
  MR: 'Mauritania',
  MU: 'Mauritius',
  YT: 'Mayotte',
  MX: 'Mexico',
  FM: 'Micronesia, Federated States Of',
  MD: 'Moldova',
  MC: 'Monaco',
  MN: 'Mongolia',
  ME: 'Montenegro',
  MS: 'Montserrat',
  MA: 'Morocco',
  MZ: 'Mozambique',
  MM: 'Myanmar',
  NA: 'Namibia',
  NR: 'Nauru',
  NP: 'Nepal',
  NL: 'Netherlands',
  //   AN: 'Netherlands Antilles',
  NC: 'New Caledonia',
  NZ: 'New Zealand',
  NI: 'Nicaragua',
  NE: 'Niger',
  NG: 'Nigeria',
  NU: 'Niue',
  NF: 'Norfolk Island',
  MP: 'Northern Mariana Islands',
  NO: 'Norway',
  OM: 'Oman',
  PK: 'Pakistan',
  // 'PW': 'Palau',
  PS: 'Palestinian Territory, Occupied',
  PA: 'Panama',
  PG: 'Papua New Guinea',
  PY: 'Paraguay',
  PE: 'Peru',
  PH: 'Philippines',
  PN: 'Pitcairn',
  PL: 'Poland',
  PT: 'Portugal',
  PR: 'Puerto Rico',
  QA: 'Qatar',
  RE: 'Reunion',
  RO: 'Romania',
  RU: 'Russian Federation',
  RW: 'Rwanda',
  BL: 'Saint Barthelemy',
  SH: 'Saint Helena',
  KN: 'Saint Kitts And Nevis',
  LC: 'Saint Lucia',
  MF: 'Saint Martin',
  PM: 'Saint Pierre And Miquelon',
  VC: 'Saint Vincent And Grenadines',
  WS: 'Samoa',
  SM: 'San Marino',
  ST: 'Sao Tome And Principe',
  SA: 'Saudi Arabia',
  SN: 'Senegal',
  RS: 'Serbia',
  SC: 'Seychelles',
  SL: 'Sierra Leone',
  SG: 'Singapore',
  SK: 'Slovakia',
  SI: 'Slovenia',
  SB: 'Solomon Islands',
  SO: 'Somalia',
  ZA: 'South Africa',
  GS: 'South Georgia And Sandwich Isl.',
  ES: 'Spain',
  LK: 'Sri Lanka',
  SR: 'Suriname',
  SJ: 'Svalbard And Jan Mayen',
  SZ: 'Swaziland',
  SE: 'Sweden',
  CH: 'Switzerland',
  TW: 'Taiwan',
  TJ: 'Tajikistan',
  TZ: 'Tanzania',
  TH: 'Thailand',
  TL: 'Timor-Leste',
  TG: 'Togo',
  TK: 'Tokelau',
  TO: 'Tonga',
  TT: 'Trinidad And Tobago',
  TN: 'Tunisia',
  TR: 'Turkey',
  TM: 'Turkmenistan',
  TC: 'Turks And Caicos Islands',
  TV: 'Tuvalu',
  UG: 'Uganda',
  UA: 'Ukraine',
  AE: 'United Arab Emirates',
  GB: 'United Kingdom',
  US: 'United States',
  //   UM: 'United States Outlying Islands',
  UY: 'Uruguay',
  UZ: 'Uzbekistan',
  VU: 'Vanuatu',
  VE: 'Venezuela',
  VN: 'Viet Nam',
  VG: 'Virgin Islands, British',
  //   VI: 'Virgin Islands, U.S.',
  WF: 'Wallis And Futuna',
  EH: 'Western Sahara',
  YE: 'Yemen',
  ZM: 'Zambia',
  ZW: 'Zimbabwe',
}

const GRECAPTCHA_SITE_KEY = '6LfVEhkaAAAAAL2Mv8ARzzPScHRp0_K0JL2MgVnU'
const errorMessages = {
  en: {
      required: 'Required field',
      'email-invalid': 'Invalid email address',
      'business-email-invalid': 'Please enter your work email',
      'password-invalid': 'Invalid password',
      'phone-invalid': 'Invalid number',
      'text-non-latin': 'English characters only',
      'text-characters': 'Letters only',
      'text-emails-list':
          'Please use valid email only, separated by a semicolon',
      'url-invalid': 'Invalid URL',
      'checkbox-required': 'You must check this box',
      'radio-required': 'Please select',
      'invalid-zipcode': 'Invalid zipcode',
      'invalid-us-zipcode': 'Invalid USA zipcode',
      'file-upload-size': '',
      'recaptcha-not-valid': '',
      'please-wait': 'Please wait...',
      'no-results': 'No results found',
      'form-error':
          'Sorry, there was a problem submitting the form. Our team is on it, so give us just a bit and you can try again. If you encounter the same problem, you can contact us at <a href="mailto:support@appsflyer.com">support@appsflyer.com</a>',
      loading: 'Loading',
      'long-text': 'Max 50 characters allowed',
      next: 'Next',
  },
  zh: {
      required: 'Required field',
      'email-invalid': '无效邮箱',
      'business-email-invalid': 'Please enter your work email',
      'password-invalid': 'Invalid password',
      'phone-invalid': 'Invalid number',
      'text-non-latin': 'English characters only',
      'text-characters': 'Letters only',
      'text-emails-list':
          'Please use valid email only, separated by a semicolon',
      'url-invalid': 'Invalid URL',
      'checkbox-required': 'You must check this box',
      'radio-required': 'Please select',
      'invalid-zipcode': 'Invalid zipcode',
      'file-upload-size': '',
      'recaptcha-not-valid': '',
      'please-wait': '请稍等...',
      'no-results': 'No results found',
      'form-error':
          'Sorry, there was a problem submitting the form. Our team is on it, so give us just a bit and you can try again. If you encounter the same problem, you can contact us at <a href="mailto:support@appsflyer.com">support@appsflyer.com</a>',
      loading: 'Loading',
      'long-text': '不超过 50 个字',
      next: 'Next',
  },
  es: {
      required: 'Campo obligatorio',
      'email-invalid': 'Dirección de correo electrónico no válida',
      'business-email-invalid':
          'Por favor ingresa tu correo electrónico de trabajo',
      'password-invalid': 'Contraseña inválida',
      'phone-invalid': 'Número inválido',
      'text-non-latin': 'Solo caracteres ingleses',
      'text-characters': 'Letters only',
      'text-emails-list':
          'Utiliza solo un correo electrónico válido, separado por un punto y coma\n',
      'url-invalid': 'URL inválida',
      'checkbox-required': 'Debes marcar esta casilla',
      'radio-required': 'Por favor selecciona',
      'invalid-zipcode': 'Invalid zipcode',
      'file-upload-size': '',
      'recaptcha-not-valid': '',
      'please-wait': 'Espera por favor...',
      'no-results': 'No se han encontrado resultados',
      'form-error':
          'Sorry, there was a problem submitting the form. Our team is on it, so give us just a bit and you can try again. If you encounter the same problem, you can contact us at <a href="mailto:support@appsflyer.com">support@appsflyer.com</a>',
      loading: 'Loading',
      'long-text': 'Máximo 50 caracteres',
      next: 'Next',
  },
  ko: {
      required: '필수 입력란',
      'email-invalid': '유효하지 않은 이메일 주소',
      'business-email-invalid': '업무용 이메일을 입력하세요',
      'password-invalid': '유효하지 않은 비밀번호',
      'phone-invalid': '유효하지 않은 전화번호',
      'text-non-latin': '영문 알파벳만 가능합니다',
      'text-characters': 'Letters only',
      'text-emails-list':
          '이메일이 올바른지 확인하세요. 각 이메일은 세미콜론(;)으로 구분하세요',
      'url-invalid': '유효하지 않은 URL',
      'checkbox-required': '이 체크박스를 체크하셔야 합니다',
      'radio-required': '선택하세요',
      'invalid-zipcode': 'Invalid zipcode',
      'file-upload-size': '',
      'recaptcha-not-valid': '',
      'please-wait': '잠시만 기다려주세요',
      'no-results': 'No results found',
      'form-error':
          'Sorry, there was a problem submitting the form. Our team is on it, so give us just a bit and you can try again. If you encounter the same problem, you can contact us at <a href="mailto:support@appsflyer.com">support@appsflyer.com</a>',
      loading: 'Loading',
      'long-text': '최대 50자',
      next: 'Next',
  },
  pt: {
      required: 'Campos obrigatórios',
      'email-invalid': 'Endereço de email inválido',
      'business-email-invalid': 'Por favor digite o seu email profissional',
      'password-invalid': 'Senha inválida',
      'phone-invalid': 'Número inválido',
      'text-non-latin': 'Caracteres em inglês apenas',
      'text-characters': 'Letters only',
      'text-emails-list':
          'Use apenas um e-mail válido, separado por ponto e vírgula',
      'url-invalid': 'URL inválido',
      'checkbox-required': 'Você deve marcar aqui',
      'radio-required': 'Por favor selecione',
      'invalid-zipcode': 'Invalid zipcode',
      'file-upload-size': '',
      'recaptcha-not-valid': '',
      'please-wait': 'Por favor, aguarde...',
      'no-results': 'No results found',
      'form-error':
          'Sorry, there was a problem submitting the form. Our team is on it, so give us just a bit and you can try again. If you encounter the same problem, you can contact us at <a href="mailto:support@appsflyer.com">support@appsflyer.com</a>',
      loading: 'Carregando',
      'long-text': 'Máximo de 50 caracteres',
      next: 'Next',
  },
  ru: {
      required: 'Обязательное поле',
      'email-invalid': 'Введите email-адрес в формате example@yourdomain.ru',
      'business-email-invalid': 'Пожалуйста, введите ваш рабочий email',
      'password-invalid': 'Неверный пароль',
      'phone-invalid': 'Неверный номер',
      'text-non-latin': 'Только английские буквы',
      'text-emails-list':
          'Пожалуйста, используйте только правильные адреса электронной почты, разделенные точкой с запятой',
      'url-invalid': 'Неверная ссылка',
      'checkbox-required': 'Галочка в этом поле обязательна',
      'radio-required': 'Пожалуйста, выберите',
      'invalid-zipcode': 'Invalid zipcode',
      'file-upload-size': '',
      'recaptcha-not-valid': '',
      'please-wait': 'Please wait...',
      'no-results': 'No results found',
      'form-error':
          "Sorry! We've encountered an error during submission. Please try again later.",
      loading: 'Loading',
      'long-text': 'Не более 50 символов',
      next: 'Next',
  },
  de: {
      required: 'Pflichtfeld',
      'email-invalid': 'Ungültige E-Mail Adresse',
      'business-email-invalid': 'Bitte geben Sie Ihre E-Mail Addresse an',
      'password-invalid': 'Ungültiges Passwort',
      'phone-invalid': 'Ungültige Telefonnummer',
      'text-non-latin': 'Nur englische Zeichen',
      'text-characters': 'Letters only',
      'text-emails-list':
          'Bitte verwenden Sie nur gültige E-Mail-Adressen, getrennt durch ein Semikolon',
      'url-invalid': 'Ungültige URL',
      'checkbox-required': 'Dieses Feld ist ein Pflichtfeld',
      'radio-required': 'Bitte auswählen',
      'invalid-zipcode': 'Invalid zipcode',
      'file-upload-size': '',
      'recaptcha-not-valid': '',
      'please-wait': 'Please wait...',
      'no-results': 'No results found',
      'form-error':
          "Sorry! We've encountered an error during submission. Please try again later.",
      loading: 'Loading',
      'long-text': 'Maximal 50 Zeichen erlaubt',
      next: 'Next',
  },
  ja: {
      required: 'こちらは必須項目です',
      'email-invalid': '無効なメールアドレスです。',
      'business-email-invalid': 'ビジネス用メールアドレスを入力してください',
      'password-invalid': '無効なパスワードです',
      'phone-invalid': '無効な電話番号です',
      'text-non-latin': 'アルファベットのみ利用可能です',
      'text-characters': 'Letters only',
      'text-emails-list':
          'セミコロンで区切られた有効なEメールのみを使用してください',
      'url-invalid': '無効なURL',
      'checkbox-required': 'こちらのboxをご確認ください',
      'radio-required': '選択してください',
      'invalid-zipcode': 'Invalid zipcode',
      'file-upload-size': '',
      'recaptcha-not-valid': '',
      'please-wait': '少々おまちください...',
      'no-results': 'No results found',
      'form-error':
          '申し訳ございません。フォームの送信に問題がありました。チームが対応していますので、少し待って再度お試しください。再度同じ問題が発生した際には<a href="mailto:support@appsflyer.com">support@appsflyer.com</a>"までご連絡ください。',
      loading: 'Loading',
      'long-text': '最大50文字まで可能',
      next: 'Next',
  },
  fr: {
      required: 'Champ obligatoire',
      'email-invalid': 'Adresse électronique non valide',
      'business-email-invalid':
          'Veuillez entrer votre adresse e-mail professionnelle',
      'password-invalid': 'Mot de passe invalide',
      'phone-invalid': 'Numéro non valide',
      'text-non-latin': 'Caractères français uniquement',
      'text-characters': 'Letters only',
      'text-emails-list':
          'Veuillez utiliser uniquement des emails valides, séparés par un point-virgule',
      'url-invalid': 'URL non valide',
      'checkbox-required': 'Vous devez cocher cette case',
      'radio-required': 'Veuillez sélectionner',
      'invalid-zipcode': 'Invalid zipcode',
      'file-upload-size': '',
      'recaptcha-not-valid': '',
      'please-wait': 'Please wait...',
      'no-results': 'No results found',
      'form-error':
          'Sorry, there was a problem submitting the form. Our team is on it, so give us just a bit and you can try again. If you encounter the same problem, you can contact us at <a href="mailto:support@appsflyer.com">support@appsflyer.com</a>',
      loading: 'Loading',
      'long-text': '50 caractères maximum',
      next: 'Next',
  },
  'zh-hans': {
      required: '必填',
      'email-invalid': 'Invalid email address',
      'business-email-invalid': 'Please enter your work email',
      'password-invalid': '无效密码',
      'phone-invalid': 'Invalid number',
      'text-non-latin': 'English characters only',
      'text-characters': 'Letters only',
      'text-emails-list':
          'Please use valid email only, separated by a semicolon',
      'url-invalid': 'Invalid URL',
      'checkbox-required': 'You must check this box',
      'radio-required': 'Please select',
      'invalid-zipcode': 'Invalid zipcode',
      'file-upload-size': '',
      'recaptcha-not-valid': '',
      'please-wait': 'Please wait...',
      'no-results': 'No results found',
      'form-error':
          'Sorry, there was a problem submitting the form. Our team is on it, so give us just a bit and you can try again. If you encounter the same problem, you can contact us at <a href="mailto:support@appsflyer.com">support@appsflyer.com</a>',
      loading: 'Loading',
      'long-text': 'Max 50 characters allowed',
      next: 'Next',
  },
  vi: {
      required: 'Trường bắt buộc',
      'email-invalid': 'Địa chỉ email không hợp lệ',
      'business-email-invalid': 'Vui lòng nhập email công việc của bạn',
      'password-invalid': 'Mật khẩu không hợp lệ',
      'phone-invalid': 'Số không hợp lệ',
      'text-non-latin': 'Chỉ chấp nhận ký tự tiếng Anh',
      'text-characters': 'Letters only',
      'text-emails-list':
          'Vui lòng sử dụng email hợp lệ, phân tách bằng dấu chấm phẩy',
      'url-invalid': 'Đường dẫn không hợp lệ',
      'checkbox-required': 'Bạn phải chọn ô này',
      'radio-required': 'Vui lòng chọn',
      'invalid-zipcode': 'Invalid zipcode',
      'file-upload-size': '',
      'recaptcha-not-valid': '',
      'please-wait': 'Please wait...',
      'no-results': 'No results found',
      'form-error':
          'Sorry, there was a problem submitting the form. Our team is on it, so give us just a bit and you can try again. If you encounter the same problem, you can contact us at <a href="mailto:support@appsflyer.com">support@appsflyer.com</a>',
      loading: 'Loading',
      'long-text': 'Max 50 characters allowed',
      next: 'Next',
  },
}

function isStaging() {
    const hostname = window.location.hostname;
    
    return (hostname.includes('staging.appsflyer.com') || 
            hostname.includes('.local') || 
            hostname.includes('.ddev.site') ||
            !hostname.includes('appsflyer.com'));
}

const onlySpaces = (str) => str.trim().length === 0
const getLanguageCode = () =>
  document.querySelector('html').attributes.lang.value.substring(0, 2)
const langCode = getLanguageCode()

// Validation messages handler
const validationMessagesHandler = (field, valid, key) => {
  let msg = field.parentNode.querySelector('.field__error-msg'),
      verifyMaxLength = false

  if ('long-text' === key)
      verifyMaxLength = field.hasAttribute('data-max-length')
          ? field.dataset.maxLength
          : null

  key = typeof valid === 'object' ? valid[1] : key
  valid = typeof valid === 'object' ? valid[0] : valid

  if (valid && msg) {
      msg.remove()
      field.parentNode.classList.remove('field--error')
  } else if (!valid) {
      let langObj = errorMessages[langCode]
              ? errorMessages[langCode]
              : errorMessages['en'],
          errorMsg = field.dataset.errorMsg
              ? field.dataset.errorMsg
              : langObj[key]
      if (verifyMaxLength !== false)
          errorMsg = errorMsg.replace('50', verifyMaxLength)

      if (!msg) {
          field.parentNode.classList.add('field--error')
          field.parentNode.insertAdjacentHTML(
              'beforeend',
              `<span class="field__error-msg">${errorMsg}</span>`
          )
      } else {
          msg.textContent = errorMsg
      }
  }
  return valid
}

const getFieldValidationFn = (type, key) => {
  let fn
  switch (type) {
      case 'text':
          fn = validateText
          break
      case 'textarea':
          fn = validateText
          break
      case 'email':
          fn = validateEmail
          break
      case 'password':
          fn = validatePassword
          key = 'password-invalid'
          break
      case 'checkbox':
          fn = validateCheckbox
          key = 'checkbox-required'
          break
      case 'radio':
          fn = validateRadio
          key = 'radio-required'
          break
      case 'tel':
          fn = validatePhone
          key = 'phone-invalid'
          break
      case 'url':
          fn = validateUrl
          key = 'url-invalid'
          break
      default:
          fn = validateText
          break
  }
  return [fn, key]
}

const parseJSONSafely = (str) => {
  try {
      return JSON.parse(str)
  } catch (e) {
      return {}
  }
}

const handleUrlParamsCookie = (value, expires) => {
  document.cookie = `urlParams=${encodeURIComponent(
      JSON.stringify(value)
  )}; domain=.appsflyer.com; expires="${expires.toUTCString()}"; path=/; secure;`
}
const handleMktoActivityCookie = (value, expires) => {
  document.cookie = `mktoActivity=${encodeURIComponent(
      JSON.stringify(value)
  )}; domain=.appsflyer.com; expires="${expires.toUTCString()}"; path=/; secure;`
}
const afMktoActivityCookieHandler = (cookieName, action, data, key) => {
  let cookie = getCookieValueByName(cookieName)
      ? JSON.parse(decodeURIComponent(getCookieValueByName(cookieName)))
      : {}

  let cookieExpires = new Date()
  cookieExpires.setTime(cookieExpires.getTime() + 365 * 24 * 60 * 60 * 1000)

  if (cookieName && cookie && action === 'get') {
      if (null === data) {
          return cookie
      } else {
          return cookie[key] && cookie[key][data] ? cookie[key][data] : null
      }
  }

  if (!cookie || 'add' === action) {
      if (Array.isArray(cookie[key])) {
          cookie[key].push({ data })
      } else {
          cookie[key] = [{ data }]
      }
      handleMktoActivityCookie(cookie, cookieExpires)
  } else if ('true' === isCookiesAllowed) {
      if (!cookie[key]) {
          cookie[key] = {}
      }

      // Existing cookie data found
  } else {
      // No cookie found
  }
}
const afCookieHandler = (action, data, key) => {
  let cookie = getCookieValueByName('urlParams')
          ? getCookieValueByName('urlParams')
          : {},
      cookieExpires = new Date()
  cookie = decodeURIComponent(cookie)
  cookieExpires.setTime(cookieExpires.getTime() + 365 * 24 * 60 * 60 * 1000)

  if ('true' !== isCookiesAllowed) return

  if (!cookie || 'object' === typeof cookie) {
      cookie[key] = data
      handleUrlParamsCookie(cookie, cookieExpires)
      return
  }

  if ('true' === isCookiesAllowed && cookie) {
      cookie = parseJSONSafely(cookie)
      if (!cookie[key]) cookie[key] = {}
  }

  if (action === 'get-category') {
      return cookie[key]
  }

  if (action === 'get') {
      if (null === data) {
          return cookie
      } else {
          return cookie[key][data]
      }
  }

  if (action === 'update') {
      Object.entries(data).forEach((e) => {
          if (cookie[key][e[0]] !== data[e[0]]) cookie[key][e[0]] = data[e[0]]
      })
      handleUrlParamsCookie(cookie, cookieExpires)
  }
  // New action, exsit to check if property exist, and add, to push a new key with values.
  if (action === 'exist') {
      return cookie.hasOwnProperty(key)
  }

  if (action === 'add') {
      if (!Array.isArray(cookie[key])) {
          cookie[key] = []
      }
      cookie[key].push({ data })
      handleUrlParamsCookie(cookie, cookieExpires)
  }
  if (action === 'remove') {
      if (cookie[key]) {
          delete cookie[key][data]
          handleUrlParamsCookie(cookie, cookieExpires)
      }
  }
}

const generatePidAjax = async (companyName = '') => {
  const validation_input = document.getElementById('validate_pid')
  if (!validation_input) {
      // Element with id "validate_pid" not found
      return // Exit the function if the element is missing
  }

  if (!companyName) {
      // Company name is required
      return
  }

  const url = getBaseUrl() + '/wp-admin/admin-ajax.php'

  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded', // Required for WordPress
          },
          body: new URLSearchParams({
              action: 'generate_pid', // Action name defined in PHP
              companyName: companyName.trim(),
          }),
      })

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()

      if (data.success) {
          pidSuccessHandler(data.data.pid)
          // Generated PID

          // Safely update UI elements
          const validPartnerIdInput = document.querySelector('#partner_id')

          if (validPartnerIdInput) {
              validPartnerIdInput.value = data.data.pid
          } else {
              // Element with id "valid_partner_id" not found
          }

          document.getElementById(
              'field--form-navigation--btn-step-3'
          ).disabled = false
          validation_input.value = 'true' // Update validation status
      } else {
          // Error occurred
          validation_input.value = 'false' // Update validation status
      }
  } catch (error) {
      // Fetch Error occurred
      validation_input.value = 'false' // Update validation status
  }
}

const validatePidAjax = async (customPid = '') => {
  let validation_input = document.getElementById('validate_pid')
  if (!validation_input) {
      // Element with id "validate_pid" not found
      return
  }
  if (!customPid) {
      // customPid is required
      return
  }
  if (!pidClientValidate(customPid)) {
      // Invalid PID format
      pidErrorHandler(customPid)
      return
  }
  let url = getBaseUrl() + '/wp-admin/admin-ajax.php'
  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded', // Required for WordPress
          },
          body: new URLSearchParams({
              action: 'validate_pid', // Action name defined in PHP
              pid: customPid,
          }),
      })

      const data = await response.json()
      const existingError = document.querySelector('.pid-validation')

      // Remove existing error message if present
      if (existingError) {
          existingError.remove()
      }

      if (data.success) {
          // Update the UI with the valid PID
          pidSuccessHandler(data.data.pid)
      } else {
          pidErrorHandler(customPid, data.data.error_id)
      }
  } catch (error) {
      // Fetch Error occurred

      const existingError = document.querySelector('.pid-validation')
      if (existingError) {
          existingError.remove()
      }

      pidErrorHandler(customPid)
  }
}

const generatePid = (form) => {
  let pid
  let custom_partner_id = form.querySelector('#partner_id')

  // Validate partner ID input
  if (!custom_partner_id || custom_partner_id.value.trim() === '') {
      // Partner ID is required
      return
  }

  // Generate PID
  pid = custom_partner_id.value
  // Generated PID
  // Validate the PID format
  if (pid) {
      // Generated PID
      validatePidAjax(pid)
      return pid
  } else {
      // PID generation failed or invalid format
      return
  }
}

function pidClientValidate(pid) {
  return /^[a-z0-9]{5,13}_int$/.test(pid)
}
function pidSuccessHandler(pid = '') {
  document.querySelector('.pid-validation')?.remove()
  const validation_input = document.getElementById('validate_pid')
  const partnerIdInput = document.querySelector('#partner_id')
  partnerIdInput.value = pid
  validation_input.value = 'true'
  document.getElementById(
      'field--form-navigation--btn-step-3'
  ).disabled = false
}

function pidErrorHandler(pid = '', errID = 1) {
  const validation_input = document.getElementById('validate_pid')
  const partnerIdInput = document.querySelector('#partner_id')
  const error_message_html =
      errID === 1
          ? `
<div class="field my-20">
<div class="error-message pid-validation">
  <strong>Invalid PID format:</strong>
  <ul>
    <li>Must only contain lowercase letters (<code>a-z</code>) and numbers (<code>0-9</code>).</li>
    <li>Must be 5 to 13 characters long before <code>_int</code>.</li>
    <li>Must end with <code>_int</code>.</li>
  </ul>
  <p>Your PID: <code>${pid}</code> does not match these rules.</p>
  <p>Example of a valid PID: <code>example123_int</code>.</p>
</div>
</div>
`
          : `
<div class="field my-20">
<div class="error-message pid-validation">
  <strong>Existing PID Format Detected:</strong>
  <p>The PID you entered matches an existing format and cannot be used. Please use a new PID or contact support for assistance.</p>
</div>
</div>
`

  document.querySelector('.pid-validation')?.remove()
  // Insert the error message after the partner_id field
  partnerIdInput.parentElement.insertAdjacentHTML(
      'afterend',
      error_message_html
  )
  validation_input.value = 'false'
  document.getElementById(
      'field--form-navigation--btn-step-3'
  ).disabled = true
}

// Field validator
const validateField = async (form, field) => {
  const validatorResponse = async (fn, value, key) => [await fn(value), key]
  let valid = false,
      getValidateResponse

  if (
      field.hasAttribute('data-max-length') &&
      !validateMaxLength(field.value, field.dataset.maxLength)
  ) {
      validationMessagesHandler(field, false, 'long-text')
      return false
  }

  if (
      field.required === true &&
      field.type !== 'password' &&
      (field.value === '' || onlySpaces(field.value))
  ) {
      validationMessagesHandler(field, false, 'required')
  } else if (field.required === false && field.value === '') {
      valid = true
  } else if (
      field.value !== '' ||
      field.type === 'password' ||
      field.name === 'password'
  ) {
      let type = field.name === 'password' ? 'password' : field.type
      switch (field.type) {
          case 'hidden':
              valid = true
              break
          default:
              getValidateResponse = await validatorResponse(
                  getFieldValidationFn(type)[0],
                  field,
                  getFieldValidationFn(type)[1]
              )
              valid = validationMessagesHandler(
                  field,
                  getValidateResponse[0],
                  getValidateResponse[1]
              )
      }
  }

  return valid
}

// Form validator
const handleValidation = async (form) => {
  let formFields = Array.from(form.elements).filter((elem) => {
      return (
          (elem.localName === 'input' && elem.type !== 'hidden') ||
          elem.localName === 'select' ||
          elem.localName === 'textarea'
      )
  })
  let results = await Promise.all(
      formFields.map((field) => validateField(form, field))
  )
  if (results.includes(false)) handleDisableFields(form, 'enable')
  return !results.includes(false)
}

const validateEmailsList = async (field) =>
  Promise.all(
      field.value.split(';').map(async (email) => await validateEmail(email))
  )
const validateMaxLength = (value, maxLength) =>
  value.length <= Number(maxLength)

// Text validator
const validateText = async (field) => {
  const regex = /^([0-9\/\\A-Za-z!"#$%&()*+\-,.:'`;§±<=>?@^\[\]_{|}~\s]*)$/
  const regexChars = /[<>\{\}]/
  const isValidateLatin = field.classList.contains('validate-latin')
  const isValidateEmailsList =
      field.classList.contains('validate-emails-list') && field.required
  let testLatin = regex.test(field.value)
  let testChars = regexChars.test(field.value)

  if (isValidateLatin) return [testLatin, 'text-non-latin']
  if ('text' === field.type && testChars) return [false, 'text-characters']

  if (isValidateEmailsList) {
      let testEmailsList = await validateEmailsList(field)
      return [!testEmailsList.includes(false), 'text-emails-list']
  }

  return [!(!field.value && field.required), 'required']
}

// Get blocked emails from WP (Theme settings -> General settings

const getUrl = window.location
let urlIndex = isLocal ? 1 : 0
const baseUrl =
  getUrl.protocol + '//' + getUrl.host + '/' + getUrl.pathname.split('/')[0]
const emailsBlacklist = [
  'adeven.com',
  'ab180.co',
  'proton.me',
  'list.ru',
  'internet.ru',
  'domain.com',
  'gml.com',
  'tenjin.io',
  'tenjin.com',
  'branch.io',
  'adjust.com',
  'kochava.com',
  'singular.net',
  'mfilterit.com',
  'revenuecat.com',
  'airbridge.io',
  'airbloc.org',
]
let isEmailValidByZb = null

// Store ZeroBounce validation state per form
window.signupZeroBounceValidation = new Map();

// Initialize ZeroBounce for signup forms - integrates with existing validation
const zeroBounceForSignup = (form) => {
  if (!form || !form.id) return;

  const emailInput = form.querySelector('[type="email"]');
  if (!emailInput) return;

  // Store form reference for validation integration
  window.signupZeroBounceValidation.set(form.id, {
    form: form,
    emailInput: emailInput,
    lastValidatedEmail: '',
    isValidating: false,
    validationResult: null
  });
};

async function getFreemailsList() {
  const response = await fetch(
      `${baseUrl}/wp-content/themes/AF2020/apis/freemails.json`
  ).then((response) => response.json())
  return response
}

// Email validator
const validateEmail = async (field) => {
  let email = typeof field === 'string' ? field : field.value

  if (typeof email !== 'undefined' || field.hasAttribute('data-nb-id')) {
      const emailPattern = new RegExp(
          '^(([^<>()\\[\\]\\.,;:\\s@"]+(.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+.)+[a-zA-Z]{2,}))$'
      )
      const emailPatternBDND = new RegExp(
          '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'
      )
      const isEmailValidByPattern = (email) => emailPatternBDND.test(email)
      let suffix =
              typeof field === 'string'
                  ? field.substring(field.lastIndexOf('@') + 1)
                  : field.value.substring(field.value.lastIndexOf('@') + 1),
          isEmailSyntax =
              typeof field === 'string'
                  ? true
                  : isEmailValidByPattern(field.value),
          isBlacklisted = emailsBlacklist.includes(suffix),
          isBusinessValidation =
              typeof field === 'string'
                  ? false
                  : field.classList.contains('validate-business-email'),
          isEmailsListValidation =
              typeof field === 'string'
                  ? true
                  : field.classList.contains('validate-emails-list')

      if (isBlacklisted) {
          return [!isBlacklisted, 'email-invalid']
      } else if (!isEmailSyntax) {
          return [isEmailSyntax, 'email-invalid']
      } else if (false === isEmailValidByZb) {
          return [false, 'email-invalid']
      } else if (typeof field === 'object' && field.type === 'email' && !field.classList.contains('validate-emails-list')) {
          // Only check cached ZeroBounce result, don't trigger new validation
          // ZeroBounce validation happens only on submit, not during field validation
          
          // If we have a ZeroBounce result, use it, otherwise allow (true)
          if (window.isEmailValidByZb === false) {
              return [false, 'email-invalid'];
          }
          return [true, null]; // Allow email validation to pass
      } else if (isBusinessValidation) {
          if (isFreemail) {
              return [false, 'business-email-invalid']
          }
          return [
              !(await isBusinessEmailLocally(field, 'here1')),
              'business-email-invalid',
          ]
      } else if (isEmailsListValidation) {
          return isEmailValidByPattern(field)
      } else {
          return isEmailSyntax
      }
  }
}

// URL validator
const validateUrl = (field) => {
  let regex1 = /^([0-9A-Za-z]){20,}$/
  let regex2 = new RegExp(
      '^(https?:\\/\\/)?' + // validate protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
          '(\\#[-a-z\\d_]*)?$',
      'i'
  ) // validate fragment locator
  if (regex1.test(field.value.toString())) return false
  return !!regex2.test(field.value)
}

// Phone validator
const validatePhone = (field) => {
  const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
  return regex.test(field.value)
}

// Checkbox validator
const validateCheckbox = (checkbox) => checkbox.checked

// Radio validator
const validateRadio = (radio) => {
  let isDisabled = radio.disabled
  let isRequired = radio.required
  let input = document.querySelector(`input[name="${radio.name}"]:checked`)
  let hasValue = input && input.value !== undefined && input.value !== ''

  if (isDisabled) return !!isDisabled

  return !(isRequired && !hasValue)
}

// Password validator
const validatePassword = (field) => {
  let value = field.value,
      isValid = true,
      regexUpperCase = /[A-Z]/,
      regexLowerCase = /[a-z]/,
      regexNumbers = /[0-9]/,
      regexSpecialChars = /[#!%@?<>@$^&*()]/

  const tooltipItems = {
      length: { test: value.length >= 8 && value.length <= 40 },
      uppercase: { test: regexUpperCase.test(value) },
      lowercase: { test: value && regexLowerCase.test(value) },
      numbers: { test: regexNumbers.test(value) },
      'special-characters': { test: regexSpecialChars.test(value) },
      'email-match': {
          test:
              value !==
              field.parentNode.parentNode.querySelector('input[type="email"]')
                  .value,
      },
  }

  Object.entries(tooltipItems).forEach((item) => {
      let itemClass = `field__password-tooltip--rule-${item[0]}`
      let error = field.parentNode.querySelector(`.${itemClass}`)
      let valid = tooltipItems[item[0]].test

      error.className = valid ? `valid ${itemClass}` : `error ${itemClass}`
      if (!valid) isValid = false
  })

  return isValid
}

// Recaptcha handler
function setCnRecaptcha(form) {
  addGrecaptchaField(form.id, 'af-china')
  handleSubmission(form, 'af-china')
}

const addGrecaptchaField = (formId, value) => {
  document.querySelectorAll('[name="g-recaptcha-response"]').forEach((e) => {
      e.remove()
  })
  let input = document.createElement('input')
  input.setAttribute('type', 'hidden')
  input.setAttribute('name', 'g-recaptcha-response')
  input.setAttribute('value', value)
  document.getElementById(formId).appendChild(input)
}

if ('undefined' !== typeof grecaptcha) {
  grecaptcha.ready(function () {
      grecaptcha.render('recaptcha1', {
          sitekey: '6LfVEhkaAAAAAL2Mv8ARzzPScHRp0_K0JL2MgVnU',
          size: 'invisible',
      })
  })
}

function setRecaptcha(form) {
  grecaptcha
      .execute(GRECAPTCHA_SITE_KEY, { action: 'signup_form' })
      .then(function (token) {
          handleSubmission(form, token)
      })
}

const handleDisableFields = (form, action) => {
  if (form.nodeName !== 'FIELDSET') {
      let formId = form.id ? form.id : form.srcElement.id,
          btn = document.querySelector(`#${formId} [type="submit"]`)

      if (action === 'text-change') {
          btn.innerText = errorMessages[langCode]['please-wait']
      } else if (action === 'error') {
          let errMsg = document.createElement('span')
          errMsg.classList.add(
              'mt-4',
              'px-30',
              'has-small-font-size',
              'text-danger'
          )
          errMsg.innerHTML = errorMessages['en']['form-error']
          btn.insertAdjacentElement('afterend', errMsg)
          btn.innerText = btn.dataset.cta ? btn.dataset.cta : 'Submit'
          btn.disabled = false
      } else {
          btn.disabled = action === 'disable'
      }
  }
}

const getCountryLanguageCode = (countryCode) => {
  if (isoCountries.hasOwnProperty(countryCode)) {
      return isoCountries[countryCode]
  } else {
      return countryCode
  }
}

const getCountryCode = async () =>
  fetch(window.location.href).then((res) =>
      handleCountryInputs(res.headers.get('user-loc'))
  )

const handleCountryInputs = (countryCode) => {
  const countryFieldsNames = ['country', 'Country']

  countryFieldsNames.forEach((name) => {
      let userCountry = getCountryLanguageCode(countryCode)
      if (userCountry) {
          document
              .querySelectorAll(`select[name="${name}"]`)
              .forEach((input) => {
                  input.value = userCountry
              })
      }
  })
}

const updateSignupFormsHiddenFields = (signUpForms) => {
  signUpForms.forEach((form) => updateFormHiddenFields(form))
}

const updateFormHiddenFields = (form) => {
  let afc = afCookieHandler('get', null, null),
      googleIdC = getCookieValueByName('_ga')
  let hiddenFields = [
      ['enrichment', getUrlParameter('enrichment')],
      [
          'Google_ID_gclid__c',
          afc && afc.pixels && afc.pixels.gclid ? afc.pixels.gclid : null,
      ],
      [
          'Facebook_ID_fclid__c',
          afc && afc.pixles && afc.pixels.fbclid ? afc.pixels.fbclid : null,
      ],
      [
          'LinkedIn_ID_li_fat_id__c',
          afc && afc.pixles && afc.pixels.li_fat_id
              ? afc.pixels.li_fat_id
              : null,
      ],
      [
          'App_Installment_Base__c',
          afc && afc.plg && afc.plg.App_Installment_Base__c
              ? afc.plg.App_Installment_Base__c
              : null,
      ],
      [
          'TopAppCategory__c',
          afc && afc.plg && afc.plg.TopAppCategory__c
              ? afc.plg.TopAppCategory__c
              : null,
      ],
  ]

  let hiddenInputWithGetParam = form.querySelectorAll(
      `input[type="hidden"][data-get-param]`
  )

  if ('true' === isCookiesAllowed) {
      if (googleIdC && googleIdC.length > 6)
          updateHiddenField(form.id, 'Google_Id__c', googleIdC.substring(6))

      if (hiddenInputWithGetParam) {
          document
              .querySelectorAll(
                  `#${form.id} input[type="hidden"][data-get-param]`
              )
              .forEach((e) => {
                  let param = e.name
                  if (param && getUrlParameter(param))
                      updateHiddenField(
                          form.id,
                          param,
                          getUrlParameter(param)
                      )
              })
      }

      if (document.referrer) {
          let utm_referral = new URL(document.referrer).hostname
          if (utm_referral)
              updateHiddenField(form.id, 'last_referer', utm_referral)
      }

      updateDeviceType('device_type')
      getMktoTrkCookie('mkto_trk')
      updateHiddenFields(form.id, hiddenFields)
      updateUTMHiddenFields(form.id, utmsArray)
      return
  }
  updateUTMHiddenFields(form.id, afcArray, 'session')
}

// Handle steps
const handleSteps = async (buttons, button, form) => {
  let fields = form.querySelector(`fieldset.on`),
      fieldsets = form.querySelectorAll('fieldset'),
      backBtn = document.querySelector('.signup-form__header--back'),
      stepNumber = button.target.dataset.step,
      currentStep = document.querySelector(
          `.form-steps[data-form-id="${form.id}"] .form-steps--current`
      ),
      targetDescriptionHolder = document.querySelector(
          `.signup-form__header--step-description`
      ),
      targetDescription = document.querySelector(
          `fieldset[data-fieldset-id="${stepNumber}"]`
      ).dataset.stepDescription,
      isStepValid

  if (stepNumber !== '1') {
      isStepValid = await handleValidation(fields)
      if (backBtn) backBtn.classList.add('d-none')
  } else {
      if (backBtn) backBtn.classList.remove('d-none')
  }

  if (
      isStepValid ||
      (!isStepValid && stepNumber < fields.dataset.fieldsetId)
  ) {
      if (targetDescription && targetDescriptionHolder)
          targetDescriptionHolder.innerHTML = `<p>${targetDescription}</p>`

      if (currentStep) currentStep.textContent = stepNumber

      buttons.forEach((button, index) => {
          let prev = index > 0 ? index - 1 : index
          if (button.dataset.step === stepNumber) {
              button.classList.add('on')
              buttons[prev].classList.add('valid')
              scroll(0, 0)
          } else {
              button.classList.remove('on')
          }
      })

      fieldsets.forEach((fieldset) => {
          fieldset.classList.remove('on')
          document
              .querySelector(`fieldset[data-fieldset-id="${stepNumber}"]`)
              .classList.add('on')
      })
  }
}

// Watch form steps actions
const stepsContainers = document.querySelectorAll('.form-steps')

if (stepsContainers) {
  stepsContainers.forEach((stepsContainer) => {
      let form = document.getElementById(stepsContainer.dataset.formId)
      let formStepsButtons = form
          ? document
                .querySelector(`.form-steps[data-form-id="${form.id}"]`)
                .querySelectorAll('[data-step]')
          : []
      let formButtons = form ? form.querySelectorAll('[data-step]') : []
      let buttons = [...formButtons, ...formStepsButtons]

      if (buttons && buttons.length > 0) {
          buttons.forEach((button) => {
              button.addEventListener('click', function (button) {
                  handleSteps(buttons, button, form)
              })
          })
      }
  })
}

// Conditional radio button
const conditionalRadioBtns = document.querySelectorAll('.radio-conditional')

conditionalRadioBtns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
      let targetId = btn.dataset.conditionTarget
      let targetGroupId = btn.dataset.conditionGroup
      let targetElement = document.querySelector(
          `[data-condition-id="${targetId}"]`
      )
      let targetGroup = document.querySelectorAll(
          `[data-condition-group="${targetGroupId}"]`
      )

      if (targetId) {
          targetGroup.forEach((group) => {
              group.classList.add('field--disabled')
              let inputs = group.querySelectorAll('input, textarea, select')
              inputs.forEach((input) => {
                  input.disabled = true
                  input.removeAttribute('required')
              })
          })

          let targetInputs = targetElement.querySelectorAll(
              'input, textarea, select'
          )
          targetElement.classList.remove('field--disabled')
          targetInputs.forEach((input) => {
              input.disabled = false
              if (input.hasAttribute('data-required'))
                  input.setAttribute('required', true)
          })
      }
  })
})

// Intl phone field
let intlPhoneInputs = document.querySelectorAll('.phone-intl')
if (intlPhoneInputs.length > 0) {
  const intlPhoneInputsFocus = (input, label) => {
      if (!input.value) label.classList.toggle('field__label--focus')
  }

  intlPhoneInputs.forEach((input) => {
      let inputLabel = input.parentNode.querySelector('.field__label')
      input.addEventListener('focus', function (e) {
          intlPhoneInputsFocus(input, inputLabel)
      })

      input.addEventListener('blur', function (e) {
          let formId = input.closest('form').id
          populateIntlPhone(
              formId,
              getCountryData(formId),
              'phone',
              'phone-intl'
          )
          intlPhoneInputsFocus(input, inputLabel)
      })
  })
}

const handleDynamicConfirmationText = (form) => {
  let confirmationMsg = document.querySelector('.form-confirmation__body')
  let tagsArray = confirmationMsg
      ? confirmationMsg.innerHTML.match(/{([^}]+)}/g)
      : null
  let tags = tagsArray
      ? tagsArray.map((res) => res.replace(/{|}/g, ''))
      : null
  let text
  if (tags) {
      tags.forEach((tag) => {
          let value = form.querySelector(`[name="${tag}"]`).value
          text = confirmationMsg.innerHTML.replace(
              new RegExp('{' + tag + '}', 'gi'),
              value
          )
      })
      confirmationMsg.innerHTML = text
  }
}

const handleConfirmation = (form) => {
  // Sign up forms specific elems
  let disclaimer = document.querySelector('.signup-form__form-disclaimer'),
      backBtn = document.querySelector('.signup-form__header--back'),
      pageHeader = document.querySelector('.signup-form__header--col-main')

  let isMobileCta = document.querySelector('.mobile-form'),
      isPopupHolder = document.querySelector('.mobile-popup-holder')

  if (disclaimer) disclaimer.remove()
  if (backBtn) backBtn.remove()
  if (pageHeader) pageHeader.classList.add('d-none')
  if (pageHeader && pageHeader.classList.contains('d-block'))
      pageHeader.classList.remove('d-block')

  // Confirmation specific elems
  let formHolder = document
          .querySelector(`#${form.id}`)
          .closest('.form__form-holder'),
      formHeight = form.clientHeight,
      confirmation = formHolder.closest('.form-confirmation')
          ? formHolder.closest('.form-confirmation')
          : document.querySelector('.form-confirmation')

  if (form) document.querySelector(`#${form.id}`).classList.add('d-none')
  handleDynamicConfirmationText(form)

  if (confirmation && !confirmation.hasAttribute('data-form-status'))
      confirmation.dataset.formStatus = 'success'
  confirmation.classList.add('on')
  confirmation.classList.add('d-flex')
  confirmation.style.minHeight = `${formHeight}px`
  confirmation.classList.remove('d-none')
  if (isMobileCta) isMobileCta.classList.add('d-none')
  if (isPopupHolder) isPopupHolder.classList.remove('active')
  setTimeout(() => confirmation.classList.add('on'), 100)
}

const handleDatalayerUpdate = (form) => {
  window.dataLayer.push({
      event: 'signup.form.success',
      'mkto.form.values': Object.fromEntries(new FormData(form).entries()),
  })
}

function serialize(form) {
  form = document.getElementById(form.id)
  let field,
      l,
      s = []
  if (typeof form == 'object' && form.nodeName === 'FORM') {
      let len = form.elements.length
      for (let i = 0; i < len; i++) {
          field = form.elements[i]
          if (
              field.name &&
              !field.disabled &&
              field.type !== 'file' &&
              field.type !== 'reset' &&
              field.type !== 'submit' &&
              field.type !== 'button'
          ) {
              if (field.type === 'select-multiple') {
                  l = form.elements[i].options.length
                  for (let j = 0; j < l; j++) {
                      if (field.options[j].selected)
                          s[s.length] =
                              encodeURIComponent(field.name) +
                              '=' +
                              encodeURIComponent(field.options[j].value)
                  }
              } else if (
                  (field.type !== 'checkbox' && field.type !== 'radio') ||
                  field.checked
              ) {
                  s[s.length] =
                      encodeURIComponent(field.name) +
                      '=' +
                      encodeURIComponent(field.value)
              }
          }
      }
  }
  return s.join('&').replace(/%20/g, '+')
}

$.fn.serializeObject = function () {
  var o = {}
  var a = this.serializeArray()
  $.each(a, function () {
      if (o[this.name] !== undefined) {
          if (!o[this.name].push) {
              o[this.name] = [o[this.name]]
          }
          o[this.name].push(this.value || '')
      } else {
          o[this.name] = this.value || ''
      }
  })
  return o
}

const deleteTransient = () => {
  let formData = new FormData()
  formData.append('action', 'delete_form_transient')

  fetch(afJs.ajax_url, {
      method: 'POST',
      body: formData,
      credentials: 'same-origin',
  })
      .then((res) => res)
      .catch((error) => {
          // Error occurred
      })
}

async function getAfValidationToken() {
    try {
        const response = await fetch('/wp-admin/admin-ajax.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'action=get_af_token'
        });
        
        const data = await response.json();
        
        if (data.success && data.data.token) {
            return data.data.token;
        }
        return null;
    } catch (error) {
        console.warn('Failed to get AF validation token:', error);
        return null;
    }
}

const handleSubmission = async (form, token) => {
  let gRecaptcha = form.querySelector('#g-recaptcha-response')
  let gToken = form.querySelector('input[name="g_token"]')
  if (token && gToken) gToken.value = token
  if (token && gRecaptcha) gRecaptcha.value = token

  if (!gRecaptcha || (gRecaptcha && gRecaptcha.value === ''))
      addGrecaptchaField(form.id, token)

  let url = '',
      obj = {}

  if (!form.dataset.formEndpoint) {
      // New signup method hidden endpoint
      url = getBaseUrl() + '/wp-admin/admin-ajax.php'
      const formData = new FormData(form)
      formData.append('action', 'send_signup_data')
      formData.append('mode', 'cors')
      formData.append('endpoint', form.dataset.endpoint)
      formData.append('cache', 'no-cache')
     
      obj = {
          method: 'POST',
          body: formData,
      }
  } else {
      // Old signup method in dataset endpoint
      url = form.dataset.formEndpoint

      let data =
              'form-signup' === form.id
                  ? JSON.stringify($(form).serializeObject())
                  : serialize(form),
          headers

      obj = {
          method: form.method,
          body: data,
          headers,
          mode: 'cors',
          cache: 'no-cache',
      }

      if ('form-signup' === form.id) {
          obj.headers = {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          }
          
          if (typeof AwsWafIntegration !== 'undefined') {
              const awsWafToken = await AwsWafIntegration.getToken()
              obj.headers['x-aws-waf-token'] = awsWafToken
          }

          if (isStaging()) {
            const afToken = await getAfValidationToken();
            if (afToken) {
                obj.headers['Af-Validation-Token'] = afToken;
            }
        }
        
      } else {
          delete obj.header
      }
  }

  try {
      fetch(url, obj)
          .then((res) => {
              return res.json().then((data) => ({
                  status: res.status,
                  data,
              }))
          })
          .then(({ status, data }) => {
              if (status === 200 || status === 201) {
                  handleDatalayerUpdate(form)

                  let confirmation = document.querySelector(
                      '.form-confirmation'
                  )
                  if (confirmation) handleConfirmation(form)

                  deleteTransient()
              } else if (data.message === 'invalid invitation') {
                  window.location.href = `${baseUrl}/signup-partners-error/`
              } else {
                  handleDisableFields(form, 'error')
              }
          })
          .catch((err) => {
              // Error occurred
          })
  } catch (e) {
      // Error occurred
  }
}

const showHidePassword = (id) => {
  let input = document.getElementById(id)

  if (input.type === 'password') {
      input.type = 'text'
      input.classList += ' password-shown'
  } else {
      input.type = 'password'
      input.classList.remove('password-shown')
  }
}

// Google Maps Autocomplete
function initializeAutocomplete(inputs) {
  if (
      typeof google === 'undefined' ||
      typeof google.maps === 'undefined' ||
      typeof google.maps.places === 'undefined'
  ) {
      // Google Maps API is not available
      return
  }

  for (const input of inputs) {
      const autocomplete = new google.maps.places.Autocomplete(input)
      autocomplete.inputId = input.id
  }
}

document.addEventListener('DOMContentLoaded', async function () {
  let autocompleteInputs = document.getElementsByClassName(
      'address-autocomplete'
  )
  const userLocation = await getUserLocation()
  if (
      autocompleteInputs &&
      autocompleteInputs.length > 0 &&
      'cn' !== userLocation
  )
      initializeAutocomplete(autocompleteInputs)

  if ('undefined' !== typeof signUpForms && signUpForms.length > 0) {
      const filteredForms = () =>
          Array.from(signUpForms).filter((f) => f.id && f.id !== '')

      filteredForms().forEach((form) => {
          if (!form.hasAttribute('data-email-validation'))
              zeroBounceForSignup(form)

          form.addEventListener('submit', async function (e) {
              handleDisableFields(e, 'disable')
              if (!form.classList.contains('form--aasa')) e.preventDefault()
              
              // ZeroBounce validation for signup forms
              const emailInput = form.querySelector('input[type="email"]');
              if (emailInput && emailInput.value && !form.hasAttribute('data-email-validation')) {
                  try {
                      const customEvent = { target: emailInput };
                      await zeroBounceValidateEmail(customEvent, form, form.querySelectorAll('[type="submit"]'));
                      
                      // If ZeroBounce failed, stop form submission
                      // Let zeroBounceValidateEmail handle all UI - it already does this correctly
                      if (window.isEmailValidByZb === false) {
                          handleDisableFields(e, 'enable');
                          return; // Stop form submission
                      }
                  } catch (error) {
                      // On error, allow form submission (graceful fallback)
                      window.isEmailValidByZb = true;
                  }
              }
              
              if (
                  (await handleValidation(form)) &&
                  !form.classList.contains('form--aasa')
              ) {
                  handleDisableFields(e, 'text-change')
                  if ('cn' !== userLocation) setRecaptcha(form)
                  if ('cn' === userLocation) setCnRecaptcha(form)
              }
          })

          let formFields = form.querySelectorAll(
              'input:not([type="hidden"]), select'
          )
          const debouncedGeneratePidAjax = debounce(generatePidAjax, 500)
          const debouncedGeneratePid = debounce(generatePid, 500)

          formFields.forEach((field) => {
              // document.getElementById('field--form-navigation--btn-step-3').disabled =
              //   true;
              let conditionalEvent =
                  field.type === 'password' ? 'keyup' : 'input'

              field.addEventListener(conditionalEvent, function () {
                  if (field.id === 'name' && field.value !== '') {
                      debouncedGeneratePidAjax(field.value)
                  }

                  if (field.id === 'partner_id') {
                      document.getElementById(
                          'field--form-navigation--btn-step-3'
                      ).disabled = true
                      debouncedGeneratePid(form)
                  }

                  validateField(form, field)
              })
          })

          let $eventSelect = $('select[multiple]')
          $eventSelect.on('change', function (e) {
              validateField(form, e.target)
          })
      })
  }
})

// Example usage:
// equalizerHeight('.your-item-class-name');

const equalizerHeight = (itemsClass) => {
    if (!itemsClass) return false;
    parents = document.querySelectorAll(itemsClass);
    
    if (!parents) return false;

    parents.forEach(parent => {
        let items = parent.querySelectorAll('.block-tiles-content__tile .content');
    if (!items) return false;
    
    let maxHeight = 0;
    items.forEach((item) => {
        if (item.offsetHeight > maxHeight) {
            maxHeight = item.offsetHeight;
        }
    });
    
    items.forEach((item) => {
        item.style.height = maxHeight + 'px';
    });

    return true; 
    });






    
}
equalizerHeight('.block-tiles-content');
//equalizerHeight('.block-tiles-content__tile .content');


// Accordion
const initAccordion = (parentBlock, itemsBaseClass) => {
    if (!parentBlock || !itemsBaseClass) return false;

    let accordionContainer = document.querySelector(parentBlock);
    if (!accordionContainer) return false;

    let accordionItems = accordionContainer.querySelectorAll(itemsBaseClass);
    if (!accordionItems) return false;
    
    accordionItems.forEach((item) => { 
        item.addEventListener('click', () => { 
            item.classList.toggle('active'); 
        });
    });
     
};

// Example usage:
initAccordion('.block-compare-table', '.table-body__row');


gsap.registerPlugin(ScrollTrigger)

const end = 'bottom top',
    scrub = 1,
    trigger = '.homepage-hero-banner',
    sections = document.querySelectorAll('.homepage-slider__articles article'),
    allImages = document.querySelectorAll('.homepage-slider__article-image')

const initHomepageAnimations = () => {

    sections.forEach((section, index) => {

        gsap.to(section, {
            autoAlpha: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top center'
            }
        })

        ScrollTrigger.create({
            trigger: section,
            id: index + 1,
            start: 'top center',
            end: () => `+=${section.clientHeight}`,
            onEnter: (c) => {
                allImages.forEach(image => { if (image.classList.contains('active')) image.classList.remove('active') })
                document.getElementById(c.trigger.dataset.targetSlide).classList.add('active')
            },
            onEnterBack: (c) => {
                allImages.forEach(image => { if (image.classList.contains('active')) image.classList.remove('active') })
                document.getElementById(c.trigger.dataset.targetSlide).classList.add('active')
            }
        })
    })
}

const destroyHomepageAnimations = () => {
    ScrollTrigger.getAll().forEach(ST => ST.disable())
}

const handleHomepageAnimations = () => {
    let action = window.innerWidth > 1024 ? initHomepageAnimations() : destroyHomepageAnimations()
}

document.addEventListener('DOMContentLoaded', function(event) { handleHomepageAnimations() })
window.addEventListener('resize', function(event) { handleHomepageAnimations() }, true);
 
const populateEmailintoMarketo = (emailValue) => {
    let emailFieldMarketo = document.querySelector('.mktoFieldWrap input[type="email"]');
    if (emailFieldMarketo && emailValue) { 
        emailFieldMarketo.focus();
 
        emailFieldMarketo.value = '';
 
        const emailArray = emailValue.split('');
        emailArray.forEach((char, index) => {
            setTimeout(() => { 
                emailFieldMarketo.value += char;
 
                const inputEvent = new Event('input', { bubbles: true });
                emailFieldMarketo.dispatchEvent(inputEvent);
 
                if (index === emailArray.length - 1) {
                    const changeEvent = new Event('change', { bubbles: true });
                    emailFieldMarketo.dispatchEvent(changeEvent);
                }
            }, index * 10);
        });

        return true;
    }
    return false;
};
const preDemoPopup = () => {
    let buttonSubmit = document.getElementById('pre-demo-popup');
    let emailField = document.getElementById('start-email');
    let emailError = document.getElementById('emailError'); 
    let popupHolder = document.getElementById('pre-demo-popup-holder');
    let body = document.querySelector('body');
    let closeButton = document.querySelector('.close-pre-demo');

    let emailValue = null;

    if (buttonSubmit && emailField) {
        buttonSubmit.addEventListener('click', function(event) {
            if (emailField.value.trim() === '') {
                event.preventDefault(); 
                emailError.style.display = 'block'; 
                emailField.focus();
            } else {
                emailError.style.display = 'none';
                emailValue = emailField.value;
                let isPopulatedEmail = populateEmailintoMarketo(emailValue)
                 
                if(isPopulatedEmail === true){
                    popupHolder.classList.add('active');
                    body.classList.add('active-popup-body')
                }
            }
        });
  
        emailField.addEventListener('keyup', function() {
            if (emailField.value.trim() !== '') {
                emailError.style.display = 'none';  
            }
        });

        closeButton.addEventListener('click', function(e){
            popupHolder.classList.remove('active');
            body.classList.remove('active-popup-body')
        })
    }
};

document.addEventListener('DOMContentLoaded', function(event) {
    preDemoPopup();
});
class PopForm {
    constructor(form) {
        this.wrapper = document.querySelector(form)
        this.active = 0
    }
    init() {
        if (this.wrapper) {
            const buttons = this.wrapper.querySelectorAll('.choice-btn')
            buttons.forEach(btn => {
                this.toggleButton(btn)
            })
            this.formSubmit(this.wrapper)
        }
    }
    toggleButton(element) {
        if (element) {
            element.addEventListener('click', (e) => {
                e.preventDefault()
                let parentBtn = this.wrapper.querySelector('.btn-submit-plg')
                let parent = e.target.form
                let singleElement = e.target.classList[0]
                let allBtns = parent.querySelectorAll('.' + singleElement)

                if (e.target.classList.contains('active')) {
                    e.target.classList.remove('active')
                    this.active -= 1
                } else {
                    allBtns.forEach(btn => {
                        if (btn.classList.contains('active')) {
                            btn.classList.remove('active')
                            this.active -= 1
                        }
                    })
                    e.target.classList.add('active')
                    this.active += 1
                }

                if (this.active === 2) {
                    parentBtn.classList.remove('disabled')
                } else {
                    parentBtn.classList.add('disabled')
                }
            })
        }
    }
    formSubmit(form) {
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                let parent = e.target
                let btns = parent.querySelectorAll('button')
                let redirect = document.getElementById('url_redirect').value
                let data = {}

                btns.forEach(elem => {
                    if (elem.classList.contains('active')) {
                        if (elem.classList.contains('plg-installs')) data['App_Installment_Base__c'] =  elem.dataset.value
                        if (elem.classList.contains('plg-category')) data['TopAppCategory__c'] = elem.dataset.value
                    }
                })

                if (redirect) data['redirect'] = redirect
                if (Object.keys(data).length >= 3) this.storeCookieData(data)
            })
        }
    }

    storeCookieData(data) {

        if (data) {
            let dataLayerObject = window.dataLayer

            window.dataLayer.push({
                'event': 'submitPLG',
                'plgInstalls': data['App_Installment_Base__c'],
                'plgCategory': data['TopAppCategory__c']
            })
            console.log('TEST', data)
            if ('true' === isCookiesAllowed) {
                afCookieHandler('update', data, 'plg')
            }else{
                sessionStorage.setItem('App_Installment_Base__c', data['App_Installment_Base__c'])
                sessionStorage.setItem('TopAppCategory__c', data['TopAppCategory__c'])
            }

            if (dataLayerObject.some(item => item.event === 'submitPLG')) {
                window.location.href = data['redirect']
            }

            $.magnificPopup.close()
        }
    }
}


document.addEventListener('DOMContentLoaded', function () {
    let plgButtons = document.querySelectorAll('.plg-popup-btn')
    let popForm = new PopForm('.plg-form')

    if ('undefined' !== typeof plgButtons && plgButtons.length > 0) {
        plgButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                let btnRedirect = e.target.getAttribute('data-url-redirect')
                if (btnRedirect) {
                    let redirectInput = document.getElementById('url_redirect')
                    redirectInput.value = btnRedirect
                }
            })
        })

        popForm.init()
    }
})
// iFrame resize listener
if( document.querySelector('.infogram-embed') ) {

    window.addEventListener('message', function(e) {
        var data;
        try {
            data = JSON.parse(e.data);
        } catch (e) {
            return false;
        }

        if (data.context !== 'iframe.resize') {
            return false;
        }

        var iframe = document.querySelector('iframe[src="' + data.src + '"]');

        if (!iframe) {
            return false;
        }

        iframe.height = data.height;

        return;
    });
}


if ($("body").hasClass("resource-template")) {
$(window).on("orientationchange",function(event){
    $("iframe").each(function(){
        var frameSourc = $(this).attr("src");
        if(frameSourc !== undefined){
            if(frameSourc.indexOf("infogram") !== -1 ){
                $(this).attr("src","");
                setTimeout(() => {$(this).attr("src",frameSourc)}, 200);
            }
        }
    }); 
});
}
window.addEventListener('load', () => {
    let linkedinBlockHolder = document.querySelectorAll('.block-linkedin-slider__iframe'); 
    if (linkedinBlockHolder.length) {
        linkedinBlockHolder.forEach(blockHolder => {
            let linkedinIframe = blockHolder.querySelector('iframe');
            if (linkedinIframe) { 
                linkedinIframe.setAttribute('scrolling', 'no'); 
            }
        });
    }
});
function isMobileDevice() {
    return window.innerWidth < 768;
}

if (isMobileDevice()) { 
    const subscriptionDiv = document.querySelector('.subscribtion');
    if(subscriptionDiv){
        const destinationDiv = document.querySelector('.social-sharing__footer');
        while (subscriptionDiv.firstChild) {
            destinationDiv.appendChild(subscriptionDiv.firstChild); 
        }
    }
}
/**
 * Navigation
 * @type {HTMLElement}
 */

const isNavCollapsed = () => {
    let el = document.getElementById('navbar-toggler');
    let style = window.getComputedStyle(el);
    return (el && style.display !== 'none')
}


if (document.querySelectorAll('.navbar-toggler').length) {
    let togglers = document.querySelectorAll('.navbar-toggler');

    togglers.forEach(toggler => {
        toggler.addEventListener('click', function (event) {
            event.stopPropagation();
            event.preventDefault();
            togglerClick(event);
        })
    })

    const togglerClick = (toggler) => {
        toggler = toggler.target;
        toggler.classList.toggle('on');
        let targets = toggler.dataset.target.split(' ');

        targets.forEach( target => {
            let targetElem = document.getElementById(`${target}`);
            let navs = document.getElementById(target).querySelectorAll('.on')
            if( targetElem.classList.contains('on') ) {
                targetElem.classList.remove('on')
                closeAllNavs(navs)
            }else{
                targetElem.classList.add('on');
            }
        })
    }

    // Mega nav mobile on click
    let megaMenuParents = document.getElementsByClassName('mega-parent');

    const closeAllNavs = (elems) => [].forEach.call(elems, (el) => el.classList.remove('on'))

    document.querySelectorAll('.mega-parent > .nav-link').forEach((elem) => {
        elem.addEventListener('click', (e) => {
            if (isNavCollapsed) {
                e.preventDefault();
                let itemClass = e.target.parentNode.classList;

                if (itemClass.contains('on')) {
                    itemClass.remove('on');
                } else {
                    itemClass.add('on');
                }
            }
        });
    });

    // Footer Navigation
    let footerTitles = document.querySelectorAll('.footer__col > h3');

    Array.from(footerTitles).forEach((e) => {

        e.addEventListener('click', (e) => {
            // TODO: remove hardcoded width of footer
            if (window.innerWidth < 1025) {
                e.target.parentNode.classList.toggle('on');
            }
        });
    });
}

let previousScrollPosition = 0;

const isScrollingDown = () => {
    let currentScrolledPosition = window.scrollY || window.pageYOffset;
    let scrollingDown;

    scrollingDown = currentScrolledPosition > previousScrollPosition;
    previousScrollPosition = currentScrolledPosition;
    return scrollingDown;
}

const nav = document.querySelector('nav#main-nav');
const subNav = document.getElementById('product-news-nav');
const sideBarNewProducts = document.querySelector('.product-news-archive__sidebar');
const handleNavScroll = () => {

    
    if (isScrollingDown()) {
        nav.classList.add('scroll-down');
        nav.classList.remove('scroll-up'); 
        if(sideBarNewProducts){
            sideBarNewProducts.classList.add('scroll-down');   
            sideBarNewProducts.classList.remove('scroll-up');   
        }
    } else {
        nav.classList.add('scroll-up');
        nav.classList.remove('scroll-down')
        if(sideBarNewProducts){
            sideBarNewProducts.classList.add('scroll-up');   
            sideBarNewProducts.classList.remove('scroll-down');    
        }
    }
}
window.addEventListener('DOMContentLoaded', ()=>{
    if(!subNav){
        return;
    }
    if(subNav.classList.contains('sps--abv')){
        sideBarNewProducts.classList.add('sps--abv'); 
    }
});

if( document.querySelector('.navbar--main.sps--learn-section') ) {
    window.addEventListener("scroll", () => throttle(handleNavScroll(), 250))
}


const passProtected = (form) => {
    const url = getBaseUrl() + '/wp-json/af/v1/password-check';
    const formData = new FormData(form);
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Verifying...';
    submitBtn.disabled = true;
    
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        const returnError = document.getElementById('protected-post-error-holder');

        if (!data.response) {
            returnError.innerHTML = data.message;
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            return;
        }

        // Success - set cookie and redirect
        const cookieExpires = new Date();
        cookieExpires.setTime(cookieExpires.getTime() + (30 * 24 * 60 * 60 * 1000));
        const postID = data.post_id;
        const cookie = getCookieValueByName('protected_post') ? 
            [...getCookieValueByName('protected_post').split(',')] : [];

        if (!cookie.includes(postID)) {
            cookie.push(postID);
        }
        
        document.cookie = `protected_post=${cookie}; expires=${cookieExpires.toUTCString()}; path=/`;
        
        // Redirect to the actual page
        if (data.redirect) {
            window.location.href = data.redirect;
        }
    })
    .catch(err => {
        console.error('Password check failed:', err);
        // Reset button on error
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
};

window.addEventListener('DOMContentLoaded', function () {
    const pwForm = document.getElementById('password-protected-form');
    if (pwForm) {
        pwForm.addEventListener('submit', (e) => {
            e.preventDefault();
            passProtected(pwForm);
        });
    }
});
(function (){

    if (intlPhoneInputs && intlPhoneInputs.length > 0 && window.intlTelInput) {
        const getUserLocation = () => {
            let req = new XMLHttpRequest(),
                obj = {};

            req.open('GET', document.location, false);
            req.send(null);

            const headers = req.getAllResponseHeaders().toLowerCase(),
                headersArr = headers.trim().split(/[\r\n]+/);

            headersArr.forEach((item) => {
                const key = item.split(':')[0],
                    value = item.split(':').slice(1).join(':').trim();
                obj[key] = value;
            });

            return obj['user-loc'] ? obj['user-loc'] : 'US';
        };

        document.addEventListener("DOMContentLoaded", function () {
            const getCountryCodes = isoCountries => Object.keys(isoCountries)
            const countryCodes = getCountryCodes(isoCountries)
            let phoneInputSignUp = document.querySelector('.phone-intl'),
                loc = getUserLocation()
              
            // Signup form handling   
            window.intlTelInput(phoneInputSignUp, {
                formatOnDisplay: true,
                nationalMode: true,
                separateDialCode: true,
                initialCountry: 'auto',
                hiddenInput: 'phone',
                onlyCountries: countryCodes,
                utilsScript: `${getBaseUrl()}/wp-content/themes/AF2020/assets/js/vendors/iti-utils.js`,
                geoIpLookup: function (callback) {
                    const countryCode = window.userGeoLoc ? window.userGeoLoc : 'us'
                    callback(countryCode);
                }
            });
        })
    }
})()

const initPopups = () => {
    if('.block-linkedin-slider__iframe .read-more-btn a'){
        $('.block-linkedin-slider__iframe .read-more-btn a').magnificPopup({
            type: 'inline', 
            callbacks: {
                beforeOpen: function () {
                    console.log('this.st', this.st)
                    this.st.inline.markup = this.st.inline.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = 'mfp-zoom-out linkedin-popup-bg';
                    $('main.main').addClass('blur'); 
                },
                beforeClose: function () {
                    $('main.main').removeClass('blur');
                }
            },  
            closeMarkup: '<button class="mfp-close" onclick="$.magnificPopup.close();"><i class="icon-cancel"></i></button>'
        })
    }
    if ($('.popup-image')) {

        $('.popup-image a').magnificPopup({
            type: 'image',
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function () {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = 'mfp-zoom-out';
                    $('main.main').addClass('blur');
                },
                beforeClose: function () {
                    $('main.main').removeClass('blur');
                }
            },
            closeMarkup: '<button class="mfp-close" onclick="$.magnificPopup.close();"><i class="icon-cancel"></i></button>'
        });
    }

    if ($('.popup-video')) {

        $('.popup-video').magnificPopup({
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" allowtransparency="true" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen frameborder="0" allowfullscreen></iframe>' +
                    '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
                patterns: {
                    youtube: {
                        index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                        id: 'v=', // String that splits URL in a two parts, second part should be %id%
                                  // Or null - full URL will be returned
                                  // Or a function that should return %id%, for example:
                                  // id: function(url) { return 'parsed id'; }

                        src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    wistia: {
                        index: 'wistia.com',
                        id: function (url) {
                            let m = url.match(/^.+wistia.com\/(medias)\/([^_]+)[^#]*(#medias=([^_&]+))?/);
                            if (m !== null) {
                                if (m[4] !== undefined) {
                                    return m[4];
                                }
                                return m[2];
                            }
                            return null;
                        },
                        name: 'wistia_embed',
                        class: 'wistia_embed',
                        src: '//fast.wistia.net/embed/iframe/%id%/?autoPlay=false',
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }
                    // you may add here more sources
                },
                srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
            }
        })
    }
}
const homePagePopup = () =>{
    $('.plg-popup-btn').magnificPopup({
        type: 'inline',
        callbacks: {
            beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = 'mfp-zoom-out';
                $('main.main').addClass('blur');
                $(this.bgOverlay).addClass('plg-popup-bg');

            },
            beforeClose: function () {
                $('main.main').removeClass('blur');
            }
        },
        closeMarkup: '<button class="mfp-close" onclick="$.magnificPopup.close();"><i class="icon-cancel"></i></button>'
    });
}

const newsletterPopup = document.querySelector('.newsletter-subscription-popup')
const searchPopup = document.querySelector('.search-popup')

const main = document.querySelector('main.main')

const handlePopup = (popup, action) => {
    if (action === 'open') {
        main.classList.add('blur-more')
        popup.classList.add('on')
        if (document.querySelector('.navbar--categories-secondary.on')) document.querySelector('.navbar--categories-close').click()
        if (document.querySelector('input.search__input')) document.querySelector('input.search__input').focus()
        setTimeout(() => {
            document.addEventListener("click", clickOutsidePopup, false)
        }, 500)
    } else {
        popup.classList.remove('on')
        main.classList.remove('blur-more')
        document.removeEventListener("click", clickOutsidePopup, false);
    }
}

const clickOutsidePopup = (event) => {
    [newsletterPopup, searchPopup].forEach(popup => {
        const isClickInside = popup.contains(event.target);
        if (popup.classList.contains('on') && !isClickInside) handlePopup(popup, 'close')
    })
}

document.addEventListener("DOMContentLoaded", function () {

    const btnNewsletter = document.querySelectorAll('.popup-newsletter-subscription');
    const btnNewsletterClose = document.querySelectorAll('.newsletter-subscription-popup--close');

    const btnSearchOpen = document.querySelectorAll('.search-trigger-button');
    const btnSearchClose = document.querySelector('.search-popup--close');

    if ($('.popup-image') || $('.popup-video')) {
        initPopups();
    }

    homePagePopup()

    btnNewsletter.forEach(btn => {
        btn.addEventListener('click', function (event) {
            event.preventDefault()
            if (!newsletterPopup.classList.contains('on')) handlePopup(newsletterPopup, 'open')
        })
    })

    btnNewsletterClose.forEach(btn => {
        btn.addEventListener('click', function (event) {
            event.preventDefault()
            if (newsletterPopup.classList.contains('on')) handlePopup(newsletterPopup, 'close')
        })
    })


    if (btnSearchOpen) {
        btnSearchOpen.forEach(btn => {
            btn.addEventListener('click', (event) => {
                event.preventDefault()
                if (!searchPopup.classList.contains('on')) handlePopup(searchPopup, 'open')
            })
        })
    }

    if (btnSearchClose) {
        btnSearchClose.addEventListener('click', (event) => {
            event.preventDefault()
            if (searchPopup.classList.contains('on')) handlePopup(searchPopup, 'close')
        })
    }

})





/**
 * pr archive nav
 * @type {HTMLElement}
 */
$( document ).ready(function() {
	$(".year-menu-item").click(function(){
		$('html,body').animate({ scrollTop: 0 }, 'slow');
		var displayYear = ".year-"+$(this).attr("data-year");
		$(".year-menu-item").removeClass("selected");
		$(this).addClass("selected");
		$(".parentyear").removeClass("showParent");
		$(".parent-"+$(this).attr("data-year")).addClass("showParent");
	});
	$('.parentyear').each(function(){
		var entryItems = $(this).children(".entry-content").length;
		if (entryItems <= 6 ){
			$(this).children(".text-center").hide();
		}
	});
});
$(".loadMorePr").click(function(){
	var numberOfitems = $(this).parent(".text-center").siblings(".hide").length;
	if (numberOfitems > 0){
		var siblings = $(this).parent(".text-center").siblings(".hide");
		var loopIndex = 0;
		if(numberOfitems < 6){
			$(this).hide();
		};
		$(siblings).each(function(){
			if (loopIndex < 6) {
				$(this).removeClass("hide").addClass("show ");
			}
			loopIndex++;
		});
	}else{
		$(this).hide();
	};
});
document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.section-single-post')
    if (!content)
        return

    const progressBar = document.querySelector('.progress-bar')

    if (!progressBar)
        return

    const updateProgressBar = () => {
        const contentHeight = content.clientHeight - window.innerHeight
        const scrollProgress = (window.scrollY / contentHeight) * 100
        progressBar.style.width = `${scrollProgress}%`
    }

    // Attach the scroll event listener to update progress bar
    window.addEventListener("scroll", updateProgressBar)
})

const contentTypes = ['post', 'customer', 'glossary', 'product-news-item', 'resource', 'use-case', 'video', 'ceo-post']

const searchValidation = () => {
    const searchForm = document.querySelectorAll('.search__form')
    if(!searchForm) return

    searchForm.forEach(form => {
        const inputField = form.querySelector('.search__input')
        const error = form.querySelector('.search__error')

        form.addEventListener('submit', (e) => {
            if (error.classList.contains('active')) error.classList.remove('active')
            if (inputField.value.trim() == "") {
                e.preventDefault()
                error.classList.add('active')
            }
        })
    })

}

const getParams = () => {
    const search = location.search.substring(1);
    if (!search) return

    const params = search
        .split('&')
        .map(pair => pair.includes('=') ? pair.split('=') : [pair, null])
        .reduce((obj, [key, val]) => ({
            ...obj,
            [decodeURIComponent(key)]: val ? decodeURIComponent(val) : null
        }), {});

    return params
}

const stringReplace = (string, targetElement) => {
    const myRegExp = new RegExp(string, 'gi')
    const finalString = targetElement.innerHTML.replace(myRegExp, function (str) {
        return '<span>' + str + '</span>'
    });
    return finalString
}


const searchFilter = () => {
    const select = document.querySelector('.search__filter-select')
    if (!select) return

    const params = getParams()
    if (params.type && contentTypes.indexOf(params.type) >= 0) {
        select.value = params.type
    } else {
        select.value = 'all'
    }

    select.addEventListener('change', (e) => {
        let homeUrl = window.location.pathname

        if (e.target.value !== 'all') {
            window.location.replace(homeUrl + '?s=' + params.s + '&type=' + e.target.value)
        } else {
            window.location.replace(homeUrl + '?s=' + params.s)
        }
    })
}


const searchHighlight = (params) => {
    const searchArticles = document.querySelector('.search__articles')
    if (!searchArticles) return

    const articlesList = searchArticles.querySelectorAll('article')

    articlesList.forEach(article => {
        const title = article.querySelector('.search__article-link')
        const text = article.querySelector('.search__article-excerpt')

        title.innerHTML = stringReplace(params.s, title)
        text.innerHTML = stringReplace(params.s, text)

    })
}

const params = getParams()

searchValidation()

if (params && params.s) {
    searchFilter()
    searchHighlight(params)
}

if (document.querySelectorAll('select[multiple]').length > 0 ) {

    $('select[multiple]').select2({
        width: '100%',
        language: {
            locale: 'es',
            noResults: function (params) {
                console.log('errorMessages', errorMessages[langCode]['no-results'])
                return errorMessages[langCode]['no-results']
            }
        }
    })

    $('select[multiple]').on('change', function (event) {
        if (event.target.value) {
            event.target.parentNode.querySelector('.select2').classList.add('has-value')
        } else {
            event.target.parentNode.querySelector('.select2').classList.remove('has-value')
        }
    })
}
let sliders = document.querySelectorAll('.slider');

const equalizeSlidesHeight = () => {
    setTimeout(() => {
        let itemBody = $('.slider-item__holder');
        let itemsHeight = [];

        itemBody.css('min-height', '');
        itemBody.each(function (e) {
            itemsHeight.push($(this).innerHeight());
        });
        let maxHeight = Math.max(...itemsHeight);
        itemBody.css('min-height', maxHeight + 'px');
    }, 100)
}


const sliderInitOrDestroy = (slider, destroyOn, params) => {
    setTimeout(() => {
        if (sliderWatcherTest(slider, destroyOn)) sliderActions(slider, params, sliderWatcherTest(slider, destroyOn))
    }, 100)
}

const sliderActions = (slider, params, action) => {
    if (action === 'init') {
        slider.slick(params);
    } else if (action === 'destroy') {
        slider.slick('unslick')
    } else {
        //console.log('DOING NOTHING')
    }
}

const sliderWatcherTest = (slider, destroyOn) => {
    let isInit = slider[0].classList.contains('slick-initialized')
    let destroy = false
    let width = window.screen.width

    if (destroyOn === 'desktop' && width < 574) {
        destroy = isInit ? undefined : 'init'
    } else if (destroyOn === 'desktop' && width >= 574) {
        destroy = isInit ? 'destroy' : undefined
    } else if (destroyOn === 'mobile' && width > 574) {
        destroy = isInit ? undefined : 'init'
    } else if (destroyOn === 'mobile' && width < 574) {
        destroy = isInit ? 'destroy' : undefined
    }
    return destroy
}

const sliderWatcher = (slider, destroyOn, params) => {
    window.addEventListener('resize', function (e) {
        throttle(sliderInitOrDestroy(slider, destroyOn, params), 750)
    })

    window.addEventListener('load', function (e) {
        sliderInitOrDestroy(slider, destroyOn, params)
    })
}

const preloaderCondition = (slider) => slider.classList.contains('custom-gallery__items') && window.screen.width > 576

const updateTabbedSlider = (e) => {
    let slides = e.$slides;

    for (const iterator of slides) {
        if (iterator.classList.contains('slick-current')) {
            iterator.firstChild.classList.add('active');
            let contentTab = iterator.firstChild.dataset.content;
            document.getElementById(contentTab).classList.add('active')
        } else {
            iterator.firstChild.classList.remove('active');
            let contentTab = iterator.firstChild.dataset.content;
            document.getElementById(contentTab).classList.remove('active')
        }
    }
}

if (sliders) {

    Array.from(sliders).forEach((e, index) => {
        const timeInterval = 500
        let itemAtts = e.dataset

        let itemId = e.getAttribute('id')
        let dynamicParams = {
            slidesToShow: itemAtts['slidesToShow'] ? Number(itemAtts['slidesToShow']) : this.slidesToShow,
            slidesToShowMd: itemAtts['slidesToShowMd'] ? Number(itemAtts['slidesToShowMd']) : this.slidesToShow,
            slidesToShowSm: itemAtts['slidesToShowSm'] ? Number(itemAtts['slidesToShowSm']) : this.slidesToShow,
            destroyOn: itemAtts['destroyOn'] ? itemAtts['destroyOn'] : false,
            infinite: itemAtts['infinite'] ? itemAtts['infinite'] === 'true' : true,
            infiniteMd: itemAtts['infiniteMd'] ? itemAtts['infiniteMd'] === 'true' : true,
            centerMode: itemAtts['centerMode'] ? itemAtts['centerMode'] === 'true' : false,
            centerModeMd: itemAtts['centerModeMd'] ? itemAtts['centerModeMd'] === 'true' : false,
            centerPadding: itemAtts['centerPadding'] && (itemAtts['centerMode'] === 'true') ? itemAtts['centerPadding'] : '50px',
            dots: itemAtts['dots'] ? itemAtts['dots'] === 'true' : true,
            fade: itemAtts['fade'] ? itemAtts['fade'] === 'true' : false,
            dotsMd: itemAtts['dotsMd'] ? itemAtts['dotsMd'] : false,
            equalHeight: itemAtts['equalHeight'] ? itemAtts['equalHeight'] : false,
            arrows: itemAtts['arrows'] ? itemAtts['arrows'] === 'true' : true,
            controllers: itemAtts['controllers'] ? itemAtts['controllers'] === 'true' : true,
            variableWidth: itemAtts['variableWidth'] === 'true' ? true : false,
            customArrows: itemAtts['customArrows'] === 'true' ? true : false,
            tabbdedSlider: itemAtts['tabbedSlider'] === 'true' ? true : false,
        }

        let params = {
            slidesToShow: dynamicParams.slidesToShow,
            slidesToScroll: 1,
            infinite: dynamicParams.infinite,
            arrows: false,
            fade: dynamicParams.fade,
            dots: dynamicParams.dots,
            variableWidth: dynamicParams.variableWidth,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: dynamicParams.slidesToShowMd
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: dynamicParams.slidesToShowMd,
                        centerMode: dynamicParams.centerModeMd,
                        centerPadding: '15%',
                        dots: dynamicParams.dotsMd,
                        infinite: dynamicParams.infiniteMd
                    }
                },
                {
                    breakpoint: 574,
                    settings: {
                        slidesToShow: dynamicParams.slidesToShowSm,
                        centerMode: dynamicParams.centerModeMd,
                        centerPadding: dynamicParams.centerPadding,
                        dots: dynamicParams.dotsMd,
                        infinite: dynamicParams.infiniteMd
                    }
                }
            ]
        };
        let slider = $(`#${itemId}`)

        const cardSliderArrows = (slick, direction, e) => {
            let buttons = document.querySelectorAll('.slider__controls--btn')
            buttons.forEach((button) => { button.classList.remove('disabled') })
            let btn = (e && e.target) ? e.target : e;
            if (btn && slick.currentSlide == 0) btn.classList.add('disabled');
            if (btn && slick.currentSlide >= slick.slideCount - slick.options.slidesToShow) btn.classList.add('disabled');
        }

        if (dynamicParams.arrows === true) {
            let currentSlide, slidesCount, btnNext, btnPrev, slidesCounter, slidesCounterVisible, slidesCounterNext,
                slidesCounterTotal
            let isInfinite = !dynamicParams.infinite ? 'disabled' : ''

            const getBlockClass = () => slider[0].id.slice(0, -6)
            const getSliderId = () => slider[0].id.slice(-5)
            const addControls = (slider) => {

                let iconArrow = dynamicParams.customArrows === true ? '<i class="icon-right-open"></i>' : '<i class="icon-arrow-right"></i>';
                const controls = `<div class="slider__controls text-secondary d-flex justify-content-between justify-content-sm-center align-items-center px-20 px-md-0">
                                    <button id="btn-next_${getSliderId()}" data-aft="slider-controls" data-aft-block="${getBlockClass()}" class="slider__controls--btn slider__controls--prev px-0 btn-icon ${isInfinite}">
                                    ${iconArrow}
                                    </button>
                                    <div class="slider__controls--count px-20 d-flex">
                                        <span class="slider__controls--count-main d-inline-block position-relative">
                                            <span class="slider__controls--count-visible"></span>
                                            <span class="slider__controls--count-next"></span>
                                        </span>
                                        <span class="slider__controls--count-total"></span>
                                    </div>
                                    <button id="btn-prev_${getSliderId()}" data-aft="slider-controls" data-aft-block="${getBlockClass()}" class="slider__controls--btn slider__controls--next px-0 btn-icon">
                                    ${iconArrow}
                                    </button> 
                                </div>`
                let sliderParent = slider.parent()
                sliderParent.append(controls)
                btnNext = sliderParent.find('.slider__controls--next')
                btnPrev = sliderParent.find('.slider__controls--prev')
                slidesCounter = sliderParent.find('.slider__controls--count-main')
                slidesCounterVisible = sliderParent.find('.slider__controls--count-visible')
                slidesCounterNext = sliderParent.find('.slider__controls--count-next')
                slidesCounterTotal = sliderParent.find('.slider__controls--count-total')

                setTimeout(() => {
                    slider.parent().find('.slider__controls').addClass('on')
                    if (dynamicParams.equalHeight) equalizeSlidesHeight()
                }, 750)
            }

            const updateSliderCounter = function (slick, direction) {
                currentSlide = slick.currentSlide + 1
                slidesCount = slick.slideCount
                slidesCounterTotal.text(` / ${slidesCount}`)
                slidesCounterNext.text(currentSlide)

                setTimeout(() => {
                    slidesCounterVisible.text(currentSlide)
                }, timeInterval)

                if (direction === 'forward') {
                    slidesCounter[0].classList.add('move-forward')
                    setTimeout(() => {
                        slidesCounter[0].classList.remove('move-forward')
                    }, timeInterval)
                }

                if (direction === 'backward') {
                    slidesCounterNext[0].classList.add('is-rotated-above')
                    setTimeout(() => {
                        slidesCounter[0].classList.add('move-backward')
                    }, (timeInterval / 100 * 10))
                    setTimeout(() => {
                        slidesCounter[0].classList.remove('move-backward')
                    }, timeInterval)
                }
            }

            const slideSwitch = (slick, direction) => {

                updateSliderCounter(slick, direction)
                slidesCounterNext[0].text = currentSlide

                if (!dynamicParams.infinite) {
                    if (currentSlide === slick.slideCount) {
                        btnNext[0].classList.add('disabled')
                        btnPrev[0].classList.remove('disabled')
                    } else if (currentSlide === 1) {
                        btnPrev[0].classList.add('disabled')
                        btnNext[0].classList.remove('disabled')
                    } else {
                        btnNext[0].classList.remove('disabled')
                        btnPrev[0].classList.remove('disabled')
                    }
                }

                setTimeout(() => {
                    slidesCounterNext[0].classList.remove('move-forward')
                    slidesCounterNext[0].classList.remove('move-backward')
                    slidesCounterNext[0].classList.remove('is-rotated-above')
                }, timeInterval / 2)
            }

            slider.on('init', function (event, slick) {
                if (dynamicParams.equalHeight) equalizeSlidesHeight()
                if (dynamicParams.destroyOn) sliderInitOrDestroy(slider, dynamicParams.destroyOn, params)
                if (dynamicParams.destroyOn) sliderWatcher(slider, dynamicParams.destroyOn, params)

                if (slick.slideCount > 1) {

                    addControls(slider);
                    updateSliderCounter(slick);

                    btnNext.on('click', function (e) {


                        slider.slick('slickNext')
                        if (dynamicParams.infinite && !e.target.classList.contains('disabled')) slideSwitch(slick, 'forward')
                        if (!dynamicParams.infinite && !e.target.classList.contains('disabled')) cardSliderArrows(slick, 'forward', e)
                        if( slider[0].id === 'block-testimonial-tabs__slider' ) {
                            //cardSliderArrows(slick, 'forward', e)
                            updateTabbedSlider(slick)
                        }
                    })

                    btnPrev.on('click', function (e) {
                        slider.slick('slickPrev')
                        if (dynamicParams.infinite && !e.target.classList.contains('disabled')) slideSwitch(slick, 'backward')
                        if (!dynamicParams.infinite && !e.target.classList.contains('disabled')) cardSliderArrows(slick, 'backward', e)
                        if( slider[0].id === 'block-testimonial-tabs__slider' ) {
                            //cardSliderArrows(slick, 'backward', e)
                            updateTabbedSlider(slick)
                        }
                    })

                    slider.on('swipe', function (event, slick, direction) {
                        let btn = (direction === 'left') ? btnNext[0] : btnPrev[0];
                        direction = (direction === 'left') ? 'forward' : 'backward';
                        if (dynamicParams.infinite && !btn.classList.contains('disabled')) slideSwitch(slick, direction)
                        if (!dynamicParams.infinite && !btn.classList.contains('disabled')) cardSliderArrows(slick, direction, btn)
                        if( slider[0].id === 'block-testimonial-tabs__slider' ) slideSwitch(slick, direction)
                    })
                }

            })
        } else {
            slider.on('init', function (event, slick) {
                if (dynamicParams.equalHeight) equalizeSlidesHeight()
                if (dynamicParams.destroyOn) sliderWatcher(slider, dynamicParams.destroyOn, params)
            })
        }

        if (preloaderCondition(e)) {
            if (dynamicParams.destroyOn) sliderWatcher(slider, dynamicParams.destroyOn, params)
        } else {
            sliderActions(slider, params, 'init')
        }
    })

    document.addEventListener("DOMContentLoaded", function () {
        Array.from(sliders).forEach((e) => {

            let preloader = document.querySelector('.slider-preloader')
            if (preloader) document.querySelector('.slider-preloader').remove();
            e.classList.add('on')
        })
    })
}




const convertSvg = () => {

    $('img.svg').each(function () {
        let $img = $(this);
        let imgID = $img.attr('id') ? $img.attr('id') : 'img-'+Math.ceil(Math.random() * 10);
        let imgClass = $img.attr('class');
        let imgURL = $img.attr('src');

        $.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml')
            .done(function () {
                setTimeout( function () {
                    $('#'+imgID).addClass('on');
                }, 100);
            });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    convertSvg();
})
if( $('[role="tablist"]') ) {
    $('[role="tablist"] li').on('click', function (e){
        if( 'A' !== e.target.tagName ) e.preventDefault()

        if($('.filter__action')) $('.filter__action').click()

        let currentSection = $(this).closest('section, .homepage-slider, .content-gallery, .products-tabs, .events-tabs')
        
        let tabsContent = currentSection.find('.tab-content .tab-pane'),
            tabs = $(this).parent().find('li'),
            tabId = $(this).find('> span').attr('href') ? $(this).find('> span').attr('href') : $(this).find('> a').attr('href'),
            tabContentTarget = currentSection.find('.tab-content .tab-pane' + tabId)

        tabs.removeClass('active')
        tabsContent.removeClass('active')
        tabsContent.removeClass('in')
        tabContentTarget.addClass('active')
        setTimeout( () => { tabContentTarget.addClass('in') }, 150)

        if( !$(this).hasClass('active') ) $(this).addClass('active')

        if(tabContentTarget.find('.filter__item').length > 9 ) {
            setTimeout( () => { handleFilterReset() }, 10 )
        }
    })
}

if($('.block-tabs')){

    $('.block-tabs__link').on('click', function(e){
        e.preventDefault()
        let contentBlock = $(this).data('content')
        let currentBlock = $(this).closest('.block-tabs')

        currentBlock.find('.block-tabs__link').removeClass('active')
        currentBlock.find('.block-tabs__link-wrapper').removeClass('active')
        $(this).addClass('active')
        $(this).closest('.block-tabs__link-wrapper').addClass('active')
        currentBlock.find('.block-tabs__single').removeClass('active')
        currentBlock.find('#'+contentBlock).addClass('active')

        currentBlock.find('.block-testimonial-tabs__image').removeClass('active')
        currentBlock.find('#block-image__'+contentBlock).addClass('active')
    })
}

if( $('#toc-index') ) {
    const btnCloseSidebar = document.querySelector('.navbar--categories-close')
    const toc = document.querySelector('.section-guide__toc')
    let link = $('#toc-index a')

    // Move to specific section when click on menu link
    link.on('click', function(e) {
        e.preventDefault()

        let target = $(this).attr('href'),
            navOffest = window.innerWidth <= 1024 ? 120 : 100

        $('html, body').animate({
            scrollTop: $(target).offset().top - navOffest
        }, 600)

        $(this).parent().addClass('on')

        setTimeout( function () {
            $(this).parent().addClass('active')
            link.parent().removeClass('on')
        }, 600)

        e.preventDefault()

        //if( toc.classList.contains('on') ) setTimeout( () => { btnCloseSidebar.click() }, 300)
    })

    // scrNav function
    // Change active dot according to the active section in the window
    function scrNav() {
        let sTop = $(window).scrollTop(),
            groups = $('.toc__group').length > 1 ? $('.toc__group') : $('.section-single-post__body h2')

        groups.each(function() {
            let id = $(this).attr('id'),
                offset = $(this).offset().top - ($('#main-nav').height() + 40),
                height = $(this).height()

            if(sTop >= offset && sTop < offset + height) {
                link.parent().removeClass('active')
                $('.toc__group').removeClass('active')
                $('a[href="#' + id + '"]').parent().addClass('active')
                $('.toc__group#'+id).addClass('active')
            }
        })
    }
    scrNav()

    // Run the scrNav when scroll
    $(window).on('scroll', function(){
        scrNav()
    })
}

$(document).ready(function () {
    window._wq = window._wq || [];
 
    _wq.push({ 
        id: '_all',
        onReady: function (video) {
            let played = false;
            let vidButton = $('[data-source-container-id="' + video._containerId + '"]').parent().parent().find('[data-vid-id="' + video._hashedId + '"]');

            if( document.body.classList.contains('single-videos') ) {
                let timeElem = document.querySelector('.section-single-post__details--time > span');
                timeElem.textContent = Math.ceil(video.duration() / 60);
            }

            video.bind('play', function () {
                vidButton.removeClass('on');
            })

            video.bind('mutechange', function (isMuted) {
                if (!played && !isMuted) {
                    video.time(0);
                    vidButton.removeClass('on');
                    played = true;
                }
            })

            video.bind('pause', function () {
                vidButton.addClass('on');
            })

            video.bind('end', function () {
                video.time(0);
                video.play();
            })

            vidButton.on('click', function () {
                video.play();
                vidButton.removeClass('on');
            });
        }
    });
});
 
addEventListener('load', (event) => {
    if( 'undefined' !== typeof Wistia ) { 
        Wistia.api.all().forEach( e => {
            let elem = document.getElementById(e.container.uniqueId),
                item = elem.closest('.videos-cards-slider__item'),
                preloadAnim = elem.closest('.preloader-anim'),
                itemTitle = item ? item.querySelector('.videos-cards-slider__item-title') : false, 
                isShowTitle = elem.classList.contains('wistia-popup'),
                isTranslationTitles = elem.classList.contains('translate-titles'),
                vidTitle = e.data.media.name ?? '',
                vidId = e._hashedId,
                video = Wistia.api(vidId)

            if(preloadAnim) preloadAnim.classList.replace('preloader-anim', 'on')
            if( itemTitle && isShowTitle && !isTranslationTitles ) itemTitle.textContent = vidTitle
 

            video.bind('end', function() {
                setTimeout( () => {
                    video.pause()
                    video.time(1)
                }, 100)
            })
        })
    }
});


