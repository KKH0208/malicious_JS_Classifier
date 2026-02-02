/* 元のURL: https://wired.com */
// 外部JS: https://wired.com/verso/static/8230.bcbf73d380fc87eff197.js
"use strict";
(globalThis["webpackChunkverso"] = globalThis["webpackChunkverso"] || []).push([[8230],{

/***/ 47454:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const react_1 = __importDefault(__webpack_require__(96540));
const configured_component_1 = __webpack_require__(12892);
const Close_1 = __importDefault(__webpack_require__(76399));
const styles_1 = __webpack_require__(20009);
const track_component_1 = __webpack_require__(53499);
/**
 * CategoryFilterItem component
 *
 * @param {object} props - React props
 * @param {string} props.dangerousText - required prop name of the token
 * @param {func} props.Icon - optional props to render the selected Icon
 * @param {func} props.onClickHandler - required props to delete the token
 * @param {string} [props.theme] - Standard or inverted, standard by default, ideally inherited from parent's nav component
 *
 * @returns {ReactElement} <div>
 */
const CategoryFilterItem = ({ dangerousText, Icon = Close_1.default, onClickHandler, theme = 'standard' }) => {
    const isInverted = theme === 'inverted';
    react_1.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'CategoryFilterItem'
        });
    }, []);
    return (react_1.default.createElement(styles_1.CategoryFilterItemWrapper, { className: "item-wrapper", "data-testid": "CategoryFilterItemWrapper" },
        react_1.default.createElement(styles_1.CategoryFilterItemButton, { onClick: onClickHandler, isInverted: isInverted, "aria-label": "action button" },
            react_1.default.createElement(Icon, null)),
        react_1.default.createElement(styles_1.CategoryFilterItemText, { isInverted: isInverted, dangerouslySetInnerHTML: { __html: dangerousText } })));
};
CategoryFilterItem.propTypes = {
    dangerousText: prop_types_1.default.string.isRequired,
    Icon: prop_types_1.default.func,
    onClickHandler: prop_types_1.default.func,
    theme: prop_types_1.default.oneOf(['standard', 'inverted'])
};
CategoryFilterItem.displayName = 'CategoryFilterItem';
exports["default"] = (0, configured_component_1.asConfiguredComponent)(CategoryFilterItem, 'CategoryFilterItem');
//# sourceMappingURL=CategoryFilterItem.js.map

/***/ }),

/***/ 2196:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const CategoryFilterItem_1 = __importDefault(__webpack_require__(47454));
exports["default"] = CategoryFilterItem_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 20009:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryFilterItemWrapper = exports.CategoryFilterItemText = exports.CategoryFilterItemButton = void 0;
const styled_components_1 = __importDefault(__webpack_require__(92168));
const base_1 = __webpack_require__(76955);
const utils_1 = __webpack_require__(26865);
const getBaseFlexSettings = () => `
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CategoryFilterItemWrapper = styled_components_1.default.div.withConfig({
    displayName: 'CategoryFilterItemWrapper'
}) `
  display: flex;
  flex-shrink: 0;
  padding: 0;
`;
exports.CategoryFilterItemWrapper = CategoryFilterItemWrapper;
const CategoryFilterItemButton = styled_components_1.default.button.withConfig({
    displayName: 'CategoryFilterItemButton'
}) `
  ${getBaseFlexSettings()}
  margin-right: ${(0, utils_1.calculateSpacing)(2)};
  outline: none;
  border: 1px solid ${(0, utils_1.getColorToken)('colors.interactive.base.black')};
  border-radius: 50%;
  background: #fff;
  background-color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.standard.heading')};
  padding: 0;
  width: 17px;
  height: 17px;

  .icon-close {
    padding: 4px;

    path {
      stroke: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.interactive.base.black')
    : (0, utils_1.getColorToken)(theme, 'colors.interactive.base.white')};
    }
  }

  svg {
    fill: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.interactive.base.black')
    : (0, utils_1.getColorToken)(theme, 'colors.interactive.base.white')};
  }

  &:hover {
    text-decoration: none;
  }
`;
exports.CategoryFilterItemButton = CategoryFilterItemButton;
const CategoryFilterItemText = (0, styled_components_1.default)(base_1.BaseText).withConfig({
    displayName: 'CategoryFilterItemText'
}) `
  ${({ theme }) => (0, utils_1.getTypographyStyles)(theme, 'typography.definitions.utility.input-core')};

  color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.standard.heading')};
