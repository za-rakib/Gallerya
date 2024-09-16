# Gallerya

A mobile app that displays a gallery of images fetched from the JSONPlaceholder API. Users can browse thumbnails, view image details, search, and access images offline.

This has been developed using `React Native` for both `iOS` and `Android`.
Currently using Node v18.16.0 , java 20.0.2 and Ruby version 3.0.0p0 to build.

## Features

- **Gallery Screen**: Responsive grid layout with image thumbnails.
- **Image Detail Screen**: Large view of the selected image with metadata.
- **Search**: Filter images by title or album.
- **Offline Caching**: Cached images for offline access.
- **Lazy Loading**: Images load as the user scrolls.

## Technologies Used

- **React Native**
- **Redux Toolkit**
- **React Navigation**

## Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/za-rakib/Gallerya
   ```

2. Install dependencies:

   ```bash
   npm install

   cd ios
   pod install
   ```

3. Run the app:

### using npm

npm start

4: Start Application

### For Android

```bash
# using npm
npm run android
```

### For iOS

```bash
# using npm
npm run ios
```

## Screenshots

### Gallery Screen
This screen displays a grid of images fetched from the JSONPlaceholder API. Users can scroll and tap on any image to view more details.

<img src="https://github.com/za-rakib/Gallerya/blob/development/src/assets/screenshots/Icon.jpeg" alt="Gallery Screen" width="400" />

### Image Detail Screen
On the detail screen, users can see the selected image in a larger view along with additional metadata.

<img src="https://github.com/za-rakib/Gallerya/blob/development/src/assets/screenshots/gallery.jpeg" alt="Image Detail Screen" width="400" />

