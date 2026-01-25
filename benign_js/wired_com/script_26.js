/* 元のURL: https://wired.com */
// 外部JS: https://wired.com/verso/static/presenter-bundles.f47e66e0ac7529fa7ec9.js
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 59331:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const react_1 = __importDefault(__webpack_require__(96540));
const styles_1 = __webpack_require__(62077);
const styles_2 = __webpack_require__(62077);
const track_component_1 = __webpack_require__(53499);
/**
 * BundleBody component
 *
 * @param {object} props - React props
 * @param {Array} props.body - The bundle body
 * @param {string} props.isCollapsible - Attribute to make body collapsible
 * @param {string} props.numberOfLinesToClamp - Number of lines by which body can be clamped
 * @param {boolean} [props.shouldOverrideTypeToken] - can be used for applying brand specefic Typography
 * @param {boolean} [props.shouldOverrideSpacing] - can be used for applying extra spacing to the heading tag
 * @returns {ReactElement} - The bundle body element
 */
const BundleBody = ({ body, isCollapsible = false, numberOfLinesToClamp = 2, shouldOverrideSpacing = false, shouldOverrideTypeToken = false }) => {
    react_1.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'BundleBody'
        });
    }, []);
    return (react_1.default.createElement(styles_1.Wrapper, null, isCollapsible ? (react_1.default.createElement(styles_2.BundleBodyClamp, { isCollapsible: isCollapsible, lines: numberOfLinesToClamp, className: "body__container" },
        react_1.default.createElement(styles_2.BundleBodyContainer, { body: body, className: "article__body", shouldOverrideTypeToken: shouldOverrideTypeToken, shouldOverrideSpacing: shouldOverrideSpacing }))) : (react_1.default.createElement(styles_2.BundleBodyContainer, { body: body, className: "body__container article__body", shouldOverrideTypeToken: shouldOverrideTypeToken, shouldOverrideSpacing: shouldOverrideSpacing }))));
};
BundleBody.propTypes = {
    body: prop_types_1.default.array.isRequired,
    isCollapsible: prop_types_1.default.bool,
    numberOfLinesToClamp: prop_types_1.default.number,
    shouldOverrideSpacing: prop_types_1.default.bool,
    shouldOverrideTypeToken: prop_types_1.default.bool
};
BundleBody.displayName = 'BundleBody';
exports["default"] = BundleBody;
//# sourceMappingURL=BundleBody.js.map

/***/ }),

/***/ 16339:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const configured_component_1 = __webpack_require__(12892);
const BundleBody_1 = __importDefault(__webpack_require__(59331));
exports["default"] = (0, configured_component_1.asConfiguredComponent)(BundleBody_1.default, 'BundleBody');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 67998:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(96540));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const prop_types_2 = __webpack_require__(5556);
const configured_component_1 = __webpack_require__(12892);
const redux_1 = __webpack_require__(57744);
const track_component_1 = __webpack_require__(53499);
const compute_categories_1 = __importDefault(__webpack_require__(23568));
const styles_1 = __webpack_require__(33776);
const FilterSelects_1 = __importDefault(__webpack_require__(69131));
/**
 * wControls component
 *
 * @param {object} [props] - Object with parameters to pass down to children
 * @param {object} [props.contentModel] - Client content model that manages content, sorting, filtering, and chunking into pages
 *
 * @returns {JSX.Element} <div>
 */
const FilteredContentControls = ({ contentModel, controlsRef }) => {
    react_1.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'FilteredContentControls'
        });
    }, []);
    // This local state variable exists for only one reason - incrementing it triggers a full re-render of
    // the controls row.  Is this overkill?  Probably, but it doesn't cost much and it always works.
    const [count, triggerRerender] = react_1.default.useState(0);
    if (!contentModel || !contentModel.filterModel)
        return null;
    const categories = (0, compute_categories_1.default)({
        contentModel,
        count,
        triggerRerender
    });
    return (react_1.default.createElement(styles_1.FilterRow, { rowRef: controlsRef },
        react_1.default.createElement(FilterSelects_1.default, { categories: categories || [] })));
};
FilteredContentControls.propTypes = {
    contentModel: prop_types_1.default.shape({
        totalCount: prop_types_1.default.oneOfType([prop_types_2.number, prop_types_2.func]).isRequired,
        filterModel: prop_types_1.default.object.isRequired
    }),
    controlsRef: prop_types_1.default.shape({ current: prop_types_1.default.object })
};
FilteredContentControls.displayName = 'FilteredContentControls';
exports["default"] = (0, redux_1.connector)((0, configured_component_1.asConfiguredComponent)(FilteredContentControls, 'FilteredContentControls'), {});
//# sourceMappingURL=FilteredContentControls.js.map

/***/ }),

/***/ 92724:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const FilteredContentControls_1 = __importDefault(__webpack_require__(67998));
exports["default"] = FilteredContentControls_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 33776:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilterSelectWrapper = exports.FilterRow = void 0;
const styled_components_1 = __importDefault(__webpack_require__(92168));
const constants_1 = __webpack_require__(96472);
const utils_1 = __webpack_require__(26865);
const grid_1 = __importDefault(__webpack_require__(86659));
const row_1 = __importDefault(__webpack_require__(66657));
exports.FilterRow = (0, styled_components_1.default)(row_1.default).withConfig({
    displayName: 'FilterRow'
}) ``;
exports.FilterSelectWrapper = (0, styled_components_1.default)(grid_1.default.WithMargins).withConfig({
    displayName: 'FilterSelectWrapper'
}) `
  && {
    // fix for icon-label-alignment
    .utility-selection-control__label {
      padding-top: 3px;
    }

    .dropdown__option {
      padding-top: ${(0, utils_1.calculateSpacing)(1.3)};
    }

    position: relative;

    grid-template-columns: repeat(4, minmax(200px, 1fr));
    z-index: ${constants_1.ZINDEX_MAP.dropdown};

    ${(0, utils_1.maxScreen)(constants_1.BREAKPOINTS.lg)} {
      grid-template-columns: repeat(3, minmax(200px, 1fr));
    }

    ${(0, utils_1.maxScreen)(constants_1.BREAKPOINTS.md)} {
      grid-template-columns: 1fr;
    }
  }

  .dropdown__menu {
    .dropdown__menu-list {
      height: auto;
      max-height: ${(0, utils_1.calculateSpacing)(52)};
    }
  }
`;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ 69131:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(96540));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const dropdown_1 = __webpack_require__(79499);
const styles_1 = __webpack_require__(33776);
/**
 * FilterSelect is a pure VIEW adapter to the MultipleSelect component from Dropdowns.
 *
 * @param {props} [props] - React props
 * @param {string} [props.categoryId] - category identifier for the system
 * @param {string} [props.categoryLabel] - Human readable category label
 * @param {Array} [props.filters] - the complete set of filters for this pull-down as an array of human-readaable strings. Order matters.
 * @param {Array} [props.selectedFilters] - subset of the filters that have been selcted by the user. Order does not matter.
 * @param {Function} [props.handleFilterChange] - function that changes the selected set
 *
 * @returns {ReactElement} <div>
 */
const FilterSelect = ({ categoryId, categoryLabel, filters, handleFilterChange, selectedFilters }) => {
    if (filters.length === 0)
        return null;
    const count = selectedFilters.length > 0 ? `(${selectedFilters.length})` : '';
    const label = `${categoryLabel} ${count}`;
    return (react_1.default.createElement(dropdown_1.MultipleSelect, { key: categoryId, onInputChange: handleFilterChange, options: filters, placeholderText: label, selectedValue: selectedFilters, shouldControlShowValue: false, shouldCloseMenuOnSelect: false, shouldRenderOptionWithCheckbox: true, isInline: false, configWidth: "100", isDisabled: false, hasEnableGreyout: true }));
};
FilterSelect.propTypes = {
    categoryId: prop_types_1.default.string,
    categoryLabel: prop_types_1.default.string,
    filters: prop_types_1.default.arrayOf(prop_types_1.default.shape({ label: prop_types_1.default.string, value: prop_types_1.default.string })),
    handleFilterChange: prop_types_1.default.func,
    selectedFilters: prop_types_1.default.arrayOf(prop_types_1.default.shape({ label: prop_types_1.default.string, value: prop_types_1.default.string }))
};
/**
 * FilterSelects is a tiny CONTROLLER to orgianize the array of category selectors.
 *
 * @param {props} [props] - React props
 * @param {object} [props.categories] - Array of FilterSelect settings.  Documentation and validation surround FilterSelect
 *
 * @returns {ReactElement} <div>
 */
const FilterSelects = ({ categories }) => {
    if (!categories || categories.length === 0)
        return null;
    return (react_1.default.createElement(styles_1.FilterSelectWrapper, null, categories.map(({ categoryId, categoryLabel, filters, selectedFilters, handleFilterChange }) => (react_1.default.createElement(FilterSelect, { key: categoryId, categoryId: categoryId, categoryLabel: categoryLabel, filters: filters, selectedFilters: selectedFilters, handleFilterChange: handleFilterChange })))));
};
FilterSelects.propTypes = {
    categories: prop_types_1.default.arrayOf(prop_types_1.default.object)
};
exports["default"] = FilterSelects;
//# sourceMappingURL=FilterSelects.js.map

/***/ }),

/***/ 23568:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const merge_category_filters_1 = __importDefault(__webpack_require__(83345));
const urlParamUtils_1 = __webpack_require__(61197);
function computeCategories({ contentModel, count, triggerRerender }) {
    const { filterModel } = contentModel;
    const { filterWith = [] } = filterModel.active;
    const { categories = {} } = filterModel.options;
    const computedCategories = categories.map(({ categoryId, label, filters }) => {
        const selectedFilters = filterWith.length > 0
            ? filters.filter((f) => filterWith.includes(f.value))
            : [];
        const handleFilterChange = (selected) => {
            // Selected is Array<Filter>, where filter is an object with value, label, and a few other properties.
            // Extract the key for the selected filters. Because the Selector is only for this category the filter
            // values here are only for this category.
            const selectedCategoryFilters = selected.map((f) => f.value);
            // FilterWith is the current active filter set in the filter model.  It is an array of strings matching
            // matching the .value properties in the filters.
            const activeFilters = filterModel.active.filterWith;
            // This operation produces a list of the .value strings in the filters for the current category.
            const categoryFilterOptions = filters.map((o) => o.value) || [];
            // Merge the selected filters for this category into the flat filter active set.
            const newActive = (0, merge_category_filters_1.default)({
                selectedCategoryFilters,
                categoryFilterOptions,
                activeFilters
            });
            // Install the new filter set in the filter model and trigger reRender
            filterModel.active = { filterWith: newActive };
            triggerRerender(count + 1);
            // Update the url query params for filters; set the content_page to reflect whatever happened in the contentModel
            const params = (0, urlParamUtils_1.readSortFilterPageParams)();
            params.filters = newActive;
            params.content_page = contentModel.pageNum;
            (0, urlParamUtils_1.writeSortFilterPageParams)(params);
        };
        // Sort the filters array alphabetically based on the label property
        const sortedFilters = filters.sort((a, b) => a.label.localeCompare(b.label));
        return {
            categoryId,
            categoryLabel: label,
            filters: sortedFilters,
            selectedFilters,
            handleFilterChange
        };
    });
    return computedCategories;
}
exports["default"] = computeCategories;
//# sourceMappingURL=compute-categories.js.map

/***/ }),

/***/ 83345:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function mergeCategoryFilters({ selectedCategoryFilters, categoryFilterOptions, activeFilters }) {
    const newActive = [...activeFilters];
    // First, add the selected filters for this category that are not already in active
    selectedCategoryFilters.forEach((filter) => {
        if (!activeFilters.includes(filter) &&
            categoryFilterOptions.includes(filter))
            newActive.push(filter);
    });
    // Next, remove the active filters that were unselected for this category.
    return newActive
        .map((filter) => {
        if (categoryFilterOptions.includes(filter)) {
            // the filter belongs to this category. Remove if not selected.
            return selectedCategoryFilters.includes(filter) ? filter : null;
        }
        // the filter is not in this category; leave it alone
        return filter;
    })
        .filter((x) => x !== null);
}
exports["default"] = mergeCategoryFilters;
//# sourceMappingURL=merge-category-filters.js.map

/***/ }),

/***/ 61197:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.writeSortFilterPageParams = exports.readSortFilterPageParams = void 0;
function readSortFilterPageParams() {
    // handle "not in browser" case
    if (false)
        {}
    try {
        const paramString = decodeURIComponent(window.location.search);
        if (typeof paramString !== 'string' || paramString.length < 1)
            return {};
        const params = paramString
            .substr(1) // remove leading '?'
            .split('&') // split on param separator
            .reduce((acc, pair) => {
            const [n = '', v = ''] = pair.split('=');
            const name = n.trim();
            const val = v.trim();
            switch (name) {
                case 'sort_by':
                    // use the last value for sort parameter.  The field is single-valued.
                    acc.sort_by = val;
                    break;
                case 'content_page':
                    // convert page to number.  Also use only the final page encountered.
                    acc.content_page = parseInt(val, 10);
                    break;
                case 'filter':
                    // Accumulate filter strings in a flat array.
                    if (acc.filters) {
                        acc.filters.push(val);
                    }
                    else {
                        acc.filters = [val];
                    }
                    break;
                default:
                    // noop.  Ignore all other query parameters.
                    break;
            }
            return acc;
        }, {}); // aggregate into param map
        return params;
    }
    catch (err) {
        // ignore error in production
        console.log(err);
        return {};
    }
}
exports.readSortFilterPageParams = readSortFilterPageParams;
function writeSortFilterPageParams(params) {
    try {
        // get current URL with old query params
        const { href } = window.location;
        const [base, rawQueries = ''] = href.split('?');
        const oldQueries = decodeURIComponent(rawQueries);
        // clean up old qeries.  Remove the old sort, filter, and page query params
        const pairs = oldQueries
            .split('&')
            .map((pair) => {
            const [p = '', v = ''] = pair.split('=');
            const par = p.trim().toLowerCase();
            const val = v.trim().toLowerCase();
            switch (par) {
                case 'sort_by':
                    return '';
                case 'filter':
                    return '';
                case 'content_page':
                    return '';
                default:
                    return par.length > 0 ? `${par}=${val}` : '';
            }
        })
            .filter((x) => x !== '');
        // Add the fresh sort, filter, page params
        if ('sort_by' in params) {
            pairs.push(`sort_by=${params.sort_by}`);
        }
        if ('filters' in params) {
            params.filters?.forEach((filter) => pairs.push(`filter=${filter}`));
        }
        if ('content_page' in params) {
            pairs.push(`content_page=${params.content_page}`);
        }
        // update history in place (without adding a new history line)
        window.history.replaceState(null, '', pairs.length > 0 ? `${base}?${pairs.join('&')}` : base);
        return true;
    }
    catch (err) {
        // ignore error in production
        console.log(err);
        return false;
    }
}
exports.writeSortFilterPageParams = writeSortFilterPageParams;
//# sourceMappingURL=urlParamUtils.js.map

/***/ }),

/***/ 36319:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const react_1 = __importDefault(__webpack_require__(96540));
const redux_1 = __webpack_require__(57744);
const track_component_1 = __webpack_require__(53499);
const filtered_content_controls_1 = __importDefault(__webpack_require__(92724));
const useContentModel_1 = __importDefault(__webpack_require__(1148));
const ReactiveContentWrapper_1 = __importDefault(__webpack_require__(48982));
const DEFAULT_CHUNK_SIZE = 24;
/**
 * FilteredContent component
 *
 * This parent HOC sets up and "owns" the content models. It does the initial setup on page load then goes dormant,
 * letting the child nodes operate the experience by manipulating the models.
 *
 * @param {object} props - All the props.
 * @param {integer} [props.chunkSize] - Optional size of a page of content. A default is used if this is not set in the config.
 * @param {object}}[props.filterableBundleContent] - The content items
 * @param {object} [props.filterConfig] - Optional filter input to populate filter options
 * @param {object} [props.sortConfig] - Optional sort input to populate filter options
 *
 * @returns {ReactElement} <div>
 */
const FilteredContent = ({ chunkSize = DEFAULT_CHUNK_SIZE, filterableBundleContent, filterConfig, sortConfig }) => {
    react_1.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'FilteredContent'
        });
    }, []);
    // This stores a ref to the row wrapper element.  NOTE - Why is this even needed?
    const controlsRef = react_1.default.useRef(null);
    // Note - the transform layer is responsible for building these content model inputs. It is
    // important that the content arrives compatible with the specified sort and filter models.
    const contentModel = (0, useContentModel_1.default)({
        sort: sortConfig,
        filter: filterConfig,
        initial: {
            items: filterableBundleContent,
            totalCount: filterableBundleContent?.length || 0,
            chunkSize,
            pageNum: 1
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(filtered_content_controls_1.default, { contentModel: contentModel, controlsRef: controlsRef }),
        react_1.default.createElement(ReactiveContentWrapper_1.default, { contentModel: contentModel, controlsRef: controlsRef })));
};
FilteredContent.propTypes = {
    chunkSize: prop_types_1.default.number,
    filterableBundleContent: prop_types_1.default.array.isRequired,
    filterConfig: prop_types_1.default.shape({
        type: prop_types_1.default.string,
        setup: prop_types_1.default.object
    }),
    sortConfig: prop_types_1.default.shape({
        type: prop_types_1.default.string,
        setup: prop_types_1.default.object
    })
};
FilteredContent.displayName = 'FilteredContent';
exports["default"] = (0, redux_1.connector)(FilteredContent, {
    keysToPluck: ['filterableBundleContent', 'filterConfig', 'sortConfig']
});
//# sourceMappingURL=FilteredContent.js.map

/***/ }),

/***/ 21047:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const configured_component_1 = __webpack_require__(12892);
const FilteredContent_1 = __importDefault(__webpack_require__(36319));
exports["default"] = (0, configured_component_1.asConfiguredComponent)(FilteredContent_1.default, 'FilteredContent');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 56473:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TotalCountWrapper = exports.TotalCount = exports.PaginationRowContent = exports.PaginationRowWrapper = exports.PaginationLabel = void 0;
const base_1 = __webpack_require__(76955);
const styles_1 = __webpack_require__(51908);
const styled_components_1 = __importDefault(__webpack_require__(92168));
const utils_1 = __webpack_require__(26865);
const constants_1 = __webpack_require__(96472);
const base_2 = __webpack_require__(76955);
const grid_1 = __importDefault(__webpack_require__(86659));
const styles_2 = __webpack_require__(40653);
exports.PaginationLabel = styles_1.PageSummary;
exports.PaginationRowWrapper = base_1.BaseWrap;
exports.PaginationRowContent = styles_1.PaginationContent;
exports.TotalCount = (0, styled_components_1.default)(base_2.BaseText).withConfig({
    displayName: 'TotalCount'
}) `
  display: block;
  padding: ${(0, utils_1.calculateSpacing)(2)};
  width: 100%;
  text-align: right;
  @media (max-width: ${constants_1.BREAKPOINTS.md}) {
    text-align: center;
  }
  ${({ theme }) => (0, utils_1.getTypographyStyles)(theme, 'typography.definitions.globalEditorial.tags')};
  ${({ theme, colorToken }) => (0, utils_1.getColorStyles)(theme, 'color', colorToken)};
`;
exports.TotalCount.defaultProps = {
    as: 'div',
    colorToken: 'colors.interactive.base.black',
    typeToken: 'typography.definitions.utility.input-core'
};
exports.TotalCountWrapper = (0, styled_components_1.default)(grid_1.default.WithMargins).withConfig({
    displayName: 'TotalCountWrapper'
}) `
  ${({ theme }) => (0, utils_1.getColorStyles)(theme, 'border-top-color', 'colors.consumption.body.standard.divider')};

  ${styles_2.GridItem} {
    grid-column: 1 / -1;
    margin-top: ${(0, utils_1.calculateSpacing)(2)};
    border-top: 1px solid;
  }
`;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ 61169:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const react_1 = __importDefault(__webpack_require__(96540));
const react_intl_1 = __webpack_require__(46984);
const variations_1 = __importDefault(__webpack_require__(31226));
const translations_1 = __importDefault(__webpack_require__(46035));
const styles_1 = __webpack_require__(56473);
const styles_2 = __webpack_require__(51908);
const urlParamUtils_1 = __webpack_require__(61197);
const calculatePageDetails = (contentModel) => {
    const isPreviousButtonDisabled = contentModel.pageNum <= 1;
    const isNextButtonDisabled = contentModel.pageNum >= contentModel.lastPage;
    return {
        isPreviousButtonDisabled,
        isNextButtonDisabled,
        previousButtonType: isPreviousButtonDisabled ? 'text' : 'filled',
        nextButtonType: isNextButtonDisabled ? 'text' : 'filled',
        NextButtonComponent: isNextButtonDisabled ? variations_1.default.Utility : variations_1.default.Primary,
        PreviousButtonComponent: isPreviousButtonDisabled
            ? variations_1.default.Utility
            : variations_1.default.Primary
    };
};
const Pagination = ({ contentModel, controlsRef }) => {
    const { formatMessage } = (0, react_intl_1.useIntl)();
    const { isPreviousButtonDisabled, isNextButtonDisabled, previousButtonType, nextButtonType, NextButtonComponent, PreviousButtonComponent } = calculatePageDetails(contentModel);
    const scrollToElement = () => {
        if (controlsRef.current) {
            controlsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    };
    const handlePrevious = (e) => {
        e.preventDefault();
        const newPageNum = Math.max(1, contentModel.pageNum - 1);
        // Update URL
        const params = (0, urlParamUtils_1.readSortFilterPageParams)();
        params.content_page = newPageNum;
        (0, urlParamUtils_1.writeSortFilterPageParams)(params);
        // Update content model
        contentModel.pageNum = newPageNum;
        // Return to top
        scrollToElement();
    };
    const handleNext = (e) => {
        e.preventDefault();
        const newPageNum = Math.min(contentModel.pageNum + 1, contentModel.lastPage);
        // Update URL
        const params = (0, urlParamUtils_1.readSortFilterPageParams)();
        params.content_page = newPageNum;
        (0, urlParamUtils_1.writeSortFilterPageParams)(params);
        // Update content model
        contentModel.pageNum = newPageNum;
        // Return to top
        scrollToElement();
    };
    return (react_1.default.createElement(styles_1.PaginationRowWrapper, null,
        react_1.default.createElement(styles_1.PaginationRowContent, null,
            react_1.default.createElement(styles_2.PaginationButtonWrapper, { isDisabled: isPreviousButtonDisabled },
                react_1.default.createElement(PreviousButtonComponent, { btnStyle: previousButtonType, inputKind: "button", isLinkDisabled: isPreviousButtonDisabled, label: formatMessage(translations_1.default.previousPage), onClickHandler: handlePrevious })),
            react_1.default.createElement(styles_1.PaginationLabel, null, `${contentModel.pageNum} ${formatMessage(translations_1.default.ofHed)} ${contentModel.lastPage}`),
            react_1.default.createElement(styles_2.PaginationButtonWrapper, { isDisabled: isNextButtonDisabled },
                react_1.default.createElement(NextButtonComponent, { btnStyle: nextButtonType, inputKind: "button", isLinkDisabled: isNextButtonDisabled, label: formatMessage(translations_1.default.nextPage), onClickHandler: handleNext })))));
};
Pagination.propTypes = {
    contentModel: prop_types_1.default.shape({
        lastPage: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.func]),
        pageNum: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.func])
    }),
    controlsRef: prop_types_1.default.shape({ current: prop_types_1.default.object })
};
Pagination.displayName = 'Pagination';
exports["default"] = Pagination;
//# sourceMappingURL=Pagination.js.map

