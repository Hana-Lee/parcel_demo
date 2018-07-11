import _ from 'lodash';
import socketConfig from './config/webSocketConfig';
import MainView from './views/main';
import '../style/app.css';

export default class TeamworkApp {
	constructor() {
		this._name = 'team work application';
		console.log('initialize teamwork app');
		console.log('lodash versin : ', _.VERSION);
		socketConfig.init();

		this._mainView = new MainView();
	}

	getName() {
		console.log(`name is : ${this._name}`);
	}
}
