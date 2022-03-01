<p align="center">
  <h1 align="center"> <code>react-native-gauge</code> </h1>
</p>
<p align="center">
    <a href="https://www.npmjs.com/package/react-native-gauge"><img src="https://img.shields.io/npm/v/react-native-gauge" alt="Latest version released on npmjs" /></a>
    <a href="https://app.circleci.com/pipelines/github/cwnicoletti/react-native-gauge"><img src="https://img.shields.io/circleci/build/github/cwnicoletti/react-native-gauge" alt="CircleCI Build Status" /></a>
    <a href="https://app.codacy.com/gh/cwnicoletti/react-native-gauge/dashboard?branch=main"><img src="https://img.shields.io/codacy/grade/ea132b46de7f4194b2eb8f3b6f5d0d85" alt="Codacy Grade" /></a>
    <img src="https://img.shields.io/badge/platform-ios-lightgrey.svg" alt="Supported platforms" />
</p>
<p align="center">
  React Native component used to display a gauge for metrics or purely aesthetic purposes 
</p>
<p align="center">
  <img width=300 src="https://user-images.githubusercontent.com/56566033/153973217-a1f4cc50-a53b-4946-8d1f-0403fe018e64.gif" alt="gauge gif" />
 </p>

Installation & Usage
--------------------

To install this module `cd` to your project directory and enter the following command:
```
npm install react-native-gauge
```

The following code presents the basic usage scenario of this library:
```javascript
import Gauge from "react-native-gauge";

<Gauge
  size={75}
  progress={0.5}
  animated={true}
  alwaysUseEndAngle={true}
  endAngle={0}
  unfilledEndAngle={0.5}
  thickness={4}
  borderWidth={1}
  needleWidth={3}
  needleHeight={20}
  needleBorderRadius={25}
/>
```

Properties
----------

| Prop                                 | Description                                                                  | Default                |
| ------------------------------------ | ---------------------------------------------------------------------------- | ---------------------- |
| **`size`**                           | Change the size of the overall gauge                                         | `30`                   |
| **`progress`**                       | Determines the progress of the gauge                                         | `0.5`                  |
| **`overallGradient`**                | Applies a gradient color across the whole gauge (e.g. ["red", "black"])      | `false`                |
| **`addTriangleTip`**                 | Boolean value that enables a triangle tip at the top of the needle           | `false`                |
| **`triangleTipWidth`**               | Width of the triangle tip                                                    | `2`                    |
| **`triangleTipHeight`**              | Height of the triangle tip                                                   | `4`                    |
| **`triangleNeedle`**                 | Turns the needle into a triangle                                             | `false`                |
| **`addCircle`**                      | Adds a circle to the middle of the circle/arc                                | `false`                |
| **`circleSize`**                     | Size of the cricle                                                           | `15`                   |
| **`animated`**                       | Boolean stating whether to make the gauge animated                           | `true`                 |
| **`alwaysUseEndAngle`**              | Enables the border end angle to be adjusted (hack around Progress component) | `true`                 |
| **`endAngle`**                       | Determines the end angle (just for the border for right now)                 | `0.9`                  |
| **`unfilledEndAngle`**               | Determines the unfilled end angle portion of the circle/arc                  | `0.9`                  |
| **`rotate`**                         | Rotates the gauge                                                            | `'-90deg'`             |
| **`thickness`**                      | Determines circle/arc thickness                                              | `6`                    |
| **`borderWidth`**                    | Determines border width                                                      | `1`                    |
| **`needleWidth`**                    | Determines the width of the needle                                           | `2`                    |
| **`needleHeight`**                   | Determines the height of the needle                                          | `45`                   |
| **`needleBorderRadius`**             | Determines the needle border radius                                          | `0`                    |
| **`translateNeedleY`**               | Moves the needle up/down relative to the center                              | `0`                    |
| **`color`**                          | Determines color of the circle/arc                                           | `blue`                 |
| **`borderColor`**                    | Determines the border color of the cricle/arc                                | `blue`                 |
| **`needleColor`**                    | Determines the needle color                                                  | `blue`                 |
| **`unfilledColor`**                  | Determines the unfilled portion of the circle/arc's color                    | `grey`                 |
| **`circleColor`**                    | Determines the circle/arc's color                                            | `blue`                 |
| **`triangleTipColor`**               | Determines the triangle tip color                                            | `blue`                 |
| **`gradientStyle`**                  | Style the gradient mask, if there is an overallGradient                      | `{}`                   |

Testing your code
-----------------

Before making a pull request, run: `npm run test` in the root directory

Testing is supported by [jest](https://jestjs.io/) and test files (".test.js") can be found in "\_\_tests\_\_" directories

Testing also checks for formatting through the tool [ESLint](https://eslint.org/) and enforces the coding style of [Prettier](https://prettier.io/) specified in the [Prettier config file](https://github.com/cwnicoletti/react-native-gauge/blob/main/prettier.config.js).

On top of that testing also runs through a static type checker called [Flow](https://flow.org/). 

All of these tests can be ran locally, but with every commit, [CircleCI](https://circleci.com/product/) will automatically run these tests in a clean container for you.

Contributions
-------------
All contributions should be referenced to the [CONTRIBUTIONS](https://github.com/cwnicoletti/react-native-gauge/blob/main/CONTRIBUTING.md) file before making a pull request.