/***/ }),

/***/ 48982:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const react_1 = __importDefault(__webpack_require__(96540));
const client_1 = __webpack_require__(52304);
const react_intl_1 = __webpack_require__(46984);
const reactive_vars_1 = __webpack_require__(91261);
const MultiPackageRow_1 = __importDefault(__webpack_require__(3771));
const summary_river_1 = __importDefault(__webpack_require__(84311));
const styles_1 = __webpack_require__(53799);
const Pagination_1 = __importDefault(__webpack_require__(61169));
const utility_card_1 = __importDefault(__webpack_require__(60521));
const translations_1 = __importDefault(__webpack_require__(46035));
const styles_2 = __webpack_require__(56473);
/**
 * ReactiveContent
 *
 * This HOC wrapper reacts to changes in a reactive var and updates the array of content sent to the child component that
 * presents this sorted, filtered, and chunked content to the user.
 *
 * @param {object} props - All the props.
 * @param {contentModel} props.contentModel - persistent model that stores, fetches, sorts, and filters content items.
 *
 * @returns {JSXElement} <div>
 */
const ReactiveContentWrapper = ({ contentModel, controlsRef }) => {
    // This is the working set of items.  It may be refreshed by a get call to the content model.
    const [items, setItems] = react_1.default.useState(() => {
        const response = contentModel && contentModel.getContent
            ? contentModel
                .getContent()
                .items.map((item) => item.content || null)
                .filter((x) => x !== null)
            : [];
        return response;
    });
    // This async function is the heart of the wrapper. It is stashed in a useCallback so it can be reused for speed.
    // When it is run it refreshes items with a query call on the content model. This state change re-runs the wrapper and
    // updates the component.
    const updateItems = react_1.default.useCallback(() => {
        try {
            if (contentModel && contentModel.getContent) {
                // the contentModel does all the sorting. and filtering internally with this one synchronous call to .getContent.
                // The internal settings of the sort and filter models, as well as the chunk size and page number, determine which
                // content items are returned and in what order.
                const response = contentModel.getContent();
                if (response.items && Array.isArray(response.items)) {
                    setItems(response.items
                        .map((item) => item.content || null)
                        .filter((x) => x !== null));
                }
            }
        }
        catch (err) {
            console.error('ERROR refreshing content', err);
        }
    }, [contentModel, setItems]);
    const { formatMessage } = (0, react_intl_1.useIntl)();
    // This boolean reactiveVar is the trigger for refresh cycle. The reactive var is available to any component in
    // the app, so triggering is available globally.  The user control buttons can do it directly.
    const shouldRefreshContent = (0, client_1.useReactiveVar)(reactive_vars_1.shouldRefreshContentVar);
    // This effect is run whenever the trigger value changes.  It is trapped to false to stop looping.
    react_1.default.useEffect(() => {
        if (shouldRefreshContent) {
            updateItems();
            (0, reactive_vars_1.shouldRefreshContentVar)(false);
        }
    }, [shouldRefreshContent, updateItems]);
    // Render the component
    const dataJourneyHook = 'row-content';
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_2.TotalCountWrapper, null,
            react_1.default.createElement(styles_2.TotalCount, null,
                contentModel.totalCount || 0,
                ' ',
                formatMessage(translations_1.default.totalCount))),
        react_1.default.createElement(MultiPackageRow_1.default, { key: "reactive-content", dataJourneyHook: dataJourneyHook },
            contentModel.totalCount > 0 ? (react_1.default.createElement(summary_river_1.default, { items: items })) : (react_1.default.createElement(utility_card_1.default, { dangerousHed: formatMessage(translations_1.default.noResultHed), dangerousDek: formatMessage(translations_1.default.noResultDek) })),
            react_1.default.createElement(styles_1.PaginationModalWrapper, null, contentModel.totalCount > 0 && (react_1.default.createElement(Pagination_1.default, { contentModel: contentModel, controlsRef: controlsRef }))))));
};
ReactiveContentWrapper.propTypes = {
    contentModel: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.func]),
    controlsRef: prop_types_1.default.shape({ current: prop_types_1.default.object })
};
ReactiveContentWrapper.displayName = 'ReactiveContentWrapper';
exports["default"] = ReactiveContentWrapper;
//# sourceMappingURL=ReactiveContentWrapper.js.map

/***/ }),

/***/ 46035:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_intl_1 = __webpack_require__(46984);
exports["default"] = (0, react_intl_1.defineMessages)({
    noResultDek: {
        id: 'FilterComponent.NoResultDek',
        defaultMessage: "Sorry, we can't display any results for those filtering options, please try again.",
        description: 'Message when there is no result to display.'
    },
    noResultHed: {
        id: 'FilterComponent.NoResultHed',
        defaultMessage: 'No Result',
        description: 'Message when there is no result to display.'
    },
    totalCount: {
        id: 'FilterComponent.TotalCount',
        defaultMessage: 'Results',
        description: 'Suffix text to append to the total count'
    },
    nextPage: {
        id: 'ContentPageControlRow.NextPage',
        defaultMessage: 'Next',
        description: 'The button label'
    },
    previousPage: {
        id: 'ContentPageControlRow.PreviousPage',
        defaultMessage: 'Previous',
        description: 'The button label'
    },
    ofHed: {
        id: 'ContentPageControlRow.ofHed',
        defaultMessage: 'Of',
        description: 'message between page numbers'
    }
});
//# sourceMappingURL=translations.js.map

/***/ }),

/***/ 91261:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.shouldRefreshContentVar = void 0;
const client_1 = __webpack_require__(52304);
const shouldRefreshContentVar = (0, client_1.makeVar)(false);
exports.shouldRefreshContentVar = shouldRefreshContentVar;
//# sourceMappingURL=reactive-vars.js.map

/***/ }),

/***/ 1148:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(96540));
const client_content_model_1 = __webpack_require__(85151);
const reactive_vars_1 = __webpack_require__(91261);
const urlParamUtils_1 = __webpack_require__(61197);
const useContentModel = ({ sort, filter, sourceFunction, initial }) => {
    // The models ( sort and filter are contained in content) are locked away in a useRef hook to
    // protect them from re-rending.
    const _model = react_1.default.useRef((0, client_content_model_1.createContentModel)({
        sort,
        filter,
        sourceFunction,
        refreshCallback: () => (0, reactive_vars_1.shouldRefreshContentVar)(true),
        initial
    }));
    const contentModel = _model.current;
    // set to whatever settings are in the URL
    if (true) {
        try {
            // get the parameters from the URL
            const params = (0, urlParamUtils_1.readSortFilterPageParams)();
            // set filters to match URL filter query params if provided
            if ('filters' in params) {
                contentModel.filterModel.active = { filterWith: params.filters };
            }
            // // set content page to page in query params if provided
            if ('content_page' in params && typeof params.content_page === 'number')
                contentModel.pageNum = params.content_page;
        }
        catch (err) {
            console.log(err);
        }
    }
    return contentModel;
};
exports["default"] = useContentModel;
//# sourceMappingURL=useContentModel.js.map

/***/ }),

/***/ 8479:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(96540));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const bundle_body_1 = __importDefault(__webpack_require__(16339));
const sub_navigation_1 = __importDefault(__webpack_require__(56167));
const styles_1 = __webpack_require__(94631);
const track_component_1 = __webpack_require__(53499);
/**
 * DefaultHeader component
 *
 * @param {object} props - React props
 * @param {object} [props.bundle] - Bundle properties to get data for BundleHeader
 * @param {object} [props.navigation] - Optional navigation properties
 *
 * @returns {JSX.Element} <div>
 */
const HeaderGroup = (props) => {
    react_1.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'HeaderGroup'
        });
    }, []);
    const { bundle: { dangerousBundleDek, bundleTitle, lede, bundleBody, headerChipLinks, shouldEnableSubNavigation, shouldEnableLede, hasDefaultAffiliateDisclaimer, showDisclaimer }, navigation: { subchannelLinks } } = props;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_1.HomepageHeader, { dangerousHed: bundleTitle, subHed: dangerousBundleDek, lede: lede, toggleChipsWithLink: headerChipLinks, shouldEnableSubNavigation: shouldEnableSubNavigation, shouldEnableLede: shouldEnableLede, type: "header" }),
        Boolean(bundleBody) && react_1.default.createElement(bundle_body_1.default, { body: bundleBody }),
        hasDefaultAffiliateDisclaimer && showDisclaimer && (react_1.default.createElement(styles_1.HomePageDisclaimerWrapper, null,
            react_1.default.createElement(styles_1.HomePageDisclaimer, null))),
        subchannelLinks?.length > 0 && shouldEnableSubNavigation && (react_1.default.createElement(sub_navigation_1.default, { links: subchannelLinks, hasBorders: true, isCentered: true, isSlim: true }))));
};
HeaderGroup.propTypes = {
    bundle: prop_types_1.default.object,
    navigation: prop_types_1.default.shape({
        subchannelLinks: prop_types_1.default.arrayOf(prop_types_1.default.object)
    })
};
exports["default"] = HeaderGroup;
//# sourceMappingURL=HeaderGroup.js.map

/***/ }),

/***/ 86559:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const configured_component_1 = __webpack_require__(12892);
const HeaderGroup_1 = __importDefault(__webpack_require__(8479));
exports["default"] = (0, configured_component_1.asConfiguredComponent)(HeaderGroup_1.default, 'HeaderGroup');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8193:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const configured_component_1 = __webpack_require__(12892);
const MultiPackages_1 = __importDefault(__webpack_require__(97737));
exports["default"] = (0, configured_component_1.asConfiguredComponent)(MultiPackages_1.default, 'MultiPackages');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 90367:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const react_1 = __importDefault(__webpack_require__(96540));
const react_2 = __webpack_require__(96540);
const react_intl_1 = __webpack_require__(46984);
const utility_bar_1 = __importDefault(__webpack_require__(71792));
const translations_1 = __importDefault(__webpack_require__(10958));
const Search_1 = __importDefault(__webpack_require__(90506));
const styles_1 = __webpack_require__(68327);
const track_component_1 = __webpack_require__(53499);
const SearchFilter = ({ url = '' }) => {
    const formRef = (0, react_2.useRef)(null);
    react_1.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'SearchFilter'
        });
    }, []);
    const { formatMessage } = (0, react_intl_1.useIntl)();
    let searchURL = new URLSearchParams(url);
    const [searchVal, setsearchVal] = (0, react_2.useState)(searchURL.get('q') ? searchURL.get('q') : '');
    const iconComponent = ({ className }) => {
        return (react_1.default.createElement("div", { className: className },
            react_1.default.createElement(Search_1.default, null)));
    };
    const handleSearch = (searchQuery) => {
        searchURL = new URLSearchParams(window.location.search);
        setsearchVal(searchQuery);
        searchURL.delete('q');
        searchURL.delete('page');
        if (searchURL.get('filter') === 'channels/artificial-intelligence') {
            searchURL.delete('filter');
        }
        let updatedUrl = searchURL.toString();
        if (updatedUrl) {
            updatedUrl += '&';
        }
        else {
            updatedUrl = '?';
        }
        updatedUrl += searchQuery ? `q=${searchQuery}` : '';
        updatedUrl += searchURL.get('filter')
            ? ''
            : `&filter=channels/artificial-intelligence`;
        window.location.search = updatedUrl;
    };
    const onClickHandler = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const searchQuery = formRef.current?.[0]?.value;
        if (searchQuery || (searchURL.get('q') && !searchQuery)) {
            // handling search only when there is search param and restricting when search param is cleared
            handleSearch(searchQuery);
        }
    };
    return (react_1.default.createElement(utility_bar_1.default, { hideDividers: true },
        react_1.default.createElement("form", { action: "", method: "GET", ref: formRef, "data-testid": "SearchForm" },
            react_1.default.createElement(styles_1.HomePageSearchFormGrid, null,
                react_1.default.createElement(styles_1.HomepageSearchInput, { defaultValue: searchVal, formName: "search", type: "search", name: "q", label: formatMessage(translations_1.default.searchInputAriaLabel), hasAttachedButton: true, hideButtonInMobile: true, hideLabel: true, buttonInputKind: "submit", buttonLabel: formatMessage(translations_1.default.searchButtonLabel), placeholder: "Search", shouldUseUppercase: false, LeadingIcon: iconComponent, onClickHandler: onClickHandler })))));
};
SearchFilter.propTypes = {
    url: prop_types_1.default.string
};
exports["default"] = SearchFilter;
//# sourceMappingURL=SearchFilter.js.map

/***/ }),

/***/ 54821:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const configured_component_1 = __webpack_require__(12892);
const SearchFilter_1 = __importDefault(__webpack_require__(90367));
exports["default"] = (0, configured_component_1.asConfiguredComponent)(SearchFilter_1.default, 'SearchFilter');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 68327:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HomePageSearchFormGrid = exports.HomepageSearchInput = void 0;
const styled_components_1 = __importDefault(__webpack_require__(92168));
const utils_1 = __webpack_require__(26865);
const constants_1 = __webpack_require__(96472);
const text_field_1 = __importDefault(__webpack_require__(89662));
const styles_1 = __importDefault(__webpack_require__(60434));
const grid_1 = __importDefault(__webpack_require__(86659));
const styles_2 = __webpack_require__(40653);
const HomepageSearchInput = (0, styled_components_1.default)(text_field_1.default).withConfig({
    displayName: 'HomepageSearchInput'
}) `
  ${(0, utils_1.minScreen)(constants_1.BREAKPOINTS.md)} {
    margin: ${(0, utils_1.calculateSpacing)(1.25)} 0 0;
  }

  ${styles_1.default} {
    appearance: none;
  }

  input {
    border-color: #fff;
    width: 100%;
  }

  button,
  button:hover,
  button:focus {
    border: 1px solid white;
  }
`;
exports.HomepageSearchInput = HomepageSearchInput;
const HomePageSearchFormGrid = (0, styled_components_1.default)(grid_1.default.WithMargins).withConfig({
    displayName: 'HomePageSearchFormGrid'
}) `
  > ${styles_2.GridItem}:first-child {
    grid-column: 1 / span 5;

    ${(0, utils_1.maxScreen)(constants_1.BREAKPOINTS.lg)} {
      grid-column: 1 / span 5;
    }
  }
  > ${styles_2.GridItem}:last-child {
    grid-column: 1 / span 4;

    ${(0, utils_1.minMaxScreen)(constants_1.BREAKPOINTS.md, constants_1.BREAKPOINTS.xl)} {
      grid-column: 1 / span 5;
    }
  }
`;
exports.HomePageSearchFormGrid = HomePageSearchFormGrid;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ 92927:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const classnames_1 = __importDefault(__webpack_require__(32485));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const react_1 = __importDefault(__webpack_require__(96540));
const styles_1 = __webpack_require__(98708);
const track_component_1 = __webpack_require__(53499);
/**
 * UtilityBar component
 *
 * @param {object} props - React props
 * @param {ReactElement|string} [props.children] - Dropdowns to display
 * @param {string} [props.className] - Optional top-level class to add
 * @param {boolean} [props.hideDividers] - Optional prop to remove dividers
 * @param {boolean} [props.hasTopDivider] - Optional prop to show top divider
 * @param {boolean} [props.isMultiple] - Optionally displays second dropdown with appropriate styles
 *
 * @returns {ReactElement} <div>
 */
const UtilityBar = ({ children, className, hideDividers = false, hasTopDivider, isMultiple }) => {
    react_1.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'UtilityBar'
        });
    }, []);
    return (react_1.default.createElement(styles_1.UtilityBarWrapper, { className: (0, classnames_1.default)(className, 'utility-bar'), "data-testid": "UtilityBar", hasTopDivider: hasTopDivider, hideDividers: hideDividers, isMultiple: isMultiple }, children));
};
UtilityBar.propTypes = {
    children: prop_types_1.default.shape([
        prop_types_1.default.arrayOf(prop_types_1.default.node),
        prop_types_1.default.node
    ]),
    className: prop_types_1.default.string,
    hasTopDivider: prop_types_1.default.bool,
    hideDividers: prop_types_1.default.bool,
    isMultiple: prop_types_1.default.bool
};
exports["default"] = UtilityBar;
//# sourceMappingURL=UtilityBar.js.map

/***/ }),

/***/ 71792:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const UtilityBar_1 = __importDefault(__webpack_require__(92927));
exports["default"] = UtilityBar_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 98708:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UtilityBarWrapper = void 0;
const styled_components_1 = __importDefault(__webpack_require__(92168));
const utils_1 = __webpack_require__(26865);
const constants_1 = __webpack_require__(96472);
const UtilityBarWrapper = styled_components_1.default.div.withConfig({
    displayName: 'UtilityBarWrapper'
}) `
  ${({ hasTopDivider }) => (hasTopDivider ? 'border-top: 1px solid;' : '')};

  &:only-child {
    ${({ theme }) => (0, utils_1.getColorStyles)(theme, 'border-color', 'colors.consumption.body.standard.divider')};
  }

  border-bottom: 1px solid;
  ${({ theme }) => (0, utils_1.getColorStyles)(theme, 'border-color', 'colors.consumption.body.standard.divider')};
  padding-bottom: 0;

  @media (min-width: ${constants_1.BREAKPOINTS.md}) {
    padding: ${(0, utils_1.calculateSpacing)(1.875)} 0;
  }

  @media (min-width: 0) and (max-width: ${constants_1.BREAKPOINTS.md}) {
    margin-bottom: ${(0, utils_1.calculateSpacing)(2.5)};
  }

  .dropdown {
    display: flex;
    align-items: center;

    @media (min-width: 0) and (max-width: ${constants_1.BREAKPOINTS.md}) {
      margin-bottom: ${(0, utils_1.calculateSpacing)(3.75)};
    }

    .dropdown__assistive-label {
      ${(0, utils_1.getTypographyStyles)('typography.definitions.utility.label')};
      padding: 0 ${(0, utils_1.calculateSpacing)(2)} 0 0;
    }

    .dropdown__field {
      @media (min-width: 0) and (max-width: ${constants_1.BREAKPOINTS.sm}) {
        margin-left: auto;
        width: ${(0, utils_1.calculateSpacing)(21)};
      }
    }
  }

  ${({ isMultiple }) => isMultiple &&
    `
      .dropdown + .dropdown {
        padding: ${(0, utils_1.calculateSpacing)(2)} 0 0;
      }

      @media (min-width: ${constants_1.BREAKPOINTS.sm}) and (max-width: ${constants_1.BREAKPOINTS.md}) {
        .dropdown__field {
          margin-left: auto;
          width: ${(0, utils_1.calculateSpacing)(21)};
        }
      }

      @media (min-width: ${constants_1.BREAKPOINTS.md}) {
        display: flex;

        .dropdown {
          display: inline-flex;

          + .dropdown {
            padding: 0 0 0 ${(0, utils_1.calculateSpacing)(7)};
          }
        }
      }
    `}

  ${({ hideDividers }) => hideDividers &&
    `
      border-top: none;
      border-bottom: none;
    `}
`;
exports.UtilityBarWrapper = UtilityBarWrapper;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ 61077:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(96540));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const redux_1 = __webpack_require__(57744);
const home_page_1 = __importDefault(__webpack_require__(32933));
const package_bundle_page_1 = __importDefault(__webpack_require__(86149));
const destination_bundle_page_1 = __importDefault(__webpack_require__(56093));
const commerce_events_bundle_page_1 = __importDefault(__webpack_require__(96118));
const podcast_detailed_page_1 = __importDefault(__webpack_require__(60057));
const universal_bundle_page_1 = __importDefault(__webpack_require__(25536));
const magazine_bundle_page_1 = __importDefault(__webpack_require__(20403));
const filterable_bundle_page_1 = __importDefault(__webpack_require__(32315));
const components = {
    commerceEvents: commerce_events_bundle_page_1.default,
    packageBundle: package_bundle_page_1.default,
    directoryBundle: package_bundle_page_1.default,
    destinationBundle: destination_bundle_page_1.default,
    podcastBundle: podcast_detailed_page_1.default,
    versoUniversalBundle: universal_bundle_page_1.default,
    magazineBundle: magazine_bundle_page_1.default,
    versoFilterableBundle: filterable_bundle_page_1.default
};
const track_component_1 = __webpack_require__(53499);
const BundlePage = (props) => {
    react_1.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'BundlePage'
        });
    }, []);
    const { bundle: { namespace }, hasConsistentSpacing } = props;
    const BundleComponent = components[namespace];
    if (BundleComponent && typeof BundleComponent === 'function') {
        return react_1.default.createElement(BundleComponent, { hasConsistentSpacing: hasConsistentSpacing });
    }
    return react_1.default.createElement(home_page_1.default, { hasConsistentSpacing: hasConsistentSpacing });
};
BundlePage.propTypes = {
    bundle: prop_types_1.default.shape({
        namespace: prop_types_1.default.string
    }).isRequired,
    hasConsistentSpacing: prop_types_1.default.bool
};
exports["default"] = (0, redux_1.connector)(BundlePage, {
    keysToPluck: ['bundle', 'hasConsistentSpacing']
});
//# sourceMappingURL=BundlePage.js.map

