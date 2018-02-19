import * as mustache from "mustache";


let Pop: any = {};
let template = `[{
    "name": "label",
    "values": {{{label1}}}
},
{
    "name": "General",
    "values": [{
        "name": "In the box",
        "value": {{{box1}}}
    }, {
        "name": "Model Number",
        "value": {{{model1}}}
    }, {
        "name": "Model Name",
        "value": {{{model2}}}
    }, {
        "name": "Color",
        "value": {{{color1}}}
    }, {
        "name": "Browse Type",
        "value": {{{browse1}}}
    }, {
        "name": "SIM Type",
        "value": {{{sim1}}}
    }, {
        "name": "Hybrid Sim Slot",
        "value": "Yes"
    }, {
        "name": "Touchscreen",
        "value": "Yes"
    }, {
        "name": "OTG Compatible",
        "value": "Yes"
    }, {
        "name": "Quick Charging",
        "value": "Yes"
    }]
}]`;
let data = {
    label1: `["Lava Red", "8GB RAM", "64GB ROM"]`
    , box1: `"Handset, Earphones Tuned by AKG, USB Type C Cable, Travel Adapter, USB Connector (C to A), Micro USB Connector (C to B), Ejector Pin, Quick Start and Smart Switch Leaflet"`
    , model1: `"SM-G950FZKDINS"`
    , model2: `"Galaxy S8"`
    , color1: `"Midnight Black"`
    , browse1: `"Smartphones"`
    , sim1: `"Dual Sim"`

}
Pop.doPopulate = () => {
    let text = mustache.render(template, data);
    console.log(text);
};

export { Pop };