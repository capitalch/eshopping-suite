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

let dataSudipto = {
    label:[`["Lava Red", "8GB RAM", "64GB ROM"]`,`["Black", "4GB RAM", "Optical Sensor"]`,`["Pink", "2GB RAM", "Fingerprint Sensor"]`,`["White", "6GB RAM", "126GB ROM"]`,`["Night Black", "4GB RAM", "Optical Sensor", "Fingerprint Sensor"]`,`["Sapphire Blue", "6GB RAM", "Voice Recognition"]`,`["Coral White", "4GB RAM", "256GB ROM"]`,`["Transparent", "2GB RAM", "VOLTE"]`,`["Blue", "6GB RAM", "128GB ROM", "Carl Zeiss Lens"]`,`["White", "2GB RAM", "256GB ROM"]`]
    , inTheBox: [`Handset, Earphones Tuned by AKG, USB Type C Cable, Travel Adapter, USB Connector (C to A), Micro USB Connector (C to B), Ejector Pin, Quick Start and Smart Switch Leaflet`,`Handset, Earphones, USB Type C Cable, USB Connector, Quick Start Guide`,`Handset, Earphones, USB Type C Cable, Ejector Pin, Quick Leaflet`,`Handset, Data Cable, Travel Adaptor, Ejection Pin, Stereo Headset, USB Connector`,`Handset, Travel Adaptor, Data Cable, Battery, Stereo Headset`,`Handset, USB Cable, Adapter, SIM Tray Remover Pin, User Guide, Warranty Card`,`Handset, Turbo Charger, Wired Headset, Warranty Guide, Getting Started Guide`,`Handset, EarPods with Lightning Connector, Lightning to 3.5 mm Headphone Jack Adapter, Lightning to USB Cable, USB Power Adapter, Documentation`,`Handset, EarPods with Lightning Connector, Lightning to 3.5 mm Headphone Jack Adapter, Lightning to USB Cable, USB Power Adapter, Documentation`,`Handset, User Manual, 10W Rapid Charger and USB Cable`,`Handset, Battery, Charger, USB Cable, Earphones, Screen Guard, Back Cover, Warranty Card`,`Handset, Charger, Data Cable, Earphone, Ejector Pin`,`Handset, Battery, Earphones, Charger, User Guide`,`Handset, Headset, Charger, USB Cable, User Guide`,`Handset, Lightening Charger, Quick Start Guide, Data Cable, Headphone`]
    , modelNumber: [`SM-G950FZKDINS`,`MQ3D2HN/A`,`SM-J210FZDGINS`,`SM-G930FZKUINS/SM-G930FZSUINS/SM-G930FZDUINS`,`MQA62HN/A`,`XT 1902-3`,`SM-G925IZDAINS / SM-G925IZDAINU`,`MN8X2HN/A`,`XT 1686`,`XT1770`,`K33A42`,`PA330113IN/PA330117IN`,`SM-G900HZDAINS/INU`,`GT-I9500DKYINS/INU`,`SM-G850SZK`]
    , modelName: [`Galaxy S8`,`IPhone 6`,`Galaxy J2 Pro`,`Galaxy S7`,`iPhone X`,`K8 Note`,`Galaxy S6 Edge`,`iPhone 7`,`Moto G5 Plus`,`Moto E4 Plus`,`K6 Power`,`Vibe K5 Note`,`Galaxy S5`,`Galaxy S4`,`Galaxy Grand 2`]
    , color: [`Midnight Black`,`Pink`,`Red`,`Sapphire Blue`,`Blue`,`Black`,`White`,`Coral White`,`Transparent`,`Orange`]
    , browseType: [`Smartphones`,`Featurephones`]
    , simType: [`Dual Sim`,`Single Sim`]
    , hybridSimSlot: [`Yes`,`No`]
    , touchscreen: [`Yes`]
    , otgCompatible: [`Yes`,`No`]
    , quickCharging: [`Yes`,`No`]
    , displaySize: [`5.8 inch`,`5.2 inch`,`5.1 inch`,`5.25 inch`,`5.3 inch`,`5.4 inch`,`5.6 inch`,`5.7 inch`,`5.9 inch`,`6.0 inch`,`6.2 inch`,`6.1 inch`,`5.5 inch`,`4.9 inch`,`4.8 inch`]
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