`;
exports.CategoryFilterItemText = CategoryFilterItemText;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ 52213:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const react_1 = __importDefault(__webpack_require__(96540));
const react_2 = __webpack_require__(96540);
const configured_component_1 = __webpack_require__(12892);
const themed_component_1 = __webpack_require__(20223);
const redux_1 = __webpack_require__(57744);
const track_component_1 = __webpack_require__(53499);
const styles_1 = __webpack_require__(16272);
const button_1 = __importDefault(__webpack_require__(73730));
const base_1 = __webpack_require__(76955);
const grid_1 = __importDefault(__webpack_require__(86659));
const TriangleDown_1 = __importDefault(__webpack_require__(82652));
const FilterOverlay_1 = __importDefault(__webpack_require__(26194));
const FilterInfo_1 = __importDefault(__webpack_require__(63756));
const getCollapsedButtonConfig = (selected) => {
    const ButtonComponent = selected ? button_1.default.Utility : button_1.default.UtilityInverted;
    const ButtonWrapper = selected
        ? styles_1.ButtonUtilityWrapper
        : styles_1.ButtonUtilityInvertedWrapper;
    const IconWrapper = selected
        ? styles_1.InvertedTriangleDownIconWrapper
        : styles_1.TriangleUpIconWrapper;
    return { ButtonComponent, ButtonWrapper, IconWrapper };
};
/**
 * ChannelFilter component
 *
 * @param {object} [props.channelTree] - data to show on filter component
 * @param {number} [props.storyCount] - number of filtered stories
 * @param {boolean} [props.hasEnableIcon] - Optional boolean to enable icon, defaults to false
 * @param {number} [props.hideStoryCount] - Optional boolean to hide story count, defaults to false
 * @param {boolean} [props.variations.isInverted] - indicator for inveretd theme
 * @param {boolean} [props.saveButtonText] - Text to be displayed on save button
 * @param {string} [props.variationName] - Component variation name used for Component Tracking
 *
 * @returns {ReactElement} <div>
 */
const ChannelFilter = ({ channelTree, storyCount, onFilterSaveCallback, saveButtonText, filterRef, variationName, hasEnableIcon = false, hideStoryCount = false, isGridLayout = true, variations = { isInverted: false } }) => {
    react_1.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'ChannelFilter',
            variation: variationName
        });
    }, [variationName]);
    const [isOverlayVisible, setIsOverlayVisible] = (0, react_2.useState)(false);
    const [overlayData, setOverlayData] = (0, react_2.useState)({});
    const [filterData, setFilterData] = (0, react_2.useState)(JSON.parse(JSON.stringify(channelTree)));
    const [selectedSubFilters, setSelectedSubFilters] = (0, react_2.useState)([]);
    const [finalSelectedSubFilters, setFinalSelectedSubFilters] = (0, react_2.useState)([]);
    const [isDirty, setIsDirty] = (0, react_2.useState)(false);
    const [showResultsInfo, setshowResultsInfo] = (0, react_2.useState)(false);
    const MainWrapper = isGridLayout ? grid_1.default.WithMargins : base_1.BaseWrap;
    /* eslint-disable react-hooks/exhaustive-deps */
    (0, react_2.useEffect)(() => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('q') || urlParams.get('filter')) {
            setshowResultsInfo(true);
        }
        const fData = filterData ? [...filterData] : [];
        const selectedFilters = [];
        fData.forEach((mainfilter) => {
            let count = 0;
            mainfilter.sub.forEach((subfilter) => {
                if (subfilter.selected) {
                    selectedFilters.push(subfilter);
                    count++;
                }
            });
            mainfilter.text =
                count > 0
                    ? `${mainfilter.originalText} (${count})`
                    : mainfilter.originalText;
        });
        setFinalSelectedSubFilters(selectedFilters);
        setFilterData(fData);
    }, []);
    /* eslint-enable react-hooks/exhaustive-deps */
    (0, react_2.useImperativeHandle)(filterRef, () => ({
        resetSelectedSubFilters: () => {
            setSelectedSubFilters([]);
            setFinalSelectedSubFilters([]);
            setFilterData((prev) => {
                return prev.map((filter) => ({
                    ...filter,
                    text: filter.originalText,
                    sub: filter.sub.map((sub) => ({ ...sub, selected: false }))
                }));
            });
        }
    }));
    const FilterOverlayProps = {
        filterData,
        finalSelectedSubFilters,
        isDirty,
        isGridLayout,
        overlayData,
        selectedSubFilters,
        setFilterData,
        setFinalSelectedSubFilters,
        onFilterSaveCallback,
        setIsDirty,
        setIsOverlayVisible,
        setSelectedSubFilters,
        variations,
        saveButtonText
    };
    const filterInfoProps = {
        filterData,
        finalSelectedSubFilters,
        setFilterData,
        setFinalSelectedSubFilters,
        onFilterSaveCallback,
        storyCount,
        hideStoryCount,
        variations
    };
    return (react_1.default.createElement(MainWrapper, { className: "channelfilter-wrapper" },
        react_1.default.createElement(styles_1.FilterWrapper, null,
            filterData.map((filterObject) => {
                const { ButtonComponent, ButtonWrapper, IconWrapper } = getCollapsedButtonConfig(filterObject.text === filterObject.originalText);
                return (react_1.default.createElement(ButtonWrapper, { key: filterObject.id, isInverted: variations.isInverted, className: "button-wrapper" },
                    react_1.default.createElement(ButtonComponent, { id: filterObject.id, label: filterObject.text, title: filterObject.text, iconPosition: "after", hasDarkBackground: true, hasEnableIcon: hasEnableIcon, onClickHandler: () => {
                            const subFilters = filterObject.sub.filter((element) => element.selected);
                            setSelectedSubFilters(subFilters);
                            setIsOverlayVisible(true);
                            setOverlayData(filterObject);
                        }, ButtonIcon: () => (react_1.default.createElement(IconWrapper, { isInverted: variations.isInverted },
                            react_1.default.createElement(TriangleDown_1.default, null))) })));
            }),
            isOverlayVisible && react_1.default.createElement(FilterOverlay_1.default, { ...FilterOverlayProps })),
        react_1.default.createElement(styles_1.WrapSelectedTokens, null, showResultsInfo && react_1.default.createElement(FilterInfo_1.default, { ...filterInfoProps }))));
};
ChannelFilter.propTypes = {
    channelTree: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        id: prop_types_1.default.string,
        text: prop_types_1.default.string,
        originalText: prop_types_1.default.string,
        sub: prop_types_1.default.arrayOf(prop_types_1.default.shape({
            id: prop_types_1.default.string,
            text: prop_types_1.default.string,
            selected: prop_types_1.default.boolean,
            hierarchyString: prop_types_1.default.string
        }))
    })),
    filterRef: prop_types_1.default.shape({ current: prop_types_1.default.object }),
    hasEnableIcon: prop_types_1.default.bool,
    hideStoryCount: prop_types_1.default.bool,
    isGridLayout: prop_types_1.default.bool,
    onFilterSaveCallback: prop_types_1.default.func,
    saveButtonText: prop_types_1.default.string,
    storyCount: prop_types_1.default.number,
    variationName: prop_types_1.default.string,
    variations: prop_types_1.default.shape({
        isInverted: prop_types_1.default.bool
    })
};
ChannelFilter.displayName = 'ChannelFilter';
exports["default"] = (0, redux_1.connector)((0, themed_component_1.asThemedComponent)((0, configured_component_1.asConfiguredComponent)(ChannelFilter, 'ChannelFilter')), {
    keysToPluck: ['channelTree']
});
//# sourceMappingURL=ChannelFilter.js.map

/***/ }),

/***/ 63756:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const react_1 = __importDefault(__webpack_require__(96540));
const react_intl_1 = __webpack_require__(46984);
const translations_1 = __importDefault(__webpack_require__(818));
const styles_1 = __webpack_require__(16272);
const category_filter_item_1 = __importDefault(__webpack_require__(2196));
const helpers_1 = __webpack_require__(87098);
/**
 * FilterInfo component
 *
 * @param {object} [props.filterData] - data to show on overlay filter component
 * @param {Array} [props.finalSelectedSubFilters] - selected sub filter list
 * @param {Function} [props.onFilterSaveCallback] - callback to handle filters applied
 * @param {Function} [props.setFilterData] - callback to handle filter data
 * @param {Function} [props.setFinalSelectedSubFilters] - callback to set selected sub filters
 * @param {number} [props.storyCount] - number of filtered stories
 * @param {number} [props.hideStoryCount] - Optional boolean to hide story count, defaults to false
 * @param {boolean} [props.variations.isInverted] - indicator for inveretd theme
 *
 * @returns {ReactElement} <div>
 */
const FilterInfo = ({ filterData, finalSelectedSubFilters, setFilterData, setFinalSelectedSubFilters, onFilterSaveCallback, storyCount, hideStoryCount, variations }) => {
    const { formatMessage } = (0, react_intl_1.useIntl)();
    const handleClearAllAndSave = () => {
        const currentLocationWithoutSearch = `${window.location.origin}${window.location.pathname}`;
        window.location = `${currentLocationWithoutSearch}`;
    };
    const handleUnselectSubfilter = (subfilter) => {
        const fData = [...filterData];
        const getMainfilter = () => {
            for (const mainfilter of fData) {
                for (const element of mainfilter.sub) {
                    if (element.id === subfilter.id) {
                        return mainfilter;
                    }
                }
            }
            return {};
        };
        const mainfilter = getMainfilter();
        let count = 0;
        mainfilter.sub.forEach((element) => {
            if (subfilter.id === element.id) {
                element.selected = false;
            }
            if (element.selected) {
                count++;
            }
        });
        mainfilter.text =
            count !== 0
                ? `${mainfilter.originalText} (${count})`
                : mainfilter.originalText;
        const finalFilters = finalSelectedSubFilters.filter((element) => element.id !== subfilter.id);
        setFilterData(fData);
        setFinalSelectedSubFilters(finalFilters);
        if (onFilterSaveCallback) {
            onFilterSaveCallback(finalFilters);
        }
        else {
            const { location } = window;
            const urlWithUpdatedFilters = (0, helpers_1.getUrlWithUpdatedFilters)({
                filters: finalFilters,
                location
            });
            window.location = urlWithUpdatedFilters;
        }
    };
    return (react_1.default.createElement(styles_1.SearchTokensContainer, { isInverted: variations.isInverted, className: "info-container" },
        react_1.default.createElement(styles_1.SearchTokensInfoWapper, { className: "info-wapper" },
            !hideStoryCount && (react_1.default.createElement(styles_1.SearchTokensInfoCount, { isInverted: variations.isInverted, className: "story-count" }, formatMessage(translations_1.default.storyCountText, { storyCount }))),
            react_1.default.createElement(styles_1.SearchTokensinfoClearAllButton, { isInverted: variations.isInverted, onClick: () => handleClearAllAndSave(), className: "clear-all-selected-filter" }, formatMessage(translations_1.default.clearAllFiltersText))),
        finalSelectedSubFilters.map((subfilter) => (react_1.default.createElement(styles_1.TokenWrapper, { key: subfilter.id, isInverted: variations.isInverted, className: "selected-filter-token" },
            react_1.default.createElement(category_filter_item_1.default, { onClickHandler: () => handleUnselectSubfilter(subfilter), dangerousText: subfilter.text, theme: variations.isInverted ? 'inverted' : 'standard' }))))));
};
FilterInfo.propTypes = {
    filterData: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        id: prop_types_1.default.string,
        text: prop_types_1.default.string,
        originalText: prop_types_1.default.string,
        sub: prop_types_1.default.arrayOf(prop_types_1.default.shape({
            id: prop_types_1.default.string,
            text: prop_types_1.default.string,
            selected: prop_types_1.default.boolean,
            hierarchyString: prop_types_1.default.string
        }))
    })),
    finalSelectedSubFilters: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        id: prop_types_1.default.string,
        text: prop_types_1.default.string,
        selected: prop_types_1.default.boolean,
        hierarchyString: prop_types_1.default.string
    })),
    hideStoryCount: prop_types_1.default.bool,
    onFilterSaveCallback: prop_types_1.default.func,
    setFilterData: prop_types_1.default.func,
    setFinalSelectedSubFilters: prop_types_1.default.func,
    storyCount: prop_types_1.default.number,
    variations: prop_types_1.default.shape({
        isInverted: prop_types_1.default.bool
    })
};
FilterInfo.displayName = 'FilterInfo';
exports["default"] = FilterInfo;
//# sourceMappingURL=FilterInfo.js.map

/***/ }),

/***/ 26194:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const react_1 = __importDefault(__webpack_require__(96540));
const react_2 = __webpack_require__(96540);
const react_intl_1 = __webpack_require__(46984);
const analytics_1 = __webpack_require__(90090);
const translations_1 = __importDefault(__webpack_require__(818));
const styles_1 = __webpack_require__(16272);
const base_1 = __webpack_require__(76955);
const Close_1 = __importDefault(__webpack_require__(76399));
const Check_1 = __importDefault(__webpack_require__(76196));
const category_filter_item_1 = __importDefault(__webpack_require__(2196));
const helpers_1 = __webpack_require__(87098);
/**
 * FilterOverlay component
 *
 * @param {object} [props.filterData] - data to show on overlay filter component
 * @param {Array} [props.finalSelectedSubFilters] - selected sub filter list
 * @param {boolean} [props.isDirty] - indicator of user's action on sub filters
 * @param {boolean} [props.isGridLayout] - indicator to set grid layout
 * @param {Function} [props.onFilterSaveCallback] - callback to handle filters applied
 * @param {object} [props.overlayData] - data to show on the FilterOverlay component
 * @param {Array} [props.selectedSubFilters] - temporary selected sub filter list
 * @param {Function} [props.setFilterData] - callback to handle filter data
 * @param {Function} [props.setFinalSelectedSubFilters] - callback to set selected sub filters
 * @param {Function} [props.setIsDirty] - callback to set isDirty variable
 * @param {Function} [props.setIsOverlayVisible] - callback to handle FilterOverlay visibility
 * @param {Function} [props.setSelectedSubFilters] - callback to set temporary selected sub filters
 * @param {boolean} [props.variations.isInverted] - indicator for inveretd theme
 * @param {boolean} [props.saveButtonText] - Text to be displayed on save button
 *
 * @returns {ReactElement} <div>
 */
const FilterOverlay = ({ filterData, finalSelectedSubFilters, isDirty, isGridLayout, overlayData, selectedSubFilters, setFilterData, setFinalSelectedSubFilters, onFilterSaveCallback, setIsDirty, setIsOverlayVisible, setSelectedSubFilters, variations, saveButtonText }) => {
    const { formatMessage } = (0, react_intl_1.useIntl)();
    const wrapperRef = (0, react_2.useRef)(null);
    (0, helpers_1.useOutsideClick)(wrapperRef, setIsOverlayVisible);
    const OverlayDialogWrapper = isGridLayout ? styles_1.OverlayWrapper : base_1.BaseWrap;
    const handleClearAll = () => {
        const subFilters = selectedSubFilters.filter((subfilter) => {
            for (const element of overlayData.sub) {
                if (element.id === subfilter.id) {
                    return false;
                }
            }
            return true;
        });
        setSelectedSubFilters(subFilters);
        setIsDirty(true);
    };
    const handleSubFilterClick = (subfilter) => {
        if (selectedSubFilters.includes(subfilter)) {
            setSelectedSubFilters(selectedSubFilters.filter((currentFilter) => currentFilter !== subfilter));
        }
        else {
            setSelectedSubFilters([...selectedSubFilters, subfilter]);
        }
        setIsDirty(true);
    };
    const trackFilterApplyEvent = (eventName) => {
        const selectedFilters = selectedSubFilters.map((filter) => filter.text);
        const trackingPayload = `${overlayData.originalText}: ${selectedFilters.join(' | ')}`;
        (0, analytics_1.emitGoogleTrackingEvent)(eventName, {
            'ai-hub-filter': trackingPayload
        });
    };
    const handleSave = () => {
        const fData = [...filterData];
        fData.forEach((filterObject) => {
            if (filterObject.id === overlayData.id) {
                let count = 0;
                filterObject.sub.forEach((element) => {
                    element.selected = false;
                    selectedSubFilters.forEach((subfilter) => {
                        if (element.id === subfilter.id) {
                            element.selected = true;
                            count++;
                        }
                    });
                });
                filterObject.text =
                    count !== 0
                        ? `${filterObject.originalText} (${count})`
                        : filterObject.originalText;
            }
        });
        const finalFilters = finalSelectedSubFilters.filter((element) => {
            for (const item of overlayData.sub) {
                if (element.id === item.id) {
                    return false;
                }
            }
            return true;
        });
        const allSelectedFilters = [...finalFilters, ...selectedSubFilters];
        trackFilterApplyEvent('channelfilter click-tracking');
        setFinalSelectedSubFilters(allSelectedFilters);
        setFilterData(fData);
        setIsDirty(false);
        setSelectedSubFilters([]);
        setIsOverlayVisible(false);
        if (finalSelectedSubFilters.length > 0 || allSelectedFilters.length > 0) {
            if (onFilterSaveCallback) {
                onFilterSaveCallback(allSelectedFilters);
            }
            else {
                const { location } = window;
                const updatedUrl = (0, helpers_1.getUrlWithUpdatedFilters)({
                    filters: allSelectedFilters,
                    location
                });
                window.location = updatedUrl;
            }
        }
    };
    return (react_1.default.createElement(styles_1.ModalWrapper, { className: "modal-wrapper" },
        react_1.default.createElement(OverlayDialogWrapper, { className: "channelfilter-wrapper" },
            react_1.default.createElement(styles_1.ModalDialogWrapper, { isInverted: variations.isInverted, ref: wrapperRef },
                react_1.default.createElement(styles_1.HeaderWrapper, null,
                    react_1.default.createElement(styles_1.HeaderTextWrapper, { isInverted: variations.isInverted }, `${formatMessage(translations_1.default.filterPreamble)} ${overlayData.text}`),
                    react_1.default.createElement(styles_1.CloseIconWrapper, { isInverted: variations.isInverted, onClick: () => {
                            setIsOverlayVisible(false);
                            setIsDirty(false);
                            setSelectedSubFilters([]);
                        } },
                        react_1.default.createElement(Close_1.default, null)),
                    react_1.default.createElement(styles_1.MobileFooterWrapper, null,
                        react_1.default.createElement(styles_1.HeaderButtonsWrapper, { isInverted: variations.isInverted },
                            react_1.default.createElement(styles_1.ClearAllTextWrapper, { isInverted: variations.isInverted, onClick: () => handleClearAll(), className: "clear-all-filter" }, formatMessage(translations_1.default.clearAllText)),
                            react_1.default.createElement(styles_1.SaveButtonWrapper, { id: "channel-filter-save", label: saveButtonText || formatMessage(translations_1.default.saveButtonText), title: formatMessage(translations_1.default.saveButtonText), onClickHandler: () => handleSave(), isInverted: variations.isInverted, className: "save-filter" })))),
                react_1.default.createElement(styles_1.FilterOptionsWrapper, null,
                    react_1.default.createElement(styles_1.FlexContainer, null, overlayData.sub.map((subfilter) => {
                        const subFilters = isDirty
                            ? selectedSubFilters
                            : finalSelectedSubFilters;
                        for (const element of subFilters) {
                            if (subfilter.id === element.id) {
                                return (react_1.default.createElement(styles_1.FilterOptionTokenWrapper, { key: subfilter.id, isInverted: variations.isInverted, onClick: () => handleSubFilterClick(subfilter), className: "token-wrapper" },
                                    react_1.default.createElement(category_filter_item_1.default, { dangerousText: subfilter.text, theme: variations.isInverted ? 'standard' : 'inverted', Icon: Check_1.default })));
                            }
                        }
                        return (react_1.default.createElement(styles_1.FilterOptionTextWrapper, { key: subfilter.id, onClick: () => handleSubFilterClick(subfilter), className: "text-wrapper" }, subfilter.text));
                    })))))));
};
FilterOverlay.propTypes = {
    filterData: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        id: prop_types_1.default.string,
        text: prop_types_1.default.string,
        originalText: prop_types_1.default.string,
        sub: prop_types_1.default.arrayOf(prop_types_1.default.shape({
            id: prop_types_1.default.string,
            text: prop_types_1.default.string,
            selected: prop_types_1.default.boolean,
            hierarchyString: prop_types_1.default.string
        }))
    })),
    finalSelectedSubFilters: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        id: prop_types_1.default.string,
        text: prop_types_1.default.string,
        selected: prop_types_1.default.boolean,
        hierarchyString: prop_types_1.default.string
    })),
    isDirty: prop_types_1.default.bool,
    isGridLayout: prop_types_1.default.bool,
    onFilterSaveCallback: prop_types_1.default.func,
    overlayData: prop_types_1.default.shape({
        id: prop_types_1.default.string,
        text: prop_types_1.default.string,
        originalText: prop_types_1.default.string,
        sub: prop_types_1.default.arrayOf(prop_types_1.default.shape({
            id: prop_types_1.default.string,
            text: prop_types_1.default.string,
            selected: prop_types_1.default.boolean,
            hierarchyString: prop_types_1.default.string
        }))
    }),
    saveButtonText: prop_types_1.default.string,
    selectedSubFilters: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        id: prop_types_1.default.string,
        text: prop_types_1.default.string,
        selected: prop_types_1.default.boolean,
        hierarchyString: prop_types_1.default.string
    })),
    setFilterData: prop_types_1.default.func,
    setFinalSelectedSubFilters: prop_types_1.default.func,
    setIsDirty: prop_types_1.default.func,
    setIsOverlayVisible: prop_types_1.default.func,
    setSelectedSubFilters: prop_types_1.default.func,
    variations: prop_types_1.default.shape({
        isInverted: prop_types_1.default.bool
    })
};
FilterOverlay.displayName = 'FilterOverlay';
exports["default"] = FilterOverlay;
//# sourceMappingURL=FilterOverlay.js.map

/***/ }),

/***/ 9396:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const variations_1 = __importDefault(__webpack_require__(67240));
exports["default"] = variations_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 16272:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilterOptionTokenWrapper = exports.TokenWrapper = exports.HorizontalLine = exports.WrapSelectedTokens = exports.SearchTokensInfoWapper = exports.SearchTokensinfoClearAllButton = exports.SearchTokensInfoCount = exports.SearchTokensContainer = exports.InvertedTriangleDownIconWrapper = exports.ButtonUtilityWrapper = exports.ClearAllTextWrapper = exports.CloseIconWrapper = exports.HeaderWrapper = exports.FilterOptionsWrapper = exports.SaveButtonWrapper = exports.HeaderButtonsWrapper = exports.MobileFooterWrapper = exports.FlexContainer = exports.FilterOptionTextWrapper = exports.HeaderTextWrapper = exports.OverlayWrapper = exports.ModalDialogWrapper = exports.ModalWrapper = exports.TriangleUpIconWrapper = exports.ButtonUtilityInvertedWrapper = exports.FilterWrapper = void 0;
const styled_components_1 = __importDefault(__webpack_require__(92168));
const base_1 = __webpack_require__(76955);
const constants_1 = __webpack_require__(96472);
const grid_1 = __importDefault(__webpack_require__(86659));
const button_1 = __importDefault(__webpack_require__(73730));
const utils_1 = __webpack_require__(26865);
const FilterWrapper = styled_components_1.default.div.withConfig({
    displayName: 'FilterWrapper'
}) `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 0;
  padding: 15px 0 15px 0;
