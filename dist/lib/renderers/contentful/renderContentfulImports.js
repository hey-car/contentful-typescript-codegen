"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderContentfulImports(localization) {
    if (localization === void 0) { localization = false; }
    if (localization) {
        return "\n    // THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.\n\n    import { Entry } from 'contentful'\n    import { Document } from '@contentful/rich-text-types'\n  ";
    }
    return "\n    // THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.\n\n    import { Asset, Entry } from 'contentful'\n    import { Document } from '@contentful/rich-text-types'\n  ";
}
exports.default = renderContentfulImports;
//# sourceMappingURL=renderContentfulImports.js.map