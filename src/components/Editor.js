import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from "react-filerobot-image-editor";
// import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
// import toDataURL from "../utils/toDataURL";
import "../styles/Editor.css";


export default function Editor({
  backgroundImageURL,
  pfpImageURL,
  bottomText,
  topText,
  isInvisible,
  onNFTSave
}) {
  const [background, setBackground] = useState(backgroundImageURL);
  const [pfp, setPfp] = useState(pfpImageURL);
  const [bottomMemeText, setBottom] = useState(bottomText);
  const [topMemeText, setTop] = useState(topText);

  //editedImageObject is the base64 image
  const saveImage = (editedImageObject, designState) => {
    onNFTSave(editedImageObject.imageBase64);
    //console.log("saved", editedImageObject, designState);
  };

  //THIS WORKS AND IS TESTED FOR SOME IMAGES, but CORS policy is preventing me from doing it on a lot of images
  //KEEP COMMENTED FOR NOW
  //const [overlayURL, setOverlayURL] = useState(null);
  // useEffect(() => {
  //     toDataURL(pfpImageURL).then(dataUrl => {
  //         setOverlayURL(dataUrl)
  //     })
  // }, []);

  // EDITOR WILL CRASH AND SHOW INVALID IMAGE at the bottom of the page if there is a cors issue or loading issue. if that is the case try reloading, if not try another image
  // ALSO SOME URLs WILL NOT WORK UNLESS THEY ARE CONVERTED TO BASE64, for some odd reason. I think the NFTs should be fine? But the background images don't work for the most part bc of CORS.

  return (
    // <div >
    //   <button onClick={openImgEditor}>Open Filerobot image editor</button>
    //   {isImgEditorShown && (
    //     <FilerobotImageEditor
    //       source="https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg"
    //       onSave={(editedImageObject, designState) =>
    //         console.log("saved", editedImageObject, designState)
    //       }
    //       onClose={closeImgEditor}
    //       annotationsCommon={{
    //         fill: "#ff0000",
    //       }}
    //       Text={{ text: "Filerobot..." }}
    //       Rotate={{ angle: 90, componentType: "slider" }}
    //       Crop={{
    //         presetsItems: [
    //           {
    //             titleKey: "classicTv",
    //             descriptionKey: "4:3",
    //             ratio: 4 / 3,
    //             // icon: CropClassicTv, // optional, CropClassicTv is a React Function component. Possible (React Function component, string or HTML Element)
    //           },
    //           {
    //             titleKey: "cinemascope",
    //             descriptionKey: "21:9",
    //             ratio: 21 / 9,
    //             // icon: CropCinemaScope, // optional, CropCinemaScope is a React Function component.  Possible (React Function component, string or HTML Element)
    //           },
    //         ],
    //         presetsFolders: [
    //           {
    //             titleKey: "socialMedia", // will be translated into Social Media as backend contains this translation key
    //             // icon: Social, // optional, Social is a React Function component. Possible (React Function component, string or HTML Element)
    //             groups: [
    //               {
    //                 titleKey: "facebook",
    //                 items: [
    //                   {
    //                     titleKey: "profile",
    //                     width: 180,
    //                     height: 180,
    //                     descriptionKey: "fbProfileSize",
    //                   },
    //                   {
    //                     titleKey: "coverPhoto",
    //                     width: 820,
    //                     height: 312,
    //                     descriptionKey: "fbCoverPhotoSize",
    //                   },
    //                 ],
    //               },
    //             ],
    //           },
    //         ],
    //       }}
    //       tabsIds={[TABS.ADJUST, TABS.ANNOTATE, TABS.WATERMARK]} // or {['Adjust', 'Annotate', 'Watermark']}
    //       defaultTabId={TABS.ANNOTATE} // or 'Annotate'
    //       defaultToolId={TOOLS.TEXT} // or 'Text'
    //     />
    //   )}
    // </div>
    <div className="editor">
    <FilerobotImageEditor
        showCanvasOnly={isInvisible}
        theme={
            {
                palette: {
                    
                    'bg-primary-active': '#ffabab',
                    'bg-primary-hover': '#DCDCDC',
                    'bg-secondary': '#050505',
                    'txt-primary': '#C0C0C0',
                    'txt-secondary': '#FFFFFF',
                    'txt-secondary-invert': '#FFFFFF',
                    'accent-primary': '#FF0000',
                    'accent-primary-active': '#ff4949',
                    'accent-primary-hover': '#DD0000',

                }
            }
        }
        loadableDesignState={{
            imgSrc: background,
            filter: null,
            adjustments: {
                crop: {
                    ratio: "original",
                    ratioTitleKey: "original",
                    width: null,
                    height: null,
                    x: 0,
                    y: 0,
                }
            },
            annotations: {
                "Text-1230855752116": {
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "strokeWidth": 0,
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 0,
                    "shadowBlur": 0,
                    "shadowColor": "#000000",
                    "shadowOpacity": 1,
                    "opacity": 1,
                    "text": topMemeText,
                    "fontFamily": "Arial",
                    "fontSize": 21,
                    "letterSpacing": 0,
                    "lineHeight": 1,
                    "align": "center",
                    "fontStyle": "bold",
                    "name": "Text",
                    "x": 72.98084314903508,
                    "y": 8.574105102817978,
                    "width": 210.0827597634248,
                    "height": 38.98712871287128,
                    "id": "Text-1230855752116"
                },
                "Text-1081247773766": {
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "strokeWidth": 0,
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 0,
                    "shadowBlur": 0,
                    "shadowColor": "#000000",
                    "shadowOpacity": 1,
                    "opacity": 1,
                    "text": bottomMemeText,
                    "fontFamily": "Arial",
                    "fontSize": 21,
                    "letterSpacing": 0,
                    "lineHeight": 1,
                    "align": "center",
                    "fontStyle": "bold",
                    "name": "Text",
                    "id": "Text-1081247773766",
                    "x": 58.9753258314733,
                    "y": 192.51337903021061,
                    "width": 234.0922180221015,
                    "height": 32.98910891089117,
                    "rotation": 0,
                    "scaleX": 1,
                    "scaleY": 1
                },
                "Image-55453180422": {
                    "stroke": "#000000",
                    "strokeWidth": 0,
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 0,
                    "shadowBlur": 0,
                    "shadowColor": "#000000",
                    "shadowOpacity": 1,
                    "opacity": 1,
                    "name": "Image",
                    "image": pfp,
                    "x": 115.87735334960924,
                    "y": 32.464847806697634,
                    "width": 162.20470771562896,
                    "height": 202.6755852842809,
                    "id": "Image-55453180422",
                    "rotation": 0,
                    "scaleX": 0.7569829746134127,
                    "scaleY": 0.7569829746134132
                }
            },
            shownImageDimensions: {
                width: 349.1358024691358,
                height: 233.07692307692307,
                scaledBy: 1
            }
        }}
        source={backgroundImageURL}
        defaultSavedImageName="meme"
        onSave={(editedImageObject, designState) => saveImage(editedImageObject, designState)}
        annotationsCommon={{
            fill: '#ffffff',
        }}
        Text={
            { 
                text: 'Bonk Bonk',
                fontSize: 21,
                align: 'center',
            }
        }
        Rotate={{ angle: 90, componentType: 'slider' }}
        Crop={{
            presetsItems: [
            {
                titleKey: 'classicTv',
                descriptionKey: '4:3',
                ratio: 4 / 3,
                // icon: CropClassicTv, // optional, CropClassicTv is a React Function component. Possible (React Function component, string or HTML Element)
            },
            {
                titleKey: 'cinemascope',
                descriptionKey: '21:9',
                ratio: 21 / 9,
                // icon: CropCinemaScope, // optional, CropCinemaScope is a React Function component.  Possible (React Function component, string or HTML Element)
            },
            ],
            presetsFolders: [
            {
                titleKey: 'socialMedia', // will be translated into Social Media as backend contains this translation key
                // icon: Social, // optional, Social is a React Function component. Possible (React Function component, string or HTML Element)
                groups: [
                {
                    titleKey: 'facebook',
                    items: [
                    {
                        titleKey: 'profile',
                        width: 180,
                        height: 180,
                        descriptionKey: 'fbProfileSize',
                    },
                    {
                        titleKey: 'coverPhoto',
                        width: 820,
                        height: 312,
                        descriptionKey: 'fbCoverPhotoSize',
                    },
                    ],
                },
                ],
            },
            ],
        }}
        tabsIds={[TABS.ADJUST, TABS.ANNOTATE, TABS.WATERMARK]} // or {['Adjust', 'Annotate', 'Watermark']}
        defaultTabId={TABS.ANNOTATE} // or 'Annotate'
        defaultToolId={TOOLS.IMAGE} // or 'Text'
    />
</div>
  );
}
