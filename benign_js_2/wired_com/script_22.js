/* 元のURL: https://wired.com */
// 外部JS: https://wired.com/verso/static/1747.905ebbf722bd901ffd19.js
"use strict";
(globalThis["webpackChunkverso"] = globalThis["webpackChunkverso"] || []).push([[1747],{

/***/ 1980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ComponentContext: () => (/* reexport */ ComponentContext),
  ComponentProvider: () => (/* reexport */ ComponentProvider),
  Slice: () => (/* reexport */ Slice),
  "default": () => (/* binding */ Text),
  useDataSet: () => (/* reexport */ useDataSet)
});

;// ./node_modules/@atjson/util/dist/modules/index.js
const BLOCK_MARKER = "\uFFFC";
const ROOT = "root";
const TEXT = "text";
var TokenType;
(function (TokenType) {
    TokenType["SLICE_START"] = "start";
    TokenType["SLICE_END"] = "end";
})(TokenType || (TokenType = {}));
function compareIds(a, b) {
    if (a.id === b.id)
        return 0;
    if (a.id < b.id)
        return -1;
    return 1;
}
function compareSliceTokens(a, b) {
    let indexDelta = a.index - b.index;
    if (indexDelta !== 0) {
        return indexDelta;
    }
    if (a.id === b.id) {
        return a.type === TokenType.SLICE_START ? -1 : 1;
    }
    if (a.type === TokenType.SLICE_END && b.type === TokenType.SLICE_START) {
        return -1;
    }
    else if (a.type === TokenType.SLICE_START &&
        b.type === TokenType.SLICE_END) {
        return 1;
    }
    if (a.type === TokenType.SLICE_START && b.type === TokenType.SLICE_START) {
        let endDelta = a.mark.end - b.mark.end;
        if (endDelta === 0) {
            return compareIds(a, b);
        }
        return -endDelta;
    }
    if (a.type === TokenType.SLICE_END && b.type === TokenType.SLICE_END) {
        let startDelta = a.mark.start - b.mark.start;
        if (startDelta === 0) {
            return -compareIds(a, b);
        }
        return -startDelta;
    }
    return 0;
}
function compareRanges([start1, end1], [start2, end2]) {
    if (start1 === start2) {
        return end1 - end2;
    }
    return start1 - start2;
}
function extractSlices(value) {
    let marksWithoutSlices = [];
    let tokens = [];
    for (let i = 0, len = value.marks.length; i < len; i++) {
        let mark = value.marks[i];
        let match = mark.range.match(/([[|(])(\d+)\.\.(\d+)([\]|)])/);
        if (match == null) {
            throw new Error(`Malformed range ${mark.range}`);
        }
        let start = parseInt(match[2]);
        let end = parseInt(match[3]);
        if (mark.type === "slice") {
            let slice = {
                start,
                end,
                ...mark,
            };
            let ranges = [[start, end]];
            tokens.push({
                type: TokenType.SLICE_START,
                id: mark.id,
                index: start,
                mark: slice,
                ranges,
            }, {
                type: TokenType.SLICE_END,
                id: slice.id,
                index: end,
                mark: slice,
                ranges,
            });
        }
        else {
            marksWithoutSlices.push({
                start,
                end,
                ...mark,
            });
        }
    }
    tokens.sort(compareSliceTokens);
    let sliceMap = new Map();
    let blockBoundaryPositions = [];
    let blockIndex = value.text.indexOf(BLOCK_MARKER);
    while (blockIndex !== -1) {
        blockBoundaryPositions.push(blockIndex);
        blockIndex = value.text.indexOf(BLOCK_MARKER, blockIndex + 1);
    }
    blockBoundaryPositions.push(value.text.length);
    let rangesToDelete = [];
    let stack = [];
    for (let i = 0, len = tokens.length; i < len; i++) {
        let token = tokens[i];
        switch (token.type) {
            case TokenType.SLICE_START: {
                let currentSlice = stack[stack.length - 1];
                if (currentSlice && !token.mark.attributes.retain) {
                    let currentSliceRanges = currentSlice.ranges;
                    let [start, end] = currentSliceRanges.pop();
                    currentSliceRanges.push([start, token.index], [token.index, end]);
                }
                stack.push(token);
                continue;
            }
            case TokenType.SLICE_END: {
                stack.pop();
                let currentSlice = stack[stack.length - 1];
                if (currentSlice &&
                    currentSlice.id !== token.id &&
                    !token.mark.attributes.retain) {
                    let currentSliceRanges = currentSlice.ranges;
                    let [, end] = currentSliceRanges.pop();
                    currentSliceRanges.push([token.index, end]);
                }
                continue;
            }
        }
    }
    tokens = tokens.filter((token) => token.type === TokenType.SLICE_START);
    for (let i = 0, len = tokens.length; i < len; i++) {
        let token = tokens[i];
        let text = "";
        let blocks = [];
        let marks = [];
        for (let t = 0, tlen = token.ranges.length; t < tlen; t++) {
            let [start, end] = token.ranges[t];
            text += value.text.slice(start, end);
            let parentIndex = 0;
            for (let j = 0, jlen = blockBoundaryPositions.length; j < jlen; j++) {
                let position = blockBoundaryPositions[j];
                if (position < start) {
                    continue;
                }
                else if (position + 1 <= end) {
                    let block = value.blocks[j];
                    if (blocks.length === 0) {
                        parentIndex = block.parents.length;
                    }
                    blocks.push({
                        ...block,
                        id: `${token.id}-${block.id}`,
                        parents: block.parents.slice(parentIndex),
                    });
                }
                else {
                    break;
                }
            }
            let offset = 0;
            if (blocks.length === 0 && t === 0) {
                offset = 1;
                text = `${BLOCK_MARKER}${text}`;
                blocks.push({
                    id: `${TEXT}-${token.id}`,
                    type: TEXT,
                    parents: [],
                    selfClosing: false,
                    attributes: {},
                });
            }
            for (let j = 0, jlen = marksWithoutSlices.length; j < jlen; j++) {
                let mark = marksWithoutSlices[j];
                if (mark.start >= start &&
                    mark.start <= end &&
                    mark.end >= start &&
                    mark.end <= end) {
                    let adjustedStart = Math.max(mark.start - start, 0) + offset;
                    let adjustedEnd = Math.min(mark.end - start, end - start) + offset;
                    let range = `${mark.range[0]}${adjustedStart}..${adjustedEnd}${mark.range[mark.range.length - 1]}`;
                    marks.push({
                        ...mark,
                        id: `${token.id}-${mark.id}`,
                        range,
                        start: adjustedStart,
                        end: adjustedEnd,
                    });
                }
            }
            if (token.mark.attributes.retain) {
                continue;
            }
            let isRangeInserted = false;
            for (let j = 0, jlen = rangesToDelete.length; j < jlen; j++) {
                let rangeToDelete = rangesToDelete[j];
                if (start >= rangeToDelete[0] && start <= rangeToDelete[1]) {
                    rangeToDelete[1] = Math.max(rangeToDelete[1], end);
                    isRangeInserted = true;
                }
                else if (end >= rangeToDelete[0] && end <= rangeToDelete[1]) {
                    rangeToDelete[0] = Math.min(rangeToDelete[0], start);
                    isRangeInserted = true;
                }
            }
            if (!isRangeInserted) {
                rangesToDelete.push([start, end]);
            }
        }
        sliceMap.set(token.id, {
            text,
            marks,
            blocks,
        });
    }
    if (rangesToDelete.length > 1) {
        const normalizedRanges = [rangesToDelete[0]];
        rangesToDelete.sort(compareRanges);
        for (let j = 1, lastRange = rangesToDelete[0]; j < rangesToDelete.length; j++) {
            const currentRange = rangesToDelete[j];
            if (currentRange[0] <= lastRange[1] && lastRange[1] <= currentRange[1]) {
                lastRange[1] = currentRange[1];
            }
            else {
                normalizedRanges.push(currentRange);
                lastRange = currentRange;
            }
        }
        rangesToDelete = normalizedRanges;
    }
    let firstRange = rangesToDelete[0];
    let text = firstRange ? value.text.slice(0, firstRange[0]) : "";
    let lastEnd = firstRange ? firstRange[1] : 0;
    for (let i = 0, len = rangesToDelete.length; i < len - 1; i++) {
        text += value.text.slice(rangesToDelete[i][1], rangesToDelete[i + 1][0]);
        lastEnd = rangesToDelete[i + 1][1];
    }
    text = text + value.text.slice(lastEnd);
    let marks = [];
    for (let mark of marksWithoutSlices) {
        let isKept = true;
        let startOffset = 0;
        let endOffset = 0;
        for (let range of rangesToDelete) {
            if (mark.start >= range[0] && mark.end <= range[1]) {
                isKept = false;
                break;
            }
            if (mark.start >= range[0] && mark.start <= range[1]) {
                startOffset += mark.start - range[0];
            }
            else if (mark.start > range[1]) {
                startOffset += range[1] - range[0];
            }
            if (mark.end >= range[0] && mark.end <= range[1]) {
                endOffset += mark.end - range[0];
            }
            else if (mark.end > range[1]) {
                endOffset += range[1] - range[0];
            }
        }
        if (isKept) {
            let start = mark.start - startOffset;
            let end = mark.end - endOffset;
            marks.push({
                ...mark,
                start,
                end,
                range: `${mark.range[0]}${start}..${end}${mark.range[mark.range.length - 1]}`,
            });
        }
    }
    let blocks = [];
    for (let i = 0, len = blockBoundaryPositions.length; i < len; i++) {
        let position = blockBoundaryPositions[i];
        let isKept = true;
        for (let range of rangesToDelete) {
            isKept = isKept && !(position >= range[0] && position + 1 <= range[1]);
        }
        if (isKept && value.blocks[i]) {
            blocks.push(value.blocks[i]);
        }
    }
    return [
        {
            text,
            marks,
            blocks,
        },
        sliceMap,
    ];
}
function createTree(value) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    let chunks = ((_a = value === null || value === void 0 ? void 0 : value.text) !== null && _a !== void 0 ? _a : "").split(BLOCK_MARKER);
    let blocks = (_b = value === null || value === void 0 ? void 0 : value.blocks) !== null && _b !== void 0 ? _b : [];
    let marks = (_c = value === null || value === void 0 ? void 0 : value.marks) !== null && _c !== void 0 ? _c : [];
    let tree = new Map();
    tree.set(ROOT, []);
    let stack = [];
    let blockStart = 1;
    for (let i = 0, len = blocks.length; i < len; i++) {
        let block = blocks[i];
        let chunk = chunks[i + 1];
        let text = chunk.length ? [chunk] : [];
        let blockEnd = blockStart + chunk.length;
        while (block.parents.length < stack.length) {
            stack.pop();
        }
        let parentId = (_e = (_d = stack[stack.length - 1]) === null || _d === void 0 ? void 0 : _d.id) !== null && _e !== void 0 ? _e : ROOT;
        let blockId = block.selfClosing || block.type === TEXT ? parentId : block.id;
        let parent = (_f = tree.get(parentId)) !== null && _f !== void 0 ? _f : [];
        tree.set(parentId, parent);
        if (block.type !== TEXT) {
            parent.push(block);
        }
        if (tree.get(blockId) == null) {
            tree.set(blockId, []);
        }
        let nextBlock = blocks[i + 1];
        while (nextBlock &&
            nextBlock.selfClosing &&
            nextBlock.parents[nextBlock.parents.length - 1] === block.type) {
            text.push(nextBlock);
            i++;
            chunk = chunks[i + 1];
            blockEnd += 1 + chunk.length;
            if (chunk.length) {
                text.push(chunk);
            }
            nextBlock = blocks[i + 1];
        }
        let scopedMarks = [];
        for (let j = 0, jlen = marks.length; j < jlen; j++) {
            let mark = marks[j];
            if ((mark.start >= blockStart && mark.start <= blockEnd) ||
                (mark.end >= blockStart && mark.end <= blockEnd)) {
                scopedMarks.push(mark);
            }
        }
        if (scopedMarks.length === 0) {
            (_g = tree.get(blockId)) === null || _g === void 0 ? void 0 : _g.push(...text);
        }
        else {
            let indexes = [];
            for (let i = 0, len = scopedMarks.length; i < len; i++) {
                let { start, end } = scopedMarks[i];
                start = Math.max(blockStart, start);
                end = Math.min(blockEnd, end);
                if (indexes.indexOf(start) === -1) {
                    indexes.push(start);
                }
                if (indexes.indexOf(end) === -1) {
                    indexes.push(end);
                }
            }
            indexes.sort((a, b) => a - b);
            let start = blockStart;
            let consumedTextLength = 0;
            let markStack = [];
            for (let i = 0, len = indexes.length; i < len; i++) {
                let end = indexes[i];
                if (start == end && blockEnd !== start)
                    continue;
                let startingMarks = scopedMarks
                    .filter((mark) => Math.max(mark.start, blockStart) === start &&
                    mark.end > mark.start)
                    .sort((a, b) => b.end - a.end);
                let closingMarks = scopedMarks.filter((mark) => Math.min(mark.end, blockEnd) === end);
                markStack.push(...startingMarks);
                let parentId = blockId;
                for (let i = 0, len = markStack.length; i < len; i++) {
                    let mark = markStack[i];
                    let id = parentId === ROOT ? mark.id : `${parentId}-${mark.id}`;
                    let parent = (_h = tree.get(parentId)) !== null && _h !== void 0 ? _h : [];
                    let isInserted = false;
                    for (let j = 0, jlen = parent.length; j < jlen; j++) {
                        let node = parent[j];
                        isInserted =
                            isInserted || (typeof node !== "string" && node.id === id);
                    }
                    if (!isInserted) {
                        (_j = tree.get(parentId)) === null || _j === void 0 ? void 0 : _j.push({
                            ...mark,
                            id,
                        });
                    }
                    parentId = id;
                    if (tree.get(parentId) == null) {
                        tree.set(parentId, []);
                    }
                }
                let markEnd = end - blockStart;
                while (consumedTextLength < markEnd) {
                    let part = text.shift();
                    if (part == null)
                        break;
                    if (typeof part === "string") {
                        if (part.length > markEnd - consumedTextLength) {
                            (_k = tree
                                .get(parentId)) === null || _k === void 0 ? void 0 : _k.push(part.slice(0, markEnd - consumedTextLength));
                            text.unshift(part.slice(markEnd - consumedTextLength));
                            consumedTextLength = markEnd;
                        }
                        else {
                            (_l = tree.get(parentId)) === null || _l === void 0 ? void 0 : _l.push(part);
                            consumedTextLength += part.length;
                        }
                    }
                    else {
                        (_m = tree.get(parentId)) === null || _m === void 0 ? void 0 : _m.push(part);
                        consumedTextLength++;
                    }
                }
                for (let closingMark of closingMarks) {
                    let index = markStack.indexOf(closingMark);
                    if (index === -1) {
                        (_o = tree.get(parentId)) === null || _o === void 0 ? void 0 : _o.push(closingMark);
                        tree.set(closingMark.id, []);
                    }
                    else {
                        markStack.splice(index, 1);
                    }
                }
                start = end;
            }
            (_p = tree.get(blockId)) === null || _p === void 0 ? void 0 : _p.push(...text);
        }
        if (!block.selfClosing && block.type !== TEXT) {
            stack.push(block);
        }
        blockStart = blockEnd + 1;
    }
    return tree;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NBLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUM7QUFRckMsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUszQixNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBRTNCLE1BQU0sQ0FBTixJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDbkIsa0NBQXFCLENBQUE7SUFDckIsOEJBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLFNBQVMsS0FBVCxTQUFTLFFBR3BCO0FBaUJELFNBQVMsVUFBVSxDQUFDLENBQWdCLEVBQUUsQ0FBZ0I7SUFDcEQsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUIsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzQixPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsQ0FBZ0IsRUFBRSxDQUFnQjtJQUNuRSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkMsSUFBSSxVQUFVLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDckIsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQU1ELElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDbEIsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUdELElBQUksQ0FBQyxDQUFD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
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@atjson/react/dist/modules/contexts/Component.js

const DEFAULT_CONTEXT = {
    keyOf: (blockOrMark) => blockOrMark.type,
    blocks: {},
    marks: {},
};
const ComponentContext = (0,react.createContext)(DEFAULT_CONTEXT);
function ComponentProvider(props) {
    return (0,react.createElement)(ComponentContext.Consumer, {
        children(parent) {
            var _a;
            return (0,react.createElement)(ComponentContext.Provider, {
                value: {
                    keyOf: (_a = props.value.keyOf) !== null && _a !== void 0 ? _a : parent.keyOf,
                    blocks: props.value.blocks
                        ? {
                            ...parent.blocks,
                            ...props.value.blocks,
                        }
                        : parent.blocks,
                    marks: props.value.marks
                        ? {
                            ...parent.marks,
                            ...props.value.marks,
                        }
                        : parent.marks,
                },
            }, props.children);
        },
    });
}
ComponentProvider.displayName = "ComponentProvider";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRleHRzL0NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBNEIsTUFBTSxPQUFPLENBQUM7QUFFL0UsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHO0lBQzdCLEtBQUssRUFBRSxDQUFDLFdBQWlDLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJO0lBQzlELE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsYUFBYSxDQUkxQyxlQUFlLENBQUMsQ0FBQztBQUVwQixNQUFNLFVBQVUsaUJBQWlCLENBQUMsS0FPakM7SUFDQyxPQUFPLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7UUFDOUMsUUFBUSxDQUFDLE1BQU07O1lBQ2IsT0FBTyxhQUFhLENBQ2xCLGdCQUFnQixDQUFDLFFBQVEsRUFDekI7Z0JBQ0UsS0FBSyxFQUFFO29CQUNMLEtBQUssRUFBRSxNQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxtQ0FBSSxNQUFNLENBQUMsS0FBSztvQkFDeEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTTt3QkFDeEIsQ0FBQyxDQUFDOzRCQUNFLEdBQUcsTUFBTSxDQUFDLE1BQU07NEJBQ2hCLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNO3lCQUN0Qjt3QkFDSCxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU07b0JBQ2pCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUs7d0JBQ3RCLENBQUMsQ0FBQzs0QkFDRSxHQUFHLE1BQU0sQ0FBQyxLQUFLOzRCQUNmLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLO3lCQUNyQjt3QkFDSCxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7aUJBQ2pCO2FBQ0YsRUFDRCxLQUFLLENBQUMsUUFBUSxDQUNmLENBQUM7UUFDSixDQUFDO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUNELGlCQUFpQixDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyJ9
;// ./node_modules/@atjson/react/dist/modules/contexts/Slice.js

const SliceContext = (0,react.createContext)(new Map());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udGV4dHMvU2xpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUd0QyxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsYUFBYSxDQUN2QyxJQUFJLEdBQUcsRUFBb0UsQ0FDNUUsQ0FBQyJ9
;// ./node_modules/@atjson/react/dist/modules/contexts/index.js


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udGV4dHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxhQUFhLENBQUM7QUFDNUIsY0FBYyxTQUFTLENBQUMifQ==
;// ./node_modules/@atjson/react/dist/modules/components/Node.js


function Node(props) {
    let context = (0,react.useContext)(ComponentContext);
    if (context === DEFAULT_CONTEXT) {
        throw new Error("Component map is empty. Did you wrap your render call in ComponentProvider?");
    }
    let Component = (0,react.useMemo)(() => {
        var _a;
        let key = context.keyOf(props.value);
        return ((_a = ("start" in props.value ? context.marks[key] : context.blocks[key])) !== null && _a !== void 0 ? _a : react.Fragment);
    }, [props.map, props.value]);
    let children = (0,react.useMemo)(() => { var _a; return (_a = props.map.get(props.value.id)) !== null && _a !== void 0 ? _a : []; }, [props.map, props.value]);
    let attributes = Component ? props.value.attributes : {};
    if (props.value.selfClosing) {
        return (0,react.createElement)(react.Fragment, {}, (0,react.createElement)(Component, attributes), ...children.map((child) => {
            if (typeof child === "string") {
                return child;
            }
            return (0,react.createElement)(Node, {
                value: child,
                key: child.id,
                map: props.map,
            });
        }));
    }
    if (children.every((child) => typeof child === "string")) {
        return (0,react.createElement)(Component, attributes, children.join(""));
    }
    if (children.length > 0) {
        return (0,react.createElement)(Component, { key: props.value.id, ...attributes }, ...children.map((child) => {
            if (typeof child === "string") {
                return child;
            }
            return (0,react.createElement)(Node, {
                value: child,
                key: child.id,
                map: props.map,
            });
        }));
    }
    else {
        return (0,react.createElement)(Component, { attributes });
    }
}
Node.displayName = "Node";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUdyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBV2hFLE1BQU0sVUFBVSxJQUFJLENBQUMsS0FHcEI7SUFDQyxJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzQyxJQUFJLE9BQU8sS0FBSyxlQUFlLEVBQUUsQ0FBQztRQUNoQyxNQUFNLElBQUksS0FBSyxDQUNiLDZFQUE2RSxDQUM5RSxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUU7O1FBQzNCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FDTCxNQUFBLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsbUNBQ25FLFFBQVEsQ0FDVCxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQ3BCLEdBQUcsRUFBRSxXQUFDLE9BQUEsTUFBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxtQ0FBSSxFQUFFLENBQUEsRUFBQSxFQUN6QyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUN6QixDQUFDO0lBQ0YsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBR3pELElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixPQUFPLGFBQWEsQ0FDbEIsUUFBUSxFQUNSLEVBQUUsRUFDRixhQUFhLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxFQUNwQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN4QixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO2dCQUM5QixPQUFPLEtBQUssQ0FBQztZQUNmLENBQUM7WUFDRCxPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pCLEtBQUssRUFBRSxLQUFLO2dCQUNaLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRTtnQkFDYixHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7YUFDZixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUlELElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN6RCxPQUFPLGFBQWEsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sYUFBYSxDQUNsQixTQUFTLEVBQ1QsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxVQUFVLEVBQUUsRUFDdEMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUUsQ0FBQztnQkFDOUIsT0FBTyxLQUFLLENBQUM7WUFDZixDQUFDO1lBQ0QsT0FBTyxhQUFhLENBQUMsSUFBSSxFQUFFO2dCQUN6QixLQUFLLEVBQUUsS0FBSztnQkFDWixHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQ2IsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO2FBQ2YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxhQUFhLENBQUMsU0FBUyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0FBQ0gsQ0FBQztBQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDIn0=
;// ./node_modules/@atjson/react/dist/modules/components/Slice.js




function Slice(props) {
    let { value, fallback } = props;
    let slices = (0,react.useContext)(SliceContext);
    let tree = (0,react.useMemo)(() => (value ? createTree(slices.get(value)) : null), [value]);
    let children = (0,react.useMemo)(() => {
        var _a;
        if (tree && tree.has(ROOT)) {
            return (_a = tree.get(ROOT)) !== null && _a !== void 0 ? _a : [""];
        }
        return [""];
    }, [tree]);
    if (tree) {
        return (0,react.createElement)(react.Fragment, {}, children.map((child) => {
            if (typeof child === "string") {
                return child;
            }
            return (0,react.createElement)(Node, { value: child, map: tree });
        }));
    }
    else {
        return (0,react.createElement)(react.Fragment, {}, fallback);
    }
}
Slice.displayName = "Slice";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9TbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQWEzQyxNQUFNLFVBQVUsS0FBSyxDQUFDLEtBR3JCO0lBQ0MsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDaEMsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FDaEIsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUNwRCxDQUFDLEtBQUssQ0FBQyxDQUNSLENBQUM7SUFFRixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFOztRQUMxQixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDM0IsT0FBTyxNQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1DQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNELE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNkLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFWCxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ1QsT0FBTyxhQUFhLENBQ2xCLFFBQVEsRUFDUixFQUFFLEVBQ0YsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3JCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQzlCLE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQztZQUNELE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUssRUFBRSxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0FBQ0gsQ0FBQztBQUNELEtBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDIn0=
;// ./node_modules/@atjson/react/dist/modules/components/index.js


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLFFBQVEsQ0FBQztBQUN2QixjQUFjLFNBQVMsQ0FBQyJ9
;// ./node_modules/@atjson/react/dist/modules/contexts/DataSet.js

const DataSetContext = (0,react.createContext)(new Map());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0cy9EYXRhU2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFRdEMsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLGFBQWEsQ0FBQyxJQUFJLEdBQUcsRUFBd0IsQ0FBQyxDQUFDIn0=
;// ./node_modules/@atjson/react/dist/modules/hooks/useDataSet.js


function useDataSet(dataSetId) {
    return (0,react.useContext)(DataSetContext).get(dataSetId);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlRGF0YVNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ob29rcy91c2VEYXRhU2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDbkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXJELE1BQU0sVUFBVSxVQUFVLENBQUMsU0FBaUI7SUFDMUMsT0FBTyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25ELENBQUMifQ==
;// ./node_modules/@atjson/react/dist/modules/index.js







function Text(props) {
    let [tree, slices, dataSets] = (0,react.useMemo)(() => {
        var _a, _b;
        let [doc, slices] = extractSlices({
            text: props.value.text,
            blocks: (_a = props.value.blocks) !== null && _a !== void 0 ? _a : [],
            marks: (_b = props.value.marks) !== null && _b !== void 0 ? _b : [],
        });
        let dataSets = new Map(doc.blocks
            .filter((block) => block.type === "data-set")
            .map((dataSet) => [dataSet.id, dataSet.attributes]));
        return [createTree(doc), slices, dataSets];
    }, [props.value]);
    let children = (0,react.useMemo)(() => {
        var _a;
        if (tree.has(ROOT)) {
            return (_a = tree.get(ROOT)) !== null && _a !== void 0 ? _a : [""];
        }
        return [""];
    }, [tree]);
    return (0,react.createElement)(SliceContext.Provider, { value: slices }, (0,react.createElement)(DataSetContext.Provider, { value: dataSets }, (0,react.createElement)(react.Fragment, {}, children.map((child) => {
        if (typeof child === "string") {
            return child;
        }
        return (0,react.createElement)(Node, {
            value: child,
            map: tree,
            key: child.id,
        });
    }))));
}
Text.displayName = "Text";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDL0UsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQWdCLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUM7QUFFbEUsTUFBTSxDQUFDLE9BQU8sVUFBVSxJQUFJLENBQUMsS0FNNUI7SUFDQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFOztRQUMxQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQztZQUNoQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ3RCLE1BQU0sRUFBRSxNQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxtQ0FBSSxFQUFFO1lBQ2hDLEtBQUssRUFBRSxNQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxtQ0FBSSxFQUFFO1NBQy9CLENBQUMsQ0FBQztRQUVILElBQUksUUFBUSxHQUFHLElBQUksR0FBRyxDQUNwQixHQUFHLENBQUMsTUFBTTthQUNQLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7YUFDNUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLFVBQTBCLENBQUMsQ0FBQyxDQUN0RSxDQUFDO1FBQ0YsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFVLENBQUM7SUFDdEQsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFbEIsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRTs7UUFDMUIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDbkIsT0FBTyxNQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1DQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNELE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNkLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFWCxPQUFPLGFBQWEsQ0FDbEIsWUFBWSxDQUFDLFFBQVEsRUFDckIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ2pCLGFBQWEsQ0FDWCxjQUFjLENBQUMsUUFBUSxFQUN2QixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFDbkIsYUFBYSxDQUNYLFFBQVEsRUFDUixFQUFFLEVBQ0YsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ3JCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDOUIsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsT0FBTyxhQUFhLENBQUMsSUFBSSxFQUFFO1lBQ3pCLEtBQUssRUFBRSxLQUFLO1lBQ1osR0FBRyxFQUFFLElBQUk7WUFDVCxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUU7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FDSCxDQUNGLENBQ0YsQ0FBQztBQUNKLENBQUM7QUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyJ9

/***/ }),

