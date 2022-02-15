<p align="center">
  <h1 align="center"> <code>react-native-gauge</code> </h1>
</p>
<p align="center">
    <a href="https://github.com/cwnicoletti/react-native-gauge/blob/main/LICENSE">
        <img src="https://img.shields.io/npm/l/@react-native-community/slider.svg" alt="License" />
    </a>
    <a href="https://github.com/cwnicoletti/react-native-gauge/pulls">
        <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="prswelcome" />
    </a>
</p>
<p align="center">
  React Native component used to display a gauge for metrics or purely aesthetic purposes 
</p>
<p align="center">
  <img width=300 src="https://user-images.githubusercontent.com/56566033/153973217-a1f4cc50-a53b-4946-8d1f-0403fe018e64.gif" alt="gauge gif" />
 </p>

### Properties

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
