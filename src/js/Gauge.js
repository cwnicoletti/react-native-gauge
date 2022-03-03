import React, {useRef} from 'react';
import {Animated, Platform, StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';
import MaskedView from '@react-native-masked-view/masked-view';
import {withAnchorPoint} from 'react-native-anchor-point';
import useDidMountEffect from '../helper/useDidMountEffect';
import {LinearGradient} from 'expo-linear-gradient';

const CIRCLE = Math.PI * 2;

const Gauge = (props) => {
  const style = StyleSheet.compose(styles.arc, props.style);

  const {
    size,
    progress,
    animated,
    overallGradient,
    addTriangleTip,
    triangleTipWidth,
    triangleTipHeight,
    triangleNeedle,
    addCircle,
    circleSize,
    addTriangleBase,
    triangleBaseWidth,
    triangleBaseHeight,
    translateBaseShapeY,
    alwaysUseEndAngle,
    endAngle,
    unfilledEndAngle,
    rotate,
    thickness,
    borderWidth,
    needleWidth,
    needleHeight,
    needleBorderRadius,
    translateNeedleY,
    color,
    borderColor,
    needleColor,
    unfilledColor,
    circleColor,
    triangleTipColor,
    triangleBaseColor,
    gradientStyle,
  } = props;

  const circleProgressInDegrees =
    progress * CIRCLE * unfilledEndAngle * 57.29578;

  const prevProgressRef = useRef();
  useDidMountEffect(() => {
    if (animated) {
      prevProgressRef.current = circleProgressInDegrees;
      moveNeedleFn();
    }
  }, [progress, unfilledEndAngle]);

  const needleAnim = useRef(new Animated.Value(0)).current;

  const rotateNeedle = needleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [
      `${
        prevProgressRef.current
          ? prevProgressRef.current
          : circleProgressInDegrees
      }deg`,
      `${circleProgressInDegrees}deg`,
    ],
  });

  const moveNeedleFn = () => {
    Animated.spring(needleAnim, {
      toValue: 1,
      bounciness: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      {overallGradient ? (
        <View
          style={{
            ...styles.maskContainer,
            height: size,
            width: size,
          }}>
          <MaskedView
            maskElement={
              <Progress.Circle
                size={size}
                progress={progress}
                alwaysUseEndAngle={alwaysUseEndAngle}
                endAngle={endAngle}
                unfilledEndAngle={unfilledEndAngle}
                thickness={thickness}
                borderWidth={borderWidth}
                color={color}
                borderColor={borderColor}
                unfilledColor={unfilledColor}
                indeterminate={false}
                style={{...style, transform: [{rotate: rotate}]}}>
                <Animated.View
                  style={[
                    {
                      position: 'absolute',
                      width: triangleNeedle ? 0 : needleWidth,
                      height: triangleNeedle ? 0 : needleHeight,
                      top: size / 2 - needleHeight - translateNeedleY / 2,
                      borderTopWidth: 0,
                      borderLeftWidth: triangleNeedle ? needleWidth : 0,
                      borderRightWidth: triangleNeedle ? needleWidth : 0,
                      borderBottomWidth: triangleNeedle ? needleHeight : 0,
                      backgroundColor: triangleNeedle
                        ? 'transparent'
                        : needleColor,
                      borderRadius: triangleNeedle ? 0 : needleBorderRadius,
                      borderStyle: 'solid',
                      borderLeftColor: 'transparent',
                      borderRightColor: 'transparent',
                      borderBottomColor: needleColor,
                    },
                    withAnchorPoint(
                      {
                        transform: [
                          {
                            rotate: prevProgressRef.current
                              ? rotateNeedle
                              : `${circleProgressInDegrees}deg`,
                          },
                          {translateY: -translateNeedleY},
                        ],
                      },
                      {x: 0.5, y: 1},
                      {
                        width: needleWidth,
                        height: needleHeight + translateNeedleY,
                      },
                    ),
                  ]}>
                  {addTriangleTip && (
                    <View
                      style={{
                        alignSelf: 'center',
                        top: -triangleTipHeight,
                        borderTopWidth: 0,
                        borderStyle: 'solid',
                        borderLeftColor: 'transparent',
                        borderRightColor: 'transparent',
                        borderBottomColor: triangleTipColor,
                        borderLeftWidth: triangleTipWidth,
                        borderRightWidth: triangleTipWidth,
                        borderBottomWidth: triangleTipHeight,
                      }}
                    />
                  )}
                  {addTriangleBase && (
                    <Animated.View
                      style={{
                        position: 'absolute',
                        alignSelf: 'center',
                        top:
                          triangleBaseHeight +
                          needleHeight / 2 -
                          1 -
                          translateBaseShapeY,
                        borderTopWidth: 0,
                        borderStyle: 'solid',
                        borderLeftColor: 'transparent',
                        borderRightColor: 'transparent',
                        borderBottomColor: triangleBaseColor,
                        borderLeftWidth: triangleBaseWidth,
                        borderRightWidth: triangleBaseWidth,
                        borderBottomWidth: triangleBaseHeight,
                      }}
                    />
                  )}
                </Animated.View>
                {addCircle && (
                  <Animated.View
                    style={{
                      position: 'absolute',
                      height: circleSize,
                      width: circleSize,
                      borderRadius: circleSize / 2,
                      backgroundColor: circleColor,
                      transform: [
                        {
                          rotate: prevProgressRef.current
                            ? rotateNeedle
                            : `${circleProgressInDegrees}deg`,
                        },
                      ],
                    }}
                  />
                )}
              </Progress.Circle>
            }>
            <LinearGradient
              colors={overallGradient}
              style={{
                ...gradientStyle,
                height: size,
                width: size,
              }}
            />
          </MaskedView>
        </View>
      ) : (
        <Progress.Circle
          size={size}
          progress={progress}
          alwaysUseEndAngle={alwaysUseEndAngle}
          endAngle={endAngle}
          unfilledEndAngle={unfilledEndAngle}
          thickness={thickness}
          borderWidth={borderWidth}
          color={color}
          borderColor={borderColor}
          unfilledColor={unfilledColor}
          indeterminate={false}
          style={{...style, transform: [{rotate: rotate}]}}>
          <Animated.View
            style={[
              {
                position: 'absolute',
                width: triangleNeedle ? 0 : needleWidth,
                height: triangleNeedle ? 0 : needleHeight,
                top: size / 2 - needleHeight - translateNeedleY / 2,
                borderTopWidth: 0,
                borderLeftWidth: triangleNeedle ? needleWidth : 0,
                borderRightWidth: triangleNeedle ? needleWidth : 0,
                borderBottomWidth: triangleNeedle ? needleHeight : 0,
                backgroundColor: triangleNeedle ? 'transparent' : needleColor,
                borderRadius: triangleNeedle ? 0 : needleBorderRadius,
                borderStyle: 'solid',
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: needleColor,
              },
              withAnchorPoint(
                {
                  transform: [
                    {
                      rotate: prevProgressRef.current
                        ? rotateNeedle
                        : `${circleProgressInDegrees}deg`,
                    },
                    {translateY: -translateNeedleY},
                  ],
                },
                {x: 0.5, y: 1},
                {
                  width: needleWidth,
                  height: needleHeight + translateNeedleY,
                },
              ),
            ]}>
            {addTriangleTip && (
              <View
                style={{
                  alignSelf: 'center',
                  top: -triangleTipHeight,
                  borderTopWidth: 0,
                  borderStyle: 'solid',
                  borderLeftColor: 'transparent',
                  borderRightColor: 'transparent',
                  borderBottomColor: triangleTipColor,
                  borderLeftWidth: triangleTipWidth,
                  borderRightWidth: triangleTipWidth,
                  borderBottomWidth: triangleTipHeight,
                }}
              />
            )}
          </Animated.View>
          {addCircle && (
            <Animated.View
              style={{
                position: 'absolute',
                height: circleSize,
                width: circleSize,
                borderRadius: circleSize / 2,
                backgroundColor: circleColor,
                transform: [
                  {
                    rotate: prevProgressRef.current
                      ? rotateNeedle
                      : `${circleProgressInDegrees}deg`,
                  },
                ],
              }}
            />
          )}
        </Progress.Circle>
      )}
    </View>
  );
};

Gauge.defaultProps = {
  size: 30,
  progress: 0.5,
  overallGradient: false,
  addTriangleTip: false,
  triangleTipWidth: 2,
  triangleTipHeight: 4,
  triangleNeedle: false,
  addCircle: false,
  circleSize: 15,
  addTriangleBase: false,
  triangleBaseWidth: 5,
  triangleBaseHeight: 20,
  translateBaseShapeY: 0,
  animated: true,
  alwaysUseEndAngle: true,
  endAngle: 0.9,
  unfilledEndAngle: 0.9,
  rotate: '-90deg',
  thickness: 6,
  borderWidth: 1,
  needleWidth: 2,
  needleHeight: 45,
  needleBorderRadius: 0,
  translateNeedleY: 0,
  color: 'blue',
  borderColor: 'blue',
  needleColor: 'blue',
  unfilledColor: 'grey',
  circleColor: 'blue',
  triangleTipColor: 'blue',
  triangleBaseColor: 'blue',
  gradientStyle: {},
};

let styles;
if (Platform.OS === 'ios') {
  styles = StyleSheet.create({
    arc: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    maskContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
} else {
  styles = StyleSheet.create({
    arc: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    maskContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}

export default Gauge;