/***/ 48823:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const filter_models_1 = __webpack_require__(24939);
const sort_models_1 = __webpack_require__(9517);
class ContentModel {
    // These values are used to do the fetch operation. They could be updated as of the fetch method argument
    // list, but this is a bit of a code smell as it makes the state of the fetch call ambiguous. So the fetch
    // iteself is argument-less by design. They MUST be updated with the setters.
    _pageNum = 1;
    _chunkSize = 0;
    // The filter model is injected to invert control to the parent object. Any filter model will do.
    _filterModel;
    // The filter model is injected to invert control to the parent object. Any filter model will do.
    _sortModel;
    // This callback triggers refresh in the components using the content model.
    _refreshCallback;
    // This variable indicate the load state may change soon and is everywhere in the CN code.
    _loading = false;
    // These values are pulled from the response body of the fetch call. Note that the content from the call is dumped
    // into the cache and not returned immediately.  This is to enable client-side filtering with partial information.
    // Note that this value will be ignored if the filtered cache count is larger.
    _totalCount = 0;
    // This "cache" is a very crude store for content. It is the weakest part of the model as cache invalidation never
    // happens, and cache "overflow" could potentialy happen.  However, for the current use cases the estimated content
    // size is small enough to fit comfortably on even small devices (e.g. phones).  Cache "invalidation" occurs only
    // when the ContentModel is garbage collected, which should be fairly frequently as most users will be constantly
    // navigating to new pages.
    _contentCache = {};
    _masterList = [];
    // =========== Constructor ==============================
    constructor(options, refreshCallback = () => null) {
        // Note the default values for all but sourceFunc.  SourceFunc and filterModel are mandatory.
        const { filterModel = new filter_models_1.NullFilterModel({}), sortModel = new sort_models_1.NullSortModel({}), initialData = [], chunkSize = 0, initialTotalCount = 0, } = options;
        this._filterModel = filterModel;
        this._sortModel = sortModel;
        this._refreshCallback = refreshCallback;
        this._chunkSize = chunkSize;
        // This works for flat filter models. There may need to be some enhancements for other model types.
        if (initialData)
            this._addToCache(initialData);
        if (initialTotalCount)
            this._totalCount = initialTotalCount;
    }
    // =========== Getters =========================
    get pageNum() {
        return this._pageNum;
    }
    get chunkSize() {
        return this._chunkSize;
    }
    get filterModel() {
        return this._filterModel;
    }
    get sortModel() {
        return this._sortModel;
    }
    get totalCount() {
        const computedCount = this._filterModel.filter(this._masterList).length;
        return Math.max(this._totalCount, computedCount);
    }
    get lastPage() {
        //  ChunkSize = 0 indicates infite page size, so there is only a page 1
        return this._chunkSize > 0
            ? Math.ceil(this.totalCount / this._chunkSize)
            : 1;
    }
    get loading() {
        return this._loading;
    }
    get cacheSize() {
        return Object.keys(this._contentCache).length;
    }
    // =========== Setters =========================
    set pageNum(p) {
        // validate
        if (typeof p !== "number") {
            console.log(`ERROR in content model - ${p} is not a valid number`);
        }
        // noop if no change
        if (p === this._pageNum)
            return;
        // wrap if needed.
        const lastP = this.lastPage; // note this is a getter function, not a static value
        if (p <= 0) {
            // opeator decremented too far; wrap to last page
            this._pageNum = lastP;
        }
        else if (p > lastP) {
            // operator incremented too far; wrap to first page
            this._pageNum = 1;
        }
        else {
            this._pageNum = p;
        }
        // trigger refresh
        this._refreshCallback();
    }
    set chunkSize(s) {
        // validate
        if (typeof s !== "number" || s < 0) {
            console.log(`ERROR in content model - ${s} is not a valid number`);
        }
        // if valid chunkSize...
        if (s >= 0) {
            this._chunkSize = s;
            // then trigger refresh
            this._refreshCallback();
        }
    }
    // ============ Public facing methods ============
    /*
      The asynchronous form query is approriate when the model may do a call for more data from a back end service.
      */
    async query() {
        try {
            const cacheResponse = this._cacheRetrieve();
            const clientResponse = { data: cacheResponse, error: undefined };
            if (clientResponse.data)
                this._totalCount = clientResponse.data.totalCount;
            return clientResponse;
        }
        catch (e) {
            console.log(e); // unknown errors
            return { data: undefined, error: e.toString() };
        }
    }
    /*
      The synchronous form "getContent" is approriate for situations where the data is already resident in the cache.
     */
    getContent() {
        return this._cacheRetrieve();
    }
    addContent(items) {
        this._loading = true;
        const count = this.cacheSize;
        this._addToCache(items);
        const newCount = this.cacheSize;
        if (count !== newCount) {
            // Items were added. Trigger refresh so the components can see the new data.
            this._refreshCallback();
        }
        return newCount;
    }
    // ========= Private helper methods ========================
    _addToCache(items) {
        // Overwrite older values in cache
        items.forEach((item) => {
            // ignore improperly formed content
            if (item.id) {
                return (this._contentCache[item.id] = item);
            }
        });
        // Generate a new master list from scratch (It is the safest way)
        const masterList = Object.keys(this._contentCache).map((key) => {
            const item = this._contentCache[key];
            return {
                id: key,
                sort: this._sortModel.extract(item),
                filter: this._filterModel.extract(item),
            };
        });
        this._masterList = this._sortModel.sort(masterList);
        this._loading = false;
    }
    _cacheRetrieve() {
        // This method attempts to pull a filtered, sorted page from the cache.
        // Note that the cache should be already sorted.  Filtering would be nice too, but
        // that would mean a secondary cache which would be inefficient.
        // Copy the master list with a filter pass.  Ideally this does not affect the sort.
        const filteredMetadata = this._filterModel.filter(this._masterList);
        // Check the sort.  This should be super fast as the master list sort should have been preserved
        const currentMetadata = this.sortModel.sort(filteredMetadata);
        // Get a good count of what is currently the total number of displayable items
        this._totalCount = currentMetadata.length;
        // Extract a chunk to display if the chunk parameter is set
        let responseArray = currentMetadata;
        if (this._chunkSize > 0) {
            const start = (this._pageNum - 1) * this._chunkSize;
            const finish = start + this._chunkSize;
            if (finish < this._totalCount - 1) {
                responseArray = currentMetadata.slice(start, finish);
            }
            else {
                responseArray = currentMetadata.slice(start);
            }
        }
        const response = {
            items: responseArray.map((m) => this._contentCache[m.id]),
            totalCount: this._totalCount,
        };
        return response;
    }
}
exports["default"] = ContentModel;
//# sourceMappingURL=content-model.js.map

