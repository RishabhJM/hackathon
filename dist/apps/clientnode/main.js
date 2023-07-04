/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/clientnode/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const simulatorNode_1 = __webpack_require__("./apps/clientnode/src/app/simulatorNode.ts");
let AppController = class AppController {
    constructor() {
        this.node = new simulatorNode_1.SimulatorNode();
    }
    getData() {
        return 'Welcome!';
    }
    postData(searchData) {
        return this.node.OnStep(searchData);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppController.prototype, "getData", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", String)
], AppController.prototype, "postData", null);
AppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)()
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/clientnode/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const app_controller_1 = __webpack_require__("./apps/clientnode/src/app/app.controller.ts");
const common_1 = __webpack_require__("@nestjs/common");
let AppModule = class AppModule {
};
AppModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/clientnode/src/app/cell-state.model.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CellState = void 0;
class CellState {
    constructor(x, y) {
        this.m_X = 0;
        this.m_Y = 0;
        this.m_bPurchased = false;
        this.m_probability = 1;
        this.m_tryPurchase = false;
        this.m_estimatedReserve = 0;
        this.m_recoverableReserve = 0;
        this.m_bIsProducing = false;
        this.m_bIsProducingStopRequested = false;
        this.m_production = 0;
        this.m_isDrilled = false;
        this.m_isExplored = false;
        this.m_flagForStim = false;
        this.m_stimed = false;
        this.m_X = x;
        this.m_Y = y;
    }
    X() {
        return this.m_X;
    }
    Y() {
        return this.m_Y;
    }
    get Probability() {
        return this.m_probability;
    }
    set Probability(value) {
        if (this.m_probability != 0) {
            if (value < 0) {
                this.m_probability = 0;
            }
            else {
                this.m_probability = value;
            }
        }
    }
    BanCell() {
        this.m_probability = 0;
    }
    MarkAsPurchased() {
        this.m_bPurchased = true;
    }
    Purchased() {
        return this.m_bPurchased;
    }
    get TryPurchase() {
        return this.m_tryPurchase;
    }
    set TryPurchase(value) {
        this.m_tryPurchase = value;
    }
    get Estimatedreserve() {
        return this.m_estimatedReserve;
    }
    set Estimatedreserve(value) {
        this.m_estimatedReserve = value;
    }
    get RecoverableReserve() {
        return this.m_recoverableReserve;
    }
    set RecoverableReserve(value) {
        this.m_recoverableReserve = value;
    }
    get Producing() {
        return this.m_bIsProducing;
    }
    set Producing(value) {
        this.m_bIsProducing = value;
    }
    get ProducingStopRequested() {
        return this.m_bIsProducingStopRequested;
    }
    set ProducingStopRequested(value) {
        this.m_bIsProducingStopRequested = value;
    }
    get Production() {
        return this.m_production;
    }
    set Production(value) {
        this.m_production = value;
    }
    get Drilled() {
        return this.m_isDrilled;
    }
    set Drilled(value) {
        this.m_isDrilled = value;
    }
    get Explored() {
        return this.m_isExplored;
    }
    set Explored(value) {
        this.m_isExplored = value;
    }
    get FlagForStim() {
        return this.m_flagForStim;
    }
    set FlagForStim(value) {
        this.m_flagForStim = value;
    }
    get Stimmed() {
        return this.m_stimed;
    }
    set Stimmed(value) {
        this.m_stimed = value;
    }
}
exports.CellState = CellState;


/***/ }),

