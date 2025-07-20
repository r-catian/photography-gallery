const narraKyotoImages = import.meta.glob("../assets/nara-kyoto/*.{jpg,jpeg,png,JPG,JPEG,PNG,RAF}", { eager: true, as: 'url' });
const snapShots = import.meta.glob("../assets/loyd-photography/*.{jpg,jpeg,png,JPG,JPEG,PNG,RAF}", { eager: true, as: 'url' });
const ronShots = import.meta.glob("../assets/birthday-photoShoot/*.{jpg,jpeg,png,JPG,JPEG,PNG,RAF}", { eager: true, as: 'url' });
const genaroShots = import.meta.glob("../assets/cagats/*.{jpg,jpeg,png,JPG,JPEG,PNG,RAF}", { eager: true, as: 'url' });
const roadCornerShots = import.meta.glob("../assets/road-corner/*.{jpg,jpeg,png,JPG,JPEG,PNG,RAF}", { eager: true, as: 'url' });
const condatShots = import.meta.glob("../assets/condat/*.{jpg,jpeg,png,JPG,JPEG,PNG,RAF}", { eager: true, as: 'url' });
const joshShots = import.meta.glob("../assets/joshua/*.{jpg,jpeg,png,JPG,JPEG,PNG,RAF}", { eager: true, as: 'url' });
const dreamShots = import.meta.glob("../assets/dream/*.{jpg,jpeg,png,JPG,JPEG,PNG,RAF}", { eager: true, as: 'url' });

export const dataGallery = {
  'Nara-Japan': Object.values(narraKyotoImages),
  'Street-Snapshots': Object.values(snapShots),
  'Ron Pre-Birthday PhotoShoot': Object.values(ronShots),
  'Autumn Through My Lens': Object.values(genaroShots),
  'Quiet Corners of Japan': Object.values(roadCornerShots),
  'Layers & Laughter': Object.values(condatShots),
  'Shot by me. Felt by you': Object.values(dreamShots),
};