/***/ }),

/***/ 64876:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const content_model_1 = __importDefault(__webpack_require__(48823));
const sort_models_1 = __webpack_require__(9517);
const filter_models_1 = __webpack_require__(24939);
function createContentModel({ filter = { type: "NullFilterModel" }, initial, refreshCallback, sort = { type: "NullSortModel" }, }) {
    try {
        // Setup a callback workflow for repaging to 1 on change
        let contentM;
        const repageCallback = () => (contentM.pageNum = 1);
        // Construct the sort model
        const sortM = (0, sort_models_1.createSortModel)({
            refreshCallback,
            repageCallback,
            ...sort,
        });
        if (!sortM || !(sortM.name === sort.type))
            throw new Error(`ERROR: SortModel ${sort.type} did not construct properly. Type = ${sortM.name}`);
        // Construct the filter model
        const filterM = (0, filter_models_1.createFilterModel)({
            refreshCallback,
            repageCallback,
            ...filter,
        });
        if (!filterM || !(filterM.name === filter.type))
            throw new Error(`ERROR: FilterModel ${filter.type} did not construct properly. Type = ${filterM.name}`);
        // Construct the content model.
        const items = initial?.items || [];
        const totalCount = initial?.totalCount || 0;
        const chunkSize = initial?.chunkSize || 24;
        const pageNum = initial?.pageNum || 1;
        contentM = new content_model_1.default({
            sortModel: sortM,
            filterModel: filterM,
            initialData: items,
            initialTotalCount: totalCount,
        }, refreshCallback);
        contentM.chunkSize = chunkSize;
        contentM.pageNum = pageNum;
        return contentM;
    }
    catch (err) {
        throw err;
    }
}
exports["default"] = createContentModel;
//# sourceMappingURL=create-content-model.js.map

/***/ }),