/***/ }),

/***/ 26836:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const BundlePage_1 = __importDefault(__webpack_require__(61077));
exports["default"] = BundlePage_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 62377:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const classnames_1 = __importDefault(__webpack_require__(32485));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const react_1 = __importDefault(__webpack_require__(96540));
const redux_1 = __webpack_require__(57744);
const sign_in_modal_1 = __importDefault(__webpack_require__(14935));
const multi_packages_1 = __importDefault(__webpack_require__(8193));
const bundle_body_1 = __importDefault(__webpack_require__(16339));
const bundle_header_1 = __importDefault(__webpack_require__(24125));
const payment_gateway_1 = __webpack_require__(92807);
const row_1 = __importDefault(__webpack_require__(66657));
const ad_1 = __importDefault(__webpack_require__(19607));
const styles_1 = __webpack_require__(47965);
/**
 * CommerceEventsPage component
 *
 * @param {object} props - All the props.
 * @param {string} [props.affiliateDisclaimer] - Disclaimer text to be shown on product page
 * @param {object} [props.attributes] - Optional attributes to add top level i.e. aria-*, role, etc.
 * @param {object} props.bundle - Object containing pairs of template names with corresponding data.
 * @param {string} [props.className] - Optional top-level class to add
 * @param {string} [props.fullPageTheme] - Optional prop to apply an inverted (dark) theme to the entire page
 * @param {object} [props.isInvertedTheme] - Props to verify the inverted_theme tag is true or false
 * @param {boolean} [props.shouldUseBundleHeader] - Optional prop to show BundleHeader
 * @param {boolean} [props.shouldUseCommerceEventsHeader] - Optional prop to show CommerceEventsHeader
 * @param {boolean} [props.showBookmark] - Optional prop to show bookmark buttons
 * @param {bool} [props.hasConsistentSpacing] - Optional flag that defines whether the consistent spacing is needed or not
 * @returns {ReactElement} <div>
 */
const CommerceEventsBundlePage = (props) => {
    const { attributes, bundle: { affiliateDisclaimer, bundleBody, containers, dangerousBundleDek, isInvertedTheme, bundleTitle, hasDefaultAffiliateDisclaimer, lede, rcaDisclaimer, showDisclaimer }, hasConsistentSpacing, showBackgroundGradientColor, className, fullPageTheme = 'standard', spacingAboveAd, shouldUseBundleHeader = false, shouldUseCommerceEventsHeader = true, showBookmark = false } = props;
    return (react_1.default.createElement(styles_1.CommerceEventsPageWrapper, { ...attributes, fullPageTheme: isInvertedTheme ? 'inverted' : fullPageTheme, className: (0, classnames_1.default)(className, isInvertedTheme ? 'inverted' : fullPageTheme), showBackgroundGradientColor: showBackgroundGradientColor, hasBaseAds: true, isInverted: isInvertedTheme },
        showBookmark && react_1.default.createElement(sign_in_modal_1.default, { analyticsType: "commerce-events-bundle" }),
        hasDefaultAffiliateDisclaimer && showDisclaimer && (react_1.default.createElement(styles_1.CommerceEventsPageDisclaimer, { isInverted: isInvertedTheme, disclaimerHtml: affiliateDisclaimer })),
        shouldUseCommerceEventsHeader && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(styles_1.CommerceEventsHeader, { contentAlign: "center", isInverted: isInvertedTheme },
                react_1.default.createElement("h1", null, bundleTitle)),
            lede && react_1.default.createElement(bundle_header_1.default, { lede: lede }))),
        shouldUseBundleHeader && (react_1.default.createElement(bundle_header_1.default, { dangerousDek: dangerousBundleDek, hed: bundleTitle, lede: lede })),
        rcaDisclaimer && (react_1.default.createElement(styles_1.CommerceEventsRCAPageDisclaimer, { isInverted: isInvertedTheme, disclaimerHtml: rcaDisclaimer })),
        bundleBody && react_1.default.createElement(bundle_body_1.default, { body: bundleBody }),
        react_1.default.createElement(multi_packages_1.default, { containers: containers, bundleProps: props, isInvertedTheme: isInvertedTheme, hasStickyLinkBanner: true, hasConsistentSpacing: hasConsistentSpacing }),
        react_1.default.createElement(payment_gateway_1.PaymentGateway, { group: "ads" },
            react_1.default.createElement(row_1.default, { bottomSpacing: 7, topSpacing: spacingAboveAd },
                react_1.default.createElement(ad_1.default, { position: "footer", shouldHoldSpace: true })))));
};
CommerceEventsBundlePage.propTypes = {
    attributes: prop_types_1.default.object,
    bundle: prop_types_1.default.shape({
        affiliateDisclaimer: prop_types_1.default.string,
        containers: prop_types_1.default.arrayOf(prop_types_1.default.object),
        dangerousBundleDek: prop_types_1.default.string,
        isInvertedTheme: prop_types_1.default.bool,
        bundleBody: prop_types_1.default.array,
        bundleTitle: prop_types_1.default.string,
        lede: prop_types_1.default.object,
        rcaDisclaimer: prop_types_1.default.string,
        hasDefaultAffiliateDisclaimer: prop_types_1.default.bool,
        showDisclaimer: prop_types_1.default.bool
    }).isRequired,
    className: prop_types_1.default.string,
    featureFlags: prop_types_1.default.object,
    fullPageTheme: prop_types_1.default.oneOf(['standard', 'inverted']),
    hasConsistentSpacing: prop_types_1.default.bool,
    shouldUseBundleHeader: prop_types_1.default.bool,
    shouldUseCommerceEventsHeader: prop_types_1.default.bool,
    showBackgroundGradientColor: prop_types_1.default.bool,
    showBookmark: prop_types_1.default.bool,
    spacingAboveAd: prop_types_1.default.number
};
CommerceEventsBundlePage.displayName = 'CommerceEventsBundlePage';
exports["default"] = (0, redux_1.connector)(CommerceEventsBundlePage, {
    keysToPluck: ['bundle', 'featureFlags']
});
//# sourceMappingURL=CommerceEventsBundlePage.js.map

/***/ }),