`;
exports.FilterWrapper = FilterWrapper;
const ButtonUtilityInvertedWrapper = styled_components_1.default.div.withConfig({
    displayName: 'ButtonUtilityInvertedWrapper'
}) `
  padding: 0 20px 20px 0;

  .button {
    border-color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')};
    text-transform: capitalize;

    ${({ theme }) => (0, utils_1.getTypographyStyles)(theme, 'typography.definitions.consumptionEditorial.subhed-aux-secondary')};

    &:hover,
    &:focus {
      background-color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')};
      color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')};
    }
  }
`;
exports.ButtonUtilityInvertedWrapper = ButtonUtilityInvertedWrapper;
const ButtonUtilityWrapper = (0, styled_components_1.default)(ButtonUtilityInvertedWrapper).withConfig({
    displayName: 'ButtonUtilityWrapper'
}) `
  .button {
    border-color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')};

    &:hover,
    &:focus {
      border-color: ${({ isInverted, theme }) => isInverted &&
    (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')};
      background-color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')};
      color: ${({ theme }) => (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')};
    }
  }
`;
exports.ButtonUtilityWrapper = ButtonUtilityWrapper;
const TriangleUpIconWrapper = styled_components_1.default.div.withConfig({
    displayName: 'TriangleUpIconWrapper'
}) `
  height: 14px;

  .icon {
    width: 15px;
    height: 15px;
    stroke-width: 3;
  }
`;
exports.TriangleUpIconWrapper = TriangleUpIconWrapper;
const InvertedTriangleDownIconWrapper = styled_components_1.default.div.withConfig({
    displayName: 'InvertedTriangleDownIconWrapper'
}) `
  height: 14px;

  .icon {
    width: 15px;
    height: 15px;
    stroke-width: 3;

    polyline {
      stroke: ${({ theme }) => (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')};
    }
  }
`;
exports.InvertedTriangleDownIconWrapper = InvertedTriangleDownIconWrapper;
const ModalWrapper = styled_components_1.default.div.withConfig({ displayName: 'ModalWrapper' }) `
  position: absolute;
  left: 0;
  z-index: 49;
  outline: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: ${constants_1.BREAKPOINTS.md}) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    overflow-y: scroll;
  }
`;
exports.ModalWrapper = ModalWrapper;
const ModalDialogWrapper = styled_components_1.default.div.withConfig({
    displayName: 'ModalDialogWrapper'
}) `
  background: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')};
  height: fit-content;

  @media (max-width: ${constants_1.BREAKPOINTS.md}) {
    height: 100%;
  }
`;
exports.ModalDialogWrapper = ModalDialogWrapper;
const OverlayWrapper = (0, styled_components_1.default)(grid_1.default.WithMargins).withConfig({
    displayName: 'OverlayWrapper'
}) `
  min-height: 313px;

  @media (max-width: ${constants_1.BREAKPOINTS.md}) {
    && {
      padding: 0;
    }
    height: 100vh;
  }
`;
exports.OverlayWrapper = OverlayWrapper;
const HeaderTextWrapper = styled_components_1.default.h1.withConfig({
    displayName: 'HeaderTextWrapper'
}) `
  ${({ theme }) => (0, utils_1.getTypographyStyles)(theme, 'typography.discover.hed.core.secondary')};

  float: left;
  line-height: 29px;
  color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.standard.heading')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')};

  font-size: 24px;
  @media (max-width: ${constants_1.BREAKPOINTS.md}) {
    max-width: 70vw;
  }
`;
exports.HeaderTextWrapper = HeaderTextWrapper;
const HeaderWrapper = styled_components_1.default.div.withConfig({
    displayName: 'HeaderWrapper'
}) `
  padding: 31px 69px 50px 67px;

  @media (max-width: ${constants_1.BREAKPOINTS.md}) {
    padding: 31px 22px 31px 22px;
  }
`;
exports.HeaderWrapper = HeaderWrapper;
const FilterOptionTextWrapper = styled_components_1.default.div.withConfig({
    displayName: 'FilterOptionTextWrapper'
}) `
  ${({ theme }) => (0, utils_1.getTypographyStyles)(theme, 'typography.definitions.utility.input-core')};

  cursor: pointer;
  padding-right: 24px;
  padding-bottom: 32px;
  line-height: 40px;

  -webkit-text-fill-color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.body.standard.body-deemphasized')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.body.inverted.body-deemphasized')};
  color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.body.standard.body-deemphasized')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.body.inverted.body-deemphasized')};

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media (max-width: ${constants_1.BREAKPOINTS.md}) {
    padding: 0 0 24px 0;
    line-height: 20px;
  }