/***/ 41722:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContentModel = exports.createContentModel = void 0;
var create_content_model_1 = __webpack_require__(64876);
Object.defineProperty(exports, "createContentModel", ({ enumerable: true, get: function () { return __importDefault(create_content_model_1).default; } }));
var content_model_1 = __webpack_require__(48823);
Object.defineProperty(exports, "ContentModel", ({ enumerable: true, get: function () { return __importDefault(content_model_1).default; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 54842:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class BaseFilterModel {
    _name;
    _active;
    _options;
    _refreshCallback;
    _repageCallback;
    // =========== Constructors ==============================
    constructor(args) {
        if (!args)
            throw new Error("ERROR in filter model base class; arguments not provided");
        const { name, options, active, refreshCallback, repageCallback } = args;
        if (!name)
            throw new Error(`ERROR in filter model base class; name = ${name}`);
        this._name = name;
        this._active = active || {};
        this._options = options || {};
        this._refreshCallback = refreshCallback || function () { };
        this._repageCallback = repageCallback || function () { };
    }
    // =========== Getters =========================
    get name() {
        return this._name;
    }
    get active() {
        return { ...this._active };
    }
    get options() {
        return { ...this._options };
    }
    // =========== Setters =========================
    // Note that FIlterActive can be any object. The FilterActive interface is just a suggestion.
    set active(active) {
        this._active = { ...this._active, ...active };
        this._repageCallback();
        this._refreshCallback();
    }
    // Note that FilterOptions can be any object.  The FilterOptions interface is just a suggestion.
    set options(options) {
        this._options = { ...this._options, ...options };
        this._repageCallback();
        this._refreshCallback();
    }
    // ========= Public methods ========================
    // These are noop because the base class should never be run.
    extract(item) {
        return [];
    }
    filter(metadataArray) {
        return metadataArray;
    }
}
exports["default"] = BaseFilterModel;
//# sourceMappingURL=_base-filter-model.js.map

/***/ }),

/***/ 84038:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const flat_filter_model_1 = __importDefault(__webpack_require__(71979));
const flexible_filter_model_1 = __importDefault(__webpack_require__(94743));
const null_filter_model_1 = __importDefault(__webpack_require__(3357));
function createFilterModel({ type, setup = { active: {}, options: {} }, refreshCallback = () => null, repageCallback = () => null, }) {
    switch (type) {
        case "FlatFilterModel":
            return new flat_filter_model_1.default({ refreshCallback, repageCallback, ...setup });
        case "FlexibleFilterModel":
            return new flexible_filter_model_1.default({
                refreshCallback,
                repageCallback,
                ...setup,
            });
        case "NullFilterModel":
            return new null_filter_model_1.default({
                refreshCallback,
                repageCallback,
            });
        default:
            throw Error(`ERROR: Unknown filter type=${type}`);
    }
}
exports["default"] = createFilterModel;
//# sourceMappingURL=create-filter-model.js.map

/***/ }),

/***/ 71979:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const _base_filter_model_1 = __importDefault(__webpack_require__(54842));
class FlatFilterModel extends _base_filter_model_1.default {
    constructor({ options, active, refreshCallback, repageCallback, }) {
        super({
            name: "FlatFilterModel",
            options,
            active,
            refreshCallback,
            repageCallback,
        });
    }
    extract(item) {
        return { attr: item.attr || [] };
    }
    filter(metadataArray) {
        const { filterWith = [] } = this.active;
        return metadataArray.filter((item) => {
            const { attr = [] } = item.filter;
            return filterWith.reduce((passes, filter) => {
                return passes && attr.includes(filter);
            }, true);
        });
    }
}
exports["default"] = FlatFilterModel;
//# sourceMappingURL=flat-filter-model.js.map

/***/ }),

/***/ 94743:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const _base_filter_model_1 = __importDefault(__webpack_require__(54842));
const flexible_policy_satisfiers_1 = __webpack_require__(41634);
class FlexibleFilterModel extends _base_filter_model_1.default {
    constructor({ options, active, refreshCallback, repageCallback, }) {
        super({
            name: "FlexibleFilterModel",
            options,
            active,
            refreshCallback,
            repageCallback,
        });
    }
    extract(item) {
        const { categories = [] } = this.options;
        const filterAttributes = {};
        categories.forEach(({ categoryId }) => {
            const attrSet = item[categoryId];
            filterAttributes[categoryId] = Array.isArray(attrSet)
                ? attrSet
                : [attrSet];
        });
        return filterAttributes;
    }
    filter(metadataArray) {
        try {
            // Assemble the filter policy from the active filter set and the config for the groups
            const { filterWith = [] } = this.active;
            const { crossLogic = "AND", categories = [] } = this.options;
            // This step converts the potential policy in options to an actual policy by including
            // only the active filters in each category.
            const policy = categories.map(({ categoryId, logic, filters }) => {
                const activeFilters = [];
                filters.forEach(({ value }) => {
                    if (filterWith.includes(value))
                        activeFilters.push(value);
                });
                return { categoryId, filters: activeFilters, logic };
            });
            // Use the policy to filter the item metadata representations one by one.
            switch (crossLogic) {
                case "AND":
                    return metadataArray.filter(({ filter: itemAttributes }) => (0, flexible_policy_satisfiers_1.flexibleAndSatisfier)(itemAttributes, policy));
                case "OR":
                    return metadataArray.filter(({ filter: itemAttributes }) => (0, flexible_policy_satisfiers_1.flexibleOrSatisfier)(itemAttributes, policy));
                default:
                    throw new Error("Unknown cross logic in flexible filter model");
            }
        }
        catch (err) {
            console.log(err);
            return [];
        }
    }
}
exports["default"] = FlexibleFilterModel;
//# sourceMappingURL=flexible-filter-model.js.map

/***/ }),

/***/ 24939:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NullFilterModel = exports.FlexibleFilterModel = exports.FlatFilterModel = exports.createFilterModel = void 0;
var create_filter_model_1 = __webpack_require__(84038);
Object.defineProperty(exports, "createFilterModel", ({ enumerable: true, get: function () { return __importDefault(create_filter_model_1).default; } }));
var flat_filter_model_1 = __webpack_require__(71979);
Object.defineProperty(exports, "FlatFilterModel", ({ enumerable: true, get: function () { return __importDefault(flat_filter_model_1).default; } }));
var flexible_filter_model_1 = __webpack_require__(94743);
Object.defineProperty(exports, "FlexibleFilterModel", ({ enumerable: true, get: function () { return __importDefault(flexible_filter_model_1).default; } }));
var null_filter_model_1 = __webpack_require__(3357);
Object.defineProperty(exports, "NullFilterModel", ({ enumerable: true, get: function () { return __importDefault(null_filter_model_1).default; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3357:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const _base_filter_model_1 = __importDefault(__webpack_require__(54842));
class NullFilterModel extends _base_filter_model_1.default {
    constructor({ options, active, refreshCallback, repageCallback, }) {
        super({
            name: "NullFilterModel",
            options,
            active,
            refreshCallback,
            repageCallback,
        });
    }
    extract(item) {
        return {};
    }
    filter(metadataArray) {
        return metadataArray;
    }
}
exports["default"] = NullFilterModel;
//# sourceMappingURL=null-filter-model.js.map

/***/ }),

/***/ 2334:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.satisfiesOrPolicy = exports.satisfiesAndPolicy = void 0;
/*
This code is O(nxm), where n is the number of attribute values in policy and m is the number of
attribute values associated with the item. This could be re-written to bail at the first re-write
of satisfies. This may be a good optimization, given how many times these functions must run, however
there is currently no need so I have written them to be simple and easy to understand.
*/
function satisfiesAndPolicy(values, policy) {
    let satisfies = true;
    policy.forEach((pv) => {
        if (!values.includes(pv))
            satisfies = false;
    });
    return satisfies;
}
exports.satisfiesAndPolicy = satisfiesAndPolicy;
function satisfiesOrPolicy(values, policy) {
    if (policy.length == 0)
        return true;
    let satisfies = false;
    policy.forEach((pv) => {
        if (values.includes(pv))
            satisfies = true;
    });
    return satisfies;
}
exports.satisfiesOrPolicy = satisfiesOrPolicy;
//# sourceMappingURL=attribute-satisfiers.js.map

/***/ }),

/***/ 41634:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flexibleOrSatisfier = exports.flexibleAndSatisfier = void 0;
const attribute_satisfiers_1 = __webpack_require__(2334);
function flexibleAndSatisfier(values, policy) {
    let satisfies = true;
    policy.forEach(({ categoryId, filters, logic }) => {
        if (categoryId in values) {
            switch (logic) {
                case "AND":
                    if (!(0, attribute_satisfiers_1.satisfiesAndPolicy)(values[categoryId], filters))
                        satisfies = false;
                    break;
                case "OR":
                    if (!(0, attribute_satisfiers_1.satisfiesOrPolicy)(values[categoryId], filters))
                        satisfies = false;
                    break;
                default:
                    throw new Error(`Unknown logic in flexible AND satisfier. Policy = ${policy}`);
            }
        }
    });
    return satisfies;
}
exports.flexibleAndSatisfier = flexibleAndSatisfier;
function flexibleOrSatisfier(values, policy) {
    if (policy.length === 0)
        return true;
    let satisfies = false;
    policy.forEach(({ categoryId, filters, logic }) => {
        if (categoryId in values) {
            switch (logic) {
                case "AND":
                    if ((0, attribute_satisfiers_1.satisfiesAndPolicy)(values[categoryId], filters))
                        satisfies = true;
                    break;
                case "OR":
                    if ((0, attribute_satisfiers_1.satisfiesOrPolicy)(values[categoryId], filters))
                        satisfies = true;
                    break;
                default:
                    throw new Error(`Unknown logic in flexible OR satisfier. Policy = ${policy}`);
            }
        }
    });
    return satisfies;
}
exports.flexibleOrSatisfier = flexibleOrSatisfier;
//# sourceMappingURL=flexible-policy-satisfiers.js.map

/***/ }),

/***/ 85151:
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(92059), exports);
__exportStar(__webpack_require__(24939), exports);
__exportStar(__webpack_require__(9517), exports);
__exportStar(__webpack_require__(41722), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 92059:
/***/ ((__unused_webpack_module, exports) => {


// ====== Boilerplate ============================
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ 94150:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// This base class handles construction, parameter management, and model workflows.
// All the descendent classes have to add are overrides to "extract" and "sort"
class BaseSortModel {
    _name;
    _options;
    _active;
    _refreshCallback;
    _repageCallback;
    // =========== Constructors ==============================
    constructor(args) {
        if (!args)
            throw new Error("ERROR in sort model base class; arguments not provided");
        const { name, options, active, refreshCallback, repageCallback } = args;
        if (!name)
            throw new Error(`ERROR in sort model base class; name = ${name}`);
        this._name = name;
        this._options = options || {};
        this._active = active || {};
        this._refreshCallback = refreshCallback || function () { };
        this._repageCallback = repageCallback || function () { };
    }
    // =========== Getters =========================
    get name() {
        return this._name;
    }
    get active() {
        return { ...this._active };
    }
    get options() {
        return { ...this._options };
    }
    // =========== Setters =========================
    set active(active) {
        this._active = { ...this._active, ...active };
        this._repageCallback();
        this._refreshCallback();
    }
    set options(options) {
        this._options = { ...this._options, ...options };
        this._repageCallback();
        this._refreshCallback();
    }
    // ========= Public methods ========================
    extract(item) {
        return {};
    }
    sort(metadataArray) {
        return metadataArray;
    }
}
exports["default"] = BaseSortModel;
//# sourceMappingURL=_base-sort-model.js.map

/***/ }),

/***/ 88634:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const null_sort_model_1 = __importDefault(__webpack_require__(78809));
const simple_sort_model_1 = __importDefault(__webpack_require__(38100));
function createSortModel({ type, setup = { active: {}, options: {} }, refreshCallback = () => null, repageCallback = () => null, }) {
    switch (type) {
        case "NullSortModel":
            return new null_sort_model_1.default({ refreshCallback, repageCallback, ...setup });
        case "SimpleSortModel":
            return new simple_sort_model_1.default({ refreshCallback, repageCallback, ...setup });
        default:
            throw Error(`ERROR: Unknown sort type=${type}`);
    }
}
exports["default"] = createSortModel;
//# sourceMappingURL=create-sort-model.js.map

/***/ }),