/***/ 96118:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const configured_component_1 = __webpack_require__(12892);
const CommerceEventsBundlePage_1 = __importDefault(__webpack_require__(62377));
exports["default"] = (0, configured_component_1.asConfiguredComponent)(CommerceEventsBundlePage_1.default, 'CommerceEventsBundlePage');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 47965:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommerceEventsRCAPageDisclaimer = exports.CommerceEventsPageDisclaimer = exports.CommerceEventsHeader = exports.CommerceEventsPageWrapper = void 0;
const styled_components_1 = __importDefault(__webpack_require__(92168));
const utils_1 = __webpack_require__(26865);
const get_container_styles_1 = __webpack_require__(30);
const constants_1 = __webpack_require__(96472);
const base_page_1 = __importDefault(__webpack_require__(30543));
const configured_component_1 = __webpack_require__(12892);
const disclaimer_1 = __webpack_require__(74307);
const message_banner_1 = __importDefault(__webpack_require__(62282));
const styles_1 = __webpack_require__(67275);
const styles_2 = __webpack_require__(1633);
const styles_3 = __webpack_require__(33500);
const CommerceEventsPageWrapper = (0, styled_components_1.default)(base_page_1.default).withConfig({
    displayName: 'CommerceEventsPageWrapper'
}) `
  ${({ showBackgroundGradientColor, theme }) => showBackgroundGradientColor && (0, get_container_styles_1.getPattern)(theme, 'page-background')};

  ${({ showBackgroundGradientColor }) => showBackgroundGradientColor &&
    `
      position: static;
  `};

  ${({ shouldHidePadding }) => !shouldHidePadding &&
    `
      padding-top: ${(0, utils_1.calculateSpacing)(8)};
      @media (min-width: ${constants_1.BREAKPOINTS.lg}) {
        padding-top: ${(0, utils_1.calculateSpacing)(21)}
      }
  `};

  ${styles_1.MultiPackageContainer} {
    display: flex;
    flex-flow: row wrap;
    align-items: stretch;
    justify-content: center;

    > * {
      width: 100%;
    }

    ${styles_2.FireworkEmbedContainer} {
      ${styles_3.SectionTitleHed} {
        ${({ isInverted, theme }) => {
    if (isInverted) {
        return `color: ${(0, utils_1.getColorToken)(theme, 'colors.background.brand')};
              ${(0, utils_1.getTypographyStyles)(theme, 'typography.definitions.discovery.page-hed-section')} `;
    }
    return '';
}}
      }
    }
  }
  ${({ hasBackground, theme }) => hasBackground && theme && (0, get_container_styles_1.getPattern)(theme, 'page-background')}
  .promo-box {
    border-top: none;
  }
`;
exports.CommerceEventsPageWrapper = CommerceEventsPageWrapper;
const CommerceEventsHeader = (0, styled_components_1.default)(message_banner_1.default).withConfig({
    displayName: 'CommerceEventsHeader'
}) `
  ${({ isInverted, theme }) => isInverted &&
    `
    background: ${(0, utils_1.getColorToken)(theme, 'colors.background.black')};
    border-color: ${(0, utils_1.getColorToken)(theme, 'colors.background.black')};
    `}

  h1 {
    ${({ theme }) => (0, utils_1.getTypographyStyles)(theme, 'typography.definitions.utility.assistive-text')}
    ${({ isInverted, theme }) => isInverted &&
    `
      color: ${(0, utils_1.getColorToken)(theme, 'colors.consumption.body.inverted.accent')};                
    `}
  }
`;
exports.CommerceEventsHeader = CommerceEventsHeader;
const CommerceEventsPageDisclaimer = (0, styled_components_1.default)((0, configured_component_1.asConfiguredComponent)(disclaimer_1.Disclaimer.TextCenterNoTopRule, 'Disclaimer')).withConfig({
    displayName: 'CommerceEventsPageDisclaimer'
}) `
  grid-column: 1 / -1;
  justify-content: center;
  font-style: italic;
  ${({ isInverted, theme }) => isInverted &&
    `background: ${(0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')};`}
  p {
    padding: 0 ${(0, utils_1.calculateSpacing)(2)};
    line-height: 1.125rem;
    ${({ isInverted, theme }) => isInverted &&
    `color: ${(0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.link')};`}
  }

  ${(0, utils_1.minScreen)(constants_1.BREAKPOINTS.md)} {
    grid-column: 3 / span 8;
  }
`;
exports.CommerceEventsPageDisclaimer = CommerceEventsPageDisclaimer;
const CommerceEventsRCAPageDisclaimer = (0, styled_components_1.default)(CommerceEventsPageDisclaimer).withConfig({
    displayName: 'CommerceEventsRCAPageDisclaimer'
}) `
  ${({ theme }) => `${(0, utils_1.getColorStyles)(theme, 'background', 'colors.discovery.body.light.background')};
  `}
`;
exports.CommerceEventsRCAPageDisclaimer = CommerceEventsRCAPageDisclaimer;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ 38922:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const classnames_1 = __importDefault(__webpack_require__(32485));
const react_1 = __importDefault(__webpack_require__(96540));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const redux_1 = __webpack_require__(57744);
const base_page_1 = __importDefault(__webpack_require__(30543));
const styles_1 = __webpack_require__(41247);
const multi_packages_1 = __importDefault(__webpack_require__(8193));
const breadcrumb_trail_1 = __importDefault(__webpack_require__(6538));
const bundle_body_1 = __importDefault(__webpack_require__(16339));
const bundle_header_1 = __importDefault(__webpack_require__(24125));
const ad_1 = __importDefault(__webpack_require__(19607));
const disclaimer_1 = __webpack_require__(74307);
const payment_gateway_1 = __webpack_require__(92807);
const sign_in_modal_1 = __importDefault(__webpack_require__(14935));
const track_component_1 = __webpack_require__(53499);
/**
 *  * DestinationBundlePage component
 *
 * @param {object} props - React props
 * @param {object} [props.attributes] - Optional attributes to add top level i.e. aria-*, role, etc.
 * @param {object} props.bundle - Object containing pairs of template names with corresponding data.
 * @param {string} [props.className] - Optional top-level class to add
 * @param {string} [props.headerType] - Optional header type
 * @param {boolean} [props.shouldOverrideTypeToken] - Optional prop can be used to apply brand specefic header typography
 * @param {boolean} [props.shouldDecorateHeader] - Optional prop can be used to apply brand specefic header text decoration
 * @param {boolean} [props.showBookmark] - Optional prop to show bookmark buttons
 * @param {boolean} [props.showHeaderOnTop ] - Optional prop can be used to apply brand specefic header to show on top
 * @param {bool} [props.hasConsistentSpacing] - Optional flag that defines whether the consistent spacing is needed or not
 */
const DestinationBundlePage = (props) => {
    react_1.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'DestinationBundlePage'
        });
    }, []);
    const { attributes, bundle: { affiliateDisclaimer, bundleBody, bundleTitle, containers, hierarchy, headerPosition, isDestinationBundle, lede, shouldEnableBodyReadMore }, className, hasConsistentSpacing, headerType = 'full-bleed-header', shouldDecorateHeader = true, shouldOverrideTypeToken = false, showBookmark = false, showHeaderOnTop = false } = props;
    const lowestHierarchy = hierarchy ? hierarchy[hierarchy.length - 1].name : '';
    return (react_1.default.createElement(base_page_1.default, { ...attributes, className: (0, classnames_1.default)('destination-bundle-page', className), hasBaseAds: true },
        showBookmark && react_1.default.createElement(sign_in_modal_1.default, { analyticsType: "destination-bundle" }),
        hierarchy && react_1.default.createElement(breadcrumb_trail_1.default, { hierarchy: hierarchy }),
        react_1.default.createElement(bundle_header_1.default, { headerPosition: headerPosition, headerType: headerType, hed: bundleTitle, isDestinationBundle: isDestinationBundle, lede: lede, shouldDecorateHeader: shouldDecorateHeader, shouldOverrideTypeToken: shouldOverrideTypeToken, showHeaderOnTop: showHeaderOnTop }),
        affiliateDisclaimer && (react_1.default.createElement(styles_1.DestinationBundleDisclaimerWrapper, null,
            react_1.default.createElement(disclaimer_1.Disclaimer, { disclaimerHtml: affiliateDisclaimer, hasTopRule: true, contentAlign: "center" }))),
        react_1.default.createElement(styles_1.DestinationBundleBodyWrapper, { shouldOverrideTypeToken: shouldOverrideTypeToken }, bundleBody && (react_1.default.createElement(bundle_body_1.default, { body: bundleBody, isCollapsible: shouldEnableBodyReadMore }))),
        react_1.default.createElement(multi_packages_1.default, { containers: containers, bundleProps: props, lowestHierarchy: lowestHierarchy, hasConsistentSpacing: hasConsistentSpacing }),
        react_1.default.createElement(payment_gateway_1.PaymentGateway, { group: "ads" },
            react_1.default.createElement(ad_1.default, { position: "footer", shouldHoldSpace: true }))));
};
DestinationBundlePage.propTypes = {
    attributes: prop_types_1.default.object,
    bundle: prop_types_1.default.object,
    className: prop_types_1.default.string,
    featureFlags: prop_types_1.default.object,
    hasConsistentSpacing: prop_types_1.default.bool,
    headerType: prop_types_1.default.string,
    shouldDecorateHeader: prop_types_1.default.bool,
    shouldOverrideTypeToken: prop_types_1.default.bool,
    showBookmark: prop_types_1.default.bool,
    showHeaderOnTop: prop_types_1.default.bool
};
DestinationBundlePage.displayName = 'DestinationBundlePage';
exports["default"] = (0, redux_1.connector)(DestinationBundlePage, {
    keysToPluck: ['bundle', 'featureFlags']
});
//# sourceMappingURL=DestinationBundlePage.js.map

/***/ }),

/***/ 56093:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const DestinationBundlePage_1 = __importDefault(__webpack_require__(38922));
const configured_component_1 = __webpack_require__(12892);
exports["default"] = (0, configured_component_1.asConfiguredComponent)(DestinationBundlePage_1.default, 'DestinationBundlePage');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 41247:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DestinationBundleDisclaimerWrapper = exports.DestinationBundleBodyWrapper = void 0;
const styled_components_1 = __importDefault(__webpack_require__(92168));
const utils_1 = __webpack_require__(26865);
const constants_1 = __webpack_require__(96472);
const styles_1 = __webpack_require__(62077);
const grid_1 = __importDefault(__webpack_require__(86659));
const styles_2 = __webpack_require__(40653);
const DestinationBundleBodyWrapper = styled_components_1.default.div.withConfig({
    displayName: 'DestinationBundleBodyWrapper'
}) `
  background-color: ${({ theme }) => (0, utils_1.getColorToken)(theme, 'colors.background.light')};
  padding-bottom: ${(0, utils_1.calculateSpacing)(4)};

  .article__body {
    margin-bottom: 0;
  }

  .aricle__body div > p {
    margin-bottom: 0;
  }

  ${styles_1.BundleBodyContainer} {
    color: ${({ theme }) => (0, utils_1.getColorToken)(theme, 'colors.consumption.body.standard.body')};
    ${({ theme, shouldOverrideTypeToken }) => shouldOverrideTypeToken
    ? (0, utils_1.getTypographyStyles)(theme, 'typography.definitions.consumptionEditorial.subhed-aux-secondary')
    : (0, utils_1.getTypographyStyles)(theme, 'typography.definitions.consumptionEditorial.description-core')}
  }

  ${styles_1.BundleBodyContainer}

  p:first-child {
    margin-bottom: 0;
    padding-top: ${(0, utils_1.calculateSpacing)(4)};

    @media (min-width: ${constants_1.BREAKPOINTS.md}) {
      padding-top: ${(0, utils_1.calculateSpacing)(5)};
    }
  }

  .button__icon-container {
    padding-left: ${(0, utils_1.calculateSpacing)(0.6)};
  }

  .button__label {
    ${({ theme }) => (0, utils_1.getTypographyStyles)(theme, 'typography.definitions.utility.button-bulletin')};
  }
`;
exports.DestinationBundleBodyWrapper = DestinationBundleBodyWrapper;
const DestinationBundleDisclaimerWrapper = (0, styled_components_1.default)(grid_1.default.WithMargins).withConfig({
    displayName: 'DestinationBundleDisclaimerWrapper'
}) `
  ${styles_2.GridItem} {
    grid-column: 1 / span 12;
    margin: ${(0, utils_1.calculateSpacing)(2)} 0 ${(0, utils_1.calculateSpacing)(1)} 0;
  }
`;
exports.DestinationBundleDisclaimerWrapper = DestinationBundleDisclaimerWrapper;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ 15470:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(96540));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const redux_1 = __webpack_require__(57744);
const filtered_content_1 = __importDefault(__webpack_require__(21047));
const header_group_1 = __importDefault(__webpack_require__(86559));
const ad_1 = __importDefault(__webpack_require__(19607));
const payment_gateway_1 = __webpack_require__(92807);
const styles_1 = __webpack_require__(26693);
const track_component_1 = __webpack_require__(53499);
const multi_packages_1 = __importDefault(__webpack_require__(8193));
/**
 * FilterableBundlePage component
 *
 * @param {object} props - React props
 * @param {object} [props.attributes] - Optional attributes to add top level
 * @param {object} [props.bundle] - Optional bundle properties
 * @param {string} [props.className] - Optional top-level class to add
 * @param {object} [props.featureFlags] - Optional feature flags
 * @param {boolean} [props.hasConsistentSpacing] - defines whether the consistent spacing is needed or not
 *
 * @returns {JSX.Element} <div>
 */
const FilterableBundlePage = (props) => {
    react_1.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'FilterableBundlePage'
        });
    }, []);
    const { attributes, bundle, bundle: { containers }, navigation, className, hasConsistentSpacing } = props;
    return (react_1.default.createElement(styles_1.FilterableBundlePageWrapper, { ...attributes, className: className, hasBaseAds: true, hasConsistentSpacing: hasConsistentSpacing },
        react_1.default.createElement(header_group_1.default, { bundle: bundle, navigation: navigation }),
        react_1.default.createElement(filtered_content_1.default, null),
        react_1.default.createElement(multi_packages_1.default, { containers: containers, bundleProps: props, hasStickyLinkBanner: true, hasConsistentSpacing: hasConsistentSpacing }),
        react_1.default.createElement(payment_gateway_1.PaymentGateway, { group: "ads" },
            react_1.default.createElement(ad_1.default, { position: "footer", shouldHoldSpace: true }))));
};
FilterableBundlePage.propTypes = {
    attributes: prop_types_1.default.object,
    bundle: prop_types_1.default.object,
    className: prop_types_1.default.string,
    featureFlags: prop_types_1.default.object,
    hasConsistentSpacing: prop_types_1.default.bool,
    navigation: prop_types_1.default.shape({
        subchannelLinks: prop_types_1.default.arrayOf(prop_types_1.default.object)
    })
};
exports["default"] = (0, redux_1.connector)(FilterableBundlePage, {
    keysToPluck: ['bundle', 'featureFlags', 'navigation', 'hasConsistentSpacing']
});
//# sourceMappingURL=FilterableBundlePage.js.map

/***/ }),

/***/ 32315:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const configured_component_1 = __webpack_require__(12892);
const FilterableBundlePage_1 = __importDefault(__webpack_require__(15470));
exports["default"] = (0, configured_component_1.asConfiguredComponent)(FilterableBundlePage_1.default, 'FilterableBundlePage');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 26693:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilterableBundlePageWrapper = void 0;
const styled_components_1 = __importDefault(__webpack_require__(92168));
const base_page_1 = __importDefault(__webpack_require__(30543));
const get_container_styles_1 = __webpack_require__(30);
const FilterableBundlePageWrapper = (0, styled_components_1.default)(base_page_1.default).withConfig({
    displayName: 'FilterableBundlePageWrapper'
}) `
  ${({ theme }) => (0, get_container_styles_1.getPattern)(theme, 'page-background')};
`;
exports.FilterableBundlePageWrapper = FilterableBundlePageWrapper;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ 55853:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(1980));
const classnames_1 = __importDefault(__webpack_require__(32485));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const react_2 = __importDefault(__webpack_require__(96540));
const content_footer_1 = __importDefault(__webpack_require__(61127));
const ad_1 = __importDefault(__webpack_require__(19607));
const channel_navigation_1 = __importDefault(__webpack_require__(71656));
const redux_1 = __webpack_require__(57744);
const row_1 = __importDefault(__webpack_require__(66657));
const payment_gateway_1 = __webpack_require__(92807);
const breadcrumb_trail_1 = __importDefault(__webpack_require__(6538));
const multi_packages_1 = __importDefault(__webpack_require__(8193));
const channel_filter_1 = __importDefault(__webpack_require__(9396));
const grid_1 = __importDefault(__webpack_require__(86659));
const sponsored_content_header_1 = __importDefault(__webpack_require__(31411));
const search_filter_1 = __importDefault(__webpack_require__(54821));
const Chunks_1 = __importDefault(__webpack_require__(48887));
const content_header_1 = __importDefault(__webpack_require__(69389));
const sub_navigation_1 = __importDefault(__webpack_require__(56167));
const PhotoBookmarkingProvider_1 = __importDefault(__webpack_require__(56602));
const track_component_1 = __webpack_require__(53499);
const base_provider_1 = __importDefault(__webpack_require__(76935));
const styles_1 = __webpack_require__(94631);
const bundle_header_1 = __importDefault(__webpack_require__(24125));
const bundle_body_1 = __importDefault(__webpack_require__(16339));
const rightRail = () => () => (react_2.default.createElement(payment_gateway_1.PaymentGateway, { group: "ads" },
    react_2.default.createElement(ad_1.default, { position: "rail" })));
const SignInModal_1 = __importDefault(__webpack_require__(19636));
/**
 * HomePage component
 *
 * @param {object} props - All the props.
 * @param {object} [props.attributes] - Optional attributes to add top level i.e. aria-*, role, etc.
 * @param {string} [props.backgroundColorSettingForNewsletter] - Optional to use background color from component settings for setting newsletter background
 * @param {object} props.bundle - Object containing pairs of template names with corresponding data.
 * @param {string} [props.bundleTitle] - Optional bundleTitle for displaying in a header
 * @param {Array} [props.channelFilter] - Optional filter param of the channel page fetched from the ChannelFilter component
 * @param {Array} [props.channelItems] - Optional array of content items fetched from the ChannelFilter component
 * @param {Array} [props.channelItemsTotal] - Optional total number of content items fetched from the ChannelFilter component
 * @param {string} [props.className] - Optional top-level class to add
 * @param {string} [props.dangerousBundleDek] - Optional bundleDek for displaying in a header
 * @param {object} props.featureFlags - Object containing tenant feature flags
 * @param {Bool} [props.featureFlags.hideHomepageHeader] - Show or hide Homepage Header
 * @param {string} [props.fullPageTheme] - Optional prop to apply an inverted (dark) theme to the entire page
 * @param {boolean} [props.hasBackground] - Apply background to the entire page
 * @param {boolean} [props.hasFullBleedBackground] - Apply hasFullBleedBackground to the newsletter on home page
 * @param {boolean} [props.hasDisclaimerBackground] - Optional. Set to `true` for disclaimer background to be set
 * @param {boolean} [props.hasDisclaimerBorderBottom] - Optional. Set to `false` for displaying bottom border for disclaimer
 * @param {boolean} [props.hasReducedMargin] - Optional. Set to `true` for no margin spacing
 * @param {boolean} [props.tickerMarginTopType] - string (defaults to small) for controlling top margin of Ticker component as supported by Ticker component
 * @param {boolean} [props.hideErrorTextPadding] - Optional prop to hide padding for error text message in newsletter
 * @param {boolean} [props.hasVersoFeaturesReducedMargin] - Optional prop for tighter spacing between verso feature rows on homepage
 * @param {boolean} [props.isNewsletterDisclaimerCenterAligned] - Optional. If set to `true`, newsletter disclaimer aligns to center
 * @param {boolean} [props.shouldHideSidePadding] - Optional. Set for side margin spacing
 * @param {boolean} [props.isPaddingRequired] - Optional top-level class to add
 * @param {boolean} [props.lede] - Optional prop to display a top image
 * @param {object} props.newsletter - Object containing newsletter data
 * @param {boolean} [props.isSponsored] - Optional prop for show or hide native byline on bundles
 * @param {string} [props.seoHiddenHeader] - Optional prop for rendering seo header content in homepage DOM but content stays hidden
 * @param {boolean} [props.shouldCenterBundleBodyContent] - Optional to center the content of bundled body
 * @param {boolean} [props.shouldEnableSubNavigation] - Optional prop to enable display of sub-navigation
 * @param {boolean} [props.shouldHidePaddingBottom] - Optional to show padding bottom
 * @param {boolean} [props.shouldOverrideColorToken] - Optional to override color token
 * @param {boolean} [props.showSubChannelHed] - Optional to show subchannel hed
 * @param {boolean} [props.shouldUseBundleHeader] - Optional to show bundle header
 * @param {boolean} [props.showBundleBody] - Optional to show bundle body
 * @param {boolean} [props.shouldShowFooterAdPadding] - optional to show footer Ad padding
 * @param {boolean} [props.shouldUseSectionTitle] - optional to section title with icon in header
 * @param {object} [props.headerIcon] - optional props for assets of header icon
 *
 * @param {boolean} [props.hasTopStory] - Will true when TopStory module is available
 * @param {boolean} [props.hasEvenSpacing] - flag for setting even spacing between child elements
 * @param {boolean} [props.shouldHideAds] - flag for hiding ads slots
 * @param {boolean} [props.hasConsistentSpacing] - defines whether the consistent spacing is needed or not
 * @returns {ReactElement} <div>
 */
/* eslint-disable-next-line complexity */
const HomePage = (props) => {
    react_2.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'HomePage'
        });
    }, []);
    const { attributes, bundle: { bundleBody, contributors, dangerousBundleDek, bundleTitle, containers, hasDefaultAffiliateDisclaimer, hierarchy, homepagePromoUnitOrder = [], isSubChannel, paginatedPage, publishDate, sponsoredContentHeaderProps, shouldEnableSubNavigation, shouldUseContentHeader, showDisclaimer, isSponsored, lede, seoHiddenHeader, showBreadCrumb, hasGridFourColumnsLayout, headerChipLinks, footerChipLinks, dangerousMoreBeautyText, affiliateDisclaimer }, backgroundColorSettingForNewsletter, channelItems: { list: channelItems = null, searchUrl = '' } = {}, channelFilter = null, channelItemsTotal = null, className, config, isPaddingRequired, dispatch, featureFlags: { hideHomepageHeader, excludedParams, showBundleBodyOnChannels, shouldRemoveBackgroundColor }, hasBackground = false, hasFullBleedBackground = false, hasReducedMargin = false, headerIcon = null, tickerMarginTopType = 'small', hideErrorTextPadding = false, hasVersoFeaturesReducedMargin = false, isNewsletterDisclaimerCenterAligned = false, shouldHideSidePadding = false, hasConsistentSpacing = false, fullPageTheme = 'standard', navigation: { subchannelLinks, hasChannelNavigation }, shouldCenterBundleBodyContent, shouldHidePadding, shouldHidePaddingBottom = false, shouldShowChannelFilter = false, shouldShowFooterAdPadding = false, shouldUseSectionTitle = false, showBundleBody = false, showSearchFilter = false, hasDisclaimerBackground = true, hasDisclaimerBorderBottom = false, showSubChannelHed = false, spacingAboveAd, shouldUseBundleHeader = false, shouldOverrideColorToken = false, hasTopStory = false, hasEvenSpacing = false, shouldHideAds = false, peritextBundle } = props;
    const bookmark = config.account?.bookmark;
    const enableCardLevelBookmark = bookmark?.enableCardLevelBookmark || false;
    // To add the class padding value only on basis of props
    let alteredClassName = className;
    alteredClassName =
        isPaddingRequired && alteredClassName
            ? alteredClassName.replace('ad--mid-content', 'ad--mid-content-with-padding')
            : className;
    const bundleContainers = containers.filter((container) => homepagePromoUnitOrder.indexOf(container.template) < 0);
    //  content Wrapper for contentFooter
    const getContentWrapper = () => {
        return grid_1.default.NarrowContentWithWideAdRail;
    };
    // `versoRiverToOverride` is a reference to a container in
    // `bundleContainers`, which is mutated
    const versoRiverToOverride = bundleContainers.find((container) => {
        return container.template === 'verso-river';
    });
    const [currentUrlBreadCrumb, setCurrentUrlBreadCrumb] = react_2.default.useState([]);
    const isPimCollectionPage = containers.some(({ template }) => template === 'verso-pim-collection');
    const showBaseAds = !isPimCollectionPage;
    react_2.default.useEffect(() => {
        if ( true && isPimCollectionPage) {
            const currentUrlPath = window?.location?.pathname;
            const pathnamePart = currentUrlPath.replace('/', '').split('/');
            const initialPath = pathnamePart.shift();
            const breadCrumbPaths = [];
            const breadcrumbPath = pathnamePart.map((path, index) => {
                breadCrumbPaths.push(path);
                return {
                    name: path.replaceAll('-', ' '),
                    slug: index === 0
                        ? `/${initialPath}`
                        : `/${initialPath}/${breadCrumbPaths.join('/')}`
                };
            });
            const pathWithoutCategory = breadcrumbPath.splice(1);
            setCurrentUrlBreadCrumb(pathWithoutCategory);
        }
    }, [isPimCollectionPage]);
    const GeneralContentWrapper = getContentWrapper();
    // the `channelItems` list (if present) replaces the `items` property of
    // the bundle's first `verso-river` container (if present)
    if (versoRiverToOverride) {
        if (channelItems && channelItems.length) {
            versoRiverToOverride.items = channelItems;
        }
        else {
            versoRiverToOverride.noChannelItems = true;
        }
        if (searchUrl) {
            versoRiverToOverride.searchUrl = searchUrl;
        }
        if (channelItemsTotal)
            versoRiverToOverride.totalResults = channelItemsTotal;
        if (channelFilter)
            versoRiverToOverride.filter = channelFilter;
    }
    if (excludedParams &&
        "object" !== 'undefined' &&
        typeof URLSearchParams !== 'undefined') {
        // Feature not supported in iOS Safari 9.3
        const urlParams = new URLSearchParams(window.location.search);
        excludedParams.forEach((param) => urlParams.delete(param));
        const filteredUri = urlParams.toString() !== '' // if there are still params
            ? `${window.location.pathname}?${urlParams.toString()}`
            : window.location.pathname;
        window.history.replaceState({}, document.title, filteredUri);
    }
    const hasTitleOrDek = bundleTitle || dangerousBundleDek;
    // Update store with homepage flag
    dispatch({
        type: 'SET_KEY',
        key: 'isHomepage',
        value: true
    });
    const HomepageBodyWrapper = shouldCenterBundleBodyContent
        ? styles_1.HomepageBodyWrapperGrid
        : styles_1.HomePageGridNarrowContentWithWideAdRail;
    if (peritextBundle) {
        return (react_2.default.createElement(styles_1.HomepageWrapper, { ...attributes, className: (0, classnames_1.default)('homepage', alteredClassName), additionalNavigation: hasChannelNavigation ? react_2.default.createElement(channel_navigation_1.default, null) : null, fullPageTheme: fullPageTheme, hasBackground: hasBackground, hasFullBleedBackground: hasFullBleedBackground, hasBaseAds: showBaseAds, hideHeader: hasChannelNavigation || hasTopStory, hideErrorTextPadding: hideErrorTextPadding, isNewsletterDisclaimerCenterAligned: isNewsletterDisclaimerCenterAligned, shouldHideSidePadding: shouldHideSidePadding, shouldHidePadding: shouldHidePadding || hasTopStory, shouldOverrideColorToken: shouldOverrideColorToken, backgroundColorSettingForNewsletter: backgroundColorSettingForNewsletter, shouldHidePaddingBottom: shouldHidePaddingBottom, shouldShowFooterAdPadding: shouldShowFooterAdPadding, isHeroAdVisible: !hasTopStory, hasEvenSpacing: hasEvenSpacing, shouldHideAds: shouldHideAds, shouldScrollToTopStory: hasTopStory },
            react_2.default.createElement(base_provider_1.default, null,
                react_2.default.createElement(react_1.default, { value: peritextBundle }))));
    }
    return (react_2.default.createElement(styles_1.HomepageWrapper, { ...attributes, className: (0, classnames_1.default)('homepage', alteredClassName, fullPageTheme), additionalNavigation: hasChannelNavigation ? react_2.default.createElement(channel_navigation_1.default, null) : null, fullPageTheme: fullPageTheme, hasBackground: hasBackground, hasFullBleedBackground: hasFullBleedBackground, hasBaseAds: showBaseAds, hideHeader: hasChannelNavigation || hasTopStory, hideErrorTextPadding: hideErrorTextPadding, isNewsletterDisclaimerCenterAligned: isNewsletterDisclaimerCenterAligned, shouldHideSidePadding: shouldHideSidePadding, shouldHidePadding: shouldHidePadding || hasTopStory, shouldOverrideColorToken: shouldOverrideColorToken, backgroundColorSettingForNewsletter: backgroundColorSettingForNewsletter, shouldHidePaddingBottom: shouldHidePaddingBottom, shouldShowFooterAdPadding: shouldShowFooterAdPadding, isHeroAdVisible: !hasTopStory, hasEvenSpacing: hasEvenSpacing, shouldHideAds: shouldHideAds, shouldScrollToTopStory: hasTopStory, hasConsistentSpacing: hasConsistentSpacing },
        react_2.default.createElement(PhotoBookmarkingProvider_1.default, { isPhotoBookmarkingEnabled: enableCardLevelBookmark },
            enableCardLevelBookmark && react_2.default.createElement(SignInModal_1.default, null),
            currentUrlBreadCrumb && isPimCollectionPage && (react_2.default.createElement(styles_1.BreadcrumbTrailComponent, { className: "plp-storefornt_breadcrumb", hierarchy: currentUrlBreadCrumb, shouldRemoveBackgroundColor: true, shouldUseContentHeaderColorForLink: false, hasMinimalVerticalSpacing: true, separatorIcon: {
                    name: 'ChevronRight',
                    type: 'thin'
                } })),
            isSponsored && (react_2.default.createElement(sponsored_content_header_1.default, { ...sponsoredContentHeaderProps, className: "light-theme" })),
            hierarchy && hierarchy.length > 1 && showBreadCrumb && (react_2.default.createElement(breadcrumb_trail_1.default, { hierarchy: hierarchy, shouldRemoveBackgroundColor: shouldRemoveBackgroundColor, shouldUseContentHeaderColorForLink: shouldUseContentHeader })),
            seoHiddenHeader && (react_2.default.createElement(styles_1.HomepageHiddenContent, null, seoHiddenHeader)),
            !hideHomepageHeader &&
                hasTitleOrDek &&
                !shouldUseContentHeader &&
                ((shouldUseBundleHeader && !lede) || !shouldUseBundleHeader) && (react_2.default.createElement(styles_1.HomepageHeader, { dangerousHed: bundleTitle, subHed: showSubChannelHed && isSubChannel ? null : dangerousBundleDek, lede: lede, toggleChipsWithLink: headerChipLinks, shouldEnableSubNavigation: shouldEnableSubNavigation, hasConsistentSpacing: hasConsistentSpacing, type: "header" })),
            !hideHomepageHeader &&
                hasTitleOrDek &&
                shouldUseContentHeader &&
                !shouldUseBundleHeader && (react_2.default.createElement(content_header_1.default, { contributors: contributors, dangerousHed: bundleTitle, dangerousDek: dangerousBundleDek, publishDate: publishDate, showBreadCrumb: showBreadCrumb })),
            shouldUseBundleHeader &&
                hasTitleOrDek &&
                !shouldUseContentHeader &&
                lede && (react_2.default.createElement(bundle_header_1.default, { contributors: contributors, dangerousDek: dangerousBundleDek, hed: bundleTitle, lede: lede })),
            shouldUseSectionTitle &&
                hasTitleOrDek &&
                !shouldUseContentHeader &&
                !shouldUseBundleHeader && (react_2.default.createElement(styles_1.HomepageSectionTitle, { dangerousHed: bundleTitle, dangerousDek: dangerousBundleDek, image: headerIcon, hasDividerAbove: false, isFeatured: true, shouldUseAlternateHedColor: true })),
            showBundleBody && bundleBody && (react_2.default.createElement(styles_1.HomepageBundleBody, null,
                react_2.default.createElement(bundle_body_1.default, { body: bundleBody }))),
            hasDefaultAffiliateDisclaimer && showDisclaimer && (react_2.default.createElement(styles_1.HomePageDisclaimerWrapper, { hasGridFourColumnsLayout: hasGridFourColumnsLayout, hasDisclaimerBackground: hasDisclaimerBackground },
                react_2.default.createElement(styles_1.HomePageDisclaimer, { disclaimerHtml: affiliateDisclaimer }),
                hasDisclaimerBorderBottom && react_2.default.createElement(styles_1.HomePageDisclaimerBorder, null))),
            showBundleBodyOnChannels && paginatedPage === 1 && bundleBody && (react_2.default.createElement(Chunks_1.default, { FullBleedContentWrapper: HomepageBodyWrapper, GeneralContentWrapper: HomepageBodyWrapper, shouldUsePaddingTopForHomePageBody: shouldUseContentHeader, RailContent: rightRail(), jsonml: bundleBody })),
            subchannelLinks?.length > 0 && shouldEnableSubNavigation && (react_2.default.createElement(sub_navigation_1.default, { links: subchannelLinks, hasBorders: true, isCentered: true, isSlim: true })),
            isSubChannel &&
                showSubChannelHed &&
                !hideHomepageHeader &&
                hasTitleOrDek &&
                !shouldUseContentHeader && (react_2.default.createElement(styles_1.HomepageSubHeader, { showSubChannelHed: showSubChannelHed, dangerousHed: bundleTitle, subHed: dangerousBundleDek, lede: lede, toggleChipsWithLink: headerChipLinks, hasConsistentSpacing: hasConsistentSpacing, "data-testid": "HomepageSubHeader", type: "header" })),
            showSearchFilter && react_2.default.createElement(search_filter_1.default, { url: searchUrl }),
            shouldShowChannelFilter && (react_2.default.createElement(channel_filter_1.default.Inverted, { storyCount: channelItemsTotal || 0 })),
            react_2.default.createElement(multi_packages_1.default, { containers: bundleContainers, bundleProps: props, hasVersoFeaturesReducedMargin: hasVersoFeaturesReducedMargin, tickerMarginTopType: tickerMarginTopType, hasReducedMargin: hasReducedMargin, hasEvenSpacingMultiPackageRow: hasEvenSpacing, hasConsistentSpacing: hasConsistentSpacing }),
            footerChipLinks && footerChipLinks.length > 0 && (react_2.default.createElement(styles_1.HomepageHeader, { dangerousHed: dangerousMoreBeautyText, hasMinimalVerticalPadding: true, toggleChipsWithLink: footerChipLinks, hasConsistentSpacing: hasConsistentSpacing, className: "footer-toggle-chip-links", type: "footer", hedTag: "h2" })),
            showDisclaimer && !isSponsored && (react_2.default.createElement(content_footer_1.default, { ContentWrapper: GeneralContentWrapper, hideContentFooterAd: true })),
            !shouldHideAds && (react_2.default.createElement(payment_gateway_1.PaymentGateway, { group: "ads" },
                react_2.default.createElement(row_1.default, { bottomSpacing: 7, topSpacing: spacingAboveAd },
                    react_2.default.createElement(ad_1.default, { position: "footer", shouldHoldSpace: true })))))));
};
HomePage.propTypes = {
    attributes: prop_types_1.default.object,
    backgroundColorSettingForNewsletter: prop_types_1.default.string,
    bundle: prop_types_1.default.shape({
        affiliateDisclaimer: prop_types_1.default.string,
        bundleBody: prop_types_1.default.array,
        bundleTitle: prop_types_1.default.string,
        containers: prop_types_1.default.arrayOf(prop_types_1.default.object),
        contributors: prop_types_1.default.object,
        dangerousBundleDek: prop_types_1.default.string,
        hierarchy: prop_types_1.default.array,
        homepagePromoUnitOrder: prop_types_1.default.arrayOf(prop_types_1.default.string),
        paginatedPage: prop_types_1.default.number,
        seoHiddenHeader: prop_types_1.default.string,
        showBreadCrumb: prop_types_1.default.bool,
        showDisclaimer: prop_types_1.default.bool,
        shouldEnableSubNavigation: prop_types_1.default.bool,
        shouldUseContentHeader: prop_types_1.default.bool,
        sponsoredContentHeaderProps: prop_types_1.default.object,
        isSubChannel: prop_types_1.default.bool,
        isSponsored: prop_types_1.default.bool,
        lede: prop_types_1.default.object,
        hasGridFourColumnsLayout: prop_types_1.default.bool,
        headerChipLinks: prop_types_1.default.array,
        footerChipLinks: prop_types_1.default.array,
        dangerousMoreBeautyText: prop_types_1.default.string,
        publishDate: prop_types_1.default.string,
        hasTopStory: prop_types_1.default.bool,
        hasDefaultAffiliateDisclaimer: prop_types_1.default.bool
    }).isRequired,
    bundleTitle: prop_types_1.default.string,
    channelFilter: prop_types_1.default.string,
    channelItems: prop_types_1.default.shape({
        list: prop_types_1.default.array,
        searchUrl: prop_types_1.default.string
    }),
    channelItemsTotal: prop_types_1.default.number,
    className: prop_types_1.default.string,
    config: prop_types_1.default.object,
    dangerousBundleDek: prop_types_1.default.string,
    dispatch: prop_types_1.default.func,
    featureFlags: prop_types_1.default.object,
    fullPageTheme: prop_types_1.default.oneOf(['standard', 'inverted']),
    hasBackground: prop_types_1.default.bool,
    hasConsistentSpacing: prop_types_1.default.bool,
    hasDisclaimerBackground: prop_types_1.default.bool,
    hasDisclaimerBorderBottom: prop_types_1.default.bool,
    hasEvenSpacing: prop_types_1.default.bool,
    hasFullBleedBackground: prop_types_1.default.bool,
    hasReducedMargin: prop_types_1.default.bool,
    hasTopStory: prop_types_1.default.bool,
    hasVersoFeaturesReducedMargin: prop_types_1.default.bool,
    headerIcon: prop_types_1.default.object,
    hideErrorTextPadding: prop_types_1.default.bool,
    isNewsletterDisclaimerCenterAligned: prop_types_1.default.bool,
    isPaddingRequired: prop_types_1.default.bool,
    lede: prop_types_1.default.object,
    navigation: prop_types_1.default.shape({
        subchannelLinks: prop_types_1.default.arrayOf(prop_types_1.default.object),
        hasChannelNavigation: prop_types_1.default.bool
    }).isRequired,
    newsletter: prop_types_1.default.object,
    peritextBundle: prop_types_1.default.object,
    shouldCenterBundleBodyContent: prop_types_1.default.bool,
    shouldHideAds: prop_types_1.default.bool,
    shouldHidePadding: prop_types_1.default.bool,
    shouldHidePaddingBottom: prop_types_1.default.bool,
    shouldHideSidePadding: prop_types_1.default.bool,
    shouldOverrideColorToken: prop_types_1.default.bool,
    shouldShowChannelFilter: prop_types_1.default.bool,
    shouldShowFooterAdPadding: prop_types_1.default.bool,
    shouldUseBundleHeader: prop_types_1.default.bool,
    shouldUseSectionTitle: prop_types_1.default.bool,
    showBundleBody: prop_types_1.default.bool,
    showSearchFilter: prop_types_1.default.bool,
    showSubChannelHed: prop_types_1.default.bool,
    spacingAboveAd: prop_types_1.default.number,
    tickerMarginTopType: prop_types_1.default.oneOf(['small', 'none', 'large'])
};
HomePage.displayName = 'HomePage';
exports["default"] = (0, redux_1.connector)(HomePage, {
    keysToPluck: [
        'bundle',
        'peritextBundle',
        'channelFilter',
        'channelItems',
        'channelItemsTotal',
        'featureFlags',
        'navigation',
        'newsletter',
        'hasTopStory'
    ]
});
//# sourceMappingURL=HomePage.js.map

/***/ }),

/***/ 32933:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const configured_component_1 = __webpack_require__(12892);
const HomePage_1 = __importDefault(__webpack_require__(55853));
exports["default"] = (0, configured_component_1.asConfiguredComponent)(HomePage_1.default, 'HomePage');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 20574:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(96540));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const react_intl_1 = __webpack_require__(46984);
const redux_1 = __webpack_require__(57744);
const multi_packages_1 = __importDefault(__webpack_require__(8193));
const bundle_body_1 = __importDefault(__webpack_require__(16339));
const bundle_header_1 = __importDefault(__webpack_require__(24125));
const styles_1 = __webpack_require__(67133);
const track_component_1 = __webpack_require__(53499);
const grid_1 = __importDefault(__webpack_require__(86659));
const button_1 = __importDefault(__webpack_require__(73730));
const payment_gateway_1 = __webpack_require__(92807);
const ad_1 = __importDefault(__webpack_require__(19607));
const sticky_box_1 = __importDefault(__webpack_require__(28433));
const translations_1 = __importDefault(__webpack_require__(87887));
/**
 * MagazineBundlePage component
 *
 * @param {object} props - React props
 * @param {string} [props.className] - top-level class to add
 * @param {object} [props.attributes] - attributes to add top level
 * @param {object} props.bundle - bundle properties
 * @param {object} props.featureFlags - feature flags
 * @param {boolean} [props.shouldHideSideRail] - Optional flag to remove full page side rail
 * @param {bool} [props.hasConsistentSpacing] - Optional flag that defines whether the consistent spacing is needed or not
 *
 * @returns {ReactElement} <div>
 */
const MagazineBundlePage = (props) => {
    react_1.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'MagazineBundlePage'
        });
    }, []);
    const { attributes, bundle: { containers = [], bundleTitle, dangerousBundleDek, bundleBody, relatedBundles = {} }, hasConsistentSpacing, shouldHideSideRail = false, className } = props;
    const { prevBundle, nextBundle } = relatedBundles;
    const showNavButtons = prevBundle?.uri || nextBundle?.uri;
    const { formatMessage } = (0, react_intl_1.useIntl)();
    const [firstContainer, ...restContainers] = containers;
    const hasTicker = firstContainer?.template === 'verso-ticker';
    const multiPackageContainers = hasTicker
        ? [{}, ...restContainers]
        : containers;
    return (react_1.default.createElement(styles_1.MagazineBundlePageWrapper, { ...attributes, className: className, hasConsistentSpacing: hasConsistentSpacing },
        react_1.default.createElement(bundle_header_1.default, { dangerousDek: bundleTitle, hed: formatMessage(translations_1.default.magazineHeading), subHed: dangerousBundleDek }),
        bundleBody && react_1.default.createElement(bundle_body_1.default, { body: bundleBody }),
        showNavButtons && (react_1.default.createElement(styles_1.ButtonContainer, { "data-testid": "nav_button_container" },
            react_1.default.createElement(button_1.default, { inputKind: "link", btnStyle: !prevBundle?.uri ? 'text' : 'filled', label: formatMessage(translations_1.default.previousButton), href: prevBundle?.uri && `/${prevBundle?.uri}`, isDisabled: !prevBundle?.uri }),
            react_1.default.createElement(button_1.default, { inputKind: "link", btnStyle: !nextBundle?.uri ? 'text' : 'filled', label: formatMessage(translations_1.default.nextButton), href: nextBundle?.uri && `/${nextBundle?.uri}`, isDisabled: !nextBundle?.uri }))),
        hasTicker && (react_1.default.createElement(multi_packages_1.default, { containers: [firstContainer], bundleProps: props, hasConsistentSpacing: hasConsistentSpacing })),
        shouldHideSideRail ? (react_1.default.createElement(styles_1.MultiPackageGridWithoutSideRail, { as: grid_1.default.ContentWithAdRail },
            react_1.default.createElement(multi_packages_1.default, { containers: multiPackageContainers, bundleProps: props, hasConsistentSpacing: hasConsistentSpacing }))) : (react_1.default.createElement(styles_1.MultiPackageGrid, { as: grid_1.default.ContentWithAdRail },
            react_1.default.createElement(multi_packages_1.default, { containers: multiPackageContainers, bundleProps: props, hasConsistentSpacing: hasConsistentSpacing }),
            react_1.default.createElement(sticky_box_1.default, null,
                react_1.default.createElement("aside", null,
                    react_1.default.createElement(payment_gateway_1.PaymentGateway, { group: "ads" },
                        react_1.default.createElement(ad_1.default, { position: "rail", shouldHoldSpace: true })))))),
        react_1.default.createElement(payment_gateway_1.PaymentGateway, { group: "ads" },
            react_1.default.createElement(ad_1.default, { position: "footer", shouldHoldSpace: true }))));
};
MagazineBundlePage.propTypes = {
    attributes: prop_types_1.default.object,
    bundle: prop_types_1.default.object,
    className: prop_types_1.default.string,
    featureFlags: prop_types_1.default.object,
    hasConsistentSpacing: prop_types_1.default.bool,
    shouldHideSideRail: prop_types_1.default.bool
};
exports["default"] = (0, redux_1.connector)(MagazineBundlePage, {
    keysToPluck: ['bundle', 'featureFlags']
});
//# sourceMappingURL=MagazineBundlePage.js.map

/***/ }),

/***/ 20403:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const configured_component_1 = __webpack_require__(12892);
const MagazineBundlePage_1 = __importDefault(__webpack_require__(20574));
exports["default"] = (0, configured_component_1.asConfiguredComponent)(MagazineBundlePage_1.default, 'MagazineBundlePage');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 67133:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MultiPackageGridWithoutSideRail = exports.MagazineBundlePageWrapper = exports.MultiPackageGrid = exports.ButtonContainer = void 0;
const styled_components_1 = __importStar(__webpack_require__(92168));
const base_page_1 = __importDefault(__webpack_require__(30543));
const styles_1 = __webpack_require__(29912);
const styles_2 = __webpack_require__(41108);
const styles_3 = __webpack_require__(63637);
const constants_1 = __webpack_require__(96472);
const utils_1 = __webpack_require__(26865);
const styles_4 = __webpack_require__(71750);
const styles_5 = __webpack_require__(38860);
const styles_6 = __webpack_require__(75697);
const breakpoints_1 = __webpack_require__(99906);
const styles_7 = __webpack_require__(67275);
const styles_8 = __webpack_require__(15641);
const styles_9 = __webpack_require__(77527);
const disabledStyles = ({ theme }) => {
    return (0, styled_components_1.css) `
    cursor: default;
    pointer-events: none;

    ${(0, utils_1.getColorStyles)(theme, 'background', 'colors.interactive.base.light')};
    ${(0, utils_1.getColorStyles)(theme, 'border-color', 'colors.interactive.base.light')};
    ${(0, utils_1.getColorStyles)(theme, 'color', 'colors.interactive.base.white')};
  `;
};
const MagazineBundlePageWrapper = (0, styled_components_1.default)(base_page_1.default).withConfig({
    displayName: 'MagazineBundlePageWrapper'
}) `
  ${styles_1.BodyWrapper} {
    ${styles_2.AssetEmbedWrapper} {
      margin-bottom: ${(0, utils_1.calculateSpacing)(1)};
      padding-top: ${(0, utils_1.calculateSpacing)(2)};
      max-width: 380px;
    }

    & div {
      text-align: center;

      &:first-child {
        margin-top: 0;
        padding-top: 0;
      }
    }

    a,
    a:not(.button) {
      &:link,
      &:visited {
        text-decoration: none;
      }

      &:hover {
        text-decoration: underline;
        text-underline-offset: 3px;
      }
    }

    a {
      display: inline-block;
    }
  }
  ${styles_3.SummaryListWrapper} {
    .summary-item--layout-placement-side-by-side {
      .summary-item__hed {
        @media (min-width: ${constants_1.BREAKPOINTS.md}) {
          ${(0, utils_1.getTypographyStyles)('typography.definitions.discovery.hed-core-primary')}
        }
      }
    }
  }

  ${styles_3.SummaryListWrapper},${styles_8.SummaryRiverWrapper} {
    --grid-margin: 0;
  }

  ${styles_5.CaptionWrapper} {
    ${(0, utils_1.getTypographyStyles)('typography.definitions.foundation.link-primary')};
    margin-top: 0;
    padding: ${(0, utils_1.calculateSpacing)(2)} 0;
    text-align: center;

    > span {
      ${(0, utils_1.getColorStyles)('color', 'colors.interactive.base.black')};
      text-decoration: none;
    }
    ${styles_5.CaptionText} {
      margin-right: 0;
    }
  }

  ${styles_9.ResponsiveCartoonCTA} {
    margin-top: ${(0, utils_1.calculateSpacing)(3)};
  }

  ${styles_9.ResponsiveCartoonCredit} {
    margin-bottom: 0;
  }

  ${styles_4.BundleHeaderDekText} {
    ${(0, utils_1.getTypographyStyles)('typography.definitions.discovery.subhed-section-collection')};
  }

  ${styles_4.BundleHeaderHed} {
    margin: ${(0, utils_1.calculateSpacing)(5)} 0;
  }

  ${styles_6.PromoBoxButtonPrimary} {
    ${(0, utils_1.getColorStyles)('color', 'colors.interactive.base.black')};
  }

  ${styles_7.PromoBoxWrapper} {
    ${(0, utils_1.maxScreen)(`${breakpoints_1.maxThresholds.lg}px`)} {
      --grid-margin: 0;
    }

    a:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
`;
exports.MagazineBundlePageWrapper = MagazineBundlePageWrapper;
const ButtonContainer = styled_components_1.default.div.withConfig({
    displayName: 'ButtonContainer'
}) `
  display: flex;
  justify-content: center;
  gap: ${(0, utils_1.calculateSpacing)(1)};

  a {
    &[aria-disabled='true'] {
      ${disabledStyles}
    }
    min-width: ${(0, utils_1.calculateSpacing)(10)};
    ${(0, utils_1.minScreen)(constants_1.BREAKPOINTS.md)} {
      min-width: ${(0, utils_1.calculateSpacing)(20)};
    }
  }
`;
exports.ButtonContainer = ButtonContainer;
const MultiPackageGrid = styled_components_1.default.div.withConfig({
    displayName: 'MultiPackageGrid'
}) `
  ${(0, utils_1.minScreen)(constants_1.BREAKPOINTS.lg)} {
    & > .grid-layout__content {
      grid-column: span 7;
    }
  }
`;
exports.MultiPackageGrid = MultiPackageGrid;
const MultiPackageGridWithoutSideRail = styled_components_1.default.div.withConfig({
    displayName: 'MultiPackageGrid'
}) `
  ${(0, utils_1.minScreen)(constants_1.BREAKPOINTS.lg)} {
    & > .grid-layout__content {
      grid-column: span 12;
    }
  }
`;
exports.MultiPackageGridWithoutSideRail = MultiPackageGridWithoutSideRail;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ 87887:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_intl_1 = __webpack_require__(46984);
exports["default"] = (0, react_intl_1.defineMessages)({
    magazineHeading: {
        id: 'MagazineBundlePage.magazineHeading',
        defaultMessage: 'The Magazine',
        description: 'Heading for magazine bundle page',
        isConfigurable: true
    },
    nextButton: {
        id: 'MagazineBundlePage.nextButton',
        defaultMessage: 'Next',
        description: 'Text for next button in magazine bundle page',
        isConfigurable: true
    },
    previousButton: {
        id: 'MagazineBundlePage.previousButton',
        defaultMessage: 'Previous',
        description: 'Text for previous button in magazine bundle page',
        isConfigurable: true
    }
});
//# sourceMappingURL=translations.js.map

/***/ }),

/***/ 41398:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(96540));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const redux_1 = __webpack_require__(57744);
const multi_packages_1 = __importDefault(__webpack_require__(8193));
const bundle_body_1 = __importDefault(__webpack_require__(16339));
const bundle_header_1 = __importDefault(__webpack_require__(24125));
const channel_navigation_1 = __importDefault(__webpack_require__(71656));
const ad_1 = __importDefault(__webpack_require__(19607));
const payment_gateway_1 = __webpack_require__(92807);
const styles_1 = __webpack_require__(56839);
const track_component_1 = __webpack_require__(53499);
/**
 * PackageBundlePage component
 *
 * @param {object} props - React props
 * @param {string} [props.className] - Optional top-level class to add
 * @param {object} [props.attributes] - Optional attributes to add top level
 * @param {object} [props.bundle] - Optional bundle properties
 * @param {object} [props.featureFlags] - Optional feature flags
 * @param {bool} [props.hasConsistentSpacing] - Optional flag that defines whether the consistent spacing is needed or not
 *
 * @returns {ReactElement} <div>
 */
const PackageBundlePage = (props) => {
    react_1.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'PackageBundlePage'
        });
    }, []);
    const { attributes, bundle: { containers, dangerousBundleDek, directoryCategories, bundleTitle, lede, bundleBody, isDirectoryBundle, hideDirectoryAd, shouldEnableSubNavigation }, hasConsistentSpacing, navigation: { hasChannelNavigation, subchannelLinks }, className } = props;
    return (react_1.default.createElement(styles_1.PackageBundlePageWrapper, { ...attributes, additionalNavigation: hasChannelNavigation ? react_1.default.createElement(channel_navigation_1.default, null) : null, className: className, hasBaseAds: true, hasConsistentSpacing: hasConsistentSpacing },
        react_1.default.createElement(bundle_header_1.default, { dangerousDek: dangerousBundleDek, hed: bundleTitle, lede: lede, isDirectoryBundle: isDirectoryBundle, directoryCategories: directoryCategories }),
        subchannelLinks?.length > 0 && shouldEnableSubNavigation && (react_1.default.createElement(styles_1.PackageBundlePageSubchannelNavigation, { links: subchannelLinks, hasBorders: true, isCentered: true, isSlim: true })),
        isDirectoryBundle && !hideDirectoryAd && (react_1.default.createElement(payment_gateway_1.PaymentGateway, { group: "ads" },
            react_1.default.createElement(ad_1.default, { position: "mid-content", shouldHoldSpace: true, shouldDisplayLabel: true }))),
        bundleBody && react_1.default.createElement(bundle_body_1.default, { body: bundleBody }),
        react_1.default.createElement(multi_packages_1.default, { containers: containers, bundleProps: props, hasStickyLinkBanner: true, hasConsistentSpacing: hasConsistentSpacing }),
        react_1.default.createElement(payment_gateway_1.PaymentGateway, { group: "ads" },
            react_1.default.createElement(ad_1.default, { position: "footer", shouldHoldSpace: true }))));
};
PackageBundlePage.propTypes = {
    attributes: prop_types_1.default.object,
    bundle: prop_types_1.default.object,
    className: prop_types_1.default.string,
    featureFlags: prop_types_1.default.object,
    hasConsistentSpacing: prop_types_1.default.bool,
    navigation: prop_types_1.default.shape({
        hasChannelNavigation: prop_types_1.default.bool,
        subchannelLinks: prop_types_1.default.arrayOf(prop_types_1.default.object)
    })
};
exports["default"] = (0, redux_1.connector)(PackageBundlePage, {
    keysToPluck: ['bundle', 'featureFlags', 'newsletter', 'navigation']
});
//# sourceMappingURL=PackageBundlePage.js.map

/***/ }),

/***/ 86149:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const PackageBundlePage_1 = __importDefault(__webpack_require__(41398));
exports["default"] = PackageBundlePage_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 56839:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PackageBundlePageSubchannelNavigation = exports.PackageBundlePageWrapper = void 0;
const styled_components_1 = __importDefault(__webpack_require__(92168));
const constants_1 = __webpack_require__(96472);
const utils_1 = __webpack_require__(26865);
const styles_1 = __webpack_require__(4534);
const base_page_1 = __importDefault(__webpack_require__(30543));
const sub_navigation_1 = __importDefault(__webpack_require__(56167));
const get_container_styles_1 = __webpack_require__(30);
const styles_2 = __webpack_require__(6613);
const breakpoints_1 = __webpack_require__(99906);
const styles_3 = __webpack_require__(69817);
const PackageBundlePageWrapper = (0, styled_components_1.default)(base_page_1.default).withConfig({
    displayName: 'PackageBundlePageWrapper'
}) `
  ${styles_1.SummaryCollectionGridSectionTitle} {
    margin-top: ${(0, utils_1.calculateSpacing)(2)};
  }

  ${(0, utils_1.minScreen)(constants_1.BREAKPOINTS.md)} {
    ${styles_1.SummaryCollectionGridSectionTitle} {
      margin-top: 0;
    }
  }
  ${({ theme }) => (0, get_container_styles_1.getPattern)(theme, 'page-background')}

  ${styles_3.NewsletterSubscribeFormWrapper} {
    grid-column: -1 / 1;
    margin-top: ${(0, utils_1.calculateSpacing)(5)};
    margin-bottom: ${(0, utils_1.calculateSpacing)(5)};

    ${(0, utils_1.minScreen)(constants_1.BREAKPOINTS.lg)} {
      grid-column: 3 / span 8;
    }
  }

  .package-bundle-page__collection-grid-item {
    @media (max-width: ${breakpoints_1.maxThresholds.md}px) {
      .summary-item__image-link {
        margin-bottom: auto;
      }
    }

    .summary-item__content {
      @media (max-width: ${breakpoints_1.maxThresholds.md}px) {
        margin-bottom: auto;
        line-height: 0;

        .summary-item__dek {
          display: none;
        }
      }

      ${(0, utils_1.minScreen)(constants_1.BREAKPOINTS.md)} {
        .summary-item__rubric {
          padding-top: ${(0, utils_1.calculateSpacing)(2)};
        }
      }

      ${styles_2.RubricLink} {
        &:link,
        &:visited {
          text-decoration: none;
        }

        &:active,
        &:focus,
        &:hover {
          text-decoration: underline;
        }
      }

      .summary-item__hed {
        margin-bottom: 0;
      }

      .summary-item__byline-date-icon {
        margin-top: ${(0, utils_1.calculateSpacing)(1)};
      }
    }
  }
`;
exports.PackageBundlePageWrapper = PackageBundlePageWrapper;
const PackageBundlePageSubchannelNavigation = (0, styled_components_1.default)(sub_navigation_1.default).withConfig({
    displayName: 'PackageBundlePageSubchannelNavigation'
}) `
  margin-bottom: ${(0, utils_1.calculateSpacing)(2)};

  li {
    margin-bottom: 0;
  }
`;
exports.PackageBundlePageSubchannelNavigation = PackageBundlePageSubchannelNavigation;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ 2790:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(96540));
const react_intl_1 = __webpack_require__(46984);
const prop_types_1 = __importDefault(__webpack_require__(5556));
const jsonmltoreact_1 = __importDefault(__webpack_require__(1165));
const redux_1 = __webpack_require__(57744);
const ad_1 = __importDefault(__webpack_require__(19607));
const payment_gateway_1 = __webpack_require__(92807);
const row_1 = __importDefault(__webpack_require__(66657));
const track_component_1 = __webpack_require__(53499);
const multi_packages_1 = __importDefault(__webpack_require__(8193));
const variations_1 = __importDefault(__webpack_require__(39416));
const blockquote_embed_1 = __importDefault(__webpack_require__(57885));
const map_inline_embeds_1 = __importDefault(__webpack_require__(51009));
const process_embeds_1 = __webpack_require__(74804);
const translations_1 = __importDefault(__webpack_require__(40133));
const styles_1 = __webpack_require__(52643);
const jsonmlToReact = new jsonmltoreact_1.default({
    a: process_embeds_1.processLinks,
    h2: process_embeds_1.processSidebarHeadings,
    'inline-embed': map_inline_embeds_1.default,
    blockquote: ({ props }) => ({ type: blockquote_embed_1.default, props })
});
/**
 * PodcastDetailedPage component
 *
 * @param {object} props - React Props
 * @param {object} -[props.attributes] - Optional attributes to add top level
 * @param {object} -[props.bundle] - Optional bundle properties
 * @param {string} -fullPageTheme -  add theme of whole page
 * @param {string} -sectionTitleVariation - Optional to add the sectionTitleVariation
 * @param {string} -ContentHeaderVariation - Optional to add the contentHeaderVariation
 * @param {number} -spacingAboveAd - Optinal to provide spacing on the top of the ad
 * @param {bool} [props.hasConsistentSpacing] - Optional flag that defines whether the consistent spacing is needed or not
 *
 * @returns {ReactElement} <div>
 */
const PodcastDetailedPage = (props) => {
    react_1.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'PodcastDetailedPage'
        });
    }, []);
    const { formatMessage } = (0, react_intl_1.useIntl)();
    const { attributes, bundle: { id, bundleBody, dangerousBundleDek, bundleTitle, containers, bundleRubric, lede, paginatedPage, podcastPagePrimaryCta, podcastPagePrimaryCtaLabel, podcastContentHeaderTheme }, fullPageTheme = 'standard', hasConsistentSpacing, spacingAboveAd, contentHeaderVariation = 'PodcastContentHeader' } = props;
    let summaryRiverProps;
    let externalLinkContainer;
    let recircProps = {};
    containers.forEach((container) => {
        if (container.template === 'verso-features') {
            externalLinkContainer = container;
        }
        else if (container.template === 'verso-river') {
            summaryRiverProps = container;
        }
        else if (container.template === 'verso-podcast-recirc') {
            recircProps = container;
        }
    });
    const podcastRecircItem = recircProps.items && recircProps.items.length ? recircProps.items[0] : '';
    const ContentHeaderComponent = variations_1.default[contentHeaderVariation] || variations_1.default;
    const dekmain = (react_1.default.createElement(styles_1.Dek, { dangerouslySetInnerHTML: {
            __html: dangerousBundleDek
        } }));
    return (react_1.default.createElement(styles_1.PodcastDetailPageWrapper, { ...attributes, fullPageTheme: fullPageTheme, hasBaseAds: true, hasFooterAd: false, podcastContentHeaderTheme: podcastContentHeaderTheme },
        paginatedPage === 1 && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(styles_1.PodcastDetailContentHeader, { as: ContentHeaderComponent, lede: lede, rubric: bundleRubric, dangerousHed: bundleTitle, podcastPagePrimaryCta: podcastPagePrimaryCta, podcastPagePrimaryCtaLabel: podcastPagePrimaryCtaLabel, externalLinks: externalLinkContainer?.items, theme: podcastContentHeaderTheme, publishDate: "" }),
            react_1.default.createElement(styles_1.DekWrapper, null,
                react_1.default.createElement(styles_1.DekClamp, { lines: 4, isCollapsible: true, breakpoint: "xxxl" }, dekmain)),
            bundleBody && (react_1.default.createElement(styles_1.PodcastDetailBodyWrapperGrid, { key: `podcast-detail${id}` },
                react_1.default.createElement(styles_1.PodcastDetailChannelBody, { className: "body__container article__body" }, jsonmlToReact.convert([...bundleBody])))),
            react_1.default.createElement(payment_gateway_1.PaymentGateway, { group: "ads" },
                react_1.default.createElement(row_1.default, { bottomSpacing: 7, topSpacing: spacingAboveAd },
                    react_1.default.createElement(ad_1.default, { position: "mid-content", shouldDisplayLabel: true, shouldHoldSpace: true }))),
            podcastRecircItem && (react_1.default.createElement(styles_1.PodcastDetailPageGrid, null,
                react_1.default.createElement(styles_1.PodcastDetailPageRecircWrapper, null,
                    react_1.default.createElement(styles_1.PodcastRecircContextualHeader, null, formatMessage(translations_1.default.contextualHeader)),
                    react_1.default.createElement(styles_1.PodcastDetailPageRecircItem, { dangerousDek: podcastRecircItem.dangerousDek, dangerousHed: podcastRecircItem.dangerousHed, rubric: podcastRecircItem.rubric, image: podcastRecircItem.image, hasBorder: false, url: podcastRecircItem.url, contextualHeader: formatMessage(translations_1.default.contextualHeader) })))))),
        summaryRiverProps && summaryRiverProps.items.length > 0 && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(styles_1.PodcastDetailPageGrid, null,
                react_1.default.createElement(multi_packages_1.default, { containers: [summaryRiverProps], bundleProps: props, hasVersoFeaturesReducedMargin: false, hasReducedMargin: false, hasConsistentSpacing: hasConsistentSpacing })))),
        react_1.default.createElement(payment_gateway_1.PaymentGateway, { group: "ads" },
            react_1.default.createElement(row_1.default, { bottomSpacing: 7, topSpacing: 7 },
                react_1.default.createElement(ad_1.default, { position: "footer", shouldHoldSpace: true })))));
};
PodcastDetailedPage.propTypes = {
    attributes: prop_types_1.default.object,
    bundle: prop_types_1.default.shape({
        id: prop_types_1.default.string,
        bundleBody: prop_types_1.default.array,
        bundleTitle: prop_types_1.default.string,
        bundleRubric: prop_types_1.default.object,
        containers: prop_types_1.default.arrayOf(prop_types_1.default.object),
        dangerousBundleDek: prop_types_1.default.string,
        lede: prop_types_1.default.object,
        paginatedPage: prop_types_1.default.number,
        podcastPagePrimaryCta: prop_types_1.default.string,
        podcastPagePrimaryCtaLabel: prop_types_1.default.string,
        podcastContentHeaderTheme: prop_types_1.default.string
    }).isRequired,
    contentHeaderVariation: prop_types_1.default.string,
    fullPageTheme: prop_types_1.default.oneOf(['standard', 'inverted']),
    hasConsistentSpacing: prop_types_1.default.bool,
    spacingAboveAd: prop_types_1.default.number,
    theme: prop_types_1.default.string
};
exports["default"] = (0, redux_1.connector)(PodcastDetailedPage, {
    keysToPluck: ['bundle', 'featureFlags']
});
//# sourceMappingURL=PodcastDetailedPage.js.map

/***/ }),

/***/ 60057:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const configured_component_1 = __webpack_require__(12892);
const PodcastDetailedPage_1 = __importDefault(__webpack_require__(2790));
exports["default"] = (0, configured_component_1.asConfiguredComponent)(PodcastDetailedPage_1.default, 'PodcastDetailedPage');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 53799:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductShopPageDisclaimer = exports.PaginationModalWrapper = exports.AutomatedPLPGrid = exports.ProductsShopHeader = exports.ItemsInfo = exports.Wrapper = void 0;
const styled_components_1 = __importDefault(__webpack_require__(92168));
const utils_1 = __webpack_require__(26865);
const section_header_1 = __importDefault(__webpack_require__(95291));
const grid_1 = __importDefault(__webpack_require__(86659));
const constants_1 = __webpack_require__(96472);
const configured_component_1 = __webpack_require__(12892);
const disclaimer_1 = __webpack_require__(74307);
const Wrapper = styled_components_1.default.section.withConfig({ displayName: 'Wrapper' }) `
  ${({ hasPadding }) => {
    if (hasPadding) {
        return `padding: ${(0, utils_1.calculateSpacing)(4)} 0 ${(0, utils_1.calculateSpacing)(4)};`;
    }
    return '';
}}
`;
exports.Wrapper = Wrapper;
const ItemsInfo = styled_components_1.default.section.withConfig({ displayName: 'ItemsInfo' }) `
  ${({ theme }) => (0, utils_1.getTypographyStyles)(theme, 'typography.definitions.globalEditorial.tags')};

  display: flex;
  justify-content: center;
  padding: ${(0, utils_1.calculateSpacing)(1)};
`;
exports.ItemsInfo = ItemsInfo;
const AutomatedPLPGrid = (0, styled_components_1.default)(grid_1.default.EvenFour).withConfig({
    displayName: 'AutomatedPLPGrid'
}) `
  &.grid-even.grid-items-4 {
    ${(0, utils_1.minScreen)(constants_1.BREAKPOINTS.md)} {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &.grid-even {
    padding-right: ${(0, utils_1.calculateSpacing)(4)};
    padding-left: ${(0, utils_1.calculateSpacing)(4)};
    ${(0, utils_1.minMaxScreen)(0, constants_1.BREAKPOINTS.md)} {
      padding-right: ${(0, utils_1.calculateSpacing)(3)};
      padding-left: ${(0, utils_1.calculateSpacing)(3)};
    }
  }

  &.grid {
    row-gap: ${(0, utils_1.calculateSpacing)(6)};
  }
`;
exports.AutomatedPLPGrid = AutomatedPLPGrid;
const ProductsShopHeader = (0, styled_components_1.default)(section_header_1.default).withConfig({
    displayName: 'ProductsShopHeader'
}) `
  color: ${({ theme }) => (0, utils_1.getColorToken)(theme, 'colors.discovery.body.white.heading')};

  ${({ theme }) => (0, utils_1.getTypographyStyles)(theme, 'typography.definitions.discovery.page-hed-section')}
`;
exports.ProductsShopHeader = ProductsShopHeader;
const PaginationModalWrapper = styled_components_1.default.div.withConfig({
    displayName: 'PaginationModalWrapper'
}) `
  display: flex;
  justify-content: center;
  padding-top: ${(0, utils_1.calculateSpacing)(8)};
`;
exports.PaginationModalWrapper = PaginationModalWrapper;
const ProductShopPageDisclaimer = (0, styled_components_1.default)((0, configured_component_1.asConfiguredComponent)(disclaimer_1.Disclaimer.TextCenterNoTopRule, 'Disclaimer')).withConfig({
    displayName: 'ProductShopPageDisclaimer'
}) `
  p {
    ${(0, utils_1.getTypographyStyles)('typography.definitions.globalEditorial.context-secondary')};
  }
`;
exports.ProductShopPageDisclaimer = ProductShopPageDisclaimer;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ 10958:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_intl_1 = __webpack_require__(46984);
exports["default"] = (0, react_intl_1.defineMessages)({
    noResultsHed: {
        id: 'SearchPage.NoResultsHed',
        defaultMessage: 'No stories found for your search',
        description: 'Hed text when no results are found'
    },
    resultsHed: {
        id: 'SearchPage.ResultsHed',
        defaultMessage: 'Search stories from {brandName}',
        description: 'Hed text when results are found'
    },
    resultswithWordHed: {
        id: 'SearchPage.resultswithWordHed',
        defaultMessage: 'Search results for ',
        description: 'Hed text when results are found'
    },
    noResultsContentHed: {
        id: 'SearchPage.noResultsContentHed',
        defaultMessage: "We didn't find any recipes, articles or videos for ",
        description: 'SubHed text when no results are found'
    },
    noResultsCustomContentHed: {
        id: 'SearchPage.noResultsCustomContentHed',
        defaultMessage: "We didn't find any results for",
        description: 'SubHed alternate text when no results are found'
    },
    noResultsSubHed: {
        id: 'SearchPage.noResultsSubHed',
        defaultMessage: "We didn't find any ",
        description: 'SubHed text when no results are found'
    },
    searchInputAriaLabel: {
        id: 'SearchPage.SearchInputAriaLabel',
        defaultMessage: 'search',
        description: 'ARIA label for the search box'
    },
    searchInputPlaceholder: {
        id: 'SearchPage.SearchInputPlaceholder',
        defaultMessage: 'Try "Racial justice"',
        description: 'Placeholder text for the search box',
        isConfigurable: true
    },
    searchButtonLabel: {
        id: 'SearchPage.SearchButtonLabel',
        defaultMessage: 'Search',
        description: 'Label for the search button'
    },
    sortLabel: {
        id: 'SearchPage.SortLabel',
        defaultMessage: 'Sort by',
        description: 'Label for the sort dropdown'
    },
    loadMoreButtonLabel: {
        id: 'SearchPage.LoadMoreButtonLabel',
        defaultMessage: 'More Stories',
        description: ''
    },
    loadMoreLoadingLabel: {
        id: 'SearchPage.LoadMoreLoadingLabel',
        defaultMessage: 'Loading ...',
        description: ''
    },
    clearAll: {
        id: 'SearchPage.ClearAll',
        defaultMessage: 'Clear All',
        description: 'Text in SearchPage component to clear filters'
    },
    sortBy: {
        id: 'SearchPage.SortBy',
        defaultMessage: 'Sort By',
        description: 'SearchPage component sort by text for sorting result'
    },
    noResultsFound: {
        id: 'SearchPage.NoResultsFound',
        defaultMessage: "Sorry we can't display any results for those filtering options, please try again",
        description: 'Message to be shown if no results are found when filtered.'
    },
    filterResults: {
        id: 'SearchPage.FilterResults',
        defaultMessage: 'Filter Results',
        description: 'SearchPage component filter results text'
    },
    loading: {
        id: 'SearchPage.Loading',
        defaultMessage: 'Loading ...',
        description: 'SearchPage component loading text'
    },
    moreStories: {
        id: 'SearchPage.MoreStories',
        defaultMessage: 'More Stories',
        description: 'SearchPage component more stories text'
    },
    showAllArtists: {
        id: 'SearchPage.showAllArtists',
        defaultMessage: 'SHOW ALL ARTISTS',
        description: 'SearchPage component show all artist'
    },
    showAllAuthors: {
        id: 'SearchPage.showAllAuthors',
        defaultMessage: 'SHOW ALL AUTHORS',
        description: 'SearchPage component show all author'
    },
    resultsHedForIssueDate: {
        id: 'SearchPage.ResultsHedOnIssueDate',
        defaultMessage: ' Search Results from {issueDate} issue',
        description: 'Hed text when results are found for issueDate'
    },
    authorsTitle: {
        id: 'SearchPage.AuthorTitle',
        defaultMessage: '{count, plural, one {Author} other {Authors} }',
        description: 'Search Author titles with plurals'
    },
    reviewsTitle: {
        id: 'SearchPage.ReviewTitle',
        defaultMessage: '{count, plural, one {Review} other {Reviews} }',
        description: 'Search Review titles with plurals'
    },
    tracksTitle: {
        id: 'SearchPage.TrackTitle',
        defaultMessage: '{count, plural, one {Track} other {Tracks} }',
        description: 'Search track titles with plurals'
    },
    featuresTitle: {
        id: 'SearchPage.FeatureTitle',
        defaultMessage: '{count, plural, one {Feature} other {Features} }',
        description: 'Search feature titles with plurals'
    },
    videosTitle: {
        id: 'SearchPage.VideoTitle',
        defaultMessage: '{count, plural, one {Video} other {Videos} }',
        description: 'Search video titles with plurals'
    },
    artistsTitle: {
        id: 'SearchPage.ArtistTitle',
        defaultMessage: '{count, plural, one {Artist} other {Artists} }',
        description: 'Search artist titles with plurals'
    },
    newsTitle: {
        id: 'SearchPage.NewsTitle',
        defaultMessage: `News`,
        description: 'Search news titles with plurals'
    },
    columnsTitle: {
        id: 'SearchPage.ColumnsTitle',
        defaultMessage: `Columns`,
        description: 'Search columns titles with plurals'
    }
});
//# sourceMappingURL=translations.js.map

/***/ }),

/***/ 906:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(96540));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const redux_1 = __webpack_require__(57744);
const multi_packages_1 = __importDefault(__webpack_require__(8193));
const ad_1 = __importDefault(__webpack_require__(19607));
const payment_gateway_1 = __webpack_require__(92807);
const styles_1 = __webpack_require__(33284);
const components_mapper_1 = __webpack_require__(21090);
const track_component_1 = __webpack_require__(53499);
/**
 * UniversalBundlePage component
 *
 * @param {object} props - React props
 * @param {object} [props.attributes] - Optional attributes to add top level
 * @param {object} [props.bundle] - Optional bundle properties
 * @param {object} [props.featureFlags] - Optional feature flags
 * @param {string} [props.className] - Optional top-level class to add
 * @param {string} [props.universalLayout] - Optional layout for the bundle
 * @param {boolean} [props.hasConsistentSpacing] - defines whether the consistent spacing is needed or not
 *
 * @returns {ReactElement} <div>
 */
const UniversalBundlePage = (props) => {
    react_1.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'UniversalBundlePage'
        });
    }, []);
    const { attributes, bundle, bundle: { containers }, navigation, className, universalLayout = 'default', componentConfig, hasConsistentSpacing } = props;
    const components = components_mapper_1.componentsMapper[universalLayout] || components_mapper_1.componentsMapper.default;
    const Header = components.header;
    const isInverted = componentConfig?.BundleHeader?.settings?.isInverted || false;
    const isValidComponent = (Component) => Component && typeof Component === 'function';
    return (react_1.default.createElement(styles_1.UniversalBundlePageWrapper, { ...attributes, className: className, hasBaseAds: true, hasConsistentSpacing: hasConsistentSpacing },
        isValidComponent(Header) && (react_1.default.createElement(Header, { bundle: bundle, navigation: navigation, isInverted: isInverted })),
        react_1.default.createElement(multi_packages_1.default, { containers: containers, bundleProps: props, hasStickyLinkBanner: true, hasConsistentSpacing: hasConsistentSpacing }),
        react_1.default.createElement(payment_gateway_1.PaymentGateway, { group: "ads" },
            react_1.default.createElement(ad_1.default, { position: "footer", shouldHoldSpace: true }))));
};
UniversalBundlePage.propTypes = {
    attributes: prop_types_1.default.object,
    bundle: prop_types_1.default.object,
    className: prop_types_1.default.string,
    componentConfig: prop_types_1.default.object,
    featureFlags: prop_types_1.default.object,
    hasConsistentSpacing: prop_types_1.default.bool,
    navigation: prop_types_1.default.shape({
        subchannelLinks: prop_types_1.default.arrayOf(prop_types_1.default.object)
    }),
    universalLayout: prop_types_1.default.string
};
exports["default"] = (0, redux_1.connector)(UniversalBundlePage, {
    keysToPluck: [
        'bundle',
        'featureFlags',
        'newsletter',
        'navigation',
        'universalLayout',
        'componentConfig',
        'hasConsistentSpacing'
    ]
});
//# sourceMappingURL=UniversalBundlePage.js.map

/***/ }),

/***/ 21090:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.componentsMapper = void 0;
const header_group_1 = __importDefault(__webpack_require__(86559));
const template_header_1 = __importDefault(__webpack_require__(37867));
exports.componentsMapper = {
    default: {
        header: header_group_1.default
    },
    'tentpole-events': {
        header: template_header_1.default
    },
    'tentpole-events-24': {
        header: template_header_1.default
    },
    'tentpole-events-25': {
        header: template_header_1.default
    }
};
//# sourceMappingURL=components-mapper.js.map

/***/ }),

/***/ 25536:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const configured_component_1 = __webpack_require__(12892);
const UniversalBundlePage_1 = __importDefault(__webpack_require__(906));
exports["default"] = (0, configured_component_1.asConfiguredComponent)(UniversalBundlePage_1.default, 'UniversalBundlePage');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 33284:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UniversalBundlePageWrapper = void 0;
const styled_components_1 = __importDefault(__webpack_require__(92168));
const base_page_1 = __importDefault(__webpack_require__(30543));
const get_container_styles_1 = __webpack_require__(30);
const UniversalBundlePageWrapper = (0, styled_components_1.default)(base_page_1.default).withConfig({
    displayName: 'UniversalBundlePageWrapper'
}) `
  ${({ theme }) => (0, get_container_styles_1.getPattern)(theme, 'page-background')};
`;
exports.UniversalBundlePageWrapper = UniversalBundlePageWrapper;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ 37867:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const react_1 = __importDefault(__webpack_require__(96540));
const bundle_body_1 = __importDefault(__webpack_require__(16339));
const styles_1 = __webpack_require__(94631);
const track_component_1 = __webpack_require__(53499);
const styles_2 = __webpack_require__(3509);
/**
 * TentpoleHeader component
 *
 * @param {object} props - React props
 * @param {object} [props.bundle] -  Bundle object
 * @returns {ReactElement} <div>
 */
const TentpoleHeader = (props) => {
    const { bundle: { bundleBody: body, dangerousBundleDek: dangerousDek, bundleTitle: dangerousHed, showDisclaimer, hasDefaultAffiliateDisclaimer, lede, affiliateDisclaimer }, isInverted = false } = props;
    react_1.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'TentpoleHeader'
        });
    }, []);
    return (react_1.default.createElement(styles_2.TentpoleHeaderWrapper, null,
        lede && (react_1.default.createElement(styles_2.TentpoleHeaderSection, { lede: lede, captionWidth: "fullbleed", hideLedeCaption: true })),
        react_1.default.createElement(styles_2.TentpoleHeaderGrid, { isInverted: isInverted },
            react_1.default.createElement(styles_2.TentpoleHeaderGridCol, null,
                dangerousHed && (react_1.default.createElement(styles_2.TentpoleHeaderHed, { dangerouslySetInnerHTML: { __html: dangerousHed }, isInverted: isInverted })),
                dangerousDek && (react_1.default.createElement(styles_2.TentpoleHeaderDekText, { dangerouslySetInnerHTML: { __html: dangerousDek }, isInverted: isInverted })),
                hasDefaultAffiliateDisclaimer && showDisclaimer && (react_1.default.createElement(styles_1.HomePageDisclaimerWrapper, null,
                    react_1.default.createElement(styles_1.HomePageDisclaimer, { disclaimerHtml: affiliateDisclaimer }))))),
        body && react_1.default.createElement(bundle_body_1.default, { body: body })));
};
TentpoleHeader.propTypes = {
    bundle: prop_types_1.default.object,
    isInverted: prop_types_1.default.bool
};
TentpoleHeader.displayName = 'TentpoleHeader';
exports["default"] = TentpoleHeader;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3509:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TentpoleHeaderDekText = exports.TentpoleHeaderSection = exports.TentpoleHeaderGridCol = exports.TentpoleHeaderGrid = exports.TentpoleHeaderHed = exports.TentpoleHeaderWrapper = void 0;
const styled_components_1 = __importDefault(__webpack_require__(92168));
const utils_1 = __webpack_require__(26865);
const constants_1 = __webpack_require__(96472);
const layout_1 = __webpack_require__(1123);
const base_1 = __webpack_require__(76955);
const LeadAsset_1 = __importDefault(__webpack_require__(92027));
const TentpoleHeaderWrapper = styled_components_1.default.div.withConfig({
    displayName: 'TentpoleHeaderWrapper'
}) `
  margin-bottom: ${(0, utils_1.calculateSpacing)(4)};
`;
exports.TentpoleHeaderWrapper = TentpoleHeaderWrapper;
const TentpoleHeaderGrid = styled_components_1.default.header.withConfig({
    displayName: 'TentpoleHeaderGrid'
}) `
  ${(0, layout_1.cssVariablesGrid)()}

  display: grid;
  grid-column: 1;
  grid-row: 1;
  grid-template-columns: repeat(4, 1fr);
  ${(0, utils_1.minScreen)(constants_1.BREAKPOINTS.lg)} {
    grid-template-columns: repeat(12, 1fr);
  }
  column-gap: var(--grid-gap);
  z-index: 1;
  width: 100%;
  row-gap: var(--grid-gap);
  ${(0, layout_1.applyGridSpacing)('padding')};

  ${({ isInverted, theme }) => isInverted &&
    `
      background: ${(0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')};
    `}
`;
exports.TentpoleHeaderGrid = TentpoleHeaderGrid;
const TentpoleHeaderGridCol = styled_components_1.default.div.withConfig({
    displayName: 'TentpoleHeaderGridCol'
}) `
  grid-column: 1 / -1;
  text-align: center;
  ${(0, utils_1.minScreen)(constants_1.BREAKPOINTS.lg)} {
    grid-column: 4 / -4;
  }
`;
exports.TentpoleHeaderGridCol = TentpoleHeaderGridCol;
const TentpoleHeaderSection = (0, styled_components_1.default)(LeadAsset_1.default).withConfig({
    displayName: 'TentpoleHeaderSection'
}) ``;
exports.TentpoleHeaderSection = TentpoleHeaderSection;
const TentpoleHeaderHed = (0, styled_components_1.default)(base_1.BaseText).withConfig({
    displayName: 'TentpoleHeaderHed'
}) `
  margin-top: ${(0, utils_1.calculateSpacing)(4)};
  margin-bottom: ${(0, utils_1.calculateSpacing)(4)};

  ${({ isInverted, theme }) => isInverted &&
    `
      color: ${(0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')} !important;
    `}
`;
exports.TentpoleHeaderHed = TentpoleHeaderHed;
TentpoleHeaderHed.defaultProps = {
    as: 'h1',
    colorToken: 'colors.consumption.body.standard.body',
    typeIdentity: 'typography.definitions.discovery.page-hed-section'
};
const TentpoleHeaderDekText = (0, styled_components_1.default)(base_1.BaseText).withConfig({
    displayName: 'TentpoleHeaderDekText'
}) `
  margin-bottom: ${(0, utils_1.calculateSpacing)(1)};
  ${({ isInverted, theme }) => isInverted &&
    `
      color: ${(0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')};
      margin-bottom: ${(0, utils_1.calculateSpacing)(4)};
    `}
`;
exports.TentpoleHeaderDekText = TentpoleHeaderDekText;
TentpoleHeaderDekText.defaultProps = {
    colorToken: 'colors.consumption.body.standard.body',
    typeIdentity: 'typography.definitions.discovery.description-page'
};
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ 77573:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NextPage = void 0;
const react_1 = __importDefault(__webpack_require__(96540));
const react_intl_1 = __webpack_require__(46984);
const variations_1 = __webpack_require__(81372);
const styles_1 = __webpack_require__(67275);
const Button_1 = __importDefault(__webpack_require__(88456));
const translations_1 = __importDefault(__webpack_require__(14439));
const PrimaryButton = (0, variations_1.asVariation)(Button_1.default, 'Primary', {
    typeStyle: 'primary'
});
const NextPage = ({ currentPage, limit, totalResults }) => {
    const label = (0, react_intl_1.useIntl)().formatMessage(translations_1.default.nextPage);
    // If we are on the last page don't render anything
    if (currentPage * limit >= totalResults) {
        return null;
    }
    // Implement current href logic with search and filter params when necessary
    const href = `?enablePeritext=true&page=${currentPage + 1}`;
    return (react_1.default.createElement(styles_1.MultiPackageReadMore, null,
        react_1.default.createElement(PrimaryButton, { inputKind: "link", href: href, label: label })));
};
exports.NextPage = NextPage;
//# sourceMappingURL=NextPage.js.map

/***/ }),

/***/ 14439:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_intl_1 = __webpack_require__(46984);
exports["default"] = (0, react_intl_1.defineMessages)({
    nextPage: {
        id: 'PaginationRow.NextPage',
        defaultMessage: 'Next Page',
        description: 'The button label'
    }
});
//# sourceMappingURL=translations.js.map

/***/ }),

/***/ 67727:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineBreak = void 0;
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
exports.LineBreak = styled_components_v6_1.default.br.withConfig({
    displayName: 'LineBreak'
}) ``;
//# sourceMappingURL=LineBreak.js.map

/***/ }),

/***/ 67784:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Paragraph = void 0;
const react_1 = __importDefault(__webpack_require__(96540));
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
const P = styled_components_v6_1.default.p.withConfig({
    displayName: 'Paragraph'
}) ``;
function Paragraph(props) {
    return react_1.default.createElement(P, null, props.children);
}
exports.Paragraph = Paragraph;
//# sourceMappingURL=Paragraph.js.map

/***/ }),

/***/ 63980:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(96540));
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
const react_2 = __webpack_require__(1980);
const utils_1 = __webpack_require__(26865);
const base_1 = __webpack_require__(76955);
const constants_1 = __webpack_require__(96472);
const Contributors_1 = __importDefault(__webpack_require__(49080));
const Image_1 = __importDefault(__webpack_require__(40475));
const RubricWrapper_1 = __importDefault(__webpack_require__(37968));
const { universalGridCore } = __webpack_require__(89085);
const CardContent = styled_components_v6_1.default.div.withConfig({
    displayName: 'HeroCardContent'
}) `
  grid-column: 1 / -1;
  padding: 1rem 0px 2rem;
`;
const DekWrapper = styled_components_v6_1.default.div.withConfig({ displayName: 'DekWrapper' }) `
  p {
    ${(0, utils_1.getTypographyStyles)('typography.definitions.discovery.description-core')};
  }
`;
const ToutWrapper = styled_components_v6_1.default.div.withConfig({ displayName: 'ToutWrapper' }) `
  grid-column: 1 / -1;

  figure {
    margin: 0;
    picture img {
      width: 100%;
      height: auto;
    }
  }
`;
const HedWrapper = styled_components_v6_1.default.h3.withConfig({
    displayName: 'HeroCardHedWrapper'
}) `
  margin: 8px 0 0 0;
  ${(0, utils_1.getLinkStyles)('colors.discovery.body.white.heading', null, 'global')}

  p {
    margin: 0;
    margin-bottom: 1rem;

    ${base_1.BaseLink} {
      margin-top: 0;
      ${(0, utils_1.minScreen)(constants_1.BREAKPOINTS.md)} {
        ${({ theme }) => (0, utils_1.getTypographyStyles)(theme, 'typography.definitions.discovery.hed-core-secondary')};
      }
      ${(0, utils_1.getTypographyStyles)('typography.definitions.discovery.hed-break-out')};
    }
  }

  ::after {
    content: '';
    ${(0, utils_1.minScreen)(constants_1.BREAKPOINTS.md)} {
      display: block;
    }
    margin-bottom: ${(0, utils_1.calculateSpacing)(2)};
    border-bottom: 1px solid
      ${(0, utils_1.getColorToken)('colors.discovery.body.white.accent')};
    width: ${(0, utils_1.calculateSpacing)(10)};
  }
`;
const HeroCardTout = (0, styled_components_v6_1.default)(Image_1.default)
    .withConfig({ displayName: 'HeroCardTout' })
    .attrs({}) ``;
const RiverCardContainer = styled_components_v6_1.default.div.withConfig({ displayName: 'HeroCard' }) `
  ${universalGridCore()}
  padding-right: calc(1* var(--grid-margin));
  padding-left: calc(1 * var(--grid-margin));
`;
const Time = styled_components_v6_1.default.time.withConfig({ displayName: 'PublishDate' }) `
  ${({ theme }) => (0, utils_1.getColorStyles)(theme, 'color', 'colors.consumption.lead.inverted.heading')}
  ${({ theme }) => {
    return `${(0, utils_1.getTypographyStyles)(theme, 'typography.definitions.globalEditorial.context-tertiary')};
      `;
}}
`;
const HeroCardContributors = styled_components_v6_1.default.div.withConfig({
    displayName: 'HeroCardContributor'
}) ``;
const HeroCard = ({ contributors, dek, hed, rubric, tout, publishDate }) => {
    const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return (react_1.default.createElement(react_2.ComponentProvider, { value: {
            blocks: {
                media: HeroCardTout
            }
        } },
        react_1.default.createElement(RiverCardContainer, null,
            react_1.default.createElement(ToutWrapper, null, typeof tout === 'string' ? (react_1.default.createElement(react_2.Slice, { value: tout })) : (react_1.default.createElement(Image_1.default, { media: tout }))),
            react_1.default.createElement(CardContent, null,
                react_1.default.createElement(RubricWrapper_1.default, { className: "hero_card_rubric" },
                    react_1.default.createElement(react_2.Slice, { value: rubric })),
                react_1.default.createElement(HedWrapper, { className: "summary-item__hed" },
                    react_1.default.createElement(react_2.Slice, { value: hed })),
                react_1.default.createElement(DekWrapper, null,
                    react_1.default.createElement(react_2.Slice, { value: dek })),
                react_1.default.createElement(HeroCardContributors, null,
                    react_1.default.createElement(Contributors_1.default, { contributors: contributors })),
                react_1.default.createElement(Time, null, formattedDate)))));
};
exports["default"] = HeroCard;
//# sourceMappingURL=HeroCard.js.map

/***/ }),

/***/ 47332:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(96540));
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
const react_2 = __webpack_require__(1980);
const utils_1 = __webpack_require__(26865);
const base_1 = __webpack_require__(76955);
const Image_1 = __importDefault(__webpack_require__(40475));
const constants_1 = __webpack_require__(96472);
const Contributors_1 = __importDefault(__webpack_require__(49080));
const RubricWrapper_1 = __importDefault(__webpack_require__(37968));
const SummaryItemContent = styled_components_v6_1.default.div.withConfig({
    displayName: 'SummaryItemContent'
}) `
  padding: 1rem 0px 0;
  align-content: center;
`;
const DekWrapper = styled_components_v6_1.default.div.withConfig({ displayName: 'DekWrapper' }) `
  // Temp - p will be removed
  p {
    ${(0, utils_1.getTypographyStyles)('typography.definitions.discovery.description-core')};
    margin-bottom: 0;
  }
`;
const HedWrapper = styled_components_v6_1.default.h3.withConfig({
    displayName: 'HeroCardHedWrapper'
}) `
  ${(0, utils_1.getLinkStyles)('colors.discovery.body.white.heading', null, 'global')}
  margin: 0.4em 0;

  p {
    margin: 0;

    ${base_1.BaseLink} {
      ${(0, utils_1.getTypographyStyles)('typography.definitions.discovery.hed-core-primary')}
      margin-top: 0;
    }
  }
`;
const ToutWrapper = styled_components_v6_1.default.div.withConfig({ displayName: 'ToutWrapper' }) `
  figure {
    margin: 0 auto;
  }
`;
const RiverCardContainer = styled_components_v6_1.default.div.withConfig({ displayName: 'RiverCard' }) `
  margin-bottom: 2rem;
  padding-bottom: 2rem;

  @media (min-width: ${constants_1.BREAKPOINTS.md}) {
    display: grid;
    column-gap: var(--grid-gap);
    --grid-gap: 1.5rem;
    --grid-margin: 3rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'image content content';

    ${ToutWrapper} {
      grid-area: image;
    }

    ${SummaryItemContent} {
      grid-area: content;
      padding: 0;
    }
  }
`;
const RiverCardTout = (0, styled_components_v6_1.default)(Image_1.default)
    .withConfig({ displayName: 'RiverCardTout' })
    .attrs({}) ``;
const RiverCard = ({ contributors, dek, hed, rubric, tout }) => {
    return (react_1.default.createElement(react_2.ComponentProvider, { value: {
            blocks: {
                media: RiverCardTout
            }
        } },
        react_1.default.createElement(RiverCardContainer, null,
            react_1.default.createElement(ToutWrapper, null, typeof tout === 'string' ? (react_1.default.createElement(react_2.Slice, { value: tout })) : (react_1.default.createElement(RiverCardTout, { media: tout }))),
            react_1.default.createElement(SummaryItemContent, null,
                react_1.default.createElement(RubricWrapper_1.default, { className: "river_card_rubric" },
                    react_1.default.createElement(react_2.Slice, { value: rubric })),
                react_1.default.createElement(HedWrapper, { className: "summary-item__hed" },
                    react_1.default.createElement(react_2.Slice, { value: hed })),
                react_1.default.createElement(DekWrapper, null,
                    react_1.default.createElement(react_2.Slice, { value: dek })),
                react_1.default.createElement(Contributors_1.default, { contributors: contributors })))));
};
exports["default"] = RiverCard;
//# sourceMappingURL=RiverCard.js.map

/***/ }),

/***/ 37968:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const styled_components_v6_1 = __importStar(__webpack_require__(50435));
const utils_1 = __webpack_require__(26865);
const base_1 = __webpack_require__(76955);
const styles_1 = __webpack_require__(6613);
const RubricWrapper = (0, styled_components_v6_1.default)(styles_1.RubricWrapper).withConfig({
    displayName: 'RubricWrapper'
}) `
  ${base_1.BaseLink} {
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    ${({ theme }) => (0, utils_1.getColorStyles)(theme, 'color', 'colors.consumption.lead.standard.context-signature')};
    ${({ hasBackground, isInverted, theme }) => (hasBackground || isInverted) &&
    (0, styled_components_v6_1.css) `
        ${(0, utils_1.getColorStyles)(theme, 'color', 'colors.consumption.lead.standard.context-texture')};
      `}
    ${({ theme }) => (0, utils_1.getTypographyStyles)(theme, 'typography.definitions.globalEditorial.context-primary')};

    &:hover {
      text-decoration: underline;
    }
  }
`;
exports["default"] = RubricWrapper;
//# sourceMappingURL=RubricWrapper.js.map

/***/ }),

/***/ 76935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable import/no-import-module-exports */
/* eslint-enable import/no-import-module-exports */
const React = __webpack_require__(96540);
const PropTypes = __webpack_require__(5556);
const DefaultComponentProvider = (__webpack_require__(1980).ComponentProvider);
const { Bold } = __webpack_require__(53559);
const { Italic } = __webpack_require__(48768);
const { SmallCaps } = __webpack_require__(89460);
const { Strikethrough } = __webpack_require__(45661);
const { Subscript } = __webpack_require__(20827);
const { Superscript } = __webpack_require__(78122);
const { Link } = __webpack_require__(77232);
const { AdSlot } = __webpack_require__(68135);
const { Content } = __webpack_require__(66570);
const { CurationContainer } = __webpack_require__(35437);
const { Dek } = __webpack_require__(35760);
const { Hed } = __webpack_require__(39457);
const { LineBreak } = __webpack_require__(67727);
const { Newsletter } = __webpack_require__(56921);
const { NextPage } = __webpack_require__(77573);
const { Paragraph } = __webpack_require__(67784);
const { SubNav } = __webpack_require__(10015);
const { SummaryRiverSection } = __webpack_require__(95858);
const defaultValues = {
    blocks: {
        'ad-slot': AdSlot,
        content: Content,
        'curation-container': CurationContainer,
        dek: Dek,
        hed: Hed,
        'line-break': LineBreak,
        newsletter: Newsletter,
        'next-page': NextPage,
        paragraph: Paragraph,
        'sub-nav': SubNav,
        'summary-river-section': SummaryRiverSection
    },
    marks: {
        bold: Bold,
        italic: Italic,
        link: Link,
        'small-caps': SmallCaps,
        strikethrough: Strikethrough,
        subscript: Subscript,
        superscript: Superscript
    }
};
/**
 * Merges default values with user-provided, mostly brand override values.
 * Once merged, we pass them intothe DefaultComponentProvider context.
 *
 * @param {object} props - React props
 * @param {ReactElement} [props.children] - optional React children
 * @returns {JSX.Element} The DefaultComponentProvider component with merged values.
 *
 */
const ComponentProvider = ({ children }) => {
    return (React.createElement(DefaultComponentProvider, { value: defaultValues }, children));
};
ComponentProvider.propTypes = {
    children: PropTypes.node.isRequired
};
module.exports = ComponentProvider;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 66570:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Content = void 0;
const react_1 = __importDefault(__webpack_require__(96540));
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
const Div = styled_components_v6_1.default.div.withConfig({
    displayName: 'Content'
}) ``;
const Content = ({ children }) => {
    return react_1.default.createElement(Div, null, children);
};
exports.Content = Content;
//# sourceMappingURL=Content.js.map

/***/ }),

/***/ 35437:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurationContainer = void 0;
const react_1 = __importDefault(__webpack_require__(96540));
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
const react_2 = __webpack_require__(1980);
const RiverCard_1 = __importDefault(__webpack_require__(47332));
const HeroCard_1 = __importDefault(__webpack_require__(63980));
var VARIATION_TYPES;
(function (VARIATION_TYPES) {
    VARIATION_TYPES["HeroCard"] = "HeroCard";
    VARIATION_TYPES["RiverCard"] = "RiverCard";
})(VARIATION_TYPES || (VARIATION_TYPES = {}));
const VERSO_VARIATON_MAP = {
    'verso-multi-package-feature': VARIATION_TYPES.HeroCard,
    'verso-river': VARIATION_TYPES.RiverCard
};
const SummaryItemVariations = {
    HeroCard: HeroCard_1.default,
    RiverCard: RiverCard_1.default
};
const MultiContainerRowWrapper = styled_components_v6_1.default.div.withConfig({
    displayName: 'MultiContainerRowWrapper'
}) `
  margin-top: 32px;
`;
const CurationContainerWrapper = styled_components_v6_1.default.div.withConfig({
    displayName: 'Curation Container'
}) `
  width: 100%;
`;
const CurationContainer = ({ children, type }) => {
    const getSummaryItemVariation = (type) => {
        return VERSO_VARIATON_MAP[type];
    };
    const summaryItemVariationType = getSummaryItemVariation(type);
    const SummaryItem = SummaryItemVariations[summaryItemVariationType];
    const innerContent = (react_1.default.createElement(CurationContainerWrapper, null,
        react_1.default.createElement(react_2.ComponentProvider, { value: {
                blocks: {
                    'summary-item': SummaryItem
                }
            } }, children)));
    // if our variation is RiverCard, then wrap with MultiContainerRowWrapper
    if (summaryItemVariationType === VARIATION_TYPES.RiverCard) {
        return react_1.default.createElement(MultiContainerRowWrapper, null, innerContent);
    }
    return innerContent;
};
exports.CurationContainer = CurationContainer;
//# sourceMappingURL=CurationContainer.js.map

/***/ }),

/***/ 95858:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SummaryRiverSection = void 0;
const react_1 = __importDefault(__webpack_require__(96540));
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
const SideAdVariation_1 = __webpack_require__(56043);
const constants_1 = __webpack_require__(96472);
const { universalGridCore } = __webpack_require__(89085);
const StyledSummaryRiverSection = styled_components_v6_1.default.section.withConfig({
    displayName: 'SummaryRiverSection'
}) ``;
const GridWrapperAside = styled_components_v6_1.default.div.withConfig({
    displayName: 'GridWrapperAside'
}) `
  display: none;
  @media (min-width: ${constants_1.BREAKPOINTS.lg}) {
    display: block;
    grid-column: 9 / -1;
  }
  @media (min-width: ${constants_1.BREAKPOINTS.max}) {
    grid-column: 10 / -1;
  }
`;
const GridWrapperContent = styled_components_v6_1.default.div.withConfig({
    displayName: 'GridWrapperContent'
}) `
  grid-column: 1 / -1;
  @media (min-width: ${constants_1.BREAKPOINTS.lg}) {
    grid-column: span 8;
  }
  @media (min-width: ${constants_1.BREAKPOINTS.max}) {
    grid-column: span 9;
  }
`;
const GridWrapper = styled_components_v6_1.default.div.withConfig({
    displayName: 'GridWrapper'
}) `
  ${universalGridCore()}
  padding-right: calc(1* var(--grid-margin));
  padding-left: calc(1 * var(--grid-margin));

  @media (min-width: ${constants_1.BREAKPOINTS.md}) {
    --grid-gap: 1.5rem;
    --grid-margin: 3rem;
  }

  @media (min-width: ${constants_1.BREAKPOINTS.lg}) {
    --grid-gap: 2rem;
  }

  @media (min-width: ${constants_1.BREAKPOINTS.max}) {
    --grid-margin: 4rem;
  }

  @media (min-width: ${constants_1.BREAKPOINTS.lg}) and (max-width: 1045px) {
    grid-template-columns: repeat(8, 1fr) minmax(300px, 4fr);
  }

  @media (min-width: ${constants_1.BREAKPOINTS.max}) and (max-width: 1393px) {
    grid-template-columns: repeat(9, 1fr) minmax(300px, 3fr);
  }
`;
function SummaryRiverSection({ children }) {
    return (react_1.default.createElement(StyledSummaryRiverSection, null,
        react_1.default.createElement(GridWrapper, null,
            react_1.default.createElement(GridWrapperContent, null, children),
            react_1.default.createElement(GridWrapperAside, null,
                react_1.default.createElement(SideAdVariation_1.SideAdVariation, null, children)))));
}
exports.SummaryRiverSection = SummaryRiverSection;
//# sourceMappingURL=SummaryRiverSection.js.map

/***/ }),

/***/ 53559:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bold = void 0;
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
exports.Bold = styled_components_v6_1.default.strong.withConfig({
    displayName: 'Bold'
}) `
  font-weight: bold;
`;
//# sourceMappingURL=Bold.js.map

/***/ }),

/***/ 48768:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Italic = void 0;
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
exports.Italic = styled_components_v6_1.default.em.withConfig({
    displayName: 'Italic'
}) `
  font-style: italic;
`;
//# sourceMappingURL=Italic.js.map

/***/ }),

/***/ 77232:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Link = void 0;
const react_1 = __importDefault(__webpack_require__(96540));
const BaseLink_1 = __webpack_require__(60881);
const Link = (props) => {
    const { children, url } = props;
    return (react_1.default.createElement(BaseLink_1.BaseLink, { as: "a", href: url }, children));
};
exports.Link = Link;
//# sourceMappingURL=Link.js.map

/***/ }),

/***/ 89460:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SmallCaps = void 0;
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
exports.SmallCaps = styled_components_v6_1.default.em.withConfig({
    displayName: 'SmallCaps'
}) `
  font-style: inherit;
  font-variant: all-small-caps;
`;
//# sourceMappingURL=SmallCaps.js.map

/***/ }),

/***/ 45661:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Strikethrough = void 0;
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
exports.Strikethrough = styled_components_v6_1.default.del.withConfig({
    displayName: 'Strikethrough'
}) ``;
//# sourceMappingURL=Strikethrough.js.map

/***/ }),

/***/ 20827:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Subscript = void 0;
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
exports.Subscript = styled_components_v6_1.default.sub.withConfig({
    displayName: 'Subscript'
}) ``;
//# sourceMappingURL=Subscript.js.map

/***/ }),

/***/ 78122:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Superscript = void 0;
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
exports.Superscript = styled_components_v6_1.default.sup.withConfig({
    displayName: 'Superscript'
}) ``;
//# sourceMappingURL=Superscript.js.map

/***/ }),

/***/ 68135:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdSlot = void 0;
const react_1 = __importDefault(__webpack_require__(96540));
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
const SideAdVariation_1 = __webpack_require__(56043);
const NativeAdVariation_1 = __webpack_require__(84303);
const MidContentAdVariation_1 = __webpack_require__(25079);
const Div = styled_components_v6_1.default.div.withConfig({
    displayName: 'AdSlot'
}) `
  height: 100%;
`;
const Variations = {
    'mid-content-ad': MidContentAdVariation_1.MidContentAdVariation,
    'native-ad': NativeAdVariation_1.NativeAdVariation,
    'side-ad': SideAdVariation_1.SideAdVariation
};
function AdSlot(props) {
    const Variation = Variations[props.view];
    return (react_1.default.createElement(Div, null,
        react_1.default.createElement(Variation, { ...props })));
}
exports.AdSlot = AdSlot;
//# sourceMappingURL=AdSlot.js.map

/***/ }),

/***/ 25079:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MidContentAdVariation = void 0;
const react_1 = __importDefault(__webpack_require__(96540));
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
const payment_gateway_1 = __webpack_require__(92807);
const styles_1 = __webpack_require__(15641);
const Div = styled_components_v6_1.default.div.withConfig({
    displayName: 'MidContentAdVariation'
}) ``;
function MidContentAdVariation(_props) {
    return (react_1.default.createElement(Div, null,
        react_1.default.createElement(payment_gateway_1.PaymentGateway, { group: "ads" },
            react_1.default.createElement(styles_1.SummaryRiverAd, { position: "mid-content", shouldDisplayLabel: true }))));
}
exports.MidContentAdVariation = MidContentAdVariation;
//# sourceMappingURL=MidContentAdVariation.js.map

/***/ }),

/***/ 84303:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NativeAdVariation = void 0;
const react_1 = __importDefault(__webpack_require__(96540));
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
const payment_gateway_1 = __webpack_require__(92807);
const Ad_1 = __importDefault(__webpack_require__(31850));
const Div = styled_components_v6_1.default.div.withConfig({
    displayName: 'NativeAdVariation'
}) `
  padding: 4x;
`;
function NativeAdVariation(_props) {
    return (react_1.default.createElement(Div, null,
        react_1.default.createElement(payment_gateway_1.PaymentGateway, { group: "ads" },
            react_1.default.createElement(Ad_1.default, { position: "promo" }))));
}
exports.NativeAdVariation = NativeAdVariation;
//# sourceMappingURL=NativeAdVariation.js.map

/***/ }),

/***/ 56921:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Newsletter = void 0;
const react_1 = __importDefault(__webpack_require__(96540));
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
const styles_1 = __webpack_require__(67275);
const styles_2 = __webpack_require__(69817);
const TextField = __webpack_require__(89662);
const NewsletterContainer = styled_components_v6_1.default.div.withConfig({
    displayName: 'Newsletter'
}) ``;
const Newsletter = ({ buttonLabel, dangerousDek, dangerousHed, dangerousDisclaimer, errors, formName, placeholder, textFieldLabel, textFieldName }) => {
    return (react_1.default.createElement(NewsletterContainer, null,
        react_1.default.createElement(styles_1.MultiPackageRow, { className: "homepage__newsletter-row" },
            react_1.default.createElement(styles_1.NewsletterWrapper, null,
                react_1.default.createElement(styles_2.NewsletterSubscribeFormWrapper, { className: "newsletter-subscribe-form", hasAlternateNewsletterStyle: true },
                    react_1.default.createElement(styles_2.NewsletterSubscribeFormHedDekWrapper, null,
                        react_1.default.createElement(styles_2.NewsletterSubscribeFormDangerousHed, { className: "newsletter-subscribe-form__hed", textColor: "light", textAlign: "center", newsletterPalette: "standard", noBottomPadding: false, dangerouslySetInnerHTML: { __html: dangerousHed } }),
                        react_1.default.createElement(styles_2.NewsletterSubscribeFormDek, { className: "newsletter-subscribe-form__dek", textColor: "light", dangerouslySetInnerHTML: { __html: dangerousDek } })),
                    react_1.default.createElement(styles_2.NewsletterSubscribeFormInputsWrapper, null,
                        react_1.default.createElement(styles_2.NewsletterSubscribeFormValidation, { errors: errors },
                            react_1.default.createElement(TextField.SingleLine, { ariaDescribedBy: "privacy-text", buttonInputKind: "submit", buttonLabel: buttonLabel, formName: formName, hasAttachedButton: true, isRequired: true, label: textFieldLabel, name: textFieldName, placeholder: placeholder, type: "email" }),
                            react_1.default.createElement(styles_2.NewsletterSubscribeFormDisclaimer, { disclaimerColor: "dark", hasAlternateNewsletterStyle: true, textAlign: "center" },
                                react_1.default.createElement("span", { dangerouslySetInnerHTML: {
                                        __html: dangerousDisclaimer
                                    } })))))))));
};
exports.Newsletter = Newsletter;
//# sourceMappingURL=Newsletter.js.map

/***/ }),

/***/ 56043:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SideAdVariation = void 0;
const react_1 = __importDefault(__webpack_require__(96540));
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
const utils_1 = __webpack_require__(26865);
const payment_gateway_1 = __webpack_require__(92807);
const constants_1 = __webpack_require__(96472);
const sticky_box_1 = __importDefault(__webpack_require__(28433));
const Ad_1 = __importDefault(__webpack_require__(31850));
const StickyBox = (0, styled_components_v6_1.default)(sticky_box_1.default).withConfig({
    displayName: 'SideAdVariation'
}) `
  ${(0, utils_1.minScreen)(constants_1.BREAKPOINTS.lg)} {
    top: ${(0, utils_1.calculateSpacing)(16)};
  }
`;
function SideAdVariation(_props) {
    return (react_1.default.createElement(StickyBox, null,
        react_1.default.createElement(payment_gateway_1.PaymentGateway, { group: "ads" },
            react_1.default.createElement(Ad_1.default, { position: "rail" }))));
}
exports.SideAdVariation = SideAdVariation;
//# sourceMappingURL=SideAdVariation.js.map

/***/ }),

/***/ 10015:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubNav = void 0;
const react_1 = __webpack_require__(1980);
const react_2 = __importDefault(__webpack_require__(96540));
const styles_1 = __webpack_require__(79424);
function SubNav({ children }) {
    return (react_2.default.createElement(react_1.ComponentProvider, { value: {
            marks: {
                link: styles_1.NavLink
            }
        } },
        react_2.default.createElement(styles_1.NavWrapper, { "data-testid": "ScrollingNavigation", isCentered: true },
            react_2.default.createElement(styles_1.NavListWrapper, null,
                react_2.default.createElement(styles_1.NavList, null, children.map((item) => {
                    return react_2.default.createElement(styles_1.NavListItem, null, item);
                }))))));
}
exports.SubNav = SubNav;
//# sourceMappingURL=SubNav.js.map

/***/ }),

/***/ 49080:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(96540));
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
const utils_1 = __webpack_require__(26865);
const StyledContributor = styled_components_v6_1.default.span.withConfig({
    displayName: 'Contributor'
}) `
  margin-bottom: 0.25rem;
  ${(0, utils_1.getTypographyStyles)('typography.definitions.globalEditorial.accreditation-core')};
  color: ${(0, utils_1.getColorToken)('colors.consumption.lead.standard.accreditation')};
`;
const BylineName = styled_components_v6_1.default.span.withConfig({
    displayName: 'BylineName'
}) ``;
const BylinePreamble = styled_components_v6_1.default.span.withConfig({
    displayName: 'BylinePreamble'
}) `
  text-transform: uppercase;
`;
// TODO: this will need translations
const CONTRIBUTOR_TYPES = {
    AUTHOR: 'By',
    PHOTOGRAPHER: 'Photography by'
};
const Contributors = ({ contributors }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null, Object.values(contributors).flatMap((contributors) => contributors.map(({ name, type }) => {
        const preamble = CONTRIBUTOR_TYPES[type];
        return (react_1.default.createElement(StyledContributor, null,
            react_1.default.createElement(BylinePreamble, null,
                preamble,
                "\u00A0"),
            react_1.default.createElement(BylineName, null, name)));
    }))));
};
exports["default"] = Contributors;
//# sourceMappingURL=Contributors.js.map

/***/ }),

/***/ 35760:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dek = void 0;
const react_1 = __importDefault(__webpack_require__(96540));
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
const Div = styled_components_v6_1.default.div.withConfig({
    displayName: 'Dek'
}) ``;
function Dek(props) {
    return react_1.default.createElement(Div, null, props.children);
}
exports.Dek = Dek;
Dek.displayName = 'Dek';
//# sourceMappingURL=Dek.js.map

/***/ }),

/***/ 39457:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Hed = void 0;
const react_1 = __importDefault(__webpack_require__(96540));
const styled_components_v6_1 = __importDefault(__webpack_require__(50435));
const StyledHed = styled_components_v6_1.default.h1.withConfig({
    displayName: 'StyledHed'
}) `
  text-align: center;
`;
function Hed(props) {
    return react_1.default.createElement(StyledHed, null, props.children);
}
exports.Hed = Hed;
//# sourceMappingURL=Hed.js.map

/***/ }),

/***/ 40475:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(96540));
const styled_components_1 = __importStar(__webpack_require__(92168));
const react_2 = __webpack_require__(1980);
const StyledPicture = styled_components_1.default.picture.withConfig({
    displayName: 'StyledPicture'
}) `
  display: block;
  width: 100%;

  ${({ $sources }) => {
    if (!$sources || !Array.isArray($sources))
        return '';
    return $sources.map((source) => {
        if (!source || !source.aspectRatio)
            return '';
        const [width, height] = source.aspectRatio
            .split(':')
            .map((num) => parseInt(num, 10));
        return (0, styled_components_1.css) `
        @media (max-width: ${source.breakpoint}) {
          height: ${width / height}%;
        }
      `;
    });
}}
`;
const ImageOnly = ({ sources, srcsets, altText }) => {
    return (react_1.default.createElement(StyledPicture, { "$sources": Array.isArray(sources) ? sources : [] },
        srcsets && srcsets.length > 0 ? (srcsets.map((srcset, index) => {
            if (!srcset)
                return null;
            return react_1.default.createElement("source", { key: index, srcSet: srcset });
        })) : (react_1.default.createElement("source", { srcSet: "" }) // Fallback empty source
        ),
        react_1.default.createElement("img", { alt: altText || '' })));
};
/**
 * ResponsiveImage component that renders images with responsive behavior
 *
 * @param {object} props - Component props
 * @param {MediaProps} props.media - Media object containing image data
 * @param {string} props.media.altText - Alternative text for the image for accessibility
 * @param {string} [props.media.caption] - Optional caption text to display below the image
 * @param {string} [props.media.credit] - Optional credit text to display below the image
 * @param {string[]} [props.media.srcsets] - Optional array of srcset strings for different resolutions
 * @param {Record<string, MediaSource>} [props.media.sources] - Optional object containing source configurations
 *
 * @returns {React.ReactElement|null} A figure element containing the image and optional caption/credit
 *
 */
const Image = ({ media }) => {
    const { altText, sources, srcsets, caption, credit } = media;
    if (!sources) {
        return null;
    }
    return (react_1.default.createElement("figure", null,
        react_1.default.createElement(ImageOnly, { sources: sources, srcsets: srcsets, altText: altText }),
        (caption || credit) && (react_1.default.createElement("figcaption", null,
            caption && react_1.default.createElement(react_2.Slice, { value: caption }),
            credit && react_1.default.createElement(react_2.Slice, { value: credit })))));
};
exports["default"] = Image;
//# sourceMappingURL=Image.js.map

/***/ }),

/***/ 37515:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const bundle_page_1 = __importDefault(__webpack_require__(26836));
const bootstrap_client_app_entry_1 = __importDefault(__webpack_require__(41782));
(0, bootstrap_client_app_entry_1.default)(bundle_page_1.default);
//# sourceMappingURL=client.entry.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			5025: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkverso"] = globalThis["webpackChunkverso"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [8677,6710,6280,1747,6911,1782,8230], () => (__webpack_require__(37515)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;

