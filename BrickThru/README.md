# BrickThru
![Logo](https://user-images.githubusercontent.com/36399893/142739089-30e61f10-7c2d-4071-9e11-8b09551447ff.png)

This is the react native application directory for BrickThru. This contains an Android App that has a USB serial library attached in order to collect Wi-Fi CSI data from an ESP32 development board.



## Local Build and Run

#### Pre-requisites
1. [Install Node and NPM](https://nodejs.org/en/download/)
2. [Create free IBM Cloud account with $200 USD in credits](https://developer.ibm.com/callforcode/get-started/)


#### Steps to build and run
Running the react native app is relatively simple. All you need to do is to setup react native on your machine through following the steps in the [React Native Docs](https://reactnative.dev/docs/getting-started) and then doing the following:

  - Replace the `IBM_API_KEY` variable in the `MachineLearningService.js` file with your own api key.
  - Run `npm install` in the BrickThru root directory.
  - Then run `npx react-native run-android` in the same directory.
  - Then the application should be running on the emulator you setup through the link above.
  - You can also run the app on your physical device through connecting it using a USB cable and then running the command above.


If you have your esp32 ready and flashed to connect to an known access point, then you can connect it right away using an OTG cable. The application will read the CSI data from the esp32 right away.

Your device must support OTG for the reading to work.

#### Runnable devices
This app can run on all Samsung smartphones with Android SDK version 19 (Android 4) or above.
