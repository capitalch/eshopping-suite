import * as mustache from "mustache";
import * as _ from "lodash";

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
    label1: [`["Lava Red", "8GB RAM", "64GB ROM"]`, `["Pitch White", "16GB RAM", "128GB ROM"]`]
    , box1: [`Handset, Earphones Tuned by AKG, USB Type C Cable, Travel Adapter, 
            USB Connector (C to A), Micro USB Connector (C to B), Ejector Pin, Quick Start and 
            Smart Switch Leaflet`, `Handset, Earphones Tuned by PHILIPS, USB Type B Cable, 
            USB Connector (C to D), USB Connector (A to C), Ejector Pin, Quick Start and 
            Smart Switch Leaflet, Other Features`]
    , model1: ["SM-G950FZKDINS", "DA-G634356HGRFD"]
    , model2: ["Galaxy S8", "PU 345"]
    , color1: ["Midnight Black", "PALE BLUE"]
    , browse1: ["Smartphones", "Featurephones"]
    , sim1: ["Dual Sim", "Single Sim"]

}
Pop.doPopulate = () => {
    let data1 = {
        label1: _.sample(data.label1),
        box1: _.sample(data.box1),
        model1: _.sample(data.model1),
        model2: _.sample(data.model2),
        color1: _.sample(data.color1),
        browse1: _.sample(data.browse1),
        sim1: _.sample(data.sim1)
    }
    let text = mustache.render(template, data1);
    console.log(text);
};

export { Pop };