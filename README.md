# BrickThru
![Logo](https://user-images.githubusercontent.com/36399893/142739089-30e61f10-7c2d-4071-9e11-8b09551447ff.png)

Firefighters risk their own lives to keep everyone else's safety; they deserve a tool to make their jobs faster, easier and safer. For this reason, we developed BrickThru mobile application that helps them detect and locate people in burning buildings. We built the solution around the idea that humans have a unique effect on the signal they interfere with within a specific wi-fi network range. There is a good amount of research that shows how we can apply this concept to achieve Human Detection and Human Activity Recognition (E.g. walking, running, falling, breathing). In this project, we collect Wi-fi Channel State Information (CSI), perform necessary filters to remove noise from the signal and utilize IBM's powerful machine learning tools to predict human existence and track their location in real-time.

## 1) Short Description

### 1.1) What's the problem?

When firefighters arrive at fire scenes, they only have a few seconds to make decisions. Sometimes they don't have enough givens, they may not know whether there are people in the flames to rescue or not. They may not know how many people are there or where they are. They carry the fear of not being fast enough through the mission and the guilt of missing anyone after it.

### 1.2) How can technology help?

Research surrounding Device-free Wifi-Sensing (DFWS) is becoming more prevalent and showing excellent results in achieving accurate sensing with minimal infrastructure. Wifi signals are everywhere around us and can be used to detect humans and their different activities, like falling, walking, or even breathing. So, utilizing them provides firefighters with an affordable, portable, and convenient way to locate people inside burning buildings. Such live data could help them respond faster, keep safer, and rescue more lives.

### 1.3) The idea

Firefighters arrive at fire scenes wearing heavy gears and barely seeing or breathing from all the smoke. They have to make decisions a few seconds after they arrive. The pressure is immense knowing they're responsible for peoples' lives, and there might be people inside relying on them. By closing the data gap to firefighters (using IBM's powerful machine learning tools) in fire scenes, they can do their jobs faster, safer, and better without the extra pressure and guilt. We provide them with live dashboards to track people who need to be rescued within a fire scene and allocate them to the nearest firefighters. Additionally, we help the crew look after one another by tracking their health metrics through Samsung smartwatches and notifying the captain in case something doesn't look right.

## 2) Background

### 2.1) What is CSI?
Channel state information (CSI) indicates carrier signal strength, amplitude, phase, and signal delay, which vary according to the transmission distance. Such variance reveals the signal scattering, reflection, and power attenuation phenomena within the carrier, and can be used to measure the channel status of the wireless network in Wi-Fi communication. By analyzing and studying the changes in CSI, we can conclude the changes in the physical environment that cause the changes in the channel state and achieve non-contact intelligent sensing. CSI is extremely sensitive to environmental changes caused by large movements (E.g. walking/ running) and subtle movements (E.g. breathing/ chewing).

### 2.2) How to collect CSI?
Previously, mobile phones supported measuring the CSI; but they don't anymore for security reasons and the numerous applications of CSI. For this reason, the below existing tools use ESP32 to measure the needed CSI values:
  - [Atheros CSI tool](https://wands.sg/research/wifi/AtherosCSI/)
  - [Esp32 CSI Toolkit](https://stevenmhernandez.github.io/ESP32-CSI-Tool/)
  - [ESP-CSI tool](https://github.com/espressif/esp-csi)

### 2.3) CSI Applications
  #### 2.3.1) Intruder detection
  Select high-sensitivity sub-carrier combinations and signals from non-line-of-sight path directions in different multipath propagation environments, thereby enhancing the sensitivity of passive person detection and expanding the detection range. This method can form "no blind spot" intruder detection in security applications. The multipath propagation characteristics of wireless signals indoors make wireless perception have natural advantages in sensing range and directionality.
  #### 2.3.2) Positioning and ranging
You can learn from the RSSI method and use CSI as a more informative fingerprint (including information on signal amplitude and phase on multiple subcarriers), or rely on a frequency selective attenuation model for more accurate ranging.
  #### 2.3.3) Human activity detection and recognition
  Use CSI's high sensitivity to environmental changes to recognize human movements, gestures, breathing and other small movements and daily activities.

  #### 2.3.4) Fire Detection
  CSI can be used to detect fires as studied and implemented [here](https://www.huangyongzhi.com.cn/data/WiFire.pdf). However, in BrickThru we are currently working on reversing that research methodolgy in the filtering process so that we can completely exclude fire in a fire scene.

### 2.4 Supporting Research
- https://dl.acm.org/doi/abs/10.1145/3310194
- https://www.hindawi.com/journals/misy/2020/3185416/
- https://github.com/espressif/esp-csi
- https://www.huangyongzhi.com.cn/data/WiFire.pdf

## 3) Video Demo

This video demonstrates what we our progress and the result of running this repo so far.

[![Watch the video](https://user-images.githubusercontent.com/36338906/142749433-526e6d1b-454b-4c82-9b23-219dd53ca81c.png)](https://youtu.be/X8YdR6K8-n0)

## 4) Pitch

[![Watch the video](https://user-images.githubusercontent.com/36399893/142743014-0180588b-ee16-4212-90e3-95bd7b5a78e8.png)](https://youtu.be/nF6zjdPKHig)

## 5) The architecture

### 5.1) Hardware Setup
![Hardware](https://user-images.githubusercontent.com/36338906/142749590-977903f1-fda3-4508-a45b-25f00bc75909.png)

In the setup we use a Samsung Android Phone connected to an esp32 development board using an OTG cable. We utilize a Router or an Access Point on the other side. The router and esp32 board exchange packets in a regular manner and the esp32 extracts CSI data during that process.

CSI data can be collected directly on a smartphone, however, most companies do not give developers access to it. We can partner with Samsung to collect CSI from mobile directly, and in this case we can get rid of the ESP32 and the OTG cable. The Firefighter would only need his phone, and such a feature would exclusvely be available on Samsung devices.

The Router could be replaced with ESP32 with strong antenna or a Wi-Fi directed antenna.

### 5.2) Software Setup
![Software](https://user-images.githubusercontent.com/36338906/142749610-333efcc0-439d-49c6-ab6c-1e817f6d5669.png)

CSI data collected is pre-processed by the Android phone. Pre-processing include filtering, de-noising and running detection helper algorithms to trigger the real-time machine learning predictions.
We train the model using a dataset in different environments and using different human activities which makes it able to accurately detect human presence.


## 6) User Flow

### 6.1) Onboarding
![Splash](https://user-images.githubusercontent.com/36399893/142740946-80c42f9e-1218-433a-bd77-75fce2abaca3.png)
![1](https://user-images.githubusercontent.com/36399893/142740924-6535a3aa-a2c6-46bf-9aca-16e7ca470269.png)
![2](https://user-images.githubusercontent.com/36399893/142740929-609cc515-a5d4-400b-80cd-770d0cbb0480.png)
![3](https://user-images.githubusercontent.com/36399893/142740936-b93c746d-512b-47d9-886d-f4b666a73219.png)

### 6.2) Authentication
![1](https://user-images.githubusercontent.com/36399893/142741098-ccb62bec-1c0e-4412-a014-94ec05fec08e.png)
![2](https://user-images.githubusercontent.com/36399893/142741101-05bcbfed-e7f0-483e-a9d0-a6c42f6dc275.png)
![3](https://user-images.githubusercontent.com/36399893/142741102-691d39f2-3c3a-469d-af33-8cf4211489aa.png)
![4](https://user-images.githubusercontent.com/36399893/142741105-252bfb0e-f973-4235-92d4-d596662486c8.png)

### 6.3) Crew Management
![1](https://user-images.githubusercontent.com/36399893/142741612-e2487018-c5d5-4433-8e4a-08d04b84b5e9.png)
![2](https://user-images.githubusercontent.com/36399893/142741617-23375d6e-06b5-43a2-8ab3-11ee6465645a.png)
![3](https://user-images.githubusercontent.com/36399893/142741619-55a84083-d73e-4ca4-aa7d-0c1271380c16.png)
![4](https://user-images.githubusercontent.com/36399893/142741622-4761aa63-dccc-4d1a-9923-5e07f5549150.png)
![5](https://user-images.githubusercontent.com/36399893/142741624-410900ae-eb13-4627-8eb7-8d01706ef746.png)

### 6.4) Mission Management
![1](https://user-images.githubusercontent.com/36399893/142741761-5685eada-a600-4f11-9c1e-65bec860b10b.png)
![2](https://user-images.githubusercontent.com/36399893/142741763-aa0b9ac1-2fb2-4b77-aa9d-5988b81af746.png)
![3](https://user-images.githubusercontent.com/36399893/142741766-fe054fa2-f0ff-482a-bdd1-2a5de0c7d6ef.png)
![4](https://user-images.githubusercontent.com/36399893/142741770-c1e80341-58cf-4588-b81b-f0dee197d28c.png)
![5](https://user-images.githubusercontent.com/36399893/142741852-95993c56-d91f-4cb4-b580-7c2e19ff4a6c.png)
![6](https://user-images.githubusercontent.com/36399893/142741979-e74b430d-8dee-403d-975f-fe31d72ac421.png)

### 6.5) Empathy Map
![W-fire](https://user-images.githubusercontent.com/36338906/142754141-2d9c944f-1ef2-4d62-8a2f-35556291126c.png)


## 7) Getting started

- To run the app you can follow the steps in the [BrickThru react-native](./BrickThru) directory.
- In order to prepare and flash the ESP32, you can follow the steps of the [ESP CSI Toolkit](https://stevenmhernandez.github.io/ESP32-CSI-Tool/) we used.


## 8) Built with

- [IBM Cloudant](https://cloud.ibm.com/catalog?search=cloudant#search_results) - The NoSQL database used
- [IBM Cloud Functions](https://cloud.ibm.com/catalog?search=cloud%20functions#search_results) - The compute platform for handing logic
- [IBM API Connect](https://cloud.ibm.com/catalog?search=api%20connect#search_results) - The web framework used
- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## 9) Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## 10) Authors

<a href="https://github.com/Call-for-Code/Project-Sample/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=Call-for-Code/Project-Sample" />
</a>

- **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)


## 11) Acknowledgments

- Based on [Billie Thompson's README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