`;
exports.FilterOptionTextWrapper = FilterOptionTextWrapper;
const FilterOptionTokenWrapper = (0, styled_components_1.default)(FilterOptionTextWrapper).withConfig({
    displayName: 'FilterOptionTokenWrapper'
}) `
  margin-top: 10px;
  padding-bottom: 45px;
  text-decoration: underline;

  color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')};

  @media (max-width: ${constants_1.BREAKPOINTS.md}) {
    margin-top: 0;
    padding-bottom: 25px;
  }
`;
exports.FilterOptionTokenWrapper = FilterOptionTokenWrapper;
const ClearAllTextWrapper = (0, styled_components_1.default)(FilterOptionTextWrapper).withConfig({
    displayName: 'ClearAllTextWrapper'
}) `
  padding: 4px 30px;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')};
  }

  @media (max-width: ${constants_1.BREAKPOINTS.md}) {
    padding: 15px 30px;
  }
`;
exports.ClearAllTextWrapper = ClearAllTextWrapper;
const FlexContainer = styled_components_1.default.div.withConfig({ displayName: 'FlexContainer' }) `
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${constants_1.BREAKPOINTS.md}) {
    && {
      all: unset;
    }
  }
`;
exports.FlexContainer = FlexContainer;
const FilterOptionsWrapper = styled_components_1.default.div.withConfig({
    displayName: 'FilterOptionsWrapper'
}) `
  padding: 32px 69px 0 69px;

  @media (max-width: ${constants_1.BREAKPOINTS.md}) {
    padding-top: 46px;
    padding-bottom: 70px;
    padding-left: 22px;
  }