/***/ 9517:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SimpleSortModel = exports.NullSortModel = exports.createSortModel = void 0;
var create_sort_model_1 = __webpack_require__(88634);
Object.defineProperty(exports, "createSortModel", ({ enumerable: true, get: function () { return __importDefault(create_sort_model_1).default; } }));
var null_sort_model_1 = __webpack_require__(78809);
Object.defineProperty(exports, "NullSortModel", ({ enumerable: true, get: function () { return __importDefault(null_sort_model_1).default; } }));
var simple_sort_model_1 = __webpack_require__(38100);
Object.defineProperty(exports, "SimpleSortModel", ({ enumerable: true, get: function () { return __importDefault(simple_sort_model_1).default; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 78809:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const _base_sort_model_1 = __importDefault(__webpack_require__(94150));
class NullSortModel extends _base_sort_model_1.default {
    constructor({ options, active, refreshCallback, repageCallback, }) {
        super({
            name: "NullSortModel",
            options,
            active,
            refreshCallback,
            repageCallback,
        });
    }
    extract(item) {
        return {};
    }
    sort(metadataArray) {
        return metadataArray;
    }
}
exports["default"] = NullSortModel;
//# sourceMappingURL=null-sort-model.js.map

/***/ }),

/***/ 38100:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const _base_sort_model_1 = __importDefault(__webpack_require__(94150));
// Note - this is probably as complicated as the sort model will ever need to be,
// however there was a desire to mainain a bit of symmetry with the filter model.
// This class is architected to be extensible.  It would make a good base class.
class SimpleSortModel extends _base_sort_model_1.default {
    constructor({ options, active, refreshCallback, repageCallback, }) {
        super({
            name: "SimpleSortModel",
            options,
            active,
            refreshCallback,
            repageCallback,
        });
    }
    extract(item) {
        const result = {};
        const { sortFields = [] } = this.options;
        sortFields.forEach((field) => {
            if (item.hasOwnProperty(field))
                result[field] = item[field];
        });
        return result;
    }
    sort(metadataArray) {
        try {
            // No unexpected side effects.  (e.g., method sort sorts in place)
            const workingArray = [...metadataArray];
            // get the sort parameters
            const { sortFields = [] } = this.options;
            const { sortBy = "" } = this.active;
            // blank sortBy indicates noop
            if (sortBy === "")
                return metadataArray;
            // noop if array is empty
            if (workingArray.length === 0)
                return [];
            // error if sortBy is not a sort field target
            if (!sortFields.includes(sortBy))
                throw new Error(`ERROR in SortModel: Sort field sortBy=${sortBy} is missing in sortFields=[${sortFields}]`);
            // pick a compare function
            let compareFunc;
            const type = typeof metadataArray[0].sort[sortBy];
            switch (type) {
                case "string":
                    // when there are a lot of comparisons this is faster than localeCompare
                    const collator = new Intl.Collator();
                    compareFunc = (a, b) => collator.compare(a.sort[sortBy], b.sort[sortBy]);
                    break;
                case "number":
                    compareFunc = (a, b) => a.sort[sortBy] - b.sort[sortBy];
                    break;
                // case "date":
                //   sortFunc = (a, b) => ?
                //   break;
                default:
                    throw new Error(`Error: Unknown data type ${type} in SortModel sort method`);
            }
            const sorted = workingArray.sort(compareFunc);
            return sorted;
        }
        catch (err) {
            throw err;
        }
    }
}
exports["default"] = SimpleSortModel;
//# sourceMappingURL=simple-sort-model.js.map

/***/ }),

/***/ 99352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   print: () => (/* binding */ print)
/* harmony export */ });
/* harmony import */ var _blockString_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43052);
/* harmony import */ var _printString_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95410);
/* harmony import */ var _visitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11786);



/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return (0,_visitor_mjs__WEBPACK_IMPORTED_MODULE_0__/* .visit */ .YR)(ast, printDocASTReducer);
}
const MAX_LINE_LENGTH = 80;
const printDocASTReducer = {
  Name: {
    leave: (node) => node.value,
  },
  Variable: {
    leave: (node) => '$' + node.name,
  },
  // Document
  Document: {
    leave: (node) => join(node.definitions, '\n\n'),
  },
  OperationDefinition: {
    leave(node) {
      const varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
      const prefix = join(
        [
          node.operation,
          join([node.name, varDefs]),
          join(node.directives, ' '),
        ],
        ' ',
      ); // Anonymous queries with no directives or variable definitions can use
      // the query short form.

      return (prefix === 'query' ? '' : prefix + ' ') + node.selectionSet;
    },
  },
  VariableDefinition: {
    leave: ({ variable, type, defaultValue, directives }) =>
      variable +
      ': ' +
      type +
      wrap(' = ', defaultValue) +
      wrap(' ', join(directives, ' ')),
  },
  SelectionSet: {
    leave: ({ selections }) => block(selections),
  },
  Field: {
    leave({ alias, name, arguments: args, directives, selectionSet }) {
      const prefix = wrap('', alias, ': ') + name;
      let argsLine = prefix + wrap('(', join(args, ', '), ')');

      if (argsLine.length > MAX_LINE_LENGTH) {
        argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
      }

      return join([argsLine, join(directives, ' '), selectionSet], ' ');
    },
  },
  Argument: {
    leave: ({ name, value }) => name + ': ' + value,
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name, directives }) =>
      '...' + name + wrap(' ', join(directives, ' ')),
  },
  InlineFragment: {
    leave: ({ typeCondition, directives, selectionSet }) =>
      join(
        [
          '...',
          wrap('on ', typeCondition),
          join(directives, ' '),
          selectionSet,
        ],
        ' ',
      ),
  },
  FragmentDefinition: {
    leave: (
      { name, typeCondition, variableDefinitions, directives, selectionSet }, // Note: fragment variable definitions are experimental and may be changed
    ) =>
      // or removed in the future.
      `fragment ${name}${wrap('(', join(variableDefinitions, ', '), ')')} ` +
      `on ${typeCondition} ${wrap('', join(directives, ' '), ' ')}` +
      selectionSet,
  },
  // Value
  IntValue: {
    leave: ({ value }) => value,
  },
  FloatValue: {
    leave: ({ value }) => value,
  },
  StringValue: {
    leave: ({ value, block: isBlockString }) =>
      isBlockString ? (0,_blockString_mjs__WEBPACK_IMPORTED_MODULE_1__/* .printBlockString */ .yo)(value) : (0,_printString_mjs__WEBPACK_IMPORTED_MODULE_2__/* .printString */ .T)(value),
  },
  BooleanValue: {
    leave: ({ value }) => (value ? 'true' : 'false'),
  },
  NullValue: {
    leave: () => 'null',
  },
  EnumValue: {
    leave: ({ value }) => value,
  },
  ListValue: {
    leave: ({ values }) => '[' + join(values, ', ') + ']',
  },
  ObjectValue: {
    leave: ({ fields }) => '{' + join(fields, ', ') + '}',
  },
  ObjectField: {
    leave: ({ name, value }) => name + ': ' + value,
  },
  // Directive
  Directive: {
    leave: ({ name, arguments: args }) =>
      '@' + name + wrap('(', join(args, ', '), ')'),
  },
  // Type
  NamedType: {
    leave: ({ name }) => name,
  },
  ListType: {
    leave: ({ type }) => '[' + type + ']',
  },
  NonNullType: {
    leave: ({ type }) => type + '!',
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description, directives, operationTypes }) =>
      wrap('', description, '\n') +
      join(['schema', join(directives, ' '), block(operationTypes)], ' '),
  },
  OperationTypeDefinition: {
    leave: ({ operation, type }) => operation + ': ' + type,
  },
  ScalarTypeDefinition: {
    leave: ({ description, name, directives }) =>
      wrap('', description, '\n') +
      join(['scalar', name, join(directives, ' ')], ' '),
  },
  ObjectTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) =>
      wrap('', description, '\n') +
      join(
        [
          'type',
          name,
          wrap('implements ', join(interfaces, ' & ')),
          join(directives, ' '),
          block(fields),
        ],
        ' ',
      ),
  },
  FieldDefinition: {
    leave: ({ description, name, arguments: args, type, directives }) =>
      wrap('', description, '\n') +
      name +
      (hasMultilineItems(args)
        ? wrap('(\n', indent(join(args, '\n')), '\n)')
        : wrap('(', join(args, ', '), ')')) +
      ': ' +
      type +
      wrap(' ', join(directives, ' ')),
  },
  InputValueDefinition: {
    leave: ({ description, name, type, defaultValue, directives }) =>
      wrap('', description, '\n') +
      join(
        [name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')],
        ' ',
      ),
  },
  InterfaceTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) =>
      wrap('', description, '\n') +
      join(
        [
          'interface',
          name,
          wrap('implements ', join(interfaces, ' & ')),
          join(directives, ' '),
          block(fields),
        ],
        ' ',
      ),
  },
  UnionTypeDefinition: {
    leave: ({ description, name, directives, types }) =>
      wrap('', description, '\n') +
      join(
        ['union', name, join(directives, ' '), wrap('= ', join(types, ' | '))],
        ' ',
      ),
  },
  EnumTypeDefinition: {
    leave: ({ description, name, directives, values }) =>
      wrap('', description, '\n') +
      join(['enum', name, join(directives, ' '), block(values)], ' '),
  },
  EnumValueDefinition: {
    leave: ({ description, name, directives }) =>
      wrap('', description, '\n') + join([name, join(directives, ' ')], ' '),
  },
  InputObjectTypeDefinition: {
    leave: ({ description, name, directives, fields }) =>
      wrap('', description, '\n') +
      join(['input', name, join(directives, ' '), block(fields)], ' '),
  },
  DirectiveDefinition: {
    leave: ({ description, name, arguments: args, repeatable, locations }) =>
      wrap('', description, '\n') +
      'directive @' +
      name +
      (hasMultilineItems(args)
        ? wrap('(\n', indent(join(args, '\n')), '\n)')
        : wrap('(', join(args, ', '), ')')) +
      (repeatable ? ' repeatable' : '') +
      ' on ' +
      join(locations, ' | '),
  },
  SchemaExtension: {
    leave: ({ directives, operationTypes }) =>
      join(
        ['extend schema', join(directives, ' '), block(operationTypes)],
        ' ',
      ),
  },
  ScalarTypeExtension: {
    leave: ({ name, directives }) =>
      join(['extend scalar', name, join(directives, ' ')], ' '),
  },
  ObjectTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) =>
      join(
        [
          'extend type',
          name,
          wrap('implements ', join(interfaces, ' & ')),
          join(directives, ' '),
          block(fields),
        ],
        ' ',
      ),
  },
  InterfaceTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) =>
      join(
        [
          'extend interface',
          name,
          wrap('implements ', join(interfaces, ' & ')),
          join(directives, ' '),
          block(fields),
        ],
        ' ',
      ),
  },
  UnionTypeExtension: {
    leave: ({ name, directives, types }) =>
      join(
        [
          'extend union',
          name,
          join(directives, ' '),
          wrap('= ', join(types, ' | ')),
        ],
        ' ',
      ),
  },
  EnumTypeExtension: {
    leave: ({ name, directives, values }) =>
      join(['extend enum', name, join(directives, ' '), block(values)], ' '),
  },
  InputObjectTypeExtension: {
    leave: ({ name, directives, fields }) =>
      join(['extend input', name, join(directives, ' '), block(fields)], ' '),
  },
};
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */

function join(maybeArray, separator = '') {
  var _maybeArray$filter$jo;

  return (_maybeArray$filter$jo =
    maybeArray === null || maybeArray === void 0
      ? void 0
      : maybeArray.filter((x) => x).join(separator)) !== null &&
    _maybeArray$filter$jo !== void 0
    ? _maybeArray$filter$jo
    : '';
}
/**
 * Given array, print each item on its own line, wrapped in an indented `{ }` block.
 */

function block(array) {
  return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */

function wrap(start, maybeString, end = '') {
  return maybeString != null && maybeString !== ''
    ? start + maybeString + end
    : '';
}

function indent(str) {
  return wrap('  ', str.replace(/\n/g, '\n  '));
}

function hasMultilineItems(maybeArray) {
  var _maybeArray$some;

  // FIXME: https://github.com/graphql/graphql-js/issues/2203

  /* c8 ignore next */
  return (_maybeArray$some =
    maybeArray === null || maybeArray === void 0
      ? void 0
      : maybeArray.some((str) => str.includes('\n'))) !== null &&
    _maybeArray$some !== void 0
    ? _maybeArray$some
    : false;
}


/***/ }),

