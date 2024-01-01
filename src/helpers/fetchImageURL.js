import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export async function fetchImageURL(imagePath) {
  const storage = getStorage();
  const imageRef = ref(storage, imagePath);

  try {
    const imageURL = await getDownloadURL(imageRef);
    return imageURL;
  } catch (error) {
    console.error("Resim URL'si alınırken bir hata oluştu:", error);
    return null;
  }
}