`;
exports.FilterOptionsWrapper = FilterOptionsWrapper;
const MobileFooterWrapper = styled_components_1.default.div.withConfig({
    displayName: 'MobileFooterWrapper'
}) `
  @media (max-width: ${constants_1.BREAKPOINTS.md}) {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000000;
    box-shadow: 0 4px 24px rgb(0 0 0 / 25%);
    width: 100%;
  }
`;
exports.MobileFooterWrapper = MobileFooterWrapper;
const HeaderButtonsWrapper = styled_components_1.default.div.withConfig({
    displayName: 'HeaderButtonsWrapper'
}) `
  display: flex;
  float: right;

  @media (max-width: ${constants_1.BREAKPOINTS.md}) {
    justify-content: center;
    float: none;
    background-color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')};
    padding: 10px;
  }
`;
exports.HeaderButtonsWrapper = HeaderButtonsWrapper;
const SaveButtonWrapper = (0, styled_components_1.default)(button_1.default.Utility).withConfig({
    displayName: 'SaveButtonWrapper'
}) `
  border-radius: 3px;

  background-color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')};
  min-width: 100px;
  height: 47px;

  color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')};

  &:hover,
  &:focus {
    border-color: ${({ theme }) => (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')};

    background-color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')};
    color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')};
  }
`;
exports.SaveButtonWrapper = SaveButtonWrapper;
const CloseIconWrapper = styled_components_1.default.div.withConfig({
    displayName: 'CloseIconWrapper'
}) `
  display: none;

  @media (max-width: ${constants_1.BREAKPOINTS.md}) {
    display: block;
    float: right;
    margin-top: 15px;
    cursor: pointer;

    .icon-close {
      path {
        stroke: ${({ isInverted, theme }) => isInverted
    ? 'initial'
    : (0, utils_1.getColorToken)(theme, 'colors.interactive.base.white')};
      }
    }
  }
`;
exports.CloseIconWrapper = CloseIconWrapper;
const SearchTokensContainer = styled_components_1.default.div.withConfig({
    displayName: 'SearchTokensContainer'
}) `
  display: flex;
  flex-wrap: wrap;
  padding-bottom: ${(0, utils_1.calculateSpacing)(2)};

  ${({ isInverted, theme }) => isInverted &&
    `
    background: ${(0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading-background')};
  `}
`;
exports.SearchTokensContainer = SearchTokensContainer;
const SearchTokensInfoWapper = (0, styled_components_1.default)(base_1.BaseText).withConfig({
    displayName: 'SearchTokensInfoWapper'
}) `
  margin: ${(0, utils_1.calculateSpacing)(1)} 0 ${(0, utils_1.calculateSpacing)(4)} 0;
  width: 100%;
  ${(0, utils_1.getTypographyStyles)('typography.definitions.utility.label')}
`;
exports.SearchTokensInfoWapper = SearchTokensInfoWapper;
const SearchTokensInfoCount = styled_components_1.default.span.withConfig({
    displayName: 'SearchTokensInfoCount'
}) `
  margin-right: ${(0, utils_1.calculateSpacing)(1)};
  color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.body.inverted.body-deemphasized')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.body.standard.body-deemphasized')};
