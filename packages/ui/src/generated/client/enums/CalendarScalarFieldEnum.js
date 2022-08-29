"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CalendarScalarFieldEnum;
(function (CalendarScalarFieldEnum) {
    CalendarScalarFieldEnum["service_id"] = "service_id";
    CalendarScalarFieldEnum["monday"] = "monday";
    CalendarScalarFieldEnum["tuesday"] = "tuesday";
    CalendarScalarFieldEnum["wednesday"] = "wednesday";
    CalendarScalarFieldEnum["thursday"] = "thursday";
    CalendarScalarFieldEnum["friday"] = "friday";
    CalendarScalarFieldEnum["saturday"] = "saturday";
    CalendarScalarFieldEnum["sunday"] = "sunday";
    CalendarScalarFieldEnum["start_date"] = "start_date";
    CalendarScalarFieldEnum["end_date"] = "end_date";
})(CalendarScalarFieldEnum = exports.CalendarScalarFieldEnum || (exports.CalendarScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CalendarScalarFieldEnum, {
    name: "CalendarScalarFieldEnum",
    description: undefined,
});
