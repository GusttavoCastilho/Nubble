import {ImageForUpload} from './multimediaType';

function prepareImageForUpload(imageUri: string): ImageForUpload {
  return {
    uri: imageUri,
    name: 'photo.jpg',
    type: 'image/jpeg',
  };
}

export const multimediaService = {prepareImageForUpload};
