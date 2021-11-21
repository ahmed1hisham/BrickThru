# BrickThru
![Logo](https://user-images.githubusercontent.com/36399893/142739089-30e61f10-7c2d-4071-9e11-8b09551447ff.png)

Firefighters risk their own lives to keep everyone else's safety; they deserve a tool to make their jobs faster, easier and safer. For this reason, we developed BrickThru mobile application that helps them detect and locate people in burning buildings. We built the solution around the idea that humans ha a unique effect on the signal they interfere with within a specific wi-fi network range. There is a good amount of research that shows how we can apply this concept to achieve Human Detection and Human Activity Recognition (E.g. walking, running, falling, breathing). In this project, we collect Wi-fi Channel State Information (CSI), perform necessary filters to remove noise from the signal and utilize IBM's powerful machine learning tools to predict human existence and track their location in real-time.


## Content

- [BrickThru](#brickthru)
  - [Content](#content)
  - [Short description](#short-description)
    - [What's the problem?](#whats-the-problem)
    - [How can technology help?](#how-can-technology-help)
    - [The idea](#the-idea)
  - [Demo video](#demo-video)
  - [The architecture](#the-architecture)
  - [User Flow](#user-flow)
    - [Onboarding](#the-onboarding)
    - [Authentication](#the-authentication)
    - [Crew Management](#crew-management)
    - [Mission Management](#mission-management)
  - [Long description](#long-description)
  - [Project roadmap](#project-roadmap)
  - [Getting started](#getting-started)
  - [Live demo](#live-demo)
  - [Built with](#built-with)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Short description

### What's the problem?

When firefighters arrive at fire scenes, they only have a few seconds to make decisions. Sometimes they don't have enough givens, they may not know whether there are people in the flames to rescue or not. They may not know how many people are there or where they are. They carry the fear of not being fast enough through the mission and the guilt of missing anyone after it.

### How can technology help?

Schools and teachers can continue to engage with their students through virtual classrooms, and even create interactive spaces for classes. As parents face a new situation where they may need to homeschool their children, finding appropriate online resources is important as well.

### The idea

It's imperative that learning and creating can continue when educational institutions have to shift the way they teach in times of crises, such as the COVID-19 pandemic. Providing a set of open source tools, backed by IBM Cloud and Watson Services, will enable educators to more easily make content available for their students.

## Video Demo

[![Watch the video](https://user-images.githubusercontent.com/36399893/142743014-0180588b-ee16-4212-90e3-95bd7b5a78e8.png)](https://youtu.be/X8YdR6K8-n0)

## Pitch Video

[![Watch the video](https://user-images.githubusercontent.com/36399893/142743014-0180588b-ee16-4212-90e3-95bd7b5a78e8.png)](https://youtu.be/nF6zjdPKHig)

## The architecture

![Video transcription/translation app](https://developer.ibm.com/developer/tutorials/cfc-starter-kit-speech-to-text-app-example/images/cfc-covid19-remote-education-diagram-2.png)

1. The user navigates to the site and uploads a video file.
2. Watson Speech to Text processes the audio and extracts the text.
3. Watson Translation (optionally) can translate the text to the desired language.
4. The app stores the translated text as a document within Object Storage.

## User Flow

### Onboarding
![Splash](https://user-images.githubusercontent.com/36399893/142740946-80c42f9e-1218-433a-bd77-75fce2abaca3.png)
![1](https://user-images.githubusercontent.com/36399893/142740924-6535a3aa-a2c6-46bf-9aca-16e7ca470269.png)
![2](https://user-images.githubusercontent.com/36399893/142740929-609cc515-a5d4-400b-80cd-770d0cbb0480.png)
![3](https://user-images.githubusercontent.com/36399893/142740936-b93c746d-512b-47d9-886d-f4b666a73219.png)

### Authentication
![1](https://user-images.githubusercontent.com/36399893/142741098-ccb62bec-1c0e-4412-a014-94ec05fec08e.png)
![2](https://user-images.githubusercontent.com/36399893/142741101-05bcbfed-e7f0-483e-a9d0-a6c42f6dc275.png)
![3](https://user-images.githubusercontent.com/36399893/142741102-691d39f2-3c3a-469d-af33-8cf4211489aa.png)
![4](https://user-images.githubusercontent.com/36399893/142741105-252bfb0e-f973-4235-92d4-d596662486c8.png)

### Crew Management
![1](https://user-images.githubusercontent.com/36399893/142741612-e2487018-c5d5-4433-8e4a-08d04b84b5e9.png)
![2](https://user-images.githubusercontent.com/36399893/142741617-23375d6e-06b5-43a2-8ab3-11ee6465645a.png)
![3](https://user-images.githubusercontent.com/36399893/142741619-55a84083-d73e-4ca4-aa7d-0c1271380c16.png)
![4](https://user-images.githubusercontent.com/36399893/142741622-4761aa63-dccc-4d1a-9923-5e07f5549150.png)
![5](https://user-images.githubusercontent.com/36399893/142741624-410900ae-eb13-4627-8eb7-8d01706ef746.png)

### Mission Management
![1](https://user-images.githubusercontent.com/36399893/142741761-5685eada-a600-4f11-9c1e-65bec860b10b.png)
![2](https://user-images.githubusercontent.com/36399893/142741763-aa0b9ac1-2fb2-4b77-aa9d-5988b81af746.png)
![3](https://user-images.githubusercontent.com/36399893/142741766-fe054fa2-f0ff-482a-bdd1-2a5de0c7d6ef.png)
![4](https://user-images.githubusercontent.com/36399893/142741770-c1e80341-58cf-4588-b81b-f0dee197d28c.png)
![5](https://user-images.githubusercontent.com/36399893/142741852-95993c56-d91f-4cb4-b580-7c2e19ff4a6c.png)
![6](https://user-images.githubusercontent.com/36399893/142741979-e74b430d-8dee-403d-975f-fe31d72ac421.png)



## Long description

[More detail is available here](./docs/DESCRIPTION.md)

## Project roadmap

The project currently does the following things.

- Feature 1
- Feature 2
- Feature 3

It's in a free tier IBM Cloud Kubernetes cluster. In the future we plan to run on Red Hat OpenShift, for example.

See below for our proposed schedule on next steps after Call for Code 2021 submission.

![Roadmap](./images/roadmap.jpg)

## Getting started

- To run the app you can follow the steps in the [BrickThru react-native](./BrickThru) directory.
- In order to prepare and flash the ESP32, you can follow the steps of the [ESP CSI Toolkit](https://stevenmhernandez.github.io/ESP32-CSI-Tool/) we used.

## Live demo

You can find a running system to test at [callforcode.mybluemix.net](http://callforcode.mybluemix.net/).

See the "long description" field in our submission (not in this repo) for the log-in credentials.

## Built with

- [IBM Cloudant](https://cloud.ibm.com/catalog?search=cloudant#search_results) - The NoSQL database used
- [IBM Cloud Functions](https://cloud.ibm.com/catalog?search=cloud%20functions#search_results) - The compute platform for handing logic
- [IBM API Connect](https://cloud.ibm.com/catalog?search=api%20connect#search_results) - The web framework used
- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

<a href="https://github.com/Call-for-Code/Project-Sample/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=Call-for-Code/Project-Sample" />
</a>

- **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Based on [Billie Thompson's README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