`;
exports.SearchTokensInfoCount = SearchTokensInfoCount;
const SearchTokensinfoClearAllButton = styled_components_1.default.button.withConfig({
    displayName: 'SearchTokensinfoClearAllButton'
}) `
  outline: none;
  background: transparent;
  padding: 0;
  color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.standard.heading')};
  text-decoration-line: underline;
`;
exports.SearchTokensinfoClearAllButton = SearchTokensinfoClearAllButton;
const WrapSelectedTokens = styled_components_1.default.div.withConfig({
    displayName: 'WrapSelectedTokens'
}) `
  margin-top: -40px;
`;
exports.WrapSelectedTokens = WrapSelectedTokens;
const HorizontalLine = styled_components_1.default.hr.withConfig({ displayName: 'HorizontalLine' }) `
  border-bottom: none;
  width: 100%;
`;
exports.HorizontalLine = HorizontalLine;
const TokenWrapper = styled_components_1.default.div.withConfig({ displayName: 'TokenWrapper' }) `
  margin-top: -10px;
  padding: 0 32px 16px 0;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${({ isInverted, theme }) => isInverted
    ? (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.heading')
    : (0, utils_1.getColorToken)(theme, 'colors.consumption.lead.inverted.background')};
  }
`;
exports.TokenWrapper = TokenWrapper;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ 818:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_intl_1 = __webpack_require__(46984);
exports["default"] = (0, react_intl_1.defineMessages)({
    filterPreamble: {
        id: 'ChannelFilter.FilterPreamble',
        defaultMessage: 'Filter by',
        description: 'ChannelFilter component filter preamble'
    },
    clearAllText: {
        id: 'ChannelFilter.ClearAll',
        defaultMessage: 'Clear All',
        description: 'ChannelFilter component clear all text'
    },
    saveButtonText: {
        id: 'ChannelFilter.Save',
        defaultMessage: 'Save',
        description: 'ChannelFilter component save button text'
    },
    storyCountText: {
        id: 'ChannelFilter.StoryCount',
        defaultMessage: 'Showing {storyCount, plural, one {# Story} other {# Stories}}',
        description: 'ChannelFilter component story count text'
    },
    clearAllFiltersText: {
        id: 'ChannelFilter.ClearAllFiltersText',
        defaultMessage: 'Clear All Filters and Keywords',
        description: 'ChannelFilter component clear all sub filter text'
    }
});
//# sourceMappingURL=translations.js.map

/***/ }),

/***/ 67240:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const variations_1 = __webpack_require__(81372);
const ChannelFilter_1 = __importDefault(__webpack_require__(52213));
ChannelFilter_1.default.Inverted = (0, variations_1.asVariation)(ChannelFilter_1.default, 'Inverted', {
    isInverted: true
});
exports["default"] = ChannelFilter_1.default;
//# sourceMappingURL=variations.js.map

/***/ }),

/***/ 53051:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const react_1 = __importDefault(__webpack_require__(96540));
const styles_1 = __webpack_require__(23913);
/**
 * SubNavigation component
 *
 * @param {object} props - Component props
 * @param {string} [props.layout] - Optional: The layout prop controls the layout of the SubNavigation component. When set to SubNavigationCarousel, the SubNavigation component is rendered as a carousel. When set to SubNavigationDropdown, the SubNavigation component is rendered as a dropdown.
 * @param {Array} [props.links] - Required: The links prop is an array of objects that contain the text and url properties. The text property is the text that is displayed in the navigation item. The url property is the URL that the navigation item links to. The isActive property is a boolean that controls whether the navigation item is active or not. When set to true, the navigation item is active.
 * @param {boolean} [props.hasBackgroundColor] - Optional: The hasBackgroundColor prop, when set to true, adds a background color to the SubNavigation component.
 * @param {boolean} [props.hasBorders] - Optional: The hasBorders prop, when set to true, adds borders to the top and bottom (unless overridden by more specific styles) of the SubNavigation component.
 * @param {boolean} [props.isCentered] - Optional: The isCentered boolean prop controls the alignment of navigation items within the SubNavigation component. When true, it centers the navigation items horizontally.
 * @param {boolean} [props.isSlim] - Optional: Makes the navigation slimmer. Defaults to false. Reduces the vertical padding or height of the SubNavigation component, resulting in a more compact and minimalistic design.
 * @param {string} [props.className] - Optional: The className prop allows for additional CSS class names to be applied to the SubNavigation component. This is useful for custom styling or applying specific CSS rules that arenât covered by the componentâs internal styling logic.
 * @param {string} [props.trackingNamespace] - Optional: This is a string property used to assign a unique identifier to various components for analytics tracking purposes. When a component is interacted with, this namespace helps in identifying the source of the interaction in the analytics data.
 * @param {string} [props.layoutVal] - Optional: growthbook experiment data
 *
 * @returns {ReactElement} <div>
 */
const SubNavigation = ({ layout = 'SubNavigationCarousel', links, hasBackgroundColor = false, hasBorders = false, isCentered = false, isSlim = false, className = '', trackingNamespace = '' }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        layout === 'SubNavigationCarousel' && (react_1.default.createElement(styles_1.SubNavigationCarousel, { hasBackgroundColor: hasBackgroundColor, className: className, hasBorders: hasBorders, isCentered: isCentered, isSlim: isSlim, links: links, trackingNamespace: trackingNamespace || 'SubNavigation' })),
        layout === 'SubNavigationDropdown' && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(styles_1.SubNavigationDropdown, { hasBackgroundColor: hasBackgroundColor, trackingNamespace: trackingNamespace || 'SubNavigation', className: className, links: links, layout: layout }),
            react_1.default.createElement(styles_1.SubNavigationCarousel, { hasBackgroundColor: hasBackgroundColor, layout: layout, className: className, hasBorders: hasBorders, isCentered: isCentered, isSlim: isSlim, links: links, trackingNamespace: trackingNamespace || 'SubNavigation' })))));
};
SubNavigation.displayName = 'SubNavigation';
SubNavigation.propTypes = {
    className: prop_types_1.default.string,
    hasBackgroundColor: prop_types_1.default.bool,
    hasBorders: prop_types_1.default.bool,
    isCentered: prop_types_1.default.bool,
    isSlim: prop_types_1.default.bool,
    layout: prop_types_1.default.oneOf(['SubNavigationCarousel', 'SubNavigationDropdown']),
    links: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        text: prop_types_1.default.string.isRequired,
        url: prop_types_1.default.string.isRequired,
        isActive: prop_types_1.default.bool
    })),
    trackingNamespace: prop_types_1.default.string
};
exports["default"] = SubNavigation;
//# sourceMappingURL=SubNavigation.js.map

/***/ }),

/***/ 5002:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SUBNAVIGATIONBREAKPOINT = void 0;
const constants_1 = __webpack_require__(96472);
/**
 * There are a few dependencies on the width on which the subnavigation component will break
 * These are spread over at least two files.
 * So we need to have some common reference.
 */
exports.SUBNAVIGATIONBREAKPOINT = constants_1.BREAKPOINTS.lg;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 56167:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const configured_component_1 = __webpack_require__(12892);
const SubNavigation_1 = __importDefault(__webpack_require__(53051));
exports["default"] = (0, configured_component_1.asConfiguredComponent)(SubNavigation_1.default, 'SubNavigation');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 23913:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.SubNavigationDropdown = exports.SubNavigationCarousel = void 0;
const styles_1 = __webpack_require__(79424);
const styled_components_1 = __importStar(__webpack_require__(92168));
const utils_1 = __webpack_require__(26865);
const utils_2 = __webpack_require__(70698);
const scrolling_navigation_1 = __importDefault(__webpack_require__(14212));
const dropdown_navigation_1 = __importDefault(__webpack_require__(6662));
const constants_1 = __webpack_require__(5002);
const backgroundColorStyles = (0, styled_components_1.css) `
  ${({ hasBackgroundColor, theme }) => hasBackgroundColor
    ? `background-color: ${(0, utils_1.getColorToken)(theme, (0, utils_2.resolveMenuKey)(theme, 'colors.foundation.menu-bg.collapsed'))};`
    : `&::after {
          background: linear-gradient(90deg, rgba(${(0, utils_1.getColorToken)(theme, (0, utils_2.resolveMenuKey)(theme, 'colors.background.adContainer.standard'), { rgbOnly: true })}, 0) 0%, rgba(${(0, utils_1.getColorToken)(theme, (0, utils_2.resolveMenuKey)(theme, 'colors.background.adContainer.standard'), { rgbOnly: true })}, 1) 75%);
        @media (max-width: ${constants_1.SUBNAVIGATIONBREAKPOINT}) {
          width: ${(0, utils_1.calculateSpacing)(7)};
          position: absolute;
          content: '';
        }
        }`}
