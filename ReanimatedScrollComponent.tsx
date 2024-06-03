import React, {ReactNode} from 'react';
import Animated from 'react-native-reanimated';

type IProps = {
  children: ReactNode;
};

const ReanimatedScrollComponent: React.FC<IProps> = ({children}) => {
  return (
    <Animated.ScrollView
      style={{flex: 1, backgroundColor: '#D3D3D3', paddingHorizontal: 20}}>
      {children}
    </Animated.ScrollView>
  );
};

export default ReanimatedScrollComponent;
