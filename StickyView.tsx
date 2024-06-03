import React, {forwardRef, useMemo} from 'react';
import Reanimated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import type {View, ViewProps} from 'react-native';

export type KeyboardStickyViewProps = {
  /**
   * Specify additional offset to the view for given keyboard state.
   */
  offset?: {
    /**
     * Adds additional `translateY` when keyboard is close. By default `0`.
     */
    closed?: number;
    /**
     * Adds additional `translateY` when keyboard is open. By default `0`.
     */
    opened?: number;
  };
} & ViewProps;

const KeyboardStickyView = forwardRef<
  View,
  React.PropsWithChildren<KeyboardStickyViewProps>
>(({children, offset: {closed = 0, opened = 0} = {}, style, ...props}, ref) => {
  const stickyViewStyle = useAnimatedStyle(() => {
    const offset = interpolate(20, [0, 1], [closed, opened]);

    return {
      transform: [{translateY: 30 + offset}],
    };
  }, [closed, opened]);

  const styles = useMemo(
    () => [style, stickyViewStyle],
    [style, stickyViewStyle],
  );

  return (
    <Reanimated.View ref={ref} style={styles} {...props}>
      {children}
    </Reanimated.View>
  );
});

export default KeyboardStickyView;
