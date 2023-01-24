import FilerobotImageEditor, {
    TABS,
    TOOLS,
  } from "react-filerobot-image-editor";
  // import { Button } from "@chakra-ui/react";
  import { useState, useEffect } from "react";
  // import toDataURL from "../utils/toDataURL";
  import "../styles/Editor.css";
  
  
  export default function NFTEditor({
    backgroundImageURL,
    onNFTSave
  }) {
    const [background, setBackground] = useState(backgroundImageURL);
  
    //editedImageObject is the base64 image
    const saveImage = (editedImageObject, designState) => {
      onNFTSave(editedImageObject.imageBase64);
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
      <div className="editor">
      <FilerobotImageEditor
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
          source={backgroundImageURL}
          defaultSavedImageName="mymeme"
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
          tabsIds={[TABS.ADJUST, TABS.ANNOTATE, TABS.WATERMARK, TABS.RESIZE]} // or {['Adjust', 'Annotate', 'Watermark']}
          defaultTabId={TABS.ANNOTATE} // or 'Annotate'
          defaultToolId={TOOLS.IMAGE} // or 'Image'
      />
  </div>
    );
  }
  