`;
exports.SubNavigationCarousel = (0, styled_components_1.default)(scrolling_navigation_1.default).withConfig({
    displayName: 'SubNavigationCarousel'
}) `
  ${backgroundColorStyles};

  ${({ layout }) => layout === 'SubNavigationDropdown' &&
    `
      display: flex;
      @media (max-width: ${constants_1.SUBNAVIGATIONBREAKPOINT}) {
        display: none;
      }
  `}
`;
exports.SubNavigationDropdown = (0, styled_components_1.default)(dropdown_navigation_1.default).withConfig({
    displayName: 'SubNavigationDropdown'
}) `
  ${backgroundColorStyles};

  display: none;
  @media (max-width: ${constants_1.SUBNAVIGATIONBREAKPOINT}) {
    display: block;

    ${styles_1.NavLink} {
      display: inline-flex;
      align-items: center;
      height: 100%;
    }
  }
`;
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ 48592:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimatedDropdown = void 0;
const react_1 = __importDefault(__webpack_require__(96540));
const prop_types_1 = __importDefault(__webpack_require__(5556));
const styled_components_1 = __importDefault(__webpack_require__(92168));
const childPropsContainerClass = 'animated-dropdown-children-container';
/**
 * As mentioned above, this essentially implements the css guru's method for animated dropdown without setting a fixed height:
 * https://www.youtube.com/watch?v=B_n4YONte5A
 */
const AnimatedDropdownContainer = styled_components_1.default.div.withConfig({
    displayName: 'AnimatedDropdownContainer'
}) `
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 200ms ease-in-out;
  .${childPropsContainerClass} {
    overflow: hidden;
  }

  &.show {
    grid-template-rows: 1fr;
    transition: grid-template-rows 400ms ease-in-out;
  }
