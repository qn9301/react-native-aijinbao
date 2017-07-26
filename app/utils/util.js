import {
	Dimensions,
	PixelRatio
} from 'react-native';

const BASE_WIN_HEIGHT = 667;
const BASE_WIN_WIDTH = 375;

export const {deviceWidth, deviceHeight} = Dimensions.get('window');

export class util {

	static getWidth(w){
		return (w / BASE_WIN_WIDTH) * deviceWidth;
	}

	static getHeight(h){
		return (w / BASE_WIN_WIDTH) * deviceHeight;
	}
}