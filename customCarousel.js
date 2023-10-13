import { LightningElement } from 'lwc';

export default class LWCParentSliders extends LightningElement {
    slider1Image = 'https://countyofcolumbiana123--columqa.sandbox.file.force.com/servlet/servlet.ImageServer?id=015Dy000000CdWV&oid=00DDy0000008ooV&lastMod=1697227336000';
    slider2Image = 'https://countyofcolumbiana123--columqa.sandbox.file.force.com/servlet/servlet.ImageServer?id=015Dy000000CdWa&oid=00DDy0000008ooV&lastMod=1697227421000';
    slider3Image = 'https://countyofcolumbiana123--columqa.sandbox.file.force.com/servlet/servlet.ImageServer?id=015Dy000000CdWf&oid=00DDy0000008ooV&lastMod=1697227478000';
    slider4Image = 'https://countyofcolumbiana123--columqa.sandbox.file.force.com/servlet/servlet.ImageServer?id=015Dy000000CdWk&oid=00DDy0000008ooV&lastMod=1697227525000';
    slider5Image = 'https://countyofcolumbiana123--columqa.sandbox.file.force.com/servlet/servlet.ImageServer?id=015Dy000000CdWp&oid=00DDy0000008ooV&lastMod=1697228155000';
    slider6Image = 'https://countyofcolumbiana123--columqa.sandbox.file.force.com/servlet/servlet.ImageServer?id=015Dy000000CdWu&oid=00DDy0000008ooV&lastMod=1697228275000';
    autoScroll = true;

    get sliderData() {
        return [{
            "image": this.slider1Image,
        },
        {
            "image": this.slider2Image,
        },
        {
            "image": this.slider3Image,
        },
        {
            "image": this.slider4Image,
        },
        {
            "image": this.slider5Image,
        },
        {
            "image": this.slider6Image,
        },
        ]
    }
}