`;
/**
 * This component can be used to show/hide its children elements, inline, with an animated transition.
 * It's actually surprisingly tricky to add an animation for this.
 * Display none/block has no transition.
 * You also can't so easily animate between height: 0 and height: auto (or max-height).
 * A specific height is required. You could just over-estimate the height. I'd rather not.
 * I came across this approach from the css guru: https://www.youtube.com/watch?v=B_n4YONte5A
 * It allows this animated transition without setting a height.
 *
 * Usage. Wrap stuff in this, and provide the `showChildren` value to show/hide:
 * <AnimatedDropdown showChildren={showChildren}>
 *    <YourComponent />
 * </AnimatedDropdown>
 *
 * @param {object} props - React props
 * @param {ReactElement} [props.children] - React children
 * @param {string} props.className - className
 * @param {boolean} props.showChildren - show/hide this expandable container to show children
 *
 * @returns {ReactElement} <AnimatedDropdown>
 */
const AnimatedDropdown = ({ children, className = '', showChildren = false }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(AnimatedDropdownContainer, { className: `${className ?? ''} ${showChildren ? 'show' : 'hide'}` },
            react_1.default.createElement("div", { className: childPropsContainerClass }, children))));
};
exports.AnimatedDropdown = AnimatedDropdown;
exports.AnimatedDropdown.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    showChildren: prop_types_1.default.bool
};
//# sourceMappingURL=AnimatedDropdown.js.map

/***/ }),

/***/ 49115:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(96540));
const react_2 = __webpack_require__(96540);
const prop_types_1 = __importDefault(__webpack_require__(5556));
const analytics_1 = __webpack_require__(90090);
const track_component_1 = __webpack_require__(53499);
const styles_1 = __webpack_require__(77906);
const hooks_1 = __webpack_require__(37690);
const styles_2 = __webpack_require__(60090);
const styles_3 = __webpack_require__(79424);
const LargeChevron_1 = __importDefault(__webpack_require__(708));
const AnimatedDropdown_1 = __webpack_require__(48592);
const utils_1 = __webpack_require__(49938);
const RenderNavList = ({ navLinks, shouldEnableBundleComponentAnalytics, optionsRefs, trackingNamespace }) => navLinks.map(({ onClick, isActive, text, url, showOnlyInBreakpoints }, index) => {
    let analyticsDataAttribute = {};
    if (shouldEnableBundleComponentAnalytics) {
        analyticsDataAttribute = (0, analytics_1.componentTracking)(shouldEnableBundleComponentAnalytics, trackingNamespace, index);
    }
    return (react_1.default.createElement(styles_3.NavListItem, { ...analyticsDataAttribute, key: text, isSlim: true, isActive: isActive, showOnlyInBreakpoints: showOnlyInBreakpoints },
        react_1.default.createElement(styles_3.NavLink, { ref: (el) => {
                optionsRefs.current[index] = el;
            }, tabIndex: "0", role: "link", href: url, onClick: onClick, isActive: isActive },
            react_1.default.createElement("span", null, text))));
});
const CHEVRON_ICON_SIZE = { width: 12, height: 7 };
/**
 * DropdownNavigation
 * A list of navigational items
 *
 * @param {object} props - React props
 * @param {string} [props.className] - Optional additional class to add to wrapper
 * @param {Array} props.links - Navigation items
 * @param {boolean} [props.shouldEnableBundleComponentAnalytics] - Optional feature flag to append data-section-title attribute for analytics
 * @param {string} props.trackingNamespace - Tracking namespace
 */
const DropdownNavigation = ({ links, shouldEnableBundleComponentAnalytics, trackingNamespace, className }) => {
    const toggleRef = (0, react_2.useRef)(null);
    const listBoxRef = (0, react_2.useRef)(null);
    const optionsRefs = (0, react_2.useRef)([]);
    const [state, dispatch] = (0, hooks_1.useSelectReducer)();
    const { onSelectOpen } = (0, hooks_1.useCallbacks)(state, dispatch, listBoxRef, optionsRefs);
    react_1.default.useEffect(() => {
        window.Kendra.TRACK_COMPONENT.broadcast(track_component_1.TrackComponentChannel.RENDER, {
            name: 'DropdownNavigation'
        });
    }, []);
    if (!links?.length)
        return null;
    const navButton = links.find((link) => link.isActive) || links[0];
    const navLinks = navButton === links[0] ? links.slice(1) : links;
    const chevronClass = state.isOpen ? 'opened-chevron' : '';
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
        }
    };
    return (react_1.default.createElement(styles_2.NavWrapper, { "data-testid": "DropdownNavigation", className: className },
        react_1.default.createElement(styles_1.NavigationDropdownButton, { ref: toggleRef, "aria-expanded": state.isOpen, "aria-haspopup": "true", onClick: onSelectOpen },
            react_1.default.createElement("span", { onClick: (e) => (0, utils_1.trackSnowplowEvent)(e, 'sub_header_menu_toggle'), onKeyDown: handleKeyDown, tabIndex: "0", role: "link" },
                react_1.default.createElement(styles_3.NavLink, { tabIndex: "0", role: "link", href: navButton.url },
                    react_1.default.createElement("span", null, navButton.text))),
            react_1.default.createElement("span", { "aria-hidden": "true", className: chevronClass, onClick: (e) => (0, utils_1.trackSnowplowEvent)(e, 'sub_header_menu_toggle') },
                react_1.default.createElement(LargeChevron_1.default, { ...CHEVRON_ICON_SIZE }))),
        react_1.default.createElement(AnimatedDropdown_1.AnimatedDropdown, { showChildren: state.isOpen },
            react_1.default.createElement(styles_2.NavDropdownWrapper, { ref: listBoxRef, role: "menu", onClick: (e) => (0, utils_1.trackSnowplowEvent)(e, 'sub_header_menu_dropdown') },
                react_1.default.createElement(RenderNavList, { navLinks: navLinks, shouldEnableBundleComponentAnalytics: !!shouldEnableBundleComponentAnalytics, optionsRefs: optionsRefs, trackingNamespace: trackingNamespace })))));
};
DropdownNavigation.propTypes = {
    className: prop_types_1.default.string,
    links: prop_types_1.default.array.isRequired,
    shouldEnableBundleComponentAnalytics: prop_types_1.default.bool,
    trackingNamespace: prop_types_1.default.string.isRequired
};
DropdownNavigation.displayName = 'DropdownNavigation';
exports["default"] = DropdownNavigation;
//# sourceMappingURL=DropdownNavigation.js.map

/***/ }),

/***/ 6662:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const DropdownNavigation_1 = __importDefault(__webpack_require__(49115));
exports["default"] = DropdownNavigation_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 60090:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NavDropdownWrapper = exports.NavWrapper = void 0;
// Dropdown styles
const styled_components_1 = __importDefault(__webpack_require__(92168));
const utils_1 = __webpack_require__(26865);
const utils_2 = __webpack_require__(70698);
const constants_1 = __webpack_require__(5002);
exports.NavWrapper = styled_components_1.default.div.withConfig({ displayName: 'NavWrapper' }) `
  display: none;
  position: relative;
  z-index: 1;
  border-width: 1px 0;
  border-style: solid;
  ${({ theme }) => (0, utils_1.getColorStyles)(theme, 'border-color', 'colors.foundation.menu.dividers')};
  width: 100%;

  button {
    padding-left: ${(0, utils_1.calculateSpacing)(3)};
    height: 48px;

    a {
      pointer-events: none;
    }
  }

  svg,
  button a span {
    ${({ theme }) => (0, utils_1.getColorStyles)(theme, 'color', (0, utils_2.resolveMenuKey)(theme, 'colors.foundation.collapsed-menu.nav-link.hover'))};
  }

  svg {
    transition: transform 0.2s linear;
    stroke: ${(0, utils_1.getColorToken)('colors.foundation.collapsed-menu.nav-link.hover')};
    stroke-width: 6px;
  }

  .opened-chevron svg {
    transform: rotate(180deg);
  }

  @media (max-width: ${constants_1.SUBNAVIGATIONBREAKPOINT}) {
    display: block;
  }
`;
exports.NavDropdownWrapper = styled_components_1.default.ul.withConfig({
    displayName: 'NavDropdownWrapper'
}) `
  ${({ theme }) => (0, utils_1.getColorStyles)(theme, 'background-color', (0, utils_2.resolveMenuKey)(theme, 'colors.foundation.menu-bg.expanded'))};

  margin: 0;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 0 ${(0, utils_1.calculateSpacing)(3)};

  @media (max-width: ${constants_1.SUBNAVIGATIONBREAKPOINT}) {
    li:first-child,
    li + li {
      margin-left: ${(0, utils_1.calculateSpacing)(1.5)};

      &::before {
        bottom: unset;
        left: -${(0, utils_1.calculateSpacing)(1.5)};
        width: 4px;
        height: 100%;
      }
    }
  }
`;
//# sourceMappingURL=styles.js.map

/***/ })

}]);

