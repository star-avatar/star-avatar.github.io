'use strict';

(function () {
    return;

})();


(function () {
    return;
})();

(function() {
    // Create mesh holders.
    let sharedAttributes = {
        ar: true,
        "ar-modes": "webxr scene-viewer quick-look",
        loading: "lazy",
        reveal: "manual",
        // crossorigin: "anonymous",
        style: "height: 300px; width: 100%;",
        "autoplay": true,
        "camera-controls": true,
        "touch-action": "pan-y",
        "shadow-intensity": "1",
        "max-camera-orbit": "auto 90deg auto",
        exposure: "1"
    };

    let meshAttributes = {
        Albert: {
            src: "./assets/meshes/Albert Einstein in cartoon style wearing beach T-shirts and shorts_A person is performing the street dance with rhythm.glb",
            poster: "./assets/images_poster/Albert.png",
            // "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
            caption: "Albert Einstein in cartoon style wearing beach T-shirts and shorts, he/she is performing the street dance with rhythm.",
        },
        Tyrion: {
            src: "./assets/meshes/Tyrion Lannister in Game of Thrones wearing black leather jacket_A person is performing extreme acrobat while raising hands and kicking quickly.glb",
            poster: "./assets/images_poster/Tyrion.png",
            // "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
            caption: "Tyrion Lannister in Game of Thrones wearing black leather jacket, he/she is performing extreme acrobat while raising hands and kicking quickly.",
        },
       Otaku: {
            src: "./assets/meshes/Chubby otaku boy wearing school uniform_A person is turning 180 degrees while running.glb",
            poster: "./assets/images_poster/Otaku.png",
            // "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
            caption: "Chubby otaku boy wearing school uniform, he/she is turning 180 degrees while running.",
        },
        Mulan: {
            src: "./assets/meshes/Slim Mulan with short hair by Disney_A person is dancing hip hope excitingly.glb",
            poster: "./assets/images_poster/Mulan.png",
            // "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
            caption: "Slim Mulan with short hair by Disney, he/she is dancing hip hope excitingly.",
        },
        Chef: {
            src: "./assets/meshes/Overweight chef dressed in white_A person is dancing salsa happily.glb",
            poster: "./assets/images_poster/Chef.png",
            // "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
            caption: "Overweight chef dressed in white, he/she is dancing salsa happily.",
        },
        Flynn: {
            src: "./assets/meshes/Flynn Rider in movie Tangled_A person is fighting Tai Chi.glb",
            poster: "./assets/images_poster/Flynn.png",
            // "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
            caption: "Flynn Rider in movie Tangled, he/she is fighting Tai Chi.",
        },
        Model: {
            src: "./assets/meshes/A plus-size model wearing pyjamas_A person is singing while walking on stage.glb",
            poster: "./assets/images_poster/Model.png",
            // "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
            caption: "A plus-size model wearing pyjamas, he/she is singing while walking on stage.",
        },
        King: {
            src: "./assets/meshes/Overweight medieval European king wearing king's robe_A person is boxing back hand uppercut.glb",
            poster: "./assets/images_poster/King.png",
            // "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
            caption: "Overweight medieval European king wearing king's robe, he/she is boxing back hand uppercut.",
        },
        Woody: {
            src: "./assets/meshes/Woody in Toy Story_A person is dancing afoxe samba reggae dance.glb",
            poster: "./assets/images_poster/Woody.png",
            // "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
            caption: "Woody in Toy Story, he/she is dancing afoxe samba reggae dance.",
        },
        OnePunch: {
            src: "./assets/meshes/One-Punch Man_A person is performing Chinese KungFu and kicking frequently.glb",
            poster: "./assets/images_poster/OnePunch.png",
            // "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
            caption: "One-Punch Man, he/she is performing Chinese KungFu and kicking frequently.",
        },
        Captain: {
            src: "./assets/meshes/Captain America_A person is tiptoeing and hiding his hands so no one hears him.glb",
            poster: "./assets/images_poster/Captain.png",
            // "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
            caption: "Captain America, he/she is tiptoeing and hiding his hands so no one hears him.",
        },
        LeCun: {
            src: "./assets/meshes/Yann LeCun in cartoon-style wearing black suits_A person is dancing.glb",
            poster: "./assets/images_poster/Lecun.png",
            // "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
            caption: "Yann LeCun in cartoon-style wearing black suits, he/she is dancing.",
        },
    };

    let meshRows = [
        ['Albert','Tyrion','Otaku','Mulan', 'Chef','Flynn','Model','King','Woody','OnePunch','Captain','LeCun'],
    ];

    let container = document.getElementById("meshContainer");
    meshRows.forEach((meshIds) => {
        let row = document.createElement("DIV");
        row.classList = "row";

        meshIds.forEach((meshId) => {
            let col = document.createElement("DIV");
            col.classList = "col-md-6 col-sm-6 my-auto";
            
            // Model viewer.
            let model = document.createElement("model-viewer");
            for (const attr in sharedAttributes) {
                if (attr != "caption" && attr != "shortCaption")
                    model.setAttribute(attr, sharedAttributes[attr]);
            }
            for (const attrCustom in meshAttributes[meshId]) {
                if (attrCustom != "caption" && attrCustom != "shortCaption")
                    model.setAttribute(attrCustom, meshAttributes[meshId][attrCustom]);
            }
            model.id = 'mesh-' + meshId;

            // Controls.
            let controls = document.createElement("div");
            controls.className = "controls";
            let buttonLoad = document.createElement("button");
            buttonLoad.classList = "btn btn-primary loads-model";
            buttonLoad.setAttribute("data-controls", model.id);
            buttonLoad.appendChild(document.createTextNode("Load 3D model"));
            // let buttonToggle = document.createElement("button");
            // buttonToggle.classList = "btn btn-primary toggles-texture";
            // buttonToggle.setAttribute("data-controls", model.id);
            // buttonToggle.appendChild(document.createTextNode("Toggle texture"));
            controls.appendChild(buttonLoad);
            // controls.appendChild(buttonToggle);

            // Caption.
            let caption = document.createElement("p");
            caption.classList = "caption";
            caption.title = meshAttributes[meshId]["caption"] || "";
            caption.appendChild(document.createTextNode(meshAttributes[meshId]["shortCaption"] || caption.title));

            col.appendChild(model);
            col.appendChild(controls);
            col.appendChild(caption);
            row.appendChild(col);
        });

        container.appendChild(row);
    });

    // Toggle texture handlers.
    document.querySelectorAll('button.toggles-texture').forEach((button) => {
        button.addEventListener('click', () => {
            let model = document.getElementById(button.getAttribute("data-controls"));

            console.log(model.model);
            let material = model.model.materials[0];
            let metallic = material.pbrMetallicRoughness;
            let originalTexture = metallic.pbrMetallicRoughness.baseColorTexture;
            let originalBaseColor = metallic.pbrMetallicRoughness.baseColorFactor;
            console.log('model load', model.model, material, 'metallic', metallic, originalTexture);

            let textureButton = model.querySelector('.toggles-parent-texture');
            console.log('texture button', textureButton);
            // if (originalTexture && textureButton) {
            let textureOn = true;
            textureButton.onclick = () => {
                if (textureOn) {
                    // model.model.materials[0].pbrMetallicRoughness.baseColorTexture.setTexture(null);
                    // model.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([1., 1., 1., 1.]);
                    // textureOn = false;
                    // console.log('toggle texture off');
                } else {
                    // model.model.materials[0].pbrMetallicRoughness.baseColorTexture.setTexture(originalTexture) ;
                    // model.model.materials[0].pbrMetallicRoughness.setBaseColorFactor(originalBaseColor);
                    // textureOn = true;
                    // console.log('toggle texture on');
                }
            };
        });
    });

    // Click to load handlers for 3D meshes.
    document.querySelectorAll('button.loads-model').forEach((button) => {
        button.setAttribute('data-action', 'load');
        button.addEventListener('click', () => {
            // button.classList = button.classList + " disappearing";
            // let model = button.parentElement.parentElement;
            let model = document.getElementById(button.getAttribute("data-controls"));

            if (button.getAttribute('data-action') == 'load') {
                model.dismissPoster();
                button.classList = "btn btn-disabled";
                button.innerHTML = "Hide 3D model";
                button.setAttribute('data-action', 'unload');
            } else {
                model.showPoster();
                button.classList = "btn btn-primary";
                button.innerHTML = "Load 3D model";
                button.setAttribute('data-action', 'load');
            };
        });
    });
    // document.querySelectorAll('button.toggles-parent-texture').forEach((button) => {
    //     let model = button.parentElement.parentElement;
    //     let originalTexture = model.materials[0].pbrMetallicRoughness.baseColorTexture;
    //     let textureOn = true;
    //     button.addEventListener('click', () => {
    //         if (textureOn) {
    //             model.materials[0].pbrMetallicRoughness.baseColorTexture.setTexture(null);
    //             textureOn = false;
    //         } else {
    //             model.materials[0].pbrMetallicRoughness.baseColorTexture.setTexture(originalTexture) ;
    //             textureOn = true;
    //         }
    //     });
    // });
})();
