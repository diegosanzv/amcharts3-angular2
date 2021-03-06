(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./index"], factory);
    }
})(function (require, exports) {
    "use strict";
    /**
    * @fileoverview This file is generated by the Angular template compiler.
    * Do not edit.
    * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
    * tslint:disable
    */ 
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./index");
    var AmChartsModuleNgFactory = i0.ɵcmf(i1.AmChartsModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i1.AmChartsService, i1.AmChartsService, [i0.NgZone]), i0.ɵmpd(512, i1.AmChartsModule, i1.AmChartsModule, [])]); });
    exports.AmChartsModuleNgFactory = AmChartsModuleNgFactory;
});
//# sourceMappingURL=index.ngfactory.js.map