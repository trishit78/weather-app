import conf from '../../conf/conf'


export const url = conf.geoUrl;
export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':conf.rapidApi ,
		'X-RapidAPI-Host': conf.rapidApiHost 
	}
};



export const WEATHER_API = conf.weatherApi;
export const API_KEY = conf.apiKey;