/***/ 21659:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApolloCache: () => (/* reexport safe */ _cache_index_js__WEBPACK_IMPORTED_MODULE_6__.k),
/* harmony export */   ApolloClient: () => (/* reexport safe */ _ApolloClient_js__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   ApolloError: () => (/* reexport safe */ _errors_index_js__WEBPACK_IMPORTED_MODULE_4__.K4),
/* harmony export */   ApolloLink: () => (/* reexport safe */ _link_core_index_js__WEBPACK_IMPORTED_MODULE_11__.Ch),
/* harmony export */   Cache: () => (/* reexport safe */ _cache_index_js__WEBPACK_IMPORTED_MODULE_5__.l),
/* harmony export */   DocumentTransform: () => (/* reexport safe */ _utilities_index_js__WEBPACK_IMPORTED_MODULE_17__.c),
/* harmony export */   HttpLink: () => (/* reexport safe */ _link_http_index_js__WEBPACK_IMPORTED_MODULE_12__.HttpLink),
/* harmony export */   InMemoryCache: () => (/* reexport safe */ _cache_index_js__WEBPACK_IMPORTED_MODULE_7__.D),
/* harmony export */   MissingFieldError: () => (/* reexport safe */ _cache_index_js__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   NetworkStatus: () => (/* reexport safe */ _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__.pT),
/* harmony export */   Observable: () => (/* reexport safe */ _utilities_index_js__WEBPACK_IMPORTED_MODULE_18__.c),
/* harmony export */   ObservableQuery: () => (/* reexport safe */ _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_2__.U),
/* harmony export */   checkFetcher: () => (/* reexport safe */ _link_http_index_js__WEBPACK_IMPORTED_MODULE_12__.checkFetcher),
/* harmony export */   concat: () => (/* reexport safe */ _link_core_index_js__WEBPACK_IMPORTED_MODULE_11__.xW),
/* harmony export */   createHttpLink: () => (/* reexport safe */ _link_http_index_js__WEBPACK_IMPORTED_MODULE_12__.createHttpLink),
/* harmony export */   createSignalIfSupported: () => (/* reexport safe */ _link_http_index_js__WEBPACK_IMPORTED_MODULE_12__.createSignalIfSupported),
/* harmony export */   defaultDataIdFromObject: () => (/* reexport safe */ _cache_index_js__WEBPACK_IMPORTED_MODULE_9__.or),
/* harmony export */   defaultPrinter: () => (/* reexport safe */ _link_http_index_js__WEBPACK_IMPORTED_MODULE_12__.defaultPrinter),
/* harmony export */   disableExperimentalFragmentVariables: () => (/* reexport safe */ graphql_tag__WEBPACK_IMPORTED_MODULE_21__.qj),
/* harmony export */   disableFragmentWarnings: () => (/* reexport safe */ graphql_tag__WEBPACK_IMPORTED_MODULE_21__.gi),
/* harmony export */   empty: () => (/* reexport safe */ _link_core_index_js__WEBPACK_IMPORTED_MODULE_11__.Ie),
/* harmony export */   enableExperimentalFragmentVariables: () => (/* reexport safe */ graphql_tag__WEBPACK_IMPORTED_MODULE_21__.VC),
/* harmony export */   execute: () => (/* reexport safe */ _link_core_index_js__WEBPACK_IMPORTED_MODULE_11__.g7),
/* harmony export */   fallbackHttpConfig: () => (/* reexport safe */ _link_http_index_js__WEBPACK_IMPORTED_MODULE_12__.fallbackHttpConfig),
/* harmony export */   from: () => (/* reexport safe */ _link_core_index_js__WEBPACK_IMPORTED_MODULE_11__.HT),
/* harmony export */   fromError: () => (/* reexport safe */ _link_utils_index_js__WEBPACK_IMPORTED_MODULE_13__.N),
/* harmony export */   fromPromise: () => (/* reexport safe */ _link_utils_index_js__WEBPACK_IMPORTED_MODULE_15__.S),
/* harmony export */   gql: () => (/* reexport safe */ graphql_tag__WEBPACK_IMPORTED_MODULE_21__.J1),
/* harmony export */   isApolloError: () => (/* reexport safe */ _errors_index_js__WEBPACK_IMPORTED_MODULE_4__.Mn),
/* harmony export */   isNetworkRequestSettled: () => (/* reexport safe */ _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__.D2),
/* harmony export */   isReference: () => (/* reexport safe */ _utilities_index_js__WEBPACK_IMPORTED_MODULE_19__.A_),
/* harmony export */   makeReference: () => (/* reexport safe */ _utilities_index_js__WEBPACK_IMPORTED_MODULE_19__.WU),
/* harmony export */   makeVar: () => (/* reexport safe */ _cache_index_js__WEBPACK_IMPORTED_MODULE_10__.UT),
/* harmony export */   mergeOptions: () => (/* reexport safe */ _ApolloClient_js__WEBPACK_IMPORTED_MODULE_1__.l),
/* harmony export */   parseAndCheckHttpResponse: () => (/* reexport safe */ _link_http_index_js__WEBPACK_IMPORTED_MODULE_12__.parseAndCheckHttpResponse),
/* harmony export */   resetCaches: () => (/* reexport safe */ graphql_tag__WEBPACK_IMPORTED_MODULE_21__.Nh),
/* harmony export */   rewriteURIForGET: () => (/* reexport safe */ _link_http_index_js__WEBPACK_IMPORTED_MODULE_12__.rewriteURIForGET),
/* harmony export */   selectHttpOptionsAndBody: () => (/* reexport safe */ _link_http_index_js__WEBPACK_IMPORTED_MODULE_12__.selectHttpOptionsAndBody),
/* harmony export */   selectHttpOptionsAndBodyInternal: () => (/* reexport safe */ _link_http_index_js__WEBPACK_IMPORTED_MODULE_12__.selectHttpOptionsAndBodyInternal),
/* harmony export */   selectURI: () => (/* reexport safe */ _link_http_index_js__WEBPACK_IMPORTED_MODULE_12__.selectURI),
/* harmony export */   serializeFetchParameter: () => (/* reexport safe */ _link_http_index_js__WEBPACK_IMPORTED_MODULE_12__.serializeFetchParameter),
/* harmony export */   setLogVerbosity: () => (/* reexport safe */ ts_invariant__WEBPACK_IMPORTED_MODULE_20__.Q9),
/* harmony export */   split: () => (/* reexport safe */ _link_core_index_js__WEBPACK_IMPORTED_MODULE_11__.lD),
/* harmony export */   throwServerError: () => (/* reexport safe */ _link_utils_index_js__WEBPACK_IMPORTED_MODULE_16__.A),
/* harmony export */   toPromise: () => (/* reexport safe */ _link_utils_index_js__WEBPACK_IMPORTED_MODULE_14__.h)
/* harmony export */ });
/* harmony import */ var _ApolloClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(234);
/* harmony import */ var _ApolloClient_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60144);
/* harmony import */ var _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72988);
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88599);
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9211);
/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31988);
/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55285);
/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75107);
/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24253);
/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73194);
/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90738);
/* harmony import */ var _link_core_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8898);
/* harmony import */ var _link_http_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12149);
/* harmony import */ var _link_utils_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86092);
/* harmony import */ var _link_utils_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31052);
/* harmony import */ var _link_utils_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(73547);
/* harmony import */ var _link_utils_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(64251);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(29993);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(73401);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(67194);
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(72232);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2135);
/* Core */





/* Link */




/* Supporting */
// The verbosity of invariant.{log,warn,error} can be controlled globally
// (for anyone using the same ts-invariant package) by passing "log",
// "warn", "error", or "silent" to setVerbosity ("log" is the default).
// Note that all invariant.* logging is hidden in production.


(0,ts_invariant__WEBPACK_IMPORTED_MODULE_20__/* .setVerbosity */ .Q9)(globalThis.__DEV__ !== false ? "log" : "silent");
// Note that importing `gql` by itself, then destructuring
// additional properties separately before exporting, is intentional.
// Due to the way the `graphql-tag` library is setup, certain bundlers
// can't find the properties added to the exported `gql` function without
// additional guidance (e.g. Rollup - see
// https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module).
// Instead of having people that are using bundlers with `@apollo/client` add
// extra bundler config to help `graphql-tag` exports be found (which would be
// awkward since they aren't importing `graphql-tag` themselves), this
// workaround of pulling the extra properties off the `gql` function,
// then re-exporting them separately, helps keeps bundlers happy without any
// additional config changes.

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 12149:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpLink: () => (/* reexport safe */ _HttpLink_js__WEBPACK_IMPORTED_MODULE_8__.P),
/* harmony export */   checkFetcher: () => (/* reexport safe */ _checkFetcher_js__WEBPACK_IMPORTED_MODULE_4__.S),
/* harmony export */   createHttpLink: () => (/* reexport safe */ _createHttpLink_js__WEBPACK_IMPORTED_MODULE_7__.$),
/* harmony export */   createSignalIfSupported: () => (/* reexport safe */ _createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_5__.S),
/* harmony export */   defaultPrinter: () => (/* reexport safe */ _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_3__.i1),
/* harmony export */   fallbackHttpConfig: () => (/* reexport safe */ _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_3__.R4),
/* harmony export */   parseAndCheckHttpResponse: () => (/* reexport safe */ _parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_1__.OQ),
/* harmony export */   rewriteURIForGET: () => (/* reexport safe */ _rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_9__.E),
/* harmony export */   selectHttpOptionsAndBody: () => (/* reexport safe */ _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_3__.Wz),
/* harmony export */   selectHttpOptionsAndBodyInternal: () => (/* reexport safe */ _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_3__.HY),
/* harmony export */   selectURI: () => (/* reexport safe */ _selectURI_js__WEBPACK_IMPORTED_MODULE_6__.z),
/* harmony export */   serializeFetchParameter: () => (/* reexport safe */ _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_2__.Y)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52687);
/* harmony import */ var _parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21799);
/* harmony import */ var _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49192);
/* harmony import */ var _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84594);
/* harmony import */ var _checkFetcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83438);
/* harmony import */ var _createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83746);
/* harmony import */ var _selectURI_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88039);
/* harmony import */ var _createHttpLink_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13782);
/* harmony import */ var _HttpLink_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94537);
/* harmony import */ var _rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9162);










//# sourceMappingURL=index.js.map

/***/ }),

/***/ 56453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nw: () => (/* binding */ isApolloPayloadResult),
/* harmony export */   ST: () => (/* binding */ isExecutionPatchIncrementalResult),
/* harmony export */   YX: () => (/* binding */ isExecutionPatchResult),
/* harmony export */   bd: () => (/* binding */ mergeIncrementalData)
/* harmony export */ });
/* unused harmony export isExecutionPatchInitialResult */
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90075);
/* harmony import */ var _arrays_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45636);
/* harmony import */ var _mergeDeep_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92922);



function isExecutionPatchIncrementalResult(value) {
    return "incremental" in value;
}
function isExecutionPatchInitialResult(value) {
    return "hasNext" in value && "data" in value;
}
function isExecutionPatchResult(value) {
    return (isExecutionPatchIncrementalResult(value) ||
        isExecutionPatchInitialResult(value));
}
// This function detects an Apollo payload result before it is transformed
// into a FetchResult via HttpLink; it cannot detect an ApolloPayloadResult
// once it leaves the link chain.
function isApolloPayloadResult(value) {
    return (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__/* .isNonNullObject */ .U)(value) && "payload" in value;
}
function mergeIncrementalData(prevResult, result) {
    var mergedData = prevResult;
    var merger = new _mergeDeep_js__WEBPACK_IMPORTED_MODULE_1__/* .DeepMerger */ .ZI();
    if (isExecutionPatchIncrementalResult(result) &&
        (0,_arrays_js__WEBPACK_IMPORTED_MODULE_2__/* .isNonEmptyArray */ .E)(result.incremental)) {
        result.incremental.forEach(function (_a) {
            var data = _a.data, path = _a.path;
            for (var i = path.length - 1; i >= 0; --i) {
                var key = path[i];
                var isNumericKey = !isNaN(+key);
                var parent_1 = isNumericKey ? [] : {};
                parent_1[key] = data;
                data = parent_1;
            }
            mergedData = merger.merge(mergedData, data);
        });
    }
    return mergedData;
}
//# sourceMappingURL=incrementalResult.js.map

/***/ }),

/***/ 90075:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ isNonNullObject)
/* harmony export */ });
/* unused harmony export isPlainObject */
function isNonNullObject(obj) {
    return obj !== null && typeof obj === "object";
}
function isPlainObject(obj) {
    return (obj !== null &&
        typeof obj === "object" &&
        (Object.getPrototypeOf(obj) === Object.prototype ||
            Object.getPrototypeOf(obj) === null));
}
//# sourceMappingURL=objects.js.map

/***/ }),

/***/ 52687:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sf: () => (/* reexport safe */ _global_js__WEBPACK_IMPORTED_MODULE_2__.A),
/* harmony export */   V1: () => (/* reexport safe */ _invariantWrappers_js__WEBPACK_IMPORTED_MODULE_0__.V1),
/* harmony export */   no: () => (/* reexport safe */ _maybe_js__WEBPACK_IMPORTED_MODULE_1__.n),
/* harmony export */   vA: () => (/* reexport safe */ _invariantWrappers_js__WEBPACK_IMPORTED_MODULE_0__.vA)
/* harmony export */ });
/* unused harmony exports DEV, __DEV__ */
/* harmony import */ var _invariantWrappers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67235);
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83687);
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37008);




/**
 * @deprecated we do not use this internally anymore,
 * it is just exported for backwards compatibility
 */
