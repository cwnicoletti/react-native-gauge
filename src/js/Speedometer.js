// Needed for babel compile
import React, {useEffect, useRef} from 'react';

import {Animated, Platform, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';
import {withAnchorPoint} from 'react-native-anchor-point';

// import {ViewPropTypes} from 'react-native';

// type Props = Readonly<{
//   style?: typeof ViewPropTypes.style,
//   size?: number,
// }>;

const Speedometer = (props) => {
  // const style = StyleSheet.compose(
  //   styles.speedometer,
  //   props.style,
  // );

  const {progress, animated, size, needlePointerWidth} = props;

  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = progress;
    moveNeedleFn();
  }, [progress]);

  const moveNeedle = useRef(new Animated.Value(0)).current;

  const moveNeedleFn = () => {
    Animated.spring(moveNeedle, {
      toValue: progress * 6.28,
      bounciness: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Progress.Circle
      size={props.size ? props.size : 30}
      progress={props.progress ? props.progress : 0}
      thickness={props.thickness}
      color={props.color}
      borderWidth={props.borderWidth}
      style={{alignItems: 'center', transform: [{rotate: '180deg'}]}}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            width: needlePointerWidth,
            height: size / 2,
            backgroundColor: 'blue',
          },
          withAnchorPoint(
            {transform: [{rotateZ: moveNeedle}]},
            {x: 0.5, y: 1},
            {width: needlePointerWidth, height: size / 2},
          ),
        ]}
      />
    </Progress.Circle>
  );
};

let styles;

if (Platform.OS === 'ios') {
  styles = StyleSheet.create({
    speedometer: {
      height: 40,
    },
  });
} else {
  styles = StyleSheet.create({
    speedometer: {},
  });
}

export default Speedometer;