/***/ "./apps/clientnode/src/app/simulatorNode.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SimulatorNode = void 0;
const cell_state_model_1 = __webpack_require__("./apps/clientnode/src/app/cell-state.model.ts");
class SimulatorNode {
    constructor() {
        this.m_stepCount = 0;
        this.m_money = 0;
        this.m_width = 0;
        this.m_height = 0;
        this.m_X = 0;
        this.m_Y = 0;
        this.m_index = -1;
        this.m_round = -1;
        this.first = true;
        // Not great variables for randonm strategy....
        this.m_buyIndex = -1;
        this.cellStore = [];
        this.i = 0;
        this.ogX = 0;
        this.ogY = 0;
    }
    m_random(MIN_NUMBER, MAX_NUMBER) {
        return (Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER);
    }
    OnStep(request) {
        let result = '';
        try {
            //
            // Step management. Update status absed on provided parameters from Master
            //
            this.m_stepCount++;
            let lastoperation = '';
            let lastoperationstatus = false;
            try {
                const operation = this.ParseInput(request, {
                    lastoperation,
                    lastoperationstatus,
                });
                lastoperation = operation.lastoperation;
                lastoperationstatus = operation.lastoperationstatus;
            }
            catch (e) {
                result += '<BR>Excep[tion while retreiving client information ' + e;
                return result;
            }
            // Maybe create a store to save the cell infromation if you plan on using it....
            //
            // Look at the current production
            //
            const production = request['production'];
            let resultOfDrilling = 0;
            if (production != null) {
                const listOfCellProduction = production.split(' ');
                const countOfProducingCells = listOfCellProduction.length;
                for (let i = 0; i < countOfProducingCells; i++) {
                    const prodinfo = listOfCellProduction[i].split(',');
                    if (prodinfo.length < 3)
                        continue;
                    let x = parseInt(prodinfo[0]);
                    let y = parseInt(prodinfo[1]);
                    let p = parseInt(prodinfo[2]);
                    resultOfDrilling = p;
                }
            }
            if (lastoperation == "Explore" && resultOfDrilling < 22) {
                console.log(resultOfDrilling);
                this.i = 8;
                this.m_stepCount += 1;
            }
            if (lastoperation == "Drill" && resultOfDrilling < 1) {
                console.log(resultOfDrilling);
                this.i++;
                this.m_stepCount += 2;
            }
            let arr = [0, 1, 0, -1, 1, 1, -1, -1];
            let arr1 = [-1, 0, 1, 0, 1, -1, -1, 1];
            let size = 8;
            // console.log(resultOfDrilling);
            // Now what should I do
            // You can probably do better than this random strategy......
            if (this.m_buyIndex == -1) {
                // Buy buy buy!
                this.m_X = this.m_random(0, this.m_width);
                this.m_Y = this.m_random(0, this.m_height);
                this.ogX = this.m_X;
                this.ogY = this.m_Y;
                result += this.TryToPurchaseAt(this.m_X, this.m_Y);
                this.cellStore.push({ x: this.m_X, y: this.m_Y });
                this.m_buyIndex = this.m_stepCount;
            }
            else if (this.m_buyIndex == this.m_stepCount - 1) {
                // Blindly try to drill
                result += this.TryToDrillAt(this.m_X, this.m_Y, true);
            }
            else if (this.m_buyIndex == this.m_stepCount - 2) {
                // Blindly try to stimulate
                result += this.TryToExploreAt(this.m_X, this.m_Y, true);
            }
            else if (this.m_buyIndex == this.m_stepCount - 4) {
                // Blindly try to stimulate
                result += this.TryToStimulateAt(this.m_X, this.m_Y, true);
            }
            else if (this.m_buyIndex == this.m_stepCount - 3) {
                // Blindly try to stimulate
                this.StopProduction(this.m_X, this.m_Y);
                ;
            }
            else if (this.m_buyIndex == this.m_stepCount - 5) {
                // Buy buy buy!
                //console.log(resultOfDrilling);
                if (this.i == size) {
                    this.m_X = this.m_random(0, this.m_width);
                    this.m_Y = this.m_random(0, this.m_height);
                    result += this.TryToPurchaseAt(this.m_X, this.m_Y);
                    this.i = 0;
                    this.ogX = this.m_X;
                    this.ogY = this.m_Y;
                }
                else {
                    this.m_X = this.ogX + arr[this.i];
                    this.m_Y = this.ogY + arr1[this.i];
                    result += this.TryToPurchaseAt(this.m_X, this.m_Y);
                    this.i++;
                }
                this.m_buyIndex = this.m_stepCount;
            }
        }
        catch (e) {
            result += '<BR>Exception while handling request ' + e;
        }
        return result;
    }
    ParseInput(request, operation) {
        for (const s in request) {
            switch (s) {
                case 'round':
                    this.m_round = parseInt(request[s]);
                    if (this.m_round == 0) {
                        SimulatorNode.m_cells = null;
                        this.m_width = 0;
                        this.m_height = 0;
                    }
                    break;
                case 'money':
                    this.m_money = parseInt(request[s]);
                    break;
                case 'width':
                    this.m_width = parseInt(request[s]);
                    break;
                case 'height':
                    this.m_height = parseInt(request[s]);
                    break;
                case 'lastoperation':
                    operation.lastoperation = request[s];
                    break;
                case 'lastoperationstatus':
                    operation.lastoperationstatus = request[s] == 'True';
                    break;
                case 'index':
                    this.m_index = parseInt(request[s]);
                    break;
            }
        }
        return operation;
    }
    TryToPurchaseAt(x, y) {
        let result = '';
        result += '<Execute>Buy</Execute>';
        result += '<BuyAtX>' + x + '</BuyAtX>';
        result += '<BuyAtY>' + y + '</BuyAtY>';
        return result;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ConfirmPurchaseAt(x, y) {
        let result = '';
        // Capture we have bought at X/Y (previous round)
        if (!SimulatorNode.m_cells[this.m_X][this.m_Y]) {
            SimulatorNode.m_cells[this.m_X][this.m_Y] = new cell_state_model_1.CellState(this.m_X, this.m_Y);
        }
        SimulatorNode.m_cells[this.m_X][this.m_Y].MarkAsPurchased();
        result += '<HR>Purchased ' + this.m_X + ' ' + this.m_Y;
        return result;
    }
    StopProduction(x, y) {
        let result = '';
        result +=
            '<Execute>StopProduction</Execute><StopProductionAtX>' +
                x +
                '</StopProductionAtX><StopProductionAtY>' +
                y +
                '</StopProductionAtY>';
        return result;
    }
    TryToExploreAt(x, y, slb) {
        let result = '';
        result += '<Execute>Explore</Execute>';
        result += '<ExploreAtX>' + x + '</ExploreAtX>';
        result += '<ExploreAtY>' + y + '</ExploreAtY>';
        result += '<ServiceProvider>';
        if (slb) {
            result += 'SLB';
        }
        else {
            result += 'HAL';
        }
        result += '</ServiceProvider>';
        return result;
    }
    TryToDrillAt(x, y, slb) {
        let result = '';
        result += '<Execute>Drill</Execute>';
        result += '<DrillAtX>' + x + '</DrillAtX>';
        result += '<DrillAtY>' + y + '</DrillAtY>';
        result += '<ServiceProvider>';
        if (slb) {
            result += 'SLB';
        }
        else {
            result += 'HAL';
        }
        result += '</ServiceProvider>';
        return result;
    }
    TryToStimulateAt(x, y, slb) {
        let result = '';
        result += '<Execute>Stimulate</Execute>';
        result += '<StimulateAtX>' + x + '</StimulateAtX>';
        result += '<StimulateAtY>' + y + '</StimulateAtY>';
        result += '<ServiceProvider>';
        if (slb) {
            result += 'SLB';
        }
        else {
            result += 'HAL';
        }
        result += '</ServiceProvider>';
        return result;
    }
}
exports.SimulatorNode = SimulatorNode;
// Something to store some cell infromation if you think this will be useful
SimulatorNode.m_cells = [];


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./apps/clientnode/src/app/app.module.ts");
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const port = process.env.PORT || 3333;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map