// this file is extempt from automatic `__DEV__` replacement
// so we have to write it out here
// @ts-ignore
var DEV = globalThis.__DEV__ !== false;

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 83687:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ maybe)
/* harmony export */ });
function maybe(thunk) {
    try {
        return thunk();
    }
    catch (_a) { }
}
//# sourceMappingURL=maybe.js.map

/***/ }),

/***/ 68869:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MS: () => (/* binding */ shouldInclude),
/* harmony export */   d8: () => (/* binding */ hasDirectives),
/* harmony export */   f2: () => (/* binding */ hasClientExports),
/* harmony export */   s7: () => (/* binding */ getFragmentMaskMode)
/* harmony export */ });
/* unused harmony exports getDirectiveNames, hasAnyDirectives, hasAllDirectives, getInclusionDirectives */
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52687);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11786);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73061);


function shouldInclude(_a, variables) {
    var directives = _a.directives;
    if (!directives || !directives.length) {
        return true;
    }
    return getInclusionDirectives(directives).every(function (_a) {
        var directive = _a.directive, ifArgument = _a.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === "Variable") {
            evaledValue =
                variables && variables[ifArgument.value.name.value];
            (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(evaledValue !== void 0, 78, directive.name.value);
        }
        else {
            evaledValue = ifArgument.value.value;
        }
        return directive.name.value === "skip" ? !evaledValue : evaledValue;
    });
}
function getDirectiveNames(root) {
    var names = [];
    visit(root, {
        Directive: function (node) {
            names.push(node.name.value);
        },
    });
    return names;
}
var hasAnyDirectives = function (names, root) {
    return hasDirectives(names, root, false);
};
var hasAllDirectives = function (names, root) {
    return hasDirectives(names, root, true);
};
function hasDirectives(names, root, all) {
    var nameSet = new Set(names);
    var uniqueCount = nameSet.size;
    (0,graphql__WEBPACK_IMPORTED_MODULE_1__/* .visit */ .YR)(root, {
        Directive: function (node) {
            if (nameSet.delete(node.name.value) && (!all || !nameSet.size)) {
                return graphql__WEBPACK_IMPORTED_MODULE_1__/* .BREAK */ .sP;
            }
        },
    });
    // If we found all the names, nameSet will be empty. If we only care about
    // finding some of them, the < condition is sufficient.
    return all ? !nameSet.size : nameSet.size < uniqueCount;
}
function hasClientExports(document) {
    return document && hasDirectives(["client", "export"], document, true);
}
function isInclusionDirective(_a) {
    var value = _a.name.value;
    return value === "skip" || value === "include";
}
function getInclusionDirectives(directives) {
    var result = [];
    if (directives && directives.length) {
        directives.forEach(function (directive) {
            if (!isInclusionDirective(directive))
                return;
            var directiveArguments = directive.arguments;
            var directiveName = directive.name.value;
            (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(directiveArguments && directiveArguments.length === 1, 79, directiveName);
            var ifArgument = directiveArguments[0];
            (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(ifArgument.name && ifArgument.name.value === "if", 80, directiveName);
            var ifValue = ifArgument.value;
            // means it has to be a variable value if this is a valid @skip or @include directive
            (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1)(ifValue &&
                (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), 81, directiveName);
            result.push({ directive: directive, ifArgument: ifArgument });
        });
    }
    return result;
}
/** @internal */
function getFragmentMaskMode(fragment) {
    var _a, _b;
    var directive = (_a = fragment.directives) === null || _a === void 0 ? void 0 : _a.find(function (_a) {
        var name = _a.name;
        return name.value === "unmask";
    });
    if (!directive) {
        return "mask";
    }
    var modeArg = (_b = directive.arguments) === null || _b === void 0 ? void 0 : _b.find(function (_a) {
        var name = _a.name;
        return name.value === "mode";
    });
    if (globalThis.__DEV__ !== false) {
        if (modeArg) {
            if (modeArg.value.kind === graphql__WEBPACK_IMPORTED_MODULE_2__/* .Kind */ .b.VARIABLE) {
                globalThis.__DEV__ !== false && _globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1.warn(82);
            }
            else if (modeArg.value.kind !== graphql__WEBPACK_IMPORTED_MODULE_2__/* .Kind */ .b.STRING) {
                globalThis.__DEV__ !== false && _globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1.warn(83);
            }
            else if (modeArg.value.value !== "migrate") {
                globalThis.__DEV__ !== false && _globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1.warn(84, modeArg.value.value);
            }
        }
    }
    if (modeArg &&
        "value" in modeArg.value &&
        modeArg.value.value === "migrate") {
        return "migrate";
    }
    return "unmask";
}
//# sourceMappingURL=directives.js.map

/***/ }),

/***/ 3902:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XY: () => (/* binding */ addTypenameToDocument),
/* harmony export */   er: () => (/* binding */ removeClientSetsFromDocument),
/* harmony export */   iz: () => (/* binding */ removeDirectivesFromDocument),
/* harmony export */   x3: () => (/* binding */ addNonReactiveToNamedFragments),
/* harmony export */   zc: () => (/* binding */ buildQueryFromSelectionSet)
/* harmony export */ });
/* unused harmony exports removeConnectionDirectiveFromDocument, removeArgumentsFromDocument, removeFragmentSpreadFromDocument */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8674);
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52687);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73061);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11786);
/* harmony import */ var _getFromAST_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84824);
/* harmony import */ var _storeUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67194);
/* harmony import */ var _fragments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65215);
/* harmony import */ var _common_arrays_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45636);







var TYPENAME_FIELD = {
    kind: graphql__WEBPACK_IMPORTED_MODULE_1__/* .Kind */ .b.FIELD,
    name: {
        kind: graphql__WEBPACK_IMPORTED_MODULE_1__/* .Kind */ .b.NAME,
        value: "__typename",
    },
};
function isEmpty(op, fragmentMap) {
    return (!op ||
        op.selectionSet.selections.every(function (selection) {
            return selection.kind === graphql__WEBPACK_IMPORTED_MODULE_1__/* .Kind */ .b.FRAGMENT_SPREAD &&
                isEmpty(fragmentMap[selection.name.value], fragmentMap);
        }));
}
function nullIfDocIsEmpty(doc) {
    return (isEmpty((0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__/* .getOperationDefinition */ .Vu)(doc) || (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__/* .getFragmentDefinition */ .E4)(doc), (0,_fragments_js__WEBPACK_IMPORTED_MODULE_3__/* .createFragmentMap */ .JG)((0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__/* .getFragmentDefinitions */ .zK)(doc)))) ?
        null
        : doc;
}
function getDirectiveMatcher(configs) {
    var names = new Map();
    var tests = new Map();
    configs.forEach(function (directive) {
        if (directive) {
            if (directive.name) {
                names.set(directive.name, directive);
            }
            else if (directive.test) {
                tests.set(directive.test, directive);
            }
        }
    });
    return function (directive) {
        var config = names.get(directive.name.value);
        if (!config && tests.size) {
            tests.forEach(function (testConfig, test) {
                if (test(directive)) {
                    config = testConfig;
                }
            });
        }
        return config;
    };
}
function makeInUseGetterFunction(defaultKey) {
    var map = new Map();
    return function inUseGetterFunction(key) {
        if (key === void 0) { key = defaultKey; }
        var inUse = map.get(key);
        if (!inUse) {
            map.set(key, (inUse = {
                // Variable and fragment spread names used directly within this
                // operation or fragment definition, as identified by key. These sets
                // will be populated during the first traversal of the document in
                // removeDirectivesFromDocument below.
                variables: new Set(),
                fragmentSpreads: new Set(),
            }));
        }
        return inUse;
    };
}
function removeDirectivesFromDocument(directives, doc) {
    (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__/* .checkDocument */ .sw)(doc);
    // Passing empty strings to makeInUseGetterFunction means we handle anonymous
    // operations as if their names were "". Anonymous fragment definitions are
    // not supposed to be possible, but the same default naming strategy seems
    // appropriate for that case as well.
    var getInUseByOperationName = makeInUseGetterFunction("");
    var getInUseByFragmentName = makeInUseGetterFunction("");
    var getInUse = function (ancestors) {
        for (var p = 0, ancestor = void 0; p < ancestors.length && (ancestor = ancestors[p]); ++p) {
            if ((0,_common_arrays_js__WEBPACK_IMPORTED_MODULE_4__/* .isArray */ .c)(ancestor))
                continue;
            if (ancestor.kind === graphql__WEBPACK_IMPORTED_MODULE_1__/* .Kind */ .b.OPERATION_DEFINITION) {
                // If an operation is anonymous, we use the empty string as its key.
                return getInUseByOperationName(ancestor.name && ancestor.name.value);
            }
            if (ancestor.kind === graphql__WEBPACK_IMPORTED_MODULE_1__/* .Kind */ .b.FRAGMENT_DEFINITION) {
                return getInUseByFragmentName(ancestor.name.value);
            }
        }
        globalThis.__DEV__ !== false && _globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1.error(97);
        return null;
    };
    var operationCount = 0;
    for (var i = doc.definitions.length - 1; i >= 0; --i) {
        if (doc.definitions[i].kind === graphql__WEBPACK_IMPORTED_MODULE_1__/* .Kind */ .b.OPERATION_DEFINITION) {
            ++operationCount;
        }
    }
    var directiveMatcher = getDirectiveMatcher(directives);
    var shouldRemoveField = function (nodeDirectives) {
        return (0,_common_arrays_js__WEBPACK_IMPORTED_MODULE_4__/* .isNonEmptyArray */ .E)(nodeDirectives) &&
            nodeDirectives
                .map(directiveMatcher)
                .some(function (config) { return config && config.remove; });
    };
    var originalFragmentDefsByPath = new Map();
    // Any time the first traversal of the document below makes a change like
    // removing a fragment (by returning null), this variable should be set to
    // true. Once it becomes true, it should never be set to false again. If this
    // variable remains false throughout the traversal, then we can return the
    // original doc immediately without any modifications.
    var firstVisitMadeChanges = false;
    var fieldOrInlineFragmentVisitor = {
        enter: function (node) {
            if (shouldRemoveField(node.directives)) {
                firstVisitMadeChanges = true;
                return null;
            }
        },
    };
    var docWithoutDirectiveSubtrees = (0,graphql__WEBPACK_IMPORTED_MODULE_5__/* .visit */ .YR)(doc, {
        // These two AST node types share the same implementation, defined above.
        Field: fieldOrInlineFragmentVisitor,
        InlineFragment: fieldOrInlineFragmentVisitor,
        VariableDefinition: {
            enter: function () {
                // VariableDefinition nodes do not count as variables in use, though
                // they do contain Variable nodes that might be visited below. To avoid
                // counting variable declarations as usages, we skip visiting the
                // contents of this VariableDefinition node by returning false.
                return false;
            },
        },
        Variable: {
            enter: function (node, _key, _parent, _path, ancestors) {
                var inUse = getInUse(ancestors);
                if (inUse) {
                    inUse.variables.add(node.name.value);
                }
            },
        },
        FragmentSpread: {
            enter: function (node, _key, _parent, _path, ancestors) {
                if (shouldRemoveField(node.directives)) {
                    firstVisitMadeChanges = true;
                    return null;
                }
                var inUse = getInUse(ancestors);
                if (inUse) {
                    inUse.fragmentSpreads.add(node.name.value);
                }
                // We might like to remove this FragmentSpread by returning null here if
                // the corresponding FragmentDefinition node is also going to be removed
                // by the logic below, but we can't control the relative order of those
                // events, so we have to postpone the removal of dangling FragmentSpread
                // nodes until after the current visit of the document has finished.
            },
        },
        FragmentDefinition: {
            enter: function (node, _key, _parent, path) {
                originalFragmentDefsByPath.set(JSON.stringify(path), node);
            },
            leave: function (node, _key, _parent, path) {
                var originalNode = originalFragmentDefsByPath.get(JSON.stringify(path));
                if (node === originalNode) {
                    // If the FragmentNode received by this leave function is identical to
                    // the one received by the corresponding enter function (above), then
                    // the visitor must not have made any changes within this
                    // FragmentDefinition node. This fragment definition may still be
                    // removed if there are no ...spread references to it, but it won't be
                    // removed just because it has only a __typename field.
                    return node;
                }
                if (
                // This logic applies only if the document contains one or more
                // operations, since removing all fragments from a document containing
                // only fragments makes the document useless.
                operationCount > 0 &&
                    node.selectionSet.selections.every(function (selection) {
                        return selection.kind === graphql__WEBPACK_IMPORTED_MODULE_1__/* .Kind */ .b.FIELD &&
                            selection.name.value === "__typename";
                    })) {
                    // This is a somewhat opinionated choice: if a FragmentDefinition ends
                    // up having no fields other than __typename, we remove the whole
                    // fragment definition, and later prune ...spread references to it.
                    getInUseByFragmentName(node.name.value).removed = true;
                    firstVisitMadeChanges = true;
                    return null;
                }
            },
        },
        Directive: {
            leave: function (node) {
                // If a matching directive is found, remove the directive itself. Note
                // that this does not remove the target (field, argument, etc) of the
                // directive, but only the directive itself.
                if (directiveMatcher(node)) {
                    firstVisitMadeChanges = true;
                    return null;
                }
            },
        },
    });
    if (!firstVisitMadeChanges) {
        // If our first pass did not change anything about the document, then there
        // is no cleanup we need to do, and we can return the original doc.
        return doc;
    }
    // Utility for making sure inUse.transitiveVars is recursively populated.
    // Because this logic assumes inUse.fragmentSpreads has been completely
    // populated and inUse.removed has been set if appropriate,
    // populateTransitiveVars must be called after that information has been
    // collected by the first traversal of the document.
    var populateTransitiveVars = function (inUse) {
        if (!inUse.transitiveVars) {
            inUse.transitiveVars = new Set(inUse.variables);
            if (!inUse.removed) {
                inUse.fragmentSpreads.forEach(function (childFragmentName) {
                    populateTransitiveVars(getInUseByFragmentName(childFragmentName)).transitiveVars.forEach(function (varName) {
                        inUse.transitiveVars.add(varName);
                    });
                });
            }
        }
        return inUse;
    };
    // Since we've been keeping track of fragment spreads used by particular
    // operations and fragment definitions, we now need to compute the set of all
    // spreads used (transitively) by any operations in the document.
    var allFragmentNamesUsed = new Set();
    docWithoutDirectiveSubtrees.definitions.forEach(function (def) {
        if (def.kind === graphql__WEBPACK_IMPORTED_MODULE_1__/* .Kind */ .b.OPERATION_DEFINITION) {
            populateTransitiveVars(getInUseByOperationName(def.name && def.name.value)).fragmentSpreads.forEach(function (childFragmentName) {
                allFragmentNamesUsed.add(childFragmentName);
            });
        }
        else if (def.kind === graphql__WEBPACK_IMPORTED_MODULE_1__/* .Kind */ .b.FRAGMENT_DEFINITION &&
            // If there are no operations in the document, then all fragment
            // definitions count as usages of their own fragment names. This heuristic
            // prevents accidentally removing all fragment definitions from the
            // document just because it contains no operations that use the fragments.
            operationCount === 0 &&
            !getInUseByFragmentName(def.name.value).removed) {
            allFragmentNamesUsed.add(def.name.value);
        }
    });
    // Now that we have added all fragment spreads used by operations to the
    // allFragmentNamesUsed set, we can complete the set by transitively adding
    // all fragment spreads used by those fragments, and so on.
    allFragmentNamesUsed.forEach(function (fragmentName) {
        // Once all the childFragmentName strings added here have been seen already,
        // the top-level allFragmentNamesUsed.forEach loop will terminate.
        populateTransitiveVars(getInUseByFragmentName(fragmentName)).fragmentSpreads.forEach(function (childFragmentName) {
            allFragmentNamesUsed.add(childFragmentName);
        });
    });
    var fragmentWillBeRemoved = function (fragmentName) {
        return !!(
        // A fragment definition will be removed if there are no spreads that refer
        // to it, or the fragment was explicitly removed because it had no fields
        // other than __typename.
        (!allFragmentNamesUsed.has(fragmentName) ||
            getInUseByFragmentName(fragmentName).removed));
    };
    var enterVisitor = {
        enter: function (node) {
            if (fragmentWillBeRemoved(node.name.value)) {
                return null;
            }
        },
    };
    return nullIfDocIsEmpty((0,graphql__WEBPACK_IMPORTED_MODULE_5__/* .visit */ .YR)(docWithoutDirectiveSubtrees, {
        // If the fragment is going to be removed, then leaving any dangling
        // FragmentSpread nodes with the same name would be a mistake.
        FragmentSpread: enterVisitor,
        // This is where the fragment definition is actually removed.
        FragmentDefinition: enterVisitor,
        OperationDefinition: {
            leave: function (node) {
                // Upon leaving each operation in the depth-first AST traversal, prune
                // any variables that are declared by the operation but unused within.
                if (node.variableDefinitions) {
                    var usedVariableNames_1 = populateTransitiveVars(
                    // If an operation is anonymous, we use the empty string as its key.
                    getInUseByOperationName(node.name && node.name.value)).transitiveVars;
                    // According to the GraphQL spec, all variables declared by an
                    // operation must either be used by that operation or used by some
                    // fragment included transitively into that operation:
                    // https://spec.graphql.org/draft/#sec-All-Variables-Used
                    //
                    // To stay on the right side of this validation rule, if/when we
                    // remove the last $var references from an operation or its fragments,
                    // we must also remove the corresponding $var declaration from the
                    // enclosing operation. This pruning applies only to operations and
                    // not fragment definitions, at the moment. Fragments may be able to
                    // declare variables eventually, but today they can only consume them.
                    if (usedVariableNames_1.size < node.variableDefinitions.length) {
                        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, node), { variableDefinitions: node.variableDefinitions.filter(function (varDef) {
                                return usedVariableNames_1.has(varDef.variable.name.value);
                            }) });
                    }
                }
            },
        },
    }));
}
var addTypenameToDocument = Object.assign(function (doc) {
    return (0,graphql__WEBPACK_IMPORTED_MODULE_5__/* .visit */ .YR)(doc, {
        SelectionSet: {
            enter: function (node, _key, parent) {
                // Don't add __typename to OperationDefinitions.
                if (parent &&
                    parent.kind ===
                        graphql__WEBPACK_IMPORTED_MODULE_1__/* .Kind */ .b.OPERATION_DEFINITION) {
                    return;
                }
                // No changes if no selections.
                var selections = node.selections;
                if (!selections) {
                    return;
                }
                // If selections already have a __typename, or are part of an
                // introspection query, do nothing.
                var skip = selections.some(function (selection) {
                    return ((0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .isField */ .dt)(selection) &&
                        (selection.name.value === "__typename" ||
                            selection.name.value.lastIndexOf("__", 0) === 0));
                });
                if (skip) {
                    return;
                }
                // If this SelectionSet is @export-ed as an input variable, it should
                // not have a __typename field (see issue #4691).
                var field = parent;
                if ((0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .isField */ .dt)(field) &&
                    field.directives &&
                    field.directives.some(function (d) { return d.name.value === "export"; })) {
                    return;
                }
                // Create and return a new SelectionSet with a __typename Field.
                return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, node), { selections: (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__spreadArray)([], selections, true), [TYPENAME_FIELD], false) });
            },
        },
    });
}, {
    added: function (field) {
        return field === TYPENAME_FIELD;
    },
});
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === "connection";
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === "key"; })) {
                globalThis.__DEV__ !== false && _globals_index_js__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .V1.warn(98);
            }
        }
        return willRemove;
    },
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}
function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    return (!!selectionSet &&
        selectionSet.selections &&
        selectionSet.selections.some(function (selection) {
            return hasDirectivesInSelection(directives, selection, nestedCheck);
        }));
}
function hasDirectivesInSelection(directives, selection, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    if (!isField(selection)) {
        return true;
    }
    if (!selection.directives) {
        return false;
    }
    return (selection.directives.some(getDirectiveMatcher(directives)) ||
        (nestedCheck &&
            hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck)));
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function (aConfig) {
            return argument.value &&
                argument.value.kind === Kind.VARIABLE &&
                argument.value.name &&
                (aConfig.name === argument.value.name.value ||
                    (aConfig.test && aConfig.test(argument)));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty(visit(doc, {
        OperationDefinition: {
            enter: function (node) {
                return __assign(__assign({}, node), { 
                    // Remove matching top level variables definitions.
                    variableDefinitions: node.variableDefinitions ?
                        node.variableDefinitions.filter(function (varDef) {
                            return !config.some(function (arg) { return arg.name === varDef.variable.name.value; });
                        })
                        : [] });
            },
        },
        Field: {
            enter: function (node) {
                // If `remove` is set to true for an argument, and an argument match
                // is found for a field, remove the field as well.
                var shouldRemoveField = config.some(function (argConfig) { return argConfig.remove; });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    if (node.arguments) {
                        node.arguments.forEach(function (arg) {
                            if (argMatcher(arg)) {
                                argMatchCount_1 += 1;
                            }
                        });
                    }
                    if (argMatchCount_1 === 1) {
                        return null;
                    }
                }
            },
        },
        Argument: {
            enter: function (node) {
                // Remove all matching arguments.
                if (argMatcher(node)) {
                    return null;
                }
            },
        },
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function (def) { return def.name === node.name.value; })) {
            return null;
        }
    }
    return nullIfDocIsEmpty(visit(doc, {
        FragmentSpread: { enter: enter },
        FragmentDefinition: { enter: enter },
    }));
}
// If the incoming document is a query, return it as is. Otherwise, build a
// new document containing a query operation based on the selection set
// of the previous main operation.
function buildQueryFromSelectionSet(document) {
    var definition = (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__/* .getMainDefinition */ .Vn)(document);
    var definitionOperation = definition.operation;
    if (definitionOperation === "query") {
        // Already a query, so return the existing document.
        return document;
    }
    // Build a new query using the selection set of the main operation.
    var modifiedDoc = (0,graphql__WEBPACK_IMPORTED_MODULE_5__/* .visit */ .YR)(document, {
        OperationDefinition: {
            enter: function (node) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, node), { operation: "query" });
            },
        },
    });
    return modifiedDoc;
}
// Remove fields / selection sets that include an @client directive.
function removeClientSetsFromDocument(document) {
    (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__/* .checkDocument */ .sw)(document);
    var modifiedDoc = removeDirectivesFromDocument([
        {
            test: function (directive) { return directive.name.value === "client"; },
            remove: true,
        },
    ], document);
    return modifiedDoc;
}
function addNonReactiveToNamedFragments(document) {
    (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_2__/* .checkDocument */ .sw)(document);
    return (0,graphql__WEBPACK_IMPORTED_MODULE_5__/* .visit */ .YR)(document, {
        FragmentSpread: function (node) {
            var _a;
            // Do not add `@nonreactive` if the fragment is marked with `@unmask`
            // since we want to react to changes in this fragment.
            if ((_a = node.directives) === null || _a === void 0 ? void 0 : _a.some(function (directive) { return directive.name.value === "unmask"; })) {
                return;
            }
            return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, node), { directives: (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__spreadArray)([], (node.directives || []), true), [
                    {
                        kind: graphql__WEBPACK_IMPORTED_MODULE_1__/* .Kind */ .b.DIRECTIVE,
                        name: { kind: graphql__WEBPACK_IMPORTED_MODULE_1__/* .Kind */ .b.NAME, value: "nonreactive" },
                    },
                ], false) });
        },
    });
}
//# sourceMappingURL=transform.js.map

/***/ }),

/***/ 36697:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $D: () => (/* binding */ createFulfilledPromise),
/* harmony export */   Il: () => (/* binding */ createRejectedPromise),
/* harmony export */   zq: () => (/* binding */ wrapPromiseWithState)
/* harmony export */ });
/* unused harmony export isStatefulPromise */
function createFulfilledPromise(value) {
    var promise = Promise.resolve(value);
    promise.status = "fulfilled";
    promise.value = value;
    return promise;
}
function createRejectedPromise(reason) {
    var promise = Promise.reject(reason);
    // prevent potential edge cases leaking unhandled error rejections
    promise.catch(function () { });
    promise.status = "rejected";
    promise.reason = reason;
    return promise;
}
function isStatefulPromise(promise) {
    return "status" in promise;
}
function wrapPromiseWithState(promise) {
    if (isStatefulPromise(promise)) {
        return promise;
    }
    var pendingPromise = promise;
    pendingPromise.status = "pending";
    pendingPromise.then(function (value) {
        if (pendingPromise.status === "pending") {
            var fulfilledPromise = pendingPromise;
            fulfilledPromise.status = "fulfilled";
            fulfilledPromise.value = value;
        }
    }, function (reason) {
        if (pendingPromise.status === "pending") {
            var rejectedPromise = pendingPromise;
            rejectedPromise.status = "rejected";
            rejectedPromise.reason = reason;
        }
    });
    return promise;
}
//# sourceMappingURL=decoration.js.map

/***/ })

